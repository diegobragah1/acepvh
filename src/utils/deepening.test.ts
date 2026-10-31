import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { DEEPENING_ENTRIES, DEEPENING_PREFIX, deepeningBlock, withDeepening } from '../data/deepening';
import { normalizeAppData, normalizeLesson } from './normalizeData';
import { renderMarkdownToHtml } from './markdown';

const raw = JSON.parse(fs.readFileSync('data/app_data.json','utf8'));

test('all 49 current lessons receive one specific supplement without shifting old questions', () => {
  const normalized = normalizeAppData(raw);
  const entryIds = DEEPENING_ENTRIES.map(e=>e.id).sort();
  assert.equal(new Set(entryIds).size,49);
  assert.deepEqual(entryIds,raw.lessons.map((l:{id:string})=>l.id).sort());
  for (const [idx, source] of raw.lessons.entries()) {
    const before = normalizeLesson(source,idx);
    const after = normalized.lessons[idx];
    assert.equal(after.blocks.length,before.blocks.length+1,source.id);
    assert.deepEqual(after.blocks.slice(0,before.blocks.length),before.blocks,`Existing blocks changed in ${source.id}`);
    const newBlock = after.blocks.at(-1)!;
    assert.ok(newBlock.title.startsWith(DEEPENING_PREFIX));
    assert.equal(newBlock.questions?.length,2);
    assert.equal(after.questionsCount,after.blocks.reduce((n,b)=>n+(b.questions?.length||0),0));
    assert.deepEqual(withDeepening(after),after,`Duplicate supplement in ${source.id}`);
  }
});

test('supplement questions and reference links survive conversion and appear in the study content', () => {
  for (const entry of DEEPENING_ENTRIES) {
    for (const q of entry.questions) {
      assert.equal(q.options.length,4,entry.id);
      assert.equal(new Set(q.options).size,4,`${entry.id}: repeated alternatives`);
      assert.ok(Number.isInteger(q.ans)&&q.ans>=0&&q.ans<4,entry.id);
      assert.ok(q.comment.trim(),entry.id);
    }
    assert.ok(entry.references.length,entry.id);
    const block=deepeningBlock(entry);
    const html=renderMarkdownToHtml(block.modoA_markdown!);
    assert.ok(html.includes('<h3'),entry.id);
    for(const ref of entry.references) {
      assert.equal(new URL(ref.url).protocol,'https:',entry.id);
      assert.ok(ref.section.trim(),entry.id);
      assert.ok(html.includes(`href="${ref.url}"`),`${entry.id}: reference not rendered`);
    }
  }
});

test('normalizing a previously normalized base neither multiplies content nor mutates the source', () => {
  const snapshot=JSON.stringify(raw);
  const once=normalizeAppData(raw);
  const twice=normalizeAppData(once);
  for (const l of once.lessons) {
    const other=twice.lessons.find(x=>x.id===l.id)!;
    assert.equal(other.blocks.length,l.blocks.length,l.id);
    assert.equal(other.questionsCount,l.questionsCount,l.id);
  }
  assert.equal(JSON.stringify(raw),snapshot);
});

test('legacy prose no longer advertises unsupported exam-frequency percentages', () => {
  const app=normalizeAppData(raw);
  for(const lesson of app.lessons) for(const block of lesson.blocks) {
    const prose=[block.modoA,block.modoB,block.modoA_markdown,block.modoB_markdown].join('\n');
    assert.ok(!prose.includes('A banca IBGP inicia 100%'),lesson.id);
    assert.ok(!prose.includes('Mais de 80% das questões de ortografia'),lesson.id);
  }
});
