import type { FlashcardSrsEntry, FlashcardSrsStatus, SrsRating } from '../types';

const ONE_DAY_MS = 24 * 60 * 60 * 1000;
const TEN_MINUTES_MS = 10 * 60 * 1000;

export function getCanonicalFlashcardKey(lessonId: string, blockIdx: number, fcIdx: number): string {
  return `${lessonId}_b${blockIdx}_fc_${fcIdx}`;
}

export function scheduleFlashcardReview(
  prev: FlashcardSrsEntry | undefined,
  rating: SrsRating,
  now: number = Date.now()
): FlashcardSrsEntry {
  const prevReps = prev?.reps ?? 0;
  const prevInterval = prev?.intervalDays ?? 0;

  if (rating === 'hard') {
    return {
      status: 'hard',
      reps: 0,
      intervalDays: 0,
      dueAt: now + TEN_MINUTES_MS,
      lastReviewedAt: now,
    };
  }

  if (rating === 'good') {
    const nextReps = prevReps + 1;
    const intervalDays =
      nextReps === 1 ? 1 : nextReps === 2 ? 3 : Math.min(30, Math.max(4, Math.round(prevInterval * 1.8)));
    return {
      status: 'good',
      reps: nextReps,
      intervalDays,
      dueAt: now + intervalDays * ONE_DAY_MS,
      lastReviewedAt: now,
    };
  }

  // 'known'
  const nextReps = prevReps + 1;
  const intervalDays =
    prevInterval >= 7 ? Math.min(60, Math.round(prevInterval * 2)) : nextReps >= 2 ? 14 : 7;
  return {
    status: 'known',
    reps: nextReps,
    intervalDays,
    dueAt: now + intervalDays * ONE_DAY_MS,
    lastReviewedAt: now,
  };
}

export function getFlashcardSrsStatus(entry: FlashcardSrsEntry | undefined): FlashcardSrsStatus {
  if (!entry) return 'new';
  return entry.status;
}

export function isFlashcardDue(entry: FlashcardSrsEntry | undefined, now: number = Date.now()): boolean {
  if (!entry) return true;
  if (entry.status === 'hard') return true;
  return entry.dueAt <= now;
}

export function formatNextReviewLabel(entry: FlashcardSrsEntry | undefined, now: number = Date.now()): string {
  if (!entry) return 'Pendente';
  if (entry.status === 'hard') return 'Difícil • Revisar hoje';
  const diffMs = entry.dueAt - now;
  if (diffMs <= 0) return 'Revisão vencida';
  const days = Math.max(1, Math.round(diffMs / ONE_DAY_MS));
  return entry.status === 'known' ? `Conhecido • +${days}d` : `Em revisão • +${days}d`;
}
