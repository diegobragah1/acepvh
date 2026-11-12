import type { Question, QuestionDifficulty } from '../types';

export interface FlatQuestion extends Question {
  qid: string;
  lessonQid: string;
  lessonId: string;
  lessonNum: number;
  lessonTitle: string;
  cat: string;
  catName: string;
  blockTitle: string;
}

export interface FlatFlashcard {
  f: string;
  front?: string;
  b: string;
  back?: string;
  fcid: string;
  srsKey: string;
  lessonId: string;
  lessonNum: number;
  lessonTitle: string;
  cat: string;
}

export type SimuladoSubMode = 'QUESTOES' | 'PROVA_OFICIAL' | 'SIMULADO_CUSTOM' | 'FLASHCARDS';
export type QuestionStatusFilter = 'ALL' | 'WRONG' | 'CORRECT' | 'UNANSWERED' | 'FAVORITES';
export type SrsFilterMode = 'ALL' | 'DUE' | 'HARD' | 'NEW' | 'KNOWN';

export const QUESTIONS_PER_PAGE = 15;
export const OFFICIAL_LIMIT_SECONDS = 3 * 3600; // 14h45 às 17h45 = 3h00 (Edital nº 25/2026)

export const CATEGORY_OPTIONS = [
  { id: 'esp', label: 'Específicos ACE' },
  { id: 'leg', label: 'Legislação / SUS' },
  { id: 'por', label: 'Português' },
  { id: 'rlm', label: 'Raciocínio Lógico' },
  { id: 'atu', label: 'Gerais / Rondônia' },
] as const;

export interface OfficialExamDraft {
  seed: number;
  answers: Record<string, number>;
  submitted: boolean;
  recorded: boolean;
  blindMode: boolean;
  elapsed: number;
}

export interface CustomExamDraft {
  cats: string[];
  lessonId: string;
  difficulty: 'ALL' | QuestionDifficulty;
  count: number;
  timeLimit: number | null;
  blindMode: boolean;
  seed: number;
  answers: Record<string, number>;
  submitted: boolean;
  recorded: boolean;
  elapsed: number;
}

export const OFFICIAL_DRAFT_STORAGE_KEY = 'ace_semusa_2026_official_exam_draft_v1';
export const CUSTOM_DRAFT_STORAGE_KEY = 'ace_semusa_2026_custom_exam_draft_v1';

