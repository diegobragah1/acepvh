# rlm_8 — Probabilidade condicional, dependência e calendário

## O espaço amostral vem antes da fração
Casos favoráveis divididos por casos possíveis funciona diretamente quando os resultados elementares são equiprováveis. Ao lançar dois dados honestos, há 36 pares ordenados equiprováveis; as somas 2 a 12 não são equiprováveis. A soma 2 tem um par, (1,1); a soma 7 tem seis. Usar 1/11 para cada soma dá um modelo errado.

## Exemplo de retiradas sem reposição
Uma urna contém 3 fichas azuis e 2 verdes. A chance de a primeira ser azul é 3/5. Se a primeira foi azul e não houve reposição, restam 2 azuis entre 4 fichas; a chance condicional da segunda ser azul é 2/4. Assim, P(duas azuis)=3/5 × 2/4 = 3/10.

Com reposição e mistura adequada, a composição é restaurada; a segunda chance volta a 3/5 e o produto seria 9/25. O enunciado precisa dizer se há reposição. Dependência não é sinônimo de exclusão: eventos mutuamente exclusivos não ocorrem juntos; independência significa que conhecer um evento não altera a probabilidade do outro.

## União e condicionamento
Em um dado honesto, A={2,4,6} e B={4,5,6}. A união é {2,4,5,6}, com chance 4/6. Somar 3/6 + 3/6 sem descontar {4,6} duplica resultados. Se soubermos que saiu um número par, o espaço relevante se reduz a {2,4,6}; a chance de ser maior que 3 passa a 2/3.

## Raciocínio sequencial com datas
Os dias da semana repetem-se a cada 7 dias. Se hoje é segunda-feira, daqui a 30 dias será quarta-feira, pois 30 deixa resto 2 na divisão por 7. O enunciado “daqui a” não conta hoje como primeiro dia transcorrido. Em intervalos com datas inclusivas, a contagem pode ser outra.

Uma probabilidade calculada dentro de um modelo não é garantia individual. Em questões, declare as hipóteses, confira o espaço e revise se a informação nova alterou o denominador.

## Resumo de revisão

Não presuma equiprobabilidade de somas. Sem reposição, a composição muda. Condicionar restringe o espaço. União desconta interseção. Datas usam restos por 7, com atenção à contagem inclusiva.

| Conceito de Probabilidade / Sequência | Fórmula / Regra Prática | Exemplo Rápido | Ponto de Atenção |
| --- | --- | --- | --- |
| **Probabilidade Clássica (Laplace)** | $P(A) = \frac{\text{Casos Favoráveis } n(A)}{\text{Casos Possíveis } n(\Omega)}$ | $0 \le P(A) \le 1$; evento complementar: $P(\bar{A}) = 1 - P(A)$. | Só vale diretamente se os eventos elementares de $\Omega$ forem **equiprováveis**. |
| **Probabilidade da União ("OU")** | $P(A \cup B) = P(A) + P(B) - P(A \cap B)$ | Se $A$ e $B$ são mutuamente exclusivos ($A \cap B = \emptyset$), soma-se direto. | Nunca esqueça de subtrair a interseção $P(A \cap B)$ quando puderem ocorrer juntos. |
| **Probabilidade Condicional ("Sabendo que...")** | $P(A \mid B) = \frac{P(A \cap B)}{P(B)} = \frac{n(A \cap B)}{n(B)}$ | Restrinja o denominador diretamente ao universo da condição dada ($B$). | Reduzir o denominador a $n(B)$ é mais rápido que aplicar fração sobre fração. |
| **Extrações Sucessivas ("E" — Sem Reposição)** | $P(A \cap B) = P(A) \times P(B \mid A)$ | A cada retirada sem reposição, subtraia $1$ do total no denominador. | Com reposição, o denominador permanece constante. |
| **Ciclos de Calendário e Sequências** | Divida o deslocamento pelo tamanho do ciclo $T$ e olhe o **resto $r$**. | Dias da semana ($T=7$): se resto $= 0$, cai no mesmo dia da semana. | Diferencie *"daqui a $N$ dias"* ($+N$) de *"o $N$-ésimo termo da sequência"* (onde o 1º termo equivale a resto $1$). |

## Exercícios autorais comentados

### Questão 1

[Autoral] Com 3 fichas azuis e 2 verdes, qual a chance de duas azuis em duas retiradas sem reposição?

- A) 3/10
- B) 9/25
- C) 2/5
- D) 1/2

**Gabarito: A.** Gabarito: A. Sem reposição: 1ª retirada = 3/5; restando 2 azuis em 4 fichas, 2ª retirada = 2/4. Produto: (3/5) × (2/4) = 6/20 = 3/10. Erro da B: 9/25 = (3/5) × (3/5) é a probabilidade COM reposição; erro da C: 2/5 resulta de ignorar a segunda extração ou somar probabilidades incorretamente; erro da D: 1/2 é a chance apenas na 2ª retirada após sair uma azul.

