# rlm_2 — Razões, Proporções, Regra de Três (Processo/Produto) e Indicadores de Saúde

### 1. Razões, Proporções e Constante de Proporcionalidade
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
  * Um aumento de $20\%$ seguido de uma redução de $20\%$: $1,20 \times 0,80 = 0,96$ (redução líquida final de $4\%$, jamais $0\%$).

## Resumo de revisão

Grandezas proporcionais obedecem a uma taxa unitária constante. O método Processo/Produto isola o esforço no numerador e a produção no denominador. Pontos percentuais medem diferença absoluta; taxa relativa mede crescimento sobre a base inicial.

| Modelo Proporcional / Percentual | Equação e Método Rápido | Exemplo Prático | Armadilha de Prova |
| --- | --- | --- | --- |
| **Divisão Diretamente Proporcional** | $\frac{A}{p_1} = \frac{B}{p_2} = k \implies (p_1 + p_2)k = \text{Total}$ | Dividir 300 kits a 2 e 3: $5k = 300 \implies k = 60 \implies 120\text{ e }180$. | Esquecer de multiplicar a constante $k$ pelo peso pedido na pergunta. |
| **Divisão Inversamente Proporcional** | Proporcional aos inversos $\frac{1}{q_1}$ e $\frac{1}{q_2}$. | Dividir 100 itens inversamente a 2 e 3 ($\text{MMC}=6 \implies$ pesos 3 e 2): $5k = 100 \implies 60\text{ e }40$. | O menor critério inverso (ex.: menos faltas) fica com a **maior** cota. |
| **Processo / Produto (Regra de 3)** | $\frac{\text{Agentes}_1 \cdot \text{Dias}_1 \cdot \text{Horas}_1}{\text{Imóveis}_1} = \frac{\text{Agentes}_2 \cdot \text{Dias}_2 \cdot \text{Horas}_2}{\text{Imóveis}_2}$ | Isolar o produto no denominador evita o uso confuso de setas. | Dificuldade do terreno entra multiplicando o Produto. |
| **Variações Sucessivas** | Fator $= (1 \pm i_1) \times (1 \pm i_2)$. | Aumento de $20\%$ seguido de queda de $25\%$: $1,20 \times 0,75 = 0,90$ (**queda líquida de $10\%$**). | Somar algebricamente as taxas ($+20\% - 25\% = -5\%$), ignorando a mudança de base. |

## Exercícios autorais comentados

### Questão 1

[Autoral] Em uma ação de controle vetorial da SEMUSA, 4 agentes de endemias, trabalhando 6 horas por dia durante 3 dias, inspecionam 360 imóveis em condições normais de terreno. Mantendo o mesmo ritmo de trabalho e a mesma produtividade individual, quantos imóveis serão inspecionados por 6 agentes trabalhando 5 horas por dia durante 4 dias?

- A) 600 imóveis.
- B) 300 imóveis.
- C) 480 imóveis.
- D) 720 imóveis.

**Gabarito: A.** Gabarito: A. Pelo método Processo/Produto: Processo 1 = 4 agentes × 6 h/dia × 3 dias = 72 agente-horas; Produto 1 = 360 imóveis. Taxa de produtividade = 360 ÷ 72 = 5 imóveis por agente-hora. No novo cenário: Processo 2 = 6 agentes × 5 h/dia × 4 dias = 120 agente-horas. Produto 2 = 120 × 5 = 600 imóveis. Erro da B: 300 subestima o esforço da equipe ampliada; erro da C: 480 calcula incorretamente a relação de horas; erro da D: 720 duplica erroneamente os 360 imóveis.

### Questão 2

[Autoral] Em determinado estrato de Porto Velho, o Índice de Infestação Predial (IIP) para Aedes aegypti subiu de 20% no início do ano para 25% no pico das chuvas. Em relação a essas duas medições, a variação absoluta em pontos percentuais e a taxa de crescimento relativo foram, respectivamente, de:

- A) 5 pontos percentuais e 25% de crescimento relativo.
- B) 5% e 5% de crescimento relativo.
- C) 25 pontos percentuais e 5% de crescimento relativo.
- D) 5 pontos percentuais e 125% de crescimento relativo.

**Gabarito: A.** Gabarito: A. A variação absoluta é a simples diferença aritmética entre as duas taxas: 25% - 20% = 5 pontos percentuais (p.p.). Já o crescimento relativo toma como base o valor inicial (20%): (25 - 20) ÷ 20 = 5 ÷ 20 = 0,25 = 25% de aumento relativo. Erro da B: confunde pontos percentuais com variação percentual relativa; erro da C: inverte os conceitos numéricos; erro da D: 125% é o fator de índice final (1,25), não a variação líquida (25%).

### Questão 3

