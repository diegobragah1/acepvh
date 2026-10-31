import test from 'node:test';
import assert from 'node:assert/strict';
import { parseProgress, validAnswers, validStatuses } from './progress';

test('legacy exports and lesson answers remain importable', () => {
  assert.deepEqual(parseProgress({completedLessons:['esp_1'],simAnswers:{q:0}}).completedLessons,['esp_1']);
  assert.deepEqual(parseProgress({platform:'ACE_SEMUSA_PVH_2026',lessonAnswers:{q:3}}).lessonAnswers,{q:3});
});
test('reject unrelated, partial malformed, array and out-of-range backup payloads', () => {
  for(const value of [{},[],{platform:'other',simAnswers:{}},{completedLessons:['esp_1'],simAnswers:{q:4}},{topicStatus:{x:'admin'}},{simAnswers:[]},{completedLessons:[12]}])
    assert.throws(()=>parseProgress(value));
  assert.equal(validAnswers({q:-1}),false);
  assert.equal(validAnswers({q:1.5}),false);
  assert.equal(validStatuses({x:'review'}),true);
});
