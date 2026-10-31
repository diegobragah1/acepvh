import type { Lesson, LessonBlock } from '../../types';
import { portugues } from './portugues';
import { matematica } from './matematica';
import { especificos } from './especificos';
import { legislacao } from './legislacao';
import { gerais } from './gerais';
import type { DeepeningEntry } from './types';

export const DEEPENING_PREFIX = 'Aprofundamento aplicado — ';
export const DEEPENING_ENTRIES: DeepeningEntry[] = [
  ...especificos, ...legislacao, ...portugues, ...matematica, ...gerais,
];
const entriesById = new Map(DEEPENING_ENTRIES.map(entry => [entry.id, entry]));

export function deepeningBlock(entry: DeepeningEntry): LessonBlock {
  const sources = entry.references.map(ref => `- [${ref.title}](${ref.url}) — ${ref.section}`).join('\n');
  return {
    title: `${DEEPENING_PREFIX}${entry.title}`,
    modoA_markdown: `${entry.theory}\n\n## Referências deste complemento\n${sources}\n\nComplemento e exercícios autorais. Consulta editorial: 31/10/2026. Para legislação, observe a versão aplicável ao edital.`,
    modoB_markdown: entry.summary,
    questions: entry.questions.map(q => ({ ...q, q: q.q.startsWith('[Autoral]') ? q.q : `[Autoral] ${q.q}`, options: [...q.options] })),
    flashcards: entry.flashcards.map(([f,b]) => ({f,b,front:f,back:b})),
  };
}

/** Append only: original positions continue identifying the original answers. */
export function withDeepening(lesson: Lesson): Lesson {
  const entry = entriesById.get(lesson.id);
  if (!entry) return lesson;
  const title = `${DEEPENING_PREFIX}${entry.title}`;
  const alreadyPresent = lesson.blocks.some(b => b.title === title);
  const blocks = alreadyPresent ? lesson.blocks : [...lesson.blocks, deepeningBlock(entry)];
  return {
    ...lesson, blocks,
    questionsCount: blocks.reduce((n,b) => n + (b.questions?.length || 0), 0),
    flashcardsCount: blocks.reduce((n,b) => n + (b.flashcards?.length || 0), 0),
  };
}
