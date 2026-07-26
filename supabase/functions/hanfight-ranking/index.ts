import { createClient } from "npm:@supabase/supabase-js@2";

const GAME_ORIGIN = "https://rivoljuny.github.io";
const CURRENT_SEASON = Deno.env.get("HANFIGHT_RANKING_SEASON") ?? "2026-S1";
const CURRENT_VERSION = Deno.env.get("HANFIGHT_GAME_VERSION") ?? "20260726-01";
const CHARACTER_IDS = new Set(["geontaek", "sangil", "jiin", "seunggwan", "homin"]);
const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

const supabaseUrl = Deno.env.get("SUPABASE_URL");
const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
if (!supabaseUrl || !serviceRoleKey) {
  throw new Error("Supabase server environment is not configured.");
}

const admin = createClient(supabaseUrl, serviceRoleKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});

function corsHeaders(request: Request) {
  const origin = request.headers.get("origin");
  return {
    "Access-Control-Allow-Origin": origin === GAME_ORIGIN ? origin : GAME_ORIGIN,
    "Access-Control-Allow-Headers": "authorization, apikey, content-type",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Content-Type": "application/json; charset=utf-8",
    "Vary": "Origin",
  };
}

function json(request: Request, body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: corsHeaders(request),
  });
}

function isAllowedOrigin(request: Request) {
  const origin = request.headers.get("origin");
  return !origin || origin === GAME_ORIGIN;
}

function cleanNickname(value: unknown) {
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u001f\u007f]/g, "").trim().slice(0, 12);
}

function integer(value: unknown, min: number, max: number) {
  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed < min || parsed > max) return null;
  return parsed;
}

