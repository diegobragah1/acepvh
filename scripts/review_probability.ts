import fs from 'node:fs';
import {renderMarkdownToHtml} from '../src/utils/markdown';

const data=JSON.parse(fs.readFileSync('data/app_data.json','utf8'));
const lesson=data.lessons.find((l:any)=>l.id==='rlm_8');
const titles=[
 'Bloco 8.1 — Espaço amostral, eventos e regras de probabilidade',
 'Bloco 8.2 — Laboratório de tabelas, caminhos e contagem',
 'Bloco 8.3 — Garantias, princípio das gavetas e estoques limitados',
 'Bloco 8.4 — Calendários, filas, intervalos e problemas em etapas',
];
const summaries=[
 'Contar favoráveis/possíveis exige equiprobabilidade. União desconta a interseção; exatamente um exclui a interseção duas vezes. P(A|B)=P(A∩B)/P(B), para P(B)>0. Regra geral: P(A∩B)=P(A)P(B|A); o produto das probabilidades simples exige independência. Sem reposição, atualize a composição conforme a cor retirada. Complemento: P(pelo menos um)=1−P(nenhum).',
 'Use tabela para distinguir união, interseção e condição. Em árvore, multiplique probabilidades condicionais ao longo de cada caminho e some caminhos disjuntos. Uma de cada cor pode ocorrer em duas ordens. Anagramas exigem descontar letras indistinguíveis; a aula 7 desenvolve a contagem.',
 'Garantia exige considerar todas as distribuições possíveis. m(k−1)+1 garante k em alguma das m categorias; só é mínimo se o pior caso anterior for realizável. Estoques limitados: some min(capacidade,k−1), depois acrescente 1 se a meta for possível. Alguma categoria e cada categoria são objetivos distintos.',
 'Datas: use dias transcorridos e resto por 7; no calendário gregoriano, séculos só são bissextos quando divisíveis por 400. Fila: N=a+b−1 para a mesma pessoa. Linha aberta: L/d+1 somente com divisão exata e ambas as pontas; circuito fechado: L/d. Subida: se H>S>D≥0, dias=teto((H−S)/(S−D))+1; H≤S exige um dia.',
];
for(let i=0;i<4;i++){
 const b=lesson.blocks[i];
 b.title=titles[i];
 b.modoA_markdown=fs.readFileSync(`content/revisao/rlm_8_${i+1}.md`,'utf8');
 b.modoA=renderMarkdownToHtml(b.modoA_markdown);
 b.modoB_markdown=summaries[i];b.modoB=renderMarkdownToHtml(summaries[i]);
 for(const q of b.questions||[])q.q=q.q.replace(/^\(IBGP[^)]*\)/,'(Questão de estudo — origem não autenticada)').replace('(Questão Autoral Inédita — Perfil IBGP / ACE SEMUSA)','(Autoral — cenário fictício)');
}
const comments=[
 [
  'B: 7 múltiplos de 4, 5 de 6 e 2 comuns (12 e 24); (7+5−2)/30=1/3. A equivale a 9/30, não aos dez favoráveis; C soma 7+5 sem descontar os dois comuns; D usa apenas os sete múltiplos de 4. Modelo: sorteio uniforme.',
  'A: (6/10)×(5/9)=1/3. B, 9/25, corresponderia a duas retiradas com reposição e independência. C, 2/5, é a proporção inicial de negativas, não a chance de duas positivas. D não coincide com os 30 pares ordenados positivos entre 90 pares possíveis. O cenário é fictício.',
  'A: sob a independência expressamente dada, P(nenhum)=0,6×0,7=0,42; P(pelo menos um)=0,58. D é a chance do complementar; C soma 40%+30% e duplica a interseção de 12%; B não resulta da união 40%+30%−12%. O exemplo não descreve previsão meteorológica real.',
  'B: há 36 pares ordenados equiprováveis. Os cinco favoráveis são (2,6),(3,5),(4,4),(5,3),(6,2). A, C e D equivalem a 6/36, 4/36 e 7/36, respectivamente; nenhuma conta os cinco pares corretos.',
 ],
 [
  'C: a condição restringe o sorteio aos 20 com curso superior (15 ACEs e 5 administrativos); 15/20=75%. A ignora a condição; B calcula a condição inversa (curso superior entre ACEs); D calcula a fração de todos os servidores que têm curso superior. Cenário fictício, sorteio uniforme.',
  'B: são seis letras, com dois Es indistinguíveis: 6!/2!=360. A conta duas vezes cada anagrama; C usa 5!, como se houvesse apenas cinco letras; D não corresponde à divisão pelo único grupo de letras repetidas. Não se exige significado lexical. Contagem desenvolvida na aula 7.',
 ],
 [
  'C: com 36 pessoas ainda podem existir exatamente três por mês; a 37ª força quatro em algum mês. A garante apenas duas; B ainda admite a distribuição sem quatro; D garante a meta, mas excede o mínimo. Não se pressupõe equiprobabilidade dos meses.',
  'B: doze retiradas ainda podem ser todas verdes, mas a 13ª terá outra cor. A e C confundem ou excedem o limite: três ainda podem ser todas verdes e quatorze já não é o mínimo. D é suficiente, porém também excede treze. Objetivo: duas fichas com cores distintas, não duas de cada cor.',
 ],
 [
  'B: 100=14×7+2; domingo mais dois dias é terça. A, C e D corresponderiam a restos 1, 3 e 4. A contagem usa cem dias transcorridos, sem incluir o dia inicial como primeiro dia já passado.',
  'B: treze antes, Lucas e dezoito depois: 13+1+18=32. A omite Lucas; C soma as duas posições sem corrigir a dupla contagem; D acrescenta outra unidade indevida.',
  'C: 600/25=24 intervalos; incluindo ambas as pontas, são 25 pontos. B conta intervalos como pontos; A elimina dois pontos indevidamente; D adiciona duas unidades aos intervalos. É um modelo matemático fictício, não uma orientação técnica de instalação.',
 ],
];
for(let b=0;b<4;b++)for(let q=0;q<comments[b].length;q++)lesson.blocks[b].questions[q].comment=comments[b][q];

