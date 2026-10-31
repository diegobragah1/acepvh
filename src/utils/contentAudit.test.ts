import test from 'node:test';
import assert from 'node:assert/strict';
import { auditContent } from './contentAudit';
import type { AppData } from '../types';
const data = {lessons:[{id:'a',cat:'rlm',sources:[9],blocks:[{title:'B',modoA:'Teoria',modoB:'Resumo',questions:[{q:'Q?',options:['a','b','c','d'],ans:4,comment:'C'}]}]}],sources:[],schedule:[{lessons:['missing']}]} as unknown as AppData;
test('audit exposes broken references and invalid answer rather than declaring coverage', () => {
  const r = auditContent(data);
  assert.equal(r.questions,1);
  assert.equal(r.lessons,1);
  for(const code of ['source-unknown','schedule-missing','schedule-unknown','question-invalid']) assert.ok(r.issues.some(i=>i.code===code));
});
