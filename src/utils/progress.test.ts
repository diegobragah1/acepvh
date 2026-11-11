import test from 'node:test';
import assert from 'node:assert/strict';
import {
  parseProgress,
  validAnswers,
  validStatuses,
  calculateStudyProgress,
  getSubtopicId,
} from './progress';
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

