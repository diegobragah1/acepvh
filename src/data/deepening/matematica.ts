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

O vocabulário ajuda, mas não basta: “maior” no enunciado não significa sempre MDC. Identifique se a incógnita **divide as quantidades** ou **é múltiplo dos períodos**. Para frações, lembre que o denominador determina partes do todo; somar 1/2 e 1/3 exige denominador comum, resultando em 5/6, e não em 2/5.

## Quantidade de divisores naturais e relação fundamental entre MMC e MDC
Fatorado um número natural $N = p_1^{a} \cdot p_2^{b} \cdot p_3^{c}$ em fatores primos, a quantidade total de divisores naturais positivos de $N$ é obtida somando $1$ a cada expoente e multiplicando os resultados: $D(N) = (a+1)(b+1)(c+1)$. Por exemplo, $72 = 2^3 \cdot 3^2$ possui $(3+1)(2+1) = 12$ divisores positivos. Além disso, para quaisquer dois inteiros positivos $a$ e $b$, vale sempre a identidade $\text{MMC}(a,b) \times \text{MDC}(a,b) = a \times b$.`,
    summary: `MDC divide quantidades para repartir sem sobra; MMC encontra múltiplos comuns de ciclos. Primo tem dois divisores positivos. Decimal periódico é racional. Parênteses alteram a base da potência.

| Ferramenta Aritmética | Fórmulas e Regras Práticas | Gatilho no Enunciado da Prova | Pegadinha Clássica |
| --- | --- | --- | --- |
| **MDC (Máximo Divisor Comum)** | Produto dos fatores primos **comuns** com os **menores** expoentes. | Dividir em partes iguais de **maior tamanho possível**, sem sobra (kits, equipes, lotes). | Confundir o **tamanho de cada kit** ($\text{MDC}$) com o **total de kits** ($\text{Soma} \div \text{MDC}$). |
| **MMC (Mínimo Múltiplo Comum)** | Produto de todos os fatores primos (comuns e não comuns) com os **maiores** expoentes. | Eventos periódicos que coincidem hoje e pergunta-se **quando voltarão a coincidir**. | Se a questão pede o dia do mês ou da semana, some o $\text{MMC}$ à data inicial. |
| **Relação Fundamental e Divisores** | $\text{MMC}(a,b) \cdot \text{MDC}(a,b) = a \cdot b$; nº de divisores de $p^a q^b = (a+1)(b+1)$. | Dados $\text{MMC}$, $\text{MDC}$ e um dos números, achar o outro imediatamente. | Esquecer que o número **1 não é primo** nem composto, e que **2 é o único primo par**. |
| **Fração Geratriz e Potências** | $0,aaaa\dots = \frac{a}{9}$; $0,abab\dots = \frac{ab}{99}$. $(-3)^2 = +9$ × $-3^2 = -9$. | Somar dízimas periódicas ou calcular expressões com módulo e potência. | Achar que dízima periódica é número irracional (toda dízima periódica pertence a $\mathbb{Q}$). |`,
    questions: [
      {q:'[Autoral] Qual é o maior número de kits idênticos, sem sobra, usando 84 fichas azuis e 126 verdes?',options:['21','42','84','252'],ans:1,comment:'MDC(84,126)=42. São 2 fichas azuis e 3 verdes por kit. 21 divide ambos, mas não é o máximo; 84 não divide 126; 252 é um múltiplo, não quantidade possível de kits.'},
      {q:'[Autoral] Rotinas de 12 e 18 dias coincidem hoje. Quando voltarão a coincidir pela primeira vez?',options:['6 dias','18 dias','30 dias','36 dias'],ans:3,comment:'MMC(12,18)=36. Seis é o MDC; 18 não é múltiplo de 12; somar períodos não encontra necessariamente um reencontro.'},
      {q:'[Autoral] Uma coordenação de endemias recebeu 120 tubos de coleta e 180 etiquetas de identificação e deseja distribuí-los em pacotes com a mesma quantidade total de itens do mesmo tipo, de modo que cada pacote tenha a maior capacidade possível sem misturar tubos com etiquetas no mesmo pacote e sem sobra. Quantos pacotes serão formados ao todo?',options:['5 pacotes ao todo (2 pacotes de tubos e 3 pacotes de etiquetas, com 60 unidades em cada pacote).', '60 pacotes ao todo.', '300 pacotes ao todo.', '12 pacotes ao todo.'],ans:0,comment:'O maior divisor comum entre 120 e 180 é MDC(120, 180) = 60 unidades por pacote. Assim, formam-se 120/60 = 2 pacotes de tubos e 180/60 = 3 pacotes de etiquetas, totalizando 2 + 3 = 5 pacotes.'},
      {q:'[Autoral] Sabendo que o número natural $N = 2^3 \\times 3^1 \\times 5^2 = 600$ representa a quantidade de imóveis de um estrato, quantos divisores naturais positivos possui o número $600$?',options:['24 divisores positivos.', '6 divisores positivos.', '10 divisores positivos.', '30 divisores positivos.'],ans:0,comment:'Somando 1 a cada expoente da decomposição em fatores primos (3, 1 e 2) e multiplicando os resultados, temos: (3 + 1) × (1 + 1) × (2 + 1) = 4 × 2 × 3 = 24 divisores naturais positivos.'},
    ],
    flashcards:[
      ['O que distingue um problema de MMC de um de MDC?','No MMC, o resultado é múltiplo dos períodos (encontro futuro de ciclos); no MDC, divide as quantidades em partes iguais sem sobra.'],
      ['0,333… é irracional?','Não. É uma dízima periódica igual a 1/3, portanto um número racional (Q).'],
      ['Como calcular rapidamente a quantidade de divisores positivos de um número natural fatorado?', 'Decomponha em fatores primos, some 1 a cada expoente e multiplique os resultados: (a+1)(b+1)(c+1).'],
    ],
    references:[{...portal,section:'Números naturais: operações, divisibilidade, números primos, MMC e MDC.'}],
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
    summary:`Grandezas proporcionais obedecem a um modelo. Taxa unitária ajuda na regra de três composta. De 20% para 25%: +5 pontos percentuais e +25% relativo. A base muda em desconto e recomposição.

