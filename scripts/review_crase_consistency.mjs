import fs from 'node:fs';
const data=JSON.parse(fs.readFileSync('data/app_data.json','utf8'));
const l=data.lessons.find(l=>l.id==='por_12');
l.mindMap.branches[3].nodes[1].detail='Casa e terra dependem do sentido e da presença de artigo. Distância determinada: à distância de; sem medida, há variação entre manuais, inclusive admissão de à distância por clareza.';
for(const b of l.blocks)for(const field of ['modoA','modoB','modoA_markdown','modoB_markdown'])if(b[field]){
 b[field]=b[field].replaceAll('(<em>a uma hora</em>)','(<em>a uma pessoa</em>; não confunda com <em>à uma hora da tarde</em>, indicação de hora precisa)');
}
const text='<h4>Hora precisa, intervalo e duração</h4><p>Compare: “A reunião começa à uma hora da tarde” (hora precisa); “A reunião começa daqui a uma hora” (intervalo futuro); “A reunião começou há uma hora” (tempo decorrido); “Voltarei a uma hora qualquer” (horário indeterminado). A palavra uma pode ser numeral ou artigo indefinido: a decisão depende da construção.</p>';
if(!l.blocks[0].modoA.includes('Hora precisa, intervalo e duração'))l.blocks[0].modoA+=text;
const qs=[
 ['crase-hora','Qual frase usa o acento grave adequadamente?',['Voltarei daqui à uma hora.','A reunião começou à uma hora da tarde.','A reunião começou a uma hora, isto é, sessenta minutos atrás.','O prazo terminará há uma hora, contando de agora.'],1,'B indica uma hora precisa. A marca intervalo futuro e exige a; C marca tempo decorrido e exige há; D também confunde tempo futuro com decorrido.'],
 ['crase-distancia','Qual análise respeita a variação de orientação sobre distância?',['O acento é sempre proibido sem número.','A presença de distância sempre torna o acento obrigatório.','À distância de cinquenta metros é construção com especificador; sem medida, é preciso observar o contexto e a orientação do manual adotado.','Toda ocorrência de distância é uma locução adverbial.'],2,'C distingue a construção determinada e a variação registrada. A ignora orientações que admitem o acento por clareza; B ignora funções sintáticas diferentes; D é falsa em frases como “medimos a distância”, com objeto direto.'],
];
for(const [id,q,options,ans,comment]of qs)if(!l.blocks[0].questions.some(x=>x.auditId===id))l.blocks[0].questions.push({auditId:id,q:'(Autoral) '+q,options,ans,comment});
l.questionsCount=l.blocks.reduce((n,b)=>n+b.questions.length,0);
const json=JSON.stringify(data,null,2)+'\n';
for(const p of ['data/app_data.json','public/data/app_data.json'])fs.writeFileSync(p,json);
for(const p of ['data/app_data.js','public/data/app_data.js'])fs.writeFileSync(p,`window.APP_DATA = ${json.trimEnd()};\nwindow.LOCAL_APP_DATA = window.APP_DATA;\n`);
console.log('Crase: exemplo ambíguo corrigido, mapa sincronizado e duas questões acrescentadas.');
