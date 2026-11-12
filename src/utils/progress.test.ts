import test from 'node:test';
import assert from 'node:assert/strict';
import {
  parseProgress,
  validAnswers,
  validStatuses,
  calculateStudyProgress,
  calculateQuestionPerformance,
  getSubtopicId,
} from './progress';
import { questionIdentity } from './questionIdentity';
import type { Lesson, TopicStatus } from '../types';

test('legacy exports and lesson answers remain importable', () => {
  assert.deepEqual(parseProgress({completedLessons:['esp_1'],simAnswers:{q:0}}).completedLessons,['esp_1']);
  assert.deepEqual(parseProgress({platform:'ACE_SEMUSA_PVH_2026',lessonAnswers:{q:3}}).lessonAnswers,{q:3});
  assert.deepEqual(parseProgress({completedSubtopics:['esp_1_b0','esp_1_b1']}).completedSubtopics,['esp_1_b0','esp_1_b1']);
});

test('reject unrelated, partial malformed, array and out-of-range backup payloads', () => {
  for(const value of [{},[],{platform:'other',simAnswers:{}},{completedLessons:['esp_1'],simAnswers:{q:4}},{topicStatus:{x:'admin'}},{simAnswers:[]},{completedLessons:[12]},{completedSubtopics:[99]}])
    assert.throws(()=>parseProgress(value));
  assert.equal(validAnswers({q:-1}),false);
  assert.equal(validAnswers({q:1.5}),false);
  assert.equal(validStatuses({x:'review'}),true);
});

test('calculateStudyProgress computes combined percentage from completed lessons and subtopics', () => {
  const sampleLessons: Lesson[] = [
    {
      id: 'esp_1',
      num: 1,
      cat: 'esp',
      catName: 'Específicos',
      weight: 'Peso 2,0',
      editalRef: 'Ref 1',
      title: 'Aula 1',
      blocks: [
        { title: 'Tópico 1.1', modoA: 'A', modoB: 'B' },
        { title: 'Tópico 1.2', modoA: 'A', modoB: 'B' },
      ],
    },
    {
      id: 'leg_1',
      num: 11,
      cat: 'leg',
      catName: 'Legislação',
      weight: 'Peso 2,0',
      editalRef: 'Ref 2',
      title: 'Aula 11',
      blocks: [
        { title: 'Tópico 2.1', modoA: 'A', modoB: 'B' },
        { title: 'Tópico 2.2', modoA: 'A', modoB: 'B' },
      ],
    },
  ];

  const statuses: Record<string, TopicStatus> = {};
  const getStatus = (id: string): TopicStatus => statuses[id] || 'not_started';

  // 1. Zero progress
  const initial = calculateStudyProgress(sampleLessons, getStatus, []);
  assert.equal(initial.overallPct, 0);
  assert.equal(initial.completedLessons, 0);
  assert.equal(initial.completedSubtopics, 0);
  assert.equal(initial.totalLessons, 2);
  assert.equal(initial.totalSubtopics, 4);
  assert.equal(initial.nextPendingLesson?.id, 'esp_1');

  // 2. Marking a single subtopic (without completing the lesson) registers progress > 0
  const oneSubtopic = calculateStudyProgress(sampleLessons, getStatus, [getSubtopicId('esp_1', 0)]);
  assert.equal(oneSubtopic.completedLessons, 0);
  assert.equal(oneSubtopic.completedSubtopics, 1);
  assert.equal(oneSubtopic.overallPct, 13); // (0/2 * 0.5 + 1/4 * 0.5) * 100 = 12.5 -> 13%

  // 3. Marking a lesson as completed counts all its subtopics as completed too
  statuses['esp_1'] = 'completed';
  const oneLesson = calculateStudyProgress(sampleLessons, getStatus, []);
  assert.equal(oneLesson.completedLessons, 1);
  assert.equal(oneLesson.completedSubtopics, 2);
  assert.equal(oneLesson.overallPct, 50);
  assert.equal(oneLesson.nextPendingLesson?.id, 'leg_1');

  // 4. Completing all lessons reaches 100%
  statuses['leg_1'] = 'mastered';
  const full = calculateStudyProgress(sampleLessons, getStatus, []);
  assert.equal(full.completedLessons, 2);
  assert.equal(full.completedSubtopics, 4);
  assert.equal(full.overallPct, 100);
  assert.equal(full.nextPendingLesson, null);
});

