import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { questionIdentity } from './questionIdentity';
import { normalizeAppData } from './normalizeData';

test('corrected questions cannot reuse legacy answers; unrelated attempts stay addressable', () => {
  const raw=JSON.parse(fs.readFileSync('data/app_data.json','utf8'));
  const app=normalizeAppData(raw);
  const q=app.lessons.find(l=>l.id==='rlm_8')!.blocks[0].questions![0];
  assert.equal(q.ans,1);
  const answers={'rlm_8_b0_q0':0,'rlm_8_b0_q1':2};
  assert.equal(answers[questionIdentity('rlm_8_b0_q0',q) as keyof typeof answers],undefined);
  assert.equal(answers[questionIdentity('rlm_8_b0_q1',{}) as keyof typeof answers],2);
  assert.equal(questionIdentity('sim_rlm_8_0_0',q),'sim_rlm_8_0_0_r20261031');
  assert.equal(questionIdentity('rlm_8_b0_q0',q),'rlm_8_b0_q0_r20261031');
});
test('probability answer agrees with an independent enumeration of all outcomes', () => {
  const favorable=Array.from({length:30},(_,i)=>i+1).filter(n=>n%4===0||n%6===0);
  assert.equal(favorable.length,10);
  const raw=JSON.parse(fs.readFileSync('data/app_data.json','utf8'));
  const q=raw.lessons.find((l:any)=>l.id==='rlm_8').blocks[0].questions[0];
  assert.match(q.options[q.ans],/1\/3/);
});
