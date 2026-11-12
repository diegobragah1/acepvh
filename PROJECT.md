# Project: ACE SEMUSA Porto Velho 2026 - Aprofundamento Pedagógico e Atualização

## Architecture
- **Dual-Layer Architecture:**
  - Base Canônica (`data/app_data.json`): 49 aulas, 187 blocos base, 534 questões base, 578 flashcards base, 126 fontes cadastradas.
  - Camada de Aprofundamento (`src/data/deepening/`): 49 entradas modulares (`especificos.ts`, `legislacao.ts`, `portugues.ts`, `matematica.ts`, `gerais.ts`), adicionando teoria autoral densa, resumos esquemáticos, novas questões comentadas (Padrão IBGP de 4 alternativas A–D) e flashcards.
  - Integração em Runtime (`src/utils/normalizeData.ts` via `withDeepening()`): Anexa os blocos de aprofundamento estritamente ao final das aulas (`blocks = [...lesson.blocks, deepeningBlock(entry)]`), garantindo 100% de estabilidade posicional para os identificadores de questões pré-existentes (`${activeLesson.id}_b${bIdx}_q${qIdx}` via `questionIdentity.ts`).
  - Pipeline de Sincronização e Build (`npm run sync:data` -> `npm run check` -> `npm run build` -> `npm run test:e2e`): Gera arquivos modulares com hash SHA-256 (`data/lessons/*.json`, `public/data/*`, `data/manifest.json`), compila Markdown das 49 aulas (`content/aulas-49/*.md`, `content/aprofundamento/*.md`), extrai classes dinâmicas para `src/data/datasetClasses.ts` e valida publicação em resoluções Desktop (1280x800) e Mobile (320x640).

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | Divisão Curricular em 49 Tópicos | Alinhamento 1:1 rigoroso dos 49 itens do Anexo IV do Edital nº 25/2026 (SEMUSA/IBGP) com as 49 aulas | M1, M2, M3, M4 | survey (spec_miner) |
| 2 | Atualização Constitucional EC 140/2026 | Art. 198 CF/88: atuação obrigatória, vedação à terceirização, cargo efetivo e aposentadoria especial do ACE | M1 | survey (spec_miner, sources) |
| 3 | Legislações Federais do SUS e PNAB | Leis 8.080/90, 8.142/90 e didatização pedagógica da PNAB 2017 (Portaria 2.436/2017) | M1 | survey (spec_miner, sources) |
| 4 | Carreira Federal do ACE e Piso Salarial | Lei 11.350/2006 atualizada (Leis 13.595, 13.708, 14.536, 14.792, 14.799), piso 2 SM, insalubridade, 40h integrais | M1 | survey (spec_miner, sources) |
| 5 | História do ACE e Vigilância em Saúde | Trajetória da SUCAM/FUNASA à atenção primária; PNVS (Res. 588), SINAN, SIM, SINASC, SIVEP, indicadores | M1 | survey (spec_miner, sources) |
| 6 | 14 Doenças do Edital e Protocolos de Campo | Raiva, Esquistossomose, Chagas, Dengue, FA, Febre Maculosa, Influenza, Chikungunya, Zika, Lepto, LTA, LV, Malária, COVID-19 | M1 | survey (spec_miner, sources) |
| 7 | Animais Peçonhentos e Roedores Amazônicos | Ofidismo (*Bothrops atrox*, *Lachesis muta*), escorpião preto (*Tityus obscurus*), roedores sinantrópicos vs silvestres, LIRAa | M1 | survey (spec_miner, sources) |
| 8 | Legislação Municipal de Porto Velho | Lei Orgânica Municipal confrontada no SAPL, competências, saúde e saneamento | M2 | survey (spec_miner, sources) |
| 9 | RJU dos Servidores Municipais de PVH | LC 385/2010: provimento, posse (30+30d), exercício (15d), estabilidade, regime disciplinar e PAD | M2 | survey (spec_miner, sources) |
| 10 | Planos de Carreira e Salários de PVH | Distinção entre PCCR Saúde (LC 390/2010) e Quadro Geral (LC 391/2010 alt. 449/12 e 1.018/25) | M2 | survey (spec_miner, sources) |
| 11 | Estatuto da Pessoa com Deficiência | Lei 13.146/2015: modelo biopsicossocial, 6 barreiras, direitos no SUS, leis 14.126/21 e 14.768/23 | M2 | survey (spec_miner, sources) |
| 12 | Direito Constitucional e Adm. Pública | CF/88 Título I, Direitos Individuais e Coletivos (Art. 5º), Municípios (29-31) e Adm. Pública (37-39) | M2 | survey (spec_miner, sources) |
| 13 | Nova Lei de Licitações e Pregão | Lei 14.133/2021: modalidades, extinção de Convite/TP, pregão obrigatório, dispensa emergencial na saúde | M2 | survey (spec_miner, sources) |
| 14 | Lei de Acesso à Informação nas 3 Esferas | LAI Federal (12.527), Estadual RO (Lei 3.166/13 alt. 6.385/26) e Municipal PVH (Decreto 14.565/17) | M2 | survey (spec_miner, sources) |
| 15 | Português: Aprofundamento das 6 Aulas Curtas | Ampliação de teoria e questões comentadas em `por_2`, `por_4`, `por_5`, `por_9`, `por_12`, `por_15` | M3 | survey (spec_miner) |
| 16 | Português: Saneamento das 4 Subcompetências | Artigo/numeral/interjeição (`por_8`), concordância especial (`por_10`), predicados/coordenação (`por_14`), pontuação (`por_17`) | M3 | survey (spec_miner) |
| 17 | Português: Morfossintaxe, Regência e Crase | Verbos irregulares, correlação verbal, regência dos 15 verbos clássicos, mapa completo de crase | M3 | survey (spec_miner) |
| 18 | RLM: Cálculos Aplicados e Cubagem | Frações, proporções, cubagem de tanques/reservatórios, dosagem de larvicidas em ppm/gramas | M4 | survey (spec_miner, tech) |
| 19 | RLM: Lógica, Análise Combinatória e Probabilidade | Proposições, De Morgan/MANÉ, diagramas de Venn, arranjos/combinações, probabilidade estilo IBGP | M4 | survey (spec_miner) |
| 20 | Atualidades: Geografia, História e Distritos de PVH | Cheias/secas do Madeira, Censo 2022, UHE Santo Antônio e Jirau, caracterização dos 15 distritos rurais/ribeirinhos | M4 | survey (spec_miner) |
| 21 | Atualidades: Georreferenciamento e Inovação | SIG, GPS, SIRGAS 2000, Reconhecimento Geográfico, método Wolbachia e vacina Qdenga no trabalho do ACE | M4 | survey (spec_miner) |
| 22 | Inventário Estruturado das 126 Fontes Internas | Catálogo completo dos 6 campos obrigatórios e regularização de fontes em `sources/fontes.md` e metadados | M5 | survey (sources) |
| 23 | Sincronização, Integridade de IDs e Build E2E | Execução de `sync:data`, preservação dos IDs de questões (`questionIdentity.ts`), checks limpos e build final | M5 | survey (tech) |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| M1 | Específicos & SUS Central | 10 aulas (`esp_1` a `esp_10`): CF Saúde com EC 140/2026, Leis 8.080/8.142, Lei 11.350/2006 atualizada (Lei Ruth Brilhante), PNAB didatizada, 14 endemias, animais peçonhentos amazônicos (*Bothrops*, *Lachesis*, *Tityus obscurus*), roedores e LIRAa. Arquivo: `src/data/deepening/especificos.ts`. | Survey concluído | DONE |
| M2 | Legislação Municipal e Aplicada | 7 aulas (`leg_1` a `leg_7`): LOM PVH, LC 385/2010, LC 390 vs 391, Estatuto PcD, CF 1-13/29-31/37-39, Lei 14.133/2021, LAI nas 3 esferas. Arquivo: `src/data/deepening/legislacao.ts`. | Survey concluído | DONE |
| M3 | Língua Portuguesa | 18 aulas (`por_1` a `por_18`): Aprofundamento das 6 aulas curtas, saneamento das 4 subcompetências superficiais, teoria gramatical completa, questões comentadas IBGP e flashcards. Arquivo: `src/data/deepening/portugues.ts`. | Survey concluído | DONE |
| M4 | RLM & Atualidades de Porto Velho | 14 aulas (`rlm_1` a `rlm_8` e `atu_1` a `atu_6`): RLM aplicado e cubagem; fatos recentes, hidrelétricas, 15 distritos rurais e ribeirinhos de PVH, SIG e inovação no combate a endemias. Arquivos: `src/data/deepening/matematica.ts` e `src/data/deepening/gerais.ts`. | Survey concluído | DONE |
| M5 | Sincronização, Validação e E2E Smoke | Execução de `npm run sync:data`, regeneração de `data/lessons/*.json`, `content/aulas-49/*.md`, `content/aprofundamento/*.md`, `public/data/*`, `src/data/datasetClasses.ts`, `npm run check` (0 erros), `npm run build` (código 0) e E2E smoke Desktop e Mobile aprovados com 96/96 testes. | M1, M2, M3, M4, TEST_READY.md | DONE |

