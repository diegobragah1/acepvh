import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {
  buildOfficialExamSet,
  scoreExamQuestions,
  seededPick,
  type FlatQuestion,
} from './simulado';
import { normalizeAppData } from './normalizeData';
import { questionIdentity } from './questionIdentity';
import type { AppData } from '../types';

function makeFlatQuestion(id: string, cat: string, ans = 0): FlatQuestion {
  return {
    qid: id,
    lessonQid: id,
    lessonId: `${cat}_1`,
    lessonNum: 1,
    lessonTitle: `Aula ${cat}`,
    cat,
    catName: cat.toUpperCase(),
    blockTitle: 'Bloco 1',
    q: `Pergunta ${id}?`,
    options: ['A', 'B', 'C', 'D'],
    ans,
    comment: 'Comentário detalhado.',
  };
}

test('seededPick is deterministic for the same seed and avoids mutating input', () => {
  const source = [1, 2, 3, 4, 5, 6, 7, 8];
  const snapshot = [...source];
  const a1 = seededPick(source, 4, 7);
  const a2 = seededPick(source, 4, 7);
  const b = seededPick(source, 4, 19);

  assert.deepEqual(source, snapshot);
  assert.deepEqual(a1, a2);
  assert.equal(a1.length, 4);
  assert.notDeepEqual(a1, b);
});

test('buildOfficialExamSet allocates exact Anexo III counts (15 esp + 10 por + 10 rlm + 10 leg + 5 atu = 50)', () => {
  const pool: FlatQuestion[] = [
    ...Array.from({ length: 20 }, (_, i) => makeFlatQuestion(`esp_${i}`, 'esp')),
    ...Array.from({ length: 15 }, (_, i) => makeFlatQuestion(`por_${i}`, 'por')),
    ...Array.from({ length: 15 }, (_, i) => makeFlatQuestion(`rlm_${i}`, 'rlm')),
    ...Array.from({ length: 15 }, (_, i) => makeFlatQuestion(`leg_${i}`, 'leg')),
    ...Array.from({ length: 10 }, (_, i) => makeFlatQuestion(`atu_${i}`, 'atu')),
  ];

  const exam = buildOfficialExamSet(pool, 3);
  assert.equal(exam.length, 50);

  const counts = exam.reduce<Record<string, number>>((acc, q) => {
    acc[q.cat] = (acc[q.cat] || 0) + 1;
    return acc;
  }, {});
  assert.deepEqual(counts, { esp: 15, por: 10, rlm: 10, leg: 10, atu: 5 });
});

test('scoreExamQuestions calculates hits, 2-point weight, 50% approval threshold, and category totals', () => {
  const questions = [
    makeFlatQuestion('q1', 'esp', 1),
    makeFlatQuestion('q2', 'esp', 2),
    makeFlatQuestion('q3', 'leg', 0),
    makeFlatQuestion('q4', 'por', 3),
  ];

  const halfCorrect = scoreExamQuestions(questions, { q1: 1, q2: 0, q3: 0 });
  assert.equal(halfCorrect.answered, 3);
  assert.equal(halfCorrect.correct, 2);
  assert.equal(halfCorrect.points, 4);
  assert.equal(halfCorrect.pct, 50);
  assert.equal(halfCorrect.approved, true);
  assert.deepEqual(halfCorrect.byCat.esp, { total: 2, hits: 1 });
  assert.deepEqual(halfCorrect.byCat.leg, { total: 1, hits: 1 });
  assert.deepEqual(halfCorrect.byCat.por, { total: 1, hits: 0 });

  const failScore = scoreExamQuestions(questions, { q1: 1 });
  assert.equal(failScore.pct, 25);
  assert.equal(failScore.approved, false);
});

