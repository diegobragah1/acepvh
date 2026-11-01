import fs from 'node:fs';
const d=JSON.parse(fs.readFileSync('data/app_data.json','utf8'));
const l=d.lessons.find(l=>l.id==='por_9');
const b=l.blocks[1];
const card=b.flashcards[1];
card.b='A transformação usual parte de VTD ou VTDI com objeto direto. Há exceções lexicais: obedecer e desobedecer, embora transitivos indiretos na regência normativa, admitem passiva. Não estenda essa exceção a todo VTI.';
if(card.back!==undefined)card.back=card.b;
for(const block of l.blocks)for(const q of block.questions)q.q=q.q.replace(/^\(IBGP[^)]*\)/,'(Questão de estudo — origem não autenticada)');
const q=l.blocks[0].questions;
q[0].comment='C: interviesse segue viesse, e reaveriam é futuro do pretérito, formando hipótese coerente. A usa intervisse em lugar de interviesse. B exige intervenha depois de caso, não intervier. D exige interveio em lugar de interviu. Os exemplos são construções para análise linguística; a forma verbal não comprova resultados sanitários.';
q[1].comment='B: eliminara equivale a tinha eliminado e situa a eliminação antes da chegada, expressa por chegou. A troca anterioridade por posterioridade; C atribui habitualidade não marcada por essa forma no contexto; D troca uma afirmação de passado por uma hipótese futura.';
const additions=[
 ['passiva-excecao','Qual análise está de acordo com a distinção da aula?',['Obedecer nunca admite voz passiva porque exige preposição.','As normas foram obedecidas é uma passiva admitida, apesar da regência indireta de obedecer.','Todo verbo transitivo indireto admite passiva.','Todo verbo na voz ativa exige objeto direto.'],1,'B reconhece a exceção lexical. A a ignora; C generaliza indevidamente a exceção; D confunde voz ativa com a estrutura que normalmente permite sua transformação em passiva.'],
 ['ativa-intransitivo','Em “Os visitantes chegaram cedo”, qual análise é adequada?',['A oração está na passiva porque os visitantes recebem a chegada.','Chegaram cedo contém um objeto direto que pode virar sujeito paciente.','Há construção ativa com verbo intransitivo; não há objeto direto para a transformação usual em passiva.','Cedo é o agente da passiva.'],2,'C distingue a classificação de voz da possibilidade de transformação. A confunde acontecimento com passiva; B inventa objeto direto; D atribui função de agente da passiva ao advérbio cedo.'],
 ['correlacao','Em “Se você encontrar o documento, avise a equipe”, qual afirmação é correta?',['A construção é inadequada porque a oração principal precisa estar no futuro do presente.','Avise está no infinitivo pessoal.','Encontrar exprime uma ação passada concluída.','Uma condição no futuro do subjuntivo pode combinar-se com uma instrução no imperativo.'],3,'D descreve a relação entre condição e instrução. A trata um modelo frequente como única combinação possível; B confunde imperativo com infinitivo; C atribui passado a uma condição futura.'],
];
for(const [id,text,options,ans,comment] of additions){if(!b.questions.some(q=>q.auditId===id))b.questions.push({auditId:id,q:'(Autoral — aplicação) '+text,options,ans,comment});}
const note='<h4>Limites das classificações e das transformações</h4><p>A voz ativa não se restringe a verbos transitivos diretos: em “Os visitantes chegaram cedo”, há verbo intransitivo e não existe objeto direto para promover a sujeito de uma passiva. A estrutura VTD/VTDI apresentada no quadro é o modelo usual de transformação, não uma definição de toda oração ativa. Obedecer e desobedecer são exceções lexicais reconhecidas na passivização, conforme o resumo.</p><p>As correlações são modelos contextualizados, não pares obrigatórios para qualquer frase. “Se você encontrar o documento, avise a equipe” combina futuro do subjuntivo com uma instrução. Identifique a relação de condição, a referência temporal e a intenção antes de julgar a combinação.</p>';
if(!b.modoA.includes('Limites das classificações e das transformações'))b.modoA+=note;
l.questionsCount=l.blocks.reduce((n,b)=>n+b.questions.length,0);
const json=JSON.stringify(d,null,2)+'\n';
for(const p of ['data/app_data.json','public/data/app_data.json'])fs.writeFileSync(p,json);
for(const p of ['data/app_data.js','public/data/app_data.js'])fs.writeFileSync(p,`window.APP_DATA = ${json.trimEnd()};\nwindow.LOCAL_APP_DATA = window.APP_DATA;\n`);
console.log('por_9: contradição entre cartão e resumo corrigida; três questões autorais acrescentadas.');
