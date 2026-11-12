---
id: "00_INDEX_ARQUITETURA_DADOS"
project: "Plataforma ACE SEMUSA Porto Velho/RO 2026"
edital: "Edital nº 25/2026 + Retificação nº 01 (Edital nº 28/2026 — Banca IBGP)"
examDate: "2026-12-13T14:45:00-04:00"
totalLessons: 49
totalBlocks: 236
totalSources: 126
totalQuestions: 746
totalFlashcards: 723
totalEndemics: 14
totalCargos: 16
---

# Engenharia de Conteúdo em Markdown (`.md`) — Projeto ACE SEMUSA Porto Velho 2026

Este repositório documental contém a **transformação integral em Markdown limpo, estruturado e semanticamente auditado (`.md`)** de toda a base técnica, normativa e programática do concurso para **Agente de Combate às Endemias (ACE — Códigos 340 a 356)** da **Secretaria Municipal de Saúde de Porto Velho/RO (SEMUSA — Edital nº 25/2026 + Retificação nº 01 / Edital nº 28/2026 — Banca IBGP)**.

---

## 1. Estrutura de Diretórios e Arquivos (`.md` + Pipeline JSON)

| Caminho Relativo | Categoria | Conteúdo e Finalidade Técnica |
| :--- | :--- | :--- |
| `./00_INDEX_ARQUITETURA_DADOS.md` | **Índice Mestre & Schema** | Documentação da engenharia de conteúdo, catálogo dos 49 módulos (`.md`), especificação do YAML Frontmatter e instruções de sincronização contínua com `./data/app_data.json`. |
| `./content/aulas-49/esp_1.md` a `./content/aulas-49/esp_10.md` | **Conhecimentos Específicos ACE (10 Aulas)** | 15 questões na prova (Peso 2,0 = 30,0 pts). CF/88 (Arts. 196–200), PNPS, Leis 8.080/90 e 8.142/90, Decreto 7.508/11, PNAB 2017 (Portaria 2.436/17), Leis da Carreira ACE (11.350/06, 13.595/18, 13.708/18, 14.536/23 e EC 120/22), Vigilância em Saúde, LIRAa, as 14 Endemias do Anexo IV, Cálculos Operacionais de Campo (Cubagem/Dosagem/EPIs/RG) e biossegurança. |
| `./content/aulas-49/leg_1.md` a `./content/aulas-49/leg_7.md` | **Legislação (7 Aulas)** | 10 questões na prova (Peso 2,0 = 20,0 pts). LOM Porto Velho (249 artigos), Regime Jurídico Único (LC 385/2010), Planos de Carreira SEMUSA (LC 390 e 391/2010), Estatuto da Pessoa com Deficiência (Lei 13.146/15), CF/88 (Princípios, Direitos Fundamentais, Municípios e Administração Pública), Nova Lei de Licitações (Lei 14.133/2021) e LAI (Federal 12.527/11, Estadual-RO 3.166/13 e Municipal). |
| `./content/aulas-49/por_1.md` a `./content/aulas-49/por_18.md` | **Língua Portuguesa (18 Aulas)** | 10 questões na prova (Peso 2,0 = 20,0 pts). Compreensão/interpretação textual, tipologia e gêneros, semântica lexical, figuras de sintaxe e linguagem, articulação textual, operadores argumentativos, coesão/coerência, classes de palavras, verbos (flexão, vozes, tempos e modos), concordância verbal e nominal, regência verbal e nominal, crase, colocação pronominal, estrutura sintática da oração/período, acentuação gráfica, ortografia oficial, pontuação e variação linguística. |
| `./content/aulas-49/rlm_1.md` a `./content/aulas-49/rlm_8.md` | **Raciocínio Lógico (8 Aulas)** | 10 questões na prova (Peso 2,0 = 20,0 pts). Conjuntos numéricos (operações, MDC/MMC), razões, proporções, regra de três simples/composta e porcentagem, grandezas e medidas, equações/sistemas do 1º grau e médias, lógica proposicional (conectivos, tabelas-verdade, De Morgan, equivalências), argumentação lógica, diagramas e teoria dos conjuntos, análise combinatória (PFC, arranjos, permutações, combinações) e probabilidade em espaços amostrais finitos. |
| `./content/aulas-49/atu_1.md` a `./content/aulas-49/atu_6.md` | **Conhecimentos Gerais e Atualidades (6 Aulas)** | 5 questões na prova (Peso 2,0 = 10,0 pts). Cultura geral e fatos políticos/econômicos/sociais (últimos 5 anos), humanidades e movimentos artísticos/culturais, geografia, demografia (Censo IBGE 2022/2025) e distritos de Porto Velho, noções de cidadania e símbolos cívicos, atualidades socioambientais (clima, Rio Madeira, COP30, georreferenciamento SIG/GPS/PRODES) e realidade socioeconômica e histórica de Rondônia e Porto Velho. |
| `./content/fontes-oficiais/` | **Auditoria Documental Completa (126 Fontes)** | Inventário analítico das 126 fontes oficiais catalogadas (leis federais, leis complementares municipais, decretos, portarias do Ministério da Saúde, manuais técnicos e apostilas oficiais do concurso), integradas ao catálogo de fontes da Tab 6 Biblioteca. |
| `./content/fichas_14_endemias_liraa_roedores.md` | **Fichas Técnicas de Campo** | As 14 fichas técnicas completas das doenças do Anexo IV em tabelas Markdown, os 7 grupos de depósitos do LIRAa (A1 a E), fórmulas de IIP e IB e tabela comparativa dos 3 roedores sinantrópicos. |
| `./content/_TEMPLATE_NOVA_AULA.md` | **Template de Expansão** | Modelo padronizado com YAML Frontmatter, seções para Modos A, B e C, tabelas Markdown e bloco JSON pronto para criação e expansão de novas aulas curriculares. |
| `./scripts/sync_all_data.ts` | **Compilador / Injetor Automático TypeScript** | Pipeline TypeScript executado via `npm run sync:data` que lê todas as aulas, recalcula contagens, gera os 49 arquivos Markdown em `content/aulas-49/`, atualiza `data/app_data.json`, `data/lessons/` e `data/manifest.json`. |

