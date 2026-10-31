import { AppData, Lesson, MindMapBranch, MindMapNode, Flashcard, Question } from '../types';
import { withDeepening } from '../data/deepening';
import { correctEditorialClaims } from './editorialCorrections';

const FA_ICON_MAP: Record<string, string> = {
  'fa-chart-pie': '📊',
  'fa-dog': '🐕',
  'fa-chart-line': '📈',
  'fa-bullhorn': '📢',
  'fa-spell-check': '🔤',
  'fa-magnifying-glass': '🔎',
  'fa-puzzle-piece': '🧩',
  'fa-sitemap': '🗂️',
  'fa-quote-right': '✒️',
  'fa-scale-balanced': '⚖️',
  'fa-check-double': '✅',
  'fa-superscript': '🔢',
  'fa-gears': '⚙️',
  'fa-dice': '🎲',
  'fa-cube': '🧊',
  'fa-water': '🌊',
  'fa-landmark': '🏛️',
  'fa-globe': '🌍',
};

const VALID_COLORS = new Set(['teal', 'indigo', 'amber', 'emerald', 'rose', 'violet']);

export function toSafeString(val: unknown): string {
  if (typeof val === 'string') return val;
  if (typeof val === 'number' || typeof val === 'boolean') return String(val);
  if (val && typeof val === 'object') {
    const obj = val as Record<string, unknown>;
    if (typeof obj.wrong === 'string' && typeof obj.right === 'string') {
      return `❌ Mito/Pegadinha: "${obj.wrong}" — ✅ CORRETO: ${obj.right}`;
    }
    if (typeof obj.label === 'string' && typeof obj.detail === 'string') {
      return `${obj.label}: ${obj.detail}`;
    }
    if (typeof obj.value === 'string') {
      return obj.value;
    }
    try {
      return JSON.stringify(val);
    } catch {
      return '';
    }
  }
  return '';
}

export function normalizeArray<T>(val: unknown): T[] {
  if (Array.isArray(val)) return val;
  if (val && typeof val === 'object' && Array.isArray((val as { value?: unknown }).value)) {
    return (val as { value: T[] }).value;
  }
  return [];
}

export function normalizeMindMapBranch(rawBranch: unknown, idx: number): MindMapBranch {
  const b = (rawBranch && typeof rawBranch === 'object' ? rawBranch : {}) as Record<string, unknown>;
  const rawIcon = toSafeString(b.icon).trim() || '📌';
  const icon = FA_ICON_MAP[rawIcon] || (rawIcon.startsWith('fa-') ? '📌' : rawIcon);

  const rawColor = toSafeString(b.color).trim().toLowerCase();
  const mappedColor = rawColor === 'purple' ? 'violet' : rawColor;
  const color = (VALID_COLORS.has(mappedColor) ? mappedColor : 'teal') as MindMapBranch['color'];

  const rawNodes = normalizeArray<unknown>(b.nodes);
  const rawItems = normalizeArray<unknown>(b.items);

  let nodes: MindMapNode[] = [];
  if (rawNodes.length > 0) {
    nodes = rawNodes.map((n, nIdx) => {
      if (typeof n === 'string') {
        const colonIdx = n.indexOf(':');
        if (colonIdx > 0 && colonIdx < 65) {
          return {
            label: n.slice(0, colonIdx).trim(),
            detail: n.slice(colonIdx + 1).trim() || n.trim(),
            badge: `Ponto #${nIdx + 1}`,
          };
        }
        return {
          label: `Conceito #${nIdx + 1}`,
          detail: n,
        };
      }
      const nObj = (n && typeof n === 'object' ? n : {}) as Record<string, unknown>;
      return {
        label: toSafeString(nObj.label) || `Tópico #${nIdx + 1}`,
        detail: toSafeString(nObj.detail),
        badge: nObj.badge ? toSafeString(nObj.badge) : undefined,
      };
    });
  } else if (rawItems.length > 0) {
    nodes = rawItems.map((item, iIdx) => {
      const str = toSafeString(item);
      const colonIdx = str.indexOf(':');
      if (colonIdx > 0 && colonIdx < 65) {
        return {
          label: str.slice(0, colonIdx).trim(),
          detail: str.slice(colonIdx + 1).trim() || str.trim(),
          badge: 'Síntese IBGP',
        };
      }
      return {
        label: `Ponto-Chave #${iIdx + 1}`,
        detail: str,
        badge: 'Síntese IBGP',
      };
    });
  }

  return {
    title: toSafeString(b.title) || `Ramo ${idx + 1}`,
    icon,
    color,
    nodes,
  };
}

