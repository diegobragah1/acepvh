# Arquitetura da Plataforma — ACE SEMUSA Porto Velho/RO 2026

## 1. Visão Geral

A aplicação é uma Single-Page Application (SPA) estática em **React 18 + TypeScript + Vite + Tailwind CSS v3.4.4 + KaTeX**, projetada para funcionar com latência zero tanto localmente quanto no GitHub Pages (`/acepvh/`), sem necessidade de banco de dados externo para o estudante (persistência local resiliente via `localStorage` com exportação/importação de backup JSON).

---

## 2. Estrutura de Diretórios

```text
/
├── data/
│   ├── app_data.json          # Dataset canônico completo (49 aulas, 14 endemias, 126 fontes)
│   ├── app_data.js            # Fallback JS injetável para ambientes sem fetch JSON
│   ├── manifest.json          # Manifesto leve com metadados, disciplinas e índice das 49 aulas
│   ├── aulas.json             # Índice leve auditável das 49 aulas com hash SHA-256 (33 KB)
│   ├── materias.json          # Distribuição por disciplina (ESP 10, LEG 7, POR 18, RLM 8, ATU 6)
│   └── lessons/               # 49 arquivos JSON individuais (esp_1.json ... atu_6.json)
├── public/
│   ├── data/                  # Espelho público estático sincronizado para build/deploy
│   ├── .nojekyll              # Desativa processamento Jekyll no GitHub Pages
│   └── 404.html               # Fallback SPA para rotas diretas no GitHub Pages
├── src/
│   ├── components/            # Componentes de página (Abas 1 a 7, Header, Mapa Mental, Modais)
│   │   ├── Header.tsx
│   │   ├── Tab1Painel.tsx
│   │   ├── Tab2Apostila.tsx
│   │   ├── Tab3Simulado.tsx
│   │   ├── Tab4Endemias.tsx
│   │   ├── Tab5Cronograma.tsx
│   │   ├── Tab6Biblioteca.tsx
│   │   ├── Tab7Programatico.tsx
│   │   ├── LessonMindMapView.tsx
│   │   ├── StudyMethodPanel.tsx
│   │   ├── ContentAuditPanel.tsx
│   │   ├── BackupModal.tsx
│   │   └── Toast.tsx
│   ├── features/              # Módulos funcionais reutilizáveis por domínio
│   │   ├── endemias/
│   │   │   ├── CubagemDosagemCalculator.tsx
│   │   │   └── LiraaCalculatorPanel.tsx
│   │   ├── flashcards/
│   │   │   ├── FlashcardDeckPanel.tsx
│   │   │   ├── FlashcardGrid.tsx
│   │   │   └── FlashcardStackPlayer.tsx
│   │   ├── lessons/
│   │   │   ├── DidacticToolbar.tsx
│   │   │   ├── LessonBlockItem.tsx
│   │   │   ├── LessonNotesDrawer.tsx
│   │   │   ├── LessonSidebar.tsx
│   │   │   ├── LomPrioritySummary.tsx
│   │   │   ├── PautaLocator.tsx
│   │   │   ├── VFTrainerSection.tsx
│   │   │   └── VisualMemorizationBoard.tsx
│   │   ├── progress/
│   │   │   ├── SegmentedProgressBar.tsx
│   │   │   ├── StatusSelector.tsx
│   │   │   └── StudyDashboardPanel.tsx
│   │   └── questions/
│   │       ├── CustomExamPanel.tsx
│   │       ├── ExamTimerBar.tsx
│   │       ├── OfficialExamPanel.tsx
│   │       ├── QuestionBankPanel.tsx
│   │       └── QuestionCard.tsx
│   ├── services/
│   │   └── lessonService.ts   # Carregamento sob demanda, cache de aulas, Cloze e gerador V/F
│   ├── data/
│   │   ├── datasetClasses.ts  # Safelist explícita de 207 classes utilitárias Tailwind utilizadas no HTML
│   │   ├── deepening.ts       # Camada de aprofundamento pedagógico das 49 aulas (5 módulos em deepening/)
│   │   ├── pautaEspecificaMap.ts # Mapeamento completo das 49 aulas do Anexo IV para o PautaLocator
│   │   └── endemiasReference.ts # Dados estáticos de LIRAa, roedores, controle químico e glossário
│   ├── context/
│   │   └── AppContext.tsx     # Estado global, navegação entre abas e persistência completa de progresso
│   ├── utils/                 # Funções puras testadas unitariamente (node:test)
│   │   ├── normalizeData.ts
│   │   ├── markdown.ts
│   │   ├── math.ts
│   │   ├── status.ts
│   │   ├── progress.ts
│   │   ├── srs.ts             # Agendador de revisão espaçada (SRS) para flashcards
│   │   ├── questionIdentity.ts
│   │   ├── contentAudit.ts
│   │   └── *.test.ts          # Suíte automatizada (61 testes) executada via scripts/run_tests.mjs
│   └── types/
│       └── index.ts           # Contratos TypeScript de toda a aplicação
└── scripts/                   # Scripts de build, auditoria, validação de publicação e testes E2E
    ├── run_tests.mjs          # Executor de testes unitários com node:test e tsx (61 testes)
    ├── e2e_smoke.mjs          # Teste de fumaça E2E com Headless Chrome CDP nativo (7 abas Desktop & Mobile)
    ├── sync_all_data.ts       # Pipeline de sincronização de dados e markdown das 49 aulas
    ├── sync_build_assets.mjs  # Sincronização de artefatos de build e fallback 404.html para GitHub Pages
    ├── verify_publication.mjs # Verificação estrita de estilos Tailwind e integridade da pasta dist
    └── audit_content.ts       # Auditoria estrutural das 49 aulas, KaTeX e consistência referencial
```

