# 27. Sequências Lógicas, Progressão Aritmética (PA), Progressão Geométrica (PG), Análise Combinatória e Probabilidade

- **Disciplina:** Raciocínio Lógico-Matemático (10 Questões • Peso 2 (20 pts))
- **Referência no Edital:** Anexo IV — Raciocínio Lógico (Nível Médio/ACE): Sequências numéricas, de letras e figuras; PA e PG; Princípio fundamental da contagem, arranjo, permutação, combinação e probabilidade.
- **Selo de Auditoria:** AULA INTEGRAL NÍVEL LIVRO DIDÁTICO (ESTRUTURA EM 4 ETAPAS)

---

## Bloco 27.1 — Sequências, PA, PG, Análise Combinatória (Arranjo vs. Combinação vs. Permutação) e Probabilidade

### Modo A — Teoria Aprofundada e Texto Legal Integral

#### 1. Objetivo Claro da Aula & Título do Tópico (Alinhado ao Conteúdo Programático Oficial — Anexo IV ACE)

**27. Sequências Lógicas, Progressão Aritmética (PA), Progressão Geométrica (PG), Análise Combinatória e Probabilidade — Bloco 27.1 — Sequências, PA, PG, Análise Combinatória (Arranjo vs. Combinação vs. Permutação) e Probabilidade**
 **Referência no Edital IBGP:** Anexo IV — Raciocínio Lógico (Nível Médio/ACE): Sequências numéricas, de letras e figuras; PA e PG; Princípio fundamental da contagem, arranjo, permutação, combinação e probabilidade.
 **Fontes e PDFs Base Integrados:** PDF #8 (*8. Raciocínio Sequencial.pdf*), PDF #20 (*20. Análise Combinatória.pdf*), PDF #21 (*21. Probabilidade.pdf*), PDF #86 (*EDITAL Nº 25/2026 Consolidado até Retificação nº 01 (IBGP).pdf*), PDF #91 (*Anexo IV Retificado — Conteúdos Programáticos Oficiais.pdf*).

Objetivos Claros de Aprendizagem da Aula 27:

- Dominar o Princípio Fundamental da Contagem (PFC — Regra do 'E' = Multiplica; Regra do 'OU' = Soma) e o cálculo de Fatorial (n!, com 0! = 1 e 1! = 1).
- Diferenciar pelo enunciado e calcular sem hesitar Permutação Simples (Pₙ = n!), Permutação com Repetição (anagramas com letras repetidas), Arranjo Simples (Aₙ,ₚ — a ordem IMPORTA!) e Combinação Simples (Cₙ,ₚ — a ordem NÃO importa!).
- Compreender os conceitos de Espaço Amostral (Ω), Evento (E) e calcular a Probabilidade simples P(E) = Casos Favoráveis ÷ Casos Possíveis (em fração, decimal e porcentagem).
- Resolver problemas de Probabilidade da União de Eventos (Regra do 'OU': P(A ∪ B) = P(A) + P(B) − P(A ∩ B)), Probabilidade de Eventos Independentes/Sucessivos (Regra do 'E' com e sem reposição: P(A) × P(B)) e Probabilidade Complementar (P(Aᶜ) = 1 − P(A)).

#### 2. Explicação Detalhada (Conteúdo Integral — Nível Livro Didático)

Fórmulas essenciais e critérios de decisão rápida para PA, PG, Contagem e Probabilidade:

- **Progressão Aritmética (PA — soma constante da razão r) vs. Progressão Geométrica (PG — multiplicação constante pela razão q):**

  - **Termo Geral da PA:** a_(n) = a_(1) + (n - 1) · r | **Soma da PA:** S_(n) = (((a_(1) + a_(n)) · n) / 2).
  - **Termo Geral da PG:** a_(n) = a_(1) · q^(n-1) | **Soma da PG Finita:** S_(n) = ((a_(1) · (q^(n) - 1)) / (q - 1)).
  - **Sequências Cíclicas de Letras/Palavras:** Divida a posição pedida pelo tamanho do ciclo; o **RESTO da divisão** indica a posição da letra dentro da palavra (se o resto for 0, é a última letra do ciclo!).
- **Análise Combinatória — A Pergunta de Ouro: "A ORDEM IMPORTA?"**

  - **Permutação Simples (P_(n) = n!):** Usa todos os n elementos para trocar de posição (filas, anagramas sem letras repetidas). Com letras repetidas (ex.: ARARA = 5 letras, 3 As e 2 Rs): P_(5)^(3,2) = (5! / 3!2!) = (120 / 6 × 2) = 10 anagramas.
  - **Arranjo (A_(n,p) = (n! / ((n-p)!))) — A ORDEM IMPORTA!** Se inverter a ordem dos escolhidos, muda o resultado (ex.: senhas, placas, pódio de 1º/2º/3º lugar, escolha de Presidente e Vice-Presidente).
  - **Combinação (C_(n,p) = (n! / (p!(n-p)!))) — A ORDEM NÃO IMPORTA!** Se inverter a ordem dos escolhidos, a equipe/grupo continua exatamente o mesmo (ex.: formar uma comissão, dupla ou equipe de 3 ACEs dentre 10 disponíveis: (10 × 9 × 8 / 3 × 2 × 1) = 120 equipes).
- **Probabilidade (P(A) = (Casos Favoráveis / Casos Possíveis)):**

  - Varia sempre de 0 (0%) a 1 (100%).
  - **Regra do "OU" (União de Eventos):** P(A ∪ B) = P(A) + P(B) - P(A ∩ B).
  - **Regra do "E" (Eventos Independentes / Sorteios Sucessivos):** **MULTIPLICAM-SE** as probabilidades (P(A ∩ B) = P(A) × P(B)).

#### 3. Contextualização e Exemplos Práticos (Aplicações Reais na Prova IBGP e na Rotina da SEMUSA Porto Velho)

**Aplicação Prática de PA, PG, Análise Combinatória e Probabilidade nas Questões da Banca IBGP:**
• **Progressão Aritmética (PA) em Metas de Visitas:** Uma equipe vistoriou 120 imóveis na 1ª semana, 150 na 2ª, 180 na 3ª e assim sucessivamente (PA de razão r = 30). Na 10ª semana, vistoriará a_(10) = 120 + 9 × 30 = 390 imóveis.
• **Escolha de Comissões (Combinação) vs. Cargos Distintos (Arranjo):** Para escolher **3 agentes** dentre 10 para formar uma equipe de bloqueio (sem distinção de função), a ordem não importa: usa-se **Combinação** C_(10,3) = (10 × 9 × 8) ÷ (3 × 2 × 1) = 120 equipes. Se fosse para escolher **1 Coordenador, 1 Supervisor e 1 Relator**, a ordem importaria: **Arranjo** A_(10,3) = 10 × 9 × 8 = 720 maneiras!

#### 4. Material Complementar e Aprofundamento (Pesquisa Acadêmica, Jurisprudência e Atualizações Normativas)