const questions:any[]=[
 [0,'equiprobabilidade','básica','Uma roleta tem três regiões com probabilidades 1/2, 1/3 e 1/6. Qual é a probabilidade de parar na primeira região?',['1/3, porque há três regiões.','1/2, conforme a probabilidade atribuída.','2/3, porque duas regiões ficam de fora.','1, porque uma região será escolhida.'],1,'B usa o peso informado. A supõe equiprobabilidade inexistente; C confunde número de regiões excluídas com probabilidade; D é a chance de parar em alguma região, não na primeira.'],
 [0,'exatamente-um','intermediária','Sorteia-se uniformemente um inteiro de 1 a 30. Qual a chance de ser múltiplo de exatamente um entre 4 e 6?',['1/3.','2/5.','4/15.','1/15.'],2,'C: (7+5−2×2)/30=8/30=4/15. A é a união inclusiva; B não desconta a sobreposição; D corresponde somente aos dois múltiplos comuns.'],
 [0,'cores-ordem','intermediária','Há 6 fichas azuis e 4 verdes. Em duas retiradas uniformes sem reposição, qual a chance de sair azul e depois verde?',['1/5.','6/25.','1/3.','4/15.'],3,'D: (6/10)×(4/9)=4/15. A reduz indevidamente as verdes para três; B mantém o denominador dez como se houvesse reposição; C é a chance de duas azuis.'],
 [0,'exclusao-independencia','intermediária','Dois eventos são mutuamente exclusivos e ambos têm probabilidade positiva. Qual afirmação é correta?',['Eles são independentes porque não ocorrem juntos.','Eles são dependentes, pois a interseção é zero e o produto das probabilidades é positivo.','A probabilidade da união é zero.','A probabilidade de um deles deve ser um.'],1,'B compara P(A∩B)=0 com P(A)P(B)>0. A confunde exclusão e independência; C confunde união e interseção; D não decorre das hipóteses.'],
 [1,'caminhos','intermediária','Uma caixa tem 3 fichas azuis e 2 verdes. Em duas retiradas uniformes sem reposição, qual a chance de sair uma ficha de cada cor, em qualquer ordem?',['3/10.','9/25.','3/5.','9/10.'],2,'C: azul-verde dá 3/10 e verde-azul também, total 3/5. A conta apenas uma ordem; B é a chance de duas azuis com reposição; D é a chance de ao menos uma azul sem reposição.'],
 [1,'condicao-inversa','intermediária','No quadro da aula, 15 das 25 pessoas da equipe de campo têm qualificação. Sabendo que a pessoa sorteada uniformemente é da equipe de campo, qual a chance de ter qualificação?',['37,5%.','50%.','75%.','60%.'],3,'D: 15/25=60%. A usa o total de quarenta e calcula a interseção sem condição; B é a proporção geral de qualificados; C responde à condição inversa, campo entre qualificados.'],
 [2,'estoque','avançada','Uma caixa contém 8 fichas A, 12 B e 15 C. Sem olhar, qual o mínimo de retiradas para garantir dez de alguma categoria?',['26.','27.','28.','35.'],1,'B: a maior retirada que evita dez é 8+9+9=26; a próxima força a meta. A ainda pode falhar; C aplica o limite genérico sem aproveitar o estoque A; D garante, mas não é mínimo.'],
 [2,'cada-cor','avançada','Há 10 fichas azuis, 8 verdes e 5 vermelhas. Qual o mínimo de retiradas sem olhar para garantir pelo menos duas de cada cor?',['4.','18.','19.','20.'],3,'D: 19 ainda podem ser 10 azuis+8 verdes+1 vermelha; a 20ª garante a segunda vermelha, e nenhuma outra cor pode ter menos de duas com vinte retiradas. A garante duas de alguma cor, não de todas; B e C ainda podem omitir a meta vermelha.'],
 [3,'bissexto','básica','Pela regra do calendário gregoriano, qual afirmação está correta?',['2100 será bissexto por ser divisível por 4.','Todo ano divisível por 100 é bissexto.','2000 foi bissexto e 2100 não será.','Nenhum ano divisível por 100 é bissexto.'],2,'C: 2000 é divisível por 400; 2100 é divisível por 100, mas não por 400. A omite a exceção secular; B e D ignoram a distinção pela divisibilidade por 400.'],
 [3,'subida','intermediária','Um objeto parte do zero, sobe 4 m por dia e recua 1 m à noite; para ao atingir 11 m. Em qual dia atinge o objetivo?',['3º.','4º.','5º.','11º.'],1,'B: os máximos diurnos são 4,7,10,13. O terceiro dia ainda fica abaixo de onze; o quarto alcança. C acrescenta uma etapa desnecessária; D confunde a altura com a quantidade de dias. A fórmula precisa de teto: teto(7/3)+1=4.'],
 [3,'circuito','intermediária','Um circuito fechado de 600 m terá marcas igualmente espaçadas a cada 25 m. Quantas marcas distintas serão necessárias?',['24.','25.','23.','26.'],0,'A: 600/25=24 intervalos e 24 marcas, porque início e fim coincidem. B aplica a fórmula da linha aberta; C elimina uma marca necessária; D conta indevidamente duas extremidades extras.'],
 [3,'linha-nao-divisivel','avançada','Uma linha de 610 m deve ter marcas em ambas as pontas e todos os intervalos exatamente iguais a 25 m. Qual conclusão é correta?',['São 25 marcas e todos os intervalos medem 25 m.','São 26 marcas e todos os intervalos medem 25 m.','São 24 marcas e todos os intervalos medem 25 m.','As exigências são incompatíveis, pois 610 não é múltiplo de 25.'],3,'D: um número inteiro de intervalos de 25 m não totaliza 610 m. A e C não alcançam a ponta final; B admite a última distância de dez metros se houver marcas desde zero, contrariando o intervalo exato. Com intervalos de no máximo 25 m, a pergunta seria outra.'],
 [3,'sequencia-regra','básica','Uma sequência começa em 2 e avança somando, nessa ordem, os ímpares 3,5,7,9,... . Após 2,5,10,17, qual é o próximo termo?',['24.','25.','26.','34.'],2,'C: a próxima soma é 9, então 17+9=26. A repete o incremento sete; B não aplica o incremento informado; D dobra o último termo sem respaldo na regra. A regra explícita elimina ambiguidade de continuações.'],
];
for(const [block,id,level,q,options,ans,comment] of questions){
 const qs=lesson.blocks[block].questions,auditId=`probabilidade-${id}`;
 if(!qs.some((x:any)=>x.auditId===auditId))qs.push({auditId,q:`(Autoral — ${level}) ${q}`,options,ans,comment});
}