---

## 3. Fluxo de Dados e Persistência do Estudante

1. **Inicialização (`AppContext.tsx`)**: Carrega e normaliza os dados canônicos (`normalizeAppData`), aplicando correções editoriais e a camada de aprofundamento (`withDeepening`).
2. **Identidade Estável de Questões (`questionIdentity.ts`)**: Cada questão possui chave determinística (`<lessonId>_b<blockIdx>_q<qIdx>` ou `<lessonId>_<blockIdx>_<qIdx>`), garantindo que o histórico de respostas salvas em `ace_semusa_2026_sim_answers_v3` e `ace_semusa_2026_lesson_answers_v1` nunca seja perdido.
3. **Status por Aula (`ace_semusa_2026_topic_status_v1`)**: Armazena o estado de cada uma das 49 aulas (`not_started`, `studying`, `completed`, `review`, `mastered`) sincronizado com `StatusSelector` e `SegmentedProgressBar`.
4. **Revisão Espaçada, Favoritos, Anotações e Simulados (`ace_semusa_2026_flashcard_srs_v1`, `*_favorite_lessons_v1`, `*_favorite_questions_v1`, `*_lesson_notes_v1`, `*_exam_history_v1`, `*_last_study_v1`)**: Persistem localmente com validação estrita em `parseProgress` e são incluídos integralmente no arquivo de backup JSON exportado/importado por `BackupModal`.

---

## 4. Arquitetura de Testes e Validação Automatizada

A plataforma conta com uma esteira abrangente de validação contínua composta por:

### 4.1. Suíte Unitária Automatizada (61 testes em `scripts/run_tests.mjs`)
- Executada pelo test runner nativo do Node.js (`node:test`) em conjunto com `tsx` para resolução direta de TypeScript, sem sobrecarga de frameworks externos pesados.
- **`contentAudit.test.ts`**: Validação estrita do dataset real de produção contra os limites do edital:
  * Exatamente 49 aulas estruturadas e 236 blocos de conteúdo temático.
  * Banco de 746 questões com no mínimo 4 opções (A–D), gabarito válido (`ans` dentro do intervalo de opções), enunciado não vazio e comentário explicativo obrigatório.
  * Deck de 723 flashcards ativos com frente e verso preenchidos e vínculo à aula correspondente.
  * Catálogo de 126 fontes oficiais válidas (todas com `num`, `title`, e `url` iniciando com `http://` ou `https://`) e 0 referências órfãs.
  * Distribuição exata das 49 aulas pelas 5 disciplinas do edital: Específicos (10), Legislação (7), Língua Portuguesa (18), Raciocínio Lógico (8) e Atualidades (6).
- **`simulado.test.ts`**: Validação dos algoritmos de simulado:
  * Casos de borda da função `scoreExamQuestions`: submissão vazia (0 pontos, reprovado), gabarito 100% (100 pontos, aprovado) e fronteira exata de aprovação de 50% (25 acertos = 50 pts, aprovado vs. 24 acertos = 48 pts, reprovado).
  * Geração do Simulado Oficial IBGP de 50 questões (`buildOfficialExamSet`) contra o banco real de 746 questões, assegurando unicidade e partição determinística conforme o Anexo III (15 esp + 10 por + 10 rlm + 10 leg + 5 atu = 50).
- **Outros módulos de teste**: Cobertura de SRS (`srs.test.ts`), persistência e progresso (`progress.test.ts`), normalização (`normalizeData.test.ts`), renderização matemática KaTeX (`math.test.ts`), identidade estável (`questionIdentity.test.ts`) e busca global (`globalSearch.test.ts`).

### 4.2. Teste de Fumaça E2E Headless Chrome CDP (`scripts/e2e_smoke.mjs`)
- Executado via `npm run test:e2e`, o script implementa comunicação direta com o Chrome DevTools Protocol (CDP) sobre WebSockets nativos do Node 20 (`--experimental-websocket`), eliminando qualquer dependência de bibliotecas de terceiros como Playwright ou Puppeteer.
- **Servidor HTTP em Porta Efêmera**: Inicia servidor HTTP nativo vinculado a `127.0.0.1:0`, evitando colisões de porta no ambiente local ou no CI.
- **Chrome Headless Isolado**: Lança o binário do Chrome com `--headless=new`, diretório de perfil limpo em pasta temporária e porta de depuração dedicada descoberta via `DevToolsActivePort`.
- **Navegação pelas 7 Abas da Aplicação**: Simula a jornada do estudante em duas resoluções críticas:
  * **Desktop**: Viewport padrão de 1280x800 pixels.
  * **Mobile**: Viewport restrito de 320x640 pixels com escala 2x (`deviceScaleFactor: 2`, `mobile: true`), garantindo ausência de quebras em telas ultracompactas.
- **Asserções de Qualidade e Integridade em Tempo Real**:
  * Captura todos os eventos `Runtime.consoleAPICalled` (tipo `error`) e `Runtime.exceptionThrown`. O teste falha imediatamente se qualquer exceção não tratada for detectada.
  * Valida a renderização efetiva do elemento `<main>` em cada aba, garantindo carga textual expressiva (entre 13.414 e 91.822 caracteres por aba).
- **Finalização Resiliente e Desalocação Limpa**: Bloco `finally` robusto que encerra a árvore de processos do Chrome (inclusive via `taskkill /F /T /PID` no Windows), remove o diretório temporário e encerra todas as conexões HTTP ativas.