async function hashIp(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    ?? request.headers.get("cf-connecting-ip")
    ?? "unknown";
  const salt = Deno.env.get("HANFIGHT_IP_SALT") ?? CURRENT_SEASON;
  const bytes = new TextEncoder().encode(`${salt}:${ip}`);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

async function startRun(request: Request, body: Record<string, unknown>) {
  const clientId = typeof body.client_id === "string" ? body.client_id : "";
  const gameVersion = typeof body.game_version === "string" ? body.game_version : "";
  if (!UUID_PATTERN.test(clientId)) return json(request, { error: "invalid_client" }, 400);
  if (gameVersion !== CURRENT_VERSION) {
    return json(request, { error: "version_mismatch", expected: CURRENT_VERSION }, 409);
  }

  const oneMinuteAgo = new Date(Date.now() - 60_000).toISOString();
  const { count, error: countError } = await admin
    .from("hanfight_runs")
    .select("id", { count: "exact", head: true })
    .eq("client_id", clientId)
    .gte("started_at", oneMinuteAgo);
  if (countError) return json(request, { error: "storage_unavailable" }, 503);
  if ((count ?? 0) >= 8) return json(request, { error: "rate_limited" }, 429);

  const { data, error } = await admin
    .from("hanfight_runs")
    .insert({
      client_id: clientId,
      season: CURRENT_SEASON,
      game_version: CURRENT_VERSION,
      status: "active",
      ip_hash: await hashIp(request),
    })
    .select("id,started_at")
    .single();

  if (error || !data) return json(request, { error: "run_start_failed" }, 503);
  return json(request, {
    run_id: data.id,
    started_at: data.started_at,
    season: CURRENT_SEASON,
    game_version: CURRENT_VERSION,
  }, 201);
}

async function finishRun(request: Request, body: Record<string, unknown>) {
  const runId = typeof body.run_id === "string" ? body.run_id : "";
  const clientId = typeof body.client_id === "string" ? body.client_id : "";
  const nickname = cleanNickname(body.nickname);
  const characterId = typeof body.character_id === "string" ? body.character_id : "";
  const stage = integer(body.stage, 1, 999);
  const bossKills = integer(body.boss_kills, 0, 998);
  const kills = integer(body.kills, 0, 999_999);
  const playerLevel = integer(body.player_level, 1, 999);
  const survivalSeconds = integer(body.survival_seconds, 0, 999_999);

  if (!UUID_PATTERN.test(runId) || !UUID_PATTERN.test(clientId) || !nickname) {
    return json(request, { error: "invalid_identity" }, 400);
  }
  if (!CHARACTER_IDS.has(characterId)
    || stage === null
    || bossKills === null
    || kills === null
    || playerLevel === null
    || survivalSeconds === null) {
    return json(request, { error: "invalid_result" }, 400);
  }

  const { data: run, error: runError } = await admin
    .from("hanfight_runs")
    .select("id,client_id,status,started_at,game_version")
    .eq("id", runId)
    .eq("client_id", clientId)
    .maybeSingle();

  if (runError) return json(request, { error: "storage_unavailable" }, 503);
  if (!run || run.status !== "active") return json(request, { error: "run_not_active" }, 409);
  if (run.game_version !== CURRENT_VERSION) return json(request, { error: "version_mismatch" }, 409);

  const wallSeconds = Math.max(0, Math.floor((Date.now() - Date.parse(run.started_at)) / 1000));
  const plausible = wallSeconds >= 2
    && wallSeconds <= 43_200
    && survivalSeconds <= wallSeconds + 8
    && bossKills <= stage
    && stage <= bossKills + 1
    && kills >= bossKills
    && kills <= survivalSeconds * 120 + 100
    && playerLevel <= kills + 25;

  if (!plausible) {
    await admin.from("hanfight_runs").update({
      status: "rejected",
      finished_at: new Date().toISOString(),
    }).eq("id", runId).eq("status", "active");
    return json(request, { error: "implausible_result" }, 422);
  }

  const score = BigInt(stage) * 1_000_000_000_000_000n
    + BigInt(bossKills) * 1_000_000_000_000n
    + BigInt(kills) * 1_000_000n
    + BigInt(Math.min(survivalSeconds, 999_999));

  const { data, error } = await admin
    .from("hanfight_runs")
    .update({
      status: "finished",
      nickname,
      character_id: characterId,
      stage,
      boss_kills: bossKills,
      kills,
      player_level: playerLevel,
      survival_seconds: survivalSeconds,
      score: score.toString(),
      finished_at: new Date().toISOString(),
    })
    .eq("id", runId)
    .eq("status", "active")
    .select("id")
    .maybeSingle();

  if (error || !data) return json(request, { error: "run_finish_failed" }, 503);
  return json(request, { ok: true, season: CURRENT_SEASON });
}

async function listRanking(request: Request) {
  const url = new URL(request.url);
  const scope = url.searchParams.get("scope") === "character" ? "character" : "overall";
  const characterId = url.searchParams.get("character_id") ?? "";
  const clientId = url.searchParams.get("client_id") ?? "";
  const limit = Math.min(15, Math.max(1, Number(url.searchParams.get("limit")) || 15));

  if (scope === "character" && !CHARACTER_IDS.has(characterId)) {
    return json(request, { error: "invalid_character" }, 400);
  }

  let query = admin
    .from("hanfight_runs")
    .select("client_id,nickname,character_id,stage,boss_kills,kills,player_level,survival_seconds,created_at")
    .eq("season", CURRENT_SEASON)
    .eq("status", "finished")
    .order("stage", { ascending: false })
    .order("boss_kills", { ascending: false })
    .order("kills", { ascending: false })
    .order("survival_seconds", { ascending: false })
    .order("created_at", { ascending: true })
    .limit(2000);

  if (scope === "character") query = query.eq("character_id", characterId);
  const { data, error } = await query;
  if (error) return json(request, { error: "ranking_unavailable" }, 503);

  const ranked = data ?? [];

  const ownIndex = UUID_PATTERN.test(clientId)
    ? ranked.findIndex((row) => row.client_id === clientId)
    : -1;
  const entries = ranked.slice(0, limit).map((row, index) => ({
    rank: index + 1,
    nickname: row.nickname,
    character_id: row.character_id,
    stage: row.stage,
    boss_kills: row.boss_kills,
    kills: row.kills,
    player_level: row.player_level,
    survival_seconds: row.survival_seconds,
    is_me: row.client_id === clientId,
  }));

  const own = ownIndex < 0 ? null : {
    rank: ownIndex + 1,
    nickname: ranked[ownIndex].nickname,
    character_id: ranked[ownIndex].character_id,
    stage: ranked[ownIndex].stage,
    boss_kills: ranked[ownIndex].boss_kills,
    kills: ranked[ownIndex].kills,
    player_level: ranked[ownIndex].player_level,
    survival_seconds: ranked[ownIndex].survival_seconds,
    is_me: true,
  };

  return json(request, {
    season: CURRENT_SEASON,
    scope,
    character_id: scope === "character" ? characterId : null,
    entries,
    own,
  });
}

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders(request) });
  }
  if (!isAllowedOrigin(request)) return json(request, { error: "origin_not_allowed" }, 403);

  try {
    if (request.method === "GET") return await listRanking(request);
    if (request.method !== "POST") return json(request, { error: "method_not_allowed" }, 405);
    const body = await request.json() as Record<string, unknown>;
    if (body.action === "start") return await startRun(request, body);
    if (body.action === "finish") return await finishRun(request, body);
    return json(request, { error: "invalid_action" }, 400);
  } catch (error) {
    console.error(error);
    return json(request, { error: "server_error" }, 500);
  }
});
