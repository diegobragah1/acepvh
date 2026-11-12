# rlm_1 — Conjuntos Numéricos, Operações Fundamentais, Primos, MMC e MDC

### 1. Conjuntos Numéricos e Relações de Inclusão
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
  $$\text{MMC}(a, b) \times \text{MDC}(a, b) = a \times b$$

## Resumo de revisão

MDC divide quantidades em partes iguais máximas sem sobra; MMC calcula reencontros periódicos de ciclos. Dízima periódica é número racional. Parênteses alteram a base de uma potência.

| Ferramenta Aritmética | Fórmulas e Algoritmo | Gatilho no Enunciado da Prova IBGP | Armadilha Clássica |
| --- | --- | --- | --- |
| **MDC (Divisor Comum)** | Fatores primos **comuns** com os **menores** expoentes. | Repartir itens em lotes/kits com a **maior capacidade possível**, sem sobra. | Confundir o **tamanho de cada kit** ($\text{MDC}$) com o **número de kits** ($\text{Total} \div \text{MDC}$). |
| **MMC (Múltiplo Comum)** | Todos os fatores primos com os **maiores** expoentes. | Ciclos ou rotinas periódicas que coincidiram hoje e pergunta-se **quando coincidirão de novo**. | Se a questão perguntar o dia da semana ou do mês, somar o $\text{MMC}$ à data inicial. |
| **Relação Fundamental** | $\text{MMC}(a,b) \times \text{MDC}(a,b) = a \times b$. | Conhecendo $\text{MMC}$, $\text{MDC}$ e um dos números, encontrar o outro imediatamente. | O número **1 não é primo** e **2 é o único primo par**. |
| **Fração Geratriz e Sinais** | $0,aaa\dots = \frac{a}{9}$; $0,abbb\dots = \frac{ab - a}{90}$. $(-3)^2 = +9$ vs $-3^2 = -9$. | Converter dízimas periódicas para somar frações ou calcular potências com sinais negativos. | Dizer que dízima periódica é irracional (dízimas periódicas pertencem a $\mathbb{Q}$). |

## Exercícios autorais comentados

### Questão 1

[Autoral] Em uma base distrital da SEMUSA, uma coordenação de vigilância recebeu 84 frascos de reagente azul e 126 frascos de reagente verde para distribuir entre as equipes de campo. Deseja-se organizar esses insumos em kits idênticos contendo a mesma composição de reagentes em cada um, sem sobras e de modo a formar a maior quantidade possível de kits. Quantos kits serão formados e quantos frascos de cada cor conterá cada kit?

- A) 42 kits, contendo cada um 2 frascos de reagente azul e 3 de reagente verde.
- B) 21 kits, contendo cada um 4 frascos de reagente azul e 6 de reagente verde.
- C) 84 kits, contendo cada um 1 frasco de reagente azul e 1 de reagente verde.
- D) 252 kits, contendo cada um 3 frascos de reagente azul e 2 de reagente verde.

**Gabarito: A.** Gabarito: A. Para dividir simultaneamente duas quantidades na maior divisão comum exata sem sobras, calcula-se o Máximo Divisor Comum: decompondo em fatores primos, 84 = 2² × 3 × 7 e 126 = 2 × 3² × 7. O MDC(84, 126) corresponde ao produto dos fatores primos comuns com seus menores expoentes: 2 × 3 × 7 = 42 kits. Dividindo as quantidades: 84 ÷ 42 = 2 frascos azuis e 126 ÷ 42 = 3 frascos verdes por kit. Erro da B: 21 é divisor comum, mas não é o máximo divisor comum; erro da C: 84 divide 84, mas não divide 126 exatamente (haveria sobra); erro da D: 252 é o MMC(84, 126), representando um múltiplo comum, e não um divisor das quantidades.

### Questão 2

[Autoral] Duas rotinas de monitoramento entomológico da SEMUSA em Porto Velho repetem-se ciclicamente: a inspeção de bueiros ocorre a cada 12 dias e a vistoria de cemitérios ocorre a cada 18 dias. Se ambas as equipes iniciaram suas rotinas simultaneamente no dia de hoje, daqui a quantos dias essas duas vistorias coincidirão novamente pela primeira vez?

- A) Daqui a 36 dias.
- B) Daqui a 6 dias.
- C) Daqui a 18 dias.
- D) Daqui a 30 dias.

**Gabarito: A.** Gabarito: A. Trata-se de um problema clássico de reencontro periódico de ciclos, resolvido pelo Mínimo Múltiplo Comum (MMC). Fatorando 12 = 2² × 3 e 18 = 2 × 3², o MMC(12, 18) é o produto de todos os fatores primos com os maiores expoentes: 2² × 3² = 4 × 9 = 36 dias. Erro da B: 6 é o MDC(12, 18), que mede divisão comum máxima e não tempo futuro de reencontro; erro da C: 18 dias contempla apenas o ciclo dos cemitérios, pois 18 não é divisível por 12 (18 ÷ 12 = 1,5); erro da D: 30 dias resulta da soma ingênua dos períodos (12 + 18), que não é múltiplo comum de nenhum dos dois.

