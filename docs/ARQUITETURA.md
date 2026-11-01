# Arquitetura da Plataforma — ACE SEMUSA Porto Velho/RO 2026

## 1. Visão Geral

A aplicação é uma Single-Page Application (SPA) estática em **React 18 + TypeScript + Vite + Tailwind CSS v4 + KaTeX**, projetada para funcionar com latência zero tanto localmente quanto no GitHub Pages (`/acepvh/`), sem necessidade de banco de dados externo para o estudante (persistência local resiliente via `localStorage` com exportação/importação de backup JSON).

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
│   └── data/                  # Espelho público estático sincronizado para build/deploy
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
│   │   ├── lessons/
│   │   │   ├── LessonSidebar.tsx
│   │   │   ├── DidacticToolbar.tsx
│   │   │   ├── PautaLocator.tsx
│   │   │   ├── VFTrainerSection.tsx
│   │   │   └── LessonBlockItem.tsx
│   │   ├── questions/
│   │   │   └── QuestionCard.tsx
│   │   ├── flashcards/
│   │   │   └── FlashcardGrid.tsx
│   │   └── progress/
│   │       ├── StatusSelector.tsx
│   │       └── SegmentedProgressBar.tsx
│   ├── services/
│   │   └── lessonService.ts   # Carregamento sob demanda, cache de aulas, Cloze e gerador V/F
│   ├── data/
│   │   ├── deepening.ts       # Camada de aprofundamento pedagógico das 49 aulas
│   │   └── endemiasReference.ts # Dados estáticos de LIRAa, roedores, controle químico e glossário
│   ├── context/
│   │   └── AppContext.tsx     # Estado global, navegação entre abas e persistência de progresso
│   ├── utils/                 # Funções puras testadas unitariamente (node:test)
│   │   ├── normalizeData.ts
│   │   ├── markdown.ts
│   │   ├── math.ts
│   │   ├── status.ts
│   │   ├── progress.ts
│   │   ├── questionIdentity.ts
│   │   ├── contentAudit.ts
│   │   └── *.test.ts          # Suíte automatizada de testes unitários e de arquitetura
│   └── types/
│       └── index.ts           # Contratos TypeScript de toda a aplicação
└── scripts/                   # Scripts de auditoria de conteúdo, currículo e verificação de build
```

---

## 3. Fluxo de Dados e Persistência do Estudante

1. **Inicialização (`AppContext.tsx`)**: Carrega e normaliza os dados canônicos (`normalizeAppData`), aplicando correções editoriais e a camada de aprofundamento (`withDeepening`).
2. **Identidade Estável de Questões (`questionIdentity.ts`)**: Cada questão possui chave determinística (`<lessonId>_b<blockIdx>_q<qIdx>` ou `<lessonId>_<blockIdx>_<qIdx>`), garantindo que o histórico de respostas salvas em `ace_semusa_2026_sim_answers_v3` e `ace_semusa_2026_lesson_answers_v1` nunca seja perdido.
3. **Status por Aula (`ace_semusa_2026_topic_status_v1`)**: Armazena o estado de cada uma das 49 aulas (`not_started`, `studying`, `completed`, `review`, `mastered`) sincronizado com `StatusSelector` e `SegmentedProgressBar`.