| Modelo Proporcional / Percentual | Equação / Método Rápido | Exemplo Resolvido | Armadilha Comum |
| --- | --- | --- | --- |
| **Divisão Diretamente Proporcional** | $\frac{A}{p_1} = \frac{B}{p_2} = k \implies p_1 k + p_2 k = \text{Total}$ | Dividir 300 imóveis diretamente a 2 e 3: $2k+3k=300 \implies k=60 \implies 120\text{ e }180$. | Esquecer de multiplicar a constante $k$ pelo peso pedido na pergunta. |
| **Divisão Inversamente Proporcional** | Proporcional aos inversos $\frac{1}{p_1}$ e $\frac{1}{p_2}$. | Dividir 100 kits inversamente a 2 e 3 ($\text{MMC}=6 \to$ pesos $3$ e $2$): $5k=100 \implies 60\text{ e }40$. | Quem tem o **menor** número no critério inverso (ex.: menos faltas) recebe a **maior** parte. |
| **Regra de Três Composta (Causas × Efeito)** | $\frac{\text{Produção}_1}{\text{Agentes}_1 \cdot \text{Dias}_1 \cdot \text{Horas}_1} = \frac{\text{Produção}_2}{\text{Agentes}_2 \cdot \text{Dias}_2 \cdot \text{Horas}_2}$ | Isolar o **produto/serviço executado** no numerador e os **fatores de esforço** no denominador evita errar setas. | Se houver grau de **dificuldade**, ele entra junto com a Produção (no numerador). |
| **Variações Percentuais Sucessivas** | Fator acumulado $= (1 \pm i_1) \times (1 \pm i_2)$ | Aumento de $20\%$ seguido de queda de $20\%$: $1,20 \times 0,80 = 0,96$ (**queda líquida de $4\%$**). | Achar que $+20\%$ seguido de $-20\%$ volta exatamente aos $100\%$ iniciais. |`,
    questions:[
      {q:'[Autoral] No modelo do texto, 4 agentes × 6 h × 3 dias produzem 360 visitas. Qual produção corresponde a 6 agentes × 5 h × 4 dias?',options:['300','480','600','720'],ans:2,comment:'360/(4×6×3)=5 por agente-hora; 6×5×4×5=600. O resultado depende de produtividade constante e tarefas equivalentes, conforme as hipóteses.'},
      {q:'[Autoral] Uma taxa passa de 20% para 25%. Qual é a variação relativa?',options:['5%','20%','25%','45%'],ans:2,comment:'A diferença é 5 pontos percentuais; em relação à base inicial, 5/20=25%. Confundir pontos percentuais com variação relativa levaria a 5%.'},
      {q:'[Autoral] O número de focos registrados em um distrito subiu 20% do 1º para o 2º bimestre e, após um mutirão de limpeza, caiu 25% do 2º para o 3º bimestre. Em relação ao 1º bimestre, a quantidade de focos no 3º bimestre apresentou:',options:['Redução acumulada de 10%.', 'Redução acumulada de 5%.', 'Aumento acumulado de 5%.', 'Estabilidade exata (0% de variação).'],ans:0,comment:'Multiplicando os fatores de variação: 1,20 × 0,75 = 0,90, o que corresponde a 90% do valor inicial, isto é, uma redução acumulada de 10%.'},
      {q:'[Autoral] Um lote de 220 armadilhas será dividido entre duas equipes de modo inversamente proporcional ao número de veículos avariados de cada uma (2 e 3 veículos, respectivamente). Quantas armadilhas receberá a equipe que teve MENOS veículos avariados?',options:['132 armadilhas.', '88 armadilhas.', '110 armadilhas.', '150 armadilhas.'],ans:0,comment:'Divisão inversamente proporcional a 2 e 3 equivale a divisão diretamente proporcional a 1/2 e 1/3 (ou 3/6 e 2/6, pesos 3 e 2). Assim, 3k + 2k = 220 → 5k = 220 → k = 44. A equipe com menos avarias (2) recebe 3 × 44 = 132 armadilhas.'},
    ],
    flashcards:[
      ['De 20% para 25% significa quanto?','Aumento de 5 pontos percentuais ou de 25% em relação à taxa inicial (5/20 = 0,25).'],
      ['Por que explicitar produtividade constante?','Porque a regra de três pressupõe que a taxa unitária do modelo se mantém nas condições comparadas.'],
      ['Qual o resultado de um aumento de 10% seguido de um desconto de 10% sobre um valor?', '1,10 × 0,90 = 0,99, ou seja, uma redução líquida de 1% em relação ao valor inicial.'],
    ],
    references:[{title:'IMPA/OBMEP — Razões e proporções',url:'https://portaldaobmep.impa.br/index.php/modulo/ver?modulo=57&tipo=7',section:'Números direta e inversamente proporcionais; regra de três simples e composta.'}],
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
    summary:`Comprimento, área e volume usam fatores com potências diferentes. Uniformize unidades. Escala linear não é escala de área. Hora decimal exige fator 60; litro para massa depende de densidade.

