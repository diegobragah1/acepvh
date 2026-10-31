import fs from 'node:fs';
import { renderMarkdownToHtml } from '../src/utils/markdown';
import { correctEditorialClaims } from '../src/utils/editorialCorrections';

const data=JSON.parse(fs.readFileSync('data/app_data.json','utf8'));
const ecUrl='https://legis.senado.leg.br/norma/44187742/publicacao/44190103';
const ec=fs.readFileSync('content/revisao/ec-140-2026.md','utf8');
const marker='<!-- EC140:2026 -->';
const source=(num:number,title:string,url:string,note:string)=>({num,folder:'8 - EDITAL E LEIS OFICIAIS',title,name:title,url,note,status:'official',revoked:false});
for(const entry of [
  source(99,'Emenda Constitucional 140/2026 — Senado Federal',ecUrl,'Publicada em 16/10/2026; arts. 1º a 14. Regime, contratação e aposentadoria de ACS/ACE.'),
  source(100,'PNAB — Portaria 2.436/2017 e anexo, publicação original','https://bvsms.saude.gov.br/bvs/saudelegis/gm/2017/prt2436_22_09_2017.html','Texto original de 21/09/2017; não é consolidação de alterações posteriores.'),
  source(101,'LC 390/2010 — texto articulado do SAPL','https://sapl.portovelho.ro.leg.br/ta/57/text','Plano de carreira da saúde; conferir versão e notas de alteração.'),
  source(102,'LC 391/2010 — texto articulado do SAPL','https://sapl.portovelho.ro.leg.br/ta/58/text','Organização de cargos e empregos municipais em geral; inclui anexos e histórico.'),
  source(103,'Decreto 14.565/2017 — LAI de Porto Velho','https://sapl.portovelho.ro.leg.br/norma/8889','Regulamentação municipal de acesso à informação; texto original e anexos.'),
  source(104,'Decreto 18.310/2022 — proteção de dados pessoais','https://sapl.portovelho.ro.leg.br/ta/10567/text','LGPD municipal; não substitui o decreto da LAI.'),
  source(105,'Lei Estadual 6.385/2026 — altera a LAI de Rondônia','https://sapl.al.ro.leg.br/norma/13830','Alterações dos arts. 21 a 24 da Lei 3.166, publicadas em 30/04/2026.'),
]) {const i=data.sources.findIndex((s:any)=>s.num===entry.num);if(i<0)data.sources.push(entry);else data.sources[i]=entry;}
Object.assign(data.sources.find((s:any)=>s.num===92),source(92,'Lei Orgânica de Porto Velho — texto articulado do SAPL','https://sapl.portovelho.ro.leg.br/ta/1639/text','Consolidação consultada em 31/10/2026. O PDF antigo não representa todas as emendas posteriores.'));
Object.assign(data.sources.find((s:any)=>s.num===93),source(93,'LC 385/2010 — texto articulado do SAPL','https://sapl.portovelho.ro.leg.br/ta/2/text','Regime jurídico municipal: usar versão consolidada, observando alterações e revogações.'));
for(const l of data.lessons) {
  if(['esp_1','esp_3','esp_4','esp_6','esp_7'].includes(l.id)) {
    if(!l.sources.includes(99))l.sources.push(99);
    for(const b of l.blocks) {
      for(const key of ['title','modoA','modoB','modoA_markdown','modoB_markdown']) if(typeof b[key]==='string') {
        b[key]=b[key].replace(/3 diretrizes/gi,'4 diretrizes').replace(/três diretrizes/gi,'quatro diretrizes')
          .split('até a EC nº 120/2022').join('com a atualização da EC nº 140/2026')
          .split('surto endêmico').join('surto epidêmico (Lei 11.350, art. 16), observada a emergência em saúde pública do art. 198, § 4º-A, da CF');
      }
    }
    // The same authoritative update is adjacent to the primary exposition, not a new block.
    const b=l.blocks[0];
    b.modoA=(b.modoA||renderMarkdownToHtml(b.modoA_markdown||'')).split(marker)[0]+marker+renderMarkdownToHtml(ec);
    if(b.modoA_markdown)b.modoA_markdown=b.modoA_markdown.split(marker)[0]+marker+'\n'+ec;
    const recap='Após a EC 140/2026: quatro diretrizes no art. 198; contratação e vínculo nos §§ 4º-A e 4º-B; aposentadoria permanente e transições com requisitos próprios. Fonte: EC 140/2026, arts. 1º–14.';
    b.modoB=(b.modoB||'').split(marker)[0]+marker+renderMarkdownToHtml(recap);
    if(b.modoB_markdown)b.modoB_markdown=b.modoB_markdown.split(marker)[0]+marker+'\n'+recap;
    function mapCurrent(v:any):any {
      if(typeof v==='string')return v.replace(/3 diretrizes/gi,'4 diretrizes').replace(/três diretrizes/gi,'quatro diretrizes');
      if(Array.isArray(v))return v.map(mapCurrent);
      if(v&&typeof v==='object')return Object.fromEntries(Object.entries(v).map(([k,x])=>[k,mapCurrent(x)]));
      return v;
    }
    l.mindMap=mapCurrent(l.mindMap);
    for(const block of l.blocks)for(const card of block.flashcards||[])if(/(?:3|três) diretrizes constitucionais/i.test(card.front||card.f||'')) {
      card.front=card.f='Quais são as quatro diretrizes do art. 198 da CF após a EC 140/2026?';
      card.back=card.b='I — descentralização com direção única em cada esfera; II — atendimento integral, prioridade preventiva sem prejuízo assistencial; III — participação da comunidade; IV — atuação obrigatória e permanente de ACS e ACE, essencial ao SUS e exclusiva de Estado.';
    }
    if(l.id==='esp_1') {
      const node=l.mindMap?.branches?.[1]?.nodes?.[2];
      if(node)node.detail='I — descentralização; II — atendimento integral; III — participação da comunidade; IV — atuação obrigatória e permanente de ACS e ACE, essencial ao SUS e exclusiva de Estado (EC 140/2026).';
    }
  }
  if(l.id==='leg_3')for(const n of [101,102])if(!l.sources.includes(n))l.sources.push(n);
  if(l.id==='esp_5') {
    if(!l.sources.includes(100))l.sources.push(100);
    const b=l.blocks[1],tag='<!-- PNAB:fonte:2017 -->';
    const normative=fs.readFileSync('content/fontes-oficiais/pnab-2017.md','utf8');
    b.modoA=(b.modoA||'').split(tag)[0]+tag+renderMarkdownToHtml(normative);
    const notice='A Portaria 2.436 é de 21/09/2017. Seu anexo original está no bloco seguinte. As eMulti decorrem de norma posterior (Portaria 635/2023), não do texto original de 2017.';
    const first=l.blocks[0],tag2='<!-- PNAB:versao -->';
    first.modoA=(first.modoA||'').split(tag2)[0]+tag2+renderMarkdownToHtml(notice);
  }
}
// Refresh the corrected primary section rather than retaining a pre-EC 140 explanation.
const agents=data.lessons.find((l:any)=>l.id==='esp_3');
const chapters=fs.readFileSync('content/revisao/esp_3.md','utf8').split('<!-- BLOCO -->').map(s=>s.trim());
agents.blocks[1].modoA_markdown=chapters[1];agents.blocks[1].modoA=renderMarkdownToHtml(chapters[1]);
agents.blocks[1].modoB_markdown='ACE: art. 7º; ACS: art. 6º. Formação inicial e curso técnico são diferentes. Vínculo: considerar o art. 198, § 4º-B, após a EC 140/2026, e sua disciplina de regularização.';
agents.blocks[1].modoB=renderMarkdownToHtml(agents.blocks[1].modoB_markdown);
data.lessons.find((l:any)=>l.id==='esp_4').blocks[3].questions[2].comment='Gabarito: D. A centralização executiva exclusiva contraria a descentralização do art. 198, I. A, B e C correspondem aos incisos I, II e III. Após a EC 140/2026 existe também o inciso IV, relativo à atuação obrigatória e permanente de ACS e ACE. Não há alternativa E nesta questão.';
const lai=data.lessons.find((l:any)=>l.id==='leg_7');
const laiScope=fs.readFileSync('content/revisao/leg_7_esferas.md','utf8');
const laiSummary='Distinguir LAI federal, Lei RO 3.166/2013 (alterada pela Lei 6.385/2026) e Decreto PVH 14.565/2017. Decreto 18.310/2022 trata de LGPD. Recurso municipal: autoridade superior, Prefeito, CGM e Comissão Mista, nas condições dos arts. 21–24. Classificação municipal: consultar arts. 26–30, sem presumir competência por simetria.';
lai.blocks[1].title='Bloco 7.2 — LAI estadual e municipal: normas, prazos, recursos e sigilo';
lai.blocks[1].modoA_markdown=laiScope;lai.blocks[1].modoA=renderMarkdownToHtml(laiScope);
lai.blocks[1].modoB_markdown=laiSummary;lai.blocks[1].modoB=renderMarkdownToHtml(laiSummary);
lai.blocks[1].questions[0].comment='Gabarito: A. Publicidade é regra, com proteção das informações pessoais nas condições legais. No Município, conferir o Decreto 14.565/2017; o Decreto 18.310/2022 disciplina LGPD. Isso não autoriza qualquer ACE a classificar informação ultrassecreta: o art. 30 do decreto municipal enumera competências.';
const legal=lai.blocks[3],laiMarker='<!-- LAI:esferas:fontes -->';
legal.modoA_markdown=(legal.modoA_markdown||'').split(laiMarker)[0].split('#### 2. Estrutura Articulada Integral')[0]
  +laiMarker+'\n'+laiScope+'\n\n'+['lai-pvh-14565-2017','lai-ro-3166-2013','lai-ro-6385-2026'].map(key=>fs.readFileSync(`content/fontes-oficiais/${key}.md`,'utf8')).join('\n\n');
