import type {
  ExamAttemptRecord,
  FlashcardSrsEntry,
  LastStudyPointer,
  Lesson,
  TopicStatus,
} from '../types';
import { questionIdentity } from './questionIdentity';

export const LESSON_ANSWERS_KEY = 'ace_semusa_2026_lesson_answers_v1';
export const COMPLETED_SUBTOPICS_KEY = 'ace_semusa_2026_completed_subtopics_v1';
export const SRS_STORAGE_KEY = 'ace_semusa_2026_srs_v1';
export const FAVORITE_LESSONS_KEY = 'ace_semusa_2026_fav_lessons_v1';
export const FAVORITE_QUESTIONS_KEY = 'ace_semusa_2026_fav_questions_v1';
export const LESSON_NOTES_KEY = 'ace_semusa_2026_lesson_notes_v1';
export const EXAM_HISTORY_KEY = 'ace_semusa_2026_exam_history_v1';
export const LAST_STUDY_KEY = 'ace_semusa_2026_last_study_v1';

const statuses = new Set<TopicStatus>(['not_started', 'studying', 'completed', 'review', 'mastered']);
const srsStatuses = new Set(['hard', 'good', 'known']);
const examModes = new Set(['PROVA_OFICIAL', 'SIMULADO_CUSTOM']);

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
export function validNotesRecord(value: unknown): value is Record<string, string> {
  return record(value) && Object.values(value).every(v => typeof v === 'string');
}
export function validFlashcardSrs(value: unknown): value is Record<string, FlashcardSrsEntry> {
  if (!record(value)) return false;
  return Object.values(value).every((entry) => {
    if (!record(entry)) return false;
    return (
      typeof entry.status === 'string' &&
      srsStatuses.has(entry.status) &&
      typeof entry.reps === 'number' &&
      Number.isFinite(entry.reps) &&
      entry.reps >= 0 &&
      typeof entry.intervalDays === 'number' &&
      Number.isFinite(entry.intervalDays) &&
      entry.intervalDays >= 0 &&
      typeof entry.dueAt === 'number' &&
      Number.isFinite(entry.dueAt) &&
      typeof entry.lastReviewedAt === 'number' &&
      Number.isFinite(entry.lastReviewedAt)
    );
  });
}
export function validExamHistory(value: unknown): value is ExamAttemptRecord[] {
  if (!Array.isArray(value)) return false;
  return value.every((item) => {
    if (!record(item)) return false;
    return (
      typeof item.id === 'string' &&
      item.id.length > 0 &&
      typeof item.mode === 'string' &&
      examModes.has(item.mode) &&
      typeof item.title === 'string' &&
      typeof item.createdAt === 'number' &&
      typeof item.durationSec === 'number' &&
      typeof item.totalQuestions === 'number' &&
      typeof item.answered === 'number' &&
      typeof item.correct === 'number' &&
      typeof item.points === 'number' &&
      typeof item.maxPoints === 'number' &&
      typeof item.pct === 'number'
    );
  });
}
export function validLastStudy(value: unknown): value is LastStudyPointer {
  if (!record(value)) return false;
  return (
    typeof value.lessonId === 'string' &&
    value.lessonId.length > 0 &&
    typeof value.updatedAt === 'number' &&
    Number.isFinite(value.updatedAt) &&
    (value.blockIdx === undefined || (Number.isInteger(value.blockIdx) && Number(value.blockIdx) >= 0))
  );
}

export function getSubtopicId(lessonId: string, blockIdx: number): string {
  return `${lessonId}_b${blockIdx}`;
}

