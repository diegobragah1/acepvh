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