| Grandeza / Conversão no Campo do ACE | Equivalência Exata | Passo a Passo Prático | Erro Clássico de Prova |
| --- | --- | --- | --- |
| **Pontes Volume $\leftrightarrow$ Capacidade** | **$1\text{ m}^3 = 1.000\text{ L}$**; **$1\text{ dm}^3 = 1\text{ L}$**; **$1\text{ cm}^3 = 1\text{ mL}$**. | Converta as dimensões da caixa-d'água para **metros**, multiplique ($C \times L \times A$) e multiplique por **1.000** para obter litros. | Multiplicar metros por centímetros sem converter antes para a mesma unidade. |
| **Volume de Reservatório Cilíndrico (Tonel)** | $V = \pi \cdot r^2 \cdot h$ (onde $r = \text{diâmetro} \div 2$). | Se diâmetro $= 1\text{ m}$, então $r = 0,5\text{ m}$ (e $r^2 = 0,25\text{ m}^2$). | Usar o diâmetro inteiro no lugar do raio $r$, quadruplicando erroneamente o volume. |
| **Massa (t $\to$ kg $\to$ g $\to$ mg)** | $1\text{ t} = 1.000\text{ kg}$; $1\text{ kg} = 1.000\text{ g}$; $1\text{ g} = 1.000\text{ mg}$. | Cada degrau principal multiplica ou divide por $1.000$. | Esquecer que $2\text{ g} = 2.000\text{ mg}$ ao calcular concentração por litro. |
| **Tempo Decimal $\leftrightarrow$ Sexagesimal** | $0,1\text{ h} = 6\text{ min}$; $0,25\text{ h} = 15\text{ min}$; $0,5\text{ h} = 30\text{ min}$; $0,75\text{ h} = 45\text{ min}$. | Multiplique a parte decimal da hora por **60** para achar os minutos. | Ler $2,4\text{ horas}$ como *"2 horas e 40 minutos"* (o correto é $2\text{ h } + 0,4 \times 60 = \mathbf{2\text{ h } 24\text{ min}}$). |`,
    questions:[
      {q:'[Autoral] Qual é a capacidade de um reservatório ideal de 1,2 m × 80 cm × 50 cm?',options:['48 L','480 L','4.800 L','480.000 L'],ans:1,comment:'1,2×0,8×0,5=0,48 m³=480 L. As demais respostas resultam de erros de conversão ou de fator decimal.'},
      {q:'[Autoral] Em escala 1:2.000, 3 cm no mapa representam:',options:['6 m','60 m','600 m','6.000 m'],ans:1,comment:'3×2.000=6.000 cm. Dividindo por 100, são 60 m. É preciso manter a mesma unidade antes da conversão final.'},
      {q:'[Autoral] Uma equipe de campo registrou que o deslocamento fluvial e a vistoria em uma comunidade ribeirinha duraram exatas 3,4 horas. Convertendo esse tempo para horas e minutos, obtém-se:',options:['3 horas e 24 minutos.', '3 horas e 40 minutos.', '3 horas e 04 minutos.', '340 minutos.'],ans:0,comment:'A parte inteira corresponde a 3 horas; a parte decimal (0,4 hora) deve ser multiplicada por 60 minutos: 0,4 × 60 = 24 minutos. Logo, 3,4 h = 3 horas e 24 minutos.'},
      {q:'[Autoral] Um reservatório cilíndrico vertical possui diâmetro interno de 2 metros e altura útil de 1,5 metro ($\pi = 3,14$). Qual é a capacidade total desse reservatório em litros?',options:['4.710 litros.', '9.420 litros.', '18.840 litros.', '471 litros.'],ans:0,comment:'Como o diâmetro é 2 m, o raio é r = 1 m. O volume do cilindro é V = π × r² × h = 3,14 × 1² × 1,5 = 4,71 m³. Multiplicando por 1.000 L/m³, obtêm-se 4.710 litros.'},
    ],
    flashcards:[
      ['Quanto vale 1 m² em cm² e 1 m³ em litros?','1 m² = 10.000 cm²; 1 m³ = 1.000 litros (e 1 dm³ = 1 litro; 1 cm³ = 1 mL).'],
      ['Pode converter qualquer litro em 1 kg?','Não. A relação entre volume/capacidade e massa depende da densidade da substância (1 L ≈ 1 kg vale para água pura nas condições padrão).'],
      ['Como converter 2,75 horas em horas e minutos?', 'Multiplique a parte decimal por 60: 0,75 × 60 = 45 minutos → 2 horas e 45 minutos.'],
    ],
    references:[{...portal,section:'Geometria: medidas de comprimento, área, volume e semelhança; exemplos dimensionais autorais.'}],
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
    summary:`Defina variáveis e unidades. Operações equivalentes preservam a igualdade. Confira o sistema nas duas equações. Parcela fixa diferencia função afim de proporcionalidade. Média conjunta pondera os tamanhos dos grupos.

