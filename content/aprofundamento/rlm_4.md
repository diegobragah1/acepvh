# rlm_4 — Equações de 1º Grau, Sistemas Lineares, Função Afim e Médias

### 1. Equações do 1º Grau e Modelagem Algébrica
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
  $$\bar{x}_{\text{global}} = \frac{n_1 \bar{x}_1 + n_2 \bar{x}_2}{n_1 + n_2}$$

## Resumo de revisão

Resolva equações por equivalência. Sistemas 2x2: SPD (retas concorrentes), SPI (coincidentes) e SI (paralelas). Função afim tem parcela fixa; só é proporcional se b = 0. Média ponderada divide pela soma dos pesos.

| Tópico Algébrico | Equação / Fórmula | Aplicação Rápida | Armadilha de Prova |
| --- | --- | --- | --- |
| **Modelagem de 1º Grau** | $ax + b = c \implies x = \frac{c - b}{a}$ | *"O dobro de $(x+4)$"* é $2(x+4) = 2x+8$. | Esquecer de distribuir parênteses ao montar a equação. |
| **Sistemas Lineares $2 \times 2$** | $\begin{cases} x + y = T \\ a x + b y = S \end{cases}$ | Isolar uma incógnita e substituir na outra para achar o par $(x,y)$. | Conferir a solução encontrada em **ambas** as equações do enunciado. |
| **Função Afim ($f(x) = ax + b$)** | Taxa de variação $a$; valor fixo $b$; raiz $x = -b/a$. | $C(x) = 1.500 + 40x \implies C(50) = 1.500 + 2.000 = 3.500$. | Achar que toda função afim é proporcional (só é proporcional se $b = 0$). |
| **Média Ponderada** | $\bar{x}_p = \frac{\sum p_i x_i}{\sum p_i}$ | Notas 8, 7 e 9 com pesos 3, 2 e 5: $\frac{24+14+45}{10} = 8,3$. | Dividir pela quantidade de disciplinas (3) em vez da soma dos pesos (10). |

## Exercícios autorais comentados

### Questão 1

[Autoral] Em um sistema de equações lineares $2 \times 2$, uma equipe de ACE registrou que $x + y = 20$ e $x + 3y = 44$, onde $x$ representa o número de visitas domiciliares na zona norte e $y$ o número de visitas na zona sul. Qual é o valor de $y$?

- A) 12 visitas.
- B) 8 visitas.
- C) 10 visitas.
- D) 24 visitas.

**Gabarito: A.** Gabarito: A. Subtraindo a primeira equação da segunda: (x + 3y) - (x + y) = 44 - 20 => 2y = 24 => y = 12 (e x = 20 - 12 = 8). Erro da B: 8 é o valor da incógnita x (visitas na zona norte); erro da C: 10 é a média simples de 20; erro da D: 24 é o valor de 2y antes da divisão por 2.

### Questão 2

[Autoral] Em um mutirão de combate à dengue, foram vistoriados 50 imóveis entre residências térreas (cada uma possuindo 2 caixas-d'água) e pequenos comércios (cada um possuindo 5 caixas-d'água), totalizando 136 caixas-d'água inspecionadas. Quantas residências térreas foram vistoriadas?

- A) 38 residências térreas.
- B) 12 residências térreas.
- C) 25 residências térreas.
- D) 40 residências térreas.

**Gabarito: A.** Gabarito: A. Seja R o número de residências e C o de comércios. Monta-se o sistema: 1) R + C = 50 => C = 50 - R; 2) 2R + 5C = 136. Substituindo C: 2R + 5(50 - R) = 136 => 2R + 250 - 5R = 136 => 250 - 136 = 3R => 3R = 114 => R = 38 residências. Erro da B: 12 é o número de comércios (50 - 38); erro da C: 25 divide 50 por 2 sem considerar o número de caixas; erro da D: 40 residências daria 2(40) + 5(10) = 130 caixas, divergindo de 136.

### Questão 3

[Autoral] Um candidato ao concurso de ACE obteve nota 8,0 na prova de Conhecimentos Específicos (peso 3), nota 7,0 em Língua Portuguesa (peso 2) e nota 9,0 em Noções de RLM (peso 5). Qual foi a média aritmética ponderada obtida pelo candidato nessas três disciplinas?

- A) 8,3.
- B) 8,0.
- C) 7,8.
- D) 8,8.

