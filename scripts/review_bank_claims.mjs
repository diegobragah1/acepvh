import fs from 'node:fs';
import crypto from 'node:crypto';

// Correções editoriais delimitadas. Não inferem frequência de provas nem cobertura.
const replacements = [
  ['A banca IBGP inicia 100% de suas provas de Nível Médio/ACE com questões sobre', 'Este bloco revisa'],
  ['Esses dois verbos (Implicar e Preferir) são os mais cobrados de toda a língua portuguesa em provas da banca IBGP!', 'Compare a regência de implicar e preferir nos exemplos acima; esta seleção didática não representa um levantamento de frequência em provas.'],
  ['Na prova da banca IBGP, a alternativa A sempre traz o valor do MDC (40) e a alternativa C traz a soma dos grupos (5).', 'Neste exemplo, diferencie o tamanho de cada grupo (40) da quantidade de grupos (5). A posição das alternativas depende de cada questão.'],
  ['Proporcionalidade, regra de três e porcentagem estão presentes em 100% das provas da IBGP:', 'Proporcionalidade, regra de três e porcentagem são os assuntos desenvolvidos nesta seção:'],
  ['A banca IBGP sempre fornece o', 'Se o enunciado fornecer o'],
  ['Na prova da banca IBGP, 90% dos erros em Geometria acontecem na', 'Ao resolver problemas de geometria, confira a'],
  ['Em 90% das questões de Raciocínio Lógico da banca IBGP, o enunciado dá 3 ou 4 premissas compostas', 'Considere um problema que apresenta premissas compostas'],
  ['Quando um problema apresentar premissas compostas', 'Considere um problema que apresenta premissas compostas'],
  ['que são certeza de prova na banca IBGP', 'que serão estudadas nesta aula, sem previsão de cobrança na prova'],
  ['A banca IBGP cobra em quase todas as provas a distinção literal entre os', 'Nesta seção, compare os'],
  ['A questão mais cobrada na história das provas de ACE da IBGP é trocar a definição do', 'Uma confusão conceitual a evitar é trocar a definição do'],
  ['são campeões de cobrança recente em bancas como o IBGP', 'são examinados nesta aula; não há levantamento documental de frequência de cobrança nesta seção'],
  ['OS 4 MACETES QUE RESOLVEM 90% DA PROVA DE LÓGICA DA IBGP', 'QUATRO PROCEDIMENTOS DE REVISÃO DE LÓGICA'],
  ['são as campeãs absolutas de cobrança na prova de RLM da IBGP', 'são os temas desenvolvidos a seguir'],
  ['veja como resolver em menos de 1 minuto os três tipos de questões mais cobrados pela banca IBGP', 'acompanhe a resolução de três modelos de problemas'],
  ['Pegadinha campeã da banca IBGP:', 'Afirmação incorreta para análise:'],
  ['Pegadinha campeã da IBGP', 'Erro conceitual a evitar'],
  ['Que Sempre Caem na IBGP', 'para Estudo'],
  ['cobrada em todas as provas da IBGP', 'desenvolvida nesta revisão'],
  ['Mais Cobrados pela Banca IBGP', 'Selecionados para Estudo'],
  ['Mais Cobrados pela IBGP', 'Selecionados para Estudo'],
  ['Mais Cobrados na Prova IBGP', 'Selecionados para Estudo'],
  ['Mais Cobradas pela IBGP', 'Selecionadas para Estudo'],
  ['mais cobrados pela banca IBGP', 'selecionados para estudo'],
  ['As Duas Funções Mais Cobradas da Partícula', 'Duas Funções da Partícula'],
  ['DUPLAS CAMPEÃS DE PROVA DA IBGP', 'PARES PARA COMPARAÇÃO'],
  ['Questão Campeã da Banca IBGP na LC 385/2010', 'Estudo da LC 385/2010'],
  ['Incisos Mais Cobrados pela Banca IBGP', 'Incisos Selecionados para Estudo'],
  ['Ponto Mais Cobrado pela Banca', 'Ponto para Estudo'],
  ['Fórmula da União de Dois Conjuntos (Diagrama de Venn — Campeã na IBGP)', 'Fórmula da União de Dois Conjuntos (Diagrama de Venn)'],
  ['Receita Infalível IBGP para Problemas com 3 Conjuntos', 'Procedimento para Problemas com 3 Conjuntos'],
  ['para nunca errar na banca IBGP', 'como roteiro inicial de análise'],
  ['o segredo para acertar 100% das questões de equações e sistemas da banca IBGP é traduzir cada frase do português para a matemática', 'um passo para resolver problemas de equações e sistemas é traduzir as relações do enunciado para a matemática'],
  ['Mapa Mental para acertar 100% na prova IBGP', 'Mapa Mental para Revisão'],
  ['Este bloco fecha 100% da Lei 8.080/1990', 'Este bloco aborda temas da Lei 8.080/1990'],
  ['e traz 100% da', 'e apresenta a'],
  ['Este bloco reúne 100% dos artigos constitucionais sobre Municípios', 'Este bloco reúne dispositivos selecionados sobre Municípios'],
  ['Domine os pontos mais cobrados:', 'Estude os dispositivos selecionados:'],
  ['Mais Cobrados em Provas da Banca IBGP', 'Selecionados para Estudo'],
  ['Diagrama de Venn — Campeã na IBGP', 'Diagrama de Venn'],
  ['Exemplo de Prova IBGP:', 'Exemplo didático — origem não autenticada:'],
  ['Para nunca mais confundir Arranjo com Combinação na prova da IBGP, faça apenas uma pergunta:', 'Para iniciar a distinção entre arranjo e combinação, pergunte:'],
  ['O Teste da Inversão para Nunca Confundir Arranjo com Combinação na Prova IBGP', 'O Teste da Inversão para Comparar Arranjo e Combinação'],
  ['Como Nunca Mais Confundir Arranjo, Permutação e Combinação na IBGP', 'Comparação entre Arranjo, Permutação e Combinação'],
];

