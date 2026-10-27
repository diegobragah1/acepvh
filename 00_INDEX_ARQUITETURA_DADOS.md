---
id: "00_INDEX_ARQUITETURA_DADOS"
project: "Plataforma ACE SEMUSA Porto Velho/RO 2026"
edital: "Edital nº 25/2026 + Retificação nº 01 (Edital nº 28/2026 — Banca IBGP)"
examDate: "2026-12-13T14:45:00-04:00"
totalLessons: 32
totalSources: 94
totalQuestions: 207
totalFlashcards: 246
totalEndemics: 14
totalCargos: 16
---

# Engenharia de Conteúdo em Markdown (`.md`) — Projeto ACE SEMUSA Porto Velho 2026

Este repositório documental contém a **transformação integral em Markdown limpo, estruturado e semanticamente auditado (`.md`)** de toda a base técnica, normativa e programática do concurso para **Agente de Combate às Endemias (ACE — Códigos 340 a 356)** da **Secretaria Municipal de Saúde de Porto Velho/RO (SEMUSA — Edital nº 25/2026 + Retificação nº 01 / Edital nº 28/2026 — Banca IBGP)**.

---

## 1. Estrutura de Diretórios e Arquivos (`.md` + Pipeline JSON)

| Caminho Relativo | Categoria | Conteúdo e Finalidade Técnica |
| :--- | :--- | :--- |
| `./00_INDEX_ARQUITETURA_DADOS.md` | **Índice Mestre & Schema** | Documentação da engenharia de conteúdo, catálogo dos 32 módulos (`.md`), especificação do YAML Frontmatter e instruções de injeção contínua em `./data/app_data.json`. |
| `./content/esp_1.md` a `./content/esp_10.md` | **Conhecimentos Específicos ACE (10 Aulas)** | 15 questões na prova (Peso 2,0 = 30,0 pts). CF/88 (Arts. 194–200), PNPS, Leis 8.080/90 e 8.142/90, Decreto 7.508/11, PNAB 2017, Lei 11.350/06 (com Leis 13.595/18, 13.708/18, 14.536/23 e EC 120/22), Vigilância em Saúde, LIRAa, as 14 Endemias do Anexo IV e Cálculos Operacionais de Campo (Cubagem/Dosagem/EPIs/RG). |
| `./content/leg_1.md` a `./content/leg_7.md` | **Legislação (7 Aulas)** | 10 questões na prova (Peso 2,0 = 20,0 pts). LOM Porto Velho, Estatuto LC 385/2010, Planos de Carreira LC 390 e 391/2010, CF/88 (Arts. 1º a 17, 29 a 31 e 37 a 41), Nova Lei de Licitações (Lei 14.133/2021), LAI (Federal 12.527/11, Estadual-RO 3.166/13 e Municipal) e Estatuto PcD (Lei 13.146/15). |
| `./content/por_1.md` a `./content/por_6.md` | **Língua Portuguesa (6 Aulas)** | 10 questões na prova (Peso 2,0 = 20,0 pts). Compreensão/interpretação, tipologia, variação linguística, ortografia, acentuação, semântica, figuras, coesão/coerência, conjunções, morfologia, sintaxe, concordância, regência, crase e pontuação. |
| `./content/rlm_1.md` a `./content/rlm_6.md` | **Raciocínio Lógico (6 Aulas)** | 10 questões na prova (Peso 2,0 = 20,0 pts). Lógica proposicional, tabelas-verdade, De Morgan, equivalências, diagramas, conjuntos (2^n), sistemas lineares, função do 1º grau, médias, razão/proporção, porcentagem, PA/PG, análise combinatória, probabilidade e geometria plana/espacial. |
| `./content/atu_1.md` a `./content/atu_3.md` | **Conhecimentos Gerais e Atualidades (3 Aulas)** | 5 questões na prova (Peso 2,0 = 10,0 pts). Geografia, demografia (Censo IBGE 2022/2025) e 15 distritos de Porto Velho/RO, História de Rondônia (EFMM, Guaporé, LC 41/81) e Georreferenciamento (SIG/GIS, GPS, Sensoriamento Remoto, PRODES/DETER). |
| `./content/catalogo_94_fontes_edital.md` | **Auditoria Documental Completa** | Inventário analítico das 85 apostilas em PDF das 7 subpastas do Google Drive + 9 documentos oficiais (IBGP/SAPL/ALE-RO), quadro das 140 vagas (Códigos 340 a 356) e matriz de correspondência de 7 colunas. |
| `./content/fichas_14_endemias_liraa_roedores.md` | **Fichas Técnicas de Campo** | As 14 fichas técnicas completas das doenças do Anexo IV em tabelas Markdown, os 7 grupos de depósitos do LIRAa (A1 a E), fórmulas de IIP e IB e tabela comparativa dos 3 roedores sinantrópicos. |
| `./content/_TEMPLATE_NOVA_AULA.md` | **Template de Expansão** | Modelo padronizado com YAML Frontmatter, seções para Modos A, B e C, tabelas Markdown e bloco JSON pronto para criação de novas aulas (`esp_10.md`, `sim_extra_1.md`, etc.). |
| `./scripts/md_to_app_data.py` | **Compilador / Injetor Automático** | Script em Python que lê qualquer arquivo `.md` da pasta `./content/`, converte automaticamente o Markdown para o formato da SPA e injeta/atualiza `./data/app_data.json`. |

