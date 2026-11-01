# Relatório de Refatoração Estrutural, Limpeza e Otimização — ACE SEMUSA 2026

## 1. Escopo e Regra de Ouro

Esta refatoração estruturou a plataforma **ACE SEMUSA Porto Velho/RO — Edital nº 25/2026** com foco em modularidade de código, eliminação de duplicações, separação entre dados estáticos e interface e otimização de renderização, mantendo **100% de preservação do conteúdo pedagógico das 49 aulas**:

- **49 aulas intactas** (`esp_1..10`, `leg_1..7`, `por_1..18`, `rlm_1..8`, `atu_1..6`);
- **187 blocos base / 236 blocos com aprofundamento**;
- **534 questões base / 632 questões com aprofundamento** (múltipla escolha A–D com gabarito comentado);
- **660 flashcards interativos**;
- **14 fichas sinópticas de endemias**;
- **126 fontes documentais auditadas**;
- **49 mapas mentais visuais**;
- **Compatibilidade integral com o progresso salvo pelo estudante no `localStorage` e arquivos JSON de backup**.

---

## 2. Principais Mudanças Realizadas

### 2.1. Decomposição de Componentes Monolíticos (`src/features/`)
O componente `src/components/Tab2Apostila.tsx` possuía **1.350 linhas** concentrando barra lateral, filtros, localizador da pauta, laboratório de estudo ativo, treinador V/F, processamento Cloze/KaTeX e renderização de blocos, questões e flashcards. Ele foi decomposto em módulos coesos:

- `src/features/lessons/LessonSidebar.tsx` — Navegação lateral, busca textual, filtro por disciplina (`esp`, `leg`, `por`, `rlm`, `atu`) e filtro por status.
- `src/features/lessons/DidacticToolbar.tsx` — Barra de modos (`ALL`, `MAPA`, `A`, `B`, `C`), expansão/recolhimento de blocos, busca interna grifada, ocultação ativa de leis/prazos (Cloze) e ativação do treinador V/F.
- `src/features/lessons/PautaLocator.tsx` — Localizador rápido do Edital Verticalizado (Anexo IV).
- `src/features/lessons/VFTrainerSection.tsx` — Treinador rápido de julgamento Certo/Errado sobre assertivas da aula.
- `src/features/lessons/LessonBlockItem.tsx` — Renderizador memoizado (`React.memo` + `useMemo`) de cada bloco didático (Modo A, Modo B e Modo C).
- `src/features/questions/QuestionCard.tsx` — Cartão reutilizável de questão comentada A–D com suporte a fórmulas KaTeX/MathML.
- `src/features/flashcards/FlashcardGrid.tsx` — Grade reutilizável de flashcards 3D usada tanto na Apostila quanto no Centro de Simulados.
- `src/features/progress/StatusSelector.tsx` — Seletor reutilizável dos 5 níveis de status de domínio (`not_started`, `studying`, `completed`, `review`, `mastered`).
- `src/features/progress/SegmentedProgressBar.tsx` — Barra segmentada multicor de progresso reutilizada no `Header` e no `Tab7Programatico`.

### 2.2. Separação entre Dados de Domínio e Interface (`src/data/` e `data/lessons/`)
- **Extração de tabelas de referência para `src/data/endemiasReference.ts`**: Os 7 grupos de depósitos do LIRAa (`A1` a `E`), a tabela comparativa das 3 espécies de roedores sinantrópicos (`Rattus norvegicus`, `Rattus rattus`, `Mus musculus`), os 4 protocolos de controle químico/EPIs e os 18 verbetes do Glossário Técnico de Epidemiologia foram desacoplados de `src/components/Tab4Endemias.tsx`.
- **Modularização das 49 aulas em arquivos individuais**: Foram gerados os 49 arquivos `data/lessons/<id>.json` e `public/data/lessons/<id>.json`, acompanhados do manifesto leve `data/manifest.json` (`public/data/manifest.json`), mantendo `data/app_data.json` e `public/data/app_data.json` sincronizados para compatibilidade total com GitHub Pages e scripts de auditoria.
- **Otimização de `data/aulas.json` e `data/materias.json`**:
  - `data/aulas.json` deixou de armazenar uma cópia redundante de **8,12 MB** de todo o corpo das aulas e passou a armazenar o índice estruturado das 49 aulas (**33,0 KB**, redução de **99,6%**) contendo metadados, contagens e hash SHA-256 de integridade.
  - `data/materias.json` foi atualizado da antiga contagem de 32 aulas para a distribuição oficial das **49 aulas** (`esp: 10`, `leg: 7`, `por: 18`, `rlm: 8`, `atu: 6`).

### 2.3. Otimização de Desempenho e Renderização
- **Memoização de Markdown e KaTeX por Bloco**: Em `LessonBlockItem.tsx`, `renderMarkdownToHtml` e `renderMathInHtml` são memoizados por bloco (`useMemo`), evitando reprocessar expressões matemáticas ou tabelas quando o usuário responde a uma questão, vira um flashcard ou alterna o status da aula.
- **Cache de Normalização de Aulas**: `src/services/lessonService.ts` mantém cache por ID das aulas normalizadas e enriquecidas.
