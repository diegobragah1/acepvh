import type { AppData } from '../types';

export interface AuditIssue {
  severity: 'error' | 'warning';
  code: string;
  lessonId?: string;
  message: string;
}

/** Structural and coherence checks (answer bounds, 4 options per IBGP edital, non-empty comments, flashcards bound to valid lessons, and sources with links). */
export function auditContent(data: AppData) {
  const issues: AuditIssue[] = [];
  const ids = new Set<string>();
  const sources = new Set((data.sources || []).map(s => s.num));
  let questions = 0, flashcards = 0, blocks = 0;
  const categories: Record<string, number> = {};
  const scheduled = new Set((data.schedule || []).flatMap(s => s.lessons));
  const add = (severity: AuditIssue['severity'], code: string, message: string, lessonId?: string) =>
    issues.push({ severity, code, message, lessonId });

  for (const s of data.sources || []) {
    if (!s.url || !String(s.url).trim()) {
      add('error', 'source-url-missing', `Fonte #${s.num} (${s.title || s.name || 'sem título'}) não possui link (url) cadastrado.`);
    }
  }

  for (const lesson of data.lessons || []) {
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
        const hasFourOptions = Array.isArray(q.options) && q.options.length === 4;
        const ansInRange = Array.isArray(q.options) && Number.isInteger(q.ans) && q.ans >= 0 && q.ans < q.options.length;
        const hasComment = Boolean(q.comment && q.comment.trim());
        const hasStem = Boolean(q.q && q.q.trim());
        const hasNonEmptyOptions = Array.isArray(q.options) && q.options.every(o => Boolean(o && o.trim()));

        if (!hasFourOptions) {
          add('error', 'question-options-count', `${label}, questão ${qi + 1}: número de alternativas (${q.options?.length ?? 0}) diverge do padrão do edital IBGP (4 alternativas: A, B, C, D).`, lesson.id);
        }
        if (!ansInRange) {
          add('error', 'question-ans-bounds', `${label}, questão ${qi + 1}: gabarito (${String(q.ans)}) fora do intervalo das alternativas.`, lesson.id);
        }
        if (!hasComment) {
          add('error', 'question-comment-empty', `${label}, questão ${qi + 1}: questão sem gabarito comentado.`, lesson.id);
        }
        if (!hasFourOptions || !ansInRange || !hasComment || !hasStem || !hasNonEmptyOptions) {
          add('error', 'question-invalid', `${label}, questão ${qi + 1}: conferir enunciado, quatro alternativas, índice e comentário.`, lesson.id);
        }
      }
      for (const [fi, fc] of (block.flashcards || []).entries()) {
        flashcards++;
        const fcFront = (fc.front ?? fc.f ?? '').trim();
        const fcBack = (fc.back ?? fc.b ?? '').trim();
        if (!fcFront || !fcBack) {
          add('error', 'flashcard-invalid', `${label}, flashcard ${fi + 1}: frente ou verso vazio.`, lesson.id);
        }
      }
    }
  }

  // Verify standalone flashcards array if present in payload
  const topLevelFlashcards = (data as unknown as { flashcards?: Array<{ lessonId?: string; front?: string; back?: string }> }).flashcards;
  if (Array.isArray(topLevelFlashcards)) {
    for (const [fi, fc] of topLevelFlashcards.entries()) {
      if (!fc.lessonId || !ids.has(fc.lessonId)) {
        add('error', 'flashcard-orphan', `Flashcard avulso #${fi + 1} sem aula vinculada válida (${fc.lessonId || 'sem ID'}).`);
      }
    }
  }

  for (const id of scheduled) if (!ids.has(id)) add('error', 'schedule-unknown', `Cronograma aponta para aula inexistente: ${id}.`);
  return { lessons: data.lessons.length, questions, flashcards, blocks, sources: data.sources.length, categories, issues };
}