## Interface Contracts
### Contrato da Camada de Aprofundamento (`src/data/deepening/`)
Cada arquivo de aprofundamento (`especificos.ts`, `legislacao.ts`, `portugues.ts`, `matematica.ts`, `gerais.ts`) exporta um array de objetos tipados por `DeepeningEntry`:
- `id`: string exata da aula (ex: `'esp_1'`, `'leg_2'`, `'por_8'`, `'rlm_3'`, `'atu_6'`).
- `title`: string com título descritivo do conteúdo.
- `theory`: string Markdown densa, estruturada em seções pedagógicas, conceitos, regras, exceções e contexto prático do ACE.
- `summary`: string Markdown com resumo esquemático, tabelas comparativas, mnemônicos e alertas de pegadinhas da banca IBGP.
- `questions`: Array de questões autorais:
  - `q`: Enunciado detalhado e claro, sem duplicações globais.
  - `options`: Exatamente 4 alternativas `[A, B, C, D]`. PROIBIDA quinta alternativa ("letra E").
  - `ans`: Inteiro de 0 a 3 (`0` para A, `1` para B, `2` para C, `3` para D).
  - `difficulty`: `'Fácil'` | `'Intermediário'` | `'Difícil'`.
  - `questionType`: string (ex: `'Caso Prático ACE'`, `'Legislação Literal'`).
  - `comment`: Gabarito comentado detalhado com justificativa da correta e refutação das incorretas.
