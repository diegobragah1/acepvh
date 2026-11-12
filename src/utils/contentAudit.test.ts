import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { auditContent } from './contentAudit';
import { normalizeAppData } from './normalizeData';
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

test('normalized production dataset has zero audit errors, sequential 1..49 numbering, and zero duplicate questions/flashcards', () => {
  const raw = JSON.parse(fs.readFileSync('data/app_data.json', 'utf8')) as AppData;
  const normalized = normalizeAppData(raw);
  const report = auditContent(normalized);
  const errors = report.issues.filter((i) => i.severity === 'error');
  assert.deepEqual(errors, []);
  assert.equal(normalized.lessons.length, 49);
  normalized.lessons.forEach((l, idx) => {
    assert.equal(l.num, idx + 1, `Expected sequential num ${idx + 1} for ${l.id}`);
  });
});

test('real production dataset contains exactly 49 lessons, 236 blocks, >= 746 questions, >= 723 flashcards, and exactly 126 sources', () => {
  const raw = JSON.parse(fs.readFileSync('data/app_data.json', 'utf8')) as AppData;
  const normalized = normalizeAppData(raw);

  // exactly 49 lessons
  assert.equal(normalized.lessons.length, 49);

  // exactly 236 blocks
  const totalBlocks = normalized.lessons.reduce((acc, l) => acc + l.blocks.length, 0);
  assert.equal(totalBlocks, 236);

  // >= 746 questions
  const totalQuestions = normalized.lessons.reduce(
    (acc, l) => acc + l.blocks.reduce((qAcc, b) => qAcc + (b.questions?.length || 0), 0),
    0
  );
  assert.ok(
    totalQuestions >= 746,
    `Expected at least 746 questions across all lessons, got ${totalQuestions}`
  );

  // >= 723 flashcards
  const totalFlashcards = normalized.lessons.reduce(
    (acc, l) => acc + l.blocks.reduce((fAcc, b) => fAcc + (b.flashcards?.length || 0), 0),
    0
  );
  assert.ok(
    totalFlashcards >= 723,
    `Expected at least 723 flashcards across all lessons, got ${totalFlashcards}`
  );

  // exactly 126 sources
  assert.equal(normalized.sources.length, 126);
});

test('real production dataset enforces exact category distribution: 10 esp, 7 leg, 18 por, 8 rlm, 6 atu', () => {
  const raw = JSON.parse(fs.readFileSync('data/app_data.json', 'utf8')) as AppData;
  const normalized = normalizeAppData(raw);

  const catCounts = normalized.lessons.reduce<Record<string, number>>((acc, l) => {
    acc[l.cat] = (acc[l.cat] || 0) + 1;
    return acc;
  }, {});

  assert.deepEqual(catCounts, {
    esp: 10,
    leg: 7,
    por: 18,
    rlm: 8,
    atu: 6,
  });
});

test('every question in real dataset complies with options schema: non-empty stem, comment, >= 4 options, and ans in range', () => {
  const raw = JSON.parse(fs.readFileSync('data/app_data.json', 'utf8')) as AppData;
  const normalized = normalizeAppData(raw);

  let verifiedQuestions = 0;
  for (const lesson of normalized.lessons) {
    for (const [bIdx, block] of lesson.blocks.entries()) {
      for (const [qIdx, q] of (block.questions || []).entries()) {
        const loc = `${lesson.id} (bloco ${bIdx + 1}, q ${qIdx + 1})`;
        assert.ok(
          typeof q.q === 'string' && q.q.trim().length > 0,
          `Question stem must not be empty at ${loc}`
        );
        assert.ok(
          typeof q.comment === 'string' && q.comment.trim().length > 0,
          `Question comment must not be empty at ${loc}`
        );
        assert.ok(
          Array.isArray(q.options) && q.options.length >= 4,
          `Question options must be at least 4 at ${loc}, got ${q.options?.length}`
        );
        assert.ok(
          Number.isInteger(q.ans) && q.ans >= 0 && q.ans < q.options.length,
          `Question ans (${q.ans}) must be between 0 and ${q.options.length - 1} at ${loc}`
        );
        verifiedQuestions++;
      }
    }
  }

  assert.ok(
    verifiedQuestions >= 746,
    `Expected at least 746 verified questions, got ${verifiedQuestions}`
  );
});

test('all 126 sources have valid num (1..126), non-empty title, url starting with http, and 0 broken lesson references', () => {
  const raw = JSON.parse(fs.readFileSync('data/app_data.json', 'utf8')) as AppData;
  const normalized = normalizeAppData(raw);

  assert.equal(normalized.sources.length, 126);

  const catalogedNums = new Set<number>();
  for (const s of normalized.sources) {
    assert.ok(
      Number.isInteger(s.num) && s.num >= 1 && s.num <= 126,
      `Source num must be an integer between 1 and 126, got ${s.num}`
    );
    const title = (s.title || s.name || '').trim();
    assert.ok(title.length > 0, `Source #${s.num} must have a non-empty title`);
    assert.ok(
      typeof s.url === 'string' && /^https?:\/\//i.test(s.url.trim()),
      `Source #${s.num} URL must start with http:// or https://, got "${s.url}"`
    );
    catalogedNums.add(s.num);
  }

  assert.equal(catalogedNums.size, 126, 'Sources catalog must have 126 distinct numbers 1..126');

  // Verify 0 broken references in lessons
  let totalLessonReferences = 0;
  for (const lesson of normalized.lessons) {
    const refs = Array.isArray(lesson.sources) ? lesson.sources : [];
    assert.ok(refs.length > 0, `Lesson ${lesson.id} must reference at least one source`);
    for (const ref of refs) {
      assert.ok(
        catalogedNums.has(ref),
        `Lesson ${lesson.id} references non-existent source #${ref}`
      );
      totalLessonReferences++;
    }
  }

  assert.ok(
    totalLessonReferences > 0,
    `Expected verified lesson references, got ${totalLessonReferences}`
  );
});
