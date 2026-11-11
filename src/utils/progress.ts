import type { Lesson, TopicStatus } from '../types';

export const LESSON_ANSWERS_KEY = 'ace_semusa_2026_lesson_answers_v1';
export const COMPLETED_SUBTOPICS_KEY = 'ace_semusa_2026_completed_subtopics_v1';

const statuses = new Set<TopicStatus>(['not_started', 'studying', 'completed', 'review', 'mastered']);
function record(value: unknown): value is Record<string, unknown> {
  return !!value && typeof value === 'object' && !Array.isArray(value);
}
export function validAnswers(value: unknown): value is Record<string, number> {
  return record(value) && Object.values(value).every(v => Number.isInteger(v) && Number(v) >= 0 && Number(v) < 4);
}
export function validStatuses(value: unknown): value is Record<string, TopicStatus> {
  return record(value) && Object.values(value).every(v => typeof v === 'string' && statuses.has(v as TopicStatus));
}
export function validCompleted(value: unknown): value is string[] {
  return Array.isArray(value) && value.every(v => typeof v === 'string' && v.length > 0);
}

export function getSubtopicId(lessonId: string, blockIdx: number): string {
  return `${lessonId}_b${blockIdx}`;
}

/** Validate the entire backup before any React or storage mutation. Accept legacy exports. */
export function parseProgress(value: unknown) {
  if (!record(value) || (value.platform !== undefined && value.platform !== 'ACE_SEMUSA_PVH_2026')) throw new Error('Backup de outra plataforma ou formato inválido.');
  const { topicStatus, completedLessons, completedSubtopics, simAnswers, lessonAnswers } = value;
  if (
    topicStatus === undefined &&
    completedLessons === undefined &&
    completedSubtopics === undefined &&
    simAnswers === undefined &&
    lessonAnswers === undefined
  ) {
    throw new Error('Nenhum progresso encontrado no arquivo.');
  }
  if (topicStatus !== undefined && !validStatuses(topicStatus)) throw new Error('Status de estudo inválido.');
  if (completedLessons !== undefined && !validCompleted(completedLessons)) throw new Error('Lista de aulas inválida.');
  if (completedSubtopics !== undefined && !validCompleted(completedSubtopics)) throw new Error('Lista de tópicos inválida.');
  if (simAnswers !== undefined && !validAnswers(simAnswers)) throw new Error('Respostas do simulado inválidas.');
  if (lessonAnswers !== undefined && !validAnswers(lessonAnswers)) throw new Error('Respostas de aula inválidas.');
  return { topicStatus, completedLessons, completedSubtopics, simAnswers, lessonAnswers };
}

export interface CategoryProgressItem {
  cat: 'esp' | 'leg' | 'por' | 'rlm' | 'atu';
  label: string;
  shortLabel: string;
  completedLessons: number;
  totalLessons: number;
  completedSubtopics: number;
  totalSubtopics: number;
  pct: number;
}

export interface StudyProgressSummary {
  completedLessons: number;
  totalLessons: number;
  lessonsPct: number;
  completedSubtopics: number;
  totalSubtopics: number;
  subtopicsPct: number;
  overallPct: number;
  statusCounts: Record<TopicStatus, number>;
  byCategory: CategoryProgressItem[];
  nextPendingLesson: { id: string; num: number; title: string; catName: string } | null;
}

const CATEGORY_META: Array<{
  cat: 'esp' | 'leg' | 'por' | 'rlm' | 'atu';
  label: string;
  shortLabel: string;
}> = [
  { cat: 'esp', label: 'Conhecimentos Específicos', shortLabel: 'Específicos' },
  { cat: 'leg', label: 'Legislação Municipal e Geral', shortLabel: 'Legislação' },
  { cat: 'por', label: 'Língua Portuguesa', shortLabel: 'Português' },
  { cat: 'rlm', label: 'Raciocínio Lógico', shortLabel: 'R. Lógico' },
  { cat: 'atu', label: 'Conhecimentos Gerais', shortLabel: 'Gerais' },
];

