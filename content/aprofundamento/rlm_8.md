# rlm_8 — Probabilidade Clássica e Condicional, Garantias e Raciocínio Sequencial

### 1. Espaço Amostral Equiprovável e Probabilidade de Laplace
Um experimento aleatório possui um conjunto de todos os resultados possíveis denominado **Espaço Amostral ($\Omega$)**. Um **Evento ($A$)** é qualquer subconjunto de $\Omega$.
- **Definição Clássica de Laplace**: se todos os $n(\Omega)$ resultados elementares forem **equiprováveis** (mesma chance de ocorrência):
  $$P(A) = \frac{n(A)}{n(\Omega)} = \frac{\text{Casos Favoráveis}}{\text{Casos Possíveis}}$$
  O valor da probabilidade sempre satisfaz $0 \le P(A) \le 1$ ($0\% \le P(A) \le 100\%$).
- **Contraexemplo Clássico das Somas de Dados**: no lançamento de dois dados de 6 faces, há $6 \times 6 = 36$ pares ordenados equiprováveis. As somas de 2 a 12 **NÃO** são equiprováveis: a soma 7 possui 6 pares favoráveis ($(1,6), (2,5), (3,4), (4,3), (5,2), (6,1) \implies P = \frac{6}{36} = \frac{1}{6}$), enquanto a soma 2 possui apenas 1 par ($(1,1) \implies P = \frac{1}{36}$). Usar $\frac{1}{11}$ para cada soma é um erro de modelagem.

### 2. Regra da Adição (União) e Evento Complementar
- **Probabilidade da União (Conectivo "OU")**:
  $$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$
- **Eventos Mutuamente Exclusivos**: quando não podem ocorrer juntos ($A \cap B = \emptyset \implies P(A \cap B) = 0$). Logo, $P(A \cup B) = P(A) + P(B)$.
- **Evento Complementar ($\bar{A}$ ou $A^c$)**: a probabilidade de um evento não ocorrer é:
  $$P(\bar{A}) = 1 - P(A)$$

### 3. Probabilidade Condicional e Eventos Independentes
- **Probabilidade Condicional**: probabilidade de ocorrer $A$ sabendo previamente que o evento $B$ ocorreu ($P(B) > 0$):
  $$P(A \mid B) = \frac{P(A \cap B)}{P(B)} = \frac{n(A \cap B)}{n(B)}$$
  *Regra prática de resolução*: a informação condicional restringe imediatamente o espaço amostral ao subconjunto $B$, que se torna o novo denominador.
- **Eventos Independentes**: a ocorrência de $B$ não altera a probabilidade de $A$:
  $$P(A \mid B) = P(A) \iff P(A \cap B) = P(A) \times P(B)$$
  *Atenção*: independência **não** é o mesmo que exclusão mútua. Eventos mutuamente exclusivos com probabilidades não nulas são sempre dependentes.
- **Extrações Sucessivas com e sem Reposição**:
  * *Com reposição*: a composição do espaço amostral é restaurada e os eventos são independentes;
  * *Sem reposição*: o total no denominador diminui em 1 unidade a cada retirada e a composição interna se altera (eventos dependentes).

### 4. Problemas de Garantia e Princípio das Gavetas de Dirichlet (Casa dos Pombos)
Questões da banca IBGP que exigem o número **mínimo** de retiradas às cegas para se ter **certeza absoluta (garantia)** baseiam-se na análise do **pior caso possível** (cenário de maior azar):
- Para garantir $k$ itens da mesma categoria entre $m$ categorias distintas no pior caso:
  $$\text{Retiradas Mínimas} = m \times (k - 1) + 1$$
- Para estoques finitos limitados: supõe-se que o agente retira primeiro todos os elementos de todas as outras categorias que não interessam, até que reste apenas a categoria procurada.

### 5. Raciocínio Sequencial, Calendário e Avanço com Recuo
- **Ciclos de Calendário (Módulo 7)**: os dias da semana repetem-se a cada $T = 7$ dias. Para saber o dia da semana daqui a $N$ dias, divide-se $N$ por 7 e analisa-se o resto $r$:
  * Se resto $r = 0$, o dia será o mesmo; se $r = 1$, avança 1 dia; se $r = 2$, avança 2 dias.
  * *Regra Gregoriana de Anos Bissextos*: um ano é bissexto (366 dias) se for divisível por 4; exceto os anos seculares (terminados em 00), que só são bissextos se forem divisíveis por 400 (ex.: 2000 foi bissexto; 2100 não será).
- **Avanço com Recuo com Teto**: em problemas de subida onde a cada etapa há avanço $S$ e recuo $D$, no instante em que o agente atinge a altura total $H$ ele não escorrega:
  $$\text{Etapas} = \left\lceil \frac{H - S}{S - D} \right\rceil + 1$$
