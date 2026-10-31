import fs from 'node:fs';
import {renderMarkdownToHtml} from '../src/utils/markdown';
const data=JSON.parse(fs.readFileSync('data/app_data.json','utf8'));
const l=data.lessons.find((x:any)=>x.id==='por_2');
const pairs=[['5 Estruturas Fixas','Estruturas e critérios de classificação'],['são apenas 5:','neste quadro didático, distinguem-se:'],['Tipo Textual (5)','Tipos no quadro adotado'],['Tipo Textual (Estrutura Interna — 5 Tipos)','Tipo Textual (Estrutura Interna — quadro didático)'],['estrutura teórica interna (5 tipos:','estrutura teórica interna (neste quadro:'],['Predomínio absoluto de verbos','Emprego frequente de verbos']];
function walk(v:any):any{
 if(typeof v==='string'){for(const [a,b] of pairs)v=v.split(a).join(b);return v;}
 if(Array.isArray(v))return v.map(walk);
 if(v&&typeof v==='object')return Object.fromEntries(Object.entries(v).map(([k,x])=>[k,walk(x)]));return v;
}
Object.assign(l,walk(l));
const text=`### Critérios de classificação e coexistência de sequências
Não existe um número universal de tipos independente da teoria adotada. O quadro desta aula distingue narração, descrição, exposição, argumentação e injunção. O CEALE/UFMG também apresenta sequências explicativas e dialogais. Essa diferença de recorte não autoriza classificar uma entrevista inteira como descrição apenas porque nela há adjetivos. Primeiro identifique o critério pedido pelo enunciado.

**Gênero** depende da prática comunicativa: finalidade, interlocutores, composição e circulação. **Suporte** é o meio de veiculação; um mesmo jornal pode publicar notícia e editorial. **Sequência** é a organização de um trecho; um gênero pode combinar várias. Predominância não significa exclusividade. Exposição tampouco garante neutralidade absoluta: seleção e organização das informações também orientam a leitura.

**Textos autorais para análise, sem dados reais de saúde:**

A — “O laboratório da escola abriu ontem. A sala tem duas janelas e mesas azuis.” Há relato de acontecimento seguido de caracterização. Só esse fragmento não determina inequivocamente se o gênero é notícia, relato pessoal ou relatório: faltam condições de circulação.

B — “A biblioteca deve abrir aos sábados, porque muitos estudantes trabalham durante a semana.” A conclusão defendida é a abertura aos sábados; a justificativa procura sustentá-la. A presença de informação sobre estudantes não elimina a organização argumentativa.

C — “Para consultar o acervo, apresente o cartão. O catálogo reúne os títulos por assunto.” A primeira frase orienta uma ação; a segunda explica a organização. Um aviso instrucional pode conter exposição. O modo verbal é uma pista, não uma classificação automática do gênero inteiro.

**Revisão ativa:** por que A não permite determinar o gênero com certeza? Porque as sequências são observáveis no fragmento, mas não estão dadas todas as condições sociais de produção. Qual argumento sustenta B? A dificuldade de acesso dos estudantes que trabalham. Qual mudança tornaria C predominantemente narrativa? Reorganizar os fatos como acontecimentos realizados em sequência temporal, em vez de instruir o leitor.

Referências: CEALE/UFMG, verbetes Gêneros e tipos textuais e Sequências textuais. A interpretação detalhada está na aula 1; a variação linguística, na aula 18.`;
const b=l.blocks[0],tag='<!-- AUDITORIA:TIPOLOGIAS -->';
b.modoA=b.modoA.split(tag)[0]+tag+renderMarkdownToHtml(text);
if(b.modoA_markdown)b.modoA_markdown=b.modoA_markdown.split(tag)[0]+tag+'\n'+text;
b.modoB=(b.modoB||'').split(tag)[0]+tag+renderMarkdownToHtml('Gênero, suporte e sequência são critérios distintos. O quadro de cinco categorias é didático; outros recortes incluem sequências dialogais. Predominância não é exclusividade. Justifique a classificação pelo texto e pelo contexto.');
for(const q of l.blocks.flatMap((b:any)=>b.questions||[])){
 q.q=q.q.replace(/^\(IBGP[^)]*\)/,'(Questão de estudo — origem não autenticada)');
}
for(const [num,title,slug] of [[117,'CEALE/UFMG — Gêneros e tipos textuais','generos-e-tipos-textuais'],[118,'CEALE/UFMG — Sequências textuais','sequencias-textuais']] as const){
 if(!data.sources.some((s:any)=>s.num===num))data.sources.push({num,title,name:title,folder:'9 - REFERÊNCIAS LINGUÍSTICAS',url:`https://ceale.fae.ufmg.br/glossarioceale/verbetes/${slug}`,note:'Consulta para por_2; não certifica cobertura integral.',status:'reference',revoked:false});
 if(!l.sources.includes(num))l.sources.push(num);
}
const json=JSON.stringify(data,null,2)+'\n';
for(const p of ['data/app_data.json','public/data/app_data.json'])fs.writeFileSync(p,json);
for(const p of ['data/app_data.js','public/data/app_data.js'])fs.writeFileSync(p,`window.APP_DATA = ${json.trimEnd()};\nwindow.LOCAL_APP_DATA = window.APP_DATA;\n`);