[Autoral] O número de criadouros positivos registrados em um bairro aumentou 20% do primeiro para o segundo mês do ano. Após uma intensa ação de bloqueio da equipe de ACE, o número de focos caiu 25% do segundo para o terceiro mês. Em relação à quantidade inicial do primeiro mês, a quantidade de focos no terceiro mês apresentou:

- A) Redução acumulada de 10%.
- B) Redução acumulada de 5%.
- C) Aumento acumulado de 5%.
- D) Estabilidade absoluta (0% de variação).

**Gabarito: A.** Gabarito: A. Aplicando os fatores de variação sucessivos sobre a base inicial 1,00: aumento de 20% gera o fator (1 + 0,20) = 1,20; redução subsequente de 25% gera o fator (1 - 0,25) = 0,75. Fator acumulado final: 1,20 × 0,75 = 0,90 (ou 90% do valor inicial). Logo, houve uma redução líquida de 1,00 - 0,90 = 0,10 = 10%. Erro da B: soma ingenuamente as taxas (+20% - 25% = -5%), ignorando que a queda de 25% incide sobre a base ampliada de 120%; erro da C e D: desconsideram o efeito composto de variações percentuais sucessivas.

### Questão 4

[Autoral] Um lote de 220 caixas de larvicida será distribuído entre duas equipes distritais em partes inversamente proporcionais ao número de veículos avariados de cada uma durante o mês, que foram de 2 e 3 veículos, respectivamente. Quantas caixas de larvicida receberá a equipe que teve MENOS veículos avariados?

- A) 132 caixas de larvicida.
- B) 88 caixas de larvicida.
- C) 110 caixas de larvicida.
- D) 150 caixas de larvicida.

**Gabarito: A.** Gabarito: A. Dividir inversamente a 2 e 3 equivale a dividir diretamente pelos inversos 1/2 e 1/3. Multiplicando ambos pelo MMC(2,3) = 6, obtemos os pesos proporcionais 3 e 2. Montando a constante de proporcionalidade k: 3k + 2k = 220 => 5k = 220 => k = 44. A equipe que teve MENOS veículos avariados (2 avarias) tem direito à MAIOR cota (peso 3): 3 × 44 = 132 caixas. Erro da B: 88 caixas (2 × 44) é a cota da equipe com 3 avarias; erro da C: 110 caixas seria uma divisão igualitária (220 ÷ 2); erro da D: cálculo arbitrário.

### Questão 5

[Autoral] Em uma campanha de LIRAa realizada em determinado bairro de Porto Velho, foram inspecionados 800 imóveis, dos quais 32 apresentavam larvas de Aedes aegypti em pelo menos um recipiente, totalizando 48 depósitos positivos com larvas. Com base nas diretrizes do Ministério da Saúde, o Índice de Infestação Predial (IIP) e o Índice de Breteau (IB) desse bairro são, respectivamente:

- A) IIP = 4,0% (Risco de Surto) e IB = 6,0.
- B) IIP = 6,0% (Risco de Surto) e IB = 4,0.
- C) IIP = 2,5% (Alerta) e IB = 3,2.
- D) IIP = 0,4% (Satisfatório) e IB = 0,6.

**Gabarito: A.** Gabarito: A. O IIP mede o percentual de imóveis com larvas: (32 ÷ 800) × 100% = 0,04 × 100% = 4,0% (pelo Ministério da Saúde, IIP ≥ 4,0% classifica o estrato em Alto Risco / Risco de Surto). O Índice de Breteau (IB) mede a relação entre depósitos positivos e total de imóveis inspecionados por 100: (48 ÷ 800) × 100 = 6,0. Erro da B: inverte os dois índices; erro da C: calcula frações incorretas; erro da D: erro de uma casa decimal (esquece de multiplicar por 100).

## Flashcards

**Qual é a estrutura matemática do método Processo/Produto em regras de três?**

Reúne os fatores de esforço no numerador (agentes × dias × horas) e o produto executado no denominador (imóveis × dificuldade), mantendo constante a razão Processo / Produto.

**Como calcular a variação relativa percentual e a variação em pontos percentuais?**

A variação em pontos percentuais é a diferença simples (taxa final − taxa inicial); a variação relativa divide essa diferença pela taxa inicial: (final − inicial) / inicial.

**Quais são as faixas oficiais de risco do Índice de Infestação Predial (IIP) segundo o Ministério da Saúde?**

IIP < 1,0% (Baixo Risco / Satisfatório); 1,0% a 3,9% (Médio Risco / Situação de Alerta); IIP ≥ 4,0% (Alto Risco / Risco de Surto).

## Referências de consulta

- [IMPA/OBMEP — Razões, Proporções e Porcentagem](https://portaldaobmep.impa.br/index.php/modulo/ver?modulo=57&tipo=7) — Grandezas proporcionais, regra de três simples e composta e variações percentuais.

Consulta editorial: 31/10/2026. Legislação deve respeitar o marco temporal do edital.
