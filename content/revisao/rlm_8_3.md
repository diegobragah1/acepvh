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
