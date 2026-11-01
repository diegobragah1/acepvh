import type { Lesson, LessonBlock } from '../types';
import { normalizeLesson } from '../utils/normalizeData';
import { withDeepening } from '../data/deepening';
import { protectMath } from '../utils/math';

export interface VFChallenge {
  id: string;
  blockTitle: string;
  statement: string;
  isTrue: boolean;
  explanation: string;
}

const processedLessonCache = new Map<string, Lesson>();

/**
 * Normalizes and enriches a single lesson with memoization by lesson ID.
 */
export function getNormalizedEnrichedLesson(rawLesson: Lesson, index = 0): Lesson {
  const cached = processedLessonCache.get(rawLesson.id);
  if (cached && cached.title === rawLesson.title && cached.blocks.length >= rawLesson.blocks.length) {
    return cached;
  }
  const normalized = withDeepening(normalizeLesson(rawLesson, index));
  processedLessonCache.set(rawLesson.id, normalized);
  return normalized;
}

/**
 * Fetches an individual lesson JSON on demand from `data/lessons/<id>.json`.
 */
export async function fetchLessonById(lessonId: string): Promise<Lesson | null> {
  if (processedLessonCache.has(lessonId)) {
    return processedLessonCache.get(lessonId)!;
  }
  try {
    const response = await fetch(`data/lessons/${encodeURIComponent(lessonId)}.json`);
    if (!response.ok) return null;
    const raw = (await response.json()) as Lesson;
    return getNormalizedEnrichedLesson(raw);
  } catch {
    return null;
  }
}

/**
 * Generates True/False (Certo/Errado) rapid-fire challenges from a lesson's block questions.
 */
export function buildVFChallenges(lesson: Lesson): VFChallenge[] {
  const items: VFChallenge[] = [];
  (lesson.blocks || []).forEach((block, bIdx) => {
    (block.questions || []).forEach((q, qIdx) => {
      const opts = q.options || [];
      const ans = typeof q.ans === 'number' ? q.ans : 0;
      const isExceptQuestion = /incorret|exceto|n[aã]o\s+corresponde|errad|falsa/i.test(q.q || '');
      if (isExceptQuestion || opts.length < 2) return;

      const cleanOption = (txt: string) => txt.replace(/^[A-E]\)\s*/i, '').trim();
      const rightText = cleanOption(opts[ans] || '');
      if (rightText.length > 25) {
        items.push({
          id: `${lesson.id}_vf_${bIdx}_${qIdx}_T`,
          blockTitle: block.title,
          statement: rightText,
          isTrue: true,
          explanation: q.comment || 'Afirmativa integralmente correta conforme gabarito comentado.',
        });
      }

      const wrongIdx = (ans + 1) % opts.length;
      const wrongText = cleanOption(opts[wrongIdx] || '');
      if (wrongText.length > 25) {
        items.push({
          id: `${lesson.id}_vf_${bIdx}_${qIdx}_F`,
          blockTitle: block.title,
          statement: wrongText,
          isTrue: false,
          explanation: `Afirmativa INCORRETA (Pegadinha de Prova). O correto seria: "${rightText}". ${q.comment || ''}`,
        });
      }
    });
  });
  return items.slice(0, 12);
}

/**
 * Applies active-recall Cloze masks and search highlights to rendered lesson HTML,
 * preserving MathML/KaTeX spans untouched via protectMath.
 */
export function processDidacticHtml(
  rawHtml: string,
  searchTerm: string,
  clozeActive: boolean,
  revealedSet: Set<string>,
  blockPrefix: string
): string {
  if (!rawHtml) return '';
  const math = protectMath(rawHtml);
  const parts = math.text.split(/(<[^>]+>)/g);
  let clozeCounter = 0;

  const escapedSearch =
    searchTerm.trim().length >= 2
      ? searchTerm.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      : '';
  const searchRegex = escapedSearch ? new RegExp(`(${escapedSearch})`, 'gi') : null;

  const clozeRegex =
    /\b(\d+(?:[.,]\d+)?\s*(?:%|dias?|horas?|meses|anos?|metros?|km|mg\/L|mL|pts|pontos?|questões|vagas)|Art\.\s*\d+[º°]?|Lei\s*(?:Federal|Municipal|Complementar)?\s*n?[º°]?\s*[\d.\/-]+|Portaria\s*(?:GM\/MS|MS)?\s*n?[º°]?\s*[\d.\/-]+|LC\s*n?[º°]?\s*[\d.\/-]+)\b/gi;

  const processed = parts
    .map((part) => {
      if (part.startsWith('<')) return part;
      let text = part;

      if (clozeActive) {
        text = text.replace(clozeRegex, (match) => {
          clozeCounter += 1;
          const tokenId = `${blockPrefix}_c_${clozeCounter}`;
          const isRevealed = revealedSet.has(tokenId);
          if (isRevealed) {
            return `<span data-cloze-id="${tokenId}" title="Clique para ocultar novamente" class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-900 font-extrabold border border-emerald-400 cursor-pointer transition-all">${match} <span class="text-[9px] opacity-70">🔓</span></span>`;
          }
          return `<span data-cloze-id="${tokenId}" title="Clique para revelar o prazo/lei/valor" class="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-amber-100 hover:bg-amber-200 text-amber-950 font-extrabold border border-amber-400 cursor-pointer select-none shadow-2xs transition-all"><span class="blur-[4px] hover:blur-[2px] transition">${match}</span> <span class="text-[10px]">🔒</span></span>`;
        });
      }

      if (searchRegex) {
        text = text.replace(
          searchRegex,
          '<mark class="bg-yellow-300 text-slate-950 font-extrabold px-1 rounded shadow-2xs">$1</mark>'
        );
      }

      return text;
    })
    .join('');

  return math.restore(processed);
}

/**
 * Checks whether a lesson block matches the active search term and block type filter.
 */
export function matchesLessonBlockFilter(
  block: LessonBlock,
  blockTypeFilter: 'ALL' | 'THEORY' | 'QUIZ' | 'FLASHCARDS',
  searchTerm: string
): boolean {
  if (blockTypeFilter === 'QUIZ' && (!block.questions || block.questions.length === 0)) return false;
  if (blockTypeFilter === 'FLASHCARDS' && (!block.flashcards || block.flashcards.length === 0)) return false;

  const q = searchTerm.trim().toLowerCase();
  if (!q) return true;

  const titleMatch = (block.title || '').toLowerCase().includes(q);
  const aMatch = (block.modoA || block.modoA_markdown || '').toLowerCase().includes(q);
  const bMatch = (block.modoB || block.modoB_markdown || '').toLowerCase().includes(q);
  const cMatch = (block.questions || []).some(
    (qu) =>
      (qu.q || '').toLowerCase().includes(q) ||
      (qu.comment || '').toLowerCase().includes(q) ||
      (qu.options || []).some((o) => o.toLowerCase().includes(q))
  );
  const fcMatch = (block.flashcards || []).some(
    (fc) => (fc.f || fc.front || '').toLowerCase().includes(q) || (fc.b || fc.back || '').toLowerCase().includes(q)
  );
  return titleMatch || aMatch || bMatch || cMatch || fcMatch;
}
