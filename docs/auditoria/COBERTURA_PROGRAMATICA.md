# Cobertura Programática e Rastreabilidade do Edital nº 25/2026 (ACE SEMUSA Porto Velho/RO)

Data de atualização: 31/10/2026.

## 1. Estrutura Curricular das 49 Aulas por Disciplina

A plataforma organiza integralmente os **49 tópicos numerados** do Anexo IV do Edital nº 25/2026 — SEMUSA Porto Velho/RO para o cargo de **Agente de Combate às Endemias (ACE)**:

| Disciplina | Código | Aulas | Blocos | Questões | Flashcards |
| --- | --- | ---: | ---: | ---: | ---: |
| Conhecimentos Específicos | `esp_1` a `esp_10` | 10 | 64 | 150 | 184 |
| Legislação | `leg_1` a `leg_7` | 7 | 42 | 94 | 112 |
| Língua Portuguesa | `por_1` a `por_18` | 18 | 61 | 212 | 178 |
| Raciocínio Lógico | `rlm_1` a `rlm_8` | 8 | 41 | 116 | 112 |
| Conhecimentos Gerais e Atualidades | `atu_1` a `atu_6` | 6 | 28 | 60 | 74 |
| **Total na Plataforma** | **49 aulas** | **49** | **236** | **632** | **660** |

*(Observação: além dos blocos base, cada uma das 49 aulas recebe em tempo de normalização seu bloco suplementar de aprofundamento em `src/data/deepening/*.ts`, totalizando 98 questões suplementares adicionais na interface de estudo).*

---

## 2. Síntese de Cobertura e Intervenções por Eixo

### 2.1. Conhecimentos Específicos (`esp_1` a `esp_10`)
- **`esp_1`**: Arts. 196 a 200 da CF/88 atualizados até a **EC nº 140/2026** (inciso IV, §§ 4º-A, 4º-B e § 10 do Art. 198).
- **`esp_2`**: Lei nº 8.080/1990, Lei nº 8.142/1990 e síntese articulada da Portaria GM/MS nº 2.436/2017 (`Bloco 2.6`) com remissão ao texto integral em `esp_5`.
- **`esp_3`**: Lei nº 11.350/2006, Lei nº 13.595/2018 (Lei Ruth Brilhante), Lei nº 13.708/2018 (escalonamento do piso) e revogação dos §§ 30h+10h pela Lei nº 14.792/2024.
- **`esp_4`**: Princípios e diretrizes do SUS, matriz comparativa entre Atribuições Comuns (Art. 15) e Competências Específicas (Arts. 16 a 19 da Lei 8.080/1990), níveis de prevenção de Leavell & Clark e prevenção quaternária.
- **`esp_5`**: Texto integral original da Portaria GM/MS nº 2.436, de 21/09/2017 (PNAB — 649 parágrafos auditados) e análise pedagógica de equipes, territorialização e atribuições.
- **`esp_6`**: História das endemias no Brasil (Oswaldo Cruz, Carlos Chagas, DNERu, SUCAM, FUNASA, descentralização de 1999, EC 51/2006, Lei 11.350/2006, Lei 13.595/2018, EC 120/2022 e Lei 14.792/2024).
- **`esp_7`**: Quadro comparativo entre as 8 atribuições municipais do ACE (Anexo II retificado do Edital nº 25/2026) e as atribuições típicas (Art. 4º), assistidas (§ 1º) e integradas (§ 2º) da Lei nº 11.350/2006.
- **`esp_8`**: Vigilância Epidemiológica, Sanitária, Ambiental e em Saúde do Trabalhador; indicadores de morbimortalidade e sistemas de informação (SINAN, SIM, SINASC, SI-PNI, SIVEP-Malária).
- **`esp_9`**: As 14 doenças exigidas no Item 9 (Raiva, Esquistossomose, Doença de Chagas, Dengue, Febre Amarela, Febre Maculosa, Influenza, Chikungunya, Zika Vírus, Leptospirose, Leishmaniose Tegumentar e Visceral, Malária e COVID-19).
- **`esp_10`**: Os 6 eixos da cadeia epidemiológica (agente etiológico, reservatório, hospedeiro, modo de transmissão, sintomas e medidas de controle).

### 2.2. Legislação (`leg_1` a `leg_7`)
- **`leg_1` a `leg_3`**: Lei Orgânica de Porto Velho, LC Municipal nº 385/2010 (RJU) e LCs Municipais nº 390/2010 e 391/2010 (PCCR da Saúde) confrontadas com os textos normativos do SAPL/CMPV.
- **`leg_4`**: Lei Federal nº 13.146/2015 (Estatuto da Pessoa com Deficiência / LBI).
- **`leg_5`**: CF/88 — Princípios Fundamentais (Arts. 1º a 4º), Direitos e Garantias Fundamentais (Arts. 5º a 13), Municípios (Arts. 29 a 31) e Administração Pública (Arts. 37 a 39).
- **`leg_6`**: Lei Federal nº 14.133/2021 (Nova Lei de Licitações e Contratos Administrativos).
- **`leg_7`**: Acesso à Informação nas três esferas: Lei Federal nº 12.527/2011, Decreto Estadual RO nº 17.145/2012, Lei Estadual RO nº 3.166/2013 (atualizada pela Lei RO nº 6.385/2026) e Decreto Municipal PVH nº 14.565/2017.

### 2.3. Língua Portuguesa (`por_1` a `por_18`)
- Todas as 18 aulas foram auditadas individualmente (`docs/auditoria/AUDITORIA_POR_3.md` a `AUDITORIA_POR_17.md`, `LOTE_LEITURA.md` e `LOTE_VARIACAO.md`), com correção de imprecisões conceituais, remoção de cabeçalhos legados, adição de seções de aprofundamento e inclusão de **23 novas questões autorais progressivas** em `por_3..17` (além das questões já adicionadas em `por_1, 2, 18`).

### 2.4. Raciocínio Lógico-Matemático (`rlm_1` a `rlm_8`)
- Todas as 8 aulas possuem renderização matemática validada via KaTeX/MathML (`src/utils/math.test.ts`), memória de cálculo individual conferida para cada questão principal em `docs/REVISAO_QUESTOES_RLM.md` (`90` questões principais conferidas + suplementos) e testes de verificação combinatória/probabilística em `src/utils/probabilityReview.test.ts`.

### 2.5. Conhecimentos Gerais e Atualidades (`atu_1` a `atu_6`)
- Cobertura articulada dos 6 itens do edital nas escalas Municipal (Porto Velho), Estadual (Rondônia), Nacional (Brasil) e Mundial, com distinção explícita entre as 12 regiões/localidades de lotação do Anexo I do edital e os distritos administrativos do município, mais síntese de pautas institucionais da Prefeitura de Porto Velho e da SEMUSA em `atu_6`.