/** Validate the entire backup before any React or storage mutation. Accept legacy exports. */
export function parseProgress(value: unknown) {
  if (!record(value) || (value.platform !== undefined && value.platform !== 'ACE_SEMUSA_PVH_2026')) throw new Error('Backup de outra plataforma ou formato inválido.');
  const {
    topicStatus,
    completedLessons,
    completedSubtopics,
    simAnswers,
    lessonAnswers,
    flashcardSrs,
    favoriteLessons,
    favoriteQuestions,
    lessonNotes,
    examHistory,
    lastStudy,
  } = value;
  if (
    topicStatus === undefined &&
    completedLessons === undefined &&
    completedSubtopics === undefined &&
    simAnswers === undefined &&
    lessonAnswers === undefined &&
    flashcardSrs === undefined &&
    favoriteLessons === undefined &&
    favoriteQuestions === undefined &&
    lessonNotes === undefined &&
    examHistory === undefined &&
    lastStudy === undefined
  ) {
    throw new Error('Nenhum progresso encontrado no arquivo.');
  }
  if (topicStatus !== undefined && !validStatuses(topicStatus)) throw new Error('Status de estudo inválido.');
  if (completedLessons !== undefined && !validCompleted(completedLessons)) throw new Error('Lista de aulas inválida.');
  if (completedSubtopics !== undefined && !validCompleted(completedSubtopics)) throw new Error('Lista de tópicos inválida.');
  if (simAnswers !== undefined && !validAnswers(simAnswers)) throw new Error('Respostas do simulado inválidas.');
  if (lessonAnswers !== undefined && !validAnswers(lessonAnswers)) throw new Error('Respostas de aula inválidas.');
  if (flashcardSrs !== undefined && !validFlashcardSrs(flashcardSrs)) throw new Error('Dados de revisão de flashcards inválidos.');
  if (favoriteLessons !== undefined && !validCompleted(favoriteLessons)) throw new Error('Lista de aulas favoritas inválida.');
  if (favoriteQuestions !== undefined && !validCompleted(favoriteQuestions)) throw new Error('Lista de questões favoritas inválida.');
  if (lessonNotes !== undefined && !validNotesRecord(lessonNotes)) throw new Error('Anotações pessoais inválidas.');
  if (examHistory !== undefined && !validExamHistory(examHistory)) throw new Error('Histórico de simulados inválido.');
  if (lastStudy !== undefined && lastStudy !== null && !validLastStudy(lastStudy)) throw new Error('Registro de último estudo inválido.');

  return {
    topicStatus,
    completedLessons,
    completedSubtopics,
    simAnswers,
    lessonAnswers,
    flashcardSrs,
    favoriteLessons,
    favoriteQuestions,
    lessonNotes,
    examHistory,
    lastStudy: lastStudy === null ? undefined : lastStudy,
  };
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

export interface WeakLessonStat {
  lessonId: string;
  lessonNum: number;
  title: string;
  cat: string;
  catName: string;
  answered: number;
  correct: number;
  wrong: number;
  accuracyPct: number;
}

export interface CategoryAccuracyStat {
  cat: string;
  label: string;
  shortLabel: string;
  totalQuestions: number;
  answered: number;
  correct: number;
  wrong: number;
  accuracyPct: number | null;
}

export interface QuestionPerformanceSummary {
  totalQuestions: number;
  answered: number;
  correct: number;
  wrong: number;
  accuracyPct: number | null;
  byCategory: CategoryAccuracyStat[];
  weakLessons: WeakLessonStat[];
}

export function calculateQuestionPerformance(
  lessons: Lesson[],
  simAnswers: Record<string, number>,
  lessonAnswers: Record<string, number>
): QuestionPerformanceSummary {
  const catStats = new Map<
    string,
    { totalQuestions: number; answered: number; correct: number; wrong: number }
  >();
  for (const meta of CATEGORY_META) {
    catStats.set(meta.cat, { totalQuestions: 0, answered: 0, correct: 0, wrong: 0 });
  }

  let totalQuestions = 0;
  let totalAnswered = 0;
  let totalCorrect = 0;
  let totalWrong = 0;
  const weakLessons: WeakLessonStat[] = [];

  for (const lesson of lessons) {
    let lessonAnswered = 0;
    let lessonCorrect = 0;
    let lessonWrong = 0;

    (lesson.blocks || []).forEach((block, bIdx) => {
      (block.questions || []).forEach((q, qIdx) => {
        totalQuestions += 1;
        const catEntry = catStats.get(lesson.cat);
        if (catEntry) catEntry.totalQuestions += 1;

        const simKey = questionIdentity(`${lesson.id}_${bIdx}_${qIdx}`, q);
        const lessonKey = questionIdentity(`${lesson.id}_b${bIdx}_q${qIdx}`, q);
        const simChoice = simAnswers[simKey];
        const lessonChoice = lessonAnswers[lessonKey];
        const chosen = simChoice !== undefined ? simChoice : lessonChoice;

        if (chosen !== undefined) {
          totalAnswered += 1;
          lessonAnswered += 1;
          if (catEntry) catEntry.answered += 1;
          if (chosen === q.ans) {
            totalCorrect += 1;
            lessonCorrect += 1;
            if (catEntry) catEntry.correct += 1;
          } else {
            totalWrong += 1;
            lessonWrong += 1;
            if (catEntry) catEntry.wrong += 1;
          }
        }
      });
    });

    if (lessonAnswered >= 2) {
      const pct = Math.round((lessonCorrect / lessonAnswered) * 100);
      if (pct < 65) {
        weakLessons.push({
          lessonId: lesson.id,
          lessonNum: lesson.num,
          title: lesson.title,
          cat: lesson.cat,
          catName: lesson.catName,
          answered: lessonAnswered,
          correct: lessonCorrect,
          wrong: lessonWrong,
          accuracyPct: pct,
        });
      }
    }
  }

  weakLessons.sort((a, b) => a.accuracyPct - b.accuracyPct || b.wrong - a.wrong);

  const byCategory: CategoryAccuracyStat[] = CATEGORY_META.map((meta) => {
    const entry = catStats.get(meta.cat)!;
    return {
      cat: meta.cat,
      label: meta.label,
      shortLabel: meta.shortLabel,
      totalQuestions: entry.totalQuestions,
      answered: entry.answered,
      correct: entry.correct,
      wrong: entry.wrong,
      accuracyPct: entry.answered > 0 ? Math.round((entry.correct / entry.answered) * 100) : null,
    };
  });

  return {
    totalQuestions,
    answered: totalAnswered,
    correct: totalCorrect,
    wrong: totalWrong,
    accuracyPct: totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : null,
    byCategory,
    weakLessons,
  };
}


