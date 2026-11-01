# Correções Conceituais, Estruturais e Editoriais Implementadas nas 49 Aulas

Data de atualização: 31/10/2026.

Este documento consolida todas as correções conceituais, normativas, matemáticas, linguísticas e editoriais efetivamente implementadas no código e nos dados (`data/app_data.json`, `public/data/app_data.json`, `docs/data/app_data.json`, `src/data/deepening/*.ts` e `src/utils/editorialCorrections.ts`).

---

## 1. Correções Transversais nas 49 Aulas

1. **Remoção integral de comentários órfãos de "alternativa E" em questões de 4 opções (`A–D`)**:
   - **Problema**: 17 questões distribuídas em `esp_2, esp_3, esp_5, esp_8, esp_9, esp_10, leg_4, leg_5, leg_6, leg_7, por_3` continham nos comentários de gabarito menções a `"Erro da E:"` ou `"na letra E"`, herdadas de quando o banco possuía 5 alternativas.
   - **Correção**: Higienizados todos os comentários das 49 aulas (`0` ocorrências remanescentes, validado por teste automatizado em `src/utils/closure.test.ts`).
2. **Eliminação de cabeçalhos e referências cruzadas da numeração legada (`Aula 18` a `Aula 31` e `port_1..6`)**:
   - **Problema**: Blocos de Língua Portuguesa, Raciocínio Lógico, Legislação e Atualidades ainda exibiam subtítulos antigos como `Aula 18 — Semântica, Ortografia e Pontuação`, `Aula 22 — Regência, Crase e Colocação` ou `Aula 25 — Raciocínio Lógico-Matemático`.
   - **Correção**: Substituídos todos os cabeçalhos legados por títulos alinhados à matriz de 49 aulas (`esp_1..10`, `leg_1..7`, `por_1..18`, `rlm_1..8`, `atu_1..6`).
3. **Sincronização integral de `lessonTitle` nos 660 Flashcards**:
   - **Problema**: Cartões de revisão mantinham rótulos da organização antiga de 31 aulas.
   - **Correção**: Todos os 660 flashcards nas 49 aulas tiveram `lessonTitle` sincronizado com o `title` oficial de sua respectiva aula.
4. **Padronização de rótulos de origem de questões sem prova oficial autenticada**:
   - **Problema**: Enunciados traziam prefixos `(IBGP — ...)`, `(Padrão IBGP...)`, `(CEBRASPE...)`, `(SELECON...)` sem prova oficial autenticada anexada ao repositório.
   - **Correção**: Padronizados para `(Questão de estudo — ...)` ou `(Autoral — ...)`, garantindo que nenhuma questão sem documento-fonte autenticado seja apresentada como transcrição literal de certame oficial.

---

## 2. Língua Portuguesa (`por_1` a `por_18`)

