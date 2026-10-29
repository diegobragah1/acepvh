export function renderMarkdownToHtml(mdText: string): string {
  if (!mdText) return "";
  const lines = String(mdText).split("\n");
  let html = '<div class="space-y-2.5 text-xs sm:text-sm text-slate-800 leading-relaxed">';
  let inList = false;
  let inTable = false;
  let inCode = false;
  let tableRows: string[][] = [];

  function fmtInline(str: string) {
    return str
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(/`([^`]+)`/g, '<code class="px-1 py-0.5 rounded bg-slate-100 text-teal-900 mono text-xs">$1</code>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-teal-700 underline font-semibold">$1</a>');
  }

  function flushTable() {
    if (!inTable || !tableRows.length) return "";
    inTable = false;
    const header = tableRows[0];
    const body = tableRows.slice(2);
    tableRows = [];
    const ths = header.map(c => `<th class="p-2 border border-slate-300 text-left">${c}</th>`).join("");
    const trs = body.map(r => `<tr class="bg-white hover:bg-slate-50">${r.map(c => `<td class="p-2 border border-slate-200 align-top">${c}</td>`).join("")}</tr>`).join("");
    return `<div class="overflow-x-auto my-2"><table class="min-w-full text-xs border border-slate-300 rounded-lg overflow-hidden"><thead class="bg-slate-800 text-white"><tr>${ths}</tr></thead><tbody>${trs}</tbody></table></div>`;
  }

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const s = rawLine.trim();
    if (s.startsWith("```")) {
      if (inTable) html += flushTable();
      if (inList) { html += "</ul>"; inList = false; }
      if (!inCode) {
        inCode = true;
        html += '<pre class="p-3 rounded-xl bg-slate-900 text-emerald-300 text-xs mono overflow-x-auto">';
      } else {
        inCode = false;
        html += "</pre>";
      }
      continue;
    }
    if (inCode) {
      html += rawLine.replace(/</g, "&lt;").replace(/>/g, "&gt;") + "\n";
      continue;
    }
    if (s.startsWith("|") && s.endsWith("|")) {
      if (inList) { html += "</ul>"; inList = false; }
      inTable = true;
      const cells = s.slice(1, -1).split("|").map(c => fmtInline(c.trim()));
      tableRows.push(cells);
      continue;
    } else if (inTable) {
      html += flushTable();
    }
    if (!s || s.startsWith("<!--")) {
      if (inList) { html += "</ul>"; inList = false; }
      continue;
    }
    if (s.startsWith("# ")) {
      if (inList) { html += "</ul>"; inList = false; }
      html += `<h2 class="text-lg font-extrabold text-slate-900 mt-3">${fmtInline(s.slice(2))}</h2>`;
    } else if (s.startsWith("## ")) {
      if (inList) { html += "</ul>"; inList = false; }
      html += `<h3 class="text-base font-extrabold text-teal-900 bg-teal-50 px-3 py-1.5 rounded-lg border-l-4 border-teal-600 mt-3">${fmtInline(s.slice(3))}</h3>`;
    } else if (s.startsWith("### ")) {
      if (inList) { html += "</ul>"; inList = false; }
      html += `<h4 class="text-sm font-extrabold text-slate-900 border-b border-slate-200 pb-1 mt-2">${fmtInline(s.slice(4))}</h4>`;
    } else if (s.startsWith("#### ") || s.startsWith("##### ")) {
      if (inList) { html += "</ul>"; inList = false; }
      const lvl = s.startsWith("##### ") ? 6 : 5;
      html += `<h5 class="text-xs sm:text-sm font-bold text-teal-800 mt-2">${fmtInline(s.slice(lvl))}</h5>`;
    } else if (s.startsWith("- ")) {
      if (!inList) { html += '<ul class="list-disc pl-5 space-y-1">'; inList = true; }
      html += `<li>${fmtInline(s.slice(2))}</li>`;
    } else if (s.startsWith("> ")) {
      if (inList) { html += "</ul>"; inList = false; }
      html += `<blockquote class="bg-slate-100 border-l-4 border-teal-600 p-3 rounded-r-lg italic">${fmtInline(s.slice(2))}</blockquote>`;
    } else {
      if (inList) { html += "</ul>"; inList = false; }
      html += `<p>${fmtInline(s)}</p>`;
    }
  }
  if (inTable) html += flushTable();
  if (inList) html += "</ul>";
  if (inCode) html += "</pre>";
  html += "</div>";
  return html;
}
