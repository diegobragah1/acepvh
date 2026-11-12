---
id: "rlm_8"
num: 43
cat: "rlm"
catName: "Raciocínio Lógico"
title: "8. Probabilidade: conceitos básicos e cálculo de probabilidades em espaços amostrais finitos. Resolução de problemas envolvendo raciocínio lógico e sequencial"
editalRef: "Item 8 de Raciocínio Lógico — Probabilidade: conceitos básicos e cálculo de probabilidades em espaços amostrais finitos. Resolução de problemas envolvendo raciocínio lógico e sequencial."
questionsCount: 24
flashcardsCount: 17
---

# 8. Probabilidade: conceitos básicos e cálculo de probabilidades em espaços amostrais finitos. Resolução de problemas envolvendo raciocínio lógico e sequencial

**Disciplina:** Raciocínio Lógico  
**Edital:** Item 8 de Raciocínio Lógico — Probabilidade: conceitos básicos e cálculo de probabilidades em espaços amostrais finitos. Resolução de problemas envolvendo raciocínio lógico e sequencial.

## Fontes de Referência

- 96
- 122
- 123
- 124
- 125
- 126

## Bloco 1: Bloco 8.1 — Espaço amostral, eventos e regras de probabilidade

### Teoria Base

## Probabilidade: construir o modelo antes de calcular

### Pré-requisitos e vocabulário

Revise frações e porcentagens na aula 2, conjuntos na aula 6 e contagem na aula 7. Aqui, o objetivo é representar resultados possíveis e calcular chances em espaços finitos. Todos os cenários numéricos desta exposição são fictícios, criados para estudo; não são dados epidemiológicos nem procedimentos de campo.

Um **experimento aleatório** tem resultado não determinado antecipadamente no modelo. Sortear uma ficha numerada de uma caixa é um exemplo. **Espaço amostral**, representado por $\Omega$, reúne todos os resultados possíveis; **evento** é um subconjunto desse espaço. Para uma ficha de 1 a 6, $\Omega=\{1,2,3,4,5,6\}$ e o evento número par é $A=\{2,4,6\}$.

O evento impossível é o conjunto vazio; o evento certo é o espaço inteiro. Uma probabilidade fica entre 0 e 1, inclusive. Ao atribuir probabilidades aos resultados elementares de um espaço finito, a soma deve ser 1. Uma chance de 1/4 equivale a 0,25 ou 25%, não a 0,25%.

### Quando contar casos funciona

Se cada resultado elementar tiver a mesma chance, o espaço é **equiprovável** e podemos calcular $P(A)=n(A)/n(\Omega)$. Sem essa hipótese, somamos as probabilidades dos resultados do evento. Em uma roleta com três regiões de probabilidades 1/2, 1/3 e 1/6, a chance da primeira é 1/2: contar uma região entre três daria 1/3 e estaria errado.

**Exemplo resolvido — dois dados honestos e independentes.** Identifique os dados por cor. Um resultado é um par ordenado, como (2,6), diferente de (6,2). Há 6 escolhas para o primeiro e 6 para o segundo: 36 pares equiprováveis. A soma 8 ocorre nos pares (2,6), (3,5), (4,4), (5,3) e (6,2). Assim, sua probabilidade é 5/36. As onze somas de 2 a 12 não são equiprováveis; a soma 2 tem somente um par, enquanto a soma 7 tem seis.

Também é possível usar resultados não ordenados, mas então é preciso atribuir pesos diferentes: o par sem ordem {2,6} reúne dois pares ordenados e {4,4} reúne apenas um. Misturar contagem ordenada no numerador e não ordenada no denominador produz erro.

### União, interseção e complementar

**União** significa A ou B, incluindo a possibilidade de ambos; **interseção** significa A e B. A regra $P(A\cup B)=P(A)+P(B)-P(A\cap B)$ desconta a sobreposição. Se o comando disser exatamente um dos eventos, é preciso excluir a interseção de ambos os grupos: $P(\text{exatamente um})=P(A)+P(B)-2P(A\cap B)$.

**Exemplo resolvido — números de 1 a 30.** Há 7 múltiplos de 4 e 5 múltiplos de 6. Os números 12 e 24 pertencem aos dois grupos. Logo, existem 7+5−2=10 números múltiplos de 4 ou de 6, e a chance no sorteio uniforme é 10/30=1/3. Se fossem pedidos os números múltiplos de exatamente um deles, seriam 7+5−4=8, com chance 8/30=4/15.