**Destaques de Prova: Soma dos Termos da PA/PG e Probabilidade Condicional / Complementar:**
• **Termo Médio da PA (Atalho Rápido):** Em qualquer PA com número ímpar de termos, o termo central é exatamente a **média aritmética de todos os termos**! Assim, se a soma de 5 termos em PA é 100, o 3º termo (do meio) vale imediatamente 100 ÷ 5 = 20!
• **Probabilidade Complementar ('Pelo menos um'):** Se a questão pedir a probabilidade de que, em 3 sorteios independentes, saia **pelo menos um** imóvel positivo, calcule P(pelo menos 1) = 1 - P(nenhum).

### Modo B — Resumo, Mnemônicos e Pegadinhas

**DECISÃO EM 5 SEGUNDOS — ARRANJO vs. COMBINAÇÃO:**

• Escolher **Coordenador e Relator** (cargos diferentes → Maria/João ≠ João/Maria) = **ARRANJO** (não divide por p!).

• Escolher uma **dupla/equipe/comissão** de campo (funções iguais → Maria/João = João/Maria) = **COMBINAÇÃO** (divide por p!). *Mnemônico: "Comissão é Combinação!"*

### Modo C — Questões Comentadas (Padrão IBGP)

**Q1. (Questão Autoral Inédita — Perfil Edital SEMUSA/IBGP) De um grupo de 8 Agentes de Combate às Endemias, deseja-se escolher uma equipe de 3 agentes para realizar uma ação educativa em uma escola de Porto Velho, sem distinção de função entre os escolhidos. De quantas maneiras distintas essa equipe de 3 agentes pode ser formada?**
- A) 24 maneiras.
- B) 56 maneiras.
- C) 168 maneiras.
- D) 336 maneiras.
> **Comentário:** Gabarito: B. Como não há distinção de cargos/funções dentro da equipe (a ordem não importa), trata-se de Combinação de 8 tomados 3 a 3: C(8,3) = (8 x 7 x 6) / (3 x 2 x 1) = 336 / 6 = 56 equipes distintas.

---

## Bloco 27.2 — Desenvolvimento Integral Passo a Passo, Subassuntos Destrinchados, Estudos de Caso Resolvidos e Atividade Prática de Fixação (Análise Combinatória (PFC, Arranjos, Permutações e Combinações) e Probabilidade)

### Modo A — Teoria Aprofundada e Texto Legal Integral

#### 1. Objetivo Claro da Aula & Alinhamento ao Conteúdo Programático Oficial (Anexo IV ACE — IBGP)

**Aula 27:** 27. Sequências Lógicas, Progressão Aritmética (PA), Progressão Geométrica (PG), Análise Combinatória e Probabilidade
 **Correspondência no Edital nº 25/2026 (Anexo IV):** Anexo IV — Raciocínio Lógico (Nível Médio/ACE): Sequências numéricas, de letras e figuras; PA e PG; Princípio fundamental da contagem, arranjo, permutação, combinação e probabilidade.

Objetivos Específicos de Aprendizagem desta Aula:

- Dominar o Princípio Fundamental da Contagem (PFC — Regra do 'E' = Multiplica; Regra do 'OU' = Soma) e o cálculo de Fatorial (n!, com 0! = 1 e 1! = 1).
- Diferenciar pelo enunciado e calcular sem hesitar Permutação Simples (Pₙ = n!), Permutação com Repetição (anagramas com letras repetidas), Arranjo Simples (Aₙ,ₚ — a ordem IMPORTA!) e Combinação Simples (Cₙ,ₚ — a ordem NÃO importa!).
- Compreender os conceitos de Espaço Amostral (Ω), Evento (E) e calcular a Probabilidade simples P(E) = Casos Favoráveis ÷ Casos Possíveis (em fração, decimal e porcentagem).
- Resolver problemas de Probabilidade da União de Eventos (Regra do 'OU': P(A ∪ B) = P(A) + P(B) − P(A ∩ B)), Probabilidade de Eventos Independentes/Sucessivos (Regra do 'E' com e sem reposição: P(A) × P(B)) e Probabilidade Complementar (P(Aᶜ) = 1 − P(A)).

#### 2. Conteúdo Teórico e Técnico Aprofundado (Explicações Passo a Passo, Sem Atalhos — Nível Livro Didático)

#### 1. Análise Combinatória: PFC, Permutação, Arranjo e Combinação

Para nunca mais confundir **Arranjo** com **Combinação** na prova da IBGP, faça apenas uma pergunta: **"Se eu trocar a ordem dos escolhidos, muda o resultado/cargo?"**

- **1. Princípio Fundamental da Contagem (PFC — Princípio Multiplicativo):** Se uma decisão tem **m** opções E outra etapa independente tem **n** opções, o total de possibilidades é **m × n**.
- **2. Permutação Simples (**Pₙ = n!**):** Usada para trocar a posição de **TODOS** os **n** elementos (ex: fila com 5 pessoas **⇒ 5! = 5 × 4 × 3 × 2 × 1 = 120**; anagramas da palavra SAÚDE **⇒ 5! = 120**). Se houver letras repetidas (ex: ARARA tem 5 letras, com 3 A e 2 R), usa-se **Permutação com Repetição**: **P₅^(3,2) = (5!/3! · 2!) = (120/6 · 2) = 10** anagramas!
- **3. Arranjo Simples (**A_(n,p) = (n!/(n-p)!)** — A ORDEM IMPORTA!):** Escolhemos **p** elementos entre **n** disponíveis, e a ordem/função de cada escolhido faz diferença! Exemplos: formar senhas com algarismos distintos, pódio (1º, 2º e 3º lugar), escolher Presidente e Vice-Presidente.
- **4. Combinação Simples (**C_(n,p) = (n!/p! · (n-p)!)** — A ORDEM NÃO IMPORTA!):** Escolhemos um grupo/comissão/equipe de **p** elementos entre **n** disponíveis onde todos têm a mesma função! (Escolher João e Maria para a equipe de campo é a mesma equipe que escolher Maria e João!). Dica prática: abra o número de cima na quantidade de fatores do número de baixo e divida pelo fatorial do de baixo! Ex: **C_(6,2) = (6 × 5/2 × 1) = 15**.

#### 2. Probabilidade: Conceitos Básicos e Cálculo em Espaços Amostrais Finitos (Questão da Apostila!)

- **Espaço Amostral (**Ω** — Questão SELECON da sua apostila!):** É o **conjunto de TODOS os resultados possíveis** em um experimento aleatório ou estatístico (ex: no lançamento de um dado comum, **Ω = {1, 2, 3, 4, 5, 6}**).
- **Evento (**A**):** Qualquer subconjunto do espaço amostral (os resultados que queremos/favoráveis).
- **Fórmula Clássica da Probabilidade de Laplace:** **P(A) = [Número de casos FAVORÁVEIS n(A)] / [Número de casos POSSÍVEIS n(Ω)]** — A probabilidade é sempre um número entre **0 (0%)** e **1 (100%)**.
- **Regra do "E" (Multiplicação) x Regra do "OU" (Soma):** Probabilidade de ocorrer **A** **E** **B** **⇒** multiplica (**P(A) × P(B)**). Probabilidade de ocorrer **A** **OU** **B** **⇒** soma (**P(A) + P(B) - P(A ∩ B)**).

#### 4. Aprofundamento: O Teste da Inversão para Nunca Confundir Arranjo com Combinação na Prova IBGP!

