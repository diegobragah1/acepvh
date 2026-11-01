import fs from 'node:fs';
const d=JSON.parse(fs.readFileSync('data/app_data.json','utf8'));
const l=d.lessons.find(l=>l.id==='rlm_7');
let count=0;
for(const b of l.blocks)for(const field of ['modoA','modoB','modoA_markdown','modoB_markdown']){
 if(!b[field])continue;
 const before=b[field];
 b[field]=before
 .replaceAll('Eventos Independentes / Sorteios Sucessivos','Eventos Independentes — verificar a hipótese')
 .replaceAll('Probabilidade de Eventos Independentes Sucessivos','Probabilidade de Eventos Sucessivos — verificar dependência')
 .replaceAll('Multiplica as probabilidades! <em>(Atenção: se o sorteio for <strong>SEM reposição</strong>, diminua 1 do numerador e 1 do denominador na segunda retirada!).</em>','Use a probabilidade da primeira ocorrência multiplicada pela probabilidade condicional da segunda. Sem reposição, atualize o estoque: retirar uma ficha azul reduz o total e as azuis, mas não as verdes. O produto de probabilidades não condicionais exige independência. Veja os exemplos completos na aula 8.')
 .replaceAll('Multiplica as probabilidades! *(Atenção: se o sorteio for **SEM reposição**, diminua 1 do numerador e 1 do denominador na segunda retirada!).*','Use a probabilidade da primeira ocorrência multiplicada pela probabilidade condicional da segunda. Sem reposição, atualize o estoque: retirar uma ficha azul reduz o total e as azuis, mas não as verdes. O produto de probabilidades não condicionais exige independência. Veja os exemplos completos na aula 8.');
 if(before!==b[field])count++;
}
const json=JSON.stringify(d,null,2)+'\n';
for(const p of ['data/app_data.json','public/data/app_data.json'])fs.writeFileSync(p,json);
for(const p of ['data/app_data.js','public/data/app_data.js'])fs.writeFileSync(p,`window.APP_DATA = ${json.trimEnd()};\nwindow.LOCAL_APP_DATA = window.APP_DATA;\n`);
console.log(`${count} campos corrigidos em rlm_7; exercícios e identificadores preservados.`);
