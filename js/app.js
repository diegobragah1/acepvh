/**
 * ============================================================================
 * Plataforma ACE SEMUSA Porto Velho 2026 — Edital nº 25/2026 (Banca IBGP)
 * Arquivo: ./js/app.js
 * Descrição: Lógica completa da SPA (Navegação em 6 abas, busca em tempo real,
 *            filtros por disciplina e Modos A/B/C, Simulado IBGP interativo,
 *            Flashcards 3D, Calculadora LIRAa, LocalStorage, Export/Import JSON
 *            e carregamento assíncrono via fetch("./data/app_data.json")).
 * ============================================================================
 */

let APP_DATA = {
  cargos: [],
  sources: [],
  lessons: [],
  endemics: [],
  schedule: [],
  auditMatrix: []
};

const STORAGE_KEY_COMPLETED = "ace_semusa_2026_completed_lessons_v3";
const STORAGE_KEY_TOPIC_STATUS = "ace_semusa_2026_topic_status_v1";
const STORAGE_KEY_ANSWERS = "ace_semusa_2026_sim_answers_v3";

function loadStorage(key, fallback) {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (err) {
    return fallback;
  }
}

function saveStorage(key, val) {
  try {
    window.localStorage.setItem(key, JSON.stringify(val));
  } catch (err) {}
}

let completedLessons = loadStorage(STORAGE_KEY_COMPLETED, []);
let topicStatus = loadStorage(STORAGE_KEY_TOPIC_STATUS, {});
let simAnswers = loadStorage(STORAGE_KEY_ANSWERS, {});
let currentLessonId = "esp_1";
let currentCategoryFilter = "all";
let currentStatusFilter = "all";
let currentStudyMode = "ALL";

function getTopicStatus(topicId) {
  if (topicStatus && topicStatus[topicId]) {
    return topicStatus[topicId];
  }
  if (completedLessons && completedLessons.includes(topicId)) {
    return "completed";
  }
  return "not_started";
}

function getStatusMeta(status) {
  switch (status) {
    case "studying":
      return {
        id: "studying",
        label: "Estudando",
        icon: "📘",
        badgeClass: "bg-sky-100 text-sky-800 border-sky-300",
        activeClass: "bg-sky-600 text-white shadow-sm",
        pillClass: "bg-sky-500 text-white"
      };
    case "completed":
      return {
        id: "completed",
        label: "Estudado",
        icon: "✅",
        badgeClass: "bg-emerald-100 text-emerald-800 border-emerald-300",
        activeClass: "bg-emerald-600 text-white shadow-sm",
        pillClass: "bg-emerald-600 text-white"
      };
    case "review":
      return {
        id: "review",
        label: "Revisar",
        icon: "🔄",
        badgeClass: "bg-amber-100 text-amber-800 border-amber-300",
        activeClass: "bg-amber-500 text-white shadow-sm",
        pillClass: "bg-amber-500 text-white"
      };
    case "mastered":
      return {
        id: "mastered",
        label: "Dominado",
        icon: "🏆",
        badgeClass: "bg-purple-100 text-purple-800 border-purple-300",
        activeClass: "bg-purple-600 text-white shadow-sm",
        pillClass: "bg-purple-600 text-white"
      };
    case "not_started":
    default:
      return {
        id: "not_started",
        label: "Não iniciado",
        icon: "⚪",
        badgeClass: "bg-slate-100 text-slate-700 border-slate-300",
        activeClass: "bg-slate-700 text-white shadow-sm",
        pillClass: "bg-slate-300 text-slate-700"
      };
  }
}

function updateTopicStatus(subjectId, topicId, newStatus) {
  if (!newStatus) {
    newStatus = topicId;
    topicId = subjectId;
  }
  if (!topicId || !newStatus) return;

  topicStatus[topicId] = newStatus;

  // Sincroniza com completedLessons para retrocompatibilidade
  if (newStatus === "completed" || newStatus === "mastered") {
    if (!completedLessons.includes(topicId)) {
      completedLessons.push(topicId);
    }
  } else {
    completedLessons = completedLessons.filter(id => id !== topicId);
  }

  saveStorage(STORAGE_KEY_TOPIC_STATUS, topicStatus);
  saveStorage(STORAGE_KEY_COMPLETED, completedLessons);

  const meta = getStatusMeta(newStatus);
  showToast(`${meta.icon} Status atualizado: ${meta.label}!`);

  updateGlobalProgress();
  renderLessonsSidebar();
  renderCurrentLesson();
  renderTab5();
}
window.updateTopicStatus = updateTopicStatus;

function showToast(msg) {
  const banner = document.getElementById("toastBanner");
  const text = document.getElementById("toastText");
  if (!banner || !text) return;
  text.textContent = msg;
  banner.classList.remove("hidden");
  setTimeout(() => {
    banner.classList.add("hidden");
  }, 3800);
}

function copyTextToClipboard(text, onSuccess) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      if (onSuccess) onSuccess();
    }).catch(() => {
      fallbackCopy(text, onSuccess);
    });
  } else {
    fallbackCopy(text, onSuccess);
  }
}

function fallbackCopy(text, onSuccess) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.left = "-9999px";
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand("copy");
    if (onSuccess) onSuccess();
  } catch (e) {}
  document.body.removeChild(ta);
}

