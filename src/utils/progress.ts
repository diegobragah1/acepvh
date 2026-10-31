import type { TopicStatus } from '../types';

export const LESSON_ANSWERS_KEY = 'ace_semusa_2026_lesson_answers_v1';
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

/** Validate the entire backup before any React or storage mutation. Accept legacy exports. */
export function parseProgress(value: unknown) {
  if (!record(value) || (value.platform !== undefined && value.platform !== 'ACE_SEMUSA_PVH_2026')) throw new Error('Backup de outra plataforma ou formato inválido.');
  const { topicStatus, completedLessons, simAnswers, lessonAnswers } = value;
  if (topicStatus === undefined && completedLessons === undefined && simAnswers === undefined && lessonAnswers === undefined) throw new Error('Nenhum progresso encontrado no arquivo.');
  if (topicStatus !== undefined && !validStatuses(topicStatus)) throw new Error('Status de estudo inválido.');
  if (completedLessons !== undefined && !validCompleted(completedLessons)) throw new Error('Lista de aulas inválida.');
  if (simAnswers !== undefined && !validAnswers(simAnswers)) throw new Error('Respostas do simulado inválidas.');
  if (lessonAnswers !== undefined && !validAnswers(lessonAnswers)) throw new Error('Respostas de aula inválidas.');
  return { topicStatus, completedLessons, simAnswers, lessonAnswers };
}
