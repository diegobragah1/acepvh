import fs from 'node:fs';
import { CURRICULUM_REVIEW, REVIEW_DATE } from '../src/data/curriculumReview';
import { ALL_PAUTA_ITEMS } from '../src/data/pautaEspecificaMap';
import { protectMath } from '../src/utils/math';

const data = JSON.parse(fs.readFileSync('data/app_data.json','utf8'));
const fold = (s: string) => s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
const plain = (s: string) => s.replace(/<[^>]+>/g, ' ').replace(/\s+/g,' ').trim();
const ids = data.lessons.map((l: any)=>l.id).sort();
if (JSON.stringify(ids) !== JSON.stringify(Object.keys(CURRICULUM_REVIEW).sort())) throw new Error('A revisão deve listar exatamente as 49 aulas atuais.');
const evidence = data.lessons.map((l: any) => {
  const entry = CURRICULUM_REVIEW[l.id];
  const blocks = l.blocks.map((b: any, i: number) => ({ index: i, text: fold(plain(b.modoA || b.modoA_markdown || '')) }));
  return {
    id: l.id, title: l.title, status: 'conferencia-integral-pendente', coverageCertified: false,
    literal: ALL_PAUTA_ITEMS.find(i=>i.lessonId===l.id)?.pautaLiteral || l.title,
    finding: entry.finding,
    requirements: entry.requirements.map(term=>({term, mentionBlocks: blocks.filter((b:any)=>b.text.includes(fold(term))).map((b:any)=>b.index+1), verified: false})),
    questions: l.blocks.reduce((n:number,b:any)=>n+(b.questions||[]).length,0),
    flashcards: l.blocks.reduce((n:number,b:any)=>n+(b.flashcards||[]).length,0),
    math: l.blocks.map((b:any,i:number)=>{
      const math = protectMath(b.modoA || '');
      const rendered = math.restore(math.text);
      return {block:i+1, formulas:(rendered.match(/<math /g)||[]).length, syntaxErrors:(rendered.match(/data-math-error/g)||[]).length};
    }),
  };
});
const program = data.sources.find((s:any)=>s.num===91).url;
const lines = [
  '# Conferência do programa e revisão do conteúdo — 49 aulas', '',
  `Data: ${REVIEW_DATE}. Base anterior à revisão: bda51da25a9760772e5cfbdfe5278619a1c5d80e.`, '',
  '**Veredito: não está demonstrado que o conteúdo esgote o programa. A auditoria integral, afirmação por afirmação e exercício por exercício, não foi concluída. Nenhuma aula recebe selo de 100%.**', '',
  `Programa consultado: [Anexo IV retificado](${program}), páginas impressas 3–4: nível médio e conhecimentos específicos do ACE, cargos 340 a 356. Anexo II retificado, p. 4, conferido para as atribuições municipais. O programa do ACS não foi usado como programa do ACE.`, '',
  '## Método e limites', '',
  '- Inventário das 49 aulas e desdobramento editorial dos requisitos do programa para organizar a conferência. Nos itens abertos, os desdobramentos são um roteiro, não uma enumeração oficial exaustiva.',
  '- A localização textual usa apenas a teoria principal (HTML exibido, ou Markdown se não houver HTML), sem contar título, fontes cadastradas, questões, cartões ou os complementos anteriores como prova de cobertura.',
  '- “Menção localizada” significa apenas presença textual. Não verifica explicação, correção, profundidade, exemplos, fonte ou exercícios. “Não localizada” pode decorrer de sinônimo, fórmula ou remissão; é alerta, não declaração automática de ausência.',
  '- As pendências editoriais abaixo resultam de estrutura, trechos examinados e conferências pontuais identificadas. Não representam leitura documental integral de todas as 49 aulas.',
  '- A aprovação de cada requisito exige explicação suficiente, casos e restrições, exemplos corretos, fonte com artigo/seção/página, versão aplicável e conferência dos exercícios e cartões. Um teste de código não faz essa aprovação.',
  '- Legislação: observar as disposições iniciais do Anexo IV sobre atualização e alterações posteriores de diplomas expressamente indicados. Não congelar indiscriminadamente todas as normas na data de publicação do edital.', '',
  '## Correções e verificações documentais efetivamente realizadas', '',
  'As questões principais das oito aulas de RLM receberam também conferência dos enunciados, alternativas e respostas, com [memórias de cálculo e inferência](REVISAO_QUESTOES_RLM.md). Isso não fecha a revisão integral dos comentários, cartões, teoria e fontes.', '',
  '| Objeto | Evidência / localizador | Resultado |', '| --- | --- | --- |',
  '| Jornada federal do ACE | [Lei 11.350 atualizada — Câmara](https://www2.camara.leg.br/legin/fed/lei/2006/lei-11350-5-outubro-2006-545707-normaatualizada-pl.html), art. 9º-A, § 2º, incisos I e II | Incisos 30h/10h revogados pela Lei 13.708. Corrigidos quatro blocos de esp_3, trechos de esp_6/esp_7, três enunciados e cartões relacionados. |',
  '| Denominação Ruth Brilhante | [Lei 14.799/2024 — Câmara](https://www2.camara.leg.br/legin/fed/lei/2024/lei-14799-5-janeiro-2024-795221-publicacaooriginal-170774-pl.html), art. 1º | Corrigido o ano 2023 usado no complemento anterior; denominação atribuída à Lei 11.350. |',
  '| Atribuições municipais | Anexo II retificado, p. 4, cargos 340–356, itens 1–8 | A lista municipal inclui diagnóstico demográfico e registro de nascimentos/óbitos para controle e planejamento. Preservar diferença de fonte e escopo em relação à lei federal. |',
  '| LC 391/2010 | [SAPL da Câmara Municipal](https://sapl.portovelho.ro.leg.br/ta/58/text), ementa, arts. 1º–2º e histórico | A lei organiza cargos e empregos municipais em geral. O enquadramento exclusivo em ACE/ACS está errado; conferir restante da aula e alterações de 2026. |',
  '| PNAB e eMulti | [PNAB 2017](https://bvs.saude.gov.br/bvs/saudelegis/gm/2017/prt2436_22_09_2017.html), anexo; [Portaria 635/2023](https://bvsms.saude.gov.br/bvs/saudelegis/gm/2023/prt0635_22_05_2023.html) | Distinguir texto de 2017 e normas posteriores. A conferência integral da PNAB está pendente. |',
  '| Regra de hífen | [Manual do Senado](https://www12.senado.leg.br/manualdecomunicacao/estilos/hifen), formações prefixais | Generalizações com “sempre” não bastam: co/re e formas átonas exigem distinção. Conferência ortográfica integral pendente. |',
  '| Probabilidade — rlm_8, bloco 1, questão 1 | Enumeração independente: 7 múltiplos de 4 + 5 de 6 − 2 de 12, em 30 números | 10/30 = 1/3; gabarito corrigido de A para B e questão versionada. |',
  '| Fórmulas — RLM | Varredura dos oito conjuntos de blocos e testes de renderização | Renderização TeX, proteção de fórmulas em tabelas Markdown, correção de delimitadores, escapes e parênteses. Isso não certifica toda a matemática das aulas. |', '',
  '## Ficha individual de cada aula', '',
];
for (const l of evidence) {
  lines.push(`### ${l.id} — ${l.title}`, '', `Programa de referência: ${l.literal}`, '',
    '**Estado: conferência integral pendente.**', '', l.finding, '',
    `Inventário principal: ${l.questions} questões e ${l.flashcards} cartões. Gabaritos e cartões não recebem aprovação automática.`, '',
    '| Requisito / desdobramento para conferência | Menção na teoria principal | Validação documental |', '| --- | --- | --- |',
    ...l.requirements.map((r:any)=>`| ${r.term} | ${r.mentionBlocks.length ? `Bloco(s) ${r.mentionBlocks.join(', ')}` : 'Não localizada automaticamente'} | Pendente |`), '',
    'Fechamento necessário: confrontar o texto completo e os recursos de revisão com as fontes e registrar correção, lacunas e localizadores por requisito.', '');
}
const output = {date:REVIEW_DATE,coverageCertified:false,method:'triagem-textual-e-conferencias-pontuais',lessons:evidence};
if(process.argv.includes('--write')) {
  fs.writeFileSync('docs/REVISAO_INTEGRAL_49.md',lines.join('\n'));
  fs.writeFileSync('docs/revisao_curricular.json',JSON.stringify(output,null,2)+'\n');
}
console.log(`49 aulas inventariadas; ${evidence.reduce((n:number,l:any)=>n+l.requirements.length,0)} requisitos/desdobramentos na fila. Integralidade NÃO certificada.`);
const errors = evidence.flatMap((l:any)=>l.math.filter((b:any)=>b.syntaxErrors).map((b:any)=>`${l.id}: bloco ${b.block}`));
if (errors.length) {console.error('Fórmulas inválidas:', errors.join('; '));process.exitCode=1;}