Conforme as apostilas `Análise Combinatória.pdf` e `Probabilidade.pdf` da sua subpasta `1 - RACICIONIO LOGICO`, a dúvida nº 1 em Análise Combinatória é saber quando usar **Arranjo** e quando usar **Combinação**. Aplique o **Teste de Ouro da Inversão**:

- **Faça um exemplo com 2 ou 3 elementos (ex: Ana e Bruno) e inverta a ordem deles (Bruno e Ana):** • **Se ao inverter a ordem surgir um resultado DIFERENTE → A ORDEM IMPORTA = ARRANJO (ou PFC direto pelos tracinhos)!** *Gatilhos clássicos de Arranjo:* senhas, números de telefone, placas de veículos, pódio (1º, 2º e 3º lugar), diretoria com cargos distintos (Presidente, Vice e Secretário), fila ou assentos numerados. *Atalho sem precisar decorar fórmula de Arranjo:* Se são 3 vagas distintas para escolher entre 10 pessoas, faça simplesmente 3 tracinhos e multiplique decrescendo: **`10 × 9 × 8 = 720 maneiras`**! • **Se ao inverter a ordem o grupo continuar sendo EXATAMENTE O MESMO (Ana e Bruno = Bruno e Ana) → A ORDEM NÃO IMPORTA = COMBINAÇÃO!** *Gatilhos clássicos de Combinação:* formar comissões, equipes ou grupos de trabalho sem cargos definidos, escolher questões de uma prova, escolher frutas para uma vitamina, apertos de mão, jogos de loteria (Mega-Sena) ou escolher pontos para formar triângulos/retas. *Atalho Rápido para Calcular Combinação `C(n, p)` em 10 segundos:* Se quer calcular `C(10, 3)`, abra 3 fatores decrescentes em cima (`10 × 9 × 8`) e divida por `3!` embaixo (`3 × 2 × 1`): **`C(10, 3) = (10 × 9 × 8) ÷ (3 × 2 × 1) = 720 ÷ 6 = 120 equipes`**!

#### 5. Anagramas (Com e Sem Repetição de Letras)

Anagrama é qualquer reordenação (com ou sem sentido) das letras de uma palavra:

- **Palavra SEM letras repetidas (Permutação Simples `Pₙ = n!`):** • Quantos anagramas tem a palavra **`SAUDE`** (5 letras todas distintas)? `P₅ = 5! = 5 × 4 × 3 × 2 × 1 = 120 anagramas`! (Dica: decore os fatoriais básicos: `0! = 1; 1! = 1; 2! = 2; 3! = 6; 4! = 24; 5! = 120; 6! = 720; 7! = 5.040`!).
- **Palavra COM letras repetidas (Permutação com Repetição `Pₙ^(a,b) = n! ÷ (a! × b!)`):** • Quantos anagramas tem a palavra **`SEMUSA`**? Total = 6 letras, mas a letra **S** repete 2 vezes! Logo: `P₆² = 6! ÷ 2! = 720 ÷ 2 = 360 anagramas`! • E a palavra **`ARARA`**? Total = 5 letras, onde o **A** repete 3 vezes e o **R** repete 2 vezes: `P₅^(3,2) = 5! ÷ (3! × 2!) = 120 ÷ (6 × 2) = 120 ÷ 12 = 10 anagramas`!

#### 6. Os 4 Pilares da Probabilidade na Banca IBGP (Simples, União, Multiplicação e Complementar)

- **1. Probabilidade Simples:** `P(A) = n(A) ÷ n(Ω) = (Casos Favoráveis) ÷ (Total de Casos Possíveis)`. O resultado é sempre um número entre 0 e 1 (ou entre 0% e 100%).
- **2. Probabilidade da União — Regra do "OU" (Sorteio de 1 único elemento com duas características possíveis):** • **`P(A ∪ B) = P(A) + P(B) − P(A ∩ B)`** (Some a probabilidade de A com a de B e **desconte a interseção** para não contar os repetidos duas vezes!).
- **3. Probabilidade da Multiplicação — Regra do "E" (Sorteios Sucessivos com ou sem Reposição):** • Quando ocorrem dois eventos em sequência (1º sorteio **E** 2º sorteio), **MULTIPLICAM-SE as probabilidades: `P(A e B) = P(A) × P(B|A)`**. • **Atenção a "SEM REPOSIÇÃO":** Se o 1º item sorteado não é devolvido à urna, no 2º sorteio o total do denominador diminui em 1 unidade!
- **4. Probabilidade do Evento Complementar (Truque do "Pelo Menos Um"):** • Sempre que a questão pedir a probabilidade de ocorrer **"PELO MENOS UM"** acerto/caso positivo em vários testes, calcule `100% − Probabilidade de NENHUM`: **`P(Pelo menos 1) = 1 − P(Nenhum)`**!

##### Desdobramento Analítico de Todos os Subtópicos das Apostilas (6 Subtópicos Integrados)

2.3.1Princípio Fundamental da Contagem (PFC), Permutação Simples e Permutação com Repetição (Anagramas) 20. Análise Combinatória.pdf (559.064 tokens)

Na apostila '20. Análise Combinatória.pdf' (559 mil tokens!): • Princípio Multiplicativo (PFC): se uma decisão tem m opções E outra tem n opções, há m × n maneiras; • Permutação Simples (trocar todos os n elementos de lugar): Pₙ = n! (ex: 5! = 5 × 4 × 3 × 2 × 1 = 120); • Permutação com Repetição (anagramas de palavras com letras repetidas, como ARARA: 5 letras, sendo 3 'A' e 2 'R'): P₅³'² = 5! / (3! · 2!) = 120 / (6 · 2) = 10 anagramas.

2.3.2Diferença Decisiva entre Arranjo Simples (Ordem Importa!) e Combinação Simples (Ordem Não Importa!) 20. Análise Combinatória.pdf

Para escolher p elementos dentre n disponíveis (p < n), faça a pergunta: 'Se eu inverter a ordem dos escolhidos, muda o resultado?': • SIM, A ORDEM IMPORTA (senhas, pódio 1º/2º/3º lugar, cargos distintos de presidente e tesoureiro) → ARRANJO: Aₙ,ₚ = n! / (n - p)!; • NÃO, A ORDEM NÃO IMPORTA (formar comissões, equipes de plantão, grupos de trabalho, duplas, apertos de mão) → COMBINAÇÃO: Cₙ,ₚ = n! / [p! · (n - p)!].

2.3.3Probabilidade em Espaços Amostrais Finitos: Definição de Laplace, União, Eventos Independentes e Complementar 21. Probabilidade.pdf (200.807 tokens)

Na apostila '21. Probabilidade.pdf': • Probabilidade de um evento A no espaço amostral finito Ω: P(A) = nº de casos favoráveis n(A) / nº total de casos possíveis n(Ω) (sempre 0 ≤ P(A) ≤ 1, ou de 0% a 100%); • Probabilidade do Evento Complementar ('pelo menos um'): P(A) = 1 - P(Aᶜ); • Probabilidade da União ('A OU B'): P(A ∪ B) = P(A) + P(B) - P(A ∩ B); • Probabilidade de Eventos Simultâneos Independentes ('A E B'): P(A ∩ B) = P(A) × P(B).