### Questão 3

[Autoral] Uma coordenação de endemias recebeu 120 tubos de ensaio plásticos e 180 etiquetas de identificação adesivas e deseja organizá-los em caixas fechadas com a mesma quantidade de itens em cada caixa, sem misturar tubos com etiquetas na mesma caixa, sem sobra e de modo que cada caixa tenha a MAIOR capacidade possível. Quantas caixas serão formadas ao todo?

- A) 5 caixas ao todo (2 caixas de tubos e 3 caixas de etiquetas, contendo 60 itens em cada caixa).
- B) 60 caixas ao todo.
- C) 300 caixas ao todo.
- D) 12 caixas ao todo.

**Gabarito: A.** Gabarito: A. A maior capacidade de cada caixa corresponde ao MDC(120, 180). Fatorando: 120 = 2³ × 3 × 5 e 180 = 2² × 3² × 5. O MDC é 2² × 3 × 5 = 60 itens por caixa. O total de caixas formadas será: 120 ÷ 60 = 2 caixas de tubos de ensaio e 180 ÷ 60 = 3 caixas de etiquetas adesivas, totalizando 2 + 3 = 5 caixas. Erro da B: 60 é a quantidade de itens por caixa (capacidade), e não a quantidade de caixas formadas; erro da C: 300 é a soma simples dos itens (120 + 180); erro da D: 12 resulta de dividir 60 por 5 ou decomposição incompleta.

### Questão 4

[Autoral] Sabendo que o número natural $N = 2^3 \times 3^1 \times 5^2 = 600$ representa o total de residências cadastradas em determinado setor sanitário, quantos divisores naturais positivos possui o número 600?

- A) 24 divisores naturais positivos.
- B) 6 divisores naturais positivos.
- C) 10 divisores naturais positivos.
- D) 30 divisores naturais positivos.

**Gabarito: A.** Gabarito: A. Pelo teorema do número de divisores de um número natural decomposto em fatores primos N = p₁ᵃ · p₂ᵇ · p₃ᶜ, a quantidade de divisores positivos é D(N) = (a + 1)(b + 1)(c + 1). Para 600 = 2³ × 3¹ × 5², temos: (3 + 1) × (1 + 1) × (2 + 1) = 4 × 2 × 3 = 24 divisores. Erro da B: resulta de multiplicar diretamente os expoentes (3 × 1 × 2 = 6) sem somar 1 a cada um; erro da C: 10 equivale à soma dos fatores primos ou expoentes; erro da D: erro aritmético na multiplicação dos fatores incrementados.

### Questão 5

[Autoral] Em relação aos conjuntos numéricos e à representação de números decimais, assinale a afirmativa CORRETA:

- A) A dízima periódica composta $1,2444\dots$ é um número racional (pertencente a $\mathbb{Q}$) cuja fração geratriz irredutível é $\frac{56}{45}$.
- B) O número 1 é classificado como número primo por possuir apenas o divisor 1.
- C) O valor da expressão numérica $-3^2 + (-3)^2$ é igual a 18.
- D) Toda dízima com infinitas casas decimais é obrigatoriamente um número irracional (pertencente a $\mathbb{I}$).

**Gabarito: A.** Gabarito: A. Toda dízima periódica é racional. Para encontrar a fração geratriz de 1,2444...: seja x = 1,2444... Logo, 10x = 12,444... e 100x = 124,444... Subtraindo: 100x - 10x = 124 - 12 => 90x = 112 => x = 112/90 = 56/45. Erro da B: 1 não é primo (números primos exigem exatamente dois divisores positivos distintos); erro da C: -3² = -9 (a base da potência é apenas 3) e (-3)² = +9, logo -9 + 9 = 0 (e não 18); erro da D: dízimas periódicas possuem infinitas casas e são números racionais (pertencem a Q).

## Flashcards

**O que distingue conceitualmente um problema de MMC de um problema de MDC?**

No MMC, o resultado procurado é múltiplo comum dos períodos temporais (encontro futuro de ciclos); no MDC, o resultado é um divisor comum que reparte quantidades em lotes máximos iguais sem sobra.

**Qual a diferença de cálculo entre as potências −3² e (−3)²?**

Em −3², o sinal negativo não está elevado à potência, resultando em −9; em (−3)², a base é negativa e está entre parênteses, resultando em +9.

**Como calcular a quantidade de divisores naturais positivos de um número a partir de sua fatoração prima?**

Decompõe-se o número em fatores primos N = p₁ᵃ · p₂ᵇ, soma-se 1 a cada expoente e multiplicam-se os resultados: (a + 1)(b + 1).

## Referências de consulta

- [IMPA/OBMEP — Portal da Matemática](https://portaldaobmep.impa.br/index.php/modulo/ver?modulo=1&tipo=7) — Conjuntos numéricos, propriedades de divisibilidade, números primos, cálculo de MMC e MDC.

Consulta editorial: 31/10/2026. Legislação deve respeitar o marco temporal do edital.