---

## 2. Catálogo Geral das 32 Aulas Convertidas em Markdown (`.md`)

| Cód. Arquivo | Nº | Disciplina (Peso na Prova) | Título da Aula | Blocos | Questões (Modo C) | Flashcards | Fontes (PDFs/Docs) |
| :--- | :---: | :--- | :--- | :---: | :---: | :---: | :--- |
| [`./content/esp_1.md`](./content/esp_1.md) | 01 | Conhecimentos Específicos (Saúde Coletiva & ACE) (15 Questões • Peso 2 (30 pts)) | **1. Constituição Federal (Arts. 194 a 200), Evolução Histórica das Políticas de Saúde, Modelos de Atenção e Promoção da Saúde (PNPS)** | 5 | 16 | 15 | #55, #56, #60, #62, #86, #90, #91 |
| [`./content/esp_2.md`](./content/esp_2.md) | 02 | Conhecimentos Específicos (Saúde Coletiva & ACE) (15 Questões • Peso 2 (30 pts)) | **2. Lei Orgânica da Saúde I — Lei nº 8.080/1990 (Disposições Gerais, Objetivos, Princípios, Competências e Subsistema Indígena)** | 3 | 8 | 9 | #57, #63, #86, #91 |
| [`./content/esp_3.md`](./content/esp_3.md) | 03 | Conhecimentos Específicos (Saúde Coletiva & ACE) (15 Questões • Peso 2 (30 pts)) | **3. Lei nº 8.080/1990 (Assistência, Financiamento, Planejamento) e Lei nº 8.142/1990 (Controle Social e Transferências)** | 3 | 7 | 8 | #57, #58, #63, #64, #86, #91 |
| [`./content/esp_4.md`](./content/esp_4.md) | 04 | Conhecimentos Específicos (Saúde Coletiva & ACE) (15 Questões • Peso 2 (30 pts)) | **4. Decreto nº 7.508/2011, Redes de Atenção à Saúde (RAS), PNAB (Portaria 2.436/2017) e PNH (HumanizaSUS)** | 3 | 7 | 8 | #59, #60, #65, #86, #91 |
| [`./content/esp_5.md`](./content/esp_5.md) | 05 | Conhecimentos Específicos (Saúde Coletiva & ACE) (15 Questões • Peso 2 (30 pts)) | **5. Legislação Específica do ACE: Lei Federal nº 11.350/2006 (Leis 13.595/2018 e 14.536/2023) vs. Anexo II do Edital SEMUSA** | 3 | 6 | 8 | #61, #86, #87, #88, #89, #91 |
| [`./content/esp_6.md`](./content/esp_6.md) | 06 | Conhecimentos Específicos (Saúde Coletiva & ACE) (15 Questões • Peso 2 (30 pts)) | **6. Vigilância em Saúde (Epidemiológica, Sanitária, Ambiental e Trabalhador), Indicadores e Sistemas de Informação (SINAN, SIM, SINASC, e-SUS)** | 3 | 7 | 8 | #60, #68, #69, #86, #91 |
| [`./content/esp_7.md`](./content/esp_7.md) | 07 | Conhecimentos Específicos (Saúde Coletiva & ACE) (15 Questões • Peso 2 (30 pts)) | **7. Arboviroses (Dengue, Zika, Chikungunya, Febre Amarela) e Operacionalização de Campo do ACE (Imóveis, Depósitos A1-E, LIRAa, IIP, IB e Controle Vetorial)** | 3 | 7 | 7 | #66, #67, #68, #69, #86, #91 |
| [`./content/esp_8.md`](./content/esp_8.md) | 08 | Conhecimentos Específicos (Saúde Coletiva & ACE) (15 Questões • Peso 2 (30 pts)) | **8. Endemias Prioritárias na Amazônia I: Malária, Doença de Chagas (Oral/PITs) e Leishmanioses (LTA e LV)** | 3 | 6 | 8 | #66, #68, #69, #86, #91 |
| [`./content/esp_9.md`](./content/esp_9.md) | 09 | Conhecimentos Específicos (Saúde Coletiva & ACE) (15 Questões • Peso 2 (30 pts)) | **9. Endemias e Zoonoses II: Esquistossomose, Raiva, Leptospirose (3 Roedores Sinantrópicos e Antirratização), Animais Peçonhentos e Síndromes Gripais (Influenza/COVID-19)** | 4 | 8 | 10 | #66, #67, #68, #69, #86, #91 |
| [`./content/leg_1.md`](./content/leg_1.md) | 10 | Legislação Municipal, Constitucional e Administrativa (10 Questões • Peso 2 (20 pts)) | **10. Lei Orgânica do Município de Porto Velho (Estrutura, Competências, Processo Legislativo, Servidores e Saúde/Saneamento)** | 3 | 6 | 8 | #49, #86, #91, #92 |
| [`./content/leg_2.md`](./content/leg_2.md) | 11 | Legislação Municipal, Constitucional e Administrativa (10 Questões • Peso 2 (20 pts)) | **11. Estatuto dos Servidores Públicos do Município de Porto Velho — Lei Complementar Municipal nº 385/2010 Completa** | 3 | 6 | 8 | #50, #86, #91, #93 |
| [`./content/leg_3.md`](./content/leg_3.md) | 12 | Legislação Municipal, Constitucional e Administrativa (10 Questões • Peso 2 (20 pts)) | **12. Planos de Carreira e Remuneração dos Servidores da SEMUSA e ACE (LCs Municipais nº 390/2010, 391/2010, 447/2012, 449/2012 e 1.018/2025)** | 2 | 5 | 6 | #50, #86, #87, #88, #89, #91 |
| [`./content/leg_4.md`](./content/leg_4.md) | 13 | Legislação Municipal, Constitucional e Administrativa (10 Questões • Peso 2 (20 pts)) | **13. Direito Constitucional I: Princípios Fundamentais (Arts. 1º a 4º) e Direitos e Garantias Fundamentais (Arts. 5º a 11 da CF/1988)** | 3 | 6 | 8 | #42, #43, #44, #45, #46, #47, #48, #86, #91 |
| [`./content/leg_5.md`](./content/leg_5.md) | 14 | Legislação Municipal, Constitucional e Administrativa (10 Questões • Peso 2 (20 pts)) | **14. Direito Constitucional II (Administração Pública Arts. 37 a 41 e Municípios Arts. 29 a 31) e Estatuto da Pessoa com Deficiência (Lei nº 13.146/2015)** | 3 | 7 | 8 | #41, #49, #50, #86, #91 |
| [`./content/leg_6.md`](./content/leg_6.md) | 15 | Legislação Municipal, Constitucional e Administrativa (10 Questões • Peso 2 (20 pts)) | **15. Nova Lei de Licitações e Contratos Administrativos — Lei Federal nº 14.133/2021 (Modalidades, Pregão na Nova Lei e Contratação Direta Arts. 74 e 75)** | 3 | 6 | 8 | #51, #52, #54, #86, #91 |
| [`./content/leg_7.md`](./content/leg_7.md) | 16 | Legislação Municipal, Constitucional e Administrativa (10 Questões • Peso 2 (20 pts)) | **16. Lei de Acesso à Informação (LAI — Lei Federal nº 12.527/2011) e Legislação Estadual (RO) e Municipal (Porto Velho) de Acesso à Informação** | 3 | 6 | 8 | #53, #86, #91, #94 |
| [`./content/por_1.md`](./content/por_1.md) | 17 | Língua Portuguesa (10 Questões • Peso 2 (20 pts)) | **17. Compreensão e Interpretação de Textos, Tipologia Textual e Gêneros Textuais** | 2 | 5 | 6 | #38, #39, #40, #86, #91 |
| [`./content/por_2.md`](./content/por_2.md) | 18 | Língua Portuguesa (10 Questões • Peso 2 (20 pts)) | **18. Ortografia Oficial, Acentuação Gráfica, Emprego do Hífen e Semântica Lexical** | 2 | 5 | 6 | #23, #35, #36, #86, #91 |
| [`./content/por_3.md`](./content/por_3.md) | 19 | Língua Portuguesa (10 Questões • Peso 2 (20 pts)) | **19. Coesão, Coerência, Conjunções, Operadores Argumentativos Escalares, Pressupostos e Subentendidos** | 3 | 6 | 8 | #26, #37, #39, #86, #91 |
| [`./content/por_4.md`](./content/por_4.md) | 20 | Língua Portuguesa (10 Questões • Peso 2 (20 pts)) | **20. Morfologia: Classes de Palavras, Formação de Palavras, Verbos (Tempos, Modos e Vozes) e Colocação Pronominal** | 2 | 5 | 6 | #22, #24, #25, #26, #27, #28, #29, #86, #91 |
| [`./content/por_5.md`](./content/por_5.md) | 21 | Língua Portuguesa (10 Questões • Peso 2 (20 pts)) | **21. Sintaxe I: Análise Sintática, Concordância Verbal e Nominal** | 2 | 5 | 6 | #30, #31, #32, #86, #91 |
| [`./content/por_6.md`](./content/por_6.md) | 22 | Língua Portuguesa (10 Questões • Peso 2 (20 pts)) | **22. Sintaxe II: Regência Verbal e Nominal, Emprego do Sinal Indicativo de Crase e Pontuação** | 2 | 5 | 6 | #33, #34, #86, #91 |
| [`./content/rlm_1.md`](./content/rlm_1.md) | 23 | Raciocínio Lógico-Matemático (10 Questões • Peso 2 (20 pts)) | **23. Lógica Proposicional I: Proposições, Conectivos Lógicos, Tabelas-Verdade, Tautologia, Contradição e Contingência** | 2 | 5 | 6 | #1, #2, #86, #91 |
| [`./content/rlm_2.md`](./content/rlm_2.md) | 24 | Raciocínio Lógico-Matemático (10 Questões • Peso 2 (20 pts)) | **24. Lógica Proposicional II: Negação de Proposições Composto (Leis de De Morgan), Equivalências Lógicas, Quantificadores e Argumentação** | 2 | 5 | 6 | #2, #3, #4, #5, #6, #86, #91 |
| [`./content/rlm_3.md`](./content/rlm_3.md) | 25 | Raciocínio Lógico-Matemático (10 Questões • Peso 2 (20 pts)) | **25. Operações com Conjuntos, Conjuntos Numéricos, Equações, Sistemas Lineares de 1º Grau e Médias (Aritmética Simples e Ponderada)** | 3 | 10 | 12 | #9, #10, #11, #13, #17, #18, #19, #86, #91 |
| [`./content/rlm_4.md`](./content/rlm_4.md) | 26 | Raciocínio Lógico-Matemático (10 Questões • Peso 2 (20 pts)) | **26. Razão, Proporção, Regra de Três (Simples e Composta), Porcentagem e Frações** | 2 | 5 | 6 | #14, #15, #16, #86, #91 |
| [`./content/rlm_5.md`](./content/rlm_5.md) | 27 | Raciocínio Lógico-Matemático (10 Questões • Peso 2 (20 pts)) | **27. Sequências Lógicas, Progressão Aritmética (PA), Progressão Geométrica (PG), Análise Combinatória e Probabilidade** | 2 | 5 | 6 | #8, #20, #21, #86, #91 |
| [`./content/rlm_6.md`](./content/rlm_6.md) | 28 | Raciocínio Lógico-Matemático (10 Questões • Peso 2 (20 pts)) | **28. Geometria Plana e Espacial (Áreas, Perímetros e Volumes), Unidades de Medida e Princípio da Casa dos Pombos** | 2 | 5 | 6 | #7, #12, #86, #91 |
| [`./content/atu_1.md`](./content/atu_1.md) | 29 | Conhecimentos Gerais, História e Geografia de Porto Velho/RO e Atualidades (05 Questões • Peso 2 (10 pts)) | **29. Geografia, Demografia (IBGE Censo 2022/2025), Distritos, Hidrografia (UHEs Santo Antônio e Jirau), ZSEE e Símbolos de Porto Velho e Rondônia** | 3 | 6 | 7 | #73, #74, #75, #86, #88, #91 |
| [`./content/atu_2.md`](./content/atu_2.md) | 30 | Conhecimentos Gerais, História e Geografia de Porto Velho/RO e Atualidades (05 Questões • Peso 2 (10 pts)) | **30. História de Rondônia e de Porto Velho (Ciclos da Borracha, Tratado de Petrópolis, EFMM, Rondon, Território do Guaporé, Estado de RO) e Patrimônio Cultural** | 3 | 6 | 7 | #77, #78, #79, #80, #81, #82, #86, #91 |
| [`./content/atu_3.md`](./content/atu_3.md) | 31 | Conhecimentos Gerais, História e Geografia de Porto Velho/RO e Atualidades (05 Questões • Peso 2 (10 pts)) | **31. Georreferenciamento Aplicado à Saúde e Meio Ambiente (SIG/GIS, GPS, Sensoriamento Remoto, PRODES/DETER) e Atualidades (COP30, Clima no Rio Madeira e Notícias Locais 2025–2026)** | 3 | 6 | 8 | #70, #71, #72, #76, #83, #84, #85, #86, #91 |
| [`./content/esp_10.md`](./content/esp_10.md) | 32 | Conhecimentos Específicos (Saúde Coletiva & ACE) (15 Questões • Peso 2 (30 pts)) | **32. Cálculos Operacionais de Campo do ACE (Cubagem e Dosagem de Larvicidas), Equipamentos de Aspersão (BRI), Biossegurança (EPIs/NR-6), Toxicologia e Reconhecimento Geográfico (RG)** | 3 | 9 | 9 | #12, #66, #68, #69, #86, #89, #91 |