O **complementar** de A reúne os resultados em que A não ocorre: $P(A^c)=1-P(A)$. Para pelo menos um sucesso, pode ser mais simples calcular 1 menos a chance de nenhum. Isso é uma escolha de estratégia; não dispensa a análise das dependências.

**Exemplo resolvido — chuva em um modelo hipotético.** Suponha chances de 40% no sábado e 30% no domingo e, expressamente, independência entre esses eventos. A chance de nenhum dia chuvoso é 0,6×0,7=0,42. A chance de pelo menos um é 1−0,42=0,58. Somar 40%+30% contaria duas vezes os fins de semana com chuva em ambos os dias. A independência é uma hipótese do exercício, não uma conclusão sobre o clima real.

### Condicional e independência

Ao saber que B ocorreu, trabalhamos com $P(A|B)=P(A\cap B)/P(B)$, desde que $P(B)>0$. Em um espaço finito equiprovável, isso se torna $n(A\cap B)/n(B)$. A ordem importa: P(A|B) e P(B|A) podem ser diferentes.

**Exemplo resolvido — leitura de uma condição.** Entre 40 pessoas, 25 integram a equipe de campo e 15 são da administração. Na equipe de campo, 15 têm uma qualificação; na administração, 5 têm essa qualificação. Sabendo que a pessoa sorteada uniformemente tem a qualificação, restam 20 candidatas, das quais 15 são da equipe de campo: 15/20=75%. Na pergunta inversa, sabendo que é da equipe de campo, a chance de ter a qualificação é 15/25=60%.

A regra geral da multiplicação é $P(A\cap B)=P(A)P(B|A)$, quando $P(A)>0$. Só se houver **independência** podemos trocar P(B|A) por P(B). O conectivo E, sozinho, não prova independência. Eventos mutuamente exclusivos não podem ocorrer juntos. Se ambos têm probabilidade positiva, não são independentes: a ocorrência de um impede o outro.

### Retiradas sucessivas

Em uma caixa com 6 fichas azuis e 4 verdes, faça duas retiradas uniformes sem reposição. A chance de duas azuis é (6/10)×(5/9)=1/3. Depois da primeira azul, diminuem tanto o total quanto o número de azuis. Já para azul seguida de verde, a chance é (6/10)×(4/9)=4/15: o total diminui, mas o número de verdes não diminui depois de retirar uma azul.

Com reposição, composição restaurada e sorteios independentes, a chance de duas azuis seria (6/10)²=9/25. Para uma azul e uma verde em qualquer ordem, sem reposição, some dois caminhos disjuntos: (6/10)×(4/9)+(4/10)×(6/9)=8/15. Não multiplique por dois automaticamente: faça isso apenas quando os dois caminhos tiverem probabilidades iguais.

### Revisão ativa

Antes da conta, declare o resultado elementar, o evento e as hipóteses de sorteio. Depois, confira se o denominador mudou, se houve sobreposição e se o resultado está entre 0 e 1. Explique por que a chance de uma soma dos dados não é 1/11 e por que sem reposição nem todo numerador diminui em uma unidade.

Referências de apoio: OpenStax, Introductory Statistics, seções 3.1, 3.2 e 3.3. A exposição e os exemplos resolvidos acima têm redação própria; não reproduzem questões oficiais.

### Resumo Estratégico

Contar favoráveis/possíveis exige equiprobabilidade. União desconta a interseção; exatamente um exclui a interseção duas vezes. P(A|B)=P(A∩B)/P(B), para P(B)>0. Regra geral: P(A∩B)=P(A)P(B|A); o produto das probabilidades simples exige independência. Sem reposição, atualize a composição conforme a cor retirada. Complemento: P(pelo menos um)=1−P(nenhum).

### Questões (8)

1. **** [Intermediário]
   - A) 3/10 (30%).
   - B) 1/3 (33,3%).
   - C) 2/5 (40%).
   - D) 7/30 (23,3%).
   - **Gabarito:** A

2. **** [Intermediário]
   - A) 1/3.
   - B) 9/25.
   - C) 2/5.
   - D) 1/2.
   - **Gabarito:** A

