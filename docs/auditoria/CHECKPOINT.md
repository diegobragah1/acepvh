# Checkpoint de Execução — Auditoria e Aprofundamento Integral das 49 Aulas

Data: 31/10/2026.

## Status por Lote Temático

- [x] **Etapa 1 — Diagnóstico e Inventário do Repositório**:
  - 49 aulas mapeadas (`esp_1..10`, `leg_1..7`, `por_1..18`, `rlm_1..8`, `atu_1..6`), 236 blocos base (+ 49 blocos suplementares em `src/data/deepening/`), 632 questões base (+ 98 suplementares), 660 flashcards e 126 fontes catalogadas.
- [x] **Etapa 2 — Higienização Editorial Transversal (49 aulas)**:
  - Removidos todos os 17 comentários órfãos de `"Erro da E:"` / `"letra E"` em questões de 4 opções;
  - Substituídos todos os cabeçalhos e referências legadas (`Aula 18` a `Aula 31` e `port_1..6`);
  - Sincronizados todos os `flashcard.lessonTitle` com o título atual da respectiva aula;
  - Padronizados rótulos de questões sem prova oficial autenticada para `(Questão de estudo — ...)`.
- [x] **Lote 1 — Conhecimentos Específicos (`esp_1` a `esp_10`)**:
  - `esp_1`: EC 140/2026 integrada em teoria, resumo, mapa mental e flashcards;
  - `esp_2` e `esp_5`: texto original de 21/09/2017 da Portaria 2.436/2017 (PNAB) em `esp_5` e síntese articulada no `Bloco 2.6` de `esp_2`;
  - `esp_3`, `esp_6`, `esp_7`: correção da revogação dos incisos de 30h+10h pela Lei 14.792/2024 e quadro comparativo entre o Anexo II retificado do Edital nº 25/2026 (8 atribuições municipais) e o Art. 4º da Lei 11.350/2006;
  - `esp_4`: eliminação de duplicação no `Bloco 4.5` e matriz comparativa entre Art. 15 (atribuições comuns) e Arts. 16 a 19 (competências específicas) da Lei 8.080/1990.
- [x] **Lote 2 — Legislação (`leg_1` a `leg_7`)**:
  - `leg_1` a `leg_3`: confronto textual com as versões vigentes do SAPL da Câmara Municipal de Porto Velho (LOM, LC 385/2010, LC 390/2010 e LC 391/2010);
  - `leg_4` a `leg_6`: revisão de LBI (Lei 13.146/2015), Direito Constitucional (CF/88) e Nova Lei de Licitações (Lei 14.133/2021);
  - `leg_7`: inclusão dos textos e questões sobre o Decreto Municipal nº 14.565/2017 (LAI Porto Velho), Lei Estadual RO nº 3.166/2013, Decreto Estadual nº 17.145/2012 e Lei Estadual RO nº 6.385/2026.
- [x] **Lote 3 — Língua Portuguesa (`por_1` a `por_18`)**:
  - Fechamento de todos os achados conceituais e pedagógicos registrados em `AUDITORIA_POR_3.md` a `AUDITORIA_POR_17.md`, `LOTE_LEITURA.md` e `LOTE_VARIACAO.md`, com adição de seções teóricas e **23 novas questões autorais progressivas** em `por_3..17`.
- [x] **Lote 4 — Raciocínio Lógico-Matemático (`rlm_1` a `rlm_8`)**:
  - Correção de todas as fórmulas KaTeX/MathML, eliminação de duplicação no `Bloco 5.6` de `rlm_5`, adição de seções conceituais em `rlm_1..6`, adição de 3 questões autorais em `rlm_1..2`, conferência matemática das 90 questões principais em `docs/REVISAO_QUESTOES_RLM.md` e validação algorítmica em `probabilityReview.test.ts`.
- [x] **Lote 5 — Conhecimentos Gerais e Atualidades (`atu_1` a `atu_6`)**:
  - Uniformização da distinção entre as 12 regiões/localidades de lotação de vagas do Anexo I do edital e a divisão distrital administrativa de Porto Velho (`atu_3` e `atu_4`) e inclusão de síntese das pautas institucionais da Prefeitura de Porto Velho e SEMUSA (`atu_6`).
- [x] **Etapa Final — Validação Técnica e Visual**:
  - `npm run check` (38 testes aprovados, 0 falhas, 0 ocorrências estruturais), `compile_applet` e inspeção visual desktop/mobile via `playwright-cli`.