const p='data/app_data.json';
const before=fs.readFileSync(p,'utf8');
const data=JSON.parse(before),changes=[];
for(const l of data.lessons)for(const [i,b] of l.blocks.entries()){
  for(const field of ['modoA','modoB','modoA_markdown','modoB_markdown']){
    if(typeof b[field]!=='string')continue;
    for(const [oldText,newText] of replacements){
      if(!b[field].includes(oldText))continue;
      const occurrences=b[field].split(oldText).length-1;
      b[field]=b[field].replaceAll(oldText,newText);
      changes.push({aula:l.id,bloco:i,campo:field,occurrences,antes:oldText,depois:newText});
    }
  }
}
if(!changes.length){console.log('Nenhuma substituição pendente.');process.exit(0);}
// Confere que a revisão editorial não deslocou questões, respostas ou cartões.
const original=JSON.parse(before);
for(let i=0;i<data.lessons.length;i++){
  const a=original.lessons[i],b=data.lessons[i];
  if(a.id!==b.id||JSON.stringify(a.blocks.map(x=>[x.questions,x.flashcards]))!==JSON.stringify(b.blocks.map(x=>[x.questions,x.flashcards])))throw Error('Identidade ou exercícios alterados');
}
const json=JSON.stringify(data,null,2)+'\n';
for(const target of [p,'public/data/app_data.json'])fs.writeFileSync(target,json);
for(const target of ['data/app_data.js','public/data/app_data.js'])fs.writeFileSync(target,`window.APP_DATA = ${json.trimEnd()};\nwindow.LOCAL_APP_DATA = window.APP_DATA;\n`);
const ledger='docs/auditoria/CORRECOES_ALEGACOES.json';
const previous=fs.existsSync(ledger)?JSON.parse(fs.readFileSync(ledger,'utf8')):null;
fs.writeFileSync(ledger,JSON.stringify({
  baseSha256:previous?.baseSha256||crypto.createHash('sha256').update(before).digest('hex'),
  datasetSha256:crypto.createHash('sha256').update(json).digest('hex'),
  criterio:'Retirada de frequência, posição fixa de alternativas e promessa de acerto sem documentação. Não certifica as afirmações factuais adjacentes.',
  changes:[...(previous?.changes||[]),...changes],
},null,2)+'\n');
console.log(`${changes.length} campos/alegações corrigidos em ${new Set(changes.map(x=>x.aula)).size} aulas; questões e cartões preservados.`);