test('scoreExamQuestions handles boundary cases: empty answers, perfect score, and exact 50% approval threshold', () => {
  const exam50 = Array.from({ length: 50 }, (_, i) =>
    makeFlatQuestion(
      `q_${i}`,
      i < 15 ? 'esp' : i < 25 ? 'por' : i < 35 ? 'rlm' : i < 45 ? 'leg' : 'atu',
      2
    )
  );

  // 1. Boundary: empty answers ({}) -> 0 answered, 0 hits, 0 points, 0%, approved: false
  const emptyRes = scoreExamQuestions(exam50, {});
  assert.equal(emptyRes.answered, 0);
  assert.equal(emptyRes.correct, 0);
  assert.equal(emptyRes.total, 50);
  assert.equal(emptyRes.points, 0);
  assert.equal(emptyRes.pct, 0);
  assert.equal(emptyRes.approved, false);

  // 2. Boundary: 100% correct (all 50 correct) -> 50 hits, 100 points, 100%, approved: true
  const perfectAnswers = Object.fromEntries(exam50.map((q) => [q.qid, q.ans]));
  const perfectRes = scoreExamQuestions(exam50, perfectAnswers);
  assert.equal(perfectRes.answered, 50);
  assert.equal(perfectRes.correct, 50);
  assert.equal(perfectRes.total, 50);
  assert.equal(perfectRes.points, 100);
  assert.equal(perfectRes.pct, 100);
  assert.equal(perfectRes.approved, true);

  // 3. Boundary: exact approval threshold
  // 25 hits out of 50 (50%) -> approved: true (50 points)
  const answers25 = Object.fromEntries(exam50.slice(0, 25).map((q) => [q.qid, q.ans]));
  const res25 = scoreExamQuestions(exam50, answers25);
  assert.equal(res25.answered, 25);
  assert.equal(res25.correct, 25);
  assert.equal(res25.points, 50);
  assert.equal(res25.pct, 50);
  assert.equal(res25.approved, true);

  // 24 hits out of 50 (48%) -> approved: false (48 points)
  const answers24 = Object.fromEntries(exam50.slice(0, 24).map((q) => [q.qid, q.ans]));
  const res24 = scoreExamQuestions(exam50, answers24);
  assert.equal(res24.answered, 24);
  assert.equal(res24.correct, 24);
  assert.equal(res24.points, 48);
  assert.equal(res24.pct, 48);
  assert.equal(res24.approved, false);

  // Fully answered exam: 25 correct + 25 wrong -> approved: true
  const answers25Full = {
    ...Object.fromEntries(exam50.slice(0, 25).map((q) => [q.qid, q.ans])),
    ...Object.fromEntries(exam50.slice(25).map((q) => [q.qid, (q.ans + 1) % 4])),
  };
  const res25Full = scoreExamQuestions(exam50, answers25Full);
  assert.equal(res25Full.answered, 50);
  assert.equal(res25Full.correct, 25);
  assert.equal(res25Full.points, 50);
  assert.equal(res25Full.pct, 50);
  assert.equal(res25Full.approved, true);

  // Fully answered exam: 24 correct + 26 wrong -> approved: false
  const answers24Full = {
    ...Object.fromEntries(exam50.slice(0, 24).map((q) => [q.qid, q.ans])),
    ...Object.fromEntries(exam50.slice(24).map((q) => [q.qid, (q.ans + 1) % 4])),
  };
  const res24Full = scoreExamQuestions(exam50, answers24Full);
  assert.equal(res24Full.answered, 50);
  assert.equal(res24Full.correct, 24);
  assert.equal(res24Full.points, 48);
  assert.equal(res24Full.pct, 48);
  assert.equal(res24Full.approved, false);
});

test('buildOfficialExamSet against real question pool from data/app_data.json generates 50 unique questions with exact category quotas', () => {
  const raw = JSON.parse(fs.readFileSync('data/app_data.json', 'utf8')) as AppData;
  const normalized = normalizeAppData(raw);

  const realPool: FlatQuestion[] = [];
  normalized.lessons.forEach((l) => {
    (l.blocks || []).forEach((b, bIdx) => {
      (b.questions || []).forEach((q, qIdx) => {
        realPool.push({
          qid: questionIdentity(`${l.id}_${bIdx}_${qIdx}`, q),
          lessonQid: questionIdentity(`${l.id}_b${bIdx}_q${qIdx}`, q),
          lessonId: l.id,
          lessonNum: l.num,
          lessonTitle: l.title,
          cat: l.cat,
          catName: l.catName,
          blockTitle: b.title,
          q: q.q,
          options: q.options || [],
          ans: q.ans,
          comment: q.comment || '',
          difficulty: q.difficulty,
          questionType: q.questionType,
          sourceRef: q.sourceRef,
        });
      });
    });
  });

  assert.ok(
    realPool.length >= 746,
    `Expected question pool to have at least 746 questions, got ${realPool.length}`
  );

  // Generate 50 questions with seed (12345)
  const exam = buildOfficialExamSet(realPool, 12345);
  assert.equal(exam.length, 50, 'Official exam set must have exactly 50 questions');

  // Assert 50 unique questions (distinct IDs)
  const uniqueQids = new Set(exam.map((q) => q.qid));
  assert.equal(uniqueQids.size, 50, 'All 50 questions in official exam set must have unique IDs');

  // Assert exact category quotas: 15 esp, 10 por, 10 rlm, 10 leg, 5 atu (sum = 50)
  const categoryCounts = exam.reduce<Record<string, number>>((acc, q) => {
    acc[q.cat] = (acc[q.cat] || 0) + 1;
    return acc;
  }, {});

  assert.deepEqual(categoryCounts, {
    esp: 15,
    por: 10,
    rlm: 10,
    leg: 10,
    atu: 5,
  });
});
