import type { DeepeningEntry } from './types';
const portal = { title: 'IMPA/OBMEP — módulos de matemática', url: 'https://portaldaobmep.impa.br/index.php/modulo/index', section: 'Conjuntos, lógica, aritmética, geometria e função afim; problemas e soluções deste complemento são autorais.' };
export const matematica: DeepeningEntry[] = [
  {
    id: 'rlm_1', title: 'Escolha entre MMC e MDC e conferência dos cálculos',
    theory: `## Conjuntos e operações sem atalhos perigosos
Naturais, inteiros, racionais e reais formam conjuntos encaixados. Um número racional pode ser escrito como razão de inteiros com denominador não nulo. Sua expansão decimal é finita ou periódica. Um decimal com infinitas casas não é automaticamente irracional: 0,333… = 1/3. O número 1 não é primo; primo tem exatamente dois divisores naturais positivos distintos.

Na prioridade das operações, potências precedem multiplicações e divisões; estas são executadas na ordem em que aparecem quando têm a mesma prioridade. Assim, 18 ÷ 3 × 2 = 6 × 2 = 12. Em −3², a potência atua antes do sinal externo e o resultado é −9; em (−3)², a base é negativa e o resultado é 9. O módulo mede distância até zero: |−5| = 5, e não −5.

## Exemplo 1: formar kits iguais
Uma unidade tem 84 fichas azuis e 126 verdes e deseja formar o maior número de kits idênticos, sem sobra. O número de kits deve dividir simultaneamente 84 e 126. Portanto, procuramos o MDC, não o MMC.
- 84 = 2² × 3 × 7; 126 = 2 × 3² × 7.
- Fatores comuns com menores expoentes: 2 × 3 × 7 = 42 kits.
- Cada kit terá 84/42 = 2 fichas azuis e 126/42 = 3 verdes.

## Exemplo 2: reencontro de ciclos
Duas rotinas repetem-se a cada 12 e 18 dias e ocorreram juntas hoje. O próximo reencontro deve ser um múltiplo positivo de ambos: MMC(12,18) = 36. Dividir 36 por 12 e por 18 confirma um número inteiro de ciclos em cada rotina.

O vocabulário ajuda, mas não basta: “maior” no enunciado não significa sempre MDC. Identifique se a incógnita **divide as quantidades** ou **é múltiplo dos períodos**. Para frações, lembre que o denominador determina partes do todo; somar 1/2 e 1/3 exige denominador comum, resultando em 5/6, e não em 2/5.`,
    summary: 'MDC divide quantidades para repartir sem sobra; MMC encontra múltiplos comuns de ciclos. Primo tem dois divisores positivos. Decimal periódico é racional. Parênteses alteram a base da potência.',
    questions: [
      {q:'[Autoral] Qual é o maior número de kits idênticos, sem sobra, usando 84 fichas azuis e 126 verdes?',options:['21','42','84','252'],ans:1,comment:'MDC(84,126)=42. São 2 fichas azuis e 3 verdes por kit. 21 divide ambos, mas não é o máximo; 84 não divide 126; 252 é um múltiplo, não quantidade possível de kits.'},
      {q:'[Autoral] Rotinas de 12 e 18 dias coincidem hoje. Quando voltarão a coincidir pela primeira vez?',options:['6 dias','18 dias','30 dias','36 dias'],ans:3,comment:'MMC(12,18)=36. Seis é o MDC; 18 não é múltiplo de 12; somar períodos não encontra necessariamente um reencontro.'},
    ], flashcards:[['O que distingue um problema de MMC de um de MDC?','No MMC, o resultado é múltiplo das quantidades; no MDC, divide-as.'],['0,333… é irracional?','Não. É uma dízima periódica igual a 1/3.']], references:[{...portal,section:'Números naturais: operações, divisibilidade, números primos, MMC e MDC.'}],
  },
  {
    id:'rlm_2', title:'Regra de três composta com modelo e verificação',
    theory:`## Antes da conta, estabeleça o modelo
Uma relação é diretamente proporcional quando multiplicar uma grandeza por um fator multiplica a outra pelo mesmo fator. É inversamente proporcional quando o produto das duas permanece constante no modelo considerado. Duas grandezas aumentarem juntas não basta para provar proporcionalidade: tarifa com valor fixo, por exemplo, não é proporcional à distância total.

## Exemplo completo de trabalho de equipe
Quatro agentes, trabalhando 6 horas por dia durante 3 dias, concluem 360 visitas fictícias. Suponha produtividade constante, visitas equivalentes e ausência de deslocamentos adicionais. Quantas visitas seis agentes fariam em 5 horas por dia durante 4 dias?
- O esforço inicial corresponde a 4 × 6 × 3 = 72 agente-horas.
- A produtividade do modelo é 360/72 = 5 visitas por agente-hora.
- A nova capacidade é 6 × 5 × 4 = 120 agente-horas.
- Logo, 120 × 5 = 600 visitas.

Também se pode usar 360 × (6/4) × (5/6) × (4/3) = 600. Cada razão deve comparar a mesma grandeza, mantendo as outras controladas. Se a pergunta fosse o tempo para executar a mesma quantidade de visitas, aumentar o número de agentes reduziria o tempo nas hipóteses do modelo.

## Porcentagem e pontos percentuais
Uma taxa que passa de 20% para 25% aumenta 5 pontos percentuais. O crescimento relativo é (25−20)/20 = 25%. São duas medidas diferentes. Em uma redução de R$ 250 para R$ 200, o desconto é 50/250 = 20%, tomando o preço inicial como base. Para recuperar R$ 250 partindo de R$ 200, exige-se aumento de 50/200 = 25%.

## Limites e conferência
No trabalho real, produtividade varia e deslocamento consome tempo. O problema matemático deve enunciar suas hipóteses; não transforme o exemplo em meta operacional da equipe. Para conferir, calcule a taxa unitária e recomponha o total. Nas divisões proporcionais, confira soma e razão; em porcentagem, escreva explicitamente qual é a base de 100%.`,
    summary:'Grandezas proporcionais obedecem a um modelo. Taxa unitária ajuda na regra de três composta. De 20% para 25%: +5 pontos percentuais e +25% relativo. A base muda em desconto e recomposição.',
    questions:[
      {q:'[Autoral] No modelo do texto, 4 agentes × 6 h × 3 dias produzem 360 visitas. Qual produção corresponde a 6 agentes × 5 h × 4 dias?',options:['300','480','600','720'],ans:2,comment:'360/(4×6×3)=5 por agente-hora; 6×5×4×5=600. O resultado depende de produtividade constante e tarefas equivalentes, conforme as hipóteses.'},
      {q:'[Autoral] Uma taxa passa de 20% para 25%. Qual é a variação relativa?',options:['5%','20%','25%','45%'],ans:2,comment:'A diferença é 5 pontos percentuais; em relação à base inicial, 5/20=25%. Confundir pontos percentuais com variação relativa levaria a 5%.'},
    ],flashcards:[['De 20% para 25% significa quanto?','Aumento de 5 pontos percentuais ou de 25% em relação à taxa inicial.'],['Por que explicitar produtividade constante?','Porque a regra de três pressupõe que a taxa do modelo se mantém nas condições comparadas.']],references:[{title:'IMPA/OBMEP — Razões e proporções',url:'https://portaldaobmep.impa.br/index.php/modulo/ver?modulo=57&tipo=7',section:'Números direta e inversamente proporcionais; regra de três simples e composta.'}],
  },
  {
    id:'rlm_3',title:'Análise dimensional, escala e grandezas que não se convertem do mesmo jeito',
    theory:`## A dimensão determina o fator
Comprimento mede uma dimensão; área, duas; volume, três. Se 1 m = 100 cm, então 1 m² = 10.000 cm² e 1 m³ = 1.000.000 cm³. Multiplicar por 100 em toda conversão entre metros e centímetros é um erro: o fator precisa ser elevado à potência da dimensão.

## Exemplo resolvido com unidades mistas
Um reservatório retangular ideal tem medidas internas de 1,2 m, 80 cm e 50 cm. Primeiro uniformize: 80 cm = 0,8 m; 50 cm = 0,5 m. O volume é 1,2 × 0,8 × 0,5 = 0,48 m³. Como 1 m³ = 1.000 L, cabem 480 L. Se estiver preenchido até metade da altura, com seção constante, haverá 240 L. Não use dimensões externas nem pressuponha preenchimento total sem indicação.

## Escala explicada
Em uma planta de escala 1:2.000, 3 cm representam 3 × 2.000 = 6.000 cm, ou 60 m. A razão relaciona comprimentos na mesma unidade. Se a figura sofre ampliação linear de fator 2, sua área multiplica-se por 4, não por 2. A escala de área é o quadrado da escala linear.

## Tempo, massa e capacidade
1,5 h = 1 h + 0,5 × 60 min = 1 h 30 min; 1 h 20 min = 1 + 20/60 h, aproximadamente 1,333 h. As casas decimais de hora não representam minutos diretamente. Em massa, 0,75 kg = 750 g. Já capacidade e massa não se confundem: converter litros de uma substância em quilogramas exige sua densidade e as condições pertinentes. Não é verdade que todo litro pesa 1 kg.

## Conferência pelas unidades
Ao multiplicar m × m × m, o resultado é m³. Ao dividir visitas por horas, obtém-se uma taxa de visitas/hora. Essa verificação detecta fórmulas escolhidas por aparência. Para calcular área, é preciso uma relação geométrica adequada; para calcular capacidade, precisa-se de volume interno útil. O exemplo de reservatório ensina matemática e não estabelece dosagem de produto.`,
    summary:'Comprimento, área e volume usam fatores com potências diferentes. Uniformize unidades. Escala linear não é escala de área. Hora decimal exige fator 60; litro para massa depende de densidade.',
    questions:[
      {q:'[Autoral] Qual é a capacidade de um reservatório ideal de 1,2 m × 80 cm × 50 cm?',options:['48 L','480 L','4.800 L','480.000 L'],ans:1,comment:'1,2×0,8×0,5=0,48 m³=480 L. As demais respostas resultam de erros de conversão ou de fator decimal.'},
      {q:'[Autoral] Em escala 1:2.000, 3 cm no mapa representam:',options:['6 m','60 m','600 m','6.000 m'],ans:1,comment:'3×2.000=6.000 cm. Dividindo por 100, são 60 m. É preciso manter a mesma unidade antes da conversão final.'},
    ],flashcards:[['Quanto vale 1 m² em cm²?','10.000 cm²: (100 cm)².'],['Pode converter qualquer litro em 1 kg?','Não. A relação entre volume e massa depende da densidade.']],references:[{...portal,section:'Geometria: medidas de comprimento, área, volume e semelhança; exemplos dimensionais autorais.'}],
  },
  {
    id:'rlm_4',title:'Da situação verbal à equação, ao sistema e à função',
    theory:`## Escolha uma incógnita com significado
Equação expressa uma igualdade que precisa ser satisfeita. Em “o dobro de um número mais 6 é 30”, defina x como o número e escreva 2x + 6 = 30. Subtraia 6 dos dois membros, obtendo 2x = 24; divida ambos por 2, chegando a x = 12. A conferência usa a frase original: 2 × 12 + 6 = 30.

Não é necessário pensar que um termo “passa e troca de sinal”. O que preserva a igualdade é efetuar operações equivalentes nos dois membros. Essa compreensão previne erros quando há parênteses, frações ou sinais negativos.

## Sistema resolvido por substituição
Uma equipe percorreu 20 trechos, alguns a pé e outros de bicicleta. O modelo atribui 1 km a cada trecho a pé e 3 km a cada trecho de bicicleta, totalizando 44 km. Se x é o número de trechos a pé e y o de bicicleta:
- x + y = 20;
- x + 3y = 44;
- subtraindo a primeira da segunda: 2y = 24, portanto y = 12;
- logo, x = 8.
Conferência: 8 + 12 = 20 e 8 + 36 = 44. Uma solução que satisfaz apenas uma equação não resolve o sistema.

## Função afim e proporcionalidade
Um serviço fictício custa C(x) = 15 + 4x. O valor 15 é uma parcela fixa; 4 é o acréscimo por unidade de x. Para x = 5, C = 35. Essa função é afim e não é diretamente proporcional, pois C(0)=15. A função proporcional teria forma C(x)=4x, passando pela origem.

## Médias e grupos de tamanhos diferentes
Se duas equipes têm médias 6 e 9, mas contam com 10 e 20 pessoas, a média conjunta é (10×6 + 20×9)/30 = 8. Fazer (6+9)/2 = 7,5 ignora os tamanhos. Declare sempre o que cada peso representa e confira se a média obtida permanece entre os extremos quando os pesos são positivos.`,
    summary:'Defina variáveis e unidades. Operações equivalentes preservam a igualdade. Confira o sistema nas duas equações. Parcela fixa diferencia função afim de proporcionalidade. Média conjunta pondera os tamanhos dos grupos.',
    questions:[
      {q:'[Autoral] No sistema x+y=20 e x+3y=44, qual é o valor de y?',options:['8','10','12','24'],ans:2,comment:'Subtrair as equações elimina x: 2y=24 e y=12. Vinte e quatro é o valor de 2y, não de y; 8 corresponde a x.'},
      {q:'[Autoral] Dez pessoas têm média 6 e vinte têm média 9. Qual a média das trinta pessoas?',options:['7','7,5','8','15'],ans:2,comment:'A soma total é 10×6 + 20×9=240; dividir por 30 resulta em 8. Média simples entre 6 e 9 ignoraria os tamanhos dos grupos.'},
    ],flashcards:[['Por que C(x)=15+4x não é diretamente proporcional?','Há parcela fixa: C(0)=15, e a razão C(x)/x não é constante.'],['Como conferir um sistema?','Substitua os valores encontrados em todas as equações originais.']],references:[{...portal,section:'Equações e inequações do primeiro grau; plano cartesiano e sistemas; função afim; estatística.'}],
  },
  {
    id:'rlm_5',title:'Condicional, contrapositiva e negação com contraexemplos',
    theory:`## Proposição e valor lógico
Na lógica clássica usada nesses exercícios, uma proposição declarativa recebe verdadeiro ou falso em uma interpretação. Perguntas e ordens não recebem o mesmo tratamento. Sentenças abertas, como “x é maior que 5”, dependem de atribuir um valor a x ou de quantificá-lo. O número de linhas de uma tabela com n proposições atômicas distintas é 2 elevado a n.

## Uma condicional não é uma bicondicional
Considere p: “o relatório foi aprovado” e q: “o relatório foi arquivado”. A afirmação p → q é falsa somente quando p é verdadeira e q é falsa. Arquivar um relatório que não foi aprovado não contradiz, por si, essa regra: a frase não afirmou que aprovação era a única razão para arquivamento.

| p | q | p → q |
| --- | --- | --- |
| V | V | V |
| V | F | F |
| F | V | V |
| F | F | V |

A contrapositiva ¬q → ¬p é equivalente à condicional. A recíproca q → p e a inversa ¬p → ¬q não são equivalentes a ela em geral. No exemplo, “não arquivado implica não aprovado” preserva a regra lógica; “arquivado implica aprovado” acrescentaria uma condição que não foi fornecida.

## Negação passo a passo
Negar “se p, então q” significa afirmar a ocorrência que a torna falsa: p e não q. Não é “se não p, então não q”. Em De Morgan, negar “p e q” resulta em “não p ou não q”; negar “p ou q” resulta em “não p e não q”, considerando o ou inclusivo.

## Quantificadores
A negação de “todos os imóveis foram visitados” é “existe pelo menos um imóvel que não foi visitado”, e não “nenhum foi visitado”. Para refutar uma universal, basta um contraexemplo. Na frase “algum imóvel foi visitado”, algum significa pelo menos um no universo considerado, sem exigir que todos os demais não tenham sido visitados. Definir o universo evita inferências indevidas.`,
    summary:'p→q só é falsa em V/F. Contrapositiva é equivalente; recíproca não. Negação: p e não q. Negar todos exige algum não; negar algum exige nenhum.',
    questions:[
      {q:'[Autoral] Qual nega “Se o documento foi aprovado, então foi arquivado”?',options:['O documento não foi aprovado.', 'Se foi arquivado, foi aprovado.', 'O documento foi aprovado e não foi arquivado.', 'O documento não foi aprovado e foi arquivado.'],ans:2,comment:'A negação da condicional é o caso p verdadeiro e q falso. A primeira apenas nega o antecedente; a segunda é recíproca; a quarta não torna a condicional falsa.'},
      {q:'[Autoral] A negação de “todos os imóveis foram visitados” é:',options:['Nenhum imóvel foi visitado.', 'Ao menos um imóvel não foi visitado.', 'Todos os imóveis foram revisitados.', 'Exatamente um imóvel foi visitado.'],ans:1,comment:'Um contraexemplo basta para negar a universal. Não se conclui que nenhum foi visitado nem se determina uma quantidade exata.'},
    ],flashcards:[['Qual é a negação de p→q?','p ∧ ¬q.'],['Recíproca e contrapositiva são a mesma coisa?','Não. A contrapositiva ¬q→¬p é equivalente a p→q; a recíproca q→p não é em geral.']],references:[{...portal,section:'Introdução à lógica matemática; definições, validade e técnicas de prova.'}],
  },
  {
    id:'rlm_6',title:'Validade, diagramas de conjuntos e problemas de associação',
    theory:`## Verdade das frases e validade do argumento
Um argumento é válido quando não existe interpretação em que todas as premissas sejam verdadeiras e a conclusão falsa. Validade é uma relação entre premissas e conclusão, não um selo de veracidade factual. “Todo A é B; x é A; logo x é B” tem forma válida, mesmo se alguém escolher classes que tornem uma premissa falsa no mundo real.

## Duas inferências e duas armadilhas
Se p implica q e p ocorre, conclui-se q: modus ponens. Se p implica q e q não ocorre, conclui-se não p: modus tollens. Já concluir p a partir de q é afirmar o consequente. Concluir não q a partir de não p é negar o antecedente. Para detectar o erro, procure outra razão que permita q sem p.

“Todo agente da equipe A fez o curso; Bruno fez o curso; logo Bruno é da equipe A” é inválido: pessoas de outras equipes podem ter feito o mesmo curso. Um diagrama com Bruno fora do círculo A, mas dentro do conjunto dos formados, refuta a inferência.

## União e interseção sem duplicar pessoas
Em um grupo de 50 pessoas, 28 estudam Português, 25 estudam Matemática e 10 estudam ambas. A união contém 28 + 25 − 10 = 43 pessoas; 7 não estudam nenhuma. A interseção é subtraída porque foi contada duas vezes. “Somente Português” corresponde a 28 − 10 = 18.

Pertinência relaciona elemento e conjunto: x pertence a A. Inclusão relaciona conjuntos: A está contido em B. Um conjunto com 3 elementos distintos tem 2³=8 subconjuntos, incluindo vazio e o próprio conjunto.

## Associação e sequências
Em problemas de associação, use tabela e registre tanto possibilidades quanto proibições. Uma conclusão precisa respeitar todas as pistas, não só uma. Em sequências finitas, vários padrões podem ser inventados; a solução de prova depende do padrão simples compatível com o comando e as alternativas. Não apresente uma regra escolhida como se fosse a única continuação matematicamente possível.`,
    summary:'Validade exclui premissas verdadeiras com conclusão falsa. Modus ponens/tollens são válidos; afirmar consequente não. União subtrai a interseção. Pertinência é elemento/conjunto; inclusão é conjunto/conjunto.',
    questions:[
      {q:'[Autoral] Em 50 pessoas, 28 estudam P, 25 estudam M e 10 ambas. Quantas não estudam nenhuma?',options:['0','7','10','17'],ans:1,comment:'A união tem 28+25−10=43. Restam 50−43=7. Somar sem descontar a interseção contaria as mesmas pessoas duas vezes.'},
      {q:'[Autoral] “Todo A é B; João é B; logo João é A” é:',options:['Sempre válido.', 'Inválido, pois B pode conter elementos fora de A.', 'Uma negação de todos.', 'Uma identidade entre A e B.'],ans:1,comment:'A inclusão A⊆B não implica B⊆A. João pode pertencer a B sem pertencer a A; esse contraexemplo mostra a invalidade.'},
    ],flashcards:[['Como provar que um argumento é inválido?','Exibindo premissas verdadeiras e conclusão falsa em um contraexemplo.'],['Qual a fórmula de dois conjuntos finitos?','n(A∪B)=n(A)+n(B)−n(A∩B).']],references:[{...portal,section:'Conjuntos e introdução à lógica matemática; exemplos autorais de diagramas e argumentos.'}],
  },
  {
    id:'rlm_7',title:'Contagem por decisões: ordem, repetição e restrições',
    theory:`## O que torna duas escolhas diferentes?
Antes de usar fórmula, defina um resultado do experimento. Escolher coordenador e relator entre 5 pessoas difere de escolher uma comissão de 2 pessoas: no primeiro problema, os cargos distinguem as posições; no segundo, a ordem da dupla não importa. A escolha de fórmula decorre dessa definição.

## Exemplo 1: cargos distintos
Há 5 escolhas para coordenador. Como uma pessoa não pode ocupar os dois cargos no modelo, restam 4 para relator. Total: 5 × 4 = 20. Esse é um arranjo de 5 elementos tomados 2 a 2. A dupla Ana/Bruno com cargos invertidos constitui outro resultado.

## Exemplo 2: comissão sem cargos
As mesmas 20 escolhas ordenadas contam cada dupla duas vezes. Dividindo por 2! = 2, obtemos 10 comissões. Na forma geral, C(n,k)=n!/[k!(n−k)!]. Não se divide por k! quando a ordem identifica resultados diferentes.

## Exemplo 3: códigos com repetição
Um código de 3 dígitos usa 0 a 9 e admite repetição e zero inicial. Há 10³ = 1.000 códigos. Se fosse um número de três algarismos, o primeiro não poderia ser zero: seriam 9 × 10 × 10 = 900 números. Código e número não são sempre modelos idênticos.

## Restrição e complemento
Quantos códigos de 3 dígitos têm pelo menos um zero? Conte todos (1.000) e subtraia os sem zero (9³ = 729): 271. A expressão “pelo menos um” pode incluir dois ou três zeros; tentar contar apenas uma posição com zero subestima ou duplica casos.

Em permutações de letras repetidas, trocas entre letras idênticas não criam palavras novas. “CASA” tem 4!/2! = 12 anagramas distintos. O divisor corrige a repetição dos dois As. Os anagramas podem não ter significado lexical. Por fim, fatorial de zero é 1; essa convenção preserva as fórmulas nos casos de escolha de todos ou de nenhum elemento.`,
    summary:'Defina o resultado. Cargos: ordem importa. Comissão: ordem não importa. Repetição e zero inicial mudam o espaço. Pelo menos um pode ser resolvido por complemento. Letras iguais exigem correção da contagem.',
    questions:[
      {q:'[Autoral] Entre 5 pessoas, quantas duplas sem cargos distintos podem ser formadas?',options:['5','10','20','25'],ans:1,comment:'C(5,2)=5×4/2=10. Vinte contaria cada dupla em duas ordens; 25 permitiria escolhas com repetição e posições.'},
      {q:'[Autoral] Quantos códigos de três dígitos, admitindo repetição e zero inicial, contêm ao menos um zero?',options:['27','100','271','300'],ans:2,comment:'Todos: 10³=1.000. Sem zero: 9³=729. Complemento: 1.000−729=271. Contar apenas “um zero em uma posição” trata mal as repetições.'},
    ],flashcards:[['Qual pergunta separa arranjo de combinação?','Trocar a ordem produz um resultado diferente?'],['Como contar “ao menos um zero” em três dígitos?', 'Conte todos e subtraia os que não têm zero.']],references:[{...portal,section:'Análise combinatória: princípio fundamental da contagem, permutações e combinações.'}],
  },
  {
    id:'rlm_8',title:'Probabilidade condicional, dependência e calendário',
    theory:`## O espaço amostral vem antes da fração
Casos favoráveis divididos por casos possíveis funciona diretamente quando os resultados elementares são equiprováveis. Ao lançar dois dados honestos, há 36 pares ordenados equiprováveis; as somas 2 a 12 não são equiprováveis. A soma 2 tem um par, (1,1); a soma 7 tem seis. Usar 1/11 para cada soma dá um modelo errado.

## Exemplo de retiradas sem reposição
Uma urna contém 3 fichas azuis e 2 verdes. A chance de a primeira ser azul é 3/5. Se a primeira foi azul e não houve reposição, restam 2 azuis entre 4 fichas; a chance condicional da segunda ser azul é 2/4. Assim, P(duas azuis)=3/5 × 2/4 = 3/10.

Com reposição e mistura adequada, a composição é restaurada; a segunda chance volta a 3/5 e o produto seria 9/25. O enunciado precisa dizer se há reposição. Dependência não é sinônimo de exclusão: eventos mutuamente exclusivos não ocorrem juntos; independência significa que conhecer um evento não altera a probabilidade do outro.

## União e condicionamento
Em um dado honesto, A={2,4,6} e B={4,5,6}. A união é {2,4,5,6}, com chance 4/6. Somar 3/6 + 3/6 sem descontar {4,6} duplica resultados. Se soubermos que saiu um número par, o espaço relevante se reduz a {2,4,6}; a chance de ser maior que 3 passa a 2/3.

## Raciocínio sequencial com datas
Os dias da semana repetem-se a cada 7 dias. Se hoje é segunda-feira, daqui a 30 dias será quarta-feira, pois 30 deixa resto 2 na divisão por 7. O enunciado “daqui a” não conta hoje como primeiro dia transcorrido. Em intervalos com datas inclusivas, a contagem pode ser outra.

Uma probabilidade calculada dentro de um modelo não é garantia individual. Em questões, declare as hipóteses, confira o espaço e revise se a informação nova alterou o denominador.`,
    summary:'Não presuma equiprobabilidade de somas. Sem reposição, a composição muda. Condicionar restringe o espaço. União desconta interseção. Datas usam restos por 7, com atenção à contagem inclusiva.',
    questions:[
      {q:'[Autoral] Com 3 fichas azuis e 2 verdes, qual a chance de duas azuis em duas retiradas sem reposição?',options:['3/10','9/25','2/5','1/2'],ans:0,comment:'3/5×2/4=3/10. 9/25 seria o cálculo com reposição e independência sob as hipóteses adequadas.'},
      {q:'[Autoral] Se hoje é segunda-feira, qual dia será daqui a 30 dias?',options:['Segunda-feira.','Terça-feira.','Quarta-feira.','Quinta-feira.'],ans:2,comment:'30=4×7+2. Após quatro semanas permanece segunda; mais dois dias chega-se à quarta. Não se inclui hoje como um dia já transcorrido.'},
    ],flashcards:[['Por que a chance da segunda retirada muda sem reposição?','A primeira retirada altera o total de fichas e a composição da urna.'],['As somas de dois dados são equiprováveis?','Não. Os pares ordenados são equiprováveis; cada soma reúne quantidade diferente de pares.']],references:[{title:'IMPA/OBMEP — Introdução à probabilidade',url:'https://portaldaobmep.impa.br/index.php/modulo/ver?modulo=46&tipo=7',section:'Espaço amostral e cálculo de probabilidades; situações autorais com reposição e condicionamento.'}],
  },
];