| Aula | Problema Identificado | Correção Implementada |
| --- | --- | --- |
| `por_1` | Textos-base curtos sem distinção sistemática entre compreensão literal e inferência/pressuposto/subentendido. | Reescrita e ampliação com crônica analítica de vistoria domiciliar, distinção entre dado explícito, pressuposto (gatilho linguístico) e subentendido (pragmático), mais questões autorais comentadas. |
| `por_2` | Afirmação sem amparo empírico de frequência "100% nas provas" e tratamento rígido de tipos textuais. | Removido percentual sem lastro; explicitada a distinção entre tipos textuais (sequências finitas) e gêneros textuais (práticas sociocomunicativas híbridas). |
| `por_3` | Confusão entre polissemia e homonímia; ausência de hiperonímia/hiponímia e ambiguidade lexical. | Adicionada seção estruturada diferenciando polissemia (mesma palavra com unidade semântica histórica/metafórica) de homonímia (vocábulos distintos homógrafos/homófonos/perfeitos), hiperônimos/hipônimos e 2 questões autorais. |
| `por_4` | Definição restritiva que tratava elipse e zeugma como categorias mutuamente excludentes (`"sem ter sido mencionado antes"`). | Corrigidos teoria (`Bloco 4.1`), resumo e flashcards: **elipse** é o gênero (omissão de termo recuperável pelo contexto ou pela flexão) e **zeugma** é o caso particular (subtipo) de elipse em que o termo omitido já foi expresso anteriormente. Adicionada seção sobre pleonasmo estilístico vs. vicioso, polissíndeto vs. assíndeto e silepse + questão autoral. |
| `por_5` | Cobertura curta das figuras de linguagem sem contrapor metáfora/comparação e antítese/paradoxo nem detalhar figuras sonoras. | Adicionada matriz contrastiva (metáfora vs. comparação, metonímia, antítese vs. paradoxo, eufemismo vs. ironia, aliteração, assonância, onomatopeia e paranomásia) e 2 questões autorais. |
| `por_6` | Equivalências mecânicas de conectivos sem alerta sobre contexto e deslocamento de `pois`. | Adicionada seção sobre polivalência de operadores (`pois` causal vs. conclusivo posposto, `desde que` condicional vs. temporal, `enquanto` temporal vs. proporcional/adversativo) e dêixis/anáfora/catáfora, mais 2 questões autorais. |
| `por_7` | Definição imprecisa de catáfora em relação à elipse e apresentação das 4 metarregras de Charolles como lista fechada absoluta. | Corrigida a definição de catáfora (antecipação por pronome/expressão catafórica cujo referente aparece adiante) e qualificadas as 4 metarregras de Charolles como modelo clássico de condições de coerência, mais questão autoral. |
| `por_8` | Comentário órfão na questão 3 do `Bloco 8.1` mencionando `"planalto"` e `"propusermos"` (inexistentes nas alternativas); falta de quadro sistemático das 10 classes. | Reescrito o comentário da questão 3 analisando exatamente `'entardecer'`, `'mantiver'` e `'vir'`; adicionada matriz das 10 classes de palavras (6 variáveis e 4 invariáveis), composição por justaposição vs. aglutinação e derivação regressiva vs. imprópria, mais 2 questões autorais. |
| `por_9` | Exposição sintética sobre imperativo, verbos defectivos/abundantes e correlação verbal. | Adicionada seção completa sobre formação do imperativo afirmativo e negativo, verbos abundantes (`aceitado/aceito`, `entregado/entregue`, `imprimido/impresso` com `ter/haver` vs. `ser/estar`), correlação de tempos/modos e transposição de vozes verbais, mais 2 questões autorais. |
| `por_10` | Tratamento rígido de expressões partitivas e percentuais como se admitissem apenas uma concordância. | Explicitada na teoria, resumo e exercícios a dupla possibilidade normativa em partitivos (`a maioria dos moradores aprovou/aprovaram`) e percentuais (`25% dos imóveis foram vistoriados / foi vistoriado`), além de `mais de um`, `um dos que`, `meio/bastante/anexo` e `é proibido`, mais 2 questões autorais. |
| `por_11` | Regência nominal pouco desenvolvida em comparação à regência verbal. | Adicionada tabela sistemática de regência nominal (`acessível a`, `compatível com`, `alheio a`, `passível de`, `análogo a`, `preferência por/a`) e regência verbal com mudança de sentido (`assistir`, `aspirar`, `visar`, `implicar`, `preferir X a Y`), mais 2 questões autorais. |
| `por_12` | Falta de distinção entre pronome possessivo adjetivo e pronome possessivo substantivo na crase. | Explicitada a diferença: possessivo adjetivo feminino singular (`a/à sua equipe` — crase facultativa), plural (`a suas equipes` sem crase vs. `às suas equipes` obrigatória) e possessivo substantivo (`não me refiro à equipe norte, mas à sua` — crase obrigatória), além de `casa/terra` e paralelismo, mais 2 questões autorais. |
| `por_13` | Formulações absolutas no mapa mental (`"Vírgula mata a atração SEMPRE!"`) e nos flashcards sobre futuro. | Reescritos mapa mental e flashcards com precisão normativa; sistematizada a colocação pronominal nas locuções verbais (`auxiliar + infinitivo/gerúndio/particípio`) e no infinitivo preposicionado (`para não o incomodar` / `para não incomodá-lo`), mais 2 questões autorais. |
| `por_14` | Necessidade de sistematizar adjunto adnominal vs. complemento nominal e funções de `QUE` e `SE`. | Adicionado quadro contrastivo (adjunto adnominal agente/posse vs. complemento nominal paciente de abstrato/adjetivo/advérbio; aposto vs. vocativo; 4 funções de `QUE` e 4 de `SE`) e 2 questões autorais. |
| `por_15` | Erro conceitual no comentário da questão 2 do `Bloco 15.1` (`"caíram possui ditongo"`). | Corrigido o comentário (`"ca-í-ram"` é acentuada pela regra do **hiato** com `I` tônico sozinho na sílaba, e não por ditongo); adicionada síntese completa das regras de acentuação e do Acordo Ortográfico, mais questão autoral. |
| `por_16` | Macete excessivamente amplo (`"opostos se atraem — junta tudo sem hífen"`) sem ressalvar prefixos aglutinados nem `h`/`r`/`s`. | Reescritos teoria, resumo, mapa mental e flashcards detalhando os prefixos sem hífen (`co-`, `re-`, `pre-`, `pro-`, `des-`, `in-`), as regras de vogal/consoante igual ou diferente, `mal-/bem-`, `sub-/sob-`, `além-/recém-/pós-/pré-/pró-` e uso dos 4 porquês, mais 2 questões autorais. |
| `por_17` | Mapa mental limitava deslocamento a `"3+ palavras"`; distrator metalinguístico artificial no complemento (`"sem motivo sintático"`). | Corrigido o mapa mental; substituído o distrator metalinguístico por erro real de pontuação (`"A equipe segundo a supervisora, retornou cedo."`); adicionada seção sobre dupla vírgula em intercalações, ponto e vírgula, dois-pontos, travessão, aspas e interrogação indireta, mais 2 questões autorais. |
| `por_18` | Necessidade de aprofundar a distinção entre norma-padrão e norma culta e as 4 dimensões da variação. | Expandida a teoria com variação diatópica, diastrática, diafásica e diacrônica, distinção entre norma-padrão (ideal codificado) e norma culta (usos reais de falantes escolarizados) e questões comentadas. |