export function normalizeFlashcard(rawFc: unknown): Flashcard {
  const fc = (rawFc && typeof rawFc === 'object' ? rawFc : {}) as Record<string, unknown>;
  const frontText = toSafeString(fc.f ?? fc.front);
  const backText = toSafeString(fc.b ?? fc.back);
  return {
    f: frontText,
    front: frontText,
    b: backText,
    back: backText,
    lessonTitle: fc.lessonTitle ? toSafeString(fc.lessonTitle) : undefined,
  };
}

export function normalizeQuestion(rawQ: unknown): Question {
  const q = (rawQ && typeof rawQ === 'object' ? rawQ : {}) as Record<string, unknown>;
  const options = normalizeArray<unknown>(q.options).map(opt => toSafeString(opt));
  const rawAns = typeof q.ans === 'number' ? q.ans : typeof q.correct === 'number' ? q.correct : 0;
  const safeAns = options.length > 0 && rawAns >= 0 && rawAns < options.length ? rawAns : 0;
  return {
    q: toSafeString(q.q ?? q.stem),
    options,
    ans: safeAns,
    comment: toSafeString(q.comment ?? q.explanation),
  };
}

export function normalizeLesson(rawLesson: unknown, idx: number): Lesson {
  const l = (rawLesson && typeof rawLesson === 'object' ? rawLesson : {}) as Record<string, unknown>;
  const sources = normalizeArray<unknown>(l.sources)
    .map(s => Number(s))
    .filter(n => !Number.isNaN(n));

  const blocks = normalizeArray<unknown>(l.blocks).map((rawBlock, bIdx) => {
    const b = (rawBlock && typeof rawBlock === 'object' ? rawBlock : {}) as Record<string, unknown>;
    return {
      title: toSafeString(b.title) || `Bloco ${bIdx + 1}`,
      modoA_markdown: b.modoA_markdown ? correctEditorialClaims(toSafeString(b.modoA_markdown)) : undefined,
      modoB_markdown: b.modoB_markdown ? correctEditorialClaims(toSafeString(b.modoB_markdown)) : undefined,
      modoA: b.modoA ? correctEditorialClaims(toSafeString(b.modoA)) : undefined,
      modoB: b.modoB ? correctEditorialClaims(toSafeString(b.modoB)) : undefined,
      questions: normalizeArray<unknown>(b.questions).map(normalizeQuestion),
      flashcards: normalizeArray<unknown>(b.flashcards).map(normalizeFlashcard),
    };
  });

  let mindMap: Lesson['mindMap'] = undefined;
  if (l.mindMap && typeof l.mindMap === 'object') {
    const mm = l.mindMap as Record<string, unknown>;
    const deadlinesRaw = normalizeArray<unknown>(mm.deadlinesAndNumbers ?? mm.keyMetrics);
    mindMap = {
      centralTitle: toSafeString(mm.centralTitle) || toSafeString(l.title),
      centralSubtitle: toSafeString(mm.centralSubtitle),
      mnemonic: toSafeString(mm.mnemonic),
      deadlinesAndNumbers: deadlinesRaw.map(d => {
        const dObj = (d && typeof d === 'object' ? d : {}) as Record<string, unknown>;
        return {
          value: toSafeString(dObj.value),
          label: toSafeString(dObj.label),
          ref: toSafeString(dObj.ref),
        };
      }),
      branches: normalizeArray<unknown>(mm.branches).map(normalizeMindMapBranch),
      goldenTraps: normalizeArray<unknown>(mm.goldenTraps).map(gt => {
        const gObj = (gt && typeof gt === 'object' ? gt : {}) as Record<string, unknown>;
        return {
          wrong: toSafeString(gObj.wrong),
          right: toSafeString(gObj.right),
        };
      }),
    };
  }

  const totalQ = blocks.reduce((acc, b) => acc + (b.questions?.length || 0), 0);
  const totalFC = blocks.reduce((acc, b) => acc + (b.flashcards?.length || 0), 0);

  return {
    id: toSafeString(l.id) || `lesson_${idx + 1}`,
    num: typeof l.num === 'number' ? l.num : idx + 1,
    slug: l.slug ? toSafeString(l.slug) : undefined,
    subjectFolder: l.subjectFolder ? toSafeString(l.subjectFolder) : undefined,
    mdPath: l.mdPath ? toSafeString(l.mdPath) : undefined,
    mdLegacyPath: l.mdLegacyPath ? toSafeString(l.mdLegacyPath) : undefined,
    cat: toSafeString(l.cat) || 'esp',
    catName: toSafeString(l.catName) || 'Geral',
    weight: toSafeString(l.weight) || 'Peso 2,0',
    title: toSafeString(l.title) || `Aula ${idx + 1}`,
    editalRef: toSafeString(l.editalRef),
    auditBadge: toSafeString(l.auditBadge) || '100% Auditado',
    sources,
    questionsCount: typeof l.questionsCount === 'number' ? l.questionsCount : totalQ,
    flashcardsCount: typeof l.flashcardsCount === 'number' ? l.flashcardsCount : totalFC,
    mindMap,
    blocks,
  };
}