function switchTab(tabId) {
  document.querySelectorAll(".tab-panel").forEach(el => {
    el.classList.toggle("hidden", el.id !== tabId);
  });
  document.querySelectorAll(".main-tab-btn").forEach(btn => {
    const active = btn.getAttribute("data-tab") === tabId;
    btn.className = active
      ? "main-tab-btn px-3.5 py-2 rounded-lg text-xs sm:text-sm font-bold bg-teal-500 text-slate-950 shadow"
      : "main-tab-btn px-3.5 py-2 rounded-lg text-xs sm:text-sm font-bold bg-slate-800 text-slate-200 hover:bg-slate-700";
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateHeroCountdown() {
  const countdownEl = document.getElementById("hero-countdown");
  if (!countdownEl) return;
  // Prova IBGP SEMUSA Porto Velho: 13/12/2026 14:45:00 (Fuso horário de Rondônia: UTC-4)
  const examDate = new Date("2026-12-13T14:45:00-04:00").getTime();
  const now = new Date().getTime();
  const diff = examDate - now;

  if (diff <= 0) {
    countdownEl.innerHTML = `<span class="text-emerald-400 font-bold">Prova em andamento ou realizada!</span>`;
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  countdownEl.innerHTML = `<span class="text-white">${days} dias</span> <span class="text-slate-300 font-bold text-sm">e ${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m ${String(seconds).padStart(2, '0')}s</span>`;
}

function updateGlobalProgress() {
  const total = APP_DATA.lessons.length || 32;
  let cNotStarted = 0;
  let cStudying = 0;
  let cCompleted = 0;
  let cReview = 0;
  let cMastered = 0;

  APP_DATA.lessons.forEach(l => {
    const st = getTopicStatus(l.id);
    if (st === "studying") cStudying++;
    else if (st === "completed") cCompleted++;
    else if (st === "review") cReview++;
    else if (st === "mastered") cMastered++;
    else cNotStarted++;
  });

  const done = cCompleted + cMastered;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  // Atualiza percentual em destaque no Card de Contagem Regressiva
  const pctEl = document.getElementById("global-progress-percent");
  if (pctEl) pctEl.textContent = `${pct}%`;

  // Atualiza Barra de Progresso Multi-status (5 níveis)
  const barMastered = document.getElementById("bar-global-mastered");
  const barCompleted = document.getElementById("bar-global-completed");
  const barReview = document.getElementById("bar-global-review");
  const barStudying = document.getElementById("bar-global-studying");

  const wMastered = total > 0 ? ((cMastered / total) * 100).toFixed(1) : 0;
  const wCompleted = total > 0 ? ((cCompleted / total) * 100).toFixed(1) : 0;
  const wReview = total > 0 ? ((cReview / total) * 100).toFixed(1) : 0;
  const wStudying = total > 0 ? ((cStudying / total) * 100).toFixed(1) : 0;

  if (barMastered) {
    barMastered.style.width = `${wMastered}%`;
    barMastered.title = `Dominado: ${cMastered} aula${cMastered === 1 ? '' : 's'} (${wMastered}%)`;
  }
  if (barCompleted) {
    barCompleted.style.width = `${wCompleted}%`;
    barCompleted.title = `Estudado: ${cCompleted} aula${cCompleted === 1 ? '' : 's'} (${wCompleted}%)`;
  }
  if (barReview) {
    barReview.style.width = `${wReview}%`;
    barReview.title = `Revisar: ${cReview} aula${cReview === 1 ? '' : 's'} (${wReview}%)`;
  }
  if (barStudying) {
    barStudying.style.width = `${wStudying}%`;
    barStudying.title = `Estudando: ${cStudying} aula${cStudying === 1 ? '' : 's'} (${wStudying}%)`;
  }

  // Rótulo descritivo e barra legada (se existente)
  const lbl = document.getElementById("globalProgressLabel");
  const bar = document.getElementById("globalProgressBar");
  if (lbl) lbl.textContent = `${done} / ${total} (${pct}%)`;
  if (bar) bar.style.width = `${pct}%`;

  // Breakdown em números individuais
  const elNS = document.getElementById("count_not_started");
  const elSt = document.getElementById("count_studying");
  const elCo = document.getElementById("count_completed");
  const elRe = document.getElementById("count_review");
  const elMa = document.getElementById("count_mastered");

  if (elNS) elNS.textContent = cNotStarted;
  if (elSt) elSt.textContent = cStudying;
  if (elCo) elCo.textContent = cCompleted;
  if (elRe) elRe.textContent = cReview;
  if (elMa) elMa.textContent = cMastered;
}

// Render Tab 1: Cargos & Official Docs
function renderTab1() {
  const tbody = document.getElementById("cargosTableBody");
  if (tbody) {
    let sumAc = 0, sumPcd = 0, sumPn = 0, sumPi = 0, sumIm = 0, sumCr = 0, sumTot = 0;
    let rowsHtml = APP_DATA.cargos.map(c => {
      const im = c.im !== undefined ? c.im : c.imediata;
      const tot = c.tot !== undefined ? c.tot : c.total;
      sumAc += c.ac; sumPcd += c.pcd; sumPn += c.pn; sumPi += c.pi;
      sumIm += im; sumCr += c.cr; sumTot += tot;
      const isUrban = c.code === "340";
      return `<tr class="${isUrban ? 'bg-teal-50/80 font-bold' : 'bg-white hover:bg-slate-50'}">
        <td class="p-2 text-center mono font-bold text-slate-900">${c.code}</td>
        <td class="p-2">${c.local}</td>
        <td class="p-2 text-center font-bold text-teal-800">${im}</td>
        <td class="p-2 text-center text-slate-600">${c.cr}</td>
        <td class="p-2 text-center font-extrabold text-slate-900">${tot}</td>
        <td class="p-2 text-center">${c.ac}</td>
        <td class="p-2 text-center">${c.pcd}</td>
        <td class="p-2 text-center">${c.pn}</td>
        <td class="p-2 text-center">${c.pi}</td>
        <td class="p-2 text-center font-semibold text-emerald-800">R$ 3.242,00</td>
      </tr>`;
    }).join("");

    rowsHtml += `<tr class="bg-slate-900 text-white font-extrabold">
      <td class="p-2 text-center">TOTAL</td>
      <td class="p-2">16 Códigos (1 Urbano + 15 Distritos — Cód. 343 pulado no Anexo I)</td>
      <td class="p-2 text-center text-emerald-400">${sumIm}</td>
      <td class="p-2 text-center text-amber-300">${sumCr}</td>
      <td class="p-2 text-center text-emerald-400">${sumTot} Vagas</td>
      <td class="p-2 text-center">${sumAc}</td>
      <td class="p-2 text-center">${sumPcd}</td>
      <td class="p-2 text-center">${sumPn}</td>
      <td class="p-2 text-center">${sumPi}</td>
      <td class="p-2 text-center text-emerald-300">R$ 3.242,00</td>
    </tr>`;
    tbody.innerHTML = rowsHtml;
  }

  const docsGrid = document.getElementById("officialDocsGrid");
  if (docsGrid) {
    const officialSources = APP_DATA.sources.filter(s => s.num >= 86);
    docsGrid.innerHTML = officialSources.map(s => `
      <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="block p-3.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-teal-50/60 hover:border-teal-400 transition">
        <div class="flex items-center justify-between text-[11px] font-bold text-teal-700 mb-1">
          <span>FONTE OFICIAL #${s.num}</span>
          <span>ABRIR PDF / LINK &nearr;</span>
        </div>
        <div class="text-xs sm:text-sm font-bold text-slate-900">${s.title || s.name}</div>
        <div class="text-[11px] text-slate-600 mt-1">${s.note || ''}</div>
      </a>
    `).join("");
  }
}

// Render Tab 2: Sidebar & Lesson Content
function getFilteredLessons() {
  const q = (document.getElementById("lessonSearchInput")?.value || "").trim().toLowerCase();
  return APP_DATA.lessons.filter(l => {
    const matchCat = currentCategoryFilter === "all" || l.cat === currentCategoryFilter;
    if (!matchCat) return false;
    const st = getTopicStatus(l.id);
    if (currentStatusFilter !== "all" && st !== currentStatusFilter) return false;
    if (!q) return true;
    const inTitle = l.title.toLowerCase().includes(q) || (l.editalRef && l.editalRef.toLowerCase().includes(q));
    const inBlocks = (l.blocks || []).some(b =>
      b.title.toLowerCase().includes(q) ||
      (b.modoA && b.modoA.toLowerCase().includes(q)) ||
      (b.modoB && b.modoB.toLowerCase().includes(q))
    );
    return inTitle || inBlocks;
  });
}

function renderLessonsSidebar() {
  const listEl = document.getElementById("lessonsSidebarList");
  if (!listEl) return;
  const filtered = getFilteredLessons();
  const countEl = document.getElementById("statusFilterCount");
  if (countEl) {
    countEl.textContent = `${filtered.length} aula${filtered.length === 1 ? '' : 's'}`;
  }
  if (filtered.length === 0) {
    listEl.innerHTML = `<div class="p-4 text-xs text-slate-500">Nenhuma aula encontrada para esse filtro.</div>`;
    return;
  }
  listEl.innerHTML = filtered.map(l => {
    const isCurrent = l.id === currentLessonId;
    const st = getTopicStatus(l.id);
    const meta = getStatusMeta(st);
    return `<button type="button" data-lesson-id="${l.id}" class="lesson-nav-item w-full text-left p-3 transition flex items-start gap-2.5 ${isCurrent ? 'bg-teal-50 border-l-4 border-teal-600' : 'hover:bg-slate-50'}">
      <span class="mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-lg text-xs font-bold flex-shrink-0 border ${meta.badgeClass}" title="Status: ${meta.label}">
        ${meta.icon}
      </span>
      <div class="flex-1 min-w-0">
        <div class="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-500">
          <span>${l.catName.split(' ')[0]} &bull; ${l.weight}</span>
          <span class="text-[10px] font-semibold text-slate-600">${meta.label}</span>
        </div>
        <div class="text-xs font-bold text-slate-900 leading-snug mt-0.5">${l.title}</div>
      </div>
    </button>`;
  }).join("");

  listEl.querySelectorAll(".lesson-nav-item").forEach(btn => {
    btn.addEventListener("click", () => {
      currentLessonId = btn.getAttribute("data-lesson-id");
      renderLessonsSidebar();
      renderCurrentLesson();
    });
  });
}


const mdCache = {};

function renderMarkdownToHtml(mdText) {
  if (!mdText) return "";
  const lines = String(mdText).split("\n");
  let html = '<div class="space-y-2.5 text-xs sm:text-sm text-slate-800 leading-relaxed">';
  let inList = false;
  let inTable = false;
  let inCode = false;
  let tableRows = [];

  function fmtInline(str) {
    return str
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(/`([^`]+)`/g, '<code class="px-1 py-0.5 rounded bg-slate-100 text-teal-900 mono text-xs">$1</code>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-teal-700 underline font-semibold">$1</a>');
  }

  function flushTable() {
    if (!inTable || !tableRows.length) return "";
    inTable = false;
    const header = tableRows[0];
    const body = tableRows.slice(2);
    tableRows = [];
    const ths = header.map(c => `<th class="p-2 border border-slate-300 text-left">${c}</th>`).join("");
    const trs = body.map(r => `<tr class="bg-white hover:bg-slate-50">${r.map(c => `<td class="p-2 border border-slate-200 align-top">${c}</td>`).join("")}</tr>`).join("");
    return `<div class="overflow-x-auto my-2"><table class="min-w-full text-xs border border-slate-300 rounded-lg overflow-hidden"><thead class="bg-slate-800 text-white"><tr>${ths}</tr></thead><tbody>${trs}</tbody></table></div>`;
  }

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const s = rawLine.trim();
    if (s.startsWith("```")) {
      if (inTable) html += flushTable();
      if (inList) { html += "</ul>"; inList = false; }
      if (!inCode) {
        inCode = true;
        html += '<pre class="p-3 rounded-xl bg-slate-900 text-emerald-300 text-xs mono overflow-x-auto">';
      } else {
        inCode = false;
        html += "</pre>";
      }
      continue;
    }
    if (inCode) {
      html += rawLine.replace(/</g, "&lt;").replace(/>/g, "&gt;") + "\n";
      continue;
    }
    if (s.startsWith("|") && s.endsWith("|")) {
      if (inList) { html += "</ul>"; inList = false; }
      inTable = true;
      const cells = s.slice(1, -1).split("|").map(c => fmtInline(c.trim()));
      tableRows.push(cells);
      continue;
    } else if (inTable) {
      html += flushTable();
    }
    if (!s || s.startsWith("<!--")) {
      if (inList) { html += "</ul>"; inList = false; }
      continue;
    }
    if (s.startsWith("# ")) {
      if (inList) { html += "</ul>"; inList = false; }
      html += `<h2 class="text-lg font-extrabold text-slate-900 mt-3">${fmtInline(s.slice(2))}</h2>`;
    } else if (s.startsWith("## ")) {
      if (inList) { html += "</ul>"; inList = false; }
      html += `<h3 class="text-base font-extrabold text-teal-900 bg-teal-50 px-3 py-1.5 rounded-lg border-l-4 border-teal-600 mt-3">${fmtInline(s.slice(3))}</h3>`;
    } else if (s.startsWith("### ")) {
      if (inList) { html += "</ul>"; inList = false; }
      html += `<h4 class="text-sm font-extrabold text-slate-900 border-b border-slate-200 pb-1 mt-2">${fmtInline(s.slice(4))}</h4>`;
    } else if (s.startsWith("#### ") || s.startsWith("##### ")) {
      if (inList) { html += "</ul>"; inList = false; }
      const lvl = s.startsWith("##### ") ? 6 : 5;
      html += `<h5 class="text-xs sm:text-sm font-bold text-teal-800 mt-2">${fmtInline(s.slice(lvl))}</h5>`;
    } else if (s.startsWith("- ")) {
      if (!inList) { html += '<ul class="list-disc pl-5 space-y-1">'; inList = true; }
      html += `<li>${fmtInline(s.slice(2))}</li>`;
    } else if (s.startsWith("> ")) {
      if (inList) { html += "</ul>"; inList = false; }
      html += `<blockquote class="bg-slate-100 border-l-4 border-teal-600 p-3 rounded-r-lg italic">${fmtInline(s.slice(2))}</blockquote>`;
    } else {
      if (inList) { html += "</ul>"; inList = false; }
      html += `<p>${fmtInline(s)}</p>`;
    }
  }
  if (inTable) html += flushTable();
  if (inList) html += "</ul>";
  if (inCode) html += "</pre>";
  html += "</div>";
  return html;
}

async function fetchLessonMarkdownText(lesson) {
  if (mdCache[lesson.id]) return mdCache[lesson.id];
  const pathsToTry = [lesson.mdPath, lesson.mdLegacyPath, `./content/${lesson.id}.md`].filter(Boolean);
  for (const p of pathsToTry) {
    try {
      const resp = await fetch(p, { cache: "no-cache" });
      if (resp.ok) {
        const text = await resp.text();
        mdCache[lesson.id] = text;
        return text;
      }
    } catch (e) {}
  }
  // Fallback: synthesize clean Markdown directly from the loaded lesson object
  let fallbackMd = `---\nid: "${lesson.id}"\ntitle: "${lesson.title}"\nmdPath: "${lesson.mdPath || `./content/${lesson.id}.md`}"\n---\n\n# ${lesson.title}\n\n**Referência no Edital:** ${lesson.editalRef}\n\n`;
  (lesson.blocks || []).forEach((b, idx) => {
    fallbackMd += `## ${b.title}\n\n### Modo A — Teoria Aprofundada\n\n${b.modoA_markdown || ""}\n\n### Modo B — Resumo e Mnemônicos\n\n${b.modoB_markdown || ""}\n\n`;
  });
  mdCache[lesson.id] = fallbackMd;
  return fallbackMd;
}

function renderCurrentLesson() {
  const container = document.getElementById("lessonContentContainer");
  if (!container) return;
  const idx = APP_DATA.lessons.findIndex(l => l.id === currentLessonId);
  const lesson = idx >= 0 ? APP_DATA.lessons[idx] : APP_DATA.lessons[0];
  const currentStatus = getTopicStatus(lesson.id);
  const meta = getStatusMeta(currentStatus);
  const isDone = currentStatus === "completed" || currentStatus === "mastered";

  const completeBtn = document.getElementById("toggleCompleteLessonBtn");
  if (completeBtn) {
    completeBtn.className = isDone
      ? "px-4 py-2 rounded-xl font-bold text-xs sm:text-sm bg-emerald-600 text-white border border-emerald-600 shadow"
      : "px-4 py-2 rounded-xl font-bold text-xs sm:text-sm bg-white text-slate-700 border border-slate-300 hover:bg-slate-50";
    completeBtn.innerHTML = isDone
      ? `${meta.icon} Concluído (${meta.label}) &bull; Clique p/ Desmarcar`
      : "Marcar Aula como Concluída";
  }

  const subjectId = lesson.cat || lesson.catName || "geral";
  const topic = { id: lesson.id, status: currentStatus };

  const statusSelectorHtml = `
    <!-- Seletor de Status do Assunto (5 Níveis) -->
    <div class="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <span class="text-[11px] font-bold text-slate-500 dark:text-slate-400">
            <i class="fa-solid fa-chart-line mr-1 text-brand-500"></i>Seu Status neste Assunto:
        </span>
        <div class="flex flex-wrap items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700 gap-1">
            <button onclick="updateTopicStatus('${subjectId}', '${topic.id}', 'not_started')"
                class="px-2.5 py-1 rounded-lg text-[11px] font-bold transition ${topic.status === 'not_started' ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'}">
                ⚪ Não iniciado
            </button>
            <button onclick="updateTopicStatus('${subjectId}', '${topic.id}', 'studying')"
                class="px-2.5 py-1 rounded-lg text-[11px] font-bold transition ${topic.status === 'studying' ? 'bg-sky-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'}">
                📘 Estudando
            </button>
            <button onclick="updateTopicStatus('${subjectId}', '${topic.id}', 'completed')"
                class="px-2.5 py-1 rounded-lg text-[11px] font-bold transition ${topic.status === 'completed' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'}">
                ✅ Estudado
            </button>
            <button onclick="updateTopicStatus('${subjectId}', '${topic.id}', 'review')"
                class="px-2.5 py-1 rounded-lg text-[11px] font-bold transition ${topic.status === 'review' ? 'bg-amber-500 text-white shadow-sm' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'}">
                🔄 Revisar
            </button>
            <button onclick="updateTopicStatus('${subjectId}', '${topic.id}', 'mastered')"
                class="px-2.5 py-1 rounded-lg text-[11px] font-bold transition ${topic.status === 'mastered' ? 'bg-purple-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'}">
                🏆 Dominado
            </button>
        </div>
    </div>
  `;

  const posInd = document.getElementById("lessonPositionIndicator");
  if (posInd) posInd.textContent = `Aula ${idx + 1} de ${APP_DATA.lessons.length}`;

  const rawSources = lesson && lesson.sources ? lesson.sources : [];
  const sourceNums = Array.isArray(rawSources)
    ? rawSources
    : (rawSources && Array.isArray(rawSources.value) ? rawSources.value : []);
  const lessonSources = sourceNums.map(num => (APP_DATA.sources || []).find(s => s.num === num)).filter(Boolean);
  const sourcesHtml = lessonSources.map(s => `
    <a href="${s.url}" target="_blank" rel="noopener noreferrer" title="${s.note || ''}" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-teal-100 text-slate-800 border border-slate-300 transition">
      <span>&#128196; PDF #${s.num}: ${s.title || s.name} &nearr;</span>
    </a>
  `).join("");

  const blocksHtml = lesson.blocks.map((b, bIdx) => {
    const showA = currentStudyMode === "ALL" || currentStudyMode === "A";
    const showB = currentStudyMode === "ALL" || currentStudyMode === "B";
    const showC = currentStudyMode === "ALL" || currentStudyMode === "C";

    const questionsHtml = (b.questions || []).map((qObj, qIdx) => {
      const qKey = `${lesson.id}_b${bIdx}_q${qIdx}`;
      return `<div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2.5" data-qkey="${qKey}">
        <div class="text-xs sm:text-sm font-bold text-slate-900">${qObj.q}</div>
        <div class="space-y-1.5">
          ${qObj.options.map((opt, oIdx) => `
            <button type="button" data-qkey="${qKey}" data-oidx="${oIdx}" data-ans="${qObj.ans}" class="lesson-q-opt w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm border border-slate-300 bg-white hover:bg-slate-100 transition font-medium">
              ${opt}
            </button>
          `).join("")}
        </div>
        <div id="comment_${qKey}" class="hidden p-3 rounded-lg text-xs sm:text-sm bg-emerald-50 border border-emerald-200 text-emerald-950 font-medium">
          <strong>Comentário do Professor:</strong> ${qObj.comment}
        </div>
      </div>`;
    }).join("");

    const flashcardsHtml = (b.flashcards || []).map((fc, fIdx) => `
      <div class="flashcard-container cursor-pointer" data-fc="fc_${lesson.id}_${bIdx}_${fIdx}">
        <div class="flashcard-inner border border-slate-200 rounded-xl shadow-sm bg-gradient-to-br from-slate-800 to-slate-900 text-white">
          <div class="flashcard-front">
            <span class="text-[10px] uppercase tracking-wider text-teal-400 font-bold mb-1">Flashcard &bull; Clique para virar</span>
            <p class="text-xs sm:text-sm font-bold leading-snug">${fc.f}</p>
          </div>
          <div class="flashcard-back bg-gradient-to-br from-teal-700 to-emerald-800 text-white">
            <span class="text-[10px] uppercase tracking-wider text-amber-200 font-bold mb-1">Resposta de Prova</span>
            <p class="text-xs sm:text-sm font-medium leading-snug">${fc.b}</p>
          </div>
        </div>
      </div>
    `).join("");

    return `<div class="border-t border-slate-200 pt-5 space-y-4">
      <h3 class="text-base sm:text-lg font-extrabold text-slate-900 bg-slate-100 px-3.5 py-2 rounded-xl border-l-4 border-teal-600">${b.title}</h3>
      ${showA ? `<div class="space-y-2">
        <div class="text-xs font-bold uppercase tracking-wider text-teal-700">Modo A — Teoria Aprofundada, Conceitos, Quadros e Fundamentação Legal</div>
        <div class="text-xs sm:text-sm text-slate-800 leading-relaxed">${b.modoA}</div>
      </div>` : ''}
      ${showB ? `<div class="space-y-2">
        <div class="text-xs font-bold uppercase tracking-wider text-amber-700">Modo B — Resumo Final de Revisão, Mnemônicos e Pegadinhas de Prova</div>
        <div>${b.modoB}</div>
      </div>` : ''}
      ${showC ? `<div class="space-y-3">
        <div class="text-xs font-bold uppercase tracking-wider text-indigo-700">Modo C — Questões de Fixação Comentadas (Padrão IBGP) &amp; Flashcards</div>
        <div class="space-y-3">${questionsHtml}</div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">${flashcardsHtml}</div>
      </div>` : ''}
    </div>`;
  }).join("");

  container.innerHTML = `
    <div class="space-y-3">
      <div class="flex flex-wrap items-center gap-2">
        <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-teal-100 text-teal-800">${lesson.catName}</span>
        <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-100 text-indigo-800">${lesson.weight}</span>
        <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">&#10003; ${lesson.auditBadge}</span>
        <span class="px-2.5 py-0.5 rounded-full text-xs font-bold border ${meta.badgeClass}">${meta.icon} ${meta.label}</span>
      </div>
      <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900">${lesson.title}</h2>
      <p class="text-xs text-slate-600"><strong>Correspondência no Conteúdo Programático Oficial (Anexo IV):</strong> ${lesson.editalRef}</p>
      ${statusSelectorHtml}
      <div class="pt-1 flex flex-wrap items-center justify-between gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
        <div class="text-xs text-slate-700">
          <span class="font-bold text-teal-900">&#128221; Arquivo Markdown da Aula:</span>
          <code class="ml-1 px-2 py-0.5 rounded bg-white border border-slate-300 mono text-[11px] text-teal-800">${lesson.mdPath || `./content/${lesson.id}.md`}</code>
        </div>
        <div class="flex flex-wrap gap-1.5">
          <a href="${lesson.mdPath || `./content/${lesson.id}.md`}" target="_blank" rel="noopener noreferrer" class="px-2.5 py-1 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition">Abrir .MD Bruto &nearr;</a>
          <button type="button" id="downloadLessonMdBtn" class="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-emerald-300 text-xs font-bold transition">&#11015; Baixar ${lesson.id}.md</button>
        </div>
      </div>
      <div class="pt-1">
        <div class="text-[11px] font-bold text-slate-500 uppercase mb-1.5">PDFs do Google Drive e Fontes Oficiais Integrados nesta Aula (Clique p/ abrir o PDF):</div>
        <div class="flex flex-wrap gap-1.5">${sourcesHtml}</div>
      </div>
    </div>
    <div id="markdownFileViewerBox" class="${currentStudyMode === 'MD' ? 'block' : 'hidden'} md-viewer-box border-t border-slate-200 pt-4 space-y-3"></div>
    ${currentStudyMode === 'MD' ? '' : blocksHtml}
  `;

  container.querySelectorAll(".lesson-q-opt").forEach(btn => {
    btn.addEventListener("click", () => {
      const qKey = btn.getAttribute("data-qkey");
      const oIdx = parseInt(btn.getAttribute("data-oidx"), 10);
      const ans = parseInt(btn.getAttribute("data-ans"), 10);
      const parent = container.querySelector(`[data-qkey="${qKey}"]`);
      if (!parent) return;
      parent.querySelectorAll(".lesson-q-opt").forEach((b, idx) => {
        if (idx === ans) {
          b.className = "lesson-q-opt w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm border-2 border-emerald-600 bg-emerald-100 text-emerald-950 font-bold";
        } else if (idx === oIdx && oIdx !== ans) {
          b.className = "lesson-q-opt w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm border-2 border-rose-500 bg-rose-100 text-rose-950 font-semibold";
        } else {
          b.className = "lesson-q-opt w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm border border-slate-200 bg-white text-slate-500";
        }
      });
      const comm = document.getElementById(`comment_${qKey}`);
      if (comm) comm.classList.remove("hidden");
    });
  });

  container.querySelectorAll(".flashcard-container").forEach(card => {
    card.addEventListener("click", () => {
      const inner = card.querySelector(".flashcard-inner");
      if (inner) inner.classList.toggle("flashcard-flipped");
    });
  });

  document.getElementById("downloadLessonMdBtn")?.addEventListener("click", async () => {
    const mdText = await fetchLessonMarkdownText(lesson);
    const blob = new Blob([mdText], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${lesson.slug || lesson.id}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast(`Arquivo Markdown (${lesson.slug || lesson.id}.md) baixado com sucesso!`);
  });

  if (currentStudyMode === "MD") {
    const mdBox = document.getElementById("markdownFileViewerBox");
    if (mdBox) {
      mdBox.innerHTML = `<div class="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">Carregando arquivo Markdown <code>${lesson.mdPath || `./content/${lesson.id}.md`}</code>...</div>`;
      fetchLessonMarkdownText(lesson).then(mdText => {
        mdBox.innerHTML = `
          <div class="bg-emerald-50 border border-emerald-300 rounded-xl p-3.5 flex flex-wrap items-center justify-between gap-2">
            <div>
              <div class="text-xs font-extrabold text-emerald-950 uppercase">Visualizador Nativo de Markdown (.md) — Sincronizado com o Repositório</div>
              <div class="text-xs text-emerald-800">Caminho: <code>${lesson.mdPath || `./content/${lesson.id}.md`}</code> &bull; Tamanho: ${mdText.length.toLocaleString("pt-BR")} caracteres</div>
            </div>
            <button type="button" id="copyLessonMdBtn" class="px-3 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold shadow">&#128203; Copiar Markdown (.md)</button>
          </div>
          <div class="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
            <div class="text-xs font-bold uppercase text-teal-800 border-b border-slate-200 pb-1">1. Pré-Visualização Formatada do Arquivo Markdown:</div>
            ${renderMarkdownToHtml(mdText)}
          </div>
          <details class="bg-slate-900 text-emerald-300 rounded-xl p-3.5 border border-slate-700">
            <summary class="cursor-pointer text-xs font-bold text-white">2. Ver Código-Fonte Markdown Puro (.md com YAML Frontmatter e Blocos JSON)</summary>
            <pre class="mt-3 text-xs mono overflow-x-auto">${mdText.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</pre>
          </details>
        `;
        document.getElementById("copyLessonMdBtn")?.addEventListener("click", () => {
          copyTextToClipboard(mdText, () => showToast("Código Markdown (.md) da aula copiado para a área de transferência!"));
        });
      });
    }
  }
}

// Render Tab 3: Simulado & Global Flashcards
function renderSimuladoAndFlashcards() {
  const cat = document.getElementById("simuladoCatFilter")?.value || "all";
  const allQuestions = [];
  const allFlashcards = [];

  APP_DATA.lessons.forEach(l => {
    if (cat !== "all" && l.cat !== cat) return;
    l.blocks.forEach((b, bIdx) => {
      (b.questions || []).forEach((qObj, qIdx) => {
        allQuestions.push({
          id: `sim_${l.id}_${bIdx}_${qIdx}`,
          lessonTitle: l.title,
          catName: l.catName,
          weight: l.weight,
          ...qObj
        });
      });
      (b.flashcards || []).forEach((fc, fIdx) => {
        allFlashcards.push({
          id: `gfc_${l.id}_${bIdx}_${fIdx}`,
          lessonTitle: l.title,
          ...fc
        });
      });
    });
  });

  const qListEl = document.getElementById("simuladoQuestionsList");
  if (qListEl) {
    qListEl.innerHTML = allQuestions.map((item, idx) => {
      const chosen = simAnswers[item.id];
      const answered = chosen !== undefined;
      return `<div class="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2.5">
        <div class="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 font-bold">
          <span>Questão #${idx + 1} &bull; ${item.lessonTitle}</span>
          <span class="px-2 py-0.5 rounded bg-slate-200 text-slate-800">${item.weight}</span>
        </div>
        <div class="text-xs sm:text-sm font-bold text-slate-900">${item.q}</div>
        <div class="space-y-1.5">
          ${item.options.map((opt, oIdx) => {
            let cls = "sim-q-opt w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm border border-slate-300 bg-white hover:bg-slate-100 font-medium";
            if (answered) {
              if (oIdx === item.ans) {
                cls = "sim-q-opt w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm border-2 border-emerald-600 bg-emerald-100 text-emerald-950 font-bold";
              } else if (oIdx === chosen && chosen !== item.ans) {
                cls = "sim-q-opt w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm border-2 border-rose-500 bg-rose-100 text-rose-950 font-semibold";
              } else {
                cls = "sim-q-opt w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm border border-slate-200 bg-white text-slate-500";
              }
            }
            return `<button type="button" data-qid="${item.id}" data-oidx="${oIdx}" class="${cls}">${opt}</button>`;
          }).join("")}
        </div>
        <div class="${answered ? '' : 'hidden'} p-3 rounded-lg text-xs sm:text-sm bg-emerald-50 border border-emerald-200 text-emerald-950">
          <strong>Gabarito Comentado:</strong> ${item.comment}
        </div>
      </div>`;
    }).join("");

    qListEl.querySelectorAll(".sim-q-opt").forEach(btn => {
      btn.addEventListener("click", () => {
        const qid = btn.getAttribute("data-qid");
        const oidx = parseInt(btn.getAttribute("data-oidx"), 10);
        simAnswers[qid] = oidx;
        saveStorage(STORAGE_KEY_ANSWERS, simAnswers);
        renderSimuladoAndFlashcards();
      });
    });
  }

  let answeredCount = 0, correctCount = 0, wrongCount = 0;
  allQuestions.forEach(item => {
    if (simAnswers[item.id] !== undefined) {
      answeredCount++;
      if (simAnswers[item.id] === item.ans) correctCount++;
      else wrongCount++;
    }
  });
  const pct = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;
  document.getElementById("simAnsweredCount").textContent = `${answeredCount} / ${allQuestions.length}`;
  document.getElementById("simCorrectCount").textContent = `${correctCount} (${correctCount * 2} pts)`;
  document.getElementById("simWrongCount").textContent = `${wrongCount}`;
  document.getElementById("simPercentScore").textContent = `${pct}%`;

  const fcGrid = document.getElementById("globalFlashcardsGrid");
  if (fcGrid) {
    fcGrid.innerHTML = allFlashcards.map(fc => `
      <div class="flashcard-container cursor-pointer">
        <div class="flashcard-inner border border-slate-200 rounded-xl shadow-sm bg-gradient-to-br from-slate-800 to-slate-900 text-white">
          <div class="flashcard-front">
            <span class="text-[10px] uppercase tracking-wider text-teal-400 font-bold mb-1">Aula ${fc.lessonTitle.split('.')[0]} &bull; Clique p/ virar</span>
            <p class="text-xs sm:text-sm font-bold leading-snug">${fc.f}</p>
          </div>
          <div class="flashcard-back bg-gradient-to-br from-teal-700 to-emerald-800 text-white">
            <span class="text-[10px] uppercase tracking-wider text-amber-200 font-bold mb-1">Resposta Oficial</span>
            <p class="text-xs sm:text-sm font-medium leading-snug">${fc.b}</p>
          </div>
        </div>
      </div>
    `).join("");

    fcGrid.querySelectorAll(".flashcard-container").forEach(card => {
      card.addEventListener("click", () => {
        const inner = card.querySelector(".flashcard-inner");
        if (inner) inner.classList.toggle("flashcard-flipped");
      });
    });
  }
}

// Render Tab 4: 14 Endemics Fichas & LIRAa Calculator
function renderTab4() {
  const tbody = document.getElementById("endemicsTableBody");
  if (tbody) {
    tbody.innerHTML = APP_DATA.endemics.map(e => `
      <tr class="bg-white hover:bg-slate-50 align-top">
        <td class="p-2.5 font-extrabold text-teal-900">${e.doenca}</td>
        <td class="p-2.5 font-medium">${e.agente}</td>
        <td class="p-2.5">${e.vetor}</td>
        <td class="p-2.5 font-semibold text-indigo-950">${e.hospedeiros}</td>
        <td class="p-2.5"><strong>Transmissão/Incubação:</strong> ${e.transmissao}<br><br><strong>Sintomas:</strong> ${e.clinica}</td>
        <td class="p-2.5">${e.diagnostico}</td>
        <td class="p-2.5">${e.controle}</td>
      </tr>
    `).join("");
  }

  function updateLiraaCalc() {
    const pesq = Math.max(1, parseFloat(document.getElementById("calcImoveisPesq")?.value || "1"));
    const pos = Math.max(0, parseFloat(document.getElementById("calcImoveisPos")?.value || "0"));
    const rec = Math.max(0, parseFloat(document.getElementById("calcRecipientesPos")?.value || "0"));
    const iip = (pos / pesq) * 100;
    const ib = (rec / pesq) * 100;
    const iipText = document.getElementById("calcIIPText");
    const badge = document.getElementById("calcRiskBadge");
    const box = document.getElementById("calcResultBox");
    if (!iipText || !badge || !box) return;
    iipText.textContent = `IIP: ${iip.toFixed(2)}% | IB: ${ib.toFixed(2)}%`;
    if (iip < 1.0) {
      box.className = "p-3 rounded-xl border bg-emerald-50 border-emerald-300 text-xs";
      iipText.className = "font-extrabold text-sm text-emerald-900";
      badge.className = "font-bold text-emerald-700 mt-0.5";
      badge.textContent = "Classificação MS: SATISFATÓRIO (< 1,0%)";
    } else if (iip < 4.0) {
      box.className = "p-3 rounded-xl border bg-amber-50 border-amber-300 text-xs";
      iipText.className = "font-extrabold text-sm text-amber-900";
      badge.className = "font-bold text-amber-800 mt-0.5";
      badge.textContent = "Classificação MS: SITUAÇÃO DE ALERTA (1,0% a 3,9%)";
    } else {
      box.className = "p-3 rounded-xl border bg-rose-50 border-rose-300 text-xs";
      iipText.className = "font-extrabold text-sm text-rose-900";
      badge.className = "font-bold text-rose-700 mt-0.5";
      badge.textContent = "Classificação MS: RISCO DE SURTO / EPIDEMIA (>= 4,0%)";
    }
  }

  ["calcImoveisPesq", "calcImoveisPos", "calcRecipientesPos"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("input", updateLiraaCalc);
  });
  updateLiraaCalc();

  function updateCubagemCalc() {
    const fmt = document.getElementById("calcFormatoRes")?.value || "retangular";
    const retBox = document.getElementById("dimensaoInputsRet");
    const cilBox = document.getElementById("dimensaoInputsCil");
    if (retBox && cilBox) {
      retBox.classList.toggle("hidden", fmt !== "retangular");
      cilBox.classList.toggle("hidden", fmt !== "cilindrico");
    }

    let volM3 = 0;
    if (fmt === "retangular") {
      const c = Math.max(0.01, parseFloat(document.getElementById("calcComp")?.value || "1"));
      const l = Math.max(0.01, parseFloat(document.getElementById("calcLarg")?.value || "1"));
      const p = Math.max(0.01, parseFloat(document.getElementById("calcProf")?.value || "1"));
      volM3 = c * l * p;
    } else {
      const d = Math.max(0.01, parseFloat(document.getElementById("calcDiam")?.value || "1"));
      const h = Math.max(0.01, parseFloat(document.getElementById("calcAlt")?.value || "1"));
      const r = d / 2;
      volM3 = Math.PI * r * r * h;
    }

    const litros = Math.round(volM3 * 1000);
    const larvicida = document.getElementById("calcLarvicida")?.value || "espinosade";
    const volText = document.getElementById("calcVolText");
    const dosText = document.getElementById("calcDosagemText");
    const epiText = document.getElementById("calcEpiText");

    if (volText) {
      volText.textContent = `Volume: ${volM3.toFixed(2).replace('.', ',')} m³ (${litros.toLocaleString("pt-BR")} Litros)`;
    }

    if (dosText) {
      if (larvicida === "espinosade") {
        const pastilhas = Math.ceil(litros / 200);
        dosText.textContent = `Dosagem: ${pastilhas} pastilha(s) de Espinosade (1 pastilha / 200 L)`;
        if (epiText) epiText.textContent = "EPI: Luvas nitrílicas + respirador c/ filtro químico (NR-6 / Lei 11.350/06)";
      } else if (larvicida === "piriproxifeno") {
        const gramas = ((litros / 1000) * 2).toFixed(1).replace('.', ',');
        dosText.textContent = `Dosagem: ${gramas} g de Piriproxifeno 0,5% (2g / 1.000 L)`;
        if (epiText) epiText.textContent = "EPI: Luvas nitrílicas, óculos ampla visão e avental impermeável";
      } else {
        const gramas = ((litros / 1000) * 1).toFixed(1).replace('.', ',');
        dosText.textContent = `Dosagem: ${gramas} g de Bti Biológico (1g / 1.000 L)`;
        if (epiText) epiText.textContent = "EPI: Luvas nitrílicas + proteção respiratória contra aerossóis";
      }
    }
  }

  ["calcFormatoRes", "calcComp", "calcLarg", "calcProf", "calcDiam", "calcAlt", "calcLarvicida"].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("input", updateCubagemCalc);
      el.addEventListener("change", updateCubagemCalc);
    }
  });
  updateCubagemCalc();
}

