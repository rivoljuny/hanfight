(() => {
  const CONFIG = {
    endpoint: "https://wfuamjbivcwzjxsptytv.supabase.co/functions/v1/hanfight-ranking",
    publishableKey: "sb_publishable_xx98T4HB410URRLGk2OT-A_YuX2fhhk",
    season: "2026-S1",
    gameVersion: "20260726-01",
    limit: 15,
  };
  const CHARACTER_NAMES = {
    geontaek: "건택",
    sangil: "상일",
    jiin: "지인",
    seunggwan: "승관",
    homin: "호민",
  };
  const NICKNAME_KEY = "hanFightRankingNickname";
  const CLIENT_ID_KEY = "hanFightRankingClientId";

  const overlay = document.getElementById("rankingOverlay");
  const openButton = document.getElementById("rankingOpenBtn");
  const closeButton = document.getElementById("rankingCloseBtn");
  const list = document.getElementById("rankingList");
  const own = document.getElementById("rankingOwn");
  const season = document.getElementById("rankingSeason");
  const characterSelect = document.getElementById("rankingCharacterSelect");
  const characterFilter = document.querySelector(".ranking-character-filter");
  const tabs = [...document.querySelectorAll("[data-ranking-scope]")];
  const gameOverPanel = document.getElementById("gameOverRanking");
  const nicknameInput = document.getElementById("rankingNickname");
  const submitButton = document.getElementById("rankingSubmitBtn");
  const submitStatus = document.getElementById("rankingSubmitStatus");

  let scope = "overall";
  let runId = null;
  let startPromise = null;
  let runEligible = false;
  let submitted = false;
  let resultSnapshot = null;
  let requestSerial = 0;
  const clientId = loadClientId();

  if (season) season.textContent = CONFIG.season;
  if (characterSelect) {
    characterSelect.innerHTML = Object.entries(CHARACTER_NAMES)
      .map(([id, name]) => `<option value="${id}">${name}</option>`)
      .join("");
  }
  if (nicknameInput) nicknameInput.value = readStorage(NICKNAME_KEY) ?? "";

  if (openButton) openButton.addEventListener("click", openRanking);
  if (closeButton) closeButton.addEventListener("click", closeRanking);
  if (overlay) {
    overlay.addEventListener("pointerdown", (event) => {
      if (event.target === overlay) closeRanking();
    });
  }
  for (const tab of tabs) {
    tab.addEventListener("click", () => {
      scope = tab.dataset.rankingScope === "character" ? "character" : "overall";
      syncControls();
      loadRanking();
    });
  }
  if (characterSelect) characterSelect.addEventListener("change", loadRanking);
  if (submitButton) submitButton.addEventListener("click", submitResult);
  if (nicknameInput) {
    nicknameInput.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;
      event.preventDefault();
      event.stopPropagation();
      submitResult();
    });
  }
  addEventListener("keydown", (event) => {
    if (overlay && !overlay.classList.contains("hidden")) {
      event.stopImmediatePropagation();
      if (event.key === "Escape") {
        event.preventDefault();
        closeRanking();
      }
      return;
    }
    if (event.target === nicknameInput) event.stopImmediatePropagation();
  }, true);

  function readStorage(key) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  }

  function writeStorage(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch {
      // Ranking still works for the current page when storage is unavailable.
    }
  }

  function createUuid() {
    if (crypto.randomUUID) return crypto.randomUUID();
    const bytes = crypto.getRandomValues(new Uint8Array(16));
    bytes[6] = (bytes[6] & 0x0f) | 0x40;
    bytes[8] = (bytes[8] & 0x3f) | 0x80;
    const hex = [...bytes].map((value) => value.toString(16).padStart(2, "0")).join("");
    return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
  }

  function loadClientId() {
    const saved = readStorage(CLIENT_ID_KEY);
    if (/^[0-9a-f-]{36}$/i.test(saved ?? "")) return saved;
    const created = createUuid();
    writeStorage(CLIENT_ID_KEY, created);
    return created;
  }

  async function api(path = "", options = {}) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 9000);
    try {
      const response = await fetch(`${CONFIG.endpoint}${path}`, {
        ...options,
        cache: "no-store",
        signal: controller.signal,
        headers: {
          apikey: CONFIG.publishableKey,
          Authorization: `Bearer ${CONFIG.publishableKey}`,
          ...(options.body ? { "Content-Type": "application/json" } : {}),
          ...(options.headers ?? {}),
        },
      });
      const body = await response.json().catch(() => ({}));
      if (!response.ok) {
        const error = new Error(body.error || `http_${response.status}`);
        error.code = body.error;
        throw error;
      }
      return body;
    } finally {
      clearTimeout(timeout);
    }
  }

  function startRun({ characterId } = {}) {
    runId = null;
    submitted = false;
    resultSnapshot = null;
    runEligible = Object.hasOwn(CHARACTER_NAMES, characterId);
    setSubmitStatus("", "");
    if (!runEligible) return;
    startPromise = api("", {
      method: "POST",
      body: JSON.stringify({
        action: "start",
        client_id: clientId,
        game_version: CONFIG.gameVersion,
      }),
    }).then((data) => {
      runId = data.run_id;
      return runId;
    }).catch((error) => {
      console.warn("Ranking run could not start:", error);
      runEligible = false;
      return null;
    });
  }

  function markIneligible() {
    runEligible = false;
  }

  function showGameOver(result) {
    resultSnapshot = result;
    runEligible = runEligible && result?.eligible !== false;
    if (gameOverPanel) gameOverPanel.classList.remove("hidden");
    if (nicknameInput) nicknameInput.value = readStorage(NICKNAME_KEY) ?? nicknameInput.value;
    if (submitButton) {
      submitButton.disabled = submitted || !runEligible;
      submitButton.textContent = submitted ? "등록 완료" : "기록 등록";
    }
    if (!runEligible) {
      setSubmitStatus(result?.eligible === false
        ? "테스트 기능을 사용한 기록은 랭킹에 등록되지 않습니다."
        : "랭킹 서버가 준비되지 않아 이번 기록을 등록할 수 없습니다.", "error");
    } else {
      setSubmitStatus("닉네임은 이 브라우저에 저장됩니다.", "");
    }
  }

  async function submitResult() {
    if (!runEligible || submitted || !resultSnapshot) return;
    const nickname = (nicknameInput?.value ?? "").replace(/[\u0000-\u001f\u007f]/g, "").trim().slice(0, 12);
    if (!nickname) {
      setSubmitStatus("닉네임을 입력해주세요.", "error");
      nicknameInput?.focus();
      return;
    }
    if (submitButton) submitButton.disabled = true;
    setSubmitStatus("기록을 확인하고 있습니다.", "");
    writeStorage(NICKNAME_KEY, nickname);

    try {
      if (startPromise) await startPromise;
      if (!runId) throw new Error("run_not_started");
      await api("", {
        method: "POST",
        body: JSON.stringify({
          action: "finish",
          run_id: runId,
          client_id: clientId,
          nickname,
          character_id: resultSnapshot.characterId,
          stage: resultSnapshot.stage,
          boss_kills: resultSnapshot.bossKills,
          kills: resultSnapshot.kills,
          player_level: resultSnapshot.playerLevel,
          survival_seconds: resultSnapshot.survivalSeconds,
        }),
      });
      submitted = true;
      if (submitButton) submitButton.textContent = "등록 완료";
      setSubmitStatus("현재 시즌 랭킹에 기록을 등록했습니다.", "success");
    } catch (error) {
      console.warn("Ranking submission failed:", error);
      if (submitButton) submitButton.disabled = false;
      setSubmitStatus(errorMessage(error), "error");
    }
  }

  function errorMessage(error) {
    if (error?.name === "AbortError") return "랭킹 서버 응답이 늦습니다. 잠시 후 다시 시도해주세요.";
    if (error?.code === "version_mismatch") return "게임이 업데이트되었습니다. 새로고침 후 다시 도전해주세요.";
    if (error?.code === "rate_limited") return "짧은 시간에 너무 많은 기록이 요청되었습니다.";
    if (error?.code === "implausible_result") return "기록 검증을 통과하지 못했습니다.";
    if (error?.message === "run_not_started") return "이번 플레이의 랭킹 기록이 시작되지 않았습니다.";
    return "랭킹 서버에 연결하지 못했습니다.";
  }

  function setSubmitStatus(message, state) {
    if (!submitStatus) return;
    submitStatus.textContent = message;
    submitStatus.classList.toggle("is-error", state === "error");
    submitStatus.classList.toggle("is-success", state === "success");
  }

  function openRanking() {
    if (!overlay) return;
    if (resultSnapshot?.characterId && characterSelect) characterSelect.value = resultSnapshot.characterId;
    overlay.classList.remove("hidden");
    syncControls();
    loadRanking();
  }

  function closeRanking() {
    if (overlay) overlay.classList.add("hidden");
  }

  function syncControls() {
    for (const tab of tabs) {
      const active = tab.dataset.rankingScope === scope;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", active ? "true" : "false");
    }
    const characterMode = scope === "character";
    if (characterSelect) characterSelect.disabled = !characterMode;
    if (characterFilter) characterFilter.classList.toggle("is-disabled", !characterMode);
  }

  async function loadRanking() {
    if (!list) return;
    const serial = ++requestSerial;
    list.innerHTML = '<div class="ranking-message">랭킹을 불러오는 중입니다.</div>';
    if (own) own.classList.add("hidden");
    const characterId = characterSelect?.value || "geontaek";
    const query = new URLSearchParams({
      scope,
      character_id: characterId,
      client_id: clientId,
      limit: String(CONFIG.limit),
    });
    try {
      const data = await api(`?${query}`);
      if (serial !== requestSerial) return;
      renderRanking(data);
    } catch (error) {
      if (serial !== requestSerial) return;
      list.innerHTML = `<div class="ranking-message">${escapeHtml(errorMessage(error))}</div>`;
    }
  }

  function renderRanking(data) {
    if (season) season.textContent = data.season || CONFIG.season;
    const entries = Array.isArray(data.entries) ? data.entries : [];
    if (!entries.length) {
      list.innerHTML = '<div class="ranking-message">아직 등록된 기록이 없습니다.<br>첫 번째 기록에 도전해보세요.</div>';
    } else {
      list.innerHTML = entries.map(rankingRow).join("");
    }
    const ownInList = entries.some((entry) => entry.is_me);
    if (own && data.own && !ownInList) {
      own.textContent = `내 최고 기록 ${data.own.rank}위 · ${data.own.stage} STAGE · 사회 진상 ${data.own.kills}명`;
      own.classList.remove("hidden");
    } else if (own) {
      own.classList.add("hidden");
    }
  }

  function rankingRow(entry) {
    const characterName = CHARACTER_NAMES[entry.character_id] ?? entry.character_id;
    return `<div class="ranking-row${entry.is_me ? " is-me" : ""}">
      <span class="ranking-position${entry.rank <= 3 ? " is-top" : ""}">${entry.rank}</span>
      <span class="ranking-player"><strong>${escapeHtml(entry.nickname)}</strong><small>${escapeHtml(characterName)} · Lv.${entry.player_level}</small></span>
      <span class="ranking-record">
        <span>스테이지<b>${entry.stage}</b></span>
        <span>보스<b>${entry.boss_kills}</b></span>
        <span>처치<b>${entry.kills}</b></span>
        <span>생존<b>${formatTime(entry.survival_seconds)}</b></span>
      </span>
    </div>`;
  }

  function formatTime(seconds) {
    const value = Math.max(0, Number(seconds) || 0);
    const minutes = Math.floor(value / 60);
    return `${String(minutes).padStart(2, "0")}:${String(value % 60).padStart(2, "0")}`;
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  window.hanFightRanking = {
    startRun,
    markIneligible,
    showGameOver,
  };
})();