##### Esquema Decisório: Análise Combinatória (Arranjo vs. Combinação vs. Permutação) e Probabilidade

1. **Etapa 1:** 1. ÁRVORE DE DECISÃO DE CONTAGEM → Usa todos os elementos trocando de posição? SIM = PERMUTAÇÃO (Sem repetição = n! | Com repetição = n! / a!b!) → Usa apenas uma parte (p de n elementos)? Faça o Teste da Inversão: A ordem muda o resultado (cargos/senhas/pódio)? SIM = ARRANJO (multiplica os tracinhos) | A ordem NÃO muda o grupo (equipes/comissões)? NÃO = COMBINAÇÃO (multiplica em cima e divide por p! embaixo).
2. **Etapa 2:** 2. CONECTIVOS NA CONTAGEM E NA PROBABILIDADE → Conectivo 'E' (etapas sucessivas: 1ª escolha E 2ª escolha) = MULTIPLICA (×) | Conectivo 'OU' (caminhos alternativos: caso A OU caso B) = SOMA (+) descontando a interseção.
3. **Etapa 3:** 3. PROBABILIDADE SEM REPOSIÇÃO vs. COM REPOSIÇÃO → Sem reposição: a cada retirada, diminui 1 no total do denominador (e diminui 1 no numerador se for da mesma categoria) | Com reposição: o denominador permanece constante.

**Conexão Transversal no Edital nº 25/2026:** Integra a Teoria dos Conjuntos (Aula rlm_5) e as Frações/Porcentagens (Aula rlm_2), encerrando o programa de Raciocínio Lógico do Edital nº 25/2026.

##### Glossário Técnico e Conceitos Fundamentais de Prova

Espaço Amostral (Ω)

Conjunto de todos os resultados possíveis de um experimento aleatório (Gabarito da questão SELECON da apostila!).

Arranjo vs. Combinação

No Arranjo a ordem importa (senhas, pódio, cargos diferentes); na Combinação a ordem NÃO importa (comissões, equipes de trabalho, duplas de plantão).

Probabilidade Complementar

A probabilidade de um evento NÃO ocorrer é P(~A) = 1 - P(A) (ou 100% - P(A)).

Modus Ponens e Modus Tollens

Modus Ponens: se (p -> q) é V e p é V, conclui-se que q é V. Modus Tollens: se (p -> q) é V e q é F, conclui-se que p é F.

Conjunto das Partes (2ⁿ)

Total de subconjuntos possíveis de um conjunto com n elementos (inclui o conjunto vazio e o próprio conjunto).

Princípio da Inclusão-Exclusão

n(A U B) = n(A) + n(B) - n(A ∩ B).

##### Quadro Comparativo: Permutação x Arranjo x Combinação

| Técnica | Usa todos os elementos? | A ordem importa? | Exemplo Clássico de Prova |
| :--- | :--- | :--- | :--- |
| Permutação (Pn = n!) | SIM (usa todos) | SIM | Filas e Anagramas de uma palavra |
| Arranjo (An,p) | NÃO (escolhe parte) | SIM (muda o resultado) | Senhas, pódio (1º, 2º, 3º), Presidente e Secretário |
| Combinação (Cn,p) | NÃO (escolhe parte) | NÃO (mesmo grupo) | Comissões, equipes de plantão, grupos de estudo |

#### 3. Contextualização, Exemplos Práticos e Estudos de Caso Aplicados Passo a Passo

Estudo de Caso Resolvido #1: Exemplo Resolvido 1 (Combinação vs. Arranjo e Comissões Mistas): Equipe da SEMUSA

**Situação-Problema / Enunciado:** Em uma unidade de vigilância trabalham 6 Agentes de Combate às Endemias (ACE) e 4 Agentes Comunitários de Saúde (ACS). De quantas maneiras distintas o coordenador pode formar uma comissão de trabalho composta por exatamente 3 ACEs e 2 ACSs (sem distinção de cargos dentro da comissão)?

1. **Passo 1:** Passo 1 (Teste da Inversão — Arranjo ou Combinação?): Como dentro da comissão não há distinção de cargos, escolher {João, Maria, Pedro} é a mesma comissão que {Pedro, Maria, João}. A ordem NÃO importa = COMBINAÇÃO!
2. **Passo 2:** Passo 2 (Calcular a escolha dos 3 ACEs dentre os 6 — C(6, 3)): C(6, 3) = (6 × 5 × 4) ÷ (3 × 2 × 1) = 120 ÷ 6 = 20 maneiras.
3. **Passo 3:** Passo 3 (Calcular a escolha dos 2 ACSs dentre os 4 — C(4, 2)): C(4, 2) = (4 × 3) ÷ (2 × 1) = 12 ÷ 2 = 6 maneiras.
4. **Passo 4:** Passo 4 (Aplicar o Princípio Multiplicativo — escolher 3 ACEs 'E' 2 ACSs): Total = 20 × 6 = 120 comissões distintas.

**Conclusão e Aplicação Direta na Prova IBGP:** Podem ser formadas 120 comissões distintas.

Estudo de Caso Resolvido #2: Exemplo Resolvido 2 (Probabilidade Sem Reposição): Sorteio de Lâminas Positivas

**Situação-Problema / Enunciado:** Em uma caixa de laboratório há 10 lâminas de Gota Espessa, das quais 4 são positivas para Malária e 6 são negativas. Se um microscopista retirar aleatoriamente 2 lâminas em sequência, SEM reposição, qual é a probabilidade de que AMBAS as lâminas retiradas sejam positivas?

1. **Passo 1:** Passo 1 (Probabilidade de a 1ª lâmina ser positiva): Há 4 positivas em um total de 10 lâminas → P(1ª Positiva) = 4/10.
2. **Passo 2:** Passo 2 (Probabilidade de a 2ª lâmina também ser positiva, SEM reposição): Agora restam 9 lâminas ao todo na caixa, sendo 3 positivas → P(2ª Positiva | 1ª Positiva) = 3/9.
3. **Passo 3:** Passo 3 (Multiplicar as duas probabilidades — 1ª positiva E 2ª positiva): P = (4/10) × (3/9) = 12/90. Simplificando por 6: P = 2/15 (ou aproximadamente 13,33%).

**Conclusão e Aplicação Direta na Prova IBGP:** A probabilidade de ambas serem positivas é de 2/15.

Estudo de Caso Resolvido #3: Exemplo Resolvido 3 (Anagramas com Repetição): Palavra ENDEMIA

**Situação-Problema / Enunciado:** Quantos anagramas distintos podem ser formados com todas as letras da palavra ENDEMIA?

1. **Passo 1:** Passo 1 (Contar o total de letras e as repetições): E-N-D-E-M-I-A possui 7 letras ao todo. A letra 'E' repete 2 vezes, e as demais letras (N, D, M, I, A) aparecem 1 vez cada.
2. **Passo 2:** Passo 2 (Aplicar a fórmula de Permutação com Repetição): P₇² = 7! ÷ 2! = (7 × 6 × 5 × 4 × 3 × 2!) ÷ 2! = 7 × 6 × 5 × 4 × 3 = 5.040 ÷ 2 = 2.520 anagramas.