| Tópico Algébrico | Fórmula / Estrutura | Aplicação Rápida | Cuidado na Prova |
| --- | --- | --- | --- |
| **Tradução Verbal para Equação** | *"A terça parte de $x$ excede 4 em 10"* $\implies \frac{x}{3} - 4 = 10$. | Cuidado com parênteses: *"o dobro de $(x+3)$"* é $2(x+3) = 2x+6$, e não $2x+3$. | Releia o comando para ver se pede $x$, o sucessor $x+1$ ou a soma. |
| **Sistema Linear $2 \times 2$** | $\begin{cases} x + y = T \\ a x + b y = S \end{cases}$ | Método da adição/subtração elimina uma variável rapidamente. | Confira o par $(x,y)$ nas **duas** equações do enunciado. |
| **Função do 1º Grau (Afim)** | $f(x) = a x + b$ ($a =$ taxa de variação; $b =$ valor inicial/fixo). | Raiz ou zero da função: $f(x)=0 \implies x = -b/a$. Se $a>0$, é crescente; se $a<0$, decrescente. | Só é linear/proporcional se $b = 0$. |
| **Média Simples × Média Ponderada** | $\bar{x} = \frac{\sum x_i}{n}$ × $\bar{x}_p = \frac{p_1 x_1 + p_2 x_2 + \dots}{p_1 + p_2 + \dots}$ | Na média ponderada, divide-se pela **soma dos pesos** ($p_1+p_2+\dots$), e não pela quantidade de parcelas. | No concurso ACE (Português peso 2, RLM peso 1, Gerais peso 1, Legislação peso 2, Específicos peso 3), a nota final usa média ponderada/pontos por peso. |`,
    questions:[
      {q:'[Autoral] No sistema x+y=20 e x+3y=44, qual é o valor de y?',options:['8','10','12','24'],ans:2,comment:'Subtrair as equações elimina x: 2y=24 e y=12. Vinte e quatro é o valor de 2y, não de y; 8 corresponde a x.'},
      {q:'[Autoral] Dez pessoas têm média 6 e vinte têm média 9. Qual a média das trinta pessoas?',options:['7','7,5','8','15'],ans:2,comment:'A soma total é 10×6 + 20×9=240; dividir por 30 resulta em 8. Média simples entre 6 e 9 ignoraria os tamanhos dos grupos.'},
      {q:'[Autoral] Em um mutirão, foram vistoriados 50 imóveis entre residências (cada uma com 2 caixas-d’água) e pequenos comércios (cada um com 5 caixas-d’água), totalizando 136 caixas-d’água inspecionadas. Quantas residências foram vistoriadas?',options:['38 residências.', '12 residências.', '25 residências.', '40 residências.'],ans:0,comment:'Sejam R as residências e C os comércios: R + C = 50 (logo C = 50 − R) e 2R + 5C = 136. Substituindo: 2R + 5(50 − R) = 136 → 2R + 250 − 5R = 136 → 3R = 114 → R = 38 residências (e C = 12 comércios).'},
      {q:'[Autoral] Um candidato obteve nota 8,0 em uma prova de peso 2; nota 7,0 em uma prova de peso 3; e nota 9,0 em uma prova de peso 5. Qual foi a sua média aritmética ponderada nessas três avaliações?',options:['8,2.', '8,0.', '7,5.', '9,0.'],ans:0,comment:'Multiplicando cada nota pelo respectivo peso e dividindo pela soma dos pesos (2 + 3 + 5 = 10): [(8,0 × 2) + (7,0 × 3) + (9,0 × 5)] / 10 = (16 + 21 + 45) / 10 = 82 / 10 = 8,2.'},
    ],
    flashcards:[
      ['Por que C(x)=15+4x não é diretamente proporcional?','Há parcela fixa: C(0)=15, e a razão C(x)/x não permanece constante.'],
      ['Como conferir um sistema de equações?','Substitua os valores encontrados para x e y em todas as equações originais.'],
      ['Qual o denominador correto no cálculo da média aritmética ponderada?', 'A soma de todos os pesos (p1 + p2 + ... + pn), e nunca o número de notas somadas.'],
    ],
    references:[{...portal,section:'Equações e inequações do primeiro grau; plano cartesiano e sistemas; função afim; estatística.'}],
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
    summary:`p→q só é falsa em V/F. Contrapositiva é equivalente; recíproca não. Negação: p e não q. Negar todos exige algum não; negar algum exige nenhum.

