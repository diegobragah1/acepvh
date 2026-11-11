import test from 'node:test';
import assert from 'node:assert/strict';
import { auditContent } from './contentAudit';
import type { AppData } from '../types';

const data = {
  lessons: [
    {
      id: 'a',
      cat: 'rlm',
      sources: [9],
      blocks: [
        {
          title: 'B',
          modoA: 'Teoria',
          modoB: 'Resumo',
          questions: [
            { q: 'Q?', options: ['a', 'b', 'c', 'd'], ans: 4, comment: 'C' },
            { q: 'Q2?', options: ['a', 'b', 'c'], ans: 0, comment: '' },
          ],
          flashcards: [{ front: '', back: 'Verso' }],
        },
      ],
    },
  ],
  sources: [{ num: 9, title: 'Fonte sem URL', url: '' }],
  flashcards: [{ lessonId: 'inexistente', front: 'F', back: 'B' }],
  schedule: [{ lessons: ['missing'] }],
} as unknown as AppData;

test('audit exposes broken references, invalid answer bounds, wrong option count, missing comment, orphan flashcard, and missing source link', () => {
  const r = auditContent(data);
  assert.equal(r.questions, 2);
  assert.equal(r.lessons, 1);
  for (const code of [
    'schedule-missing',
    'schedule-unknown',
    'question-invalid',
    'question-ans-bounds',
    'question-options-count',
    'question-comment-empty',
    'flashcard-invalid',
    'flashcard-orphan',
    'source-url-missing',
  ]) {
    assert.ok(r.issues.some((i) => i.code === code), `Expected audit issue code: ${code}`);
  }
});

