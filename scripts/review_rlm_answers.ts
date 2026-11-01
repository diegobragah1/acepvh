/** Independent editorial working, in original question order. Not an origin/banca certificate. */
import fs from 'node:fs';
const working: Record<string,string[][]> = {
  rlm_1: [
    ['12−9+4=7; natural e primo.','Distributividade: 18(10+5)=180+90.','3+4−1=6.'],
    ['MMC(12,15,20)=60.','MDC(144,180)=36 equipes.','MDC(180,150,120)=30; 6+5+4=15 pacotes.','180=2²·3²·5; 18 divisores. 0,45 periódico=5/11; 18+5=23.','5·28−4·26=36.','(2·7+5·9+3·8)/10=8,3.','f(0)=450; 450/18=25 dias.','(83−24−14)/5=9.'],
    ['MDC(144,108)=36; 4+3=7 pacotes. A redação sobre kits idênticos foi esclarecida.','360=2³·3²·5; expoentes somam 6 e divisores são 4·3·2=24.','MMC(40,45,60)=360 min; 7h+6h=13h.'],
  ],
  rlm_2: [
    ['600·(8/6)·(6/5)·(5/4)=1.200.'],
    ['2,5·2·1,2=6 m³=6.000 L; massa hipotética=12 g.','600·(8/5)·(5/6)·(6/4)=1.200.','1.200·(8/5)·(5/6)·(6/8)=1.200.','3.500 L; 0,4h=24 min.'],
    ['Pesos inversos 1/3 e 1/4 dão razão 4:3; 140·4/7=80.','600·8·6·5/(6·5·4)=1.200.','1,30·0,80=1,04; aumento de 4%.'],
    ['1/4+1/12=1/3 tanque/h; tempo 3h.','240·7/(2+3+7)=140.'],
    ['200·0,8·1,2=192.','120·3/5=72.'],
  ],
  rlm_3: [
    ['0,4·60=24; 3h24min.','2,5·1,2·1,5·0,8=3,6 m³; 3,6·2 g=7.200 mg.','4·500·4,5 g=9.000 g=9 kg; pressupõe resma de 500 folhas.','2.400+850+150=3.400 m.'],
    ['2(15+8)=46 m; 15·8=120 m².','3,14·3²=28,26 m²; corrigido símbolo π corrompido.'],
    ['2,5·2·1,2·1.000=6.000 L.','3·0,5²·1,6·1.000=1.200 L; corrigido símbolo π corrompido.'],
    ['3,14·0,4²·1·1.000=502,4 L.','250·400/10.000=10 ha.','12·(3−1)+1=25 pessoas.','4·(3−1)+1=9 bolas.'],
    ['2·1,5·0,8·1.000=2.400 L.','2+30/60=2,5h.'],
  ],
  rlm_4: [
    ['Restam (2/3)(3/5)=2/5 do lote; 36·5/2=90.','c+m=28 e 4c+2m=88: c=16, m=12; diferença 4.','1.800/45=40 min.','40+18d=100+6d; d=5.'],
    ['4·25+35=135; média=27. R+C=135, R−C=85: C=25.'],
    ['7·25−6·24=31.','(3·7+5·9+2·8)/10=8,2.','(4·30+4·35+2·45)/10=35.'],
    ['(6+8+10)/3=8.','(6+2·9)/3=8.'],
  ],
  rlm_5: [
    ['p→q falso exige p verdadeiro e q falso.'],
    ['¬(p→q)≡p∧¬q.','p→q≡¬q→¬p.','Contrapositiva: sem risco implica sem mato alto, no modelo lógico dado.','¬(∀x P(x)∨q)≡∃x ¬P(x)∧¬q.'],
    ['p→q falso: p=V,q=F. q∨r verdadeiro exige r=V.','2⁴=16 linhas; contradição sempre falsa.','(p∧q)→p não admite antecedente verdadeiro e consequente falso.'],
    ['Em p→q, p é suficiente e q é necessária. A conclusão é formal e não valida o protocolo epidemiológico.','2⁵=32 linhas.'],
    ['Negação p∧¬q; contrapositiva ¬q→¬p.'],
    ['P1 ativa P2; P3 e P4 excluem esquecimento. Resta não fez ou, se fez, perdeu: ¬fez∨perdeu. Origem CEBRASPE não foi autenticada.','100−(52+35−17)=30.','¬ponte e (¬igarapé∨ponte) dão ¬igarapé; modus tollens dá ¬chuva.','500=62·8+4; 4ª letra U; 2⁴=16 subconjuntos.'],
  ],
  rlm_6: [
    ['ACE⊆conhecedores e existe servidor ACE: existe servidor conhecedor.','Contrapositiva de v→¬l é l→¬v.','¬∀x P(x)=∃x ¬P(x); ¬(p→q)=p∧¬q.'],
    ['p→q→r e ¬r implicam ¬q e ¬p.','¬(∀P∨¬∃R)=∃¬P∧∃R.'],
    ['União=85; interseção=60+50−85=25.'],
    ['Nenhuma=100−(50+40−15)=25; apenas dengue=50−15=35.','MDC(180,120)=60 itens; 3+2=5 pacotes. A redação sobre kits foi esclarecida.'],
    ['2⁶=64; não vazios=63.','SEMUSAPVH tem 9 posições; 2026=225·9+1, letra S.','Bruno usa moto e não pode estar em Jaci; Ana está em Extrema. Logo Bruno em União e Carlos em Jaci.','Se culpado R: P falso, Q falso, R falso, S verdadeiro. Nos outros três casos há mais de uma verdade.'],
  ],
  rlm_7: [
    ['C(8,3)=56.'],
    ['Definição de espaço amostral. Origem SELECON não foi autenticada.','C(7,3)=35.','A(8,2)=56; C(8,2)=28.','(18+12−5)/40=25/40.'],
    ['A(8,2)=56; C(8,3)=56.','DENGUE: 6!/2!=360.','(6/10)(5/9)=1/3.'],
    ['C(6,3)·C(4,2)=20·6=120.','8·7·6=336.','Bloco João/Maria: 4!·2!=48.','2 escolhas de vogal inicial; 4! restantes; 2·24=48. O título repetição é inadequado: letras distintas.'],
  ],
  rlm_8: [
    ['7+5−2=10 resultados em 30: 1/3. Gabarito corrigido para B.','(6/10)(5/9)=1/3.','1−0,6·0,7=0,58.','Pares (2,6),(3,5),(4,4),(5,3),(6,2): 5/36, pressupondo lançamentos independentes.'],
    ['Universo condicionado: 15+5=20; 15/20=75%.','6!/2!=360.'],
    ['12·(4−1)+1=37.','No pior caso, 12 verdes; a 13ª garante outra cor.'],
    ['100≡2 mod 7; domingo+2=terça. Data tratada como hipótese, sem validar cronograma de concurso.','14+19−1=32.','600/25+1=25 posições, incluindo os dois extremos.'],
  ],
};
// New exercises are appended in the same order as review_probability.ts.
// Keep the exact-count guards below: additions must have their own working.
working.rlm_8[0].push(
 'Pesos da roleta informados: primeira região=1/2; contar regiões seria indevido.',
 'Exatamente um: (7+5−2·2)/30=8/30=4/15.',
 'Azul depois verde: (6/10)(4/9)=4/15; quatro verdes permanecem após retirar azul.',
 'Exclusão com probabilidades positivas: P(A∩B)=0, mas P(A)P(B)>0; dependentes.',
);
working.rlm_8[1].push(
 'Ordens azul-verde e verde-azul: 3/10+3/10=3/5; enumeração de fichas identificadas confirma.',
 'Condição inversa: qualificados entre campo=15/25=60%.',
);
working.rlm_8[2].push(
 'Máximo sem dez iguais=8+9+9=26; a 27ª garante a meta. Estoque impede nove A.',
 'Máximo sem duas de cada cor=10+8+1=19; vinte garantem. Com vinte, nenhuma das outras cores pode ficar abaixo de duas.',
);
working.rlm_8[3].push(
 '2000 é divisível por 400; 2100 é divisível por 100 e não por 400. Só 2000 é bissexto.',
 'Máximos diurnos 4,7,10,13: atinge onze no quarto dia; teto(7/3)+1=4.',
 'Circuito: 600/25=24 pontos distintos; a posição 600 coincide com zero.',
 '610/25=24,4 não é inteiro: pontas incluídas e intervalos todos de 25 m são incompatíveis.',
 'Regra explícita: próximo incremento nove; 17+9=26.',
);
const data=JSON.parse(fs.readFileSync('data/app_data.json','utf8'));
const lines=['# Conferência matemática das questões principais de RLM','',
  'Data: 31/10/2026. Conferência dos enunciados, alternativas e resposta assinalada das questões principais, com memória de cálculo/inferência abaixo. Não autentica a atribuição a bancas, não certifica os comentários completos, os cartões nem toda a teoria. Contextos clínicos, técnicos e operacionais são hipóteses matemáticas, não instruções de campo.','',
  '| Aula | Bloco | Questão | Alternativa após correção | Memória de conferência / ressalva |','| --- | ---: | ---: | --- | --- |'];
let total=0;
for(const [id,blocks] of Object.entries(working)) {
  const l=data.lessons.find((l:any)=>l.id===id);
  if(blocks.length!==l.blocks.length) throw new Error(`Blocos mudaram: ${id}`);
  blocks.forEach((solutions,bi)=>{
    if(solutions.length!==l.blocks[bi].questions.length)throw new Error(`Questões mudaram: ${id}/${bi}`);
    solutions.forEach((solution,qi)=>{
      const q=l.blocks[bi].questions[qi];total++;
      lines.push(`| ${id} | ${bi+1} | ${qi+1} | ${String.fromCharCode(65+q.ans)} | ${solution.replace(/\|/g,'/')} |`);
    });
  });
}
lines.splice(4,0,`Total examinado: ${total} questões principais. A conferência encontrou um gabarito errado (rlm_8/1/1), símbolos corrompidos e enunciados a esclarecer. Os complementos anteriores não entram nessa contagem.`,'');
fs.writeFileSync('docs/REVISAO_QUESTOES_RLM.md',lines.join('\n')+'\n');
console.log(`${total} memórias de conferência registradas.`);