| Operação Lógica | Proposição Original | Equivalência ou Negação Exata | Mnemonico Rápido de Prova |
| --- | --- | --- | --- |
| **Negação da Conjunção (De Morgan)** | $\neg(p \land q)$ — *"Não é verdade que (P e Q)"* | $\neg p \lor \neg q$ — *"Não P **ou** não Q"* | Nega tudo e troca **E** por **OU**. |
| **Negação da Disjunção (De Morgan)** | $\neg(p \lor q)$ — *"Não é verdade que (P ou Q)"* | $\neg p \land \neg q$ — *"Não P **e** não Q"* | Nega tudo e troca **OU** por **E**. |
| **Negação da Condicional** | $\neg(p \to q)$ — *"Não é verdade que (Se P, então Q)"* | $p \land \neg q$ — *"P **e** não Q"* | **MANÉ**: **Ma**ntém a primeira **e** **Ne**ga a segunda (tira o *Se... então*). |
| **Equivalências da Condicional ($p \to q$)** | *"Se chove, então a calha enche."* | 1) **Contrapositiva**: $\neg q \to \neg p$ (*Se não enche, não chove*); 2) **Disjuntiva**: $\neg p \lor q$ (*Não chove ou a calha enche*). | **Inverte e nega** as duas (mantendo o *Se... então*) OU **Ne**ga a 1ª **ou** **Ma**ntém a 2ª (**NEYMAR**). |
| **Negação de Quantificadores** | **Todo A é B** ($\forall$) × **Algum A é B** ($\exists$) × **Nenhum A é B** | Neg. de **Todo** = **Algum/Pelo menos um... não é** (**PEA + NÃO**); Neg. de **Algum** = **Nenhum é**; Neg. de **Nenhum** = **Algum é**. | Nunca negue *"Todo A é B"* com *"Nenhum A é B"*! |`,
    questions:[
      {q:'[Autoral] Qual nega “Se o documento foi aprovado, então foi arquivado”?',options:['O documento não foi aprovado.', 'Se foi arquivado, foi aprovado.', 'O documento foi aprovado e não foi arquivado.', 'O documento não foi aprovado e foi arquivado.'],ans:2,comment:'A negação da condicional é o caso p verdadeiro e q falso. A primeira apenas nega o antecedente; a segunda é recíproca; a quarta não torna a condicional falsa.'},
      {q:'[Autoral] A negação de “todos os imóveis foram visitados” é:',options:['Nenhum imóvel foi visitado.', 'Ao menos um imóvel não foi visitado.', 'Todos os imóveis foram revisitados.', 'Exatamente um imóvel foi visitado.'],ans:1,comment:'Um contraexemplo basta para negar a universal. Não se conclui que nenhum foi visitado nem se determina uma quantidade exata.'},
      {q:'[Autoral] Uma proposição logicamente equivalente à condicional “Se o depósito está vedado, então não há larvas” é:',options:['Se há larvas, então o depósito não está vedado.', 'Se o depósito não está vedado, então há larvas.', 'O depósito está vedado e há larvas.', 'Se não há larvas, então o depósito está vedado.'],ans:0,comment:'Pela equivalência contrapositiva de p → q (equivalente a ¬q → ¬p), invertem-se e negam-se ambos os termos: negar “não há larvas” produz “há larvas”, e negar “o depósito está vedado” produz “o depósito não está vedado”.'},
      {q:'[Autoral] De acordo com as Leis de De Morgan, a negação lógica da proposição composta “O agente coletou a amostra ou o supervisor assinou o boletim” é:',options:['O agente não coletou a amostra e o supervisor não assinou o boletim.', 'O agente não coletou a amostra ou o supervisor não assinou o boletim.', 'Se o agente coletou a amostra, então o supervisor assinou o boletim.', 'O agente coletou a amostra e o supervisor assinou o boletim.'],ans:0,comment:'Para negar uma disjunção inclusiva (p ∨ q), negam-se ambas as proposições simples e substitui-se o conectivo “ou” pelo conectivo “e”: ¬p ∧ ¬q.'},
    ],
    flashcards:[
      ['Qual é a negação de p→q?','p ∧ ¬q (mantém a primeira proposição, troca o conectivo por “e”, e nega a segunda).'],
      ['Recíproca e contrapositiva são a mesma coisa?','Não. A contrapositiva (¬q→¬p) é equivalente a p→q; a recíproca (q→p) não é equivalente.'],
      ['Quais são as duas equivalências clássicas da condicional p → q?', '1) Contrapositiva: ¬q → ¬p (Se não Q, então não P); 2) Disjunção equivalente: ¬p ∨ q (Não P ou Q).'],
    ],
    references:[{...portal,section:'Introdução à lógica matemática; definições, validade e técnicas de prova.'}],
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
    summary:`Validade exclui premissas verdadeiras com conclusão falsa. Modus ponens/tollens são válidos; afirmar consequente não. União subtrai a interseção. Pertinência é elemento/conjunto; inclusão é conjunto/conjunto.