---

## 3. Padrão de Metadados (YAML Frontmatter) e Injeção Direta em `data/app_data.json`

Cada arquivo `.md` segue estritamente a estrutura abaixo para permitir tanto a **leitura humana limpa** (no GitHub, Obsidian, Notion ou VS Code) quanto a **injeção automatizada** dentro de `./data/app_data.json`:

```yaml
---
id: "esp_1"
num: 1
cat: "esp" # esp | leg | por | rlm | atu
catName: "Conhecimentos Específicos (Saúde Coletiva & ACE)"
weight: "15 Questões • Peso 2 (30 pts)"
title: "1. Constituição Federal (Arts. 194 a 200)..."
editalRef: "Anexo IV — Conhecimentos Específicos ACE: Item 1 e Item 8."
auditBadge: "AULA INTEGRAL NÍVEL LIVRO DIDÁTICO (ESTRUTURA EM 4 ETAPAS)"
sources: [55, 56, 60, 62, 86, 90, 91]
blocksCount: 5
questionsCount: 16
flashcardsCount: 15
normativeAudit:
  - diploma: "CF/1988 — Arts. 194 a 200"
    status: "VIGENTE — Atualizada até EC nº 132/2023"
    observacao: "Inclui EC 51/2006 e EC 120/2022."
---
```

### Como Expandir e Injetar Novos Conteúdos no `data/app_data.json`

1. **Para editar uma aula existente:** Abra o arquivo correspondente em `./content/<codigo>.md` (por exemplo, `./content/esp_7.md` ou `./content/leg_3.md`), edite o texto nos blocos `<!-- @modoA_start --> ... <!-- @modoA_end -->`, `<!-- @modoB_start --> ... <!-- @modoB_end -->` ou no bloco JSON de cada seção.
2. **Para criar uma nova aula ou simulado extra:** Copie `./content/_TEMPLATE_NOVA_AULA.md` para `./content/esp_10.md` (ou o código desejado) e preencha os blocos Modo A, Modo B e Modo C.
3. **Para sincronizar automaticamente com `./data/app_data.json`:** Execute na raiz do projeto:

```bash
python3 ./scripts/md_to_app_data.py --content-dir ./content --output-json ./data/app_data.json
```