// Render Tab 5: 7-Column Audit Matrix & 12-Week Schedule
function renderTab5() {
  const auditBody = document.getElementById("auditMatrixBody");
  if (auditBody) {
    auditBody.innerHTML = APP_DATA.auditMatrix.map(row => `
      <tr class="bg-white hover:bg-slate-50 align-top">
        <td class="p-2 font-bold text-slate-900">${row.disc}</td>
        <td class="p-2 font-semibold text-teal-950">${row.item}</td>
        <td class="p-2 text-slate-700">${row.source}</td>
        <td class="p-2 text-slate-600">${row.pages}</td>
        <td class="p-2 text-center"><span class="px-2 py-0.5 rounded text-[10px] font-bold ${row.before === 'COMPLETO' ? 'bg-slate-100 text-slate-700' : 'bg-amber-100 text-amber-800'}">${row.before}</span></td>
        <td class="p-2 text-slate-700">${row.missing}</td>
        <td class="p-2 font-semibold text-emerald-800">${row.action}</td>
      </tr>
    `).join("");
  }

  const schedGrid = document.getElementById("scheduleGrid");
  if (schedGrid) {
    schedGrid.innerHTML = APP_DATA.schedule.map(s => {
      const lessonBtns = s.lessons.map(lid => {
        const lObj = APP_DATA.lessons.find(x => x.id === lid);
        const st = getTopicStatus(lid);
        const meta = getStatusMeta(st);
        const done = st === "completed" || st === "mastered";
        return `<button type="button" data-open-lesson="${lid}" class="open-lesson-chip px-2.5 py-1 rounded-lg text-xs font-bold border transition ${done ? 'bg-emerald-100 border-emerald-400 text-emerald-900' : 'bg-white border-slate-300 text-teal-800 hover:bg-teal-50'}">
          <span class="mr-1">${meta.icon}</span>${lObj ? lObj.title.split('.')[0] + '. ' + lObj.title.split('.')[1].slice(0, 26) + '...' : lid}
        </button>`;
      }).join("");

      return `<div class="p-4 rounded-xl border border-slate-200 bg-slate-50 flex flex-col justify-between space-y-3">
        <div>
          <span class="text-xs font-extrabold uppercase px-2 py-0.5 rounded bg-teal-600 text-white">${s.week}</span>
          <h4 class="text-sm font-extrabold text-slate-900 mt-2">${s.focus}</h4>
          <p class="text-xs text-slate-600 mt-1"><strong>Meta da Semana:</strong> ${s.meta}</p>
        </div>
        <div class="space-y-1">
          <div class="text-[11px] font-bold text-slate-500 uppercase">Aulas da Semana (Clique p/ estudar):</div>
          <div class="flex flex-wrap gap-1.5">${lessonBtns}</div>
        </div>
      </div>`;
    }).join("");

    schedGrid.querySelectorAll(".open-lesson-chip").forEach(btn => {
      btn.addEventListener("click", () => {
        currentLessonId = btn.getAttribute("data-open-lesson");
        switchTab("tab-apostila");
        renderLessonsSidebar();
        renderCurrentLesson();
      });
    });
  }
}

