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

## Flashcards

**Por que a chance da segunda retirada muda sem reposição?**

A primeira retirada altera o total de fichas e a composição da urna.

**As somas de dois dados são equiprováveis?**

Não. Os pares ordenados são equiprováveis; cada soma reúne quantidade diferente de pares.

## Referências de consulta

- [IMPA/OBMEP — Introdução à probabilidade](https://portaldaobmep.impa.br/index.php/modulo/ver?modulo=46&tipo=7) — Espaço amostral e cálculo de probabilidades; situações autorais com reposição e condicionamento.

Consulta editorial: 31/10/2026. Legislação deve respeitar o marco temporal do edital.