### Questão 2

[Autoral] Se hoje é segunda-feira, qual dia será daqui a 30 dias?

- A) Segunda-feira.
- B) Terça-feira.
- C) Quarta-feira.
- D) Quinta-feira.

**Gabarito: C.** Gabarito: C. Dividindo 30 por 7 (dias da semana): 30 = 7 × 4 + 2 (4 semanas exatas e resto 2). Partindo de segunda-feira + 2 dias: terça (1), quarta-feira (2). Erro da A: equivaleria a múltiplo exato de 7 (28 ou 35 dias); erro da B: corresponde a resto 1 (29 dias) ou contar hoje como dia 1; erro da D: corresponde a resto 3 (31 dias).

### Questão 3

[Autoral] Em um lote de 20 lâminas analisadas pelo laboratório de entomologia, sabe-se que 12 são do Bairro A (das quais 4 são positivas) e 8 são do Bairro B (das quais 2 são positivas). Escolhendo-se ao acaso uma lâmina e sabendo-se que ela veio do Bairro A, qual é a probabilidade condicional de ela ser positiva?

- A) 1/3 (ou 4/12).
- B) 3/10 (ou 6/20).
- C) 1/4 (ou 2/8).
- D) 3/5 (ou 12/20).

**Gabarito: A.** Gabarito: A. Sabendo que veio do Bairro A, o espaço amostral reduz-se às 12 lâminas desse bairro, dentre as quais 4 são positivas: P(Positiva | Bairro A) = 4/12 = 1/3. Erro da B: 6/20 = 3/10 é a probabilidade incondicional em todo o lote; erro da C: 2/8 = 1/4 refere-se ao Bairro B; erro da D: 12/20 = 3/5 é apenas a proporção de lâminas do Bairro A.

### Questão 4

[Autoral] Uma escala de plantão repete ciclicamente a sequência de 5 equipes: (Alfa, Bravo, Charlie, Delta, Eco, Alfa, Bravo, ...). Qual equipe estará escalada no 143º dia dessa sequência?

- A) Equipe Charlie.
- B) Equipe Alfa.
- C) Equipe Eco.
- D) Equipe Bravo.

**Gabarito: A.** Gabarito: A. Ciclo de tamanho 5: 143 ÷ 5 = 28 ciclos completos e resto 3. Resto 1 = Alfa, resto 2 = Bravo, resto 3 = 3ª equipe (Charlie). Erro da B: seria resto 1 (141º dia); erro da C: seria resto 0 / divisível por 5 (140º ou 145º dia); erro da D: seria resto 2 (142º dia).

### Questão 5

[Autoral] Em uma caixa de coleta de campo há exatamente 4 frascos fechados rotulados para Dengue, 5 para Malária e 3 para Leishmaniose, indistinguíveis ao tato. Quantos frascos no MÍNIMO o agente precisa retirar às cegas para ter CERTEZA ABSOLUTA de obter pelo menos 2 frascos de Malária?

- A) 9 frascos.
- B) 2 frascos.
- C) 7 frascos.
- D) 11 frascos.

**Gabarito: A.** Gabarito: A. Pelo Princípio da Casa dos Pombos (pior caso): o agente pode retirar todos os 4 de Dengue e todos os 3 de Leishmaniose antes de pegar qualquer um de Malária (4 + 3 = 7 frascos sem Malária). Os próximos 2 frascos retirados serão obrigatoriamente de Malária: 7 + 2 = 9 frascos. Erro da B: 2 é apenas o melhor caso possível, não garantia; erro da C: 7 só garante pegar zero ou um de cada no pior caso; erro da D: 11 garante pelo menos 2 de um tipo qualquer apenas se somar quase tudo sem critério específico.

## Flashcards

**Por que a chance da segunda retirada muda sem reposição?**

Porque a primeira retirada reduz em 1 unidade o total de elementos do espaço amostral e altera a composição da urna.

**As somas de dois dados são equiprováveis?**

Não. Os 36 pares ordenados são equiprováveis; a soma 7 possui 6 pares favoráveis (6/36 = 1/6), enquanto a soma 2 possui apenas 1 par (1/36).

**Como resolver rapidamente problemas de probabilidade condicional?**

Restrinja o denominador diretamente ao total de elementos que satisfazem a condição informada ("sabendo que...") e conte no numerador quantos deles também atendem ao evento pedido.

## Referências de consulta

- [IMPA/OBMEP — Introdução à probabilidade](https://portaldaobmep.impa.br/index.php/modulo/ver?modulo=46&tipo=7) — Espaço amostral e cálculo de probabilidades; situações autorais com reposição e condicionamento.

Consulta editorial: 31/10/2026. Legislação deve respeitar o marco temporal do edital.
