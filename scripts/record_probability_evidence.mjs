import fs from 'node:fs';
const specs=[
 ['Definir experimento, resultado, espaço amostral e evento',0,['probabilidade-equiprobabilidade'],[122],'Conceitos e modelagem'],
 ['Escolher e aplicar regras de cálculo de probabilidades',0,['probabilidade-exatamente-um','probabilidade-cores-ordem'],[123,124],'União, multiplicação e complementar'],
 ['Representar espaços amostrais finitos sem contar somas como equiprováveis',0,['legacy:0:3','probabilidade-equiprobabilidade'],[122],'Quando contar casos funciona'],
 ['Resolver problemas de garantia por raciocínio dedutivo',2,['probabilidade-estoque','probabilidade-cada-cor'],[126],'Garantias e estoques limitados'],
 ['Resolver problemas sequenciais com condições explícitas',3,['legacy:3:0','probabilidade-subida','probabilidade-sequencia-regra'],[125],'Representação de etapas e limites'],
 ['Distinguir equiprobabilidade de pesos diferentes',0,['probabilidade-equiprobabilidade','legacy:0:3'],[122],'Quando contar casos funciona'],
 ['Calcular união inclusiva e exatamente um evento',0,['legacy:0:0','probabilidade-exatamente-um'],[124],'União, interseção e complementar'],
 ['Usar complementar sem presumir independência',0,['legacy:0:2','probabilidade-caminhos'],[123,124],'Complementar e dependência'],
 ['Distinguir independência de exclusão mútua',0,['probabilidade-exclusao-independencia'],[123],'Condicional e independência'],
 ['Resolver condicionamento e sua condição inversa',1,['legacy:1:0','probabilidade-condicao-inversa'],[124],'Tabela de dupla entrada'],
 ['Contar retiradas com e sem reposição',0,['legacy:0:1','probabilidade-cores-ordem'],[123],'Retiradas sucessivas'],
 ['Somar caminhos de cores em ordens diferentes',1,['probabilidade-caminhos'],[124],'Uma amostra de cada cor'],
 ['Distinguir possibilidade, probabilidade e garantia',2,['legacy:2:0','legacy:2:1'],[126],'Certeza e probabilidade são perguntas diferentes'],
 ['Adaptar gavetas a capacidades finitas e metas por categoria',2,['probabilidade-estoque','probabilidade-cada-cor'],[126],'Estoques desiguais; deduções próprias por pior caso'],
 ['Contar dias transcorridos e inclusivos; aplicar regra gregoriana',3,['legacy:3:0','probabilidade-bissexto'],[125],'Calendários e contagem de dias'],
 ['Distinguir linha aberta, circuito e divisão não exata',3,['legacy:3:2','probabilidade-circuito','probabilidade-linha-nao-divisivel'],[],'Posições e intervalos; dedução por contagem de segmentos'],
 ['Resolver avanço com recuo com teto e condições de existência',3,['probabilidade-subida'],[],'Avanço com recuo; dedução por desigualdade e simulação'],
 ['Conferir regra de sequência e limites de inferência',3,['probabilidade-sequencia-regra'],[],'Sequências e verificação; aplicação da regra explícita'],
];
const data=JSON.parse(fs.readFileSync('data/app_data.json','utf8'));
const l=data.lessons.find(l=>l.id==='rlm_8'),overlay={};
for(const [i,[skill,block,ids,sources,section]] of specs.entries()){
 const exercises=ids.map(id=>{
  if(id.startsWith('legacy:')){
   const [,b,q]=id.split(':').map(Number);return `rlm_8.blocks[${b}].questions[${q}]: ${l.blocks[b].questions[q].comment}`;
  }
  for(const [b,content] of l.blocks.entries()){
   const q=content.questions.findIndex(q=>q.auditId===id);
   if(q>=0)return `rlm_8.blocks[${b}].questions[${q}] (${id}): ${content.questions[q].comment}`;
  }
  throw Error(`Questão não localizada: ${id}`);
 });
 overlay[`rlm_8-c${String(i+1).padStart(2,'0')}`]={
  subcompetencia:skill,nivel:'ADEQUADO',validacao:'PENDENTE',
  evidenciaTeoria:[`content/revisao/rlm_8_${block+1}.md: ${section}`],
  evidenciaFonte:sources.map(id=>{const s=data.sources.find(s=>s.num===id);return `${s.title}: ${s.url}; consulta em 31/10/2026; escopo em LOTE_PROBABILIDADE.md`;}),
  fundamentacaoPropria:sources.length?[]:[`Derivação explícita e exemplos em content/revisao/rlm_8_${block+1}.md; teste independente quando aplicável em src/utils/probabilityReview.test.ts; não se atribui esta dedução à fonte de calendário.`],
  exerciciosValidados:exercises,
  evidenciaRevisao:[`rlm_8.blocks[${block}].modoB; rlm_8.mindMap; cartões revistos pelo script review_probability.ts; memória em LOTE_PROBABILIDADE.md`],
  pendenciasCriticas:[],
  lacunas:'Conferência visual e busca exaustiva de retificações posteriores não concluídas. O nível ADEQUADO descreve o recorte matemático revisado; a linha não é marcada VALIDADO. Itens de lógica e sequências também são distribuídos à aula 6.',
 };
}
fs.writeFileSync('docs/auditoria/rlm_8_evidencias.json',JSON.stringify(overlay,null,2)+'\n');
console.log(`${specs.length} recortes com localizadores individuais; nenhuma validação integral automática.`);
