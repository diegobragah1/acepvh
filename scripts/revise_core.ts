/** Reproducible corrections to the primary dataset, not a runtime supplement. */
import fs from 'node:fs';
import { renderMarkdownToHtml } from '../src/utils/markdown';

const data = JSON.parse(fs.readFileSync('data/app_data.json', 'utf8'));
const lesson = (id: string) => data.lessons.find((l: any) => l.id === id);
const legalSource = 'https://www2.camara.leg.br/legin/fed/lei/2006/lei-11350-5-outubro-2006-545707-normaatualizada-pl.html';
const jornada = 'A jornada de 40 horas abrange ações e serviços de promoção da saúde, vigilância e combate a endemias e assegura planejamento, avaliação, detalhamento, registro de dados e reuniões. Os incisos que fixavam 30h externas e 10h internas foram revogados pela Lei 13.708/2018; essa divisão não é imposição do texto federal vigente.';
const chapters = fs.readFileSync('content/revisao/esp_3.md', 'utf8').split('<!-- BLOCO -->').map(s=>s.trim());
const summaries = [jornada, 'ACE: art. 7º; ACS: art. 6º. Curso inicial não é curso técnico. Regime CLT admite lei local diversa. Residência na comunidade não é requisito geral do ACE.', 'Art. 4º: atividades típicas e assistidas; art. 4º-A: integração. Suspeita não é diagnóstico. A assistência profissional exigida por lei não pode ser omitida.', 'Roteiro comentado: carreira, avaliação, rescisão e vedação de terceirização. Não é transcrição integral nem consolidação oficial.'];
chapters.forEach((md, i) => {
  const b = lesson('esp_3').blocks[i];
  b.title = `Bloco 3.${i+1} — ${md.split('\n')[0].replace(/^# /,'')}`;
  b.modoA_markdown = md; b.modoA = renderMarkdownToHtml(md);
  b.modoB_markdown = summaries[i]; b.modoB = renderMarkdownToHtml(summaries[i]);
});
lesson('esp_3').mdPath = './content/revisao/esp_3.md';
const spelling = lesson('por_16').blocks[0];
const hyphen = `### 1. Hífen: regra geral e condições específicas
O encontro de letras ajuda a organizar parte das formações prefixais. Não é uma regra universal de ortografia nem há evidência apresentada para a alegação anterior de frequência na banca.

| Formação | Condição e exemplos |
| --- | --- |
| Segundo elemento com h | Hífen em anti-higiênico e super-homem; existem formações com perda de h, como desumano e inábil. |
| Vogais iguais | Hífen em micro-ondas e anti-inflamatório; ressalvar co-, como em cooperação. Reeleição também se escreve sem hífen. |
| Vogais diferentes | Aglutinação em autoescola e infraestrutura; verificar regras especiais do prefixo. |
| Prefixo em vogal + r/s | Duplicação em antirracismo e antissocial. A condição do final do prefixo é indispensável. |
| Hiper-, inter-, super- + r | Hífen em hiper-requintado, inter-regional e super-resistente. |
| Circum- e pan- | Hífen antes de vogal, m, n e h: pan-americano, pan-negritude, circum-navegação. |
| Ex- e vice- | Hífen: ex-presidente (estado anterior), vice-diretor. |
| Pós-, pré-, pró- tônicos | Hífen quando o segundo elemento tem vida própria: pós-graduação, pré-natal. Formas átonas se aglutinam: prever, promover. |

Fonte primária: [Acordo Ortográfico — Câmara](https://www.camara.leg.br/internet/reformaortografica/decreto_e_texto_do_acordo.pdf), Bases XV e XVI. Consulte a grafia lexical no VOLP quando necessário. O quadro não esgota compostos, locuções, translineação ou os demais aspectos da ortografia.

`;
spelling.modoA_markdown = hyphen + spelling.modoA_markdown.slice(spelling.modoA_markdown.indexOf('### 2.'))
  .split('Os 4 "Porquês" e Pares Parônimos que Caem Todo Ano na IBGP').join('Os quatro porquês e distinções de grafia')
  .split('Pares Parônimos / Homônimos Mais Cobrados pela IBGP').join('Pares de palavras para distinguir pelo contexto')
  .split('**Exclusivamente no FIM de frase** ou isolado antes de ponto (ponto final, interrogação ou exclamação)').join('**Em posição tônica**, normalmente no fim da oração ou antes de uma pausa');
