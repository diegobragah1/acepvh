import type { AppData } from '../types';
import { questionIdentity } from './questionIdentity';

export type GlobalSearchCategory = 'ALL' | 'AULAS' | 'FICHAS' | 'QUESTOES';

export interface GlobalSearchResultItem {
  id: string;
  type: 'aula' | 'ficha' | 'questao';
  title: string;
  subtitle: string;
  badge: string;
  snippet: string;
  matchedTerm: string;
  lessonId?: string;
  lessonNum?: number;
  blockIdx?: number;
  diseaseName?: string;
  questionId?: string;
}

export interface GlobalSearchSummary {
  results: GlobalSearchResultItem[];
  counts: {
    total: number;
    aulas: number;
    fichas: number;
    questoes: number;
  };
}

/**
 * Strips HTML tags and collapses whitespace into clean plain text for indexing and snippet generation.
 */
export function stripHtmlToText(input: string): string {
  if (!input) return '';
  return String(input)
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&bull;|&middot;/gi, '·')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Normalizes a string for accent-insensitive and case-insensitive comparison while keeping character length 1:1.
 */
export function normalizeForSearch(str: string): string {
  return String(str || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

/**
 * Extracts a readable contextual snippet (~140 chars) around the first occurrence of normalizedQuery.
 */
export function buildContextualSnippet(plainText: string, query: string, maxLen = 145): string {
  if (!plainText) return '';
  const normText = normalizeForSearch(plainText);
  const normQuery = normalizeForSearch(query.trim());
  if (!normQuery) return plainText.slice(0, maxLen);

  const terms = normQuery.split(/\s+/).filter(Boolean);
  let matchIdx = normText.indexOf(normQuery);
  if (matchIdx === -1 && terms.length > 0) {
    for (const t of terms) {
      const idx = normText.indexOf(t);
      if (idx !== -1) {
        matchIdx = idx;
        break;
      }
    }
  }

  if (matchIdx === -1) {
    return plainText.length > maxLen ? `${plainText.slice(0, maxLen).trim()}…` : plainText;
  }

  const half = Math.floor((maxLen - normQuery.length) / 2);
  const start = Math.max(0, matchIdx - Math.max(25, half));
  const end = Math.min(plainText.length, start + maxLen);
  const prefix = start > 0 ? '…' : '';
  const suffix = end < plainText.length ? '…' : '';
  return `${prefix}${plainText.slice(start, end).trim()}${suffix}`;
}

/**
 * Checks whether all tokens in normalizedQuery appear in normalizedHaystack.
 */
function matchesAllTokens(normalizedHaystack: string, queryTokens: string[]): boolean {
  if (queryTokens.length === 0) return false;
  for (const token of queryTokens) {
    if (!normalizedHaystack.includes(token)) return false;
  }
  return true;
}

/**
 * Searches across all 49 lessons (blocks/theory/summaries), 14 endemic fichas, and 732 questions.
 */
export function searchGlobalContent(
  appData: AppData | null,
  rawQuery: string,
  categoryFilter: GlobalSearchCategory = 'ALL',
  maxResultsPerCategory = 20
): GlobalSearchSummary {
  const empty: GlobalSearchSummary = {
    results: [],
    counts: { total: 0, aulas: 0, fichas: 0, questoes: 0 },
  };
  if (!appData) return empty;

  const trimmed = rawQuery.trim();
  if (trimmed.length < 2) return empty;

  const normQuery = normalizeForSearch(trimmed);
  const tokens = normQuery.split(/\s+/).filter((t) => t.length >= 1);
  if (tokens.length === 0) return empty;

  const aulaMatches: GlobalSearchResultItem[] = [];
  const fichaMatches: GlobalSearchResultItem[] = [];
  const questaoMatches: GlobalSearchResultItem[] = [];

  let totalAulas = 0;
  let totalFichas = 0;
  let totalQuestoes = 0;

  // 1. Search Lessons & Blocks (AULAS)
  for (const lesson of appData.lessons || []) {
    const lessonHeaderText = `${lesson.title} ${lesson.editalRef || ''} ${lesson.mindMap?.centralTitle || ''} ${lesson.mindMap?.mnemonic || ''}`;
    const normLessonHeader = normalizeForSearch(lessonHeaderText);
    let matchedInLessonBlocks = false;

    (lesson.blocks || []).forEach((block, bIdx) => {
      const blockPlain = stripHtmlToText(
        `${block.title || ''} ${block.modoA || ''} ${block.modoA_markdown || ''} ${block.modoB || ''} ${block.modoB_markdown || ''}`
      );
      const normBlock = normalizeForSearch(`${lesson.title} ${blockPlain}`);
      if (matchesAllTokens(normBlock, tokens)) {
        matchedInLessonBlocks = true;
        totalAulas += 1;
        if (aulaMatches.length < maxResultsPerCategory) {
          aulaMatches.push({
            id: `aula_${lesson.id}_b${bIdx}`,
            type: 'aula',
            title: `Aula ${String(lesson.num).padStart(2, '0')}: ${lesson.title}`,
            subtitle: `Seção ${bIdx + 1}: ${block.title}`,
            badge: `Aula ${String(lesson.num).padStart(2, '0')} · ${lesson.cat.toUpperCase()}`,
            snippet: buildContextualSnippet(blockPlain, trimmed),
            matchedTerm: trimmed,
            lessonId: lesson.id,
            lessonNum: lesson.num,
            blockIdx: bIdx,
          });
        }
      }
    });

    if (!matchedInLessonBlocks && matchesAllTokens(normLessonHeader, tokens)) {
      totalAulas += 1;
      if (aulaMatches.length < maxResultsPerCategory) {
        aulaMatches.push({
          id: `aula_${lesson.id}_b0`,
          type: 'aula',
          title: `Aula ${String(lesson.num).padStart(2, '0')}: ${lesson.title}`,
          subtitle: lesson.editalRef || 'Conteúdo Integral da Aula',
          badge: `Aula ${String(lesson.num).padStart(2, '0')} · ${lesson.cat.toUpperCase()}`,
          snippet: buildContextualSnippet(stripHtmlToText(lessonHeaderText), trimmed),
          matchedTerm: trimmed,
          lessonId: lesson.id,
          lessonNum: lesson.num,
          blockIdx: 0,
        });
      }
    }
  }

  // 2. Search Endemic Fichas (FICHAS)
  (appData.endemics || []).forEach((ficha, fIdx) => {
    const fichaPlain = stripHtmlToText(
      `${ficha.doenca} Agente: ${ficha.agente}. Vetor: ${ficha.vetor}. Reservatórios: ${ficha.hospedeiros}. Transmissão: ${ficha.transmissao}. Clínica: ${ficha.clinica}. Diagnóstico: ${ficha.diagnostico}. Controle ACE: ${ficha.controle}.`
    );
    const normFicha = normalizeForSearch(fichaPlain);
    if (matchesAllTokens(normFicha, tokens)) {
      totalFichas += 1;
      if (fichaMatches.length < maxResultsPerCategory) {
        fichaMatches.push({
          id: `ficha_${fIdx}_${ficha.doenca}`,
          type: 'ficha',
          title: `Ficha de Endemia: ${ficha.doenca}`,
          subtitle: `Agente: ${ficha.agente} · Vetor: ${ficha.vetor}`,
          badge: `Ficha #${fIdx + 1}`,
          snippet: buildContextualSnippet(fichaPlain, trimmed),
          matchedTerm: trimmed,
          diseaseName: ficha.doenca,
        });
      }
    }
  });

  // 3. Search Questions (QUESTOES)
  for (const lesson of appData.lessons || []) {
    (lesson.blocks || []).forEach((block, bIdx) => {
      (block.questions || []).forEach((q, qIdx) => {
        const qPlain = stripHtmlToText(
          `${q.q || ''} ${(q.options || []).join(' ')} ${q.comment || ''}`
        );
        const normQ = normalizeForSearch(`${lesson.title} ${block.title} ${qPlain}`);
        if (matchesAllTokens(normQ, tokens)) {
          totalQuestoes += 1;
          if (questaoMatches.length < maxResultsPerCategory) {
            const qid = questionIdentity(`${lesson.id}_${bIdx}_${qIdx}`, q);
            questaoMatches.push({
              id: `questao_${qid}`,
              type: 'questao',
              title: stripHtmlToText(q.q || '').slice(0, 115) + (q.q && q.q.length > 115 ? '…' : ''),
              subtitle: `Aula ${String(lesson.num).padStart(2, '0')} (${lesson.cat.toUpperCase()}) · ${block.title}`,
              badge: `Questão · Aula ${String(lesson.num).padStart(2, '0')}`,
              snippet: buildContextualSnippet(qPlain, trimmed),
              matchedTerm: trimmed,
              lessonId: lesson.id,
              lessonNum: lesson.num,
              blockIdx: bIdx,
              questionId: qid,
            });
          }
        }
      });
    });
  }

  let results: GlobalSearchResultItem[] = [];
  if (categoryFilter === 'AULAS') {
    results = aulaMatches;
  } else if (categoryFilter === 'FICHAS') {
    results = fichaMatches;
  } else if (categoryFilter === 'QUESTOES') {
    results = questaoMatches;
  } else {
    results = [
      ...aulaMatches.slice(0, 8),
      ...fichaMatches.slice(0, 6),
      ...questaoMatches.slice(0, 8),
    ];
  }

  return {
    results,
    counts: {
      total: totalAulas + totalFichas + totalQuestoes,
      aulas: totalAulas,
      fichas: totalFichas,
      questoes: totalQuestoes,
    },
  };
}
