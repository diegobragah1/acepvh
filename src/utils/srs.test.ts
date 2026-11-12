import test from 'node:test';
import assert from 'node:assert/strict';
import {
  formatNextReviewLabel,
  getCanonicalFlashcardKey,
  getFlashcardSrsStatus,
  isFlashcardDue,
  scheduleFlashcardReview,
} from './srs';

const DAY_MS = 24 * 60 * 60 * 1000;

test('getCanonicalFlashcardKey builds stable canonical key across lesson and deck views', () => {
  assert.equal(getCanonicalFlashcardKey('esp_3', 2, 0), 'esp_3_b2_fc_0');
  assert.equal(getCanonicalFlashcardKey('rlm_8', 5, 4), 'rlm_8_b5_fc_4');
});

test('scheduleFlashcardReview handles hard, good and known transitions with realistic intervals', () => {
  const t0 = 1_700_000_000_000;

  assert.equal(getFlashcardSrsStatus(undefined), 'new');
  assert.equal(isFlashcardDue(undefined, t0), true);
  assert.equal(formatNextReviewLabel(undefined, t0), 'Pendente');

  // 1) Good once -> 1 day
  const firstGood = scheduleFlashcardReview(undefined, 'good', t0);
  assert.equal(firstGood.status, 'good');
  assert.equal(firstGood.reps, 1);
  assert.equal(firstGood.intervalDays, 1);
  assert.equal(isFlashcardDue(firstGood, t0 + 1000), false);
  assert.equal(isFlashcardDue(firstGood, t0 + DAY_MS + 1), true);

  // 2) Good again -> 3 days
  const secondGood = scheduleFlashcardReview(firstGood, 'good', t0 + DAY_MS);
  assert.equal(secondGood.reps, 2);
  assert.equal(secondGood.intervalDays, 3);

  // 3) Known -> 14 days when reps >= 2
  const knownEntry = scheduleFlashcardReview(secondGood, 'known', t0 + 4 * DAY_MS);
  assert.equal(knownEntry.status, 'known');
  assert.equal(knownEntry.intervalDays, 14);
  assert.ok(formatNextReviewLabel(knownEntry, t0 + 4 * DAY_MS).includes('+14d'));

  // 4) Hard resets reps and stays due immediately
  const hardEntry = scheduleFlashcardReview(knownEntry, 'hard', t0 + 5 * DAY_MS);
  assert.equal(hardEntry.status, 'hard');
  assert.equal(hardEntry.reps, 0);
  assert.equal(hardEntry.intervalDays, 0);
  assert.equal(isFlashcardDue(hardEntry, t0 + 5 * DAY_MS + 1000), true);
  assert.equal(formatNextReviewLabel(hardEntry, t0 + 5 * DAY_MS), 'Difícil • Revisar hoje');
});