spelling.modoA = renderMarkdownToHtml(spelling.modoA_markdown);

// Preserve positions and option order; version changed questions so old attempts are not regraded.
for (const [bi, qi, oi] of [[0,0,1],[1,0,0],[3,2,1]]) {
  const q = lesson('esp_3').blocks[bi].questions[qi];
  q.options[oi] = `${String.fromCharCode(65+oi)}) A jornada de 40 horas semanais compreende ações de saúde e assegura planejamento, avaliação, registro de dados e reuniões de equipe; a Lei 13.708/2018 revogou os incisos que fixavam a divisão 30h/10h.`;
  if (bi === 3) q.q = '[Autoral — Lei 11.350, art. 9º-A, § 2º] Sobre a jornada vinculada à garantia do piso, assinale a alternativa correta na redação dada pela Lei 13.708/2018.';
  q.comment = `Gabarito: ${String.fromCharCode(65+oi)}. ${jornada} Fonte: ${legalSource}, art. 9º-A, § 2º e incisos revogados.`;
  q.revision = '20261031';
}
const requirementQ = lesson('esp_3').blocks[2].questions[1];
requirementQ.comment = `Gabarito: C. O art. 7º exige ensino médio e curso de formação inicial com aproveitamento e carga mínima de 40h, observadas as disposições legais. A residência na comunidade é requisito do ACS, não requisito geral do ACE. A alternativa B exclui indevidamente planejamento e registros da jornada; ${jornada} O art. 16 veda a terceirização, ressalvada a hipótese legal de surtos epidêmicos. Fonte: ${legalSource}.`;
for (const id of ['esp_6','esp_7']) for (const b of lesson(id).blocks) {
  for (const key of ['modoA','modoB']) {
    if (!b[key]) continue;
    b[key] = b[key].replace(/<tr\b[^>]*>[\s\S]*?<\/tr>/gi, (row: string) => {
      const plain = row.replace(/<[^>]*>/g,' ');
      return /30\s*(?:horas|h)/i.test(plain) && /10\s*(?:horas|h)/i.test(plain)
        ? `<tr><td>Jornada — art. 9º-A, § 2º</td><td colspan="2">${jornada} <a href="${legalSource}">Fonte: Câmara dos Deputados</a>.</td></tr>` : row;
    });
    for (const tag of ['li','p']) {
      const re = new RegExp(`<${tag}\\b[^>]*>[\\s\\S]*?<\\/${tag}>`, 'gi');
      b[key] = b[key].replace(re, (element: string) => {
        const plain = element.replace(/<[^>]*>/g,' ');
        return /30\s*(?:horas|h)/i.test(plain) && /10\s*(?:horas|h)/i.test(plain)
          ? `<${tag}>${jornada} <a href="${legalSource}">Fonte: art. 9º-A, § 2º.</a></${tag}>` : element;
      });
    }
    b[key] = b[key].split('(Lei Ruth Brilhante)').join('(lei modificadora da Lei 11.350)');
  }
  for (const key of ['modoA_markdown','modoB_markdown']) if (b[key]) b[key] = b[key].split('\n').map((line: string) =>
    /30\s*(?:horas|h)/i.test(line) && /10\s*(?:horas|h)/i.test(line) ? jornada : line
  ).join('\n').split('(Lei Ruth Brilhante)').join('(lei modificadora da Lei 11.350)');
}
for (const id of ['esp_3','esp_6','esp_7']) {
  function correctMap(value: any, key=''): any {
    if (typeof value === 'string' && /30\s*(?:horas|h).*10\s*(?:horas|h)/is.test(value)) return ['badge','value'].includes(key) ? '40h; 30/10 revogado' : ['title','label'].includes(key) ? 'Jornada de 40h — redação vigente' : jornada;
    if (Array.isArray(value)) return value.map(correctMap);
    if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([k,v])=>[k,correctMap(v,k)]));
    return value;
  }
  const l=lesson(id);
  l.mindMap=correctMap(l.mindMap);
  if (id==='esp_3' && l.mindMap) {
    l.mindMap.mnemonic='Lei 11.350: marco legal; 13.595 e 13.708: alterações de 2018; 14.799/2024: denominação Ruth Brilhante. Jornada: art. 9º-A, § 2º vigente; incisos 30/10 revogados.';
    if(l.mindMap.deadlinesAndNumbers?.[0]) {
      l.mindMap.deadlinesAndNumbers[0].value='40 horas';
      l.mindMap.deadlinesAndNumbers[0].label='Jornada para garantia do piso; incisos 30/10 revogados';
    }
    if(l.mindMap.deadlinesAndNumbers?.[1]) {
      l.mindMap.deadlinesAndNumbers[1].value='A cada 2 anos';
      l.mindMap.deadlinesAndNumbers[1].label='Aperfeiçoamento: art. 5º, § 2º, sem mínimo de 200h nesse dispositivo';
    }
  }
}
// Fix cards in every affected lesson; front/back aliases must remain consistent.
for (const l of data.lessons) for (const b of l.blocks) for (const f of b.flashcards || []) {
  if (/30\s*(?:horas|h).*10\s*(?:horas|h)/is.test(JSON.stringify(f)) && ['esp_3','esp_6','esp_7'].includes(l.id)) {
    f.f = f.front = 'A Lei 11.350 vigente obriga a divisão de 40 horas em 30h externas e 10h internas?';
    f.b = f.back = `Não. ${jornada} Fonte: art. 9º-A, § 2º; Lei 13.708/2018.`;
  }
}