3. **** [Difícil]
   - A) 58%.
   - B) 62%.
   - C) 70%.
   - D) 42%.
   - **Gabarito:** A

4. **** [Difícil]
   - A) 1/6.
   - B) 5/36.
   - C) 1/9.
   - D) 7/36.
   - **Gabarito:** A

5. **** [Intermediário]
   - A) 1/3, porque há três regiões.
   - B) 1/2, conforme a probabilidade atribuída.
   - C) 2/3, porque duas regiões ficam de fora.
   - D) 1, porque uma região será escolhida.
   - **Gabarito:** A

6. **** [Fácil]
   - A) 1/3.
   - B) 2/5.
   - C) 4/15.
   - D) 1/15.
   - **Gabarito:** A

7. **** [Fácil]
   - A) 1/5.
   - B) 6/25.
   - C) 1/3.
   - D) 4/15.
   - **Gabarito:** A

8. **** [Fácil]
   - A) Eles são independentes porque não ocorrem juntos.
   - B) Eles são dependentes, pois a interseção é zero e o produto das probabilidades é positivo.
   - C) A probabilidade da união é zero.
   - D) A probabilidade de um deles deve ser um.
   - **Gabarito:** A

### Flashcards (6)

- **Card 1:**  -> 
- **Card 2:** Como calcular a chance de pelo menos um sucesso pelo complementar? -> P(pelo menos um)=1−P(nenhum). Para calcular nenhum por produto, confira as dependências; usar o complemento não prova independência.
- **Card 3:**  -> 
- **Card 4:**  -> 
- **Card 5:** Qual é a fórmula de P(A|B) e quando podemos usar contagens? -> P(A|B)=P(A∩B)/P(B), para P(B)>0. Em espaço finito equiprovável, equivale a n(A∩B)/n(B).
- **Card 6:** O conectivo E garante independência? -> Não. Use P(A∩B)=P(A)P(B|A). O produto P(A)P(B) exige independência.

## Bloco 2: Bloco 8.2 — Laboratório de tabelas, caminhos e contagem

### Teoria Base

## Laboratório: escolher a operação e conferir o resultado

### Tabela de dupla entrada

Retome a equipe fictícia de 40 pessoas: 25 da equipe de campo e 15 da administração. Quinze pessoas da equipe de campo e cinco da administração têm uma qualificação.

| Grupo | Com qualificação | Sem qualificação | Total |
|---|---|---|---|
| Campo | 15 | 10 | 25 |
| Administração | 5 | 10 | 15 |
| Total | 20 | 20 | 40 |

Cada pessoa ocupa uma única célula interna. Confira linhas, colunas e total antes de calcular. Em sorteio uniforme, a chance de ser de campo e ter qualificação é 15/40. A chance de ser de campo ou ter qualificação é (25+20−15)/40=30/40=3/4. Sabendo que a pessoa tem a qualificação, a chance de ser de campo é 15/20=3/4. As duas últimas respostas coincidem numericamente neste exemplo, mas respondem a eventos diferentes; igualdade de números não autoriza trocar união por condicional.

### Uma amostra de cada cor

Uma caixa contém 3 fichas azuis e 2 verdes. Em duas retiradas uniformes sem reposição, represente os caminhos:

- Azul e azul: (3/5)×(2/4)=3/10.
- Azul e verde: (3/5)×(2/4)=3/10.
- Verde e azul: (2/5)×(3/4)=3/10.
- Verde e verde: (2/5)×(1/4)=1/10.

A soma é 1. Uma de cada cor corresponde a dois caminhos: 3/10+3/10=3/5. Pelo menos uma azul é o complemento de duas verdes: 1−1/10=9/10. Exatamente uma azul vale 3/5, mostrando que pelo menos uma e exatamente uma não são sinônimos.

Uma segunda solução utiliza as fichas individualmente identificadas. Há C(5,2)=10 pares igualmente prováveis, dos quais 3×2=6 têm cores diferentes. A razão 6/10 confirma 3/5. As fórmulas combinatórias e suas demonstrações estão na aula 7; aqui a contagem serve ao cálculo de probabilidade.

### Contagem com repetição: aplicação delimitada

