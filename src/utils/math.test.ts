import test from 'node:test';
import assert from 'node:assert/strict';
import { renderMathInHtml } from './math';
import { renderMarkdownToHtml } from './markdown';
import fs from 'node:fs';

test('legacy HTML and Markdown render fractions, sets and subscripts with accessible MathML', () => {
  for (const render of [renderMathInHtml, renderMarkdownToHtml]) {
    const html = render(String.raw`$\frac{1}{2}$ e $\mathbb{N}\subset\mathbb{R}$ e $A_{n,p}$`);
    assert.equal((html.match(/<math /g) || []).length, 3);
    assert.ok(!html.includes('data-math-error'));
  }
});
test('currency cannot consume paragraphs or formulas', () => {
  const html = renderMathInHtml(String.raw`<p>R$ 20 e R$ 30</p><p>$x=2$</p>`);
  assert.ok(html.includes('R$ 20 e R$ 30'));
  assert.equal((html.match(/<math /g) || []).length, 1);
  assert.equal(renderMathInHtml('<p>$a</p><p>b$</p>'), '<p>$a</p><p>b$</p>');
});
test('Markdown does not split a formula on its absolute-value bars or parse emphasis inside it', () => {
  const html = renderMarkdownToHtml(String.raw`| Expressão | Resultado |
| --- | --- |
| $|x|$ | $a_b$ |`);
  assert.equal((html.match(/<td /g)||[]).length, 2);
  assert.equal((html.match(/<math /g)||[]).length, 2);
});
test('malformed TeX remains visible and cannot crash the lesson', () => {
  assert.ok(renderMathInHtml(String.raw`$\unknowncommand{x}$`).includes('data-math-error'));
  assert.ok(renderMathInHtml('$<strong>x</strong>^2$').includes('<math '));
});
test('all eight RLM lessons render their actual primary theory and summaries without TeX errors', () => {
  const data=JSON.parse(fs.readFileSync('data/app_data.json','utf8'));
  const lessons=data.lessons.filter((l:any)=>l.cat==='rlm');
  assert.equal(lessons.length,8);
  let formulas=0;
  for(const l of lessons) for(const [i,b] of l.blocks.entries()) for(const mode of ['A','B']) {
    const html=renderMathInHtml(b[`modo${mode}`] || renderMarkdownToHtml(b[`modo${mode}_markdown`] || ''));
    assert.ok(!html.includes('data-math-error'), `${l.id}, bloco ${i+1}, modo ${mode}`);
    formulas+=(html.match(/<math /g)||[]).length;
  }
  assert.ok(formulas>200,'The test must exercise the actual formula-rich dataset');
});