---

## 3. Raciocínio Lógico-Matemático (`rlm_1` a `rlm_8`)

1. **`rlm_1` (Conjuntos numéricos, operações, dízimas, módulo, primos, MDC e MMC)**:
   - Adicionada seção explícita sobre primalidade de $0$ e $1$ ($1$ não é primo nem composto; $2$ é o único primo par), fração geratriz de dízima periódica simples e composta, restrições de domínio em $\mathbb{R}$ ($\sqrt{x^2} = |x|$) e relação $\text{MMC}(a,b)\cdot\text{MDC}(a,b) = a\cdot b$, além de 2 questões autorais conferidas.
2. **`rlm_2` (Razões, proporções, regra de três e porcentagem)**:
   - Diferenciados os títulos e escopos dos blocos de laboratório; explicitadas as condições de existência de proporcionalidade linear e a mudança de base percentual (aumento de $25\%$ exige redução de $20\%$ para retornar ao valor inicial), com questão autoral conferida.
3. **`rlm_3` (Grandezas e medidas)**:
   - Adicionada síntese estruturada das 5 grandezas do edital: quantidade (dúzia $= 12$, grosa $= 144$, resma $= 500$), tempo (conversão sexagesimal de horas decimais), comprimento, capacidade e massa ($1\text{ m}^3 = 1.000\text{ L}$, $1\text{ dm}^3 = 1\text{ L}$).
4. **`rlm_4` (Equações, sistemas, função do 1º grau e médias)**:
   - Explicitada a condição $a \neq 0$ para função do 1º grau $f(x) = ax + b$ (diferenciando-a da função constante $a=0$), raiz $x = -b/a$ e classificação de sistemas lineares $2\times 2$ (SPD, SPI e SI).
5. **`rlm_5` (Lógica proposicional e quantificadores)**:
   - Eliminada a duplicação entre os blocos 2 e 6: o `Bloco 5.6` foi integralmente reescrito para cobrir condição suficiente vs. condição necessária em $p \rightarrow q$, disjunção exclusiva ($p \underline{\lor} q \equiv \neg(p \leftrightarrow q)$) e escopo da negação de proposições compostas com quantificadores.
