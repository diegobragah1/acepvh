import fs from 'node:fs';
import { renderMarkdownToHtml } from '../src/utils/markdown';
const data=JSON.parse(fs.readFileSync('data/app_data.json','utf8'));
const selected=new Set(['por_7','por_10','por_11','por_14','por_17']);
const pairs:[string,string][]=[
['substitua por <strong>dele/dela</strong> ou reestruture a ordem dos termos','explicite o possuidor: <strong>na sala do supervisor</strong> ou <strong>na sala do agente</strong>. Trocar apenas por <em>dele</em> pode manter a ambiguidade'],
['VTD ou VTDI + SE = Partícula Apassivadora (PA):','Na construção passiva, VTD ou VTDI + SE apassivador:'],
['VTD + SE = Partícula Apassivadora (PA):','Na passiva sintética, VTD + SE apassivador:'],
['VTD + SE = plural','SE apassivador = concordância com o sujeito paciente'],
['Tem <strong>Sujeito Paciente</strong>! O verbo <strong>CONCORDA no plural</strong> com a coisa!','Tem <strong>sujeito paciente</strong>; o verbo concorda com ele, no singular ou plural.'],
['Com VTD/VTDI o "SE" é Partícula Apassivadora (tem sujeito paciente e vai ao plural: "Vendem-se casas"). Com VTI/VI/VL o "SE" é Índice de Indeterminação do Sujeito (verbo travado no singular: "Precisa-se de vendedores").','Compare a estrutura e o sentido. Em "Vendem-se casas", há sujeito paciente e paráfrase "casas são vendidas": se apassivador, concordância plural. Em "Precisa-se de vendedores", há sujeito indeterminado e verbo singular. VTD com se também pode ser reflexivo ("Ela se lavou") ou recíproco ("Eles se abraçaram"); a transitividade sozinha não decide.'],
['Só admitem conversão para a Voz Passiva os verbos que possuem <strong>Objeto Direto (VTD ou VTDI)</strong>!','Na transformação regular para a passiva, parte-se de uma construção com <strong>objeto direto (VTD ou VTDI)</strong>. Existem exceções lexicais, como <em>obedecer</em> e <em>desobedecer</em>, que admitem passiva apesar da regência indireta.'],
['Se NÃO houver palavra atrativa → <strong>MESÓCLISE OBRIGATÓRIA</strong>','Sem fator de próclise, no início do período formal → <strong>MESÓCLISE</strong>'],
["Se não houver palavra atrativa, usa-se Mesóclise ('Dir-te-ei')", "Sem fator de próclise, no início do período formal, usa-se mesóclise ('Dir-te-ei'). Com sujeito expresso antes do verbo, também se admite próclise ('O relatório se concluirá amanhã')"],
['sempre com preposição e sentido paciente!','com preposição; o teste agente/paciente é útil com substantivos de ação, mas não define todos os complementos de adjetivos e advérbios'],
['MNTÉM','MANTÉM'],
['longa extensão (3 ou mais palavras)', 'longa extensão (conforme a construção e a clareza)'],
['longo com 3 ou mais palavras', 'longo, conforme a construção e a clareza'],
['se for longo, de 3 ou mais palavras, a vírgula é obrigatória', 'se for longo, em geral deve ser destacado; a contagem de palavras não é critério universal'],
['As questões de coesão e conectivos representam até 30% da prova de Português da banca IBGP:', 'A interpretação dos conectivos depende da relação entre as ideias no contexto:'],
['A banca IBGP cobra em quase todas as provas a direção para onde o pronome aponta dentro do texto:', 'Confira a direção para a qual o pronome aponta no texto:'],

['Aula 22: 22. Sintaxe II: Regência Verbal e Nominal, Emprego do Sinal Indicativo de Crase e Pontuação','Aula 17 — Pontuação e suas relações com a sintaxe'],
['Atividade Prática de Fixação da Aula 22 — Regência Verbal e Nominal, Emprego da Crase e Regras da Vírgula','Revisão de pontuação em construções sintáticas'],
['Truques Infalíveis para Crase e Pontuação na IBGP','Testes práticos de crase e pontuação'],
['Mais de 90% das questões de pontuação da IBGP tentam colocar','Uma armadilha de pontuação consiste em colocar'],
['Domine a tabela dos casos em que 90% dos candidatos escorregam na prova:','Confira a concordância conforme a construção:' ],
['acentuam-se as que NÃO terminam em A, E, O, EM, ENS','aplica-se a lista de terminações acentuadas; não basta inverter a regra das oxítonas (compare cantam, sem acento)'],
['Acentuam-se as que NÃO terminam em A, E, O, EM, ENS','Aplica-se a lista de terminações acentuadas; não basta inverter a regra das oxítonas (compare cantam, sem acento)'],
['Paroxítonas: todas EXCETO as terminadas em A, E, O, EM, ENS','Paroxítonas: conferir a lista de terminações acentuadas, sem usar a simples inversão das oxítonas'],
];
function walk(v:any):any {
 if(typeof v==='string') {
  for(const [a,b] of pairs)v=v.split(a).join(b);
  return v.replace(/\s*\([\d.]+ (?:mil )?tokens!?\)/g,'');
 }
 if(Array.isArray(v))return v.map(walk);
 if(v&&typeof v==='object')return Object.fromEntries(Object.entries(v).map(([k,x])=>[k,walk(x)]));
 return v;
}
for(let i=0;i<data.lessons.length;i++)if(selected.has(data.lessons[i].id))data.lessons[i]=walk(data.lessons[i]);
const lesson=(id:string)=>data.lessons.find((l:any)=>l.id===id);
const se=`### Diagnóstico das funções de se
A transitividade deve ser analisada junto com a estrutura e o sentido, não como fórmula automática. Compare: **Vendem-se casas** → casas são vendidas, com sujeito paciente plural; **Vende-se uma casa** → uma casa é vendida, com sujeito paciente singular; **Precisa-se de ajudantes** → indeterminação do sujeito, verbo no singular; **Ela se lavou** → ela lavou a si mesma, pronome reflexivo; **Os colegas se abraçaram** → abraçaram uns aos outros, leitura recíproca; **Ela se arrependeu** → o pronome integra o verbo pronominal. A análise de PA/IIS pressupõe excluir esses outros usos.

Na passiva sintética, o sujeito paciente pode vir antes ou depois do verbo. Não se conclui que todo termo sem preposição é sujeito nem que toda construção VTD + se é passiva. Nas questões, confira a paráfrase com ser + particípio e a referência do pronome. Fonte: Aulete, Pronomes pessoais e verbetes se/pronominal; Regência para as exceções de obedecer/desobedecer.`;
for(const id of ['por_10','por_14']) {
 const b=lesson(id).blocks[0],marker='<!-- REVISAO:SE -->';
 b.modoA=b.modoA.split(marker)[0]+marker+renderMarkdownToHtml(se);
 if(b.modoA_markdown)b.modoA_markdown=b.modoA_markdown.split(marker)[0]+marker+'\n'+se;
}
const alert='Menos é invariável: menos pessoas. Alerta, como advérbio, fica invariável: os vigias ficaram alerta. O Aulete também registra o adjetivo de dois gêneros alerta, com plural alertas (policiais alertas). Há tradição normativa mais restritiva; identifique a função e a orientação adotada, sem declarar invariável a palavra em qualquer emprego.';
const b=lesson('por_10').blocks[1];
b.modoA=b.modoA.replace(/<p>4\. <strong>Menos e Alerta:<\/strong>[\s\S]*?<\/p>/,renderMarkdownToHtml(alert));
if(b.modoA_markdown)b.modoA_markdown=b.modoA_markdown.replace(/^4\. \*\*Menos e Alerta:.*$/m,alert);
const punctuation=`### Critérios de pontuação: extensão, coordenação e sentido
A vírgula não é a transcrição de qualquer pausa da fala: sua função depende da sintaxe e da organização da informação. **O agente entregou o relatório** não recebe vírgula isolada entre sujeito e verbo nem entre verbo e objeto. **O agente, após a vistoria, entregou o relatório** tem uma intercalação delimitada por duas vírgulas; a regra de ligação entre os termos continua respeitada.

Em adjuntos adverbiais deslocados, a extensão e a clareza orientam o uso. A contagem de três palavras é um critério didático/editorial de alguns manuais, não uma definição universal de adjunto longo. Em **Hoje(,) a equipe retorna**, o adjunto curto pode vir com ou sem vírgula. Em **Durante a reunião extraordinária de ontem, a equipe apresentou o plano**, a expressão longa fica destacada.

Não é obrigatório pôr vírgula antes de toda conjunção **e** apenas porque os sujeitos mudam. Compare **Maria leu e João escreveu**, sem ambiguidade, e **A equipe convocou os moradores, e os supervisores organizaram a fila**, em que a vírgula evita ler os supervisores como segundo objeto de convocou. O valor adversativo, o polissíndeto e as intercalações exigem análise própria. Não se insere uma vírgula por simples encontro de duas palavras.

O **ponto e vírgula** organiza membros coordenados extensos, especialmente quando já contêm vírgulas: **Compareceram Ana, coordenadora da equipe; Paulo, supervisor; e Rita, secretária**. Também pode separar orações coordenadas com certa autonomia. Não substitui aleatoriamente uma vírgula que separaria sujeito e verbo.

Os **dois-pontos** anunciam explicação, enumeração ou fala: **Faltavam dois documentos: o formulário e a declaração**; **A coordenadora informou: “A reunião terminou.”** O **travessão** pode introduzir fala ou delimitar intercalações. **Parênteses** apresentam informação acessória. Trocar um par de vírgulas por travessões ou parênteses pode preservar a sintaxe e o conteúdo básico de um aposto, mas muda seu destaque discursivo; não se promete identidade de efeito expressivo.

As **aspas** podem marcar citação, palavra mencionada como palavra ou distanciamento irônico. O contexto decide: aspas não significam sempre ironia nem tornam uma afirmação comprovada. A função de citação exige fidelidade e identificação de autoria; os exemplos desta aula que não têm origem autenticada não devem ser tratados como transcrições de provas oficiais.

Em uma **oração adjetiva restritiva**, a informação delimita o referente; a **explicativa** acrescenta informação sobre o conjunto já identificado. Retirar vírgulas pode mudar essa delimitação. Dizer que uma propriedade define o grupo referido não autoriza concluir automaticamente a propriedade contrária para todos os que ficaram fora dele. Em **Os agentes que estudaram passaram**, o foco recai nesse grupo; não se afirma expressamente que todos os demais reprovaram.

O **ponto final** encerra período declarativo; a **interrogação** sinaliza pergunta direta (a indireta pode terminar com ponto); a **exclamação** acrescenta valor expressivo; as **reticências** indicam suspensão ou continuidade sugerida e dependem do contexto. Esses sinais alteram a organização e os efeitos de sentido, não apenas a duração da pausa.

Fontes: Manual do Senado, Vírgula, Vírgula antes da conjunção e, Ponto e vírgula e Aspas; Manual de Redação da Câmara, capítulos de pontuação e colocação pronominal. As recomendações editoriais de uma instituição devem ser distinguidas de proibições gramaticais gerais.`;
const p=lesson('por_17').blocks[1],marker='<!-- REVISAO:PONTUACAO -->';
// Substitui o resumo que repetia apenas proibições; conserva a questão e os cartões do bloco.
p.title='Bloco 17.2 — Emprego dos sinais e efeitos de sentido';
p.modoA_markdown=punctuation;p.modoA=renderMarkdownToHtml(punctuation);
p.modoB_markdown='- Vírgula: relações sintáticas e intercalações, não simples pausa.\n- Adjunto curto: vírgula frequentemente facultativa; extensão não se reduz a um número universal de palavras.\n- Antes de e: avaliar coordenação, ambiguidade e valor semântico.\n- Ponto e vírgula: coordenação e enumeração complexa.\n- Dois-pontos: anúncio de explicação, enumeração ou fala.\n- Aspas: citação, menção ou distanciamento; conferir contexto.\n- Travessões/parênteses: intercalação, com efeito expressivo próprio.\n- Restritiva/explicativa: mudança de delimitação do referente.';
p.modoB=renderMarkdownToHtml(p.modoB_markdown);
const coherence=lesson('por_7').blocks[2].questions[0];
coherence.q='(Questão de revisão — Coesão e coerência) Na leitura isolada dos períodos abaixo, sem informação contextual adicional, qual alternativa emprega um conectivo que cria contraste não motivado pelos fatos apresentados?';
coherence.comment='Gabarito: B, na leitura isolada proposta. Embora sinaliza concessão: algo ocorre apesar de uma expectativa contrária. Quintal rigorosamente limpo e ausência de focos são apresentados como fatos compatíveis, sem motivar o contraste. Isso não constitui proibição gramatical da frase: um contexto adicional poderia construir outra expectativa e justificar embora. A análise é discursiva, não a simples presença do conectivo.';
coherence.revision='20261031-coerencia-contexto';
const extra=[
[110,'Aulete — pronomes pessoais e reflexivos','https://www.aulete.com.br/gram/cap09-02-pronomes_pessoais',['por_10','por_14']],
[111,'Aulete — verbete alerta','https://www.aulete.com.br/alerta',['por_10']],
[112,'Câmara — Manual de Redação','https://bd.camara.leg.br/bd/bitstream/handle/bdcamara/5684/manual_redacao.pdf',['por_10','por_14','por_17']],
[113,'Senado — Vírgula','https://www12.senado.leg.br/manualdecomunicacao/estilos/virgula',['por_17']],
[114,'Senado — Vírgula antes da conjunção e','https://www12.senado.leg.br/manualdecomunicacao/estilos/virgula-antes-da-conjuncao-e',['por_17']],
[115,'Senado — Ponto e vírgula','https://www12.senado.leg.br/manualdecomunicacao/estilos/ponto-e-virgula',['por_17']],
[116,'Senado — Aspas','https://www12.senado.leg.br/manualdecomunicacao/estilos/aspas',['por_17']],
] as const;
for(const [num,title,url,ids] of extra){
 if(!data.sources.some((s:any)=>s.num===num))data.sources.push({num,folder:'9 - REFERÊNCIAS LINGUÍSTICAS',title,name:title,url,note:'Revisão pontual de 31/10/2026; ver REVISAO_PORTUGUES_PARCIAL.md.',status:'reference',revoked:false});
 for(const id of ids)if(!lesson(id).sources.includes(num))lesson(id).sources.push(num);
}
const json=JSON.stringify(data,null,2)+'\n';
for(const path of ['data/app_data.json','public/data/app_data.json'])fs.writeFileSync(path,json);
for(const path of ['data/app_data.js','public/data/app_data.js'])fs.writeFileSync(path,`window.APP_DATA = ${json.trimEnd()};\nwindow.LOCAL_APP_DATA = window.APP_DATA;\n`);
console.log('Sintaxe e pontuação: correções pontuais e revisão do bloco principal sincronizadas.');
