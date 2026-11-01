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
| **Probabilidade Clássica (Laplace)** | $P(A) = rac{	ext{Casos Favoráveis } n(A)}{	ext{Casos Possíveis } n(Omega)}$ | $0 le P(A) le 1$; evento complementar: $P(ar{A}) = 1 - P(A)$. | Só vale diretamente se os eventos elementares de $Omega$ forem **equiprováveis**. |
| **Probabilidade da União ("OU")** | $P(A cup B) = P(A) + P(B) - P(A cap B)$ | Se $A$ e $B$ são mutuamente exclusivos ($A cap B = emptyset$), soma-se direto. | Nunca esqueça de subtrair a interseção $P(A cap B)$ quando puderem ocorrer juntos. |
| **Probabilidade Condicional ("Sabendo que...")** | $P(A mid B) = rac{P(A cap B)}{P(B)} = rac{n(A cap B)}{n(B)}$ | Restrinja o denominador diretamente ao universo da condição dada ($B$). | Reduzir o denominador a $n(B)$ é mais rápido que aplicar fração sobre fração. |
| **Extrações Sucessivas ("E" — Sem Reposição)** | $P(A cap B) = P(A) 	imes P(B mid A)$ | A cada retirada sem reposição, subtraia $1$ do total no denominador. | Com reposição, o denominador permanece constante. |
| **Ciclos de Calendário e Sequências** | Divida o deslocamento pelo tamanho do ciclo $T$ e olhe o **resto $r$**. | Dias da semana ($T=7$): se resto $= 0$, cai no mesmo dia da semana. | Diferencie *"daqui a $N$ dias"* ($+N$) de *"o $N$-ésimo termo da sequência"* (onde o 1º termo equivale a resto $1$). |

## Exercícios autorais comentados

### Questão 1

[Autoral] Com 3 fichas azuis e 2 verdes, qual a chance de duas azuis em duas retiradas sem reposição?

- A) 3/10
- B) 9/25
- C) 2/5
- D) 1/2

**Gabarito: A.** 3/5×2/4=3/10. 9/25 seria o cálculo com reposição e independência sob as hipóteses adequadas.

### Questão 2

[Autoral] Se hoje é segunda-feira, qual dia será daqui a 30 dias?

- A) Segunda-feira.
- B) Terça-feira.
- C) Quarta-feira.
- D) Quinta-feira.

**Gabarito: C.** 30=4×7+2. Após quatro semanas permanece segunda; mais dois dias chega-se à quarta. Não se inclui hoje como um dia já transcorrido.

### Questão 3

[Autoral] Em um lote de 20 lâminas analisadas pelo laboratório de entomologia, sabe-se que 12 são do Bairro A (das quais 4 são positivas) e 8 são do Bairro B (das quais 2 são positivas). Escolhendo-se ao acaso uma lâmina e sabendo-se que ela veio do Bairro A, qual é a probabilidade condicional de ela ser positiva?

- A) 1/3 (ou 4/12).
- B) 3/10 (ou 6/20).
- C) 1/4 (ou 2/8).
- D) 3/5 (ou 12/20).

**Gabarito: A.** Como foi informado que a lâmina pertence ao Bairro A, o espaço amostral reduzido passa a ser as 12 lâminas do Bairro A, entre as quais há 4 positivas: P(Positiva | Bairro A) = 4/12 = 1/3.

### Questão 4

[Autoral] Uma escala de plantão repete ciclicamente a sequência de 5 equipes: (Alfa, Bravo, Charlie, Delta, Eco, Alfa, Bravo, ...). Qual equipe estará escalada no 143º dia dessa sequência?

- A) Equipe Charlie.
- B) Equipe Alfa.
- C) Equipe Eco.
- D) Equipe Bravo.

**Gabarito: A.** Dividindo a posição 143 pelo tamanho do ciclo (5): 143 = 5 × 28 + 3 (quociente 28 e resto 3). O resto 1 corresponde a Alfa, resto 2 a Bravo e resto 3 corresponde à 3ª posição do ciclo: Equipe Charlie.

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