Preserve a distinção da aula 7: permutar todas as letras de DENGUE dá 6!/2!=360 anagramas, pois os dois Es são indistinguíveis. Para ARARA, o total é 5!/(3!×2!)=10. Não se exige que os anagramas formem palavras de dicionário. Se um procedimento gerar uniformemente todos os anagramas distintos de ARARA, a chance de começar com R é 2/5: há 4!/(3!×1!)=4 favoráveis entre os 10 possíveis.

Escolher uniformemente entre letras diferentes A e R a cada etapa seria outro procedimento e não produz, por si só, a distribuição uniforme dos dez anagramas. A descrição do mecanismo importa tanto quanto a fórmula de contagem.

### Diagnóstico de respostas erradas

No exemplo da qualificação, 15/40 ignora a condição; 15/25 responde à condição inversa; 20/40 calcula a chance de ter qualificação sem informação adicional. Em retiradas, usar sempre o denominador inicial supõe reposição indevidamente. Em tabelas, somar as margens sem subtrair a interseção duplica pessoas.

Para resolver um problema novo: escreva o evento em palavras, desenhe tabela ou árvore, calcule cada caminho e confira por um segundo método quando viável. Use PA, PG e contagem como ferramentas nas aulas 6 e 7; uma lista de fórmulas repetida não substitui a modelagem do experimento.

Referências de apoio: OpenStax, Introductory Statistics, seções 3.1 a 3.3. Exemplos e cálculos autorais; não há alegação de frequência de cobrança por banca.

### Resumo Estratégico

Use tabela para distinguir união, interseção e condição. Em árvore, multiplique probabilidades condicionais ao longo de cada caminho e some caminhos disjuntos. Uma de cada cor pode ocorrer em duas ordens. Anagramas exigem descontar letras indistinguíveis; a aula 7 desenvolve a contagem.

### Questões (4)

1. **** [Difícil]
   - A) A) 37,5% (15/40).
   - B) B) 60% (15/25).
   - C) C) 75% (15/20).
   - D) D) 50% (20/40).
   - **Gabarito:** A

2. **** [Intermediário]
   - A) A) 720.
   - B) B) 360.
   - C) C) 120.
   - D) D) 60.
   - **Gabarito:** A

3. **** [Intermediário]
   - A) 3/10.
   - B) 9/25.
   - C) 3/5.
   - D) 9/10.
   - **Gabarito:** A

4. **** [Difícil]
   - A) 37,5%.
   - B) 50%.
   - C) 75%.
   - D) 60%.
   - **Gabarito:** A

### Flashcards (3)

- **Card 1:** Como resolver rapidamente questões de probabilidade que pedem a chance de ocorrer "PELO MENOS UM" evento? -> Pelo evento complementar: P(pelo menos um) = 1 − P(nenhum).
- **Card 2:** Qual condição muda o denominador em P(A|B)? -> O evento B, com P(B)>0. Use P(A∩B)/P(B); a razão de contagens n(A∩B)/n(B) exige espaço equiprovável.
- **Card 3:** Como calcular o número de anagramas de uma palavra com letras repetidas (ex.: ARARA)? -> Divide-se o fatorial do total de letras pelo fatorial de cada letra repetida: em ARARA (5 letras, 3 A e 2 R) = 5! / (3! × 2!) = 120 / 12 = 10 anagramas.

## Bloco 3: Bloco 8.3 — Garantias, princípio das gavetas e estoques limitados

### Teoria Base

## Garantias por contagem: princípio das gavetas

### Certeza e probabilidade são perguntas diferentes

Distribua objetos por categorias sem deixar objeto fora nem atribuí-lo a duas categorias. Se houver mais objetos que categorias, alguma categoria terá pelo menos dois. A justificativa é uma contradição simples: com no máximo um em cada uma das m categorias, haveria no máximo m objetos.

Para garantir k objetos em alguma das m categorias, m(k−1)+1 é suficiente. Com m(k−1), ainda é possível colocar k−1 em cada categoria; mais um força a meta. Esse valor também é o mínimo se essa distribuição que evita a meta for possível. Em retiradas de estoque limitado, as capacidades podem diminuir o pior caso: a fórmula não deve ser aplicada como universal.