- `flashcards`: Array de pares `[frente, verso]`, sem frentes duplicadas no banco.
- `references`: Array de objetos `{ title: string, url: string, section: string }`, separando nitidamente fontes internas e externas, com links válidos para portais oficiais.

### Contrato de Estabilidade de Questões (`questionIdentity.ts`)
- A camada de aprofundamento é integrada via `withDeepening()` que adiciona um único bloco novo ao final do array `blocks` de cada aula.
- Os blocos e questões existentes em `data/app_data.json` JAMAIS devem ser reordenados, excluídos ou deslocados.
- Novas questões do aprofundamento residem no bloco final, preservando 100% das chaves `${lesson.id}_b${bIdx}_q${qIdx}` das 534 questões base pré-existentes.

## Code Layout
- `src/data/deepening/`:
  - `especificos.ts` -> Exclusivo do Milestone M1
  - `legislacao.ts` -> Exclusivo do Milestone M2
  - `portugues.ts` -> Exclusivo do Milestone M3
  - `matematica.ts` e `gerais.ts` -> Exclusivos do Milestone M4
  - `index.ts` -> Exporta `DEEPENING_ENTRIES` unificado
- `data/app_data.json`: Base canônica global (apenas atualizada se necessário com sync atômico)
- `content/aulas-49/`: Arquivos Markdown sincronizados automaticamente por `npm run sync:data`
- `content/aprofundamento/`: Arquivos Markdown de aprofundamento exportados automaticamente por `npm run sync:data`
- `data/lessons/`: 49 arquivos JSON modulares gerados por `npm run sync:data`
- `tests/e2e/`: Casos e runners de testes E2E opacos baseados em requisitos (Track E2E)
