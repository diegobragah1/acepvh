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