test('parseProgress accepts and validates new SRS, favorites, notes, exam history, and lastStudy fields', () => {
  const validPayload = {
    platform: 'ACE_SEMUSA_PVH_2026',
    flashcardSrs: {
      esp_1_b0_fc_0: {
        status: 'known',
        reps: 2,
        intervalDays: 14,
        dueAt: 1701000000000,
        lastReviewedAt: 1700000000000,
      },
    },
    favoriteLessons: ['esp_1', 'leg_3'],
    favoriteQuestions: ['esp_1_0_0_hash'],
    lessonNotes: { esp_1: 'Memorizar LIRAa < 1% satisfatório.' },
    examHistory: [
      {
        id: 'ex1',
        mode: 'PROVA_OFICIAL',
        title: 'Simulado #1',
        createdAt: 1700000000000,
        durationSec: 3400,
        totalQuestions: 50,
        answered: 50,
        correct: 41,
        points: 82,
        maxPoints: 100,
        pct: 82,
      },
    ],
    lastStudy: { lessonId: 'esp_1', blockIdx: 2, updatedAt: 1700000000000 },
  };

  const parsed = parseProgress(validPayload);
  assert.deepEqual(parsed.favoriteLessons, ['esp_1', 'leg_3']);
  assert.equal(parsed.lessonNotes?.esp_1, 'Memorizar LIRAa < 1% satisfatório.');
  assert.equal(parsed.examHistory?.length, 1);
  assert.equal(parsed.lastStudy?.lessonId, 'esp_1');

  for (const invalid of [
    { flashcardSrs: { x: { status: 'invalid', reps: 1, intervalDays: 1, dueAt: 1, lastReviewedAt: 1 } } },
    { lessonNotes: { esp_1: 123 } },
    { examHistory: [{ id: 'x', mode: 'BAD', title: 'T', createdAt: 1, durationSec: -1, totalQuestions: 10, answered: 10, correct: 5, points: 10, maxPoints: 20, pct: 50 }] },
    { lastStudy: { lessonId: '' } },
  ]) {
    assert.throws(() => parseProgress(invalid));
  }
});

test('calculateQuestionPerformance aggregates simAnswers and lessonAnswers and detects weak lessons', () => {
  const q1 = { q: 'Q1?', options: ['A', 'B', 'C', 'D'], ans: 0, comment: 'C1' };
  const q2 = { q: 'Q2?', options: ['A', 'B', 'C', 'D'], ans: 1, comment: 'C2' };
  const q3 = { q: 'Q3?', options: ['A', 'B', 'C', 'D'], ans: 2, comment: 'C3' };
  const q4 = { q: 'Q4?', options: ['A', 'B', 'C', 'D'], ans: 3, comment: 'C4' };

  const sampleLessons: Lesson[] = [
    {
      id: 'esp_1',
      num: 1,
      cat: 'esp',
      catName: 'Específicos',
      weight: 'Peso 2,0',
      editalRef: 'Ref',
      auditBadge: '',
      sources: [1],
      title: 'Aula Fraca',
      blocks: [{ title: 'B1', questions: [q1, q2] }],
    },
    {
      id: 'leg_1',
      num: 11,
      cat: 'leg',
      catName: 'Legislação',
      weight: 'Peso 2,0',
      editalRef: 'Ref',
      auditBadge: '',
      sources: [1],
      title: 'Aula Forte',
      blocks: [{ title: 'B1', questions: [q3, q4] }],
    },
  ];

  // Miss q1 in lessonAnswers, miss q2 in simAnswers -> esp_1 is 0% (weak); ace q3 & q4 in leg_1 -> 100%
  const perf = calculateQuestionPerformance(
    sampleLessons,
    {
      [questionIdentity('esp_1_0_1', q2)]: 0, // wrong
      [questionIdentity('leg_1_0_0', q3)]: 2, // right
    },
    {
      [questionIdentity('esp_1_b0_q0', q1)]: 3, // wrong
      [questionIdentity('leg_1_b0_q1', q4)]: 3, // right
    }
  );

  assert.equal(perf.totalQuestions, 4);
  assert.equal(perf.answered, 4);
  assert.equal(perf.correct, 2);
  assert.equal(perf.wrong, 2);
  assert.equal(perf.accuracyPct, 50);
  assert.equal(perf.weakLessons.length, 1);
  assert.equal(perf.weakLessons[0].lessonId, 'esp_1');
  assert.equal(perf.weakLessons[0].accuracyPct, 0);
});