| Regra de Inferência / Conjunto | Estrutura Formal | Conclusão Válida / Fórmula | Armadilha / Falácia |
| --- | --- | --- | --- |
| **Modus Ponens (Afirmação do Antecedente)** | Premissa 1: $p \to q$; Premissa 2: $p$. | Logo, **$q$**. | Confundir com a falácia da afirmação do consequente ($p \to q$ e $q$ **não** garante $p$). |
| **Modus Tollens (Negação do Consequente)** | Premissa 1: $p \to q$; Premissa 2: $\neg q$. | Logo, **$\neg p$**. | Confundir com a falácia da negação do antecedente ($p \to q$ e $\neg p$ **não** garante $\neg q$). |
| **Silogismo Disjuntivo** | Premissa 1: $p \lor q$; Premissa 2: $\neg p$. | Logo, **$q$**. | Se uma das duas é verdadeira e a primeira falhou, a segunda é obrigatoriamente verdadeira. |
| **Princípio da Inclusão-Exclusão (2 e 3 conjuntos)** | $n(A \cup B) = n(A) + n(B) - n(A \cap B)$ | Para 3 conjuntos: soma os individuais, subtrai as interseções 2 a 2 e soma $n(A \cap B \cap C)$. | Comece sempre preenchendo o Diagrama de Venn pela **interseção central**. |
| **Conjunto das Partes $\mathcal{P}(A)$** | Total de subconjuntos de $A$ com $n$ elementos $= 2^n$. | Subconjuntos próprios não vazios $= 2^n - 2$. | O conjunto vazio $\emptyset$ é **subconjunto** de qualquer conjunto ($\emptyset \subset A$). |`,
    questions:[
      {q:'[Autoral] Em 50 pessoas, 28 estudam P, 25 estudam M e 10 ambas. Quantas não estudam nenhuma?',options:['0','7','10','17'],ans:1,comment:'A união tem 28+25−10=43. Restam 50−43=7. Somar sem descontar a interseção contaria as mesmas pessoas duas vezes.'},
      {q:'[Autoral] “Todo A é B; João é B; logo João é A” é:',options:['Sempre válido.', 'Inválido, pois B pode conter elementos fora de A.', 'Uma negação de todos.', 'Uma identidade entre A e B.'],ans:1,comment:'A inclusão A⊆B não implica B⊆A. João pode pertencer a B sem pertencer a A; esse contraexemplo mostra a invalidade.'},
      {q:'[Autoral] Considere verdadeiras as premissas: P1) “Se há pneus expostos à chuva, então surge foco de larvas”; P2) “Não surgiu foco de larvas neste pátio”. Aplicando a regra de inferência válida (Modus Tollens), conclui-se necessariamente que:',options:['Não há pneus expostos à chuva neste pátio.', 'Há pneus expostos à chuva neste pátio.', 'Choveu todos os dias da semana.', 'O pátio não possui muro.'],ans:0,comment:'Pelo Modus Tollens (se p → q é verdadeira e ¬q é verdadeira, então ¬p é verdadeira), a ausência do consequente (“não surgiu foco”) implica necessariamente a falsidade do antecedente (“não há pneus expostos à chuva”).'},
      {q:'[Autoral] Um conjunto $A$ reúne os 6 equipamentos básicos de proteção individual do agente em determinada operação. O número total de subconjuntos que compõem o Conjunto das Partes de $A$, denotado por $n(\\mathcal{P}(A))$, é igual a:',options:['64.', '12.', '36.', '32.'],ans:0,comment:'Um conjunto finito com n = 6 elementos distintos possui exatamente 2^n = 2^6 = 64 subconjuntos (incluindo o conjunto vazio e o próprio conjunto A).'},
    ],
    flashcards:[
      ['Como provar que um argumento é inválido?','Exibindo um contraexemplo em que todas as premissas sejam verdadeiras e a conclusão seja falsa.'],
      ['Qual a fórmula da união de dois conjuntos finitos?','n(A∪B) = n(A) + n(B) − n(A∩B).'],
      ['Por onde se deve começar a preencher um problema com Diagrama de Venn?', 'Sempre pela interseção central (elementos que pertencem simultaneamente a todos os conjuntos), descontando esse valor das regiões adjacentes.'],
    ],
    references:[{...portal,section:'Conjuntos e introdução à lógica matemática; exemplos autorais de diagramas e argumentos.'}],
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
    summary:`Defina o resultado. Cargos: ordem importa. Comissão: ordem não importa. Repetição e zero inicial mudam o espaço. Pelo menos um pode ser resolvido por complemento. Letras iguais exigem correção da contagem.