function card(block:number,index:number,front:string,back:string){
 Object.assign(lesson.blocks[block].flashcards[index],{f:front,front,b:back,back});
}
card(0,1,'Como calcular a chance de pelo menos um sucesso pelo complementar?','P(pelo menos um)=1−P(nenhum). Para calcular nenhum por produto, confira as dependências; usar o complemento não prova independência.');
card(0,4,'Qual é a fórmula de P(A|B) e quando podemos usar contagens?','P(A|B)=P(A∩B)/P(B), para P(B)>0. Em espaço finito equiprovável, equivale a n(A∩B)/n(B).');
card(1,1,'Qual condição muda o denominador em P(A|B)?','O evento B, com P(B)>0. Use P(A∩B)/P(B); a razão de contagens n(A∩B)/n(B) exige espaço equiprovável.');
card(2,0,'Quando m(k−1)+1 é o mínimo para garantir k na mesma categoria?','É suficiente pelo princípio das gavetas e mínimo se a distribuição de k−1 em cada categoria for possível. Estoques limitados podem reduzir o mínimo; se nenhuma categoria comporta k, a meta é impossível.');
card(2,1,'Qual é o raciocínio da pior hipótese para provar um mínimo garantido?','Construa uma distribuição com N−1 que ainda evita a meta e demonstre que toda distribuição com N a atinge. Diferencie alguma categoria de cada categoria.');
card(3,2,'Quando uma linha com comprimento L e espaçamento d tem L/d+1 pontos?','Quando L é múltiplo de d, a linha é aberta e inclui as duas pontas. Em circuito fechado com divisão exata, há L/d pontos.');
const extraCards=[
 [0,'O conectivo E garante independência?','Não. Use P(A∩B)=P(A)P(B|A). O produto P(A)P(B) exige independência.'],
 [3,'Como calcular os dias de subida com recuo?','Se H≤S, um dia. Se H>S e S>D≥0, teto((H−S)/(S−D))+1; não há recuo depois de alcançar H.'],
 [3,'Qual é a exceção secular dos anos bissextos gregorianos?','Um ano divisível por 100 só é bissexto se também for divisível por 400.'],
];
for(const [block,front,back] of extraCards){const cs=lesson.blocks[Number(block)].flashcards;if(!cs.some((c:any)=>(c.front||c.f)===front))cs.push({f:front,front,b:back,back});}
lesson.mindMap.branches[0].nodes[0].detail='P(A)=n(A)/n(Ω) somente com resultados elementares equiprováveis.';
lesson.mindMap.branches[1].nodes[1].detail='Geral: P(A∩B)=P(A)P(B|A). Independentes: P(A)P(B). Reposição exige sorteios independentes para justificar o produto simples.';
lesson.mindMap.branches[1].nodes[2].detail='P(A|B)=P(A∩B)/P(B), P(B)>0; contagens somente no modelo equiprovável.';
lesson.mindMap.branches[2].nodes[1].detail='m(k−1)+1: mínimo se o pior caso for realizável. Estoques: somar min(capacidade,k−1) e acrescentar um se a meta for possível.';
lesson.mindMap.branches[3].nodes[2].detail='Linha aberta, divisão exata e pontas incluídas: L/d+1; circuito fechado: L/d.';
for(const [label,detail] of [['Calendário gregoriano','Bissexto: divisível por 4, exceto século não divisível por 400.'],['Subida com recuo','H>S e S>D≥0: teto((H−S)/(S−D))+1; H≤S: um dia.']]){
 const nodes=lesson.mindMap.branches[3].nodes;
 if(!nodes.some((x:any)=>x.label===label))nodes.push({label,detail});
}
const sources=[
 [122,'OpenStax — Introductory Statistics, 3.1 Terminology','https://openstax.org/books/introductory-statistics/pages/3-1-terminology'],
 [123,'OpenStax — Introductory Statistics, 3.2 Independent and Mutually Exclusive Events','https://openstax.org/books/introductory-statistics/pages/3-2-independent-and-mutually-exclusive-events'],
 [124,'OpenStax — Introductory Statistics, 3.3 Two Basic Rules of Probability','https://openstax.org/books/introductory-statistics/pages/3-3-two-basic-rules-of-probability'],
 [125,'US Naval Observatory — Leap Years','https://aa.usno.navy.mil/faq/leap_years'],
 [126,'David Guichard — Combinatorics and Graph Theory, 1.7 The Pigeonhole Principle','https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Combinatorics_and_Graph_Theory_%28Guichard%29/01%3A_Fundamentals/1.07%3A_The_Pigeonhole_Principle'],
];
for(const [num,title,url] of sources){
 if(!data.sources.some((s:any)=>s.num===num))data.sources.push({num,title,name:title,url,folder:'REFERÊNCIAS MATEMÁTICAS',status:'reference',revoked:false,note:'Seção consultada em 31/10/2026; escopo e evidências em docs/auditoria/LOTE_PROBABILIDADE.md. Não comprova padrão de cobrança IBGP.'});
 if(!lesson.sources.includes(num))lesson.sources.push(num);
}
lesson.questionsCount=lesson.blocks.reduce((n:number,b:any)=>n+b.questions.length,0);
lesson.flashcardsCount=lesson.blocks.reduce((n:number,b:any)=>n+b.flashcards.length,0);
const json=JSON.stringify(data,null,2)+'\n';
for(const p of ['data/app_data.json','public/data/app_data.json'])fs.writeFileSync(p,json);
for(const p of ['data/app_data.js','public/data/app_data.js'])fs.writeFileSync(p,`window.APP_DATA = ${json.trimEnd()};\nwindow.LOCAL_APP_DATA = window.APP_DATA;\n`);
console.log(`rlm_8: ${lesson.questionsCount} questões principais, ${lesson.flashcardsCount} cartões; quatro blocos revisados.`);
