import type { DeepeningEntry } from './types';

const portal = {
  title: 'IMPA/OBMEP — Portal da Matemática',
  url: 'https://portaldaobmep.impa.br/index.php/modulo/ver?modulo=1&tipo=7',
  section: 'Aritmética, conjuntos numéricos, divisibilidade, números primos, MMC e MDC.'
};

export const matematica: DeepeningEntry[] = [
  {
    id: 'rlm_1',
    title: 'Conjuntos Numéricos, Operações Fundamentais, Primos, MMC e MDC',
    theory: String.raw`### 1. Conjuntos Numéricos e Relações de Inclusão
Os conjuntos numéricos fundamentais estruturam-se de forma encaixada:
$$\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$$
- **Números Naturais ($\mathbb{N}$)**: $\{0, 1, 2, 3, \dots\}$. Indicam contagens discretas de elementos inteiros não negativos (imóveis, agentes, caixas-d'água).
- **Números Inteiros ($\mathbb{Z}$)**: $\{\dots, -3, -2, -1, 0, 1, 2, 3, \dots\}$. Incluem os números naturais e seus respectivos opostos simétricos negativos (saldo de insumos, variações de temperatura).
- **Números Racionais ($\mathbb{Q}$)**: todos os números que podem ser expressos na forma fracionária $\frac{a}{b}$, com $a \in \mathbb{Z}$, $b \in \mathbb{Z}$ e $b \neq 0$. Sua representação decimal é sempre **finita** (ex.: $\frac{3}{4} = 0,75$) ou **infinita e periódica** (dízima periódica, como $\frac{1}{3} = 0,333\dots$).
- **Números Irracionais ($\mathbb{I} = \mathbb{R} \setminus \mathbb{Q}$)**: números decimais infinitos e **não periódicos**, que jamais podem ser escritos como razão de inteiros (ex.: $\sqrt{2} \approx 1,4142\dots$, $\pi \approx 3,14159\dots$).
- **Números Reais ($\mathbb{R}$)**: união de todos os racionais com os irracionais ($\mathbb{R} = \mathbb{Q} \cup \mathbb{I}$).

### 2. Algoritmo da Fração Geratriz de Dízimas Periódicas
Toda dízima periódica é um número racional pertencente a $\mathbb{Q}$.
1. **Dízima Periódica Simples**: o período inicia imediatamente após a vírgula:
   - Exemplo: $0,777\dots = \frac{7}{9}$;
   - Exemplo: $0,4545\dots = \frac{45}{99} = \frac{5}{11}$.
   - Regra: coloca-se o período no numerador e tantos noves quantos forem os algarismos do período no denominador.
2. **Dízima Periódica Composta**: possui uma parte não periódica (antiperíodo) entre a vírgula e o período:
   - Exemplo: $0,1555\dots = \frac{15 - 1}{90} = \frac{14}{90} = \frac{7}{45}$.
   - Exemplo com parte inteira: $1,2444\dots = \frac{124 - 12}{90} = \frac{112}{90} = \frac{56}{45}$.
   - Regra geral: no numerador, escreve-se o número formado até o fim do primeiro período subtraído da parte não periódica (inteiro + antiperíodo); no denominador, coloca-se um algarismo 9 para cada dígito do período, seguido de um algarismo 0 para cada dígito do antiperíodo.

### 3. Precedência das Operações (PEMDAS/PEMDAR) e Regras de Sinais
Em qualquer expressão numérica, a ordem obrigatória de resolução é:
1. Sinais gráficos de associação: **Parênteses** $\to$ **Colchetes** $\to$ **Chaves** (de dentro para fora);
2. **Potenciação e Radiciação** (na ordem em que aparecem);
3. **Multiplicação e Divisão** (na ordem estrita da esquerda para a direita; divisões e multiplicações têm o mesmo nível de prioridade: $18 \div 3 \times 2 = 6 \times 2 = 12$);
4. **Adição e Subtração** (da esquerda para a direita).

**Atenção aos sinais**:
- Em $-3^2$, o expoente 2 atua apenas sobre a base 3: $-3^2 = -(3 \times 3) = -9$.
- Em $(-3)^2$, o sinal negativo integra a base: $(-3)^2 = (-3) \times (-3) = +9$.
- O **Módulo ou Valor Absoluto** mede a distância de um número à origem na reta real: $|-7| = 7$ e $|+7| = 7$.

### 4. Números Primos e Quantidade de Divisores Naturais
Um número natural é **primo** se, e somente se, for maior que 1 e possuir **exatamente dois divisores naturais positivos distintos**: o número 1 e ele mesmo.
- **Alertas fundamentais**: o número 1 **não é primo** nem composto; o número 2 é o **único número primo par**.
- Pelo Teorema Fundamental da Aritmética, todo número natural composto $N > 1$ pode ser decomposto de modo único em fatores primos:
  $$N = p_1^{a} \cdot p_2^{b} \cdot p_3^{c}$$
- A **quantidade total de divisores naturais positivos** de $N$, denotada por $D(N)$, é obtida somando 1 a cada expoente e multiplicando os resultados:
  $$D(N) = (a+1)(b+1)(c+1)$$
  Exemplo: $600 = 2^3 \cdot 3^1 \cdot 5^2 \implies D(600) = (3+1)(1+1)(2+1) = 4 \times 2 \times 3 = 24\text{ divisores}$.

### 5. MDC vs MMC: Distinção Semântica e Algoritmos
A escolha entre Máximo Divisor Comum (MDC) e Mínimo Múltiplo Comum (MMC) depende do objetivo lógico do problema:
- **MDC (Máximo Divisor Comum)**: produto dos fatores primos **comuns** com os **menores expoentes**.
  * *Gatilho no enunciado*: repartir, dividir ou agrupar diferentes quantidades em **partes iguais de tamanho máximo**, sem sobras (lotes de insumos, fracionamento de kits, equipes de trabalho).
  * *Cuidado na pergunta*: diferencie a **capacidade máxima de cada kit** ($\text{MDC}$) da **quantidade total de kits formados** ($\text{Total de Itens} \div \text{MDC}$).
- **MMC (Mínimo Múltiplo Comum)**: produto de **todos os fatores primos** (comuns e não comuns) com os **maiores expoentes**.
  * *Gatilho no enunciado*: eventos periódicos que ocorrem em ciclos temporais distintos e pergunta-se quando **voltarão a coincidir ou acontecer simultaneamente**.
- **Relação Fundamental**: para quaisquer números inteiros positivos $a$ e $b$, vale rigorosamente a identidade:
  $$\text{MMC}(a, b) \times \text{MDC}(a, b) = a \times b$$`,
    summary: String.raw`MDC divide quantidades em partes iguais máximas sem sobra; MMC calcula reencontros periódicos de ciclos. Dízima periódica é número racional. Parênteses alteram a base de uma potência.

| Ferramenta Aritmética | Fórmulas e Algoritmo | Gatilho no Enunciado da Prova IBGP | Armadilha Clássica |
| --- | --- | --- | --- |
| **MDC (Divisor Comum)** | Fatores primos **comuns** com os **menores** expoentes. | Repartir itens em lotes/kits com a **maior capacidade possível**, sem sobra. | Confundir o **tamanho de cada kit** ($\text{MDC}$) com o **número de kits** ($\text{Total} \div \text{MDC}$). |
| **MMC (Múltiplo Comum)** | Todos os fatores primos com os **maiores** expoentes. | Ciclos ou rotinas periódicas que coincidiram hoje e pergunta-se **quando coincidirão de novo**. | Se a questão perguntar o dia da semana ou do mês, somar o $\text{MMC}$ à data inicial. |
| **Relação Fundamental** | $\text{MMC}(a,b) \times \text{MDC}(a,b) = a \times b$. | Conhecendo $\text{MMC}$, $\text{MDC}$ e um dos números, encontrar o outro imediatamente. | O número **1 não é primo** e **2 é o único primo par**. |
| **Fração Geratriz e Sinais** | $0,aaa\dots = \frac{a}{9}$; $0,abbb\dots = \frac{ab - a}{90}$. $(-3)^2 = +9$ vs $-3^2 = -9$. | Converter dízimas periódicas para somar frações ou calcular potências com sinais negativos. | Dizer que dízima periódica é irracional (dízimas periódicas pertencem a $\mathbb{Q}$). |`,
    questions: [
      {
        q: '[Autoral] Em uma base distrital da SEMUSA, uma coordenação de vigilância recebeu 84 frascos de reagente azul e 126 frascos de reagente verde para distribuir entre as equipes de campo. Deseja-se organizar esses insumos em kits idênticos contendo a mesma composição de reagentes em cada um, sem sobras e de modo a formar a maior quantidade possível de kits. Quantos kits serão formados e quantos frascos de cada cor conterá cada kit?',
        options: [
          '42 kits, contendo cada um 2 frascos de reagente azul e 3 de reagente verde.',
          '21 kits, contendo cada um 4 frascos de reagente azul e 6 de reagente verde.',
          '84 kits, contendo cada um 1 frasco de reagente azul e 1 de reagente verde.',
          '252 kits, contendo cada um 3 frascos de reagente azul e 2 de reagente verde.'
        ],
        ans: 0,
        difficulty: 'Fácil',
        questionType: 'Caso Prático ACE',
        comment: 'Gabarito: A. Para dividir simultaneamente duas quantidades na maior divisão comum exata sem sobras, calcula-se o Máximo Divisor Comum: decompondo em fatores primos, 84 = 2² × 3 × 7 e 126 = 2 × 3² × 7. O MDC(84, 126) corresponde ao produto dos fatores primos comuns com seus menores expoentes: 2 × 3 × 7 = 42 kits. Dividindo as quantidades: 84 ÷ 42 = 2 frascos azuis e 126 ÷ 42 = 3 frascos verdes por kit. Erro da B: 21 é divisor comum, mas não é o máximo divisor comum; erro da C: 84 divide 84, mas não divide 126 exatamente (haveria sobra); erro da D: 252 é o MMC(84, 126), representando um múltiplo comum, e não um divisor das quantidades.'
      },
      {
        q: '[Autoral] Duas rotinas de monitoramento entomológico da SEMUSA em Porto Velho repetem-se ciclicamente: a inspeção de bueiros ocorre a cada 12 dias e a vistoria de cemitérios ocorre a cada 18 dias. Se ambas as equipes iniciaram suas rotinas simultaneamente no dia de hoje, daqui a quantos dias essas duas vistorias coincidirão novamente pela primeira vez?',
        options: [
          'Daqui a 36 dias.',
          'Daqui a 6 dias.',
          'Daqui a 18 dias.',
          'Daqui a 30 dias.'
        ],
        ans: 0,
        difficulty: 'Fácil',
        questionType: 'Caso Prático ACE',
        comment: 'Gabarito: A. Trata-se de um problema clássico de reencontro periódico de ciclos, resolvido pelo Mínimo Múltiplo Comum (MMC). Fatorando 12 = 2² × 3 e 18 = 2 × 3², o MMC(12, 18) é o produto de todos os fatores primos com os maiores expoentes: 2² × 3² = 4 × 9 = 36 dias. Erro da B: 6 é o MDC(12, 18), que mede divisão comum máxima e não tempo futuro de reencontro; erro da C: 18 dias contempla apenas o ciclo dos cemitérios, pois 18 não é divisível por 12 (18 ÷ 12 = 1,5); erro da D: 30 dias resulta da soma ingênua dos períodos (12 + 18), que não é múltiplo comum de nenhum dos dois.'
      },
      {
        q: '[Autoral] Uma coordenação de endemias recebeu 120 tubos de ensaio plásticos e 180 etiquetas de identificação adesivas e deseja organizá-los em caixas fechadas com a mesma quantidade de itens em cada caixa, sem misturar tubos com etiquetas na mesma caixa, sem sobra e de modo que cada caixa tenha a MAIOR capacidade possível. Quantas caixas serão formadas ao todo?',
        options: [
          '5 caixas ao todo (2 caixas de tubos e 3 caixas de etiquetas, contendo 60 itens em cada caixa).',
          '60 caixas ao todo.',
          '300 caixas ao todo.',
          '12 caixas ao todo.'
        ],
        ans: 0,
        difficulty: 'Intermediário',
        questionType: 'Caso Prático ACE',
        comment: 'Gabarito: A. A maior capacidade de cada caixa corresponde ao MDC(120, 180). Fatorando: 120 = 2³ × 3 × 5 e 180 = 2² × 3² × 5. O MDC é 2² × 3 × 5 = 60 itens por caixa. O total de caixas formadas será: 120 ÷ 60 = 2 caixas de tubos de ensaio e 180 ÷ 60 = 3 caixas de etiquetas adesivas, totalizando 2 + 3 = 5 caixas. Erro da B: 60 é a quantidade de itens por caixa (capacidade), e não a quantidade de caixas formadas; erro da C: 300 é a soma simples dos itens (120 + 180); erro da D: 12 resulta de dividir 60 por 5 ou decomposição incompleta.'
      },
      {
        q: '[Autoral] Sabendo que o número natural $N = 2^3 \\times 3^1 \\times 5^2 = 600$ representa o total de residências cadastradas em determinado setor sanitário, quantos divisores naturais positivos possui o número 600?',
        options: [
          '24 divisores naturais positivos.',
          '6 divisores naturais positivos.',
          '10 divisores naturais positivos.',
          '30 divisores naturais positivos.'
        ],
        ans: 0,
        difficulty: 'Intermediário',
        questionType: 'Cálculo',
        comment: 'Gabarito: A. Pelo teorema do número de divisores de um número natural decomposto em fatores primos N = p₁ᵃ · p₂ᵇ · p₃ᶜ, a quantidade de divisores positivos é D(N) = (a + 1)(b + 1)(c + 1). Para 600 = 2³ × 3¹ × 5², temos: (3 + 1) × (1 + 1) × (2 + 1) = 4 × 2 × 3 = 24 divisores. Erro da B: resulta de multiplicar diretamente os expoentes (3 × 1 × 2 = 6) sem somar 1 a cada um; erro da C: 10 equivale à soma dos fatores primos ou expoentes; erro da D: erro aritmético na multiplicação dos fatores incrementados.'
      },
      {
        q: '[Autoral] Em relação aos conjuntos numéricos e à representação de números decimais, assinale a afirmativa CORRETA:',
        options: [
          'A dízima periódica composta $1,2444\\dots$ é um número racional (pertencente a $\\mathbb{Q}$) cuja fração geratriz irredutível é $\\frac{56}{45}$.',
          'O número 1 é classificado como número primo por possuir apenas o divisor 1.',
          'O valor da expressão numérica $-3^2 + (-3)^2$ é igual a 18.',
          'Toda dízima com infinitas casas decimais é obrigatoriamente um número irracional (pertencente a $\\mathbb{I}$).'
        ],
        ans: 0,
        difficulty: 'Intermediário',
        questionType: 'Conceitual',
        comment: 'Gabarito: A. Toda dízima periódica é racional. Para encontrar a fração geratriz de 1,2444...: seja x = 1,2444... Logo, 10x = 12,444... e 100x = 124,444... Subtraindo: 100x - 10x = 124 - 12 => 90x = 112 => x = 112/90 = 56/45. Erro da B: 1 não é primo (números primos exigem exatamente dois divisores positivos distintos); erro da C: -3² = -9 (a base da potência é apenas 3) e (-3)² = +9, logo -9 + 9 = 0 (e não 18); erro da D: dízimas periódicas possuem infinitas casas e são números racionais (pertencem a Q).'
      }
    ],
    flashcards: [
      [
        'O que distingue conceitualmente um problema de MMC de um problema de MDC?',
        'No MMC, o resultado procurado é múltiplo comum dos períodos temporais (encontro futuro de ciclos); no MDC, o resultado é um divisor comum que reparte quantidades em lotes máximos iguais sem sobra.'
      ],
      [
        'Qual a diferença de cálculo entre as potências −3² e (−3)²?',
        'Em −3², o sinal negativo não está elevado à potência, resultando em −9; em (−3)², a base é negativa e está entre parênteses, resultando em +9.'
      ],
      [
        'Como calcular a quantidade de divisores naturais positivos de um número a partir de sua fatoração prima?',
        'Decompõe-se o número em fatores primos N = p₁ᵃ · p₂ᵇ, soma-se 1 a cada expoente e multiplicam-se os resultados: (a + 1)(b + 1).'
      ]
    ],
    references: [
      { ...portal, section: 'Conjuntos numéricos, propriedades de divisibilidade, números primos, cálculo de MMC e MDC.' }
    ]
  },
  {
    id: 'rlm_2',
    title: 'Razões, Proporções, Regra de Três (Processo/Produto) e Indicadores de Saúde',
    theory: String.raw`### 1. Razões, Proporções e Constante de Proporcionalidade
Uma razão expressa a divisão entre duas grandezas $a$ e $b$ ($b \neq 0$). Uma proporção é a igualdade entre duas razões: $\frac{a}{b} = \frac{c}{d} \iff a \cdot d = b \cdot c$.
- **Grandezas Diretamente Proporcionais**: quando a multiplicação de uma grandeza por um fator $k$ faz a outra ser multiplicada pelo mesmo fator ($\frac{y}{x} = k \implies y = kx$).
- **Grandezas Inversamente Proporcionais**: quando a multiplicação de uma grandeza por $k$ divide a outra por $k$, mantendo constante o produto ($x \cdot y = k \implies y = \frac{k}{x}$).
- **Divisão Proporcional**:
  * Em partes diretamente proporcionais a $p_1, p_2$: somam-se as partes e estabelece-se a constante $k = \frac{\text{Total}}{p_1 + p_2}$;
  * Em partes inversamente proporcionais a $q_1, q_2$: divide-se em partes diretamente proporcionais aos inversos $\frac{1}{q_1}, \frac{1}{q_2}$ (multiplicando-se pelo MMC dos denominadores).

### 2. Método do Processo/Produto para Regra de Três Composta
O método tradicional de setas para cima e para baixo gera frequentes ambiguidades em problemas com 4 ou mais grandezas. O método analítico do **Processo/Produto** (Causa e Efeito) segrega os fatores com base na função que desempenham:
- **Processo (Causas / Esforço)**: reúne todos os agentes de trabalho, o tempo dedicado e a velocidade de execução (número de agentes, dias de campo, horas/dia de trabalho, ritmo da equipe).
- **Produto (Efeito / Objeto Produzido)**: representa a tarefa materialmente executada ou a meta atingida (número de imóveis inspecionados, quarteirões concluídos, depósitos tratados, área vistoriada e respectivo grau de dificuldade).
- **Equação Fundamental Invariante**:
  $$\frac{\text{Processo}_1}{\text{Produto}_1} = \frac{\text{Processo}_2}{\text{Produto}_2} \iff \frac{\text{Agentes}_1 \times \text{Dias}_1 \times \text{Horas}_1}{\text{Imóveis}_1 \times \text{Dificuldade}_1} = \frac{\text{Agentes}_2 \times \text{Dias}_2 \times \text{Horas}_2}{\text{Imóveis}_2 \times \text{Dificuldade}_2}$$
Isolando os elementos do Processo de um lado e o Produto do outro, elimina-se o risco de inversão indevida de frações.

### 3. Porcentagem Aplicada à Vigilância em Saúde: IIP e IB
Na rotina do Levantamento Rápido de Índices para *Aedes aegypti* (LIRAa) em Porto Velho, o ACE aplica dois indicadores entomológicos padronizados pelo Ministério da Saúde:
1. **Índice de Infestação Predial (IIP)**: mede a dispersão espacial do vetor entre os domicílios:
   $$\text{IIP} = \frac{\text{Total de Imóveis com Presença de Larvas}}{\text{Total de Imóveis Pesquisados}} \times 100\%$$
   *Critérios de Risco Epidemiológico do MS*:
   - $\text{IIP} < 1,0\%$: Baixo Risco / Condição Satisfatória;
   - $1,0\% \le \text{IIP} \le 3,9\%$: Médio Risco / Situação de Alerta;
   - $\text{IIP} \ge 4,0\%$: Alto Risco / Risco Iminente de Surto de Dengue/Chikungunya.
2. **Índice de Breteau (IB)**: mede a densidade relativa de depósitos positivos em relação aos imóveis:
   $$\text{IB} = \frac{\text{Total de Depósitos Positivos com Larvas}}{\text{Total de Imóveis Pesquisados}} \times 100$$

### 4. Variações Relativas vs Pontos Percentuais e Variações Sucessivas
A distinção entre variação absoluta em pontos percentuais e variação relativa percentual é recorrente em provas da banca IBGP:
- Se uma taxa passa de $20\%$ para $25\%$:
  * A **variação absoluta** é de $25\% - 20\% = 5\text{ pontos percentuais (p.p.)}$;
  * A **variação relativa (crescimento percentual)** toma a base inicial ($20\%$): $\frac{25 - 20}{20} = \frac{5}{20} = 0,25 = +25\%$.
- **Variações Percentuais Sucessivas**: calculam-se multiplicando os fatores acumulados $(1 \pm i_1)(1 \pm i_2)$:
  * Um aumento de $20\%$ seguido de uma redução de $25\%$: $1,20 \times 0,75 = 0,90$ (redução líquida final de $10\%$, jamais $-5\%$).
  * Um aumento de $20\%$ seguido de uma redução de $20\%$: $1,20 \times 0,80 = 0,96$ (redução líquida final de $4\%$, jamais $0\%$).`,
    summary: String.raw`Grandezas proporcionais obedecem a uma taxa unitária constante. O método Processo/Produto isola o esforço no numerador e a produção no denominador. Pontos percentuais medem diferença absoluta; taxa relativa mede crescimento sobre a base inicial.

| Modelo Proporcional / Percentual | Equação e Método Rápido | Exemplo Prático | Armadilha de Prova |
| --- | --- | --- | --- |
| **Divisão Diretamente Proporcional** | $\frac{A}{p_1} = \frac{B}{p_2} = k \implies (p_1 + p_2)k = \text{Total}$ | Dividir 300 kits a 2 e 3: $5k = 300 \implies k = 60 \implies 120\text{ e }180$. | Esquecer de multiplicar a constante $k$ pelo peso pedido na pergunta. |
| **Divisão Inversamente Proporcional** | Proporcional aos inversos $\frac{1}{q_1}$ e $\frac{1}{q_2}$. | Dividir 100 itens inversamente a 2 e 3 ($\text{MMC}=6 \implies$ pesos 3 e 2): $5k = 100 \implies 60\text{ e }40$. | O menor critério inverso (ex.: menos faltas) fica com a **maior** cota. |
| **Processo / Produto (Regra de 3)** | $\frac{\text{Agentes}_1 \cdot \text{Dias}_1 \cdot \text{Horas}_1}{\text{Imóveis}_1} = \frac{\text{Agentes}_2 \cdot \text{Dias}_2 \cdot \text{Horas}_2}{\text{Imóveis}_2}$ | Isolar o produto no denominador evita o uso confuso de setas. | Dificuldade do terreno entra multiplicando o Produto. |
| **Variações Sucessivas** | Fator $= (1 \pm i_1) \times (1 \pm i_2)$. | Aumento de $20\%$ seguido de queda de $25\%$: $1,20 \times 0,75 = 0,90$ (**queda líquida de $10\%$**). | Somar algebricamente as taxas ($+20\% - 25\% = -5\%$), ignorando a mudança de base. |`,
    questions: [
      {
        q: '[Autoral] Em uma ação de controle vetorial da SEMUSA, 4 agentes de endemias, trabalhando 6 horas por dia durante 3 dias, inspecionam 360 imóveis em condições normais de terreno. Mantendo o mesmo ritmo de trabalho e a mesma produtividade individual, quantos imóveis serão inspecionados por 6 agentes trabalhando 5 horas por dia durante 4 dias?',
        options: [
          '600 imóveis.',
          '300 imóveis.',
          '480 imóveis.',
          '720 imóveis.'
        ],
        ans: 0,
        difficulty: 'Intermediário',
        questionType: 'Caso Prático ACE',
        comment: 'Gabarito: A. Pelo método Processo/Produto: Processo 1 = 4 agentes × 6 h/dia × 3 dias = 72 agente-horas; Produto 1 = 360 imóveis. Taxa de produtividade = 360 ÷ 72 = 5 imóveis por agente-hora. No novo cenário: Processo 2 = 6 agentes × 5 h/dia × 4 dias = 120 agente-horas. Produto 2 = 120 × 5 = 600 imóveis. Erro da B: 300 subestima o esforço da equipe ampliada; erro da C: 480 calcula incorretamente a relação de horas; erro da D: 720 duplica erroneamente os 360 imóveis.'
      },
      {
        q: '[Autoral] Em determinado estrato de Porto Velho, o Índice de Infestação Predial (IIP) para Aedes aegypti subiu de 20% no início do ano para 25% no pico das chuvas. Em relação a essas duas medições, a variação absoluta em pontos percentuais e a taxa de crescimento relativo foram, respectivamente, de:',
        options: [
          '5 pontos percentuais e 25% de crescimento relativo.',
          '5% e 5% de crescimento relativo.',
          '25 pontos percentuais e 5% de crescimento relativo.',
          '5 pontos percentuais e 125% de crescimento relativo.'
        ],
        ans: 0,
        difficulty: 'Fácil',
        questionType: 'Caso Prático ACE',
        comment: 'Gabarito: A. A variação absoluta é a simples diferença aritmética entre as duas taxas: 25% - 20% = 5 pontos percentuais (p.p.). Já o crescimento relativo toma como base o valor inicial (20%): (25 - 20) ÷ 20 = 5 ÷ 20 = 0,25 = 25% de aumento relativo. Erro da B: confunde pontos percentuais com variação percentual relativa; erro da C: inverte os conceitos numéricos; erro da D: 125% é o fator de índice final (1,25), não a variação líquida (25%).'
      },
      {
        q: '[Autoral] O número de criadouros positivos registrados em um bairro aumentou 20% do primeiro para o segundo mês do ano. Após uma intensa ação de bloqueio da equipe de ACE, o número de focos caiu 25% do segundo para o terceiro mês. Em relação à quantidade inicial do primeiro mês, a quantidade de focos no terceiro mês apresentou:',
        options: [
          'Redução acumulada de 10%.',
          'Redução acumulada de 5%.',
          'Aumento acumulado de 5%.',
          'Estabilidade absoluta (0% de variação).'
        ],
        ans: 0,
        difficulty: 'Intermediário',
        questionType: 'Cálculo',
        comment: 'Gabarito: A. Aplicando os fatores de variação sucessivos sobre a base inicial 1,00: aumento de 20% gera o fator (1 + 0,20) = 1,20; redução subsequente de 25% gera o fator (1 - 0,25) = 0,75. Fator acumulado final: 1,20 × 0,75 = 0,90 (ou 90% do valor inicial). Logo, houve uma redução líquida de 1,00 - 0,90 = 0,10 = 10%. Erro da B: soma ingenuamente as taxas (+20% - 25% = -5%), ignorando que a queda de 25% incide sobre a base ampliada de 120%; erro da C e D: desconsideram o efeito composto de variações percentuais sucessivas.'
      },
      {
        q: '[Autoral] Um lote de 220 caixas de larvicida será distribuído entre duas equipes distritais em partes inversamente proporcionais ao número de veículos avariados de cada uma durante o mês, que foram de 2 e 3 veículos, respectivamente. Quantas caixas de larvicida receberá a equipe que teve MENOS veículos avariados?',
        options: [
          '132 caixas de larvicida.',
          '88 caixas de larvicida.',
          '110 caixas de larvicida.',
          '150 caixas de larvicida.'
        ],
        ans: 0,
        difficulty: 'Difícil',
        questionType: 'Caso Prático ACE',
        comment: 'Gabarito: A. Dividir inversamente a 2 e 3 equivale a dividir diretamente pelos inversos 1/2 e 1/3. Multiplicando ambos pelo MMC(2,3) = 6, obtemos os pesos proporcionais 3 e 2. Montando a constante de proporcionalidade k: 3k + 2k = 220 => 5k = 220 => k = 44. A equipe que teve MENOS veículos avariados (2 avarias) tem direito à MAIOR cota (peso 3): 3 × 44 = 132 caixas. Erro da B: 88 caixas (2 × 44) é a cota da equipe com 3 avarias; erro da C: 110 caixas seria uma divisão igualitária (220 ÷ 2); erro da D: cálculo arbitrário.'
      },
      {
        q: '[Autoral] Em uma campanha de LIRAa realizada em determinado bairro de Porto Velho, foram inspecionados 800 imóveis, dos quais 32 apresentavam larvas de Aedes aegypti em pelo menos um recipiente, totalizando 48 depósitos positivos com larvas. Com base nas diretrizes do Ministério da Saúde, o Índice de Infestação Predial (IIP) e o Índice de Breteau (IB) desse bairro são, respectivamente:',
        options: [
          'IIP = 4,0% (Risco de Surto) e IB = 6,0.',
          'IIP = 6,0% (Risco de Surto) e IB = 4,0.',
          'IIP = 2,5% (Alerta) e IB = 3,2.',
          'IIP = 0,4% (Satisfatório) e IB = 0,6.'
        ],
        ans: 0,
        difficulty: 'Intermediário',
        questionType: 'Caso Prático ACE',
        comment: 'Gabarito: A. O IIP mede o percentual de imóveis com larvas: (32 ÷ 800) × 100% = 0,04 × 100% = 4,0% (pelo Ministério da Saúde, IIP ≥ 4,0% classifica o estrato em Alto Risco / Risco de Surto). O Índice de Breteau (IB) mede a relação entre depósitos positivos e total de imóveis inspecionados por 100: (48 ÷ 800) × 100 = 6,0. Erro da B: inverte os dois índices; erro da C: calcula frações incorretas; erro da D: erro de uma casa decimal (esquece de multiplicar por 100).'
      }
    ],
    flashcards: [
      [
        'Qual é a estrutura matemática do método Processo/Produto em regras de três?',
        'Reúne os fatores de esforço no numerador (agentes × dias × horas) e o produto executado no denominador (imóveis × dificuldade), mantendo constante a razão Processo / Produto.'
      ],
      [
        'Como calcular a variação relativa percentual e a variação em pontos percentuais?',
        'A variação em pontos percentuais é a diferença simples (taxa final − taxa inicial); a variação relativa divide essa diferença pela taxa inicial: (final − inicial) / inicial.'
      ],
      [
        'Quais são as faixas oficiais de risco do Índice de Infestação Predial (IIP) segundo o Ministério da Saúde?',
        'IIP < 1,0% (Baixo Risco / Satisfatório); 1,0% a 3,9% (Médio Risco / Situação de Alerta); IIP ≥ 4,0% (Alto Risco / Risco de Surto).'
      ]
    ],
    references: [
      {
        title: 'IMPA/OBMEP — Razões, Proporções e Porcentagem',
        url: 'https://portaldaobmep.impa.br/index.php/modulo/ver?modulo=57&tipo=7',
        section: 'Grandezas proporcionais, regra de três simples e composta e variações percentuais.'
      }
    ]
  },
  {
    id: 'rlm_3',
    title: 'Grandezas e Medidas: Cubagem de Depósitos e Dosagem de Larvicidas',
    theory: String.raw`### 1. Sistema Métrico Decimal e Fatores de Escala Dimensional
No Sistema Internacional de Unidades (SI), a conversão de medidas exige atenção rigorosa à dimensão geométrica da grandeza:
- **Comprimento ($1\text{D}$)**: cada unidade varia em fator $10$ ($1\text{ m} = 10\text{ dm} = 100\text{ cm} = 1.000\text{ mm}$).
- **Área ($2\text{D}$)**: cada unidade varia em fator $10^2 = 100$ ($1\text{ m}^2 = 100\text{ dm}^2 = 10.000\text{ cm}^2$; $1\text{ hectare (ha)} = 10.000\text{ m}^2$).
- **Volume ($3\text{D}$)**: cada unidade varia em fator $10^3 = 1.000$ ($1\text{ m}^3 = 1.000\text{ dm}^3 = 1.000.000\text{ cm}^3$).
- **Escala Cartográfica**: a escala linear é $E = \frac{d}{D}$. A escala de área corresponde ao quadrado da escala linear: $E_{\text{área}} = E^2$. Se o mapa está na escala $1:2.000$, uma linha de $3\text{ cm}$ representa $3 \times 2.000 = 6.000\text{ cm} = 60\text{ m}$.

### 2. Pontes Fundamentais entre Volume, Capacidade e Massa
A articulação entre espaço tridimensional e capacidade de armazenamento de água é direta:
- **$1\text{ m}^3 = 1.000\text{ litros}$**;
- **$1\text{ dm}^3 = 1\text{ litro}$**;
- **$1\text{ cm}^3 = 1\text{ mililitro (mL)}$**.
- **Equivalência para Água Pura**: sob condições normais de temperatura e pressão, $1\text{ litro de água} \approx 1\text{ kg} = 1.000\text{ gramas}$. Para outras substâncias líquidas, a conversão depende de sua densidade ($\rho = \frac{m}{V}$).

### 3. Tempo Decimal vs Tempo Sexagesimal
O tempo civil organiza-se em base sexagesimal (base 60), enquanto calculadoras operam em base decimal:
- $1\text{ hora} = 60\text{ minutos}$; $1\text{ minuto} = 60\text{ segundos}$.
- **Conversão de decimal para minutos**: multiplica-se a parte fracionária por 60:
  * $3,4\text{ horas} = 3\text{ horas} + (0,4 \times 60)\text{ minutos} = 3\text{ h } 24\text{ min}$ (e não 3 horas e 40 minutos!);
  * $2,75\text{ horas} = 2\text{ horas} + (0,75 \times 60)\text{ minutos} = 2\text{ h } 45\text{ min}$.
- **Conversão de minutos para decimal**: divide-se por 60:
  * $1\text{ h } 20\text{ min} = 1 + \frac{20}{60} = 1 + \frac{1}{3} \approx 1,333\text{ horas}$.

### 4. CUBAGEM DE DEPÓSITOS APLICADA AO TRABALHO DO ACE
No controle químico de criadouros de mosquitos vetores (*Aedes aegypti*), o ACE calcula o volume de recipientes para dosar larvicidas:
1. **Depósito Retangular / Caixa-d'água / Tanque Paralelepípedo**:
   $$V = c \times l \times h$$
   Onde $c$ é o comprimento, $l$ a largura e $h$ a altura útil de água (todas em metros).
   *Exemplo*: Reservatório de $1,2\text{ m} \times 0,8\text{ m} \times 0,5\text{ m} = 0,48\text{ m}^3$.
   Capacidade em litros: $0,48 \times 1.000 = 480\text{ litros}$.
2. **Depósito Cilíndrico / Tambor / Tonel / Cisterna**:
   $$V = \pi \cdot r^2 \cdot h = \pi \cdot \left(\frac{D}{2}\right)^2 \cdot h$$
   Onde $D$ é o diâmetro interno, $r = \frac{D}{2}$ é o raio da base cilíndrica e $h$ é a altura de água.
   *Alerta clássico de concurso*: a fórmula utiliza o **raio $r$**, e não o diâmetro $D$. Usar o diâmetro diretamente quadruplica incorretamente o volume ($2^2 = 4$).
   *Exemplo*: Cisterna de diâmetro $D = 2\text{ m}$ ($r = 1\text{ m}$) e $h = 1,5\text{ m}$ ($\pi = 3,14$):
   $$V = 3,14 \times 1^2 \times 1,5 = 4,71\text{ m}^3 = 4.710\text{ litros}$$

### 5. DOSAGEM DE LARVICIDAS EM GRAMAS E PARTES POR MILHÃO (PPM)
A concentração de larvicidas e produtos saneantes é expressa em partes por milhão (ppm):
- **Equivalência Física**: $1\text{ ppm} = 1\text{ mg de princípio ativo por litro de água} = 1\text{ g/m}^3$.
- **Cálculo da Massa de Larvicida**:
  $$\text{Dose em gramas (g)} = \text{Volume útil (m}^3\text{)} \times \text{Concentração exigida (g/m}^3\text{)}$$
  *Exemplo*: Tratar um reservatório com volume de $3,5\text{ m}^3$ de água na dosagem recomendada pelo Ministério da Saúde de $1\text{ ppm}$ ($1\text{ g/m}^3$):
  $$\text{Massa} = 3,5\text{ m}^3 \times 1\text{ g/m}^3 = 3,5\text{ gramas de larvicida}$$`,
    summary: String.raw`Fatores métricos dependem da dimensão (10 em 1D, 100 em 2D, 1000 em 3D). 1 m³ = 1000 L; 1 dm³ = 1 L; 1 cm³ = 1 mL. 1 ppm = 1 mg/L = 1 g/m³. No cilindro, o raio é a metade do diâmetro.

| Grandeza / Geometria | Fórmula de Volume e Conversão | Exemplo Prático de Campo | Erro Frequente na Prova |
| --- | --- | --- | --- |
| **Depósito Retangular (Paralelepípedo)** | $V = c \times l \times h$ (em metros). Capacidade $= V \times 1.000\text{ L}$. | Caixa de $1,2\text{m} \times 0,8\text{m} \times 0,5\text{m} = 0,48\text{m}^3 = 480\text{L}$. | Multiplicar metros por centímetros sem uniformizar a unidade antes. |
| **Depósito Cilíndrico (Tambor/Cisterna)** | $V = \pi \cdot r^2 \cdot h = \pi \cdot (D/2)^2 \cdot h$. | Diâmetro $2\text{m} \implies r=1\text{m}$; com $h=1,5\text{m} \implies 4,71\text{m}^3 = 4.710\text{L}$. | Usar o diâmetro no lugar do raio, quadruplicando o volume final. |
| **Dosagem de Larvicida (ppm $\leftrightarrow$ g)** | $1\text{ ppm} = 1\text{ mg/L} = 1\text{ g/m}^3$. $\text{Dose(g)} = V(\text{m}^3) \times \text{ppm}$. | Tratar $3,5\text{m}^3$ a $1\text{ ppm} \implies 3,5\text{ g}$ de produto comercial. | Confundir concentração em mg/L com g/L (erro de fator 1.000). |
| **Tempo Decimal $\to$ Horas e Minutos** | Multiplicar a parte decimal por 60 minutos. | $3,4\text{ h} = 3\text{ h} + (0,4 \times 60) = \mathbf{3\text{ h } 24\text{ min}}$. | Ler $3,4\text{ horas}$ como *"3 horas e 40 minutos"*. |`,
    questions: [
      {
        q: '[Autoral] Um Agente de Combate às Endemias inspeciona um depósito retangular (caixa-d\'água de alvenaria) com medidas internas de 1,2 metro de comprimento, 80 centímetros de largura e 50 centímetros de altura útil. Qual é a capacidade máxima desse reservatório em litros?',
        options: [
          '480 litros.',
          '48 litros.',
          '4.800 litros.',
          '480.000 litros.'
        ],
        ans: 0,
        difficulty: 'Fácil',
        questionType: 'Caso Prático ACE',
        comment: 'Gabarito: A. Uniformizando as unidades para metros: comprimento = 1,2 m; largura = 80 cm = 0,8 m; altura = 50 cm = 0,5 m. O volume interno em metros cúbicos é: V = c × l × h = 1,2 × 0,8 × 0,5 = 0,48 m³. Como 1 m³ equivale exatamente a 1.000 litros, a capacidade é 0,48 × 1.000 = 480 litros. Erro da B: erra a conversão multiplicando por 100 em vez de 1.000; erro da C: multiplica por 10.000 por equívoco de casas decimais; erro da D: expressa em centímetros cúbicos ou mililitros (480.000 cm³ = 480 L).'
      },
      {
        q: '[Autoral] Um tambor metálico cilíndrico vertical (criadouro de Aedes aegypti) possui diâmetro interno de 2 metros e altura de água de 1,5 metro (adote $\\pi = 3,14$). Qual é o volume de água contido nesse depósito em metros cúbicos e sua respectiva capacidade em litros?',
        options: [
          '$4,71\\text{ m}^3$ e $4.710\\text{ litros}$.',
          '$9,42\\text{ m}^3$ e $9.420\\text{ litros}$.',
          '$18,84\\text{ m}^3$ e $18.840\\text{ litros}$.',
          '$0,471\\text{ m}^3$ e $471\\text{ litros}$.'
        ],
        ans: 0,
        difficulty: 'Intermediário',
        questionType: 'Caso Prático ACE',
        comment: 'Gabarito: A. O raio r é a metade do diâmetro D: r = 2 ÷ 2 = 1 metro. A fórmula do volume do cilindro é V = π · r² · h. Substituindo os valores: V = 3,14 × (1)² × 1,5 = 3,14 × 1 × 1,5 = 4,71 m³. Convertendo para capacidade (1 m³ = 1.000 L): 4,71 × 1.000 = 4.710 litros. Erro da B: utiliza o diâmetro (2 m) no lugar do raio sem elevar ao quadrado (3,14 × 2 × 1,5 = 9,42 m³); erro da C: utiliza o diâmetro inteiro (2 m) como raio (r = 2 => r² = 4), quadruplicando o volume para 18,84 m³; erro da D: divide por 10 indevidamente.'
      },
      {
        q: '[Autoral] Um larvicida granulado deve ser aplicado na dosagem recomendada pelo Ministério da Saúde de $1\\text{ ppm}$ ($1\\text{ parte por milhão} = 1\\text{ mg/L} = 1\\text{ g/m}^3$) de produto comercial por volume de água tratada. Se um ACE precisa tratar uma cisterna com volume útil de $3,5\\text{ m}^3$ de água, qual massa de larvicida em gramas deverá ser dosada?',
        options: [
          '$3,5\\text{ gramas}$.',
          '$35\\text{ gramas}$.',
          '$0,35\\text{ grama}$.',
          '$350\\text{ gramas}$.'
        ],
        ans: 0,
        difficulty: 'Fácil',
        questionType: 'Caso Prático ACE',
        comment: 'Gabarito: A. Pela equivalência de grandezas físicas: 1 ppm equivale a 1 mg de produto por litro de água, o que corresponde a 1.000 mg por 1.000 litros, isto é, exatamente 1 g por metro cúbico (1 g/m³). Para um volume de 3,5 m³ à concentração de 1 g/m³, a massa necessária de larvicida é: 3,5 m³ × 1 g/m³ = 3,5 gramas. Erro da B: multiplica por 10 por confusão de conversão de unidades; erro da C: divide por 10 indevidamente; erro da D: confunde gramas com decigramas ou aplica fator 100.'
      },
      {
        q: '[Autoral] Em uma missão de campo em comunidade ribeirinha de Porto Velho, um ACE registrou no boletim que a viagem fluvial de ida e volta durou exatas $3,4\\text{ horas}$. Ao converter esse tempo decimal para horas e minutos do sistema sexagesimal, obtém-se:',
        options: [
          '3 horas e 24 minutos.',
          '3 horas e 40 minutos.',
          '3 horas e 4 minutos.',
          '204 minutos ou 3 horas e 44 minutos.'
        ],
        ans: 0,
        difficulty: 'Fácil',
        questionType: 'Caso Prático ACE',
        comment: 'Gabarito: A. No sistema sexagesimal, a hora possui 60 minutos. A parte inteira é de 3 horas. A fração decimal de 0,4 hora deve ser multiplicada por 60 para obter os minutos correspondentes: 0,4 × 60 = 24 minutos. Portanto, 3,4 horas = 3 horas e 24 minutos. Erro da B: erro comum de interpretar a casa decimal 0,4 como 40 minutos (confundindo base 10 com base 60); erro da C: lê diretamente o algarismo 4 como 4 minutos; erro da D: 3,4 h equivale a 204 minutos, mas 204 min são 3 h e 24 min, e não 3 h e 44 min.'
      },
      {
        q: '[Autoral] Em uma planta cartográfica de reconhecimento geográfico do município desenhada na escala $1:2.000$, a distância linear medida entre duas residências é de $3\\text{ cm}$. A distância real correspondente no terreno é de:',
        options: [
          '60 metros.',
          '6 metros.',
          '600 metros.',
          '6.000 metros.'
        ],
        ans: 0,
        difficulty: 'Fácil',
        questionType: 'Cálculo',
        comment: 'Gabarito: A. Pela definição de escala linear E = d / D, onde 1 : 2.000 significa que cada 1 cm no mapa representa 2.000 cm no terreno. Para 3 cm: D = 3 × 2.000 = 6.000 cm. Como 1 metro tem 100 cm, divide-se por 100: 6.000 ÷ 100 = 60 metros. Erro da B: divide por 1.000 por engano; erro da C: divide por 10; erro da D: esquece de converter centímetros em metros, mantendo o valor numérico em centímetros.'
      }
    ],
    flashcards: [
      [
        'Qual a relação exata entre volume em metros cúbicos e capacidade em litros?',
        '1 metro cúbico (m³) equivale a exatamente 1.000 litros (1 m³ = 1.000 L; 1 dm³ = 1 L; 1 cm³ = 1 mL).'
      ],
      [
        'Como calcular a capacidade de um depósito cilíndrico de diâmetro D e altura h?',
        'Calcula-se o raio r = D / 2 e aplica-se a fórmula do volume: V = π · r² · h = π · (D/2)² · h. Multiplica-se o resultado em m³ por 1.000 para obter litros.'
      ],
      [
        'Quanto vale a concentração de 1 ppm de larvicida em gramas por metro cúbico?',
        '1 ppm (uma parte por milhão) equivale a 1 mg por litro, o que corresponde exatamente a 1 g por metro cúbico (1 g/m³).'
      ]
    ],
    references: [
      {
        title: 'IMPA/OBMEP — Geometria Espacial: Volumes e Medidas',
        url: 'https://portaldaobmep.impa.br/index.php/modulo/ver?modulo=39&tipo=7',
        section: 'Cálculo de áreas, volumes de prismas e cilindros, e unidades de capacidade.'
      },
      {
        title: 'Ministério da Saúde — Diretrizes Nacionais para Prevenção e Controle de Arboviroses',
        url: 'https://bvsms.saude.gov.br/bvs/publicacoes/diretrizes_nacionais_prevencao_controle_dengue.pdf',
        section: 'Tratamento químico focal, cubagem de criadouros e cálculo de dosagem de larvicidas.'
      }
    ]
  },
  {
    id: 'rlm_4',
    title: 'Equações de 1º Grau, Sistemas Lineares, Função Afim e Médias',
    theory: String.raw`### 1. Equações do 1º Grau e Modelagem Algébrica
Uma equação de 1º grau expressa uma igualdade condicionada à determinação de uma incógnita: $ax + b = c$ ($a \neq 0$).
- **Propriedades fundamentais de equivalência**:
  * Adicionar ou subtrair uma mesma quantidade a ambos os membros preserva a igualdade;
  * Multiplicar ou dividir ambos os membros por um número não nulo preserva a igualdade.
- **Tradução verbal para linguagem algébrica**:
  * "O dobro de um número aumentado de 6": $2x + 6$;
  * "O dobro da soma de um número com 6": $2(x + 6) = 2x + 12$;
  * "A terça parte de $x$ excede 4 em 10 unidades": $\frac{x}{3} - 4 = 10 \implies \frac{x}{3} = 14 \implies x = 42$.

### 2. Sistemas Lineares $2 \times 2$ e Classificação Geométrica
Um sistema linear de duas equações e duas incógnitas modela situações com duas restrições simultâneas:
$$\begin{cases} a_1 x + b_1 y = c_1 \\ a_2 x + b_2 y = c_2 \end{cases}$$
- **Métodos de Resolução**: Adição (multiplicar uma equação para anular uma incógnita ao somar) ou Substituição (isolar uma incógnita e substituir na outra).
- **Classificação Geométrica das Retas**:
  1. **Sistema Possível e Determinado (SPD)**: possui solução única $(x, y)$. As retas são concorrentes: $\frac{a_1}{a_2} \neq \frac{b_1}{b_2}$.
  2. **Sistema Possível e Indeterminado (SPI)**: possui infinitas soluções. As retas são coincidentes: $\frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2}$.
  3. **Sistema Impossível (SI)**: não possui nenhuma solução real. As retas são paralelas distintas: $\frac{a_1}{a_2} = \frac{b_1}{b_2} \neq \frac{c_1}{c_2}$.

### 3. Função do 1º Grau (Afim) e Proporcionalidade Estrita
A função afim é definida por $f(x) = ax + b$, com $a, b \in \mathbb{R}$ e $a \neq 0$:
- **Coeficiente angular ($a$)**: mede a taxa de variação ou declividade da reta ($a > 0 \implies$ crescente; $a < 0 \implies$ decrescente);
- **Coeficiente linear ($b$)**: termo independente, correspondente ao valor inicial ou intercepto no eixo das ordenadas ($f(0) = b$);
- **Raiz ou Zero da Função**: valor de $x$ tal que $f(x) = 0 \implies ax + b = 0 \implies x = -\frac{b}{a}$.
- **Distinção Crítica**: a função afim só é **diretamente proporcional** se $b = 0$ ($f(x) = ax$, reta que passa pela origem $(0, 0)$). Quando há uma parcela fixa ($b \neq 0$), a função é afim, mas **NÃO** é diretamente proporcional.

### 4. Médias: Aritmética Simples e Ponderada
- **Média Aritmética Simples ($\bar{x}$)**: soma dos valores dividida pelo número de observações:
  $$\bar{x} = \frac{\sum_{i=1}^{n} x_i}{n}$$
- **Média Aritmética Ponderada ($\bar{x}_p$)**: cada valor $x_i$ é multiplicado pelo seu respectivo peso $p_i$, e divide-se a soma dos produtos pela **soma dos pesos**:
  $$\bar{x}_p = \frac{p_1 x_1 + p_2 x_2 + \dots + p_k x_k}{p_1 + p_2 + \dots + p_k}$$
  *Alerta clássico de prova*: o divisor da média ponderada é a **soma de todos os pesos**, e jamais a quantidade de notas ou parcelas somadas.
- **Média de Grupos Desiguais**: ao unir duas turmas ou equipes com tamanhos distintos $n_1$ e $n_2$ e médias $\bar{x}_1$ e $\bar{x}_2$, a média global é a média ponderada pelos tamanhos dos grupos:
  $$\bar{x}_{\text{global}} = \frac{n_1 \bar{x}_1 + n_2 \bar{x}_2}{n_1 + n_2}$$`,
    summary: String.raw`Resolva equações por equivalência. Sistemas 2x2: SPD (retas concorrentes), SPI (coincidentes) e SI (paralelas). Função afim tem parcela fixa; só é proporcional se b = 0. Média ponderada divide pela soma dos pesos.

| Tópico Algébrico | Equação / Fórmula | Aplicação Rápida | Armadilha de Prova |
| --- | --- | --- | --- |
| **Modelagem de 1º Grau** | $ax + b = c \implies x = \frac{c - b}{a}$ | *"O dobro de $(x+4)$"* é $2(x+4) = 2x+8$. | Esquecer de distribuir parênteses ao montar a equação. |
| **Sistemas Lineares $2 \times 2$** | $\begin{cases} x + y = T \\ a x + b y = S \end{cases}$ | Isolar uma incógnita e substituir na outra para achar o par $(x,y)$. | Conferir a solução encontrada em **ambas** as equações do enunciado. |
| **Função Afim ($f(x) = ax + b$)** | Taxa de variação $a$; valor fixo $b$; raiz $x = -b/a$. | $C(x) = 1.500 + 40x \implies C(50) = 1.500 + 2.000 = 3.500$. | Achar que toda função afim é proporcional (só é proporcional se $b = 0$). |
| **Média Ponderada** | $\bar{x}_p = \frac{\sum p_i x_i}{\sum p_i}$ | Notas 8, 7 e 9 com pesos 3, 2 e 5: $\frac{24+14+45}{10} = 8,3$. | Dividir pela quantidade de disciplinas (3) em vez da soma dos pesos (10). |`,
    questions: [
      {
        q: '[Autoral] Em um sistema de equações lineares $2 \\times 2$, uma equipe de ACE registrou que $x + y = 20$ e $x + 3y = 44$, onde $x$ representa o número de visitas domiciliares na zona norte e $y$ o número de visitas na zona sul. Qual é o valor de $y$?',
        options: [
          '12 visitas.',
          '8 visitas.',
          '10 visitas.',
          '24 visitas.'
        ],
        ans: 0,
        difficulty: 'Fácil',
        questionType: 'Cálculo',
        comment: 'Gabarito: A. Subtraindo a primeira equação da segunda: (x + 3y) - (x + y) = 44 - 20 => 2y = 24 => y = 12 (e x = 20 - 12 = 8). Erro da B: 8 é o valor da incógnita x (visitas na zona norte); erro da C: 10 é a média simples de 20; erro da D: 24 é o valor de 2y antes da divisão por 2.'
      },
      {
        q: '[Autoral] Em um mutirão de combate à dengue, foram vistoriados 50 imóveis entre residências térreas (cada uma possuindo 2 caixas-d\'água) e pequenos comércios (cada um possuindo 5 caixas-d\'água), totalizando 136 caixas-d\'água inspecionadas. Quantas residências térreas foram vistoriadas?',
        options: [
          '38 residências térreas.',
          '12 residências térreas.',
          '25 residências térreas.',
          '40 residências térreas.'
        ],
        ans: 0,
        difficulty: 'Intermediário',
        questionType: 'Caso Prático ACE',
        comment: 'Gabarito: A. Seja R o número de residências e C o de comércios. Monta-se o sistema: 1) R + C = 50 => C = 50 - R; 2) 2R + 5C = 136. Substituindo C: 2R + 5(50 - R) = 136 => 2R + 250 - 5R = 136 => 250 - 136 = 3R => 3R = 114 => R = 38 residências. Erro da B: 12 é o número de comércios (50 - 38); erro da C: 25 divide 50 por 2 sem considerar o número de caixas; erro da D: 40 residências daria 2(40) + 5(10) = 130 caixas, divergindo de 136.'
      },
      {
        q: '[Autoral] Um candidato ao concurso de ACE obteve nota 8,0 na prova de Conhecimentos Específicos (peso 3), nota 7,0 em Língua Portuguesa (peso 2) e nota 9,0 em Noções de RLM (peso 5). Qual foi a média aritmética ponderada obtida pelo candidato nessas três disciplinas?',
        options: [
          '8,3.',
          '8,0.',
          '7,8.',
          '8,8.'
        ],
        ans: 0,
        difficulty: 'Fácil',
        questionType: 'Cálculo',
        comment: 'Gabarito: A. A média ponderada é calculada dividindo a soma dos produtos nota × peso pela soma dos pesos: [(8,0 × 3) + (7,0 × 2) + (9,0 × 5)] ÷ (3 + 2 + 5) = (24 + 14 + 45) ÷ 10 = 83 ÷ 10 = 8,3. Erro da B: 8,0 é a média aritmética simples (8 + 7 + 9) ÷ 3 = 8,0, que desconsidera os diferentes pesos das provas; erro da C: calcula a média com pesos invertidos; erro da D: atribui peso maior apenas à maior nota.'
      },
      {
        q: '[Autoral] O custo total de manutenção mensal de uma frota de motocicletas da vigilância ambiental é modelado por uma função afim $C(x) = 1500 + 40x$, onde $x$ representa o número de vistorias rurais realizadas no mês e $C(x)$ é o custo em reais. A respeito dessa função, assinale a afirmativa CORRETA:',
        options: [
          'A função é afim, possui valor fixo inicial de R$ 1.500,00 e taxa de variação de R$ 40,00 por vistoria, não sendo estritamente proporcional porque C(0) ≠ 0.',
          'A função é diretamente proporcional porque o custo aumenta quando x aumenta.',
          'Para realizar 50 vistorias rurais, o custo total será de exatamente R$ 2.000,00.',
          'A raiz ou zero dessa função é x = 40 vistorias.'
        ],
        ans: 0,
        difficulty: 'Intermediário',
        questionType: 'Conceitual',
        comment: 'Gabarito: A. Toda função da forma f(x) = ax + b com b ≠ 0 é dita afim, possuindo uma parcela constante (b = 1.500) e uma taxa linear (a = 40). Ela NÃO é diretamente proporcional, pois na proporcionalidade direta a reta deve passar pela origem (b = 0, C(0) = 0). Erro da B: o simples fato de crescer não garante proporcionalidade direta (duplicar x não duplica C(x)); erro da C: para x = 50, C(50) = 1500 + 40(50) = 1500 + 2000 = R$ 3.500,00 (e não R$ 2.000,00); erro da D: a raiz seria 1500 + 40x = 0 => x = -1500/40 = -37,5.'
      },
      {
        q: '[Autoral] Duas equipes de campo realizaram vistorias em áreas distintas: a Equipe Alfa (com 10 agentes) apresentou uma média de 6 focos identificados por agente, enquanto a Equipe Bravo (com 20 agentes) apresentou uma média de 9 focos identificados por agente. A média conjunta de focos por agente considerando todos os 30 agentes das duas equipes é igual a:',
        options: [
          '8 focos por agente.',
          '7,5 focos por agente.',
          '7 focos por agente.',
          '8,5 focos por agente.'
        ],
        ans: 0,
        difficulty: 'Intermediário',
        questionType: 'Cálculo',
        comment: 'Gabarito: A. Trata-se de média ponderada pelos tamanhos dos grupos: Total de focos de Alfa = 10 × 6 = 60 focos; Total de focos de Bravo = 20 × 9 = 180 focos. Total de focos = 60 + 180 = 240 focos. Dividindo pelo total de 30 agentes: 240 ÷ 30 = 8 focos por agente. Erro da B: 7,5 resulta da média aritmética simples entre as médias (6 + 9) ÷ 2 = 7,5, desconsiderando que a equipe Bravo tem o dobro do tamanho da equipe Alfa; erro da C e D: aproximações incorretas sem ponderação.'
      }
    ],
    flashcards: [
      [
        'Qual condição geométrica caracteriza um Sistema Linear 2×2 Possível e Determinado (SPD)?',
        'As retas são concorrentes em um único ponto, ocorrendo quando as razões dos coeficientes angulares são diferentes: a₁/a₂ ≠ b₁/b₂.'
      ],
      [
        'Por que uma função afim com parcela fixa f(x) = ax + b (com b ≠ 0) não é diretamente proporcional?',
        'Porque a proporcionalidade direta exige que a razão f(x)/x permaneça constante e a reta passe pela origem (f(0) = 0).'
      ],
      [
        'Qual é o divisor no cálculo de uma média aritmética ponderada?',
        'O divisor é sempre a soma de todos os pesos considerados (p₁ + p₂ + ... + pₙ), e nunca a quantidade de notas.'
      ]
    ],
    references: [
      {
        title: 'IMPA/OBMEP — Equações, Sistemas e Função Afim',
        url: 'https://portaldaobmep.impa.br/index.php/modulo/ver?modulo=12&tipo=7',
        section: 'Equações de primeiro grau, sistemas lineares 2x2, gráfico da função afim e médias.'
      }
    ]
  },
  {
    id: 'rlm_5',
    title: 'Lógica Proposicional: Conectivos, Tabela-Verdade, Negações, Equivalências e Quantificadores',
    theory: String.raw`### 1. Proposições Lógicas e Princípios Fundamentais
Na lógica bivalente clássica, uma **proposição** é uma sentença declarativa fechada que admite exatamente um de dois valores lógicos: **Verdadeiro (V)** ou **Falso (F)**.
- **Princípios Fundamentais da Lógica**:
  1. *Identidade*: uma proposição verdadeira é verdadeira; uma proposição falsa é falsa ($p \iff p$);
  2. *Não Contradição*: uma proposição não pode ser simultaneamente verdadeira e falsa ($\neg(p \land \neg p)$);
  3. *Terceiro Excluído*: toda proposição ou é verdadeira ou é falsa, não havendo um terceiro valor lógico intermediário ($p \lor \neg p$).
- **Sentenças que NÃO são proposições**: frases interrogativas ("O imóvel foi vistoriado?"), exclamativas ("Que calor!"), imperativas ("Aplique o larvicida!") e sentenças abertas com variáveis indefinidas ("$x + 5 = 12$").

### 2. Conectivos Lógicos e Tabela-Verdade ($2^n$ Linhas)
Para $n$ proposições simples distintas, a tabela-verdade possui exatamente $2^n$ linhas:
- **Conjunção ($p \land q$, "e")**: verdadeira unicamente quando **ambas** são verdadeiras.
- **Disjunção Inclusiva ($p \lor q$, "ou")**: falsa unicamente quando **ambas** são falsas.
- **Disjunção Exclusiva ($p \underline{\lor} q$, "ou... ou")**: verdadeira quando as proposições têm valores lógicos **diferentes**.
- **Condicional ($p \to q$, "se... então")**: falsa em um **único caso**: quando o antecedente $p$ é Verdadeiro e o consequente $q$ é Falso ($V \to F = F$, "Vera Fischer é Falsa").
- **Bicondicional ($p \leftrightarrow q$, "se e somente se")**: verdadeira quando ambas têm o **mesmo valor lógico** ($V \leftrightarrow V = V$ e $F \leftrightarrow F = V$).

### 3. Tautologia, Contradição e Contingência
- **Tautologia**: proposição composta cuja tabela-verdade resulta exclusivamente em **Verdadeiro (V)** em todas as linhas (ex.: $p \lor \neg p$).
- **Contradição**: proposição composta cuja tabela-verdade resulta exclusivamente em **Falso (F)** em todas as linhas (ex.: $p \land \neg p$).
- **Contingência**: proposição composta que apresenta pelo menos um valor V e pelo menos um valor F em sua tabela-verdade.

### 4. Negações Fundamentais: Leis de De Morgan e Regra do MANÉ
- **1ª Lei de De Morgan (Negação da Conjunção)**:
  $$\neg(p \land q) \equiv \neg p \lor \neg q$$
  *(Nega a primeira, nega a segunda e troca o conectivo E pelo OU).*
- **2ª Lei de De Morgan (Negação da Disjunção)**:
  $$\neg(p \lor q) \equiv \neg p \land \neg q$$
  *(Nega a primeira, nega a segunda e troca o conectivo OU pelo E).*
- **Negação da Condicional (Regra do MANÉ)**:
  $$\neg(p \to q) \equiv p \land \neg q$$
  *(**MA**ntém a primeira proposição **E** **NE**ga a segunda proposição; a negação de uma condicional NUNCA gera outra condicional!).*

### 5. Equivalências Lógicas da Condicional ($p \to q$)
A proposição condicional $p \to q$ admite duas equivalências universais fundamentais:
1. **Contrapositiva**:
   $$p \to q \equiv \neg q \to \neg p$$
   *(Inverte-se a ordem dos termos e negam-se ambos, mantendo a estrutura condicional).*
2. **Forma Disjuntiva (Regra do NEYMAR)**:
   $$p \to q \equiv \neg p \lor q$$
   *(**NE**ga a primeira proposição **OU** **MA**ntém a segunda proposição).*

### 6. Proposições Categóricas e Negação de Quantificadores
- **Todo $A$ é $B$** (Universal Afirmativa): nega-se com o quantificador existencial negado (**PEA + NÃO**): *"Pelo menos um / Existe / Algum $A$ que NÃO é $B$"*.
  * *Pegadinha crucial da banca IBGP*: **NUNCA** negue "Todo $A$ é $B$" com "Nenhum $A$ é $B$". Se metade dos agentes foi vacinada, tanto a frase "Todos foram vacinados" quanto "Nenhum foi vacinado" são falsas ao mesmo tempo.
- **Nenhum $A$ é $B$** (Universal Negativa): nega-se com *"Pelo menos um / Existe / Algum $A$ é $B$"*.
- **Algum $A$ é $B$** (Existencial Afirmativa): nega-se com *"Nenhum $A$ é $B$"* (ou *"Todo $A$ não é $B$"*).`,
    summary: String.raw`Condicional p→q só é falsa em V→F. Negação da condicional é MANÉ (p ∧ ¬q). Equivalências: contrapositiva (¬q→¬p) e disjuntiva (¬p ∨ q). Negação de Todo é Algum... não (PEA+NÃO), nunca Nenhum.

| Operação Lógica | Expressão Original | Negação ou Equivalência Lógica | Mnemônico Prático |
| --- | --- | --- | --- |
| **Negação da Conjunção (De Morgan)** | $\neg(p \land q)$ — *"Não é verdade que P e Q"* | $\neg p \lor \neg q$ — *"Não P **ou** não Q"* | Nega as duas e troca **E** por **OU**. |
| **Negação da Disjunção (De Morgan)** | $\neg(p \lor q)$ — *"Não é verdade que P ou Q"* | $\neg p \land \neg q$ — *"Não P **e** não Q"* | Nega as duas e troca **OU** por **E**. |
| **Negação da Condicional** | $\neg(p \to q)$ — *"Não é verdade que Se P então Q"* | $p \land \neg q$ — *"P **e** não Q"* | **MANÉ**: **MA**ntém a 1ª **E** **NE**ga a 2ª. |
| **Equivalência Contrapositiva** | $p \to q$ — *"Se chove, a calha enche"* | $\neg q \to \neg p$ — *"Se a calha não enche, não chove"* | Inverte os dois termos e nega ambos. |
| **Equivalência Disjuntiva** | $p \to q$ — *"Se chove, a calha enche"* | $\neg p \lor q$ — *"Não chove **ou** a calha enche"* | **NEYMAR**: **NE**ga a 1ª **OU** **MA**ntém a 2ª. |
| **Negação de Quantificadores** | *"Todo agente foi vacinado"* | *"Pelo menos um agente **não** foi vacinado"* | **PEA + NÃO** (Pelo menos um, Existe, Algum). |`,
    questions: [
      {
        q: '[Autoral] Qual é a negação lógica da proposição condicional: “Se o imóvel está fechado, então o agente não realiza a inspeção”?',
        options: [
          'O imóvel está fechado e o agente realiza a inspeção.',
          'Se o imóvel não está fechado, então o agente realiza a inspeção.',
          'O imóvel não está fechado ou o agente não realiza a inspeção.',
          'Se o agente realiza a inspeção, então o imóvel não está fechado.'
        ],
        ans: 0,
        difficulty: 'Fácil',
        questionType: 'Lógica Proposicional',
        comment: 'Gabarito: A. Pela regra lógica de negação da condicional (regra do MANÉ): ~(p -> q) ≡ p ∧ ~q (Mantém a primeira proposição E Nega a segunda). Sendo p = "o imóvel está fechado" e q = "o agente não realiza a inspeção", sua negação lógica é: "O imóvel está fechado E o agente realiza a inspeção" (p ∧ ~q). Erro da B: nega o antecedente e o consequente mantendo a condicional (~p -> ~q, que é a inversa); erro da C: disjunção que não corresponde à negação; erro da D: contrapositiva ou recíproca na forma condicional.'
      },
      {
        q: '[Autoral] Uma proposição logicamente equivalente à condicional “Se o reservatório foi tratado com larvicida, então não há proliferação de mosquitos” é:',
        options: [
          'Se há proliferação de mosquitos, então o reservatório não foi tratado com larvicida.',
          'Se o reservatório não foi tratado com larvicida, então há proliferação de mosquitos.',
          'O reservatório foi tratado com larvicida e há proliferação de mosquitos.',
          'Se não há proliferação de mosquitos, então o reservatório foi tratado com larvicida.'
        ],
        ans: 0,
        difficulty: 'Intermediário',
        questionType: 'Lógica Proposicional',
        comment: 'Gabarito: A. Pela regra da contrapositiva, a condicional p -> q é logicamente equivalente a ~q -> ~p (inverte-se a ordem das proposições e negam-se ambas). Negando o consequente ("há proliferação de mosquitos") e o antecedente ("o reservatório não foi tratado"), obtemos: "Se há proliferação de mosquitos, então o reservatório não foi tratado com larvicida". Erro da B: nega as proposições sem inverter a ordem (inversa); erro da C: conjunção correspondente à negação (p ∧ ~q); erro da D: inverte a ordem sem negar (recíproca).'
      },
      {
        q: '[Autoral] A negação lógica da proposição categórica “Todos os agentes de combate às endemias foram vacinados contra a febre amarela” é:',
        options: [
          'Pelo menos um agente de combate às endemias não foi vacinado contra a febre amarela.',
          'Nenhum agente de combate às endemias foi vacinado contra a febre amarela.',
          'Todos os agentes de combate às endemias não foram vacinados contra a febre amarela.',
          'Exatamente um agente de combate às endemias foi vacinado contra a febre amarela.'
        ],
        ans: 0,
        difficulty: 'Fácil',
        questionType: 'Lógica Proposicional',
        comment: 'Gabarito: A. A negação de uma proposição universal afirmativa ("Todo A é B") é a proposição existencial com negação ("Existe pelo menos um / Algum A que NÃO é B", regra do PEA + NÃO). Erro da B: "Nenhum" é o erro mais clássico da banca IBGP; "Nenhum" é a proposição contrária, não a contraditória (se metade dos agentes foi vacinada, tanto "Todos" quanto "Nenhum" são falsos simultaneamente); erro da C: equivale a nenhum; erro da D: restringe arbitrariamente a exatamente um.'
      },
      {
        q: '[Autoral] Pelas Leis de De Morgan, a negação lógica da proposição composta “O agente realizou a coleta de larvas OU o supervisor lavrou a notificação” é:',
        options: [
          'O agente não realizou a coleta de larvas E o supervisor não lavrou a notificação.',
          'O agente não realizou a coleta de larvas OU o supervisor não lavrou a notificação.',
          'Se o agente realizou a coleta de larvas, então o supervisor lavrou a notificação.',
          'O agente realizou a coleta de larvas E o supervisor lavrou a notificação.'
        ],
        ans: 0,
        difficulty: 'Fácil',
        questionType: 'Lógica Proposicional',
        comment: 'Gabarito: A. Pela 2ª Lei de De Morgan: ~(p ∨ q) ≡ ~p ∧ ~q. Para negar uma disjunção ("ou"), negam-se ambas as proposições simples componentes e troca-se o conectivo "ou" pelo conectivo "e". Erro da B: nega as proposições simples mas mantém incorretamente o conectivo "ou"; erro da C: converte em condicional; erro da D: troca o conectivo sem negar os termos.'
      },
      {
        q: '[Autoral] Uma proposição composta é classificada como TAUTOLOGIA quando seu valor lógico for:',
        options: [
          'Verdadeiro em todas as linhas possíveis de sua tabela-verdade, independentemente dos valores lógicos das proposições simples que a compõem.',
          'Falso em todas as linhas possíveis de sua tabela-verdade.',
          'Verdadeiro em pelo menos uma linha e falso em pelo menos outra linha de sua tabela-verdade.',
          'Dependente exclusivamente de confirmação pericial empírica em laboratório.'
        ],
        ans: 0,
        difficulty: 'Fácil',
        questionType: 'Conceitual',
        comment: 'Gabarito: A. Tautologia é uma proposição logicamente necessária, cuja coluna final da tabela-verdade contém exclusivamente valores Verdadeiro (V). Se todas as linhas forem Falsas (F), temos uma Contradição. Se houver mistura de V e F, temos uma Contingência. Erro da B: define Contradição; erro da C: define Contingência; erro da D: a lógica proposicional formal independe de validação empírica.'
      }
    ],
    flashcards: [
      [
        'Qual é a regra mnemônica do MANÉ para negar uma condicional (p → q)?',
        'MAntém a primeira proposição E NEga a segunda proposição: ¬(p → q) ≡ p ∧ ¬q.'
      ],
      [
        'Quais são as duas formas logicamente equivalentes à condicional p → q?',
        '1) Contrapositiva: ¬q → ¬p (inverte e nega); 2) Disjuntiva (NEYMAR): ¬p ∨ q (nega a 1ª ou mantém a 2ª).'
      ],
      [
        'Por que a negação de “Todo A é B” nunca é “Nenhum A é B”?',
        'Porque "Nenhum" é a proposição contrária, não a contraditória. Se apenas alguns forem B, ambas as frases são falsas ao mesmo tempo. A negação correta é PEA + NÃO ("Pelo menos um A não é B").'
      ]
    ],
    references: [
      {
        title: 'IMPA/OBMEP — Introdução à Lógica Matemática',
        url: 'https://portaldaobmep.impa.br/index.php/modulo/ver?modulo=48&tipo=7',
        section: 'Proposições, conectivos lógicos, tabelas-verdade, negações e quantificadores.'
      }
    ]
  },
  {
    id: 'rlm_6',
    title: 'Argumentação Lógica, Diagramas de Venn, Conjuntos e Associação Lógica',
    theory: String.raw`### 1. Validade de Argumentos e Regras de Inferência
Um argumento lógico dedutivo é composto por um conjunto de premissas $P_1, P_2, \dots, P_k$ e uma conclusão $C$.
- **Critério de Validade**: um argumento é **válido** se, e somente se, a verdade de suas premissas tornar logicamente impossível a falsidade de sua conclusão (não existe interpretação com premissas todas V e conclusão F).
- **Validade vs Verdade Factual**: a validade é uma propriedade estritamente estrutural/formal do raciocínio, e não do conteúdo factual empírico.
- **Regras de Inferência Válidas**:
  * **Modus Ponens (Afirmação do Antecedente)**: $p \to q, \quad p \quad \vdash \quad q$;
  * **Modus Tollens (Negação do Consequente)**: $p \to q, \quad \neg q \quad \vdash \quad \neg p$;
  * **Silogismo Hipotético**: $p \to q, \quad q \to r \quad \vdash \quad p \to r$;
  * **Silogismo Disjuntivo**: $p \lor q, \quad \neg p \quad \vdash \quad q$.
- **Falácias Formais Recorrentes na Banca IBGP**:
  * *Afirmação do Consequente*: $p \to q, \quad q \quad \not\vdash \quad p$ (concluir $p$ a partir de $q$ é falacioso);
  * *Negação do Antecedente*: $p \to q, \quad \neg p \quad \not\vdash \quad \neg q$ (concluir $\neg q$ a partir de $\neg p$ é falacioso).

### 2. Teoria dos Conjuntos e Diagramas de Venn
- **Pertinência ($\in$) vs Inclusão ($\subset, \subseteq$)**: pertinência vincula elemento a conjunto ($x \in A$); inclusão vincula subconjunto a conjunto ($A \subset B$).
- **Conjunto das Partes ($\mathcal{P}(A)$)**: conjunto formado por todos os subconjuntos de $A$. Para um conjunto finito com $n$ elementos:
  $$n(\mathcal{P}(A)) = 2^n$$
  O total de **subconjuntos próprios** é $2^n - 1$ (exclui o próprio $A$). O conjunto vazio $\emptyset$ é subconjunto de qualquer conjunto ($\emptyset \subseteq A$).
- **Princípio da Inclusão-Exclusão**:
  * *Para dois conjuntos*:
    $$n(A \cup B) = n(A) + n(B) - n(A \cap B)$$
  * *Para três conjuntos*:
    $$n(A \cup B \cup C) = n(A) + n(B) + n(C) - [n(A \cap B) + n(A \cap C) + n(B \cap C)] + n(A \cap B \cap C)$$
  * *Regra de Ouro nos Diagramas de Venn*: inicie sempre o preenchimento dos valores numéricos pela **interseção central tríplice** $n(A \cap B \cap C)$, subtraindo esse valor das interseções duplas adjacentes.

### 3. Problemas de Associação Lógica em Tabelas Cruzadas
Problemas que correlacionam pessoas, cargos, bairros de lotação e escalas de serviço são resolvidos estruturando uma matriz de dupla entrada:
- Preencha cada célula com $O$ (correspondência verdadeira confirmada) ou $X$ (associação proibida eliminada);
- Uma vez preenchido um $O$ em uma célula, elimine com $X$ todas as outras células da mesma linha e da mesma coluna (correspondência biunívoca).

### 4. Problemas de Verdades e Mentiras
Problemas em que personagens fazem declarações e apenas um fala a verdade (ou apenas um mente):
1. Procure identificar duas declarações **mutuamente contraditórias** entre si (se uma afirma $p$ e a outra afirma $\neg p$, exatamente uma é verdadeira e a outra é necessariamente falsa);
2. Teste a hipótese consistente que satisfaz o número exato de verdades exigido pelo enunciado sem gerar contradição.`,
    summary: String.raw`Argumento válido impede premissas V com conclusão F. Modus Ponens e Tollens são válidos; afirmar o consequente é falácia. Conjunto das Partes tem 2ⁿ subconjuntos. Comece diagramas de Venn pela interseção central.

| Regra / Conceito | Estrutura Lógica / Fórmula | Aplicação Prática | Cuidado de Prova |
| --- | --- | --- | --- |
| **Modus Ponens** | $p \to q$ e $p \implies q$. | Se chove, calha enche. Choveu $\implies$ calha encheu. | Não cometer a falácia de afirmar o consequente ($p \to q$ e $q$ **não** garante $p$). |
| **Modus Tollens** | $p \to q$ e $\neg q \implies \neg p$. | Se há foco, há lixo. Não há lixo $\implies$ não há foco. | Não cometer a falácia de negar o antecedente ($p \to q$ e $\neg p$ **não** garante $\neg q$). |
| **Inclusão-Exclusão (2 conjuntos)** | $n(A \cup B) = n(A) + n(B) - n(A \cap B)$ | Subtrair a interseção para não contar as pessoas duas vezes. | Somente $A = n(A) - n(A \cap B)$. |
| **Conjunto das Partes $\mathcal{P}(A)$** | Total de subconjuntos $= 2^n$. | Para $n = 6$ elementos: $2^6 = 64$ subconjuntos. | O conjunto vazio $\emptyset$ sempre integra $\mathcal{P}(A)$. |`,
    questions: [
      {
        q: '[Autoral] Em um grupo de 50 servidores da saúde, 28 realizaram o curso de vigilância de arboviroses, 25 realizaram o curso de controle de roedores e 10 realizaram ambos os cursos. Quantos desses servidores NÃO realizaram nenhum dos dois cursos?',
        options: [
          '7 servidores.',
          '0 servidores.',
          '10 servidores.',
          '17 servidores.'
        ],
        ans: 0,
        difficulty: 'Fácil',
        questionType: 'Cálculo',
        comment: 'Gabarito: A. Pelo Princípio da Inclusão-Exclusão para dois conjuntos: n(A ∪ B) = n(A) + n(B) - n(A ∩ B) = 28 + 25 - 10 = 43 servidores que fizeram pelo menos um dos cursos. O número de servidores que não fizeram nenhum dos dois cursos é o complementar em relação ao total: 50 - 43 = 7 servidores. Erro da B: soma 28 + 25 = 53 e supõe que todos fizeram; erro da C: 10 é o número de servidores que fizeram ambos os cursos; erro da D: calcula 28 - 10 = 18 ou 25 - 10 = 15 sem relacionar com o universo.'
      },
      {
        q: '[Autoral] Considere verdadeiras as premissas: P1: “Se chover forte durante a tarde, então o mutirão de borrifação será adiado”; P2: “O mutirão de borrifação NÃO foi adiado”. Aplicando a regra de inferência válida (Modus Tollens), conclui-se necessariamente que:',
        options: [
          'Não choveu forte durante a tarde.',
          'Choveu forte durante a tarde.',
          'A equipe de borrifação não compareceu ao trabalho.',
          'O mutirão foi transferido para o período noturno.'
        ],
        ans: 0,
        difficulty: 'Intermediário',
        questionType: 'Lógica Proposicional',
        comment: 'Gabarito: A. Pelo Modus Tollens: dadas as premissas p -> q e ~q, conclui-se necessariamente ~p. Como a consequência ("o mutirão foi adiado") não ocorreu (~q), a condição suficiente ("choveu forte") obrigatoriamente não ocorreu (~p). Erro da B: contradiz a validade lógica (se tivesse chovido forte, o mutirão teria sido adiado); erro da C e D: conclusões sem respaldo nas premissas fornecidas.'
      },
      {
        q: '[Autoral] Um kit padrão de inspeção de campo do ACE é composto por um conjunto $A$ com exatamente 6 instrumentos distintos. O número total de subconjuntos possíveis que podem ser formados com esses instrumentos (isto é, o número de elementos do Conjunto das Partes $\\mathcal{P}(A)$) é:',
        options: [
          '64 subconjuntos.',
          '12 subconjuntos.',
          '36 subconjuntos.',
          '32 subconjuntos.'
        ],
        ans: 0,
        difficulty: 'Fácil',
        questionType: 'Cálculo',
        comment: 'Gabarito: A. Para qualquer conjunto finito A com n elementos, o número de subconjuntos de seu Conjunto das Partes é dado por 2ⁿ. Com n = 6 instrumentos: n(P(A)) = 2⁶ = 64 subconjuntos (incluindo o conjunto vazio e o conjunto completo com os 6 instrumentos). Erro da B: multiplica 6 × 2 = 12; erro da C: calcula 6² = 36; erro da D: calcula 2⁵ = 32.'
      },
      {
        q: '[Autoral] O argumento lógico “Todo agente que atua no Baixo Madeira utiliza transporte fluvial; Marcos utiliza transporte fluvial; portanto, Marcos atua no Baixo Madeira” é classificado como:',
        options: [
          'Inválido, pois comete a falácia da afirmação do consequente (o conjunto dos que usam transporte fluvial pode conter outras pessoas além dos agentes do Baixo Madeira).',
          'Válido, pois a premissa universal garante a igualdade de todos os elementos.',
          'Uma tautologia clássica de Modus Ponens.',
          'Verdadeiro exclusivamente no caso em que Marcos é o supervisor da equipe.'
        ],
        ans: 0,
        difficulty: 'Intermediário',
        questionType: 'Diagramas Lógicos',
        comment: 'Gabarito: A. Se o conjunto A (agentes do Baixo Madeira) está contido no conjunto B (usuários de transporte fluvial), pertencer a B não garante pertencer a A (Marcos pode ser um ribeirinho, turista ou comerciante). Trata-se da clássica falácia da afirmação do consequente (p -> q e q não autorizam concluir p). Erro da B: confunde inclusão de conjuntos com identidade; erro da C: Modus Ponens exige afirmar o antecedente (p), e não o consequente (q); erro da D: validade é propriedade formal e independe de fatos empíricos não premissados.'
      },
      {
        q: '[Autoral] Em uma investigação sanitária sobre 3 arboviroses (Dengue, Zika e Chikungunya) em 100 pacientes febris, constatou-se que: 50 tiveram Dengue, 40 tiveram Zika, 30 tiveram Chikungunya; 20 tiveram Dengue e Zika; 15 tiveram Dengue e Chikungunya; 10 tiveram Zika e Chikungunya; e 5 pacientes apresentaram coinfecção simultânea pelas três arboviroses. Quantos desses 100 pacientes NÃO tiveram nenhuma das três doenças?',
        options: [
          '20 pacientes.',
          '15 pacientes.',
          '10 pacientes.',
          '25 pacientes.'
        ],
        ans: 0,
        difficulty: 'Intermediário',
        questionType: 'Caso Prático ACE',
        comment: 'Gabarito: A. Pelo Princípio da Inclusão-Exclusão para 3 conjuntos: n(D ∪ Z ∪ C) = n(D) + n(Z) + n(C) - [n(D ∩ Z) + n(D ∩ C) + n(Z ∩ C)] + n(D ∩ Z ∩ C). Substituindo: n(D ∪ Z ∪ C) = 50 + 40 + 30 - [20 + 15 + 10] + 5 = 120 - 45 + 5 = 80 pacientes com pelo menos uma arbovirose. Portanto, o número de pacientes que não tiveram nenhuma das três é: 100 - 80 = 20 pacientes. Erro da B: esquece de somar a interseção tríplice (+5); erro da C: calcula 100 - 90; erro da D: soma e subtrai as interseções com erros de sinal.'
      }
    ],
    flashcards: [
      [
        'Como refutar formalmente a validade de um argumento dedutivo?',
        'Exibindo um contraexemplo em que todas as premissas sejam simultaneamente verdadeiras e a conclusão seja falsa.'
      ],
      [
        'Qual é a ordem correta para preencher um Diagrama de Venn de três conjuntos?',
        'Começa-se sempre pela interseção tríplice central n(A ∩ B ∩ C), descontando esse valor ao preencher as interseções duplas adjacentes.'
      ],
      [
        'Quantos subconjuntos possui o Conjunto das Partes de um conjunto com n elementos?',
        'Possui exatamente 2ⁿ subconjuntos, incluindo o conjunto vazio e o próprio conjunto original.'
      ]
    ],
    references: [
      {
        title: 'IMPA/OBMEP — Teoria dos Conjuntos e Argumentação Lógica',
        url: 'https://portaldaobmep.impa.br/index.php/modulo/ver?modulo=49&tipo=7',
        section: 'Operações com conjuntos, diagramas de Venn, argumentos lógicos e dedução.'
      }
    ]
  },
  {
    id: 'rlm_7',
    title: 'Análise Combinatória: Princípio Multiplicativo, Arranjos, Permutações e Combinações',
    theory: String.raw`### 1. Princípio Fundamental da Contagem (PFC)
O Princípio Multiplicativo estabelece que, se uma decisão $D_1$ puder ser tomada de $n_1$ maneiras distintas e, em seguida, uma decisão independente $D_2$ puder ser tomada de $n_2$ maneiras, o número total de modos de tomar ambas as decisões consecutivas é:
$$\text{Total} = n_1 \times n_2$$
- **Regra de ouro**: comece sempre a contagem pela posição ou decisão que possui a **maior restrição** imposta pelo enunciado (ex.: dígitos distintos, exigência de número par, posições fixadas).

### 2. Árvore de Decisão Pedagógica da Análise Combinatória
Para saber exatamente qual fórmula combinatória aplicar na prova da banca IBGP, responda a duas perguntas-chave:
1. **Pergunta 1**: O problema utiliza **TODOS** os $n$ elementos disponíveis para formar a sequência?
   - **SIM** $\implies$ **Permutação**:
     * *Permutação Simples*: todos os $n$ elementos são distintos:
       $$P_n = n! = n \times (n-1) \times \dots \times 1$$
     * *Permutação com Repetição*: há elementos repetidos $a$ vezes, $b$ vezes:
       $$P_n^{a, b} = \frac{n!}{a! \cdot b!}$$
       *Exemplo*: Anagramas de DENGUE (6 letras, com 2 'E'): $P_6^{(2)} = \frac{6!}{2!} = \frac{720}{2} = 360$.
     * *Permutação Circular*: disposição em círculo fechado:
       $$P_c(n) = (n-1)!$$
   - **NÃO** $\implies$ O problema seleciona um subgrupo de $p$ elementos dentre os $n$ disponíveis ($p < n$). Prossiga para a Pergunta 2.
2. **Pergunta 2**: A **ORDEM** em que os elementos são escolhidos altera o agrupamento formado?
   - **SIM** (a ordem importa) $\implies$ **Arranjo Simples**:
     $$A_{n, p} = \frac{n!}{(n-p)!} = n \times (n-1) \times \dots \times (n-p+1)$$
     *Gatilhos*: cargos distintos com hierarquia (coordenador e relator), códigos de senha, pódio de premiação, placas de veículos.
   - **NÃO** (a ordem não importa) $\implies$ **Combinação Simples**:
     $$C_{n, p} = \frac{n!}{p!(n-p)!}$$
     *Gatilhos*: duplas ou equipes de campo de agentes sem cargos distintos, comissões de trabalho, sorteios de lotes, escolha de amostras.

### 3. Técnicas Especiais: Método do Complementar e Método dos Blocos
- **Método do Complementar ("Pelo Menos Um")**:
  $$\text{Casos Favoráveis com Pelo Menos Um} = \text{Total Geral Sem Restrições} - \text{Casos Sem Nenhum (Proibidos)}$$
  *Exemplo*: formar comissão de 3 agentes entre 4 veteranos e 3 novatos com pelo menos 1 veterano:
  $$\text{Total} = C_{7, 3} = 35; \quad \text{Só novatos} = C_{3, 3} = 1 \implies 35 - 1 = 34\text{ comissões}.$$
- **Método dos Blocos (Elementos que Devem Ficar Juntos)**: agrupe os elementos que devem permanecer juntos como se fossem um único elemento individual (bloco), calcule as permutações externas do bloco com os demais elementos e multiplique pelas permutações internas dos elementos dentro do próprio bloco.
- **Convenção do Fatorial de Zero**: $0! = 1$, indispensável para manter a consistência matemática das fórmulas combinatórias quando $p = n$ ou $p = 0$.`,
    summary: String.raw`Ordem importa = Arranjo (cargos, senhas); Ordem não importa = Combinação (comissões, equipes). Usa todos = Permutação (anagramas, filas). Pelo menos um resolve-se por Total menos Nenhum.

| Agrupamento Combinatório | A Ordem Importa? | Fórmula | Gatilho Típico da Banca IBGP |
| --- | --- | --- | --- |
| **Permutação Simples ($P_n$)** | **SIM** (usa todos os $n$). | $P_n = n!$ | Anagramas de palavras sem letras repetidas; fila de servidores. |
| **Permutação com Repetição ($P_n^{a,b}$)** | **SIM** (usa todos os $n$). | $P_n^{a,b} = \frac{n!}{a! \cdot b!}$ | Anagramas de palavras com letras repetidas (ex.: *DENGUE* com dois E). |
| **Arranjo Simples ($A_{n,p}$)** | **SIM** (subgrupo $p < n$). | $A_{n,p} = \frac{n!}{(n-p)!}$ | Escolha para **cargos distintos** (Coordenador e Relator); senhas. |
| **Combinação Simples ($C_{n,p}$)** | **NÃO** (subgrupo $p < n$). | $C_{n,p} = \frac{n!}{p!(n-p)!}$ | Escolha de **duplas ou trios de campo** sem distinção de função. |
| **Método do Complementar** | Depende do caso base | $\text{Total} - \text{Nenhum}$ | Questões com a expressão **"pelo menos um"** ou **"ao menos um"**. |`,
    questions: [
      {
        q: '[Autoral] Entre 5 agentes de combate às endemias disponíveis em um plantão, de quantas maneiras distintas pode-se formar uma dupla de campo sem distinção de cargos ou funções entre eles?',
        options: [
          '10 duplas.',
          '20 duplas.',
          '5 duplas.',
          '25 duplas.'
        ],
        ans: 0,
        difficulty: 'Fácil',
        questionType: 'Cálculo',
        comment: 'Gabarito: A. Como a ordem de escolha dos integrantes não altera a dupla de campo (a dupla formada por Ana e Bruno é rigorosamente a mesma dupla formada por Bruno e Ana), trata-se de uma Combinação Simples de 5 elementos tomados 2 a 2: C(5, 2) = (5 × 4) ÷ (2 × 1) = 20 ÷ 2 = 10 duplas. Erro da B: calcula o Arranjo A(5, 2) = 5 × 4 = 20, que consideraria as duplas (Ana, Bruno) e (Bruno, Ana) como duas duplas distintas; erro da C: número de agentes isolados; erro da D: admite repetição do mesmo agente na dupla (5 × 5).'
      },
      {
        q: '[Autoral] Em uma unidade de vigilância, 6 agentes precisam ser distribuídos para ocupar duas funções específicas e distintas: 1 Coordenador de Campo e 1 Operador de Termonebulizador (fumacê). De quantas maneiras diferentes essas duas funções podem ser preenchidas?',
        options: [
          '30 maneiras distintas.',
          '15 maneiras distintas.',
          '36 maneiras distintas.',
          '12 maneiras distintas.'
        ],
        ans: 0,
        difficulty: 'Intermediário',
        questionType: 'Cálculo',
        comment: 'Gabarito: A. Como as duas funções são distintas e hierarquizadas (Coordenador ≠ Operador), a ordem de escolha altera o resultado. Trata-se de um Arranjo Simples de 6 elementos tomados 2 a 2: A(6, 2) = 6 × 5 = 30 maneiras (pelo PFC: 6 opções para o 1º cargo × 5 para o 2º cargo). Erro da B: 15 resulta de dividir por 2! (Combinação Simples), que só seria aplicável se as funções fossem idênticas; erro da C: admite a mesma pessoa ocupando os dois cargos (6 × 6); erro da D: soma 6 + 6.'
      },
      {
        q: '[Autoral] Quantos anagramas distintos podem ser formados com todas as letras da palavra DENGUE (que possui 6 letras com a repetição da letra E)?',
        options: [
          '360 anagramas.',
          '720 anagramas.',
          '120 anagramas.',
          '36 anagramas.'
        ],
        ans: 0,
        difficulty: 'Intermediário',
        questionType: 'Cálculo',
        comment: 'Gabarito: A. A palavra DENGUE possui 6 letras no total (D, E, N, G, U, E), com a letra E repetida 2 vezes. Aplica-se a fórmula da Permutação com Repetição: P₆^(2) = 6! ÷ 2! = (6 × 5 × 4 × 3 × 2 × 1) ÷ 2 = 720 ÷ 2 = 360 anagramas distintos. Erro da B: calcula 6! = 720 (Permutação Simples), sem descontar a repetição da letra E; erro da C: 120 é 5!; erro da D: calcula 6² = 36.'
      },
      {
        q: '[Autoral] Uma equipe sanitária é composta por 4 agentes veteranos e 3 agentes novatos. Deseja-se formar uma comissão de 3 agentes para vistoriar um ponto estratégico, exigindo-se que haja PELO MENOS 1 agente veterano na comissão. Quantas comissões distintas podem ser formadas?',
        options: [
          '34 comissões distintas.',
          '35 comissões distintas.',
          '12 comissões distintas.',
          '30 comissões distintas.'
        ],
        ans: 0,
        difficulty: 'Difícil',
        questionType: 'Caso Prático ACE',
        comment: 'Gabarito: A. Pelo método do complementar: Total geral de comissões possíveis com 3 agentes escolhidos entre os 7 (4 veteranos + 3 novatos): C(7, 3) = (7 × 6 × 5) ÷ (3 × 2 × 1) = 35 comissões. O único caso proibido pela restrição ("ao menos 1 veterano") é a comissão formada exclusivamente por novatos (0 veteranos), ou seja, escolher os 3 novatos entre os 3 existentes: C(3, 3) = 1 comissão. Subtraindo o caso proibido do total: 35 - 1 = 34 comissões válidas. Erro da B: 35 inclui a comissão formada apenas por novatos; erro da C: multiplica 4 × 3; erro da D: contagem parcial incompleta.'
      },
      {
        q: '[Autoral] Quantos códigos de 3 dígitos numéricos distintos (sem repetição de algarismos) podem ser formados utilizando-se exclusivamente os algarismos de 1 a 9?',
        options: [
          '504 códigos.',
          '729 códigos.',
          '1.000 códigos.',
          '84 códigos.'
        ],
        ans: 0,
        difficulty: 'Fácil',
        questionType: 'Cálculo',
        comment: 'Gabarito: A. Pelo Princípio Fundamental da Contagem (PFC): para o primeiro dígito há 9 opções (algarismos 1 a 9); para o segundo dígito há 8 opções (não pode repetir); para o terceiro dígito há 7 opções. Total = 9 × 8 × 7 = 504 códigos distintos (equivalente ao arranjo A(9, 3) = 9! ÷ 6! = 504). Erro da B: 729 = 9³ admite repetição de algarismos; erro da C: 1.000 = 10³ inclui o zero e admite repetições; erro da D: 84 = C(9, 3) divide por 3!, ignorando que códigos são sequências ordenadas onde a ordem dos dígitos altera o código.'
      }
    ],
    flashcards: [
      [
        'Qual pergunta separa um problema de Arranjo de um problema de Combinação?',
        'Inverter a ordem dos elementos escolhidos altera o grupo formado? Se a ordem altera, trata-se de Arranjo (cargos, senhas); se a ordem não altera, trata-se de Combinação (equipes, comissões).'
      ],
      [
        'Como resolver rapidamente problemas combinatórios com a exigência de “pelo menos um”?',
        'Calcula-se o total de agrupamentos irrestritos e subtrai-se os casos proibidos em que nenhum elemento da categoria exigida está presente (Método do Complementar).'
      ],
      [
        'Qual é a fórmula da permutação com elementos repetidos?',
        'P_n^(a,b) = n! / (a! · b!), onde a e b representam as quantidades de vezes que cada elemento se repete.'
      ]
    ],
    references: [
      {
        title: 'IMPA/OBMEP — Métodos de Contagem e Combinatória',
        url: 'https://portaldaobmep.impa.br/index.php/modulo/ver?modulo=15&tipo=7',
        section: 'Princípio fundamental da contagem, permutações, arranjos e combinações simples.'
      }
    ]
  },
  {
    id: 'rlm_8',
    title: 'Probabilidade Clássica e Condicional, Garantias e Raciocínio Sequencial',
    theory: String.raw`### 1. Espaço Amostral Equiprovável e Probabilidade de Laplace
Um experimento aleatório possui um conjunto de todos os resultados possíveis denominado **Espaço Amostral ($\Omega$)**. Um **Evento ($A$)** é qualquer subconjunto de $\Omega$.
- **Definição Clássica de Laplace**: se todos os $n(\Omega)$ resultados elementares forem **equiprováveis** (mesma chance de ocorrência):
  $$P(A) = \frac{n(A)}{n(\Omega)} = \frac{\text{Casos Favoráveis}}{\text{Casos Possíveis}}$$
  O valor da probabilidade sempre satisfaz $0 \le P(A) \le 1$ ($0\% \le P(A) \le 100\%$).
- **Contraexemplo Clássico das Somas de Dados**: no lançamento de dois dados de 6 faces, há $6 \times 6 = 36$ pares ordenados equiprováveis. As somas de 2 a 12 **NÃO** são equiprováveis: a soma 7 possui 6 pares favoráveis ($(1,6), (2,5), (3,4), (4,3), (5,2), (6,1) \implies P = \frac{6}{36} = \frac{1}{6}$), enquanto a soma 2 possui apenas 1 par ($(1,1) \implies P = \frac{1}{36}$). Usar $\frac{1}{11}$ para cada soma é um erro de modelagem.

### 2. Regra da Adição (União) e Evento Complementar
- **Probabilidade da União (Conectivo "OU")**:
  $$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$
- **Eventos Mutuamente Exclusivos**: quando não podem ocorrer juntos ($A \cap B = \emptyset \implies P(A \cap B) = 0$). Logo, $P(A \cup B) = P(A) + P(B)$.
- **Evento Complementar ($\bar{A}$ ou $A^c$)**: a probabilidade de um evento não ocorrer é:
  $$P(\bar{A}) = 1 - P(A)$$

### 3. Probabilidade Condicional e Eventos Independentes
- **Probabilidade Condicional**: probabilidade de ocorrer $A$ sabendo previamente que o evento $B$ ocorreu ($P(B) > 0$):
  $$P(A \mid B) = \frac{P(A \cap B)}{P(B)} = \frac{n(A \cap B)}{n(B)}$$
  *Regra prática de resolução*: a informação condicional restringe imediatamente o espaço amostral ao subconjunto $B$, que se torna o novo denominador.
- **Eventos Independentes**: a ocorrência de $B$ não altera a probabilidade de $A$:
  $$P(A \mid B) = P(A) \iff P(A \cap B) = P(A) \times P(B)$$
  *Atenção*: independência **não** é o mesmo que exclusão mútua. Eventos mutuamente exclusivos com probabilidades não nulas são sempre dependentes.
- **Extrações Sucessivas com e sem Reposição**:
  * *Com reposição*: a composição do espaço amostral é restaurada e os eventos são independentes;
  * *Sem reposição*: o total no denominador diminui em 1 unidade a cada retirada e a composição interna se altera (eventos dependentes).

### 4. Problemas de Garantia e Princípio das Gavetas de Dirichlet (Casa dos Pombos)
Questões da banca IBGP que exigem o número **mínimo** de retiradas às cegas para se ter **certeza absoluta (garantia)** baseiam-se na análise do **pior caso possível** (cenário de maior azar):
- Para garantir $k$ itens da mesma categoria entre $m$ categorias distintas no pior caso:
  $$\text{Retiradas Mínimas} = m \times (k - 1) + 1$$
- Para estoques finitos limitados: supõe-se que o agente retira primeiro todos os elementos de todas as outras categorias que não interessam, até que reste apenas a categoria procurada.

### 5. Raciocínio Sequencial, Calendário e Avanço com Recuo
- **Ciclos de Calendário (Módulo 7)**: os dias da semana repetem-se a cada $T = 7$ dias. Para saber o dia da semana daqui a $N$ dias, divide-se $N$ por 7 e analisa-se o resto $r$:
  * Se resto $r = 0$, o dia será o mesmo; se $r = 1$, avança 1 dia; se $r = 2$, avança 2 dias.
  * *Regra Gregoriana de Anos Bissextos*: um ano é bissexto (366 dias) se for divisível por 4; exceto os anos seculares (terminados em 00), que só são bissextos se forem divisíveis por 400 (ex.: 2000 foi bissexto; 2100 não será).
- **Avanço com Recuo com Teto**: em problemas de subida onde a cada etapa há avanço $S$ e recuo $D$, no instante em que o agente atinge a altura total $H$ ele não escorrega:
  $$\text{Etapas} = \left\lceil \frac{H - S}{S - D} \right\rceil + 1$$
- **Linha Aberta vs Circuito Fechado**:
  * Em linha reta aberta de comprimento $L$ com postes a cada distância $d$: número de elementos $= \frac{L}{d} + 1$;
  * Em circuito fechado (perímetro $L$): número de elementos $= \frac{L}{d}$.`,
    summary: String.raw`Espaço amostral equiprovável permite usar casos favoráveis / possíveis. Sem reposição, o denominador diminui. Condicional restringe o universo. Garantia mínima exige raciocinar pelo pior caso. Calendário usa restos da divisão por 7.

| Tópico de Probabilidade / Sequência | Fórmula / Regra Algébrica | Exemplo Prático | Ponto Crítico de Prova |
| --- | --- | --- | --- |
| **Probabilidade de Laplace** | $P(A) = \frac{n(A)}{n(\Omega)}$ | Tirar ás no baralho de 52 cartas: $\frac{4}{52} = \frac{1}{13}$. | Só vale se os resultados elementares forem **equiprováveis**. |
| **Probabilidade Condicional** | $P(A \mid B) = \frac{n(A \cap B)}{n(B)}$ | Sabendo que a lâmina veio de Calama, chance de ser positiva: $\frac{\text{Positivas de Calama}}{\text{Total de Calama}}$. | Reduzir o denominador diretamente ao subconjunto da condição dada. |
| **Extração Sem Reposição** | $P(A \cap B) = P(A) \times P(B \mid A)$ | 3 azuis e 2 verdes: duas azuis $= \frac{3}{5} \times \frac{2}{4} = \frac{3}{10}$. | Subtrair 1 do total e do grupo específico a cada retirada. |
| **Princípio das Gavetas (Pior Caso)** | Pior caso $= \text{todas as erradas} + \text{meta}$. | Garantir 2 de malária tendo 4 dengue e 3 leishmaniose: retirar $4 + 3 + 2 = 9$. | Certeza matemática absoluta não admite contar com a sorte. |
| **Dias da Semana e Calendário** | $N = 7q + r$ (olhar o resto $r$). | Daqui a 30 dias: $30 = 7 \times 4 + 2 \implies$ avançar 2 dias a partir de hoje. | Diferenciar *"daqui a N dias"* de contagem inclusiva com o dia inicial. |`,
    questions: [
      {
        q: '[Autoral] Em uma caixa de transporte térmico do laboratório de entomologia há 3 frascos com amostras de Aedes aegypti e 2 frascos com amostras de Culex quinquefasciatus. Se o agente retirar sucessivamente dois frascos ao acaso e SEM REPOSIÇÃO, qual é a probabilidade de ambos os frascos retirados serem de Aedes aegypti?',
        options: [
          '3/10 (ou 30%).',
          '9/25 (ou 36%).',
          '2/5 (ou 40%).',
          '1/2 (ou 50%).'
        ],
        ans: 0,
        difficulty: 'Intermediário',
        questionType: 'Cálculo',
        comment: 'Gabarito: A. Na primeira retirada, há 3 frascos favoráveis entre 5 no total: P(1ª ser Aedes) = 3/5. Como não há reposição, restam 4 frascos na caixa, sendo 2 de Aedes: P(2ª ser Aedes | 1ª foi Aedes) = 2/4 = 1/2. Pela regra da multiplicação: P(ambas Aedes) = (3/5) × (2/4) = 6/20 = 3/10 = 30%. Erro da B: 9/25 = (3/5) × (3/5) é a probabilidade caso houvesse reposição do frasco; erro da C: 2/5 considera apenas o evento simples de Culex; erro da D: 1/2 é a probabilidade isolada da segunda retirada.'
      },
      {
        q: '[Autoral] No calendário de plantões da SEMUSA, sabe-se que o dia 1º de março de determinado ano não bissexto caiu em uma segunda-feira. Em qual dia da semana cairá o dia 31 de março desse mesmo mês?',
        options: [
          'Quarta-feira.',
          'Segunda-feira.',
          'Terça-feira.',
          'Quinta-feira.'
        ],
        ans: 0,
        difficulty: 'Fácil',
        questionType: 'Raciocínio Sequencial',
        comment: 'Gabarito: A. Entre o dia 1º e o dia 31 transcorrem exatamente 31 - 1 = 30 dias. Como os dias da semana possuem periodicidade cíclica de 7 dias, divide-se o deslocamento por 7: 30 = 7 × 4 + 2 (isto é, 4 semanas completas e resto de 2 dias). Avançando 2 dias a partir de segunda-feira: 1 dia = terça-feira; 2 dias = quarta-feira. Erro da B: seria segunda-feira se o resto fosse zero (ex.: após 28 dias); erro da C: terça-feira seria resto 1 (29 dias de transcurso); erro da D: quinta-feira seria resto 3 (31 dias de transcurso).'
      },
      {
        q: '[Autoral] Em um lote de 20 lâminas analisadas pela equipe de malária da SEMUSA em Porto Velho, 12 vieram do distrito de Calama (das quais 4 foram positivas) e 8 vieram do distrito de Nazaré (das quais 2 foram positivas). Selecionando-se aleatoriamente uma lâmina desse lote e sabendo-se que ela é oriunda de Calama, qual é a probabilidade condicional de ela ser positiva?',
        options: [
          '1/3 (ou 4/12).',
          '3/10 (ou 6/20).',
          '1/4 (ou 2/8).',
          '3/5 (ou 12/20).'
        ],
        ans: 0,
        difficulty: 'Intermediário',
        questionType: 'Caso Prático ACE',
        comment: 'Gabarito: A. A informação condicional ("sabendo-se que veio de Calama") reduz o espaço amostral relevante exclusivamente às 12 lâminas provenientes de Calama (denominador = 12). Dentre essas 12 lâminas, exatamente 4 são positivas (numerador = 4). Portanto, P(Positiva | Calama) = 4/12 = 1/3. Erro da B: 6/20 = 3/10 é a probabilidade incondicional de encontrar uma lâmina positiva no lote todo; erro da C: 2/8 = 1/4 refere-se à taxa de Nazaré; erro da D: 12/20 = 3/5 é a proporção de lâminas de Calama no lote.'
      },
      {
        q: '[Autoral] Em uma gaveta do laboratório de campo há 4 frascos lacrados de larvicida líquido, 5 frascos de inseticida concentrado e 3 frascos de repelente térmico, todos com frascos idênticos ao tato. Quantos frascos no MÍNIMO o ACE deve retirar da gaveta no escuro (às cegas) para ter a CERTEZA MATEMÁTICA ABSOLUTA de retirar pelo menos 2 frascos de inseticida concentrado?',
        options: [
          '9 frascos.',
          '2 frascos.',
          '7 frascos.',
          '11 frascos.'
        ],
        ans: 0,
        difficulty: 'Difícil',
        questionType: 'Princípio das Gavetas',
        comment: 'Gabarito: A. Pelo Princípio das Gavetas de Dirichlet (pior caso possível): o agente retira primeiro todos os frascos que NÃO são inseticida (todos os 4 de larvicida + todos os 3 de repelente = 7 frascos). Nesse ponto mais desfavorável, todos os frascos restantes na gaveta são obrigatoriamente de inseticida concentrado. Para garantir 2 frascos desse tipo, basta retirar mais 2 frascos: 7 + 2 = 9 frascos. Erro da B: 2 é a melhor hipótese possível (sorte), não garantia; erro da C: 7 frascos no pior caso poderiam ser todos os larvicidas e repelentes, sem nenhum inseticida; erro da D: 11 frascos é excessivo (sobraria apenas 1 na gaveta).'
      },
      {
        q: '[Autoral] Uma equipe de agentes em treinamento sobe uma escadaria de acesso a reservatórios elevados. Em cada etapa do exercício, o agente sobe 4 degraus e, em seguida, desce 1 degrau. Sabendo que a escadaria possui 31 degraus no total e que o exercício se encerra assim que o agente pisa no 31º degrau (não havendo recuo ao atingir o topo), em quantas etapas de subida o agente alcançará pela primeira vez o topo da escadaria?',
        options: [
          '10 etapas de subida.',
          '11 etapas de subida.',
          '9 etapas de subida.',
          '31 etapas de subida.'
        ],
        ans: 0,
        difficulty: 'Intermediário',
        questionType: 'Raciocínio Sequencial',
        comment: 'Gabarito: A. Em cada etapa completa com recuo, o avanço líquido é de 4 - 1 = 3 degraus. No entanto, na etapa final de subida o agente sobe 4 degraus e atinge o topo de 31 degraus sem recuar. Portanto, antes da etapa final ele precisa atingir pelo menos 31 - 4 = 27 degraus. Com avanço líquido de 3 degraus por etapa: 27 ÷ 3 = 9 etapas completas (ao fim da 9ª etapa ele está no degrau 9 × 3 = 27). Na 10ª etapa, ele sobe 4 degraus: 27 + 4 = 31 degraus, atingindo o topo. Erro da B: divide 31 ÷ 3 ≈ 10,33 e arredonda para 11 sem deduzir o avanço final sem recuo; erro da C: na 9ª etapa ele está no degrau 27; erro da D: considera avanço de apenas 1 degrau por etapa.'
      }
    ],
    flashcards: [
      [
        'Por que a soma dos resultados de dois dados comuns de 6 faces não é equiprovável?',
        'Porque há 36 pares ordenados equiprováveis: a soma 7 possui 6 combinações favoráveis (probabilidade 6/36 = 1/6), enquanto a soma 2 possui apenas uma (1/36).'
      ],
      [
        'Qual o procedimento para calcular a probabilidade condicional P(A | B)?',
        'Restringe-se o espaço amostral diretamente à condição dada B (que vira o novo denominador) e conta-se quantos elementos de B também atendem a A: P(A | B) = n(A ∩ B) / n(B).'
      ],
      [
        'Como resolver problemas de garantia mínima pelo Princípio das Gavetas (Casa dos Pombos)?',
        'Analisa-se o pior caso possível (maior azar): somam-se todos os elementos de todas as categorias indesejadas e adiciona-se a quantidade exigida da categoria meta.'
      ]
    ],
    references: [
      {
        title: 'IMPA/OBMEP — Probabilidade e Espaços Amostrais',
        url: 'https://portaldaobmep.impa.br/index.php/modulo/ver?modulo=46&tipo=7',
        section: 'Cálculo de probabilidades, probabilidade condicional, independência e contagem sequencial.'
      }
    ]
  }
];