legal.modoA=renderMarkdownToHtml(legal.modoA_markdown);
const overview=lai.blocks[2];
for(const key of ['modoA','modoB','modoA_markdown','modoB_markdown'])if(overview[key])overview[key]=overview[key].split('Decreto Municipal de Porto Velho nº 18.310/2022').join('Decreto Municipal de Porto Velho nº 14.565/2017 (LAI); Decreto 18.310/2022 (LGPD)');
if(lai.mindMap?.branches?.[3]) {
  lai.mindMap.branches[3].title='4. LAI estadual e regulamentação municipal';
  lai.mindMap.branches[3].nodes=[{label:'Normas e versões',detail:laiSummary,badge:'LAI ≠ LGPD'}];
}
for(const n of [103,104,105])if(!lai.sources.includes(n))lai.sources.push(n);
for(const l of data.lessons)for(const b of l.blocks) {
  for(const key of ['modoA','modoB','modoA_markdown','modoB_markdown'])if(typeof b[key]==='string')b[key]=correctEditorialClaims(b[key]);
  if(l.cat==='por')for(const card of b.flashcards||[])for(const key of ['f','front','b','back'])if(card[key])card[key]=correctEditorialClaims(card[key]);
}
for(const target of ['data/app_data.json','public/data/app_data.json'])fs.writeFileSync(target,JSON.stringify(data,null,2)+'\n');
const fallback=`window.APP_DATA = ${JSON.stringify(data,null,2)};\nwindow.LOCAL_APP_DATA = window.APP_DATA;\n`;
for(const target of ['data/app_data.js','public/data/app_data.js'])fs.writeFileSync(target,fallback);
console.log('Atualização constitucional, texto PNAB e fontes primárias sincronizados.');
