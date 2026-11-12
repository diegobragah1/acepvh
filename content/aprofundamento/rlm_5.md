# rlm_5 — Lógica Proposicional: Conectivos, Tabela-Verdade, Negações, Equivalências e Quantificadores

### 1. Proposições Lógicas e Princípios Fundamentais
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
- **Algum $A$ é $B$** (Existencial Afirmativa): nega-se com *"Nenhum $A$ é $B$"* (ou *"Todo $A$ não é $B$"*).

## Resumo de revisão

Condicional p→q só é falsa em V→F. Negação da condicional é MANÉ (p ∧ ¬q). Equivalências: contrapositiva (¬q→¬p) e disjuntiva (¬p ∨ q). Negação de Todo é Algum... não (PEA+NÃO), nunca Nenhum.

| Operação Lógica | Expressão Original | Negação ou Equivalência Lógica | Mnemônico Prático |
| --- | --- | --- | --- |
| **Negação da Conjunção (De Morgan)** | $\neg(p \land q)$ — *"Não é verdade que P e Q"* | $\neg p \lor \neg q$ — *"Não P **ou** não Q"* | Nega as duas e troca **E** por **OU**. |
| **Negação da Disjunção (De Morgan)** | $\neg(p \lor q)$ — *"Não é verdade que P ou Q"* | $\neg p \land \neg q$ — *"Não P **e** não Q"* | Nega as duas e troca **OU** por **E**. |
| **Negação da Condicional** | $\neg(p \to q)$ — *"Não é verdade que Se P então Q"* | $p \land \neg q$ — *"P **e** não Q"* | **MANÉ**: **MA**ntém a 1ª **E** **NE**ga a 2ª. |
| **Equivalência Contrapositiva** | $p \to q$ — *"Se chove, a calha enche"* | $\neg q \to \neg p$ — *"Se a calha não enche, não chove"* | Inverte os dois termos e nega ambos. |
| **Equivalência Disjuntiva** | $p \to q$ — *"Se chove, a calha enche"* | $\neg p \lor q$ — *"Não chove **ou** a calha enche"* | **NEYMAR**: **NE**ga a 1ª **OU** **MA**ntém a 2ª. |
| **Negação de Quantificadores** | *"Todo agente foi vacinado"* | *"Pelo menos um agente **não** foi vacinado"* | **PEA + NÃO** (Pelo menos um, Existe, Algum). |

## Exercícios autorais comentados

### Questão 1

[Autoral] Qual é a negação lógica da proposição condicional: “Se o imóvel está fechado, então o agente não realiza a inspeção”?

- A) O imóvel está fechado e o agente realiza a inspeção.
- B) Se o imóvel não está fechado, então o agente realiza a inspeção.
- C) O imóvel não está fechado ou o agente não realiza a inspeção.
- D) Se o agente realiza a inspeção, então o imóvel não está fechado.

**Gabarito: A.** Gabarito: A. Pela regra lógica de negação da condicional (regra do MANÉ): ~(p -> q) ≡ p ∧ ~q (Mantém a primeira proposição E Nega a segunda). Sendo p = "o imóvel está fechado" e q = "o agente não realiza a inspeção", sua negação lógica é: "O imóvel está fechado E o agente realiza a inspeção" (p ∧ ~q). Erro da B: nega o antecedente e o consequente mantendo a condicional (~p -> ~q, que é a inversa); erro da C: disjunção que não corresponde à negação; erro da D: contrapositiva ou recíproca na forma condicional.

### Questão 2

[Autoral] Uma proposição logicamente equivalente à condicional “Se o reservatório foi tratado com larvicida, então não há proliferação de mosquitos” é:

- A) Se há proliferação de mosquitos, então o reservatório não foi tratado com larvicida.
- B) Se o reservatório não foi tratado com larvicida, então há proliferação de mosquitos.
- C) O reservatório foi tratado com larvicida e há proliferação de mosquitos.
- D) Se não há proliferação de mosquitos, então o reservatório foi tratado com larvicida.

**Gabarito: A.** Gabarito: A. Pela regra da contrapositiva, a condicional p -> q é logicamente equivalente a ~q -> ~p (inverte-se a ordem das proposições e negam-se ambas). Negando o consequente ("há proliferação de mosquitos") e o antecedente ("o reservatório não foi tratado"), obtemos: "Se há proliferação de mosquitos, então o reservatório não foi tratado com larvicida". Erro da B: nega as proposições sem inverter a ordem (inversa); erro da C: conjunção correspondente à negação (p ∧ ~q); erro da D: inverte a ordem sem negar (recíproca).

