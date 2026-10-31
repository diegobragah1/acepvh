import katex from 'katex';

/** Protect formulas before Markdown emphasis/table parsing. Never interpret R$ as a delimiter. */
export function protectMath(input: string): { text: string; restore: (html: string) => string } {
  const formulas: string[] = [];
  // Markdown formulas arrive already rendered at the reading-tools stage.
  // Hide the complete balanced span so search/cloze never inserts HTML into MathML.
  const wrappers = /<span\b[^>]*class=["']katex(?:-display)?["'][^>]*>/g;
  let protectedInput = '', cursor = 0, match: RegExpExecArray | null;
  while ((match = wrappers.exec(input))) {
    const tags = /<\/?span\b[^>]*>/g;
    tags.lastIndex = match.index + match[0].length;
    let depth = 1, tag: RegExpExecArray | null;
    while (depth && (tag = tags.exec(input))) depth += tag[0].startsWith('</') ? -1 : 1;
    if (depth) break;
    protectedInput += input.slice(cursor, match.index) + `ACEFORMULA${formulas.length}END`;
    formulas.push(input.slice(match.index, tags.lastIndex));
    cursor = tags.lastIndex; wrappers.lastIndex = cursor;
  }
  protectedInput += input.slice(cursor);
  const text = protectedInput.replace(/\$\$([\s\S]+?)\$\$|(?<![\\\w])\$([^$\n]+?)\$/g, (original, display, inline) => {
    const source = String(display ?? inline);
    // Broken legacy currency/HTML must not swallow paragraphs or table cells.
    if (/<\/?(?:p|div|table|tr|td|th|ul|li|h[1-6])\b/i.test(source)) return original;
    const expression = source.replace(/<\/?(?:strong|em|b|i)>/gi, '').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
    let rendered: string;
    try {
      rendered = katex.renderToString(expression, { displayMode: display !== undefined, throwOnError: true, trust: false, strict: 'ignore', output: 'htmlAndMathml' });
    } catch {
      // Keep the exact expression visible; a syntax error must not take down the lesson.
      const escaped = expression.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
      rendered = `<code data-math-error="true">${escaped}</code>`;
    }
    const token = `ACEFORMULA${formulas.length}END`;
    formulas.push(rendered);
    return token;
  });
  return { text, restore: html => html.replace(/ACEFORMULA(\d+)END/g, (_, i) => formulas[Number(i)] ?? _) };
}

export function renderMathInHtml(html: string): string {
  const protectedMath = protectMath(html);
  return protectedMath.restore(protectedMath.text);
}