**Conclusão e Aplicação Direta na Prova IBGP:** A palavra ENDEMIA possui 2.520 anagramas distintos.

Estudo de Caso Resolvido #4: Exemplo Resolvido 1 (Diagrama de Venn com 2 Conjuntos): Pesquisa de Focos de Dengue e Malária

**Situação-Problema / Enunciado:** Em uma inspeção em 100 terrenos de uma área periurbana de Porto Velho, os ACEs constataram que: 45 terrenos possuíam focos de Aedes aegypti (Grupo A), 30 terrenos possuíam criadouros de Anopheles (Grupo B) e 15 terrenos possuíam focos de AMBOS os vetores (A ∩ B). Pergunta-se: (a) Quantos terrenos possuíam APENAS focos de Aedes aegypti? (b) Quantos terrenos possuíam pelo menos um dos dois tipos de foco (A ∪ B)? (c) Quantos terrenos NÃO possuíam nenhum dos dois focos?

1. **Passo 1:** Passo 1 (Começar SEMPRE pela interseção A ∩ B = 15): 15 terrenos têm ambos os focos.
2. **Passo 2:** Passo 2 (Responder ao item a — APENAS Aedes aegypti): Subtraia a interseção do total do conjunto A: Apenas A = 45 − 15 = 30 terrenos (e Apenas B = 30 − 15 = 15 terrenos).
3. **Passo 3:** Passo 3 (Responder ao item b — União A ∪ B): Somando as três regiões disjuntas (Apenas A + Ambos + Apenas B) = 30 + 15 + 15 = 60 terrenos (ou pela fórmula: 45 + 30 − 15 = 60).
4. **Passo 4:** Passo 4 (Responder ao item c — Nenhum dos dois): Total de terrenos (100) menos a União (60) = 100 − 60 = 40 terrenos livres de focos.

**Conclusão e Aplicação Direta na Prova IBGP:** (a) 30 terrenos apenas com Aedes; (b) 60 terrenos na união; (c) 40 terrenos sem nenhum foco.

Estudo de Caso Resolvido #5: Exemplo Resolvido 2 (Argumentação Lógica — Efeito Dominó): Dedução a partir de Premissas

**Situação-Problema / Enunciado:** Considere verdadeiras as três premissas: (P1) 'Se Marcos é ACE, então Júlia é ACS'; (P2) 'Se Júlia é ACS, então Lucas trabalha na UBS'; (P3) 'Lucas NÃO trabalha na UBS'. Qual é a conclusão logicamente válida sobre Marcos e Júlia?

1. **Passo 1:** Passo 1 (Começar pela proposição simples P3): Sabemos que 'Lucas NÃO trabalha na UBS' é VERDADEIRA. Logo, 'Lucas trabalha na UBS' é FALSA (F).
2. **Passo 2:** Passo 2 (Substituir em P2 — 'Se Júlia é ACS → Lucas trabalha na UBS [F]'): Para que a condicional P2 seja verdadeira e não dê Vera Fischer (V → F), o antecedente 'Júlia é ACS' tem que ser obrigatoriamente FALSO (F)! Logo, Júlia NÃO é ACS.
3. **Passo 3:** Passo 3 (Substituir em P1 — 'Se Marcos é ACE → Júlia é ACS [F]'): Novamente, como o consequente é F, o antecedente 'Marcos é ACE' tem que ser FALSO (F)! Logo, Marcos NÃO é ACE.

**Conclusão e Aplicação Direta na Prova IBGP:** Conclusão válida: Marcos não é ACE e Júlia não é ACS.

Estudo de Caso Resolvido #6: Exemplo Resolvido 3 (Sequência Cíclica de Letras): Posição 2026 na Palavra PORTOVELHO

**Situação-Problema / Enunciado:** Considere a sequência infinita formada pela repetição das 10 letras de PORTOVELHO: P-O-R-T-O-V-E-L-H-O-P-O-R-T-O-V-E-L-H-O... Qual letra ocupará a posição de número 2.026?

1. **Passo 1:** Passo 1 (Contar o tamanho do bloco que se repete): P(1) - O(2) - R(3) - T(4) - O(5) - V(6) - E(7) - L(8) - H(9) - O(10) → bloco de 10 letras.
2. **Passo 2:** Passo 2 (Dividir a posição 2.026 por 10 e olhar o resto): 2.026 ÷ 10 dá quociente 202 e RESTO = 6.
3. **Passo 3:** Passo 3 (Pegar a 6ª letra do bloco): 1ª=P, 2ª=O, 3ª=R, 4ª=T, 5ª=O, 6ª=V.

**Conclusão e Aplicação Direta na Prova IBGP:** A posição 2.026 será ocupada pela 6ª letra do bloco, que é a letra 'V'.

• **Aplicação no Cotidiano do ACE:** Em uma urna há 4 fichas verdes (imóveis sem foco) e 6 fichas vermelhas (imóveis com foco), totalizando 10 fichas (Espaço Amostral = 10). Ao sortear 1 ficha ao acaso, a probabilidade de sair uma ficha verde é 4/10 = 0,4 = 40%.

#### 4. Material Complementar e Aprofundamento (Regras Comentadas pelo Professor, Diferenças Críticas e Jurisprudência)

• Regra Técnica #1: Fatoriais que Você Deve Saber de Cor na Hora da Prova: 0! = 1; 1! = 1; 2! = 2; 3! = 6; 4! = 24; 5! = 120; 6! = 720; 7! = 5.040.

**Comentário Tático do Professor (Banca IBGP):** Saber até o 6! = 720 e 7! = 5.040 economiza vários minutos de multiplicação manual na prova de Raciocínio Lógico!

• Regra Técnica #2: Como Calcular Combinação Sem Fórmula Complicada: Para calcular C(8, 3), coloque 3 números decrescentes em cima (8 × 7 × 6) e divida por 3! (3 × 2 × 1 = 6) embaixo: corta o 6 com o 6 e sobra 8 × 7 = 56!

**Comentário Tático do Professor (Banca IBGP):** E lembre-se da propriedade complementar: C(10, 8) é exatamente igual a C(10, 2) = (10 × 9) ÷ 2 = 45!

• Regra Técnica #3: Regra de Ouro do Diagrama de Venn: Sempre comece a preencher o diagrama pela INTERSEÇÃO CENTRAL (quem faz parte de todos os conjuntos ao mesmo tempo) e vá descontando esse valor ao preencher as demais regiões!

**Comentário Tático do Professor (Banca IBGP):** Se o enunciado disser que '40 gostam de A, 30 gostam de B e 10 gostam de ambos', nunca coloque 40 direto na bolinha de A: coloque 10 no meio e 40 − 10 = 30 na parte exclusiva de A!

• Regra Técnica #4: ComoDescobrir a Interseção quando a Questão Não Dá: Some o grupo A + grupo B + grupo 'Nenhum'. O quanto essa soma PASSAR do Total de pessoas pesquisadas é exatamente a Interseção (A ∩ B)!

**Comentário Tático do Professor (Banca IBGP):** Exemplo: Total = 100 pessoas; A = 70; B = 50; Nenhum = 10. Somando tudo: 70 + 50 + 10 = 130. Passou 30 de 100 → logo, a interseção (A ∩ B) vale exatamente 30!