6. **`rlm_6` (Argumentação, diagramas, conjuntos e sequências)**:
   - Adicionada metodologia de análise para sequências de figuras (lados, rotação, preenchimento e ciclo modular) e de palavras, além da distinção entre validade formal e verdade material.
7. **`rlm_7` (Análise combinatória)**:
   - Corrigido o título/rótulo da questão 4 do `Bloco 7.4` (permutação com restrição posicional de letras distintas) e conferidas todas as memórias de cálculo.
8. **`rlm_8` (Probabilidade e problemas lógico-sequenciais)**:
   - Corrigido o gabarito da questão de múltiplos de 4 ou 6 em 1 a 30 ($7 + 5 - 2 = 10 \Rightarrow 10/30 = 1/3$, alternativa B) e validados por enumeração exaustiva e simulação em `src/utils/probabilityReview.test.ts` todos os problemas de probabilidade, extração sem reposição, princípio das gavetas, anos bissextos e movimento em etapas.

---

## 4. Conhecimentos Específicos (`esp_1..10`), Legislação (`leg_1..7`) e Atualidades (`atu_1..6`)

1. **`esp_1` (CF/88 Arts. 196 a 200)**:
   - Atualizados teoria, resumo, mapa mental e flashcards para a **Emenda Constitucional nº 140/2026** (inciso IV do art. 198, §§ 4º-A e 4º-B sobre carreira única e § 10 sobre aposentadoria especial).
2. **`esp_2` e `esp_5` (Lei 8.080/1990, Portaria 2.436/2017 e Lei 8.142/1990)**:
   - Incorporados na `esp_5` os 649 parágrafos do texto original da Portaria GM/MS nº 2.436, de 21 de setembro de 2017 (PNAB), e adicionada na `esp_2` (`Bloco 2.6`) síntese articulada dos 3 princípios e 9 diretrizes da PNAB com remissão cruzada para `esp_5`.
3. **`esp_3`, `esp_6` e `esp_7` (Leis 11.350/2006, 13.708/2018, 13.595/2018 e Atribuições do ACE)**:
   - Corrigida em todas as aulas a informação sobre a antiga divisão `30h + 10h`, que foi **revogada pela Lei nº 14.792/2024** (mantida a jornada integral de 40 horas semanais para garantia do piso); adicionada em `esp_7` tabela comparativa entre as 8 atribuições municipais do ACE (Anexo II retificado do Edital nº 25/2026) e as atribuições típicas, assistidas e integradas da Lei nº 11.350/2006.
4. **`esp_4` (SUS: princípios, diretrizes, atribuições e competências)**:
   - Eliminada a duplicação do `Bloco 4.5`, substituindo-o por matriz comparativa entre **Atribuições Comuns (Art. 15)** e **Competências Específicas da União, Estados, DF e Municípios (Arts. 16 a 19 da Lei nº 8.080/1990)** e prevenção quaternária.
5. **`leg_1`, `leg_2` e `leg_3` (Legislação Municipal de Porto Velho)**:
   - Confrontados com os textos oficiais atualizados do SAPL da Câmara Municipal de Porto Velho (LOM, LC nº 385/2010, LC nº 390/2010 e LC nº 391/2010).
6. **`leg_7` (Lei de Acesso à Informação — Federal, Estadual e Municipal)**:
   - Substituída a referência incorreta ao Decreto 18.310/2022 (LGPD) pelo **Decreto Municipal nº 14.565/2017** (regulamento da LAI em Porto Velho), incluídas a **Lei Estadual nº 3.166/2013**, o **Decreto Estadual nº 17.145/2012** e a **Lei Estadual nº 6.385/2026**, e atualizadas as questões e flashcards do `Bloco 7.2`.
7. **`atu_3`, `atu_4` e `atu_6` (Geografia, Símbolos e Realidade Municipal/Prefeitura)**:
   - Uniformizada a distinção técnica entre as **12 regiões/localidades de distribuição de vagas** do Anexo I do Edital nº 25/2026 e os **distritos administrativos** do Município de Porto Velho, e adicionada síntese das pautas institucionais da Prefeitura de Porto Velho e da SEMUSA.