// Repair exact legacy serialization errors. Do not reinterpret monetary values such as R$ 20.
for (const l of data.lessons) for (const b of l.blocks) for (const key of ['modoA','modoB','modoA_markdown','modoB_markdown']) {
  if (typeof b[key] !== 'string') continue;
  let text = b[key];
  if (l.id === 'rlm_3') text = text
    .split('$<strong>1 m</strong>³').join('<strong>1 m</strong>³')
    .split('$**1 m**³').join('**1 m**³')
    .split('(R$)').join('(R)').split('(D = 2R$)').join('(D = 2R)')
    .split('onde R$ é').join('onde R é')
    .split('(D superior + D inferior / 2)').join('((D superior + D inferior) / 2)');
  if (l.id === 'rlm_6') text = text.split('R$').join('R').split('\text{Se } P \text{, então } Q').join('Se P, então Q');
  if (l.id === 'rlm_4') text = text.split('"O dobro de um número excede em 15..."').join('"O dobro de um número, menos 15"');
  if (l.id === 'rlm_8') text = text
    .split('Independentes (com reposição)').join('Independentes (quando uma ocorrência não altera a probabilidade da outra)')
    .split('Dependentes (sem reposição)').join('Regra geral da multiplicação')
    .split('P(B)} = \\frac{n(A \\cap B)}{n(B)}').join('P(B)} \\quad(P(B)>0). \\text{ Se equiprovável: } \\frac{n(A \\cap B)}{n(B)}');
  if (l.id === 'por_4') text = text
    .split('(que <strong>não</strong> foi citado antes)').join('(recuperável pelo contexto)')
    .split('(que <strong>não</strong> foi citado antes na frase)').join('(recuperável pelo contexto)')
    .split('mas que <strong>NÃO foi citado anteriormente</strong> na frase').join('inclusive em casos particulares de retomada de termo já expresso')
    .split('(que **não** foi citado antes)').join('(recuperável pelo contexto)')
    .split('(que **não** foi citado antes na frase)').join('(recuperável pelo contexto)');
  if (l.id === 'leg_3') text = text
    .split('regulamenta o regime jurídico especial dos Agentes Comunitários de Saúde (ACS) e dos <strong>Agentes de Combate às Endemias (ACE)</strong>').join('dispõe sobre a organização, criação, extinção, requisitos e atributos dos cargos e empregos públicos municipais em geral; sua incidência sobre ACS e ACE depende dos dispositivos e anexos pertinentes')
    .split('regulamenta o regime jurídico especial dos Agentes Comunitários de Saúde (ACS) e dos **Agentes de Combate às Endemias (ACE)**').join('dispõe sobre a organização, criação, extinção, requisitos e atributos dos cargos e empregos públicos municipais em geral; sua incidência sobre ACS e ACE depende dos dispositivos e anexos pertinentes')
    .split('(Quadro de Pessoal ACE/ACS)').join('(Organização geral dos cargos e empregos municipais)')
    .split('Cria e regulamenta o Quadro de Pessoal de <strong>Agente Comunitário de Saúde (ACS)</strong> e <strong>Agente de Combate às Endemias (ACE)</strong>').join('Organiza cargos efetivos e empregos públicos da Prefeitura em geral, inclusive os enquadramentos pertinentes aos agentes')
    .split('Cria e regulamenta o Quadro de Pessoal de **Agente Comunitário de Saúde (ACS)** e **Agente de Combate às Endemias (ACE)**').join('Organiza cargos efetivos e empregos públicos da Prefeitura em geral, inclusive os enquadramentos pertinentes aos agentes');
  b[key] = text;
}
const probability = lesson('rlm_8').blocks[0].questions[0];
probability.ans = 1;
probability.comment = 'Gabarito: B. Em 1 a 30: há 7 múltiplos de 4, 5 de 6 e 2 de ambos (12 e 24). Pela inclusão-exclusão, 7 + 5 − 2 = 10 casos favoráveis. O sorteio uniforme dá 10/30 = 1/3, aproximadamente 33,3%. A fração 3/10 corresponde a 9/30 e estava incorreta.';
probability.revision = '20261031';
for(const [id,bi,qi] of [['rlm_1',2,0],['rlm_6',3,1]] as const) {
  const q=lesson(id).blocks[bi].questions[qi];
  q.q=q.q.split('kits idênticos').join('pacotes com igual quantidade de itens');
  q.revision='20261031';
}
const paper=lesson('rlm_3').blocks[0].questions[2];
paper.q=paper.q.split('4 resmas de fichas de notificação, sendo que').join('4 resmas de fichas de notificação, com 500 folhas por resma, sendo que');
paper.revision='20261031';
const dice=lesson('rlm_8').blocks[0].questions[3];
dice.q=dice.q.split('No lançamento simultâneo de dois dados honestos').join('No lançamento simultâneo e independente de dois dados honestos');
dice.revision='20261031';
const calendar=lesson('rlm_8').blocks[3].questions[0];
calendar.q=calendar.q.split('A prova objetiva do concurso da SEMUSA Porto Velho ocorrerá em um domingo, dia 13/12/2026.').join('Considere como referência um domingo, 13/12/2026, sem vincular essa data ao cronograma de qualquer concurso.');
calendar.revision='20261031';
const anagram=lesson('rlm_7').blocks[3].questions[3];
anagram.q=anagram.q.split('Permutação com Repetição: Anagramas').join('Permutação de Letras Distintas: Anagramas');
for(const l of data.lessons.filter((l:any)=>l.cat==='rlm')) {
  function symbols(v:any):any {
    if(typeof v==='string')return v.split('Ï€').join('π');
    if(Array.isArray(v))return v.map(symbols);
    if(v&&typeof v==='object')return Object.fromEntries(Object.entries(v).map(([k,x])=>[k,symbols(x)]));
    return v;
  }
  Object.assign(l,symbols(l));
}

for (const target of ['data/app_data.json','public/data/app_data.json']) fs.writeFileSync(target, JSON.stringify(data, null, 2)+'\n');
const fallback = `window.APP_DATA = ${JSON.stringify(data, null, 2)};\nwindow.LOCAL_APP_DATA = window.APP_DATA;\n`;
for (const target of ['data/app_data.js','public/data/app_data.js']) fs.writeFileSync(target, fallback);
console.log('Conteúdo principal corrigido e cópias JSON/JS sincronizadas.');