- **Linha Aberta vs Circuito Fechado**:
  * Em linha reta aberta de comprimento $L$ com postes a cada distância $d$: número de elementos $= \frac{L}{d} + 1$;
  * Em circuito fechado (perímetro $L$): número de elementos $= \frac{L}{d}$.

## Resumo de revisão

Espaço amostral equiprovável permite usar casos favoráveis / possíveis. Sem reposição, o denominador diminui. Condicional restringe o universo. Garantia mínima exige raciocinar pelo pior caso. Calendário usa restos da divisão por 7.

| Tópico de Probabilidade / Sequência | Fórmula / Regra Algébrica | Exemplo Prático | Ponto Crítico de Prova |
| --- | --- | --- | --- |
| **Probabilidade de Laplace** | $P(A) = \frac{n(A)}{n(\Omega)}$ | Tirar ás no baralho de 52 cartas: $\frac{4}{52} = \frac{1}{13}$. | Só vale se os resultados elementares forem **equiprováveis**. |
| **Probabilidade Condicional** | $P(A \mid B) = \frac{n(A \cap B)}{n(B)}$ | Sabendo que a lâmina veio de Calama, chance de ser positiva: $\frac{\text{Positivas de Calama}}{\text{Total de Calama}}$. | Reduzir o denominador diretamente ao subconjunto da condição dada. |
| **Extração Sem Reposição** | $P(A \cap B) = P(A) \times P(B \mid A)$ | 3 azuis e 2 verdes: duas azuis $= \frac{3}{5} \times \frac{2}{4} = \frac{3}{10}$. | Subtrair 1 do total e do grupo específico a cada retirada. |
| **Princípio das Gavetas (Pior Caso)** | Pior caso $= \text{todas as erradas} + \text{meta}$. | Garantir 2 de malária tendo 4 dengue e 3 leishmaniose: retirar $4 + 3 + 2 = 9$. | Certeza matemática absoluta não admite contar com a sorte. |
| **Dias da Semana e Calendário** | $N = 7q + r$ (olhar o resto $r$). | Daqui a 30 dias: $30 = 7 \times 4 + 2 \implies$ avançar 2 dias a partir de hoje. | Diferenciar *"daqui a N dias"* de contagem inclusiva com o dia inicial. |

## Exercícios autorais comentados

### Questão 1

[Autoral] Em uma caixa de transporte térmico do laboratório de entomologia há 3 frascos com amostras de Aedes aegypti e 2 frascos com amostras de Culex quinquefasciatus. Se o agente retirar sucessivamente dois frascos ao acaso e SEM REPOSIÇÃO, qual é a probabilidade de ambos os frascos retirados serem de Aedes aegypti?

- A) 3/10 (ou 30%).
- B) 9/25 (ou 36%).
- C) 2/5 (ou 40%).
- D) 1/2 (ou 50%).

**Gabarito: A.** Gabarito: A. Na primeira retirada, há 3 frascos favoráveis entre 5 no total: P(1ª ser Aedes) = 3/5. Como não há reposição, restam 4 frascos na caixa, sendo 2 de Aedes: P(2ª ser Aedes | 1ª foi Aedes) = 2/4 = 1/2. Pela regra da multiplicação: P(ambas Aedes) = (3/5) × (2/4) = 6/20 = 3/10 = 30%. Erro da B: 9/25 = (3/5) × (3/5) é a probabilidade caso houvesse reposição do frasco; erro da C: 2/5 considera apenas o evento simples de Culex; erro da D: 1/2 é a probabilidade isolada da segunda retirada.

### Questão 2

[Autoral] No calendário de plantões da SEMUSA, sabe-se que o dia 1º de março de determinado ano não bissexto caiu em uma segunda-feira. Em qual dia da semana cairá o dia 31 de março desse mesmo mês?

- A) Quarta-feira.
- B) Segunda-feira.
- C) Terça-feira.
- D) Quinta-feira.

**Gabarito: A.** Gabarito: A. Entre o dia 1º e o dia 31 transcorrem exatamente 31 - 1 = 30 dias. Como os dias da semana possuem periodicidade cíclica de 7 dias, divide-se o deslocamento por 7: 30 = 7 × 4 + 2 (isto é, 4 semanas completas e resto de 2 dias). Avançando 2 dias a partir de segunda-feira: 1 dia = terça-feira; 2 dias = quarta-feira. Erro da B: seria segunda-feira se o resto fosse zero (ex.: após 28 dias); erro da C: terça-feira seria resto 1 (29 dias de transcurso); erro da D: quinta-feira seria resto 3 (31 dias de transcurso).

### Questão 3

[Autoral] Em um lote de 20 lâminas analisadas pela equipe de malária da SEMUSA em Porto Velho, 12 vieram do distrito de Calama (das quais 4 foram positivas) e 8 vieram do distrito de Nazaré (das quais 2 foram positivas). Selecionando-se aleatoriamente uma lâmina desse lote e sabendo-se que ela é oriunda de Calama, qual é a probabilidade condicional de ela ser positiva?