export function calculateStudyProgress(
  lessons: Lesson[],
  getTopicStatus: (lessonId: string) => TopicStatus,
  completedSubtopics: Iterable<string>
): StudyProgressSummary {
  const subtopicSet =
    completedSubtopics instanceof Set
      ? completedSubtopics
      : new Set(completedSubtopics);

  const statusCounts: Record<TopicStatus, number> = {
    not_started: 0,
    studying: 0,
    completed: 0,
    review: 0,
    mastered: 0,
  };

  let completedLessons = 0;
  let completedSubtopicsCount = 0;
  let totalSubtopics = 0;
  let nextPendingLesson: StudyProgressSummary['nextPendingLesson'] = null;

  const catCounters = new Map<
    string,
    { completedLessons: number; totalLessons: number; completedSubtopics: number; totalSubtopics: number }
  >();
  for (const meta of CATEGORY_META) {
    catCounters.set(meta.cat, {
      completedLessons: 0,
      totalLessons: 0,
      completedSubtopics: 0,
      totalSubtopics: 0,
    });
  }

  for (const lesson of lessons) {
    const st = getTopicStatus(lesson.id);
    statusCounts[st] = (statusCounts[st] || 0) + 1;
    const isLessonDone = st === 'completed' || st === 'mastered';
    if (isLessonDone) {
      completedLessons += 1;
    } else if (!nextPendingLesson) {
      nextPendingLesson = {
        id: lesson.id,
        num: lesson.num,
        title: lesson.title,
        catName: lesson.catName,
      };
    }

    const blocks = lesson.blocks || [];
    const blockCount = blocks.length;
    totalSubtopics += blockCount;

    let doneBlocksInLesson = 0;
    for (let bIdx = 0; bIdx < blockCount; bIdx++) {
      if (isLessonDone || subtopicSet.has(getSubtopicId(lesson.id, bIdx))) {
        doneBlocksInLesson += 1;
      }
    }
    completedSubtopicsCount += doneBlocksInLesson;

    const catEntry = catCounters.get(lesson.cat);
    if (catEntry) {
      catEntry.totalLessons += 1;
      if (isLessonDone) catEntry.completedLessons += 1;
      catEntry.totalSubtopics += blockCount;
      catEntry.completedSubtopics += doneBlocksInLesson;
    }
  }

  const totalLessons = lessons.length;
  const lessonsPct = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
  const subtopicsPct = totalSubtopics > 0 ? Math.round((completedSubtopicsCount / totalSubtopics) * 100) : 0;

  let overallPct = 0;
  if (totalLessons > 0) {
    const lessonRatio = completedLessons / totalLessons;
    const subtopicRatio = totalSubtopics > 0 ? completedSubtopicsCount / totalSubtopics : lessonRatio;
    const rawPct = (lessonRatio * 0.5 + subtopicRatio * 0.5) * 100;
    const hasAnyProgress = completedLessons > 0 || completedSubtopicsCount > 0;
    const isAllComplete =
      completedLessons === totalLessons &&
      (totalSubtopics === 0 || completedSubtopicsCount === totalSubtopics);

    if (!hasAnyProgress) {
      overallPct = 0;
    } else if (isAllComplete) {
      overallPct = 100;
    } else {
      overallPct = Math.min(99, Math.max(1, Math.round(rawPct)));
    }
  }

  const byCategory: CategoryProgressItem[] = CATEGORY_META.map((meta) => {
    const c = catCounters.get(meta.cat)!;
    const lRatio = c.totalLessons > 0 ? c.completedLessons / c.totalLessons : 0;
    const sRatio = c.totalSubtopics > 0 ? c.completedSubtopics / c.totalSubtopics : lRatio;
    const raw = (lRatio * 0.5 + sRatio * 0.5) * 100;
    const anyDone = c.completedLessons > 0 || c.completedSubtopics > 0;
    const allDone =
      c.totalLessons > 0 &&
      c.completedLessons === c.totalLessons &&
      (c.totalSubtopics === 0 || c.completedSubtopics === c.totalSubtopics);
    const pct = !anyDone ? 0 : allDone ? 100 : Math.min(99, Math.max(1, Math.round(raw)));
    return {
      cat: meta.cat,
      label: meta.label,
      shortLabel: meta.shortLabel,
      completedLessons: c.completedLessons,
      totalLessons: c.totalLessons,
      completedSubtopics: c.completedSubtopics,
      totalSubtopics: c.totalSubtopics,
      pct,
    };
  });

  return {
    completedLessons,
    totalLessons,
    lessonsPct,
    completedSubtopics: completedSubtopicsCount,
    totalSubtopics,
    subtopicsPct,
    overallPct,
    statusCounts,
    byCategory,
    nextPendingLesson,
  };
}