**Exemplos resolvidos.** Para garantir duas pessoas com aniversário no mesmo mês, 12 pessoas poderiam ocupar meses distintos; 13 garantem coincidência. Para garantir quatro, 36 poderiam ocupar os 12 meses com três em cada; 37 garantem quatro. Com sete categorias para o dia da semana do nascimento, 7×3+1=22 pessoas garantem quatro no mesmo grupo. Para três aniversariantes no mesmo mês, 12×2+1=25. Essas são garantias combinatórias, sem hipótese de aniversários igualmente prováveis.

### Objetivos parecidos exigem contas diferentes

Em um cenário fictício, há dez botas direitas e dez esquerdas, todas do mesmo modelo e tamanho. Três retiradas sem olhar garantem duas do mesmo lado: são duas categorias e queremos duas em alguma delas. Para garantir um par calçável, porém, é preciso ter um pé de cada lado. No pior caso, saem as dez direitas antes da primeira esquerda; onze retiradas garantem o par. O problema mudou de dois na mesma categoria para presença das duas categorias.

### Estoques desiguais

Em uma caixa fictícia, há 8 fichas A, 12 B e 15 C. Para garantir dez da mesma categoria, maximize as retiradas sem obter dez: podem sair as 8 de A, 9 de B e 9 de C. O total é 26. A 27ª retirada garante a meta. Aplicar 3×9+1=28 dá uma garantia suficiente, mas não o mínimo, porque seria impossível tirar nove fichas A.

Para estoque de capacidades $c_i$ e meta de k em alguma categoria, o maior total que evita a meta é $\sum_i\min(c_i,k-1)$. Se o estoque permite atingir a meta, acrescente um para obter o mínimo garantido. Se todas as categorias tiverem menos que k elementos, a meta é impossível, mesmo retirando tudo.

Agora peça ao menos uma de cada categoria A, B e C. O pior caso evita a categoria menos numerosa A enquanto retira todas as 12 B e 15 C: 27 retiradas ainda podem falhar; 28 garantem as três categorias. Não é a mesma conta da meta dez de alguma categoria.

**Mais um exemplo preservado.** Há 10 fichas azuis, 8 verdes e 5 vermelhas. Para garantir pelo menos duas de cada cor, podem sair todas as 18 azuis e verdes e apenas uma vermelha: 19 retiradas ainda falham. Com 20, a meta é garantida. Se o objetivo fosse duas de alguma cor, bastariam quatro retiradas: três ainda poderiam ter uma de cada.

### Como provar que o número é mínimo

Mostre primeiro uma distribuição com N−1 retiradas que ainda evita a meta. Depois demonstre que toda distribuição com N alcança o objetivo. Dar apenas uma situação favorável não prova garantia. A ordem das retiradas não precisa ser provável; basta que seja possível para funcionar como contraexemplo.

Pergunte sempre: alguma categoria ou cada categoria? Mesmo tipo ou tipos diferentes? Há estoque suficiente? A pergunta pede possibilidade, chance ou certeza? Em uma caixa com duas fichas A e duas B, três retiradas garantem repetição, mas duas já podem repetir; poder ocorrer é diferente de ser inevitável.

Referência de apoio: David Guichard, Combinatorics and Graph Theory, seção 1.7, princípio das gavetas e generalização. As aplicações e a análise dos estoques acima foram desenvolvidas para esta aula.

### Resumo Estratégico

Garantia exige considerar todas as distribuições possíveis. m(k−1)+1 garante k em alguma das m categorias; só é mínimo se o pior caso anterior for realizável. Estoques limitados: some min(capacidade,k−1), depois acrescente 1 se a meta for possível. Alguma categoria e cada categoria são objetivos distintos.

### Questões (4)

1. **** [Difícil]
   - A) A) 13 agentes.
   - B) B) 36 agentes.
   - C) C) 37 agentes.
   - D) D) 49 agentes.
   - **Gabarito:** A

2. **** [Difícil]
   - A) A) 3 fichas.
   - B) B) 13 fichas.
   - C) C) 14 fichas.
   - D) D) 21 fichas.
   - **Gabarito:** A

3. **** [Intermediário]
   - A) 26.
   - B) 27.
   - C) 28.
   - D) 35.
   - **Gabarito:** A

4. **** [Difícil]
   - A) 4.
   - B) 18.
   - C) 19.
   - D) 20.
   - **Gabarito:** A

### Flashcards (2)