**Gabarito: A.** Gabarito: A. A média ponderada é calculada dividindo a soma dos produtos nota × peso pela soma dos pesos: [(8,0 × 3) + (7,0 × 2) + (9,0 × 5)] ÷ (3 + 2 + 5) = (24 + 14 + 45) ÷ 10 = 83 ÷ 10 = 8,3. Erro da B: 8,0 é a média aritmética simples (8 + 7 + 9) ÷ 3 = 8,0, que desconsidera os diferentes pesos das provas; erro da C: calcula a média com pesos invertidos; erro da D: atribui peso maior apenas à maior nota.

### Questão 4

[Autoral] O custo total de manutenção mensal de uma frota de motocicletas da vigilância ambiental é modelado por uma função afim $C(x) = 1500 + 40x$, onde $x$ representa o número de vistorias rurais realizadas no mês e $C(x)$ é o custo em reais. A respeito dessa função, assinale a afirmativa CORRETA:

- A) A função é afim, possui valor fixo inicial de R$ 1.500,00 e taxa de variação de R$ 40,00 por vistoria, não sendo estritamente proporcional porque C(0) ≠ 0.
- B) A função é diretamente proporcional porque o custo aumenta quando x aumenta.
- C) Para realizar 50 vistorias rurais, o custo total será de exatamente R$ 2.000,00.
- D) A raiz ou zero dessa função é x = 40 vistorias.

**Gabarito: A.** Gabarito: A. Toda função da forma f(x) = ax + b com b ≠ 0 é dita afim, possuindo uma parcela constante (b = 1.500) e uma taxa linear (a = 40). Ela NÃO é diretamente proporcional, pois na proporcionalidade direta a reta deve passar pela origem (b = 0, C(0) = 0). Erro da B: o simples fato de crescer não garante proporcionalidade direta (duplicar x não duplica C(x)); erro da C: para x = 50, C(50) = 1500 + 40(50) = 1500 + 2000 = R$ 3.500,00 (e não R$ 2.000,00); erro da D: a raiz seria 1500 + 40x = 0 => x = -1500/40 = -37,5.

### Questão 5

[Autoral] Duas equipes de campo realizaram vistorias em áreas distintas: a Equipe Alfa (com 10 agentes) apresentou uma média de 6 focos identificados por agente, enquanto a Equipe Bravo (com 20 agentes) apresentou uma média de 9 focos identificados por agente. A média conjunta de focos por agente considerando todos os 30 agentes das duas equipes é igual a:

- A) 8 focos por agente.
- B) 7,5 focos por agente.
- C) 7 focos por agente.
- D) 8,5 focos por agente.

**Gabarito: A.** Gabarito: A. Trata-se de média ponderada pelos tamanhos dos grupos: Total de focos de Alfa = 10 × 6 = 60 focos; Total de focos de Bravo = 20 × 9 = 180 focos. Total de focos = 60 + 180 = 240 focos. Dividindo pelo total de 30 agentes: 240 ÷ 30 = 8 focos por agente. Erro da B: 7,5 resulta da média aritmética simples entre as médias (6 + 9) ÷ 2 = 7,5, desconsiderando que a equipe Bravo tem o dobro do tamanho da equipe Alfa; erro da C e D: aproximações incorretas sem ponderação.

## Flashcards

**Qual condição geométrica caracteriza um Sistema Linear 2×2 Possível e Determinado (SPD)?**

As retas são concorrentes em um único ponto, ocorrendo quando as razões dos coeficientes angulares são diferentes: a₁/a₂ ≠ b₁/b₂.

**Por que uma função afim com parcela fixa f(x) = ax + b (com b ≠ 0) não é diretamente proporcional?**

Porque a proporcionalidade direta exige que a razão f(x)/x permaneça constante e a reta passe pela origem (f(0) = 0).

**Qual é o divisor no cálculo de uma média aritmética ponderada?**

O divisor é sempre a soma de todos os pesos considerados (p₁ + p₂ + ... + pₙ), e nunca a quantidade de notas.

## Referências de consulta

- [IMPA/OBMEP — Equações, Sistemas e Função Afim](https://portaldaobmep.impa.br/index.php/modulo/ver?modulo=12&tipo=7) — Equações de primeiro grau, sistemas lineares 2x2, gráfico da função afim e médias.

Consulta editorial: 31/10/2026. Legislação deve respeitar o marco temporal do edital.
