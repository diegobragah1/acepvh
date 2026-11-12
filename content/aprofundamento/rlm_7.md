# rlm_7 — Análise Combinatória: Princípio Multiplicativo, Arranjos, Permutações e Combinações

### 1. Princípio Fundamental da Contagem (PFC)
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
- **Convenção do Fatorial de Zero**: $0! = 1$, indispensável para manter a consistência matemática das fórmulas combinatórias quando $p = n$ ou $p = 0$.

## Resumo de revisão

Ordem importa = Arranjo (cargos, senhas); Ordem não importa = Combinação (comissões, equipes). Usa todos = Permutação (anagramas, filas). Pelo menos um resolve-se por Total menos Nenhum.

| Agrupamento Combinatório | A Ordem Importa? | Fórmula | Gatilho Típico da Banca IBGP |
| --- | --- | --- | --- |
| **Permutação Simples ($P_n$)** | **SIM** (usa todos os $n$). | $P_n = n!$ | Anagramas de palavras sem letras repetidas; fila de servidores. |
| **Permutação com Repetição ($P_n^{a,b}$)** | **SIM** (usa todos os $n$). | $P_n^{a,b} = \frac{n!}{a! \cdot b!}$ | Anagramas de palavras com letras repetidas (ex.: *DENGUE* com dois E). |
| **Arranjo Simples ($A_{n,p}$)** | **SIM** (subgrupo $p < n$). | $A_{n,p} = \frac{n!}{(n-p)!}$ | Escolha para **cargos distintos** (Coordenador e Relator); senhas. |
| **Combinação Simples ($C_{n,p}$)** | **NÃO** (subgrupo $p < n$). | $C_{n,p} = \frac{n!}{p!(n-p)!}$ | Escolha de **duplas ou trios de campo** sem distinção de função. |
| **Método do Complementar** | Depende do caso base | $\text{Total} - \text{Nenhum}$ | Questões com a expressão **"pelo menos um"** ou **"ao menos um"**. |

## Exercícios autorais comentados

### Questão 1

[Autoral] Entre 5 agentes de combate às endemias disponíveis em um plantão, de quantas maneiras distintas pode-se formar uma dupla de campo sem distinção de cargos ou funções entre eles?

- A) 10 duplas.
- B) 20 duplas.
- C) 5 duplas.
- D) 25 duplas.

**Gabarito: A.** Gabarito: A. Como a ordem de escolha dos integrantes não altera a dupla de campo (a dupla formada por Ana e Bruno é rigorosamente a mesma dupla formada por Bruno e Ana), trata-se de uma Combinação Simples de 5 elementos tomados 2 a 2: C(5, 2) = (5 × 4) ÷ (2 × 1) = 20 ÷ 2 = 10 duplas. Erro da B: calcula o Arranjo A(5, 2) = 5 × 4 = 20, que consideraria as duplas (Ana, Bruno) e (Bruno, Ana) como duas duplas distintas; erro da C: número de agentes isolados; erro da D: admite repetição do mesmo agente na dupla (5 × 5).

### Questão 2

[Autoral] Em uma unidade de vigilância, 6 agentes precisam ser distribuídos para ocupar duas funções específicas e distintas: 1 Coordenador de Campo e 1 Operador de Termonebulizador (fumacê). De quantas maneiras diferentes essas duas funções podem ser preenchidas?

- A) 30 maneiras distintas.
- B) 15 maneiras distintas.
- C) 36 maneiras distintas.
- D) 12 maneiras distintas.

**Gabarito: A.** Gabarito: A. Como as duas funções são distintas e hierarquizadas (Coordenador ≠ Operador), a ordem de escolha altera o resultado. Trata-se de um Arranjo Simples de 6 elementos tomados 2 a 2: A(6, 2) = 6 × 5 = 30 maneiras (pelo PFC: 6 opções para o 1º cargo × 5 para o 2º cargo). Erro da B: 15 resulta de dividir por 2! (Combinação Simples), que só seria aplicável se as funções fossem idênticas; erro da C: admite a mesma pessoa ocupando os dois cargos (6 × 6); erro da D: soma 6 + 6.

### Questão 3