- **Card 1:** Quando m(k−1)+1 é o mínimo para garantir k na mesma categoria? -> É suficiente pelo princípio das gavetas e mínimo se a distribuição de k−1 em cada categoria for possível. Estoques limitados podem reduzir o mínimo; se nenhuma categoria comporta k, a meta é impossível.
- **Card 2:** Qual é o raciocínio da pior hipótese para provar um mínimo garantido? -> Construa uma distribuição com N−1 que ainda evita a meta e demonstre que toda distribuição com N a atinge. Diferencie alguma categoria de cada categoria.

## Bloco 4: Bloco 8.4 — Calendários, filas, intervalos e problemas em etapas

### Teoria Base

## Raciocínio sequencial: representar etapas e limites

### Calendários e contagem de dias

Os dias da semana formam ciclos de sete. Para avançar N dias, divida N por 7 e use o resto. Partindo de domingo, 100=14×7+2: cem dias depois é terça-feira. Para retroceder, subtraia o resto; três dias antes de segunda-feira é sexta-feira.

Daqui a dez dias significa dez dias transcorridos: hoje é o instante zero. Se uma atividade ocorre diariamente de hoje até o décimo dia, incluindo as duas extremidades, há onze datas de atividade. Leia a convenção antes de aplicar a conta.

No calendário gregoriano, um ano é bissexto se for divisível por 4, exceto os divisíveis por 100 que não sejam divisíveis por 400. Assim, 2000 foi bissexto e 2100 não será. Um intervalo de 365 dias avança um dia da semana; um de 366 avança dois. Entre uma data e a mesma data do ano seguinte, verifique se o intervalo atravessa 29 de fevereiro; não basta olhar o rótulo do ano inicial. Datas como 29 de fevereiro exigem atenção porque não existem em todos os anos.

Em um mês de 31 dias, há quatro semanas completas e três dias restantes. Portanto, os dias da semana correspondentes às datas 1, 2 e 3 aparecem cinco vezes; os outros aparecem quatro. Em um mês de 30 dias, são dois dias da semana com cinco ocorrências.

### Posições e intervalos

Se Lucas é o 14º a partir do início e o 19º a partir do fim da mesma fila, há 13 antes dele, Lucas e 18 depois: 13+1+18=32. A forma abreviada é N=a+b−1. As posições precisam se referir à mesma pessoa, na mesma fila e no mesmo momento. Não aplique a soma a pessoas diferentes sem conhecer a distância ou sobreposição entre elas.

Em uma linha aberta de 600 m, com pontos a cada 25 m e presença nas duas pontas, existem 600/25=24 intervalos e 25 pontos. A expressão L/d+1 pressupõe que L seja múltiplo de d e que ambas as extremidades sejam incluídas. É um modelo matemático, não recomendação de espaçamento de equipamentos de vigilância.

Se a linha tiver 610 m, é impossível incluir ambas as pontas mantendo todos os intervalos exatamente iguais a 25 m. Se o comando permitir intervalos de no máximo 25 m, serão necessários pelo menos 25 intervalos e 26 pontos; o último pode medir 10 m. Se houver apenas marcas a cada 25 m a partir de zero, serão 25 marcas, de 0 a 600, e o ponto 610 não estará marcado.

Em um circuito fechado de 600 m, com espaçamento exato de 25 m, há 24 pontos, não 25: o final coincide com o início. Desenhe alguns intervalos para perceber a diferença entre linha e circuito.

### Avanço com recuo: a última etapa é diferente

Considere um objeto que parte do zero, avança S metros durante o dia, recua D à noite e para ao atingir H. Se H≤S, basta um dia. Se H>S e S>D≥0, depois de n−1 ciclos completos ele está em (n−1)(S−D). No dia n chega a $(n-1)(S-D)+S$. Exigimos que essa altura seja pelo menos H.

Isolando n e lembrando que dias são inteiros, obtemos $n=\lceil(H-S)/(S-D)\rceil+1$. O símbolo de teto significa arredondar para o inteiro imediatamente acima, mantendo o inteiro quando a divisão já é exata.

