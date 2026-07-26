create extension if not exists pgcrypto;

create table if not exists public.hanfight_runs (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null,
  season text not null,
  game_version text not null,
  status text not null default 'active'
    check (status in ('active', 'finished', 'rejected')),
  nickname text,
  character_id text,
  stage integer,
  boss_kills integer,
  kills integer,
  player_level integer,
  survival_seconds integer,
  score bigint,
  ip_hash text,
  started_at timestamptz not null default now(),
  finished_at timestamptz,
  created_at timestamptz not null default now()
);

alter table public.hanfight_runs enable row level security;

revoke all on table public.hanfight_runs from anon, authenticated;
grant all on table public.hanfight_runs to service_role;

create index if not exists hanfight_runs_leaderboard_idx
  on public.hanfight_runs (
    season,
    status,
    stage desc,
    boss_kills desc,
    kills desc,
    survival_seconds desc,
    created_at asc
  );

create index if not exists hanfight_runs_client_idx
  on public.hanfight_runs (client_id, season, created_at desc);

create index if not exists hanfight_runs_active_idx
  on public.hanfight_runs (client_id, status, started_at desc);