[Autoral] Quantos anagramas distintos podem ser formados com todas as letras da palavra DENGUE (que possui 6 letras com a repetição da letra E)?

- A) 360 anagramas.
- B) 720 anagramas.
- C) 120 anagramas.
- D) 36 anagramas.

**Gabarito: A.** Gabarito: A. A palavra DENGUE possui 6 letras no total (D, E, N, G, U, E), com a letra E repetida 2 vezes. Aplica-se a fórmula da Permutação com Repetição: P₆^(2) = 6! ÷ 2! = (6 × 5 × 4 × 3 × 2 × 1) ÷ 2 = 720 ÷ 2 = 360 anagramas distintos. Erro da B: calcula 6! = 720 (Permutação Simples), sem descontar a repetição da letra E; erro da C: 120 é 5!; erro da D: calcula 6² = 36.

### Questão 4

[Autoral] Uma equipe sanitária é composta por 4 agentes veteranos e 3 agentes novatos. Deseja-se formar uma comissão de 3 agentes para vistoriar um ponto estratégico, exigindo-se que haja PELO MENOS 1 agente veterano na comissão. Quantas comissões distintas podem ser formadas?

- A) 34 comissões distintas.
- B) 35 comissões distintas.
- C) 12 comissões distintas.
- D) 30 comissões distintas.

**Gabarito: A.** Gabarito: A. Pelo método do complementar: Total geral de comissões possíveis com 3 agentes escolhidos entre os 7 (4 veteranos + 3 novatos): C(7, 3) = (7 × 6 × 5) ÷ (3 × 2 × 1) = 35 comissões. O único caso proibido pela restrição ("ao menos 1 veterano") é a comissão formada exclusivamente por novatos (0 veteranos), ou seja, escolher os 3 novatos entre os 3 existentes: C(3, 3) = 1 comissão. Subtraindo o caso proibido do total: 35 - 1 = 34 comissões válidas. Erro da B: 35 inclui a comissão formada apenas por novatos; erro da C: multiplica 4 × 3; erro da D: contagem parcial incompleta.

### Questão 5

[Autoral] Quantos códigos de 3 dígitos numéricos distintos (sem repetição de algarismos) podem ser formados utilizando-se exclusivamente os algarismos de 1 a 9?

- A) 504 códigos.
- B) 729 códigos.
- C) 1.000 códigos.
- D) 84 códigos.

**Gabarito: A.** Gabarito: A. Pelo Princípio Fundamental da Contagem (PFC): para o primeiro dígito há 9 opções (algarismos 1 a 9); para o segundo dígito há 8 opções (não pode repetir); para o terceiro dígito há 7 opções. Total = 9 × 8 × 7 = 504 códigos distintos (equivalente ao arranjo A(9, 3) = 9! ÷ 6! = 504). Erro da B: 729 = 9³ admite repetição de algarismos; erro da C: 1.000 = 10³ inclui o zero e admite repetições; erro da D: 84 = C(9, 3) divide por 3!, ignorando que códigos são sequências ordenadas onde a ordem dos dígitos altera o código.

## Flashcards

**Qual pergunta separa um problema de Arranjo de um problema de Combinação?**

Inverter a ordem dos elementos escolhidos altera o grupo formado? Se a ordem altera, trata-se de Arranjo (cargos, senhas); se a ordem não altera, trata-se de Combinação (equipes, comissões).

**Como resolver rapidamente problemas combinatórios com a exigência de “pelo menos um”?**

Calcula-se o total de agrupamentos irrestritos e subtrai-se os casos proibidos em que nenhum elemento da categoria exigida está presente (Método do Complementar).

**Qual é a fórmula da permutação com elementos repetidos?**

P_n^(a,b) = n! / (a! · b!), onde a e b representam as quantidades de vezes que cada elemento se repete.

## Referências de consulta

- [IMPA/OBMEP — Métodos de Contagem e Combinatória](https://portaldaobmep.impa.br/index.php/modulo/ver?modulo=15&tipo=7) — Princípio fundamental da contagem, permutações, arranjos e combinações simples.

Consulta editorial: 31/10/2026. Legislação deve respeitar o marco temporal do edital.