**Exemplo resolvido:** H=11, S=4 e D=1. O cálculo é teto(7/3)+1=3+1=4 dias. As alturas máximas diurnas são 4, 7, 10 e 13; o objetivo é atingido no quarto dia. Dividir sem arredondar daria 3,33 dias, incompatível com a pergunta sobre o número de dias de avanço. Dividir H pelo saldo diário daria teto(11/3)=4 neste exemplo, por coincidência; em H=10, S=4 e D=1, a resposta correta é três dias, não quatro.

Se H>S e S≤D, o modelo usual que impede descer abaixo de zero não acumula avanço suficiente para atingir a meta. Não use a fórmula com denominador zero ou negativo. Explicite a condição física e o momento em que o movimento termina.

### Sequências e verificação

Nas sequências numéricas, examine diferenças, razões, alternância e agrupamento, mas confira a regra em todas as transições. Poucos termos, sem regra adicional, podem admitir mais de uma continuação. Se a regra informada for acrescentar os ímpares sucessivos 3, 5, 7, 9, a sequência 2, 5, 10, 17 terá próximo termo 26. Não transforme uma continuação possível em necessidade lógica quando o enunciado não fornece critério suficiente. A aula 6 desenvolve sequências e deduções; aqui se aplicam os mesmos cuidados aos problemas em etapas.

Antes de concluir, teste extremos: distância zero, um único intervalo, chegada no primeiro dia, ano secular e condição já satisfeita. Um desenho, uma tabela de etapas ou a enumeração dos primeiros casos costuma revelar erros de uma unidade.

Referência para a regra do calendário: US Naval Observatory, Leap Years. Exemplos, deduções de intervalos e de subida com recuo são autorais; a referência de calendário não é apresentada como fonte desses outros modelos.

### Resumo Estratégico

Datas: use dias transcorridos e resto por 7; no calendário gregoriano, séculos só são bissextos quando divisíveis por 400. Fila: N=a+b−1 para a mesma pessoa. Linha aberta: L/d+1 somente com divisão exata e ambas as pontas; circuito fechado: L/d. Subida: se H>S>D≥0, dias=teto((H−S)/(S−D))+1; H≤S exige um dia.

### Questões (8)

1. **** [Intermediário]
   - A) Segunda-feira.
   - B) Terça-feira.
   - C) Quarta-feira.
   - D) Quinta-feira.
   - **Gabarito:** A

2. **** [Intermediário]
   - A) 31 pessoas.
   - B) 32 pessoas.
   - C) 33 pessoas.
   - D) 34 pessoas.
   - **Gabarito:** A

3. **** [Difícil]
   - A) 23.
   - B) 24.
   - C) 25.
   - D) 26.
   - **Gabarito:** A

4. **** [Intermediário]
   - A) 2100 será bissexto por ser divisível por 4.
   - B) Todo ano divisível por 100 é bissexto.
   - C) 2000 foi bissexto e 2100 não será.
   - D) Nenhum ano divisível por 100 é bissexto.
   - **Gabarito:** A

5. **** [Intermediário]
   - A) 3º.
   - B) 4º.
   - C) 5º.
   - D) 11º.
   - **Gabarito:** A

6. **** [Intermediário]
   - A) 24.
   - B) 25.
   - C) 23.
   - D) 26.
   - **Gabarito:** A

7. **** [Intermediário]
   - A) São 25 marcas e todos os intervalos medem 25 m.
   - B) São 26 marcas e todos os intervalos medem 25 m.
   - C) São 24 marcas e todos os intervalos medem 25 m.
   - D) As exigências são incompatíveis, pois 610 não é múltiplo de 25.
   - **Gabarito:** A

8. **** [Intermediário]
   - A) 24.
   - B) 25.
   - C) 26.
   - D) 34.
   - **Gabarito:** A

### Flashcards (6)

- **Card 1:**  -> 
- **Card 2:**  -> 
- **Card 3:** Quando uma linha com comprimento L e espaçamento d tem L/d+1 pontos? -> Quando L é múltiplo de d, a linha é aberta e inclui as duas pontas. Em circuito fechado com divisão exata, há L/d pontos.
- **Card 4:**  -> 
- **Card 5:** Como calcular os dias de subida com recuo? -> Se H≤S, um dia. Se H>S e S>D≥0, teto((H−S)/(S−D))+1; não há recuo depois de alcançar H.
- **Card 6:** Qual é a exceção secular dos anos bissextos gregorianos? -> Um ano divisível por 100 só é bissexto se também for divisível por 400.