---

## 2. Catálogo Geral das 49 Aulas Convertidas em Markdown (`.md`)

| Cód. Arquivo | Nº | Disciplina (Peso na Prova) | Título da Aula | Blocos | Questões (Modo C) | Flashcards | Fontes (PDFs/Docs) |
| :--- | :---: | :--- | :--- | :---: | :---: | :---: | :--- |
| [`./content/aulas-49/esp_1.md`](./content/aulas-49/esp_1.md) | 01 | Conhecimentos Específicos ACE (15 Questões • Peso 2 (30 pts)) | **1. Constituição da República Federativa do Brasil (com as Emendas Constitucionais): Art. 196 a 200** | 4 | 14 | 11 | #56, #62, #86, #91, #98, #99 |
| [`./content/aulas-49/esp_2.md`](./content/aulas-49/esp_2.md) | 02 | Conhecimentos Específicos ACE (15 Questões • Peso 2 (30 pts)) | **2. Legislações Federais de Saúde Pública: Lei Federal nº 8.080/1990. Portaria Federal nº 2.436/2017. Lei Federal nº 8.142/1990** | 7 | 23 | 24 | #57, #58, #59, #63, #64, #86, #91, #98 |
| [`./content/aulas-49/esp_3.md`](./content/aulas-49/esp_3.md) | 03 | Conhecimentos Específicos ACE (15 Questões • Peso 2 (30 pts)) | **3. Lei Federal nº 11.350/2006. Lei Federal nº 13.708/2018. Lei Federal nº 13.595/2018** | 5 | 17 | 16 | #61, #86, #87, #88, #89, #91, #98, #99 |
| [`./content/aulas-49/esp_4.md`](./content/aulas-49/esp_4.md) | 04 | Conhecimentos Específicos ACE (15 Questões • Peso 2 (30 pts)) | **4. Sistema Único de Saúde – SUS: princípios fundamentais, diretrizes, atribuições e competências das esferas governamentais do SUS. Promoção e proteção da saúde** | 6 | 20 | 20 | #57, #60, #63, #65, #86, #91, #98, #99 |
| [`./content/aulas-49/esp_5.md`](./content/aulas-49/esp_5.md) | 05 | Conhecimentos Específicos ACE (15 Questões • Peso 2 (30 pts)) | **5. Política Nacional de Atenção Básica** | 5 | 14 | 14 | #59, #60, #65, #86, #91, #98, #100 |
| [`./content/aulas-49/esp_6.md`](./content/aulas-49/esp_6.md) | 06 | Conhecimentos Específicos ACE (15 Questões • Peso 2 (30 pts)) | **6. História e Evolução da Profissão de ACE** | 4 | 11 | 10 | #56, #61, #86, #89, #91, #98, #99 |
| [`./content/aulas-49/esp_7.md`](./content/aulas-49/esp_7.md) | 07 | Conhecimentos Específicos ACE (15 Questões • Peso 2 (30 pts)) | **7. Atribuições do Agente de Combate a Endemias** | 7 | 20 | 19 | #61, #67, #68, #69, #86, #89, #91, #98, #99 |
| [`./content/aulas-49/esp_8.md`](./content/aulas-49/esp_8.md) | 08 | Conhecimentos Específicos ACE (15 Questões • Peso 2 (30 pts)) | **8. Vigilância em Saúde** | 5 | 15 | 15 | #60, #68, #69, #86, #91, #98 |
| [`./content/aulas-49/esp_9.md`](./content/aulas-49/esp_9.md) | 09 | Conhecimentos Específicos ACE (15 Questões • Peso 2 (30 pts)) | **9. Conhecimentos Básicos: Raiva, Esquistossomose, Doença de Chagas, Dengue, Febre Amarela, Febre Maculosa, Influenza, Chikungunya, Zika Vírus, Leptospirose, Leishmaniose: Tegumentar e Visceral e Malária, COVID-19** | 13 | 35 | 38 | #66, #67, #68, #69, #86, #91, #98 |
| [`./content/aulas-49/esp_10.md`](./content/aulas-49/esp_10.md) | 10 | Conhecimentos Específicos ACE (15 Questões • Peso 2 (30 pts)) | **10. Doenças contagiosas: agente etiológico, reservatório, hospedeiro, de modo de transmissão, sintomas e medidas de controle** | 4 | 13 | 13 | #60, #66, #67, #68, #69, #86, #91, #98 |
| [`./content/aulas-49/leg_1.md`](./content/aulas-49/leg_1.md) | 11 | Legislação Municipal, Constitucional e Administrativa (10 Questões • Peso 2 (20 pts)) | **11. Lei Orgânica do Município de Porto Velho/RO e atualizações** | 7 | 19 | 23 | #49, #86, #91, #92 |
| [`./content/aulas-49/leg_2.md`](./content/aulas-49/leg_2.md) | 12 | Legislação Municipal, Constitucional e Administrativa (10 Questões • Peso 2 (20 pts)) | **12. Regime Jurídico dos Servidores Públicos Municipais de Porto Velho/RO (Lei Municipal nº 385/2010 e atualizações)** | 7 | 19 | 23 | #50, #86, #91, #93 |
| [`./content/aulas-49/leg_3.md`](./content/aulas-49/leg_3.md) | 13 | Legislação Municipal, Constitucional e Administrativa (10 Questões • Peso 2 (20 pts)) | **13. Plano de Carreira, Cargos e Remuneração dos Profissionais da Saúde da Rede Pública Municipal de Saúde do Município Porto Velho-RO (Lei Municipal nº 390/2010 e Lei Municipal nº 391/2010, e atualizações)** | 6 | 15 | 15 | #50, #86, #87, #88, #89, #91, #101, #102 |
| [`./content/aulas-49/leg_4.md`](./content/aulas-49/leg_4.md) | 14 | Legislação Municipal, Constitucional e Administrativa (10 Questões • Peso 2 (20 pts)) | **14. Conhecimento da Lei Brasileira de Inclusão da Pessoa com Deficiência (Estatuto da Pessoa com Deficiência)** | 5 | 16 | 16 | #41, #86, #91 |
| [`./content/aulas-49/leg_5.md`](./content/aulas-49/leg_5.md) | 15 | Legislação Municipal, Constitucional e Administrativa (10 Questões • Peso 2 (20 pts)) | **15. Constituição da República Federativa do Brasil - Noções de Direito Constitucional: Constituição Brasileira: Título I - Dos Princípios Fundamentais. Título II - Dos Direitos e Garantias Fundamentais: do art. 5º ao art. 13. Título III - Da Organização do Estado: Capítulo IV - Dos Municípios - art. 29, 29-A, 30, 31 e Capítulo VII - Da Administração Pública – art. 37, 38 e 39** | 7 | 18 | 21 | #42, #43, #44, #45, #46, #47, #48, #49, #50, #86, #91 |
| [`./content/aulas-49/leg_6.md`](./content/aulas-49/leg_6.md) | 16 | Legislação Municipal, Constitucional e Administrativa (10 Questões • Peso 2 (20 pts)) | **16. Lei de Licitações e Pregão (Lei Federal nº 14.133/2021)** | 8 | 22 | 27 | #51, #52, #54, #86, #91 |
| [`./content/aulas-49/leg_7.md`](./content/aulas-49/leg_7.md) | 17 | Legislação Municipal, Constitucional e Administrativa (10 Questões • Peso 2 (20 pts)) | **17. Legislações Federal (Lei Federal nº 12.527/2011), Estadual e Municipal (se houver) de Acesso à Informação** | 5 | 15 | 15 | #53, #86, #91, #94, #103, #104, #105 |
| [`./content/aulas-49/por_1.md`](./content/aulas-49/por_1.md) | 18 | Língua Portuguesa (10 Questões • Peso 2 (20 pts)) | **18. Compreensão e interpretação de textos** | 4 | 19 | 12 | #95, #96, #97 |
| [`./content/aulas-49/por_2.md`](./content/aulas-49/por_2.md) | 19 | Língua Portuguesa (10 Questões • Peso 2 (20 pts)) | **19. Gêneros e tipos de texto** | 3 | 8 | 8 | #95, #96, #97, #117, #118 |
| [`./content/aulas-49/por_3.md`](./content/aulas-49/por_3.md) | 20 | Língua Portuguesa (10 Questões • Peso 2 (20 pts)) | **20. Significação das palavras** | 3 | 12 | 11 | #95, #96, #97 |
| [`./content/aulas-49/por_4.md`](./content/aulas-49/por_4.md) | 21 | Língua Portuguesa (10 Questões • Peso 2 (20 pts)) | **21. Figuras de Sintaxe** | 3 | 10 | 9 | #95, #96, #97 |
| [`./content/aulas-49/por_5.md`](./content/aulas-49/por_5.md) | 22 | Língua Portuguesa (10 Questões • Peso 2 (20 pts)) | **22. Figuras de Linguagem** | 3 | 10 | 8 | #95, #96, #97 |
| [`./content/aulas-49/por_6.md`](./content/aulas-49/por_6.md) | 23 | Língua Portuguesa (10 Questões • Peso 2 (20 pts)) | **23. Articulação textual: operadores sequenciais, expressões referenciais** | 4 | 12 | 11 | #95, #96, #97 |
| [`./content/aulas-49/por_7.md`](./content/aulas-49/por_7.md) | 24 | Língua Portuguesa (10 Questões • Peso 2 (20 pts)) | **24. Coesão e coerência textual** | 4 | 12 | 10 | #95, #96, #97 |
| [`./content/aulas-49/por_8.md`](./content/aulas-49/por_8.md) | 25 | Língua Portuguesa (10 Questões • Peso 2 (20 pts)) | **25. Identificação, definição, classificação, flexão e emprego das classes de palavras; formação de palavras** | 4 | 14 | 11 | #95, #96, #97 |
| [`./content/aulas-49/por_9.md`](./content/aulas-49/por_9.md) | 26 | Língua Portuguesa (10 Questões • Peso 2 (20 pts)) | **26. Verbos: flexão, conjugação, vozes, correlação entre tempos e modos verbais** | 3 | 12 | 8 | #95, #96, #97, #108 |
| [`./content/aulas-49/por_10.md`](./content/aulas-49/por_10.md) | 27 | Língua Portuguesa (10 Questões • Peso 2 (20 pts)) | **27. Concordância verbal e nominal** | 4 | 11 | 10 | #95, #96, #97, #110, #111, #112 |
| [`./content/aulas-49/por_11.md`](./content/aulas-49/por_11.md) | 28 | Língua Portuguesa (10 Questões • Peso 2 (20 pts)) | **28. Regência verbal e nominal** | 4 | 11 | 10 | #95, #96, #97 |
| [`./content/aulas-49/por_12.md`](./content/aulas-49/por_12.md) | 29 | Língua Portuguesa (10 Questões • Peso 2 (20 pts)) | **29. Crase** | 3 | 11 | 8 | #95, #96, #97, #107, #108 |
| [`./content/aulas-49/por_13.md`](./content/aulas-49/por_13.md) | 30 | Língua Portuguesa (10 Questões • Peso 2 (20 pts)) | **30. Colocação pronominal** | 4 | 12 | 11 | #95, #96, #97, #110, #112 |
| [`./content/aulas-49/por_14.md`](./content/aulas-49/por_14.md) | 31 | Língua Portuguesa (10 Questões • Peso 2 (20 pts)) | **31. Estrutura da oração e do período: aspectos sintáticos e semânticos** | 4 | 11 | 10 | #95, #96, #97, #110, #112 |
| [`./content/aulas-49/por_15.md`](./content/aulas-49/por_15.md) | 32 | Língua Portuguesa (10 Questões • Peso 2 (20 pts)) | **32. Acentuação gráfica** | 3 | 8 | 7 | #95, #96, #97, #106 |
| [`./content/aulas-49/por_16.md`](./content/aulas-49/por_16.md) | 33 | Língua Portuguesa (10 Questões • Peso 2 (20 pts)) | **33. Ortografia** | 3 | 11 | 8 | #95, #96, #97, #106, #109 |
| [`./content/aulas-49/por_17.md`](./content/aulas-49/por_17.md) | 34 | Língua Portuguesa (10 Questões • Peso 2 (20 pts)) | **34. Pontuação** | 3 | 11 | 9 | #95, #96, #97, #112, #113, #114, #115, #116 |
| [`./content/aulas-49/por_18.md`](./content/aulas-49/por_18.md) | 35 | Língua Portuguesa (10 Questões • Peso 2 (20 pts)) | **35. Variação linguística** | 3 | 14 | 11 | #95, #96, #97, #119, #120, #121 |
| [`./content/aulas-49/rlm_1.md`](./content/aulas-49/rlm_1.md) | 36 | Raciocínio Lógico (10 Questões • Peso 2 (20 pts)) | **36. Conjuntos numéricos: naturais, inteiros, racionais e reais. Operações de adição, subtração, multiplicação, divisão, potenciação e radiciação; números decimais; valor absoluto; propriedades no conjunto dos números naturais; decomposição de um número natural em fatores primos; múltiplos e divisores; máximo divisor comum e mínimo múltiplo comum** | 4 | 20 | 19 | #96 |
| [`./content/aulas-49/rlm_2.md`](./content/aulas-49/rlm_2.md) | 37 | Raciocínio Lógico (10 Questões • Peso 2 (20 pts)) | **37. Razões e proporções: grandezas direta e inversamente proporcionais; regra de três simples e composta. Porcentagem** | 6 | 18 | 17 | #96 |
| [`./content/aulas-49/rlm_3.md`](./content/aulas-49/rlm_3.md) | 38 | Raciocínio Lógico (10 Questões • Peso 2 (20 pts)) | **38. Grandezas e medidas: quantidade, tempo, comprimento, capacidade e massa** | 6 | 18 | 20 | #96 |
| [`./content/aulas-49/rlm_4.md`](./content/aulas-49/rlm_4.md) | 39 | Raciocínio Lógico (10 Questões • Peso 2 (20 pts)) | **39. Equações do 1º grau, sistemas de equações do 1º grau e função do 1º grau: resolução de problemas. Média aritmética simples e ponderada** | 5 | 14 | 16 | #96 |
| [`./content/aulas-49/rlm_5.md`](./content/aulas-49/rlm_5.md) | 40 | Raciocínio Lógico (10 Questões • Peso 2 (20 pts)) | **40. Noções de lógica matemática: proposições simples e compostas; conectivos lógicos; tabelas-verdade; negação de proposições; equivalências e implicações lógicas; quantificadores** | 7 | 19 | 21 | #96 |
| [`./content/aulas-49/rlm_6.md`](./content/aulas-49/rlm_6.md) | 41 | Raciocínio Lógico (10 Questões • Peso 2 (20 pts)) | **41. Argumentação lógica: premissas e conclusões; inferências; análise e validade de argumentos. Diagramas lógicos. Linguagem dos conjuntos: notação e representação; elementos e relação de pertinência; igualdade de conjuntos; relação de inclusão e subconjuntos; conjunto unitário, conjunto vazio, conjunto universo e conjunto das partes; conjuntos finitos e infinitos; operações com conjuntos - união, interseção, diferença e complementar. Sequências lógicas com números, letras, palavras e figuras. Problemas de associação lógica e de verdades e mentiras** | 6 | 16 | 19 | #96 |
| [`./content/aulas-49/rlm_7.md`](./content/aulas-49/rlm_7.md) | 42 | Raciocínio Lógico (10 Questões • Peso 2 (20 pts)) | **42. Análise combinatória: princípio fundamental da contagem, arranjos, permutações e combinações** | 5 | 16 | 17 | #96 |
| [`./content/aulas-49/rlm_8.md`](./content/aulas-49/rlm_8.md) | 43 | Raciocínio Lógico (10 Questões • Peso 2 (20 pts)) | **43. Probabilidade: conceitos básicos e cálculo de probabilidades em espaços amostrais finitos. Resolução de problemas envolvendo raciocínio lógico e sequencial** | 5 | 29 | 20 | #96, #122, #123, #124, #125, #126 |
| [`./content/aulas-49/atu_1.md`](./content/aulas-49/atu_1.md) | 44 | Conhecimentos Gerais e Atualidades (5 Questões • Peso 2 (10 pts)) | **44. Cultura Geral: Fatos Políticos econômicos e sociais do Município, do Estado, do Brasil e do mundo ocorridos nos últimos 05 (cinco) anos, divulgados na mídia nacional e internacional** | 4 | 13 | 12 | #70, #71, #72, #73, #74, #75, #86, #91 |
| [`./content/aulas-49/atu_2.md`](./content/aulas-49/atu_2.md) | 45 | Conhecimentos Gerais e Atualidades (5 Questões • Peso 2 (10 pts)) | **45. Humanidades: movimentos artísticos, culturais e sociais do Município, do Estado, do Brasil e do mundo** | 4 | 12 | 13 | #77, #78, #79, #86, #91 |
| [`./content/aulas-49/atu_3.md`](./content/aulas-49/atu_3.md) | 46 | Conhecimentos Gerais e Atualidades (5 Questões • Peso 2 (10 pts)) | **46. Conhecimentos Gerais e Atualidades: aspectos geográficos, históricos, físicos, econômicos, sociais, políticos e estatísticos do Município, do Estado, do Brasil e do mundo** | 5 | 12 | 14 | #70, #75, #80, #86, #91 |
| [`./content/aulas-49/atu_4.md`](./content/aulas-49/atu_4.md) | 47 | Conhecimentos Gerais e Atualidades (5 Questões • Peso 2 (10 pts)) | **47. Noções de cidadania. Símbolos nacionais, estaduais e municipais** | 4 | 15 | 16 | #42, #49, #86, #91, #92 |
| [`./content/aulas-49/atu_5.md`](./content/aulas-49/atu_5.md) | 48 | Conhecimentos Gerais e Atualidades (5 Questões • Peso 2 (10 pts)) | **48. Atualidades nos assuntos relacionados com economia, ecologia, história, política, meio ambiente, justiça, segurança pública, saúde, cultura, educação, religião, qualidade de vida, esportes, turismo, georreferenciamento, inovações tecnológicas e científicas do Município, do Estado, do Brasil e do mundo** | 4 | 13 | 13 | #76, #81, #82, #83, #84, #85, #86, #91 |
| [`./content/aulas-49/atu_6.md`](./content/aulas-49/atu_6.md) | 49 | Conhecimentos Gerais e Atualidades (5 Questões • Peso 2 (10 pts)) | **49. Questões da realidade, econômica, cultural, história, geográfica e socioambiental do Município, do Estado, do Brasil e do mundo** | 4 | 16 | 14 | #70, #75, #76, #80, #86, #91 |