export function normalizeAppData(raw: unknown): AppData {
  const data = (raw && typeof raw === 'object' ? raw : {}) as Record<string, unknown>;

  const cargos = normalizeArray<Record<string, unknown>>(data.cargos).map(c => ({
    code: toSafeString(c.code),
    local: toSafeString(c.local),
    ac: Number(c.ac || 0),
    pcd: Number(c.pcd || 0),
    pn: Number(c.pn || 0),
    pi: Number(c.pi || 0),
    imediata: c.imediata !== undefined ? Number(c.imediata) : undefined,
    im: c.im !== undefined ? Number(c.im) : undefined,
    cr: Number(c.cr || 0),
    total: c.total !== undefined ? Number(c.total) : undefined,
    tot: c.tot !== undefined ? Number(c.tot) : undefined,
  }));

  const sources = normalizeArray<Record<string, unknown>>(data.sources).map(s => ({
    num: Number(s.num || 0),
    folder: toSafeString(s.folder),
    title: s.title ? toSafeString(s.title) : undefined,
    name: s.name ? toSafeString(s.name) : undefined,
    url: toSafeString(s.url),
    note: s.note ? toSafeString(s.note) : undefined,
    tokens: s.tokens !== undefined ? Number(s.tokens) : undefined,
    size: s.size ? toSafeString(s.size) : undefined,
    lesson: s.lesson ? toSafeString(s.lesson) : undefined,
    status: s.status ? toSafeString(s.status) : undefined,
    revoked: Boolean(s.revoked),
  }));

  const lessons = normalizeArray<unknown>(data.lessons).map(normalizeLesson).map(withDeepening);

  const endemics = normalizeArray<Record<string, unknown>>(data.endemics).map(e => ({
    doenca: toSafeString(e.doenca),
    agente: toSafeString(e.agente),
    vetor: toSafeString(e.vetor),
    hospedeiros: toSafeString(e.hospedeiros),
    transmissao: toSafeString(e.transmissao),
    clinica: toSafeString(e.clinica),
    diagnostico: toSafeString(e.diagnostico),
    controle: toSafeString(e.controle),
  }));

  const schedule = normalizeArray<Record<string, unknown>>(data.schedule).map(s => ({
    week: toSafeString(s.week),
    focus: toSafeString(s.focus),
    meta: toSafeString(s.meta),
    lessons: normalizeArray<unknown>(s.lessons).map(x => toSafeString(x)),
  }));

  const auditMatrix = normalizeArray<Record<string, unknown>>(data.auditMatrix).map(a => ({
    disc: toSafeString(a.disc),
    item: toSafeString(a.item),
    source: toSafeString(a.source),
    pages: toSafeString(a.pages),
    before: toSafeString(a.before),
    missing: toSafeString(a.missing),
    action: toSafeString(a.action),
  }));

  return {
    cargos,
    sources,
    lessons,
    endemics,
    schedule,
    auditMatrix,
  };
}