// Render Tab 6: Connected Library (94 files with full analytical metadata)
function renderLibrary() {
  const grid = document.getElementById("libraryGrid");
  if (!grid) return;
  const q = (document.getElementById("librarySearchInput")?.value || "").trim().toLowerCase();
  const folder = document.getElementById("libraryFolderFilter")?.value || "all";

  const filtered = APP_DATA.sources.filter(s => {
    const matchFolder = folder === "all" || s.folder === folder;
    if (!matchFolder) return false;
    if (!q) return true;
    const titleStr = (s.title || s.name || "").toLowerCase();
    const noteStr = (s.note || "").toLowerCase();
    return titleStr.includes(q) || noteStr.includes(q) || s.folder.toLowerCase().includes(q) || String(s.num) === q;
  });

  grid.innerHTML = filtered.map(s => {
    const isRevoked = s.status === "revoked" || s.revoked === true;
    const isWarn = s.status === "warn";
    const cardStyle = isRevoked
      ? "bg-rose-50 border-rose-300"
      : isWarn
      ? "bg-amber-50/70 border-amber-300"
      : "bg-slate-50 border-slate-200 hover:border-teal-400";
    const badgeStyle = isRevoked
      ? "bg-rose-600 text-white"
      : isWarn
      ? "bg-amber-500 text-slate-950"
      : "bg-slate-200 text-slate-800";

    return `<div class="p-3.5 rounded-xl border transition flex flex-col justify-between space-y-2.5 ${cardStyle}">
      <div>
        <div class="flex items-center justify-between gap-2 mb-1">
          <span class="px-2 py-0.5 rounded text-[10px] font-bold ${badgeStyle}">
            FONTE #${s.num} ${isRevoked ? '— REVOGADA (NÃO ESTUDAR!)' : isWarn ? '— PARCIAL / COMPLEMENTADO' : ''}
          </span>
          <span class="text-[10px] font-semibold text-slate-500">${s.size || ''} &bull; ${s.tokens ? s.tokens.toLocaleString('pt-BR') + ' tokens' : ''}</span>
        </div>
        <div class="text-xs sm:text-sm font-extrabold text-slate-900">${s.title || s.name}</div>
        <div class="text-[11px] font-semibold text-teal-800 mt-0.5">${s.folder}</div>
        <p class="text-xs text-slate-700 mt-1.5 leading-snug">${s.note || ''}</p>
      </div>
      <div class="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-200/80">
        <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="px-2.5 py-1 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold">
          Abrir PDF &nearr;
        </a>
        ${s.lesson ? `<button type="button" data-lib-lesson="${s.lesson}" class="lib-open-lesson-btn px-2.5 py-1 rounded-lg bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs font-bold">
          Ir p/ Aula (${s.lesson}) &rarr;
        </button>` : ''}
      </div>
    </div>`;
  }).join("");

  grid.querySelectorAll(".lib-open-lesson-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      currentLessonId = btn.getAttribute("data-lib-lesson");
      switchTab("tab-apostila");
      renderLessonsSidebar();
      renderCurrentLesson();
    });
  });
}

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".main-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      switchTab(btn.getAttribute("data-tab"));
    });
  });

  document.getElementById("goToApostilaBtn")?.addEventListener("click", () => switchTab("tab-apostila"));

  document.querySelectorAll(".cat-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      currentCategoryFilter = btn.getAttribute("data-cat");
      document.querySelectorAll(".cat-filter-btn").forEach(b => {
        const active = b.getAttribute("data-cat") === currentCategoryFilter;
        b.className = active
          ? "cat-filter-btn px-2.5 py-1 rounded text-xs font-bold bg-slate-900 text-white"
          : "cat-filter-btn px-2.5 py-1 rounded text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200";
      });
      const filtered = getFilteredLessons();
      if (filtered.length > 0 && !filtered.some(x => x.id === currentLessonId)) {
        currentLessonId = filtered[0].id;
      }
      renderLessonsSidebar();
      renderCurrentLesson();
    });
  });

  document.getElementById("lessonSearchInput")?.addEventListener("input", renderLessonsSidebar);

  document.querySelectorAll(".study-mode-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      currentStudyMode = btn.getAttribute("data-mode");
      document.querySelectorAll(".study-mode-btn").forEach(b => {
        const active = b.getAttribute("data-mode") === currentStudyMode;
        b.className = active
          ? "study-mode-btn px-3 py-1.5 rounded-lg text-xs font-bold bg-teal-600 text-white shadow"
          : "study-mode-btn px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200";
      });
      renderCurrentLesson();
    });
  });

  document.querySelectorAll(".status-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      currentStatusFilter = btn.getAttribute("data-status");
      document.querySelectorAll(".status-filter-btn").forEach(b => {
        const active = b.getAttribute("data-status") === currentStatusFilter;
        b.className = active
          ? "status-filter-btn px-2 py-0.5 rounded text-[11px] font-bold bg-slate-800 text-white shadow-sm"
          : "status-filter-btn px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200";
      });
      const filtered = getFilteredLessons();
      if (filtered.length > 0 && !filtered.some(x => x.id === currentLessonId)) {
        currentLessonId = filtered[0].id;
      }
      renderLessonsSidebar();
      renderCurrentLesson();
    });
  });

  document.getElementById("toggleCompleteLessonBtn")?.addEventListener("click", () => {
    const currentStatus = getTopicStatus(currentLessonId);
    if (currentStatus === "completed" || currentStatus === "mastered") {
      updateTopicStatus(currentLessonId, "not_started");
    } else {
      updateTopicStatus(currentLessonId, "completed");
    }
  });

  document.getElementById("prevLessonBtn")?.addEventListener("click", () => {
    const idx = APP_DATA.lessons.findIndex(l => l.id === currentLessonId);
    if (idx > 0) {
      currentLessonId = APP_DATA.lessons[idx - 1].id;
      renderLessonsSidebar();
      renderCurrentLesson();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
  document.getElementById("nextLessonBtn")?.addEventListener("click", () => {
    const idx = APP_DATA.lessons.findIndex(l => l.id === currentLessonId);
    if (idx < APP_DATA.lessons.length - 1) {
      currentLessonId = APP_DATA.lessons[idx + 1].id;
      renderLessonsSidebar();
      renderCurrentLesson();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });

  document.getElementById("simuladoCatFilter")?.addEventListener("change", renderSimuladoAndFlashcards);
  document.getElementById("resetSimuladoBtn")?.addEventListener("click", () => {
    simAnswers = {};
    saveStorage(STORAGE_KEY_ANSWERS, simAnswers);
    renderSimuladoAndFlashcards();
    showToast("Respostas do simulado reiniciadas!");
  });

  document.getElementById("librarySearchInput")?.addEventListener("input", renderLibrary);
  document.getElementById("libraryFolderFilter")?.addEventListener("change", renderLibrary);

  const modal = document.getElementById("sitesModal");
  const rawTa = document.getElementById("rawHtmlTextarea");
  document.getElementById("copyHtmlForSitesBtn")?.addEventListener("click", () => {
    const fullHtml = "<!DOCTYPE html>\n" + document.documentElement.outerHTML;
    if (rawTa) rawTa.value = fullHtml;
    copyTextToClipboard(fullHtml, () => {
      showToast("Código HTML completo copiado! Veja as instruções para colar no Google Sites.");
    });
    if (modal) modal.classList.remove("hidden");
  });

  document.getElementById("closeModalBtn")?.addEventListener("click", () => modal?.classList.add("hidden"));
  document.getElementById("closeModalBtnBottom")?.addEventListener("click", () => modal?.classList.add("hidden"));

  document.getElementById("downloadHtmlBtn")?.addEventListener("click", () => {
    const fullHtml = "<!DOCTYPE html>\n" + document.documentElement.outerHTML;
    const blob = new Blob([fullHtml], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "index.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast("Download do arquivo index.html concluído! Pronto para enviar ao GitHub Pages.");
  });

  document.getElementById("exportProgressJsonBtn")?.addEventListener("click", () => {
    const payload = {
      platform: "ACE_SEMUSA_PVH_2026",
      exportedAt: new Date().toISOString(),
      topicStatus: topicStatus,
      completedLessons: completedLessons,
      simAnswers: simAnswers
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "progresso_ace_semusa_2026.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast("Backup JSON do seu progresso exportado com sucesso!");
  });

  document.getElementById("importProgressFileInput")?.addEventListener("change", (ev) => {
    const file = ev.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const parsed = JSON.parse(String(e.target?.result || "{}"));
        if (parsed.topicStatus && typeof parsed.topicStatus === "object") {
          topicStatus = parsed.topicStatus;
          saveStorage(STORAGE_KEY_TOPIC_STATUS, topicStatus);
        }
        if (Array.isArray(parsed.completedLessons)) {
          completedLessons = parsed.completedLessons;
          saveStorage(STORAGE_KEY_COMPLETED, completedLessons);
        }
        if (parsed.simAnswers && typeof parsed.simAnswers === "object") {
          simAnswers = parsed.simAnswers;
          saveStorage(STORAGE_KEY_ANSWERS, simAnswers);
        }
        updateGlobalProgress();
        renderLessonsSidebar();
        renderCurrentLesson();
        renderSimuladoAndFlashcards();
        renderTab5();
        showToast("Progresso importado e sincronizado com sucesso!");
      } catch (err) {
        showToast("Erro ao ler o arquivo JSON de progresso.");
      }
    };
    reader.readAsText(file);
  });


  // Carregamento dinâmico do arquivo ./data/app_data.json (compatível com GitHub Pages /acepvh/)
  async function loadAppData() {
    const DATA_URL = "./data/app_data.json";
    try {
      const response = await fetch(DATA_URL, { cache: "no-cache" });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status} - ${response.statusText}`);
      }
      APP_DATA = await response.json();
      if (Array.isArray(APP_DATA.lessons)) {
        APP_DATA.lessons.forEach(l => {
          if (l.sources && Array.isArray(l.sources.value)) {
            l.sources = l.sources.value;
          } else if (!Array.isArray(l.sources)) {
            l.sources = [];
          }
        });
      }
      updateGlobalProgress();
      renderTab1();
      renderLessonsSidebar();
      renderCurrentLesson();
      renderSimuladoAndFlashcards();
      renderTab4();
      renderTab5();
      renderLibrary();
    } catch (error) {
      console.error("Erro ao carregar ./data/app_data.json:", error);
      const container = document.getElementById("lessonContentContainer");
      if (container) {
        container.innerHTML = `
          <div class="p-5 rounded-xl bg-rose-50 border border-rose-300 text-rose-950 space-y-2">
            <h3 class="text-base font-extrabold text-rose-900">Erro ao carregar ./data/app_data.json</h3>
            <p class="text-xs sm:text-sm">Certifique-se de que a estrutura de pastas (<code>./index.html</code>, <code>./css/style.css</code>, <code>./js/app.js</code> e <code>./data/app_data.json</code>) está publicada no GitHub Pages ou sendo executada via servidor HTTP local (ex: Live Server ou <code>python3 -m http.server</code>).</p>
            <p class="text-xs font-mono text-rose-800">Detalhe técnico: ${error.message}</p>
          </div>
        `;
      }
      showToast("Aviso: publique no GitHub Pages ou use um servidor local para carregar ./data/app_data.json.");
    }
  }

  // Inicializa a Contagem Regressiva para a Prova IBGP (13/12/2026 14h45)
  updateHeroCountdown();
  setInterval(updateHeroCountdown, 1000);

  loadAppData();
});