---

## 3. Padrão de Metadados (YAML Frontmatter) e Sincronização com `data/app_data.json`

Cada arquivo `.md` em `./content/aulas-49/` segue estritamente a estrutura abaixo para permitir tanto a **leitura humana limpa** (no GitHub, Obsidian, Notion ou VS Code) quanto a **injeção automatizada** dentro de `./data/app_data.json`:

```yaml
---
id: "esp_1"
num: 1
cat: "esp" # esp | leg | por | rlm | atu
catName: "Conhecimentos Específicos ACE"
weight: "15 Questões • Peso 2 (30 pts)"
title: "1. Constituição da República Federativa do Brasil (com as Emendas Constitucionais): Art. 196 a 200"
editalRef: "1 - Constituição da República Federativa do Brasil (com as Emendas Constitucionais): Art. 196 a 200."
auditBadge: "AULA INTEGRAL NÍVEL LIVRO DIDÁTICO (ESTRUTURA EM 4 ETAPAS)"
sources: [56, 62, 86, 91, 98, 99]
blocksCount: 4
questionsCount: 14
flashcardsCount: 11
normativeAudit:
  - diploma: "CF/1988 — Arts. 196 a 200"
    status: "VIGENTE — Atualizada até EC nº 132/2023"
    observacao: "Inclui EC 51/2006 e EC 120/2022."
---
```

### Como Expandir e Sincronizar Conteúdos no `data/app_data.json`

1. **Para editar uma aula existente:** Abra o arquivo correspondente em `./content/aulas-49/<codigo>.md` (por exemplo, `./content/aulas-49/esp_7.md` ou `./content/aulas-49/leg_3.md`), edite o texto nos blocos `<!-- @modoA_start --> ... <!-- @modoA_end -->`, `<!-- @modoB_start --> ... <!-- @modoB_end -->` ou no bloco JSON de cada seção.
2. **Para criar uma nova aula ou módulo extra:** Copie `./content/_TEMPLATE_NOVA_AULA.md` para `./content/aulas-49/<novo_codigo>.md` e preencha os blocos Modo A, Modo B e Modo C.
3. **Para sincronizar automaticamente com `./data/app_data.json`:** Execute na raiz do projeto:

```bash
npm run sync:data
# ou diretamente:
node --import tsx scripts/sync_all_data.ts
```
