import type { AppData } from '../types';

export interface AuditIssue {
  severity: 'error' | 'warning';
  code: string;
  lessonId?: string;
  message: string;
}

/** Structural checks only. These do not certify factual accuracy or edital coverage. */
export function auditContent(data: AppData) {
  const issues: AuditIssue[] = [];
  const ids = new Set<string>();
  const sources = new Set(data.sources.map(s => s.num));
  let questions = 0, flashcards = 0, blocks = 0;
  const categories: Record<string, number> = {};
  const scheduled = new Set(data.schedule.flatMap(s => s.lessons));
  const add = (severity: AuditIssue['severity'], code: string, message: string, lessonId?: string) =>
    issues.push({ severity, code, message, lessonId });
  for (const lesson of data.lessons) {
    if (!lesson.id || ids.has(lesson.id)) add('error', 'lesson-id', 'Identificador de aula ausente ou duplicado.', lesson.id);
    ids.add(lesson.id);
    categories[lesson.cat] = (categories[lesson.cat] || 0) + 1;
    const refs = Array.isArray(lesson.sources) ? lesson.sources : lesson.sources?.value || [];
    if (!refs.length) add('warning', 'sources-missing', 'Vincular fontes e registrar página/seção da fundamentação.', lesson.id);
    for (const ref of refs) if (!sources.has(ref)) add('error', 'source-unknown', `Fonte #${ref} não cadastrada.`, lesson.id);
    if (!scheduled.has(lesson.id)) add('warning', 'schedule-missing', 'Aula ausente do cronograma atual.', lesson.id);
    if (!lesson.blocks.length) add('error', 'blocks-empty', 'Aula sem blocos.', lesson.id);
    for (const [bi, block] of lesson.blocks.entries()) {
      blocks++;
      const label = `Bloco ${bi + 1}`;
      if (!(block.modoA || block.modoA_markdown || '').trim()) add('warning', 'theory-empty', `${label}: complementar teoria.`, lesson.id);
      if (!(block.modoB || block.modoB_markdown || '').trim()) add('warning', 'summary-empty', `${label}: complementar resumo.`, lesson.id);
      if (!block.questions?.length) add('warning', 'questions-empty', `${label}: criar questões comentadas.`, lesson.id);
      for (const [qi, q] of (block.questions || []).entries()) {
        questions++;
        if (q.options.length !== 4 || !Number.isInteger(q.ans) || q.ans < 0 || q.ans >= q.options.length || !q.q.trim() || !q.comment.trim() || q.options.some(o => !o.trim()))
          add('error', 'question-invalid', `${label}, questão ${qi + 1}: conferir enunciado, quatro alternativas, índice e comentário.`, lesson.id);
      }
      flashcards += (block.flashcards || []).length;
    }
  }
  for (const id of scheduled) if (!ids.has(id)) add('error', 'schedule-unknown', `Cronograma aponta para aula inexistente: ${id}.`);
  return { lessons: data.lessons.length, questions, flashcards, blocks, sources: data.sources.length, categories, issues };
}