export function seededPick<T>(pool: T[], count: number, seed: number): T[] {
  const copy = [...pool];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.abs((i * 1103515245 + seed * 12345 + 7919) % (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, Math.max(0, count));
}

export function buildOfficialExamSet(allQuestions: FlatQuestion[], seed: number): FlatQuestion[] {
  return [
    ...seededPick(allQuestions.filter((q) => q.cat === 'esp'), 15, seed),
    ...seededPick(allQuestions.filter((q) => q.cat === 'por'), 10, seed + 11),
    ...seededPick(allQuestions.filter((q) => q.cat === 'rlm'), 10, seed + 23),
    ...seededPick(allQuestions.filter((q) => q.cat === 'leg'), 10, seed + 37),
    ...seededPick(allQuestions.filter((q) => q.cat === 'atu'), 5, seed + 53),
  ];
}

export interface ExamScoreSummary {
  answered: number;
  correct: number;
  total: number;
  pct: number;
  points: number;
  approved: boolean;
  byCat: Record<string, { total: number; hits: number }>;
}

/**
 * Computes score, approval status (>= 50% of 2-point items), and category breakdown for any exam set.
 */
export function scoreExamQuestions(
  questions: Array<{ qid: string; cat: string; ans: number }>,
  answers: Record<string, number>,
  presetCategories?: Record<string, { total: number; hits: number }>
): ExamScoreSummary {
  let answered = 0;
  let correct = 0;
  const byCat: Record<string, { total: number; hits: number }> = {};

  if (presetCategories) {
    for (const [cat, val] of Object.entries(presetCategories)) {
      byCat[cat] = { total: val.total, hits: val.hits };
    }
  }

  for (const q of questions) {
    if (!presetCategories) {
      if (!byCat[q.cat]) byCat[q.cat] = { total: 0, hits: 0 };
      byCat[q.cat].total += 1;
    }
    const ans = answers[q.qid];
    if (ans !== undefined) {
      answered += 1;
      if (ans === q.ans) {
        correct += 1;
        if (!byCat[q.cat]) byCat[q.cat] = { total: 0, hits: 0 };
        byCat[q.cat].hits += 1;
      }
    }
  }

  const total = questions.length;
  const points = correct * 2;
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
  return { answered, correct, total, pct, points, approved: pct >= 50, byCat };
}

function validDraftAnswers(val: unknown): val is Record<string, number> {
  if (!val || typeof val !== 'object' || Array.isArray(val)) return false;
  return Object.values(val).every((v) => Number.isInteger(v) && v >= 0 && v < 4);
}

export function loadOfficialExamDraft(): OfficialExamDraft {
  const defaults: OfficialExamDraft = {
    seed: 1,
    answers: {},
    submitted: false,
    recorded: false,
    blindMode: true,
    elapsed: 0,
  };
  if (typeof window === 'undefined') return defaults;
  try {
    const raw = window.localStorage.getItem(OFFICIAL_DRAFT_STORAGE_KEY);
    if (!raw) return defaults;
    const p = JSON.parse(raw) as Partial<OfficialExamDraft>;
    return {
      seed: Number.isInteger(p.seed) && (p.seed as number) > 0 ? (p.seed as number) : 1,
      answers: validDraftAnswers(p.answers) ? p.answers : {},
      submitted: Boolean(p.submitted),
      recorded: Boolean(p.recorded),
      blindMode: typeof p.blindMode === 'boolean' ? p.blindMode : true,
      elapsed: typeof p.elapsed === 'number' && p.elapsed >= 0 ? Math.floor(p.elapsed) : 0,
    };
  } catch {
    return defaults;
  }
}

export function loadCustomExamDraft(): CustomExamDraft {
  const defaults: CustomExamDraft = {
    cats: ['esp', 'leg', 'por', 'rlm', 'atu'],
    lessonId: 'ALL',
    difficulty: 'ALL',
    count: 20,
    timeLimit: 3600,
    blindMode: true,
    seed: 1,
    answers: {},
    submitted: false,
    recorded: false,
    elapsed: 0,
  };
  if (typeof window === 'undefined') return defaults;
  try {
    const raw = window.localStorage.getItem(CUSTOM_DRAFT_STORAGE_KEY);
    if (!raw) return defaults;
    const p = JSON.parse(raw) as Partial<CustomExamDraft>;
    return {
      cats: Array.isArray(p.cats) && p.cats.length > 0 ? p.cats.filter((c) => typeof c === 'string') : defaults.cats,
      lessonId: typeof p.lessonId === 'string' ? p.lessonId : 'ALL',
      difficulty:
        p.difficulty === 'Fácil' || p.difficulty === 'Intermediário' || p.difficulty === 'Difícil'
          ? p.difficulty
          : 'ALL',
      count: typeof p.count === 'number' && p.count >= 5 && p.count <= 100 ? p.count : 20,
      timeLimit:
        p.timeLimit === null || (typeof p.timeLimit === 'number' && p.timeLimit > 0)
          ? p.timeLimit
          : 3600,
      blindMode: typeof p.blindMode === 'boolean' ? p.blindMode : true,
      seed: Number.isInteger(p.seed) && (p.seed as number) > 0 ? (p.seed as number) : 1,
      answers: validDraftAnswers(p.answers) ? p.answers : {},
      submitted: Boolean(p.submitted),
      recorded: Boolean(p.recorded),
      elapsed: typeof p.elapsed === 'number' && p.elapsed >= 0 ? Math.floor(p.elapsed) : 0,
    };
  } catch {
    return defaults;
  }
}

export function saveExamDraft<T>(key: string, draft: T): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(key, JSON.stringify(draft));
  } catch {
    // Ignore storage quota errors
  }
}
