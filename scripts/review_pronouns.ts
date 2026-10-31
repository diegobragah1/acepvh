import fs from 'node:fs';
import {renderMarkdownToHtml} from '../src/utils/markdown';
const data=JSON.parse(fs.readFileSync('data/app_data.json','utf8'));
const lesson=data.lessons.find((l:any)=>l.id==='por_13');
const parts=fs.readFileSync('content/revisao/por_13.md','utf8').split('<!-- BLOCO -->').map(s=>s.trim());
if(parts.length!==lesson.blocks.length)throw Error('A quantidade de blocos deve permanecer estável.');
const summaries=[
'- Próclise: pronome antes; examine fatores e alcance na oração.\n- Ênclise: pronome depois, com hífen; não se liga ao particípio ou à forma completa do futuro do indicativo.\n- Mesóclise: futuro do presente/pretérito em contextos formais, sem fator de próclise. Com sujeito anteposto, também pode haver próclise.\n- Registro formal não descreve todos os usos da conversação brasileira.',
'- Locução: identificar auxiliar e principal.\n- Infinitivo/gerúndio admitem posições diferentes das do particípio.\n- Com particípio, o pronome se liga ao auxiliar, não ao particípio.\n- Não lhe podemos enviar / Não podemos enviar-lhe: duas construções formais admitidas.\n- Vírgula não elimina um fator posterior: Hoje, não me avisaram.\n- As questões de concordância/crase deste bloco são revisão interdisciplinar.',
'- Nunca me esquecerei; realizar-se-ão; quando se encerrar; a equipe se havia deslocado.\n- Confira forma verbal, fatores, alcance, posições alternativas e grafia.\n- Função de se e colocação são análises distintas.\n- Fonte e autoria de questão exigem autenticação independente.',
];
for(let i=0;i<parts.length;i++){
 const b=lesson.blocks[i];b.title=['Bloco 13.1 — Fundamentos, fatores e colocação com um verbo','Bloco 13.2 — Locuções verbais e revisão interdisciplinar','Bloco 13.3 — Correções comentadas e limites dos atalhos'][i];
 b.modoA_markdown=parts[i];b.modoA=renderMarkdownToHtml(parts[i]);
 b.modoB_markdown=summaries[i];b.modoB=renderMarkdownToHtml(summaries[i]);
}
for(const q of lesson.blocks[1].questions){
 q.comment=q.comment.replace("na A e E, 'haver' e 'fazer' foram flexionados indevidamente no plural.","na A, 'haver' e 'fazer' foram flexionados indevidamente no plural.")
 .replace(/ Erros da E:[\s\S]*$/, '').replace(/ Erro da E:[\s\S]*$/, '');
}
const card=lesson.blocks[2].flashcards[1];
card.f=card.front='Uma vírgula após advérbio obriga sempre a ênclise?';
card.b=card.back='Não. Em "Ontem, avisaram-me", há ênclise sem outro fator. Mas em "Ontem, ninguém me avisou", ninguém continua exigindo próclise. Examine a estrutura e os fatores depois da vírgula.';
lesson.editalRef='Anexo IV — Língua Portuguesa: colocação pronominal.';
lesson.mindMap.branches[1].nodes[0].detail='Futuro do presente/pretérito: realizar-se-á. Com sujeito anteposto, admite-se também próclise: a equipe se organizará.';
lesson.mindMap.branches[3].title='4. Restrições no registro formal';
lesson.mindMap.branches[3].nodes[0].detail='No início absoluto do período formal, use Entregue-me; isso não descreve todas as variedades da fala brasileira.';
lesson.mindMap.branches[3].nodes[1].detail='Não se liga o pronome após a forma completa do futuro do presente/pretérito do indicativo nem após particípio. Examine a locução inteira.';
for(const n of [110,112])if(!lesson.sources.includes(n))lesson.sources.push(n);
const json=JSON.stringify(data,null,2)+'\n';
for(const p of ['data/app_data.json','public/data/app_data.json'])fs.writeFileSync(p,json);
for(const p of ['data/app_data.js','public/data/app_data.js'])fs.writeFileSync(p,`window.APP_DATA = ${json.trimEnd()};\nwindow.LOCAL_APP_DATA = window.APP_DATA;\n`);
console.log('Exposição principal de colocação pronominal reorganizada em três blocos, com índices de questões preservados.');