Arranjo Simples vs. Combinação Simples

No Arranjo a ordem dos escolhidos altera o resultado (senhas, pódio, cargos distintos); na Combinação a ordem não altera o grupo (comissões, equipes), exigindo dividir por p!.

Sorteio COM Reposição vs. Sorteio SEM Reposição

Com reposição o total de elementos na urna volta a ser o mesmo; Sem reposição o total do denominador diminui 1 unidade a cada retirada.

Pertinência (∈ / ∉) vs. Inclusão (⊂ / ⊄)

Pertinência relaciona ELEMENTO com conjunto (2 ∈ {1,2}); Inclusão relaciona CONJUNTO com conjunto ({2} ⊂ {1,2}).

Elementos de A: n(A) vs. Elementos de 'Apenas A': n(A − B)

n(A) inclui toda a bolinha de A (inclusive a interseção); 'Apenas A' exclui a interseção: n(A) − n(A ∩ B).

Pegadinhas Clássicas da Banca IBGP neste Tópico:

- Questão da Apostila (SELECON / 2021): 'O conjunto de todos os resultados possíveis em um experimento estatístico é chamado de: C) espaço amostral'.
- Dica para não errar Combinação na prova: 'De quantas formas podemos escolher uma dupla de agentes dentre 8 disponíveis?' Como a ordem na dupla não importa, é Combinação de 8 tomados 2 a 2: (8 × 7) / 2 = 28 duplas!
- Regra de Ouro do Diagrama de Venn: Se 30 moradores tiveram Dengue, 20 tiveram Chikungunya e 8 tiveram AMBAS as doenças, quantos moradores tiveram pelo menos uma das duas? NUNCA some 30 + 20 + 8! Subtraia a interseção: 30 + 20 - 8 = 42 moradores!
- No problema de sequências cíclicas, se o resto da divisão der ZERO (divisão exata), a resposta é o ÚLTIMO elemento do ciclo!

#### 5. Exercício / Atividade Prática de Fixação com Orientações de Execução Passo a Passo

Atividade Prática de Fixação da Aula 27 — Progressão Aritmética (PA), Progressão Geométrica (PG), Análise Combinatória e Probabilidade

**Enunciado da Atividade Prática:** Resolva 3 problemas de prova: (1) Um agente visitou 20 imóveis no 1º dia e aumentou sua meta em 4 imóveis por dia (PA de razão r = 4); quantos imóveis visitou no 10º dia e qual a soma total nos 10 dias?; (2) De um grupo de 7 agentes, de quantas maneiras distintas podemos escolher uma comissão de 3 agentes (sem cargos definidos) vs. escolher 1 Coordenador, 1 Relator e 1 Digitador?; (3) Sorteando ao acaso 1 imóvel entre 20 (dos quais 5 têm foco de Aedes), qual a probabilidade de sortear 2 imóveis seguidos sem reposição e ambos terem foco?

Orientações de Execução Passo a Passo e Gabarito de Conferência:

1. **Passo 1 (Termo Geral e Soma da PA):** No Problema (1), temos a1 = 20, r = 4 e n = 10. Pelo termo geral: a10 = a1 + (10 - 1)r = 20 + 9 x 4 = 20 + 36 = 56 imóveis no 10º dia. Pela soma da PA: S10 = [(a1 + a10) x 10] / 2 = [(20 + 56) x 10] / 2 = 76 x 5 = 380 imóveis no total dos 10 dias!
2. **Passo 2 (Combinação Simples vs. Arranjo Simples):** No Problema (2), para formar uma comissão de 3 pessoas sem cargos distintos, a ordem NÃO importa -> COMBINAÇÃO: C(7,3) = (7 x 6 x 5) / (3 x 2 x 1) = 35 comissões possíveis. Já para escolher 3 cargos distintos (Coordenador, Relator e Digitador), a ordem IMPORTA -> ARRANJO: A(7,3) = 7 x 6 x 5 = 210 maneiras distintas!
3. **Passo 3 (Probabilidade Condicional / Sem Reposição):** No Problema (3), a probabilidade de o 1º imóvel sorteado ter foco é 5/20 (1/4); dado que o 1º tinha foco e não houve reposição, restam 4 imóveis com foco em um total de 19 imóveis (4/19). Pela regra do 'E' (multiplicação): P = (5/20) x (4/19) = (1/4) x (4/19) = 1/19 (aprox. 5,26%).

Bateria Rápida de Recuperação Ativa (Perguntas e Respostas Diretas):

Pergunta de Fixação #1: De quantas maneiras distintas podemos escolher uma equipe de 3 agentes dentre 7 disponíveis?

**Gabarito / Conferência Imediata:** Como a ordem não importa, é Combinação C(7, 3) = (7 × 6 × 5) ÷ (3 × 2 × 1) = 210 ÷ 6 = 35 maneiras.

Pergunta de Fixação #2: Quantos anagramas distintos possui a palavra RONDONIA?

**Gabarito / Conferência Imediata:** R-O-N-D-O-N-I-A tem 8 letras, com 2 letras 'O' e 2 letras 'N': 8! ÷ (2! × 2!) = 40.320 ÷ 4 = 10.080 anagramas.

Pergunta de Fixação #3: Em uma urna com 5 bolas verdes e 3 bolas vermelhas, retiram-se 2 bolas sem reposição. Qual a probabilidade de saírem 2 bolas vermelhas?

**Gabarito / Conferência Imediata:** P = (3/8) × (2/7) = 6/56 = 3/28.

Pergunta de Fixação #4: Ao sortear um número inteiro de 1 a 20, qual a probabilidade de ele ser múltiplo de 4 OU múltiplo de 5?

**Gabarito / Conferência Imediata:** Múltiplos de 4 = {4,8,12,16,20} (5 números); Múltiplos de 5 = {5,10,15,20} (4 números); Interseção (múltiplo de 20) = {20} (1 número). Logo: P = (5 + 4 − 1) / 20 = 8/20 = 2/5 = 40%.

Pergunta de Fixação #5: Em um grupo de 50 agentes, 32 atuam no combate à dengue, 25 no combate à malária e 5 atuam em outras áreas (nenhuma das duas). Quantos agentes atuam simultaneamente no combate à dengue e à malária?

**Gabarito / Conferência Imediata:** Somando tudo: 32 + 25 + 5 = 62. O quanto passou de 50 é a interseção: 62 − 50 = 12 agentes atuam em ambas.

Pergunta de Fixação #6: Quantos subconjuntos possui um conjunto A formado por 5 elementos?

**Gabarito / Conferência Imediata:** Pela fórmula do Conjunto das Partes: 2⁵ = 32 subconjuntos.

Pergunta de Fixação #7: Na sequência infinita S-A-U-D-E-S-A-U-D-E..., qual letra ocupa a 80ª posição?

**Gabarito / Conferência Imediata:** O bloco 'SAUDE' tem 5 letras. Dividindo 80 por 5, o resto é 0 (divisão exata). Logo, é a última letra do bloco: 'E'.

Pergunta de Fixação #8: Se 'Todo ACE é dedicado' e 'Nenhum preguiçoso é dedicado', o que se conclui necessariamente sobre 'ACE' e 'preguiçoso'?

