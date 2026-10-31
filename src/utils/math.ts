import katex from 'katex';

/** Protect formulas before Markdown emphasis/table parsing. Never interpret R$ as a delimiter. */
export function protectMath(input: string): { text: string; restore: (html: string) => string } {
  const formulas: string[] = [];
  const text = input.replace(/\$\$([\s\S]+?)\$\$|(?<![\\\w])\$([^$\n]+?)\$/g, (original, display, inline) => {
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