### Questão 3

[Autoral] A negação lógica da proposição categórica “Todos os agentes de combate às endemias foram vacinados contra a febre amarela” é:

- A) Pelo menos um agente de combate às endemias não foi vacinado contra a febre amarela.
- B) Nenhum agente de combate às endemias foi vacinado contra a febre amarela.
- C) Todos os agentes de combate às endemias não foram vacinados contra a febre amarela.
- D) Exatamente um agente de combate às endemias foi vacinado contra a febre amarela.

**Gabarito: A.** Gabarito: A. A negação de uma proposição universal afirmativa ("Todo A é B") é a proposição existencial com negação ("Existe pelo menos um / Algum A que NÃO é B", regra do PEA + NÃO). Erro da B: "Nenhum" é o erro mais clássico da banca IBGP; "Nenhum" é a proposição contrária, não a contraditória (se metade dos agentes foi vacinada, tanto "Todos" quanto "Nenhum" são falsos simultaneamente); erro da C: equivale a nenhum; erro da D: restringe arbitrariamente a exatamente um.

### Questão 4

[Autoral] Pelas Leis de De Morgan, a negação lógica da proposição composta “O agente realizou a coleta de larvas OU o supervisor lavrou a notificação” é:

- A) O agente não realizou a coleta de larvas E o supervisor não lavrou a notificação.
- B) O agente não realizou a coleta de larvas OU o supervisor não lavrou a notificação.
- C) Se o agente realizou a coleta de larvas, então o supervisor lavrou a notificação.
- D) O agente realizou a coleta de larvas E o supervisor lavrou a notificação.

**Gabarito: A.** Gabarito: A. Pela 2ª Lei de De Morgan: ~(p ∨ q) ≡ ~p ∧ ~q. Para negar uma disjunção ("ou"), negam-se ambas as proposições simples componentes e troca-se o conectivo "ou" pelo conectivo "e". Erro da B: nega as proposições simples mas mantém incorretamente o conectivo "ou"; erro da C: converte em condicional; erro da D: troca o conectivo sem negar os termos.

### Questão 5

[Autoral] Uma proposição composta é classificada como TAUTOLOGIA quando seu valor lógico for:

- A) Verdadeiro em todas as linhas possíveis de sua tabela-verdade, independentemente dos valores lógicos das proposições simples que a compõem.
- B) Falso em todas as linhas possíveis de sua tabela-verdade.
- C) Verdadeiro em pelo menos uma linha e falso em pelo menos outra linha de sua tabela-verdade.
- D) Dependente exclusivamente de confirmação pericial empírica em laboratório.

**Gabarito: A.** Gabarito: A. Tautologia é uma proposição logicamente necessária, cuja coluna final da tabela-verdade contém exclusivamente valores Verdadeiro (V). Se todas as linhas forem Falsas (F), temos uma Contradição. Se houver mistura de V e F, temos uma Contingência. Erro da B: define Contradição; erro da C: define Contingência; erro da D: a lógica proposicional formal independe de validação empírica.

## Flashcards

**Qual é a regra mnemônica do MANÉ para negar uma condicional (p → q)?**

MAntém a primeira proposição E NEga a segunda proposição: ¬(p → q) ≡ p ∧ ¬q.

**Quais são as duas formas logicamente equivalentes à condicional p → q?**

1) Contrapositiva: ¬q → ¬p (inverte e nega); 2) Disjuntiva (NEYMAR): ¬p ∨ q (nega a 1ª ou mantém a 2ª).

**Por que a negação de “Todo A é B” nunca é “Nenhum A é B”?**

Porque "Nenhum" é a proposição contrária, não a contraditória. Se apenas alguns forem B, ambas as frases são falsas ao mesmo tempo. A negação correta é PEA + NÃO ("Pelo menos um A não é B").

## Referências de consulta

- [IMPA/OBMEP — Introdução à Lógica Matemática](https://portaldaobmep.impa.br/index.php/modulo/ver?modulo=48&tipo=7) — Proposições, conectivos lógicos, tabelas-verdade, negações e quantificadores.

Consulta editorial: 31/10/2026. Legislação deve respeitar o marco temporal do edital.
