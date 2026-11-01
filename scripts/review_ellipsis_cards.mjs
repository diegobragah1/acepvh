import fs from 'node:fs';
const data=JSON.parse(fs.readFileSync('data/app_data.json','utf8'));
const changes=[];
for(const lesson of data.lessons)for(const [bi,block] of lesson.blocks.entries())for(const [ci,card] of (block.flashcards||[]).entries()){
 for(const field of ['b','back'])if(typeof card[field]==='string'&&card[field].includes('Elipse é a omissão de um termo não mencionado antes')){
  const before=card[field];
  card[field]='Elipse é a omissão de termo recuperável pelo contexto. Zeugma é um caso particular de elipse em que o termo omitido já foi expresso. A distinção não exclui a zeugma da categoria geral de elipse.';
  changes.push({aula:lesson.id,bloco:bi,cartao:ci,campo:field,antes:before,depois:card[field]});
 }
}
if(!changes.length){console.log('Nenhuma correção pendente.');process.exit(0);}
const json=JSON.stringify(data,null,2)+'\n';
for(const p of ['data/app_data.json','public/data/app_data.json'])fs.writeFileSync(p,json);
for(const p of ['data/app_data.js','public/data/app_data.js'])fs.writeFileSync(p,`window.APP_DATA = ${json.trimEnd()};\nwindow.LOCAL_APP_DATA = window.APP_DATA;\n`);
fs.writeFileSync('docs/auditoria/ELIPSE_CARTOES.json',JSON.stringify({escopo:'Correção de contradição entre definição geral da teoria e cartões; não certifica revisão integral.',changes},null,2)+'\n');
console.log(`${changes.length} campos de cartões corrigidos.`);