| Modelo Combinatório | A Ordem Importa? | Fórmula | Exemplo Clássico de Prova |
| --- | --- | --- | --- |
| **Permutação Simples ($P_n$)** | **SIM** (usa todos os $n$ elementos). | $P_n = n!$ | Fila de 5 agentes: $5! = 120$; anagramas de *VETOR*: $5! = 120$. |
| **Permutação com Repetição ($P_n^{a,b}$)** | **SIM** (há elementos repetidos). | $P_n^{a,b} = \frac{n!}{a! \cdot b!}$ | Anagramas de *ARARA* (5 letras: 3 A e 2 R): $\frac{5!}{3!2!} = \frac{120}{12} = 10$. |
| **Arranjo Simples ($A_{n,p}$)** | **SIM** (escolhe $p$ dentre $n$ para cargos/posições/senhas distintas). | $A_{n,p} = \frac{n!}{(n-p)!}$ | Escolher **1 chefe e 1 motorista** entre 6 servidores: $6 \times 5 = 30$. |
| **Combinação Simples ($C_{n,p}$)** | **NÃO** (escolhe subconjunto/dupla/comissão de iguais). | $C_{n,p} = \frac{n!}{p!(n-p)!}$ | Escolher **dupla de campo** entre 6 agentes: $\frac{6 \times 5}{2!} = 15$. |
| **Contagem Complementar ("Pelo menos um")** | Depende do caso base | $\text{Total} - \text{Casos sem nenhum}$ | Duplas com **pelo menos 1 veterano** $= \text{Total de duplas} - \text{Duplas só de novatos}$. |`,
    questions:[
      {q:'[Autoral] Entre 5 pessoas, quantas duplas sem cargos distintos podem ser formadas?',options:['5','10','20','25'],ans:1,comment:'C(5,2)=5×4/2=10. Vinte contaria cada dupla em duas ordens; 25 permitiria escolhas com repetição e posições.'},
      {q:'[Autoral] Quantos códigos de três dígitos, admitindo repetição e zero inicial, contêm ao menos um zero?',options:['27','100','271','300'],ans:2,comment:'Todos: 10³=1.000. Sem zero: 9³=729. Complemento: 1.000−729=271. Contar apenas “um zero em uma posição” trata mal as repetições.'},
      {q:'[Autoral] Quantos anagramas distintos podem ser formados com todas as 5 letras da palavra SAÚDE (desconsiderando o acento) e quantos podem ser formados com as 6 letras da palavra DENGUE, respectivamente?',options:['120 anagramas para SAUDE e 360 anagramas para DENGUE.', '25 anagramas para SAUDE e 36 anagramas para DENGUE.', '120 anagramas para ambas.', '720 anagramas para SAUDE e 120 para DENGUE.'],ans:0,comment:'SAUDE possui 5 letras todas distintas: P5 = 5! = 120. DENGUE possui 6 letras com a letra E repetida 2 vezes: P6^(2) = 6! / 2! = 720 / 2 = 360 anagramas distintos.'},
      {q:'[Autoral] Uma base distrital conta com 4 agentes veteranos e 3 agentes recém-admitidos. Deseja-se formar uma equipe de 3 agentes para uma vistoria especial, de modo que haja PELO MENOS 1 agente veterano na equipe. Quantas equipes distintas podem ser formadas?',options:['34 equipes.', '35 equipes.', '12 equipes.', '24 equipes.'],ans:0,comment:'O total de equipes de 3 pessoas escolhidas entre as 7 disponíveis é C(7,3) = (7×6×5)/(3×2×1) = 35. O único caso proibido é formar a equipe sem nenhum veterano (isto é, escolhendo os 3 recém-admitidos): C(3,3) = 1. Pelo complemento: 35 − 1 = 34 equipes.'},
    ],
    flashcards:[
      ['Qual pergunta separa arranjo de combinação?','Trocar a ordem dos escolhidos produz um resultado diferente? (Sim = Arranjo; Não = Combinação).'],
      ['Como contar “ao menos um” em problemas de combinatória?', 'Calcule o total geral de casos sem restrição e subtraia os casos que não possuem nenhum elemento do tipo pedido.'],
      ['Qual a fórmula da permutação com elementos repetidos?', 'Pn^(a,b) = n! / (a! × b!), onde a e b são as quantidades de vezes que cada elemento se repete.'],
    ],
    references:[{...portal,section:'Análise combinatória: princípio fundamental da contagem, permutações e combinações.'}],
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
    summary:`Não presuma equiprobabilidade de somas. Sem reposição, a composição muda. Condicionar restringe o espaço. União desconta interseção. Datas usam restos por 7, com atenção à contagem inclusiva.

