import fs from 'node:fs';
import crypto from 'node:crypto';
import {validationErrors} from '../src/utils/auditEvidence';
import {CURRICULUM_REVIEW} from '../src/data/curriculumReview';
import {ALL_PAUTA_ITEMS} from '../src/data/pautaEspecificaMap';
const data=JSON.parse(fs.readFileSync('data/app_data.json','utf8'));
const sha=crypto.createHash('sha256').update(fs.readFileSync('data/app_data.json')).digest('hex');
const additions:Record<string,string[]>={
 por_1:['Localizar informações literais','Distinguir tema, assunto e ideias principal/secundárias','Justificar inferências por pistas textuais','Distinguir pressupostos e subentendidos','Distinguir fato, opinião e posicionamento','Identificar tese, argumentos e contra-argumentos','Reconhecer intenção e efeitos de sentido','Analisar progressão temática','Interpretar textos verbais e não verbais','Comparar reescritas semanticamente equivalentes','Diagnosticar extrapolação, redução e inversão nas alternativas'],
 por_2:['Distinguir gênero, suporte e sequência textual','Explicar diferenças entre classificações tipológicas','Analisar sequências combinadas e predominância','Relacionar finalidade, interlocutor e circulação','Comparar textos de gêneros diferentes sobre o mesmo assunto'],
};
const rows=data.lessons.flatMap((l:any)=>[...CURRICULUM_REVIEW[l.id].requirements,...(additions[l.id]||[])].map((skill:string,i:number)=>({
 id:`${l.id}-c${String(i+1).padStart(2,'0')}`,itemOriginal:ALL_PAUTA_ITEMS.find(x=>x.lessonId===l.id)?.pautaLiteral||l.editalRef,
 aula:l.id,subcompetencia:skill,nivel:null,validacao:'PENDENTE',
 localizacao:`data/app_data.json#/lessons/${data.lessons.indexOf(l)}/blocks`,
 fontesCadastradas:l.sources.map((n:number)=>({id:n,url:data.sources.find((s:any)=>s.num===n)?.url,consultaComprovada:false})),
 evidenciaTeoria:[],evidenciaFonte:[],exerciciosValidados:[],evidenciaRevisao:[],
 inventarioExercicios:l.blocks.flatMap((b:any,j:number)=>(b.questions||[]).map((q:any,k:number)=>({local:`${l.id}.blocks[${j}].questions[${k}]`,revision:q.revision||null}))),
 lacunas:'Desenvolvimento, correção e aplicação ainda não avaliados individualmente para esta linha.',
 criterioAceite:'Explicação e restrições verificadas; exemplo resolvido; exercício inequívoco com alternativas comentadas; fonte com localizador; consistência de resumo/mapa/cartões.'
})));
const overlayPath='docs/auditoria/por_1_evidencias.json';
if(fs.existsSync(overlayPath)){
 const overlay=JSON.parse(fs.readFileSync(overlayPath,'utf8'));
 for(const r of rows)if(overlay[r.id])Object.assign(r,overlay[r.id]);
}
for(const r of rows) {
 const errors=validationErrors({...r,pendenciasCriticas:[]});
 if(errors.length)throw Error(`${r.id}: ${errors.join(', ')}`);
}
const out={baseDatasetSha256:sha,statusPermitidos:['AUSENTE','SUPERFICIAL','PARCIAL','ADEQUADO','APROFUNDADO','VALIDADO'],nota:'null significa ainda não avaliado; nunca equivale a AUSENTE ou VALIDADO. Inventário não comprova vínculo didático.',rows};
fs.writeFileSync('docs/auditoria/matriz.json',JSON.stringify(out,null,2)+'\n');
const safe=(s:string)=>s.replace(/\|/g,'/').replace(/\n/g,' ');
const header='# Matriz de rastreabilidade do edital\n\nBase: Anexo IV cadastrado como fonte 91; transcrição editorial em src/data/pautaEspecificaMap.ts. Conferência anterior: páginas 3–4, nível médio e ACE. A busca de retificações posteriores ainda precisa ser refeita. O item original deve ser reconferido no PDF para fechar cada linha.\n\nAs linhas herdadas são desdobramentos iniciais, não uma prova de exaustão. Termos amplos como uma lei inteira ou uma classe de palavras ainda precisam de decomposição mais fina. Novas subcompetências de interpretação foram distribuídas à aula 1 sem duplicar os conteúdos especializados das aulas 3, 6 e 7.\n\nNíveis possíveis: AUSENTE, SUPERFICIAL, PARCIAL, ADEQUADO, APROFUNDADO, VALIDADO. Onde não houve avaliação, o nível permanece não atribuído; não se inventa um diagnóstico. Localizadores, fontes cadastradas e inventário de questões estão no [registro estruturado](matriz.json). Nenhuma associação automática por palavra é usada para validar.\n\n';
fs.writeFileSync('docs/auditoria/MATRIZ_EDITAL.md',header+'| ID | Item original | Subcompetência / recorte inicial | Aula responsável | Local | Nível / validação |\n| --- | --- | --- | --- | --- | --- |\n'+rows.map((r:any)=>`| ${r.id} | ${safe(r.itemOriginal)} | ${r.subcompetencia} | ${r.aula} | ${r.localizacao} | ${r.nivel||'Não atribuído'} / ${r.validacao} |`).join('\n')+'\n');
fs.writeFileSync('docs/auditoria/AUDITORIA_49_AULAS.md','# Auditoria individual — 49 aulas\n\nNenhuma aula está integralmente validada pelos novos critérios. Esta fila preserva achados anteriores sem confundir triagem com leitura completa. Evidências de correções anteriores: [português](../REVISAO_PORTUGUES_PARCIAL.md), [RLM](../REVISAO_QUESTOES_RLM.md), [normas e integridade](../FECHAMENTOS_2026-10-31.md).\n\n'+data.lessons.map((l:any)=>`## ${l.id} — ${l.title}\n\nLocal: data/app_data.json, lessons[id=${l.id}]. ${l.blocks.length} blocos.\n\nDiagnóstico anterior a reconferir: ${CURRICULUM_REVIEW[l.id].finding}\n\nEstado: auditoria integral pendente. Fila: ${rows.filter((r:any)=>r.aula===l.id).map((r:any)=>r.id).join(', ')}.\n\nPara fechar: leitura integral de A/B, mapa, cartões e todas as questões; fontes e referências cruzadas; níveis por subcompetência com evidências; testes e revisão de aplicação.\n`).join('\n'));
fs.writeFileSync('docs/auditoria/COBERTURA_PROGRAMATICA.md','# Cobertura programática\n\nCobertura declarada: 49 aulas e seus títulos vinculados ao programa. Cobertura validada integralmente: 0 aulas segundo os novos critérios. Não há percentual confiável de cobertura factual ou pedagógica.\n\n| Disciplina | Aulas inventariadas | Linhas iniciais | Aulas integralmente validadas |\n| --- | --- | --- | --- |\n'+['por','rlm','esp','leg','atu'].map(id=>`| ${id} | ${data.lessons.filter((l:any)=>l.cat===id).length} | ${rows.filter((r:any)=>r.aula.startsWith(id+'_')).length} | 0 |`).join('\n')+'\n\nCada linha ainda exige a demonstração de fonte, exposição, exercício e revisão. Os nomes dos itens não constituem subcompetências suficientemente desenvolvidas por si. A matriz é ampliável e não esgota os itens abertos.\n');
console.log(`49 fichas; ${rows.length} linhas iniciais; 0 aprovações automáticas.`);
