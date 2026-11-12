import fs from 'node:fs';
import path from 'node:path';
import { auditContent } from '../src/utils/contentAudit';
import { ALL_PAUTA_ITEMS } from '../src/data/pautaEspecificaMap';
import { normalizeAppData } from '../src/utils/normalizeData';
import { renderMathInHtml } from '../src/utils/math';

const root = process.cwd();
const read = (p: string) => fs.readFileSync(path.join(root, p), 'utf8');
const data = JSON.parse(read('data/app_data.json'));
const normalizedData = normalizeAppData(data);
// Validate raw fields as well: normalization must not conceal malformed answers.
const rawReport = auditContent(data);
const report = auditContent(normalizedData);
const issues = [...rawReport.issues];
for (const issue of report.issues) {
  if (!issues.some(i => JSON.stringify(i) === JSON.stringify(issue))) issues.push(issue);
}
for (const file of ['data/app_data.json', 'data/app_data.js', 'data/manifest.json']) {
  if (read(file) !== read(`public/${file}`)) issues.push({severity: 'error', code: 'copy-drift', message: `Cópias divergentes: ${file} e public/${file}.`});
}
for (const [idx, lesson] of normalizedData.lessons.entries()) {
  if (lesson.num !== idx + 1) {
    issues.push({severity: 'error', code: 'lesson-num-sequence', lessonId: lesson.id, message: `Aula na posição ${idx + 1} possui num=${lesson.num} (esperado sequencial ${idx + 1}).`});
  }
  const lessonFile = `data/lessons/${lesson.id}.json`;
  const publicLessonFile = `public/data/lessons/${lesson.id}.json`;
  if (!fs.existsSync(path.join(root, lessonFile)) || !fs.existsSync(path.join(root, publicLessonFile))) {
    issues.push({severity: 'error', code: 'modular-missing', lessonId: lesson.id, message: `Arquivo modular ausente: ${lessonFile}.`});
  } else if (read(lessonFile) !== read(publicLessonFile)) {
    issues.push({severity: 'error', code: 'modular-drift', lessonId: lesson.id, message: `Cópias modulares divergentes entre ${lessonFile} e ${publicLessonFile}.`});
  }
  for (const [bIdx, block] of (lesson.blocks || []).entries()) {
    const htmlSnippets = [
      block.modoA || '',
      block.modoB || '',
      ...(block.questions || []).flatMap(q => [q.q, ...(q.options || []), q.comment || '']),
      ...(block.flashcards || []).flatMap(fc => [fc.f || fc.front || '', fc.b || fc.back || '']),
    ];
    for (const snippet of htmlSnippets) {
      if (snippet && renderMathInHtml(snippet).includes('data-math-error')) {
        issues.push({severity: 'error', code: 'math-render-error', lessonId: lesson.id, message: `Bloco ${bIdx + 1}: erro de renderização KaTeX detectado.`});
        break;
      }
    }
  }
}
for (const file of ['data/app_data.js', 'public/data/app_data.js']) {
  const text = read(file);
  const begin = text.indexOf('=');
  try {
    const parsed = JSON.parse(text.slice(begin + 1).trim().replace(/;\s*window\.LOCAL_APP_DATA\s*=\s*window\.APP_DATA;?\s*$/, '').replace(/;\s*$/, ''));
    if (JSON.stringify(parsed) !== JSON.stringify(data)) throw new Error('Conteúdo diferente');
  } catch { issues.push({severity: 'error', code: 'fallback-drift', message: `Fallback JS divergente: ${file}.`}); }
}
for (const lesson of data.lessons) {
  for (const key of ['mdPath','mdLegacyPath']) if (lesson[key] && !fs.existsSync(path.join(root, lesson[key])))
    issues.push({severity: 'error', code: 'markdown-missing', lessonId: lesson.id, message: `Arquivo ausente: ${lesson[key]}.`});
}
for (const item of ALL_PAUTA_ITEMS) {
  const lesson = data.lessons.find((l: {id: string}) => l.id === item.lessonId);
  if (!lesson?.blocks[item.blockIndex]) issues.push({severity: 'error', code: 'pauta-target', lessonId: item.lessonId, message: `Destino inexistente do tópico ${item.id}.`});
}
const legacy = JSON.parse(read('data/aulas.json'));
const legacyIds = new Set((Array.isArray(legacy) ? legacy : legacy.aulas || []).map((l: {id:string}) => l.id));
const legacyMissing = data.lessons.filter((l: {id:string}) => !legacyIds.has(l.id));
if (legacyMissing.length) issues.push({severity:'warning', code:'legacy-index', message:`Índice legado data/aulas.json não lista ${legacyMissing.length} aulas atuais. Não usar como base para regenerar o aplicativo.`});
const lines = [
  '# Auditoria estrutural do conteúdo', '',
  'Gerada por `npm run audit:content`. Inclui os complementos das 49 aulas aplicados na leitura da base. Não certifica exatidão factual de todo o acervo legado, vigência legal ou cobertura integral do edital.', '',
  `Inventário: ${report.lessons} aulas; ${report.blocks} blocos; ${report.questions} questões; ${report.flashcards} flashcards; ${report.sources} fontes cadastradas.`, '',
  '| Disciplina | Aulas |', '| --- | ---: |',
  ...Object.entries(report.categories).map(([cat,count]) => `| ${cat} | ${count} |`), '',
  `Erros estruturais: ${issues.filter(i=>i.severity==='error').length}. Pendências: ${issues.filter(i=>i.severity==='warning').length}.`, '',
  '| Nível | Aula | Verificação | Pendência |', '| --- | --- | --- | --- |',
  ...issues.map(i => `| ${i.severity} | ${i.lessonId || 'geral'} | ${i.code} | ${i.message.replace(/\|/g,'/')} |`), '',
  '## Conferência documental pendente', '',
  '- Conferir cada tópico contra o Anexo IV e retificações, sem deduzir cobertura pela quantidade de texto.',
  '- Vincular fonte por bloco/afirmação, página ou artigo, data de acesso e responsável pela revisão.',
  '- Separar questões autorais de questões oficiais; revisar distratores e justificativas individualmente.',
  '- Revalidar cronograma e referências após qualquer renumeração: IDs posicionais não preservam o significado de respostas antigas.',
  '- Conferir dados de atualidades e legislação diretamente em fontes oficiais antes de alterar o conteúdo.', '',
];
if (process.argv.includes('--write')) fs.writeFileSync(path.join(root, 'docs/AUDITORIA_CONTEUDO.md'), lines.join('\n'));
console.log(lines.slice(0,14).join('\n'));
console.log(`Detalhes: ${issues.length} ocorrências. Use npm run audit:report para gerar o relatório.`);
for (const i of issues.filter(i => i.severity === 'error')) console.error(i);
process.exitCode = issues.some(i=>i.severity==='error') ? 1 : 0;