**Gabarito / Conferência Imediata:** Que 'Nenhum ACE é preguiçoso' (pois o círculo de ACE está dentro de dedicados, que é totalmente separado de preguiçosos).

Checklist de Domínio Obrigatório antes de avançar para a próxima Aula:

- ✓ Memorizei os fatoriais de 0! a 7! e o Princípio Fundamental da Contagem.
- ✓ Sei aplicar o Teste da Inversão para distinguir imediatamente Arranjo (ordem importa) de Combinação (ordem não importa).
- ✓ Dominei o cálculo de anagramas com e sem repetição de letras.
- ✓ Fixei as 4 regras de Probabilidade (Simples, União 'OU', Multiplicação 'E' com/sem reposição e Evento Complementar).

### Modo B — Resumo, Mnemônicos e Pegadinhas

1. Definições Essenciais de Bolso:

- **Arranjo Simples (Aₙ,ₚ):** Agrupamento ordenado de p elementos escolhidos dentre n disponíveis, no qual a ORDEM dos elementos IMPORTA (ex: senhas, pódio, cargos de Presidente e Vice).
- **Combinação Simples (Cₙ,ₚ):** Subconjunto não ordenado de p elementos escolhidos dentre n disponíveis, no qual a ORDEM dos elementos NÃO importa (ex: comissões, equipes, duplas de plantão).
- **Probabilidade Clássica de Laplace:** Razão entre o número de elementos do evento favorável n(E) e o número total de elementos do espaço amostral equiprovável n(Ω): P(E) = n(E) / n(Ω).

2. Gatilhos de Prova e Associações Rápidas (Banca IBGP):

- **Ordem IMPORTA (Cargos, Senhas, Pódio):** → ARRANJO (multiplica apenas os tracinhos!).
- **Ordem NÃO importa (Comissão, Equipe, Grupo):** → COMBINAÇÃO (multiplica os tracinhos e divide pelo fatorial das vagas!).
- **Anagramas com Letras Repetidas:** → Divide o fatorial do total pelo fatorial das letras repetidas: n! ÷ (a! × b!).
- **Probabilidade: 'OU' vs. 'E':** → 'OU' = Soma (descontando interseção) | 'E' = Multiplica.

Quadro Resumo: Fórmulas de Análise Combinatória e Probabilidade

| Conceito / Caso | Fórmula / Método Prático | Exemplo Clássico de Prova (IBGP) |
| :--- | :--- | :--- |
| Permutação Simples (Pₙ) | Pₙ = n! | Anagramas de SAUDE (5 letras) = 5! = 120 |
| Permutação com Repetição | Pₙ^(a,b) = n! ÷ (a! × b!) | Anagramas de SEMUSA (6 letras, 2 'S') = 6! ÷ 2! = 360 |
| Arranjo Simples (Ordem Importa) | A(n, p) = n × (n−1) × ... (p fatores) | Escolher Presidente e Vice entre 8 = 8 × 7 = 56 |
| Combinação (Ordem Não Importa) | C(n, p) = A(n, p) ÷ p! | Escolher dupla de plantão entre 8 = (8 × 7) ÷ 2 = 28 |
| Probabilidade da União ('OU') | P(A ∪ B) = P(A) + P(B) − P(A ∩ B) | Sorteio de 1 ficha que seja par OU maior que 6 |
| Probabilidade Sucessiva ('E') | P(A ∩ B) = P(A) × P(B\|A) | Retirar 2 bolas seguidas sem reposição |

3. O que você precisa lembrar na hora da prova:

1. Fatoriais: 0! = 1; 3! = 6; 4! = 24; 5! = 120; 6! = 720.
2. Ordem importa = Arranjo; Ordem não importa (comissão/equipe) = Combinação (divide por p!).
3. Anagramas com repetição = n! ÷ (repetidas!).
4. Probabilidade = Favoráveis ÷ Possíveis; 'E' multiplica; 'OU' soma (menos a interseção).
5. Argumentos: Premissas = V; comece pela simples ou pelo 'E'.
6. Conjuntos: comece pela interseção; n(A ∪ B) = n(A) + n(B) − n(A ∩ B); Total de subconjuntos = 2ⁿ.
7. Ciclos: divida a posição pedida pelo tamanho do bloco e olhe o resto (resto 0 = último!).
8. Diagramas: se 'Todo A é B' e 'Nenhum B é C', então obrigatoriamente 'Nenhum A é C'!

### Modo C — Questões Comentadas (Padrão IBGP)

**Q1. (SELECON / Questão da Apostila — 2021) Os estatísticos usam a palavra experimento para descrever qualquer processo que gere um conjunto de dados. O conjunto de todos os resultados possíveis em um experimento estatístico é chamado de:**
- A) Estudos observacionais.
- B) População infinita.
- C) Espaço amostral.
- D) Amostra viciada.
> **Comentário:** Gabarito: C. Questão extraída literalmente da sua apostila! Por definição, o conjunto de todos os resultados possíveis de um experimento aleatório/estatístico denomina-se ESPAÇO AMOSTRAL.

**Q2. (Questão Autoral Inédita — Perfil Edital SEMUSA/IBGP) Uma coordenação de endemias conta com 7 Agentes de Combate às Endemias e precisa selecionar uma equipe de 3 agentes para realizar uma ação educativa em uma escola municipal. Sabendo que não há distinção de função entre os 3 escolhidos, de quantas maneiras distintas essa equipe pode ser formada?**
- A) 21 maneiras.
- B) 35 maneiras.
- C) 42 maneiras.
- D) 210 maneiras.
> **Comentário:** Gabarito: B. Como não há distinção de cargo entre os 3 escolhidos, a ordem não importa -> trata-se de Combinação Simples de 7 tomados 3 a 3: C(7,3) = (7 × 6 × 5) / (3 × 2 × 1) = 210 / 6 = 35 maneiras.

**Q3. (Questão Autoral Inédita — Arranjo vs. Combinação — Perfil Edital SEMUSA/IBGP) Em uma coordenação da SEMUSA há 8 servidores candidatos. Deseja-se escolher: (Situação I) 1 Coordenador-Geral e 1 Secretário-Executivo; e (Situação II) uma dupla de representantes (sem distinção de função) para participar de um congresso. O número de maneiras distintas de fazer a escolha na Situação I e na Situação II é, respectivamente:**
- A) 28 e 28.
- B) 56 e 56.
- C) 56 e 28.
- D) 28 e 56.
> **Comentário:** Gabarito: C (56 e 28). Na Situação I há cargos distintos (Coordenador e Secretário), logo a ordem importa (Arranjo): 8 × 7 = 56 maneiras. Na Situação II é uma dupla sem distinção de cargos, logo a ordem NÃO importa (Combinação): C(8, 2) = (8 × 7) ÷ 2 = 28 maneiras.

