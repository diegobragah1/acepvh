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