| Conceito de Probabilidade / Sequência | Fórmula / Regra Prática | Exemplo Rápido | Ponto de Atenção |
| --- | --- | --- | --- |
| **Probabilidade Clássica (Laplace)** | $P(A) = \frac{\text{Casos Favoráveis } n(A)}{\text{Casos Possíveis } n(\Omega)}$ | $0 \le P(A) \le 1$; evento complementar: $P(\bar{A}) = 1 - P(A)$. | Só vale diretamente se os eventos elementares de $\Omega$ forem **equiprováveis**. |
| **Probabilidade da União ("OU")** | $P(A \cup B) = P(A) + P(B) - P(A \cap B)$ | Se $A$ e $B$ são mutuamente exclusivos ($A \cap B = \emptyset$), soma-se direto. | Nunca esqueça de subtrair a interseção $P(A \cap B)$ quando puderem ocorrer juntos. |
| **Probabilidade Condicional ("Sabendo que...")** | $P(A \mid B) = \frac{P(A \cap B)}{P(B)} = \frac{n(A \cap B)}{n(B)}$ | Restrinja o denominador diretamente ao universo da condição dada ($B$). | Reduzir o denominador a $n(B)$ é mais rápido que aplicar fração sobre fração. |
| **Extrações Sucessivas ("E" — Sem Reposição)** | $P(A \cap B) = P(A) \times P(B \mid A)$ | A cada retirada sem reposição, subtraia $1$ do total no denominador. | Com reposição, o denominador permanece constante. |
| **Ciclos de Calendário e Sequências** | Divida o deslocamento pelo tamanho do ciclo $T$ e olhe o **resto $r$**. | Dias da semana ($T=7$): se resto $= 0$, cai no mesmo dia da semana. | Diferencie *"daqui a $N$ dias"* ($+N$) de *"o $N$-ésimo termo da sequência"* (onde o 1º termo equivale a resto $1$). |`,
    questions:[
      {q:'[Autoral] Com 3 fichas azuis e 2 verdes, qual a chance de duas azuis em duas retiradas sem reposição?',options:['3/10','9/25','2/5','1/2'],ans:0,comment:'3/5×2/4=3/10. 9/25 seria o cálculo com reposição e independência sob as hipóteses adequadas.'},
      {q:'[Autoral] Se hoje é segunda-feira, qual dia será daqui a 30 dias?',options:['Segunda-feira.','Terça-feira.','Quarta-feira.','Quinta-feira.'],ans:2,comment:'30=4×7+2. Após quatro semanas permanece segunda; mais dois dias chega-se à quarta. Não se inclui hoje como um dia já transcorrido.'},
      {q:'[Autoral] Em um lote de 20 lâminas analisadas pelo laboratório de entomologia, sabe-se que 12 são do Bairro A (das quais 4 são positivas) e 8 são do Bairro B (das quais 2 são positivas). Escolhendo-se ao acaso uma lâmina e sabendo-se que ela veio do Bairro A, qual é a probabilidade condicional de ela ser positiva?',options:['1/3 (ou 4/12).', '3/10 (ou 6/20).', '1/4 (ou 2/8).', '3/5 (ou 12/20).'],ans:0,comment:'Como foi informado que a lâmina pertence ao Bairro A, o espaço amostral reduzido passa a ser as 12 lâminas do Bairro A, entre as quais há 4 positivas: P(Positiva | Bairro A) = 4/12 = 1/3.'},
      {q:'[Autoral] Uma escala de plantão repete ciclicamente a sequência de 5 equipes: (Alfa, Bravo, Charlie, Delta, Eco, Alfa, Bravo, ...). Qual equipe estará escalada no 143º dia dessa sequência?',options:['Equipe Charlie.', 'Equipe Alfa.', 'Equipe Eco.', 'Equipe Bravo.'],ans:0,comment:'Dividindo a posição 143 pelo tamanho do ciclo (5): 143 = 5 × 28 + 3 (quociente 28 e resto 3). O resto 1 corresponde a Alfa, resto 2 a Bravo e resto 3 corresponde à 3ª posição do ciclo: Equipe Charlie.'},
    ],
    flashcards:[
      ['Por que a chance da segunda retirada muda sem reposição?','Porque a primeira retirada reduz em 1 unidade o total de elementos do espaço amostral e altera a composição da urna.'],
      ['As somas de dois dados são equiprováveis?','Não. Os 36 pares ordenados são equiprováveis; a soma 7 possui 6 pares favoráveis (6/36 = 1/6), enquanto a soma 2 possui apenas 1 par (1/36).'],
      ['Como resolver rapidamente problemas de probabilidade condicional?', 'Restrinja o denominador diretamente ao total de elementos que satisfazem a condição informada ("sabendo que...") e conte no numerador quantos deles também atendem ao evento pedido.'],
    ],
    references:[{title:'IMPA/OBMEP — Introdução à probabilidade',url:'https://portaldaobmep.impa.br/index.php/modulo/ver?modulo=46&tipo=7',section:'Espaço amostral e cálculo de probabilidades; situações autorais com reposição e condicionamento.'}],
  },
];