**Q4. (Questão Autoral Inédita — Probabilidade da União e Complementar — Perfil Edital SEMUSA/IBGP) Em um grupo de 40 agentes de saúde, 18 já trabalharam no distrito de Jaci-Paraná, 12 já trabalharam no distrito de São Carlos e 5 já trabalharam em AMBOS os distritos. Escolhendo-se ao acaso 1 desses 40 agentes, qual é a probabilidade de que ele já tenha trabalhado em Jaci-Paraná OU em São Carlos?**
- A) 30/40 (75%).
- B) 25/40 (62,5%).
- C) 35/40 (87,5%).
- D) 20/40 (50%).
> **Comentário:** Gabarito: B (25/40 = 5/8 = 62,5%). Pela regra da probabilidade da união ('OU'): n(A ∪ B) = n(A) + n(B) - n(A ∩ B) = 18 + 12 - 5 = 25 agentes. Dividindo pelo total de 40 agentes: P = 25/40 = 5/8 = 62,5%.

---

## Bloco 27.3 — Laboratório Didático Passo a Passo: Árvore de Decisão (Arranjo vs. Combinação), Anagramas e Probabilidade da União/Condicional

### Modo A — Teoria Aprofundada e Texto Legal Integral

### 1. A Pergunta de 1 Milhão de Reais na Análise Combinatória: "A Ordem Importa?"
Na prova da banca IBGP, antes de fazer qualquer conta de Análise Combinatória, troque dois elementos escolhidos de lugar e pergunte: **"Mudou o resultado/grupo ou continuou sendo a mesma equipe?"**

| Situação no Enunciado da Prova | A Ordem Importa? | Qual Ferramenta Usar e Como Calcular Rápido |
| :--- | :--- | :--- |
| **Senhas, Números de 3 algarismos, Pódio (1º, 2º e 3º lugar), Cargos Distintos (Presidente, Vice e Secretário)** | **SIM!** *(João Presidente e Maria Vice $\neq$ Maria Presidente e João Vice!)* | **ARRANJO / Princípio Multiplicativo (PFC):** Faça os tracinhos e multiplique direto sem dividir!<br>Ex.: Escolher Presidente e Vice entre 6 agentes: $\underline{6} \times \underline{5} = \mathbf{30}$ formas. |
| **Comissões, Equipes de Plantão, Grupos de Trabalho, Apertos de Mão, Jogos de Turno Único, Salada de Frutas** | **NÃO!** *(A dupla {João, Maria} é exatamente a mesma dupla {Maria, João}!)* | **COMBINAÇÃO ($C_{n,p}$):** Faça os tracinhos no numerador e **DIVIDA pelo fatorial da quantidade de vagas ($p!$)**!<br>Ex.: Formar uma comissão de 3 agentes entre 6: $\frac{6 \times 5 \times 4}{3 \times 2 \times 1} = \frac{120}{6} = \mathbf{20}$ comissões! |
| **Embaralhar TODAS as $n$ letras de uma palavra (Anagramas)** | **SIM!** | **PERMUTAÇÃO ($P_n = n!$):**<br>• Sem letras repetidas (*SAUDE* = 5 letras): $5! = \mathbf{120}$.<br>• Com letras repetidas (*ARARA* = 5 letras, 3 'A' e 2 'R'): $P_5^{3,2} = \frac{5!}{3! \cdot 2!} = \frac{120}{6 \times 2} = \mathbf{10}$. |

### 2. Os 4 Casos de Probabilidade que Dominam a Banca IBGP
1. **Probabilidade Simples:** $P(A) = \frac{\text{Casos Favoráveis}}{\text{Total de Casos Possíveis}}$.
2. **Probabilidade da União ("OU" — $P(A \cup B)$):**
   $$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$
   *(Nunca esqueça de **subtrair a interseção** para não contar duas vezes quem pertence aos dois grupos!).*
3. **Probabilidade de Eventos Independentes Sucessivos ("E" — $P(A \cap B)$):**
   - Multiplica as probabilidades! *(Atenção: se o sorteio for **SEM reposição**, diminua 1 do numerador e 1 do denominador na segunda retirada!).*
4. **Truque da Probabilidade Complementar ("Pelo menos um..."):**
   - Sempre que a questão pedir a probabilidade de ocorrer **"pelo menos um"** acerto/foco, calcule $100\%$ (ou $1$) **MENOS a probabilidade de NÃO ocorrer NENHUM**:
   $$P(\text{pelo menos 1}) = 1 - P(\text{nenhum})$$

### Modo B — Resumo, Mnemônicos e Pegadinhas

### ⚡ Fatorial na Ponta da Língua (Decore para Não Perder Tempo Multiplicando!)
- $0! = 1$ | $1! = 1$ | $2! = 2$ | $3! = 6$ | $4! = 24$ | $5! = 120$ | $6! = 720$ | $7! = 5.040$.
- **Cargos diferentes (Presidente e Relator):** **Arranjo** (não divide!).
- **Cargos iguais (Comissão de 2 ou 3 agentes):** **Combinação** (divide por $2!$ ou $3!$).
- **Fórmula de Apertos de Mão entre $n$ pessoas:** $C_{n,2} = \frac{n(n - 1)}{2}$.

### Modo C — Questões Comentadas (Padrão IBGP)

**Q1. (Padrão IBGP — Arranjo vs. Combinação) Em uma unidade de vigilância em saúde trabalham 8 Agentes de Combate às Endemias. O coordenador precisa: (I) escolher 1 Supervisor e 1 Relator; e, em outra tarefa, (II) escolher uma comissão de 3 agentes (sem distinção de cargos) para atuar no mutirão de sábado. Os números de maneiras distintas de realizar as escolhas (I) e (II) são, respectivamente:**
- A) 56 e 56.
- B) 28 e 336.
- C) 56 e 336.
- D) 16 e 24.
> **Comentário:** Gabarito: A. Coincidência matemática curiosa e muito cobrada! Em (I), como os cargos são distintos (Supervisor e Relator), a ordem importa (Arranjo A_8,2): 8 x 7 = 56 maneiras. Em (II), como é uma comissão de 3 agentes sem distinção de cargos, a ordem não importa (Combinação C_8,3): (8 x 7 x 6) / (3 x 2 x 1) = 336 / 6 = 56 comissões!

**Q2. (Padrão IBGP — Anagramas com Repetição) O número total de anagramas distintos que podem ser formados com todas as 6 letras da palavra DENGUE é:**
- A) 720.
- B) 360.
- C) 120.
- D) 60.
> **Comentário:** Gabarito: B. A palavra D-E-N-G-U-E possui 6 letras no total, sendo que a letra 'E' aparece repetida 2 vezes. Aplicando permutação com repetição: P_6^2 = 6! / 2! = 720 / 2 = 360 anagramas.

**Q3. (Padrão IBGP — Probabilidade sem Reposição) Uma caixa térmica contém 10 tubos de coleta, sendo 6 com amostras positivas e 4 com amostras negativas. Retirando-se ao acaso, sucessivamente e SEM reposição, 2 tubos dessa caixa, qual é a probabilidade de AMBOS os tubos retirados conterem amostras positivas?**
- A) 6/10 (ou 60%).
- B) 36/100 (ou 36%).
- C) 1/3 (ou 15/45).
- D) 1/5 (ou 20%).
> **Comentário:** Gabarito: C. Na 1ª retirada, há 6 positivos em 10 tubos (probabilidade = 6/10). Como é SEM reposição, restam na caixa 9 tubos, dos quais 5 são positivos (probabilidade na 2ª retirada = 5/9). Multiplicando: P = (6/10) x (5/9) = 30/90 = 1/3.

---