- A) 1/3 (ou 4/12).
- B) 3/10 (ou 6/20).
- C) 1/4 (ou 2/8).
- D) 3/5 (ou 12/20).

**Gabarito: A.** Gabarito: A. A informação condicional ("sabendo-se que veio de Calama") reduz o espaço amostral relevante exclusivamente às 12 lâminas provenientes de Calama (denominador = 12). Dentre essas 12 lâminas, exatamente 4 são positivas (numerador = 4). Portanto, P(Positiva | Calama) = 4/12 = 1/3. Erro da B: 6/20 = 3/10 é a probabilidade incondicional de encontrar uma lâmina positiva no lote todo; erro da C: 2/8 = 1/4 refere-se à taxa de Nazaré; erro da D: 12/20 = 3/5 é a proporção de lâminas de Calama no lote.

### Questão 4

[Autoral] Em uma gaveta do laboratório de campo há 4 frascos lacrados de larvicida líquido, 5 frascos de inseticida concentrado e 3 frascos de repelente térmico, todos com frascos idênticos ao tato. Quantos frascos no MÍNIMO o ACE deve retirar da gaveta no escuro (às cegas) para ter a CERTEZA MATEMÁTICA ABSOLUTA de retirar pelo menos 2 frascos de inseticida concentrado?

- A) 9 frascos.
- B) 2 frascos.
- C) 7 frascos.
- D) 11 frascos.

**Gabarito: A.** Gabarito: A. Pelo Princípio das Gavetas de Dirichlet (pior caso possível): o agente retira primeiro todos os frascos que NÃO são inseticida (todos os 4 de larvicida + todos os 3 de repelente = 7 frascos). Nesse ponto mais desfavorável, todos os frascos restantes na gaveta são obrigatoriamente de inseticida concentrado. Para garantir 2 frascos desse tipo, basta retirar mais 2 frascos: 7 + 2 = 9 frascos. Erro da B: 2 é a melhor hipótese possível (sorte), não garantia; erro da C: 7 frascos no pior caso poderiam ser todos os larvicidas e repelentes, sem nenhum inseticida; erro da D: 11 frascos é excessivo (sobraria apenas 1 na gaveta).

### Questão 5

[Autoral] Uma equipe de agentes em treinamento sobe uma escadaria de acesso a reservatórios elevados. Em cada etapa do exercício, o agente sobe 4 degraus e, em seguida, desce 1 degrau. Sabendo que a escadaria possui 31 degraus no total e que o exercício se encerra assim que o agente pisa no 31º degrau (não havendo recuo ao atingir o topo), em quantas etapas de subida o agente alcançará pela primeira vez o topo da escadaria?

- A) 10 etapas de subida.
- B) 11 etapas de subida.
- C) 9 etapas de subida.
- D) 31 etapas de subida.

**Gabarito: A.** Gabarito: A. Em cada etapa completa com recuo, o avanço líquido é de 4 - 1 = 3 degraus. No entanto, na etapa final de subida o agente sobe 4 degraus e atinge o topo de 31 degraus sem recuar. Portanto, antes da etapa final ele precisa atingir pelo menos 31 - 4 = 27 degraus. Com avanço líquido de 3 degraus por etapa: 27 ÷ 3 = 9 etapas completas (ao fim da 9ª etapa ele está no degrau 9 × 3 = 27). Na 10ª etapa, ele sobe 4 degraus: 27 + 4 = 31 degraus, atingindo o topo. Erro da B: divide 31 ÷ 3 ≈ 10,33 e arredonda para 11 sem deduzir o avanço final sem recuo; erro da C: na 9ª etapa ele está no degrau 27; erro da D: considera avanço de apenas 1 degrau por etapa.

## Flashcards

**Por que a soma dos resultados de dois dados comuns de 6 faces não é equiprovável?**

Porque há 36 pares ordenados equiprováveis: a soma 7 possui 6 combinações favoráveis (probabilidade 6/36 = 1/6), enquanto a soma 2 possui apenas uma (1/36).

**Qual o procedimento para calcular a probabilidade condicional P(A | B)?**

Restringe-se o espaço amostral diretamente à condição dada B (que vira o novo denominador) e conta-se quantos elementos de B também atendem a A: P(A | B) = n(A ∩ B) / n(B).

**Como resolver problemas de garantia mínima pelo Princípio das Gavetas (Casa dos Pombos)?**

Analisa-se o pior caso possível (maior azar): somam-se todos os elementos de todas as categorias indesejadas e adiciona-se a quantidade exigida da categoria meta.

## Referências de consulta

- [IMPA/OBMEP — Probabilidade e Espaços Amostrais](https://portaldaobmep.impa.br/index.php/modulo/ver?modulo=46&tipo=7) — Cálculo de probabilidades, probabilidade condicional, independência e contagem sequencial.

Consulta editorial: 31/10/2026. Legislação deve respeitar o marco temporal do edital.
