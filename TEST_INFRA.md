# TEST_INFRA.md — Arquitetura e Metodologia da Suíte de Testes E2E

**Projeto:** ACE SEMUSA Porto Velho 2026 — Plataforma de Ensino e Concurso Público  
**Norma de Referência:** Edital nº 25/2026 Consolidado com Retificação nº 01 (SEMUSA / IBGP)  
**Ambiente de Execução:** Node.js v20+ / Windows (PowerShell & cmd.exe)  
**Tecnologia:** Native Node Test Runner (`node:test`, `node:assert/strict`), TypeScript (`tsx`), Chrome DevTools Protocol (CDP) via WebSocket.

---

## 1. Visão Geral e Princípios de Qualidade

A suíte de testes ponta a ponta (E2E) da plataforma ACE SEMUSA Porto Velho 2026 foi concebida sob o princípio da **verificação opaca baseada em requisitos** (black-box requirement-driven testing). Ela valida a aplicação a partir de suas especificações formais (Requisitos R1 a R5 de `ORIGINAL_REQUEST.md` e o Anexo IV do Edital nº 25/2026), sem assumir premissas de implementação interna.

### Objetivos Fundamentais:
1. **Conformidade Curricular 1:1:** Garantir que 100% dos 49 tópicos do Anexo IV estejam presentes, distribuídos nas 5 disciplinas e acompanhados de fundamentação pedagógica.
2. **Imutabilidade e Estabilidade Posicional:** Assegurar que os identificadores das 534 questões base pré-existentes (`${lesson.id}_b${bIdx}_q${qIdx}`) nunca sofram deslocamento posicional devido à inserção de novos blocos ou correções.
3. **Padrão IBGP Estrito:** Rejeitar rigorosamente questões com 5 alternativas (sem "letra E"), assegurando 4 opções (A–D), gabaritos válidos em 0..3 e comentários detalhados.
4. **Integridade de Publicação e Assets:** Certificar paridade criptográfica SHA-256 entre dados consolidados e modulares, compilação de classes dinâmicas Tailwind, ausência de erros matemáticos KaTeX e conformidade em dispositivos móveis e desktop.

---

## 2. Metodologia dos 4 Tiers de Teste

A suíte é categorizada em 4 Tiers progressivos, baseados em metodologias consagradas de engenharia de software:

```
┌────────────────────────────────────────────────────────────────────────┐
│ TIER 1: Feature Coverage (Category-Partition Method)                   │
│ - 49 aulas, 5 disciplinas, 14 endemias, 126 fontes (R1 a R5)           │
├────────────────────────────────────────────────────────────────────────┤
│ TIER 2: Boundary Value Analysis & Corner Cases (BVA)                   │
│ - 4 opções A-D estritas, questionIdentity, SHA-256, KaTeX, URLs        │
├────────────────────────────────────────────────────────────────────────┤
│ TIER 3: Cross-Feature Combinations (Pairwise Testing)                  │
│ - withDeepening dual-layer, sync:data, datasetClasses, fluxo SRS      │
├────────────────────────────────────────────────────────────────────────┤
│ TIER 4: Real-World Scenarios & Workload (Simulado Oficial + CDP)       │
│ - Prova Oficial Anexo III (50q peso 2) + Chrome Headless 7 abas        │
└────────────────────────────────────────────────────────────────────────┘
```

### 2.1. Tier 1 — Feature Coverage (Category-Partition)
- **Arquivo:** `tests/e2e/tier1_feature_coverage.test.ts`
- **Técnica:** Particionamento de categorias de domínio e requisitos funcionais.
- **Escopo de Verificação:**
  1. *Distribuição Curricular das 49 Aulas:*
     - Conhecimentos Específicos: 10 aulas (`esp_1` a `esp_10`).
     - Legislação Municipal e SUS: 7 aulas (`leg_1` a `leg_7`).
     - Língua Portuguesa: 18 aulas (`por_1` a `por_18`).
     - Raciocínio Lógico e Matemático: 8 aulas (`rlm_1` a `rlm_8`).
     - Atualidades e Geografia Regional: 6 aulas (`atu_1` a `atu_6`).
  2. *Requisitos R1 a R5:* Validação dos campos obrigatórios em cada aula: título, metadados, blocos de teoria (`modoA`), resumos esquemáticos (`modoB`), questões comentadas, flashcards e fontes bibliográficas.
  3. *14 Endemias do Anexo IV:* Validação dos 6 eixos epidemiológicos (doença, agente etiológico, vetor/reservatório, transmissão, clínica/sintomas e medidas de controle) para todas as 14 doenças do edital.
  4. *Catálogo de 126 Fontes:* Verificação da presença de todas as 126 fontes oficiais cadastradas e seus agrupamentos temáticos.
  5. *15 Distritos Rurais e Ribeirinhos de Porto Velho:* Verificação dos códigos 341 a 356 nas aulas de geografia e território (`atu_3` e `atu_6`).

### 2.2. Tier 2 — Boundary Value Analysis & Corner Cases (BVA)
- **Arquivo:** `tests/e2e/tier2_boundary_corner.test.ts`
- **Técnica:** Análise de valores limite e teste de restrições invariantes.
- **Escopo de Verificação:**
  1. *Padrão IBGP de 4 Alternativas:* Nenhuma questão pode possuir 5 alternativas; `options.length === 4` estrito; `ans` inteiro no intervalo `[0, 3]`; comentários isentos de qualquer citação a "letra E" ou "Erro da E".
  2. *Estabilidade Posicional de Identificadores (`questionIdentity.ts`):* Assegura que nenhum bloco existente sofreu reordenação e que as chaves base `${lesson.id}_b${bIdx}_q${qIdx}` permanecem 100% idênticas, testando a persistência de respostas simuladas no `localStorage`.
  3. *Integridade Criptográfica SHA-256:* Compara o hash SHA-256 de cada uma das 49 aulas entre `data/app_data.json` e os arquivos modulares em `data/lessons/${id}.json`.
  4. *Renderização Matemática KaTeX Limítrofe:* Varre todos os blocos e asserções contra atributos `data-math-error` para garantir que fórmulas não quebrem a interface.
  5. *Validação Formal das 126 URLs:* Validação sintática via regex RFC 3986 e protocolo obrigatório `http://` ou `https://` em todas as fontes.

### 2.3. Tier 3 — Cross-Feature Combinations (Pairwise Testing)
- **Arquivo:** `tests/e2e/tier3_cross_feature.test.ts`
- **Técnica:** Teste combinatório de pares de subsistemas (interação entre camadas).
- **Escopo de Verificação:**
  1. *Integração Dual-Layer (`withDeepening`):* Garante que o bloco autoral de aprofundamento é anexado estritamente ao final de cada aula (`blocks.length - 1`), sem deslocamento de índices.
  2. *Pipeline de Dados e Paridade Estática:* Validação da sincronização de `sync_all_data.ts` entre `data/` e `public/data/` (app_data.json, app_data.js, manifest.json e as 49 lições modulares).
  3. *Safelist de Classes Tailwind:* Validação de que todas as classes CSS dinâmicas extraídas para `src/data/datasetClasses.ts` estão compiladas no bundle `dist/assets/app-bundle.css`.
  4. *Fluxo de Dados Entre Componentes:* Simulação de respostas em questões -> cálculo do progresso de estudo (`calculateStudyProgress`) -> atualização de desempenho por disciplina -> agendamento de repetição espaçada (SRS).

### 2.4. Tier 4 — Real-World Scenarios & Workload Simulation
- **Arquivo:** `tests/e2e/tier4_real_world_scenarios.test.ts`
- **Técnica:** Simulação de cenários reais de usuário e teste de carga em navegador headless.
- **Escopo de Verificação:**
  1. *Simulado Oficial do Concurso (Anexo III):*
     - Seleção determinística de 50 questões com a cota exata: 15 Específicos, 10 Português, 10 RLM, 10 Legislação e 5 Gerais.
     - Aplicação de peso 2 (escala 0 a 100 pontos).
     - Critério de aprovação estrito em 50 pontos (50%).
     - Teste de casos de fronteira: 0 acertos (0 pts, reprovado), 24 acertos (48 pts, reprovado), 25 acertos (50 pts, aprovado no limite) e 50 acertos (100 pts, nota máxima).
  2. *Navegação E2E no Google Chrome Headless via CDP:*
     - Viewport Desktop (1280x800) e Viewport Mobile (320x640).
     - Navegação sequencial nas 7 abas da plataforma: `Painel`, `Conteúdo`, `Aulas (49)`, `Revisão`, `Endemias (14)`, `Cronograma` e `Fontes (126)`.
     - Asserção de conteúdo renderizado: `<main>` presente e contendo no mínimo **500 caracteres** em cada aba.
     - Telemetria de console CDP: **0 erros** (`console.error`) e **0 exceções não tratadas**.

---

## 3. Thresholds Estritos e Critérios de Aceitação

Para aprovação da suíte e liberação de produção, os seguintes thresholds são obrigatórios:

| Métrica | Limite Exigido | Tolerância |
|---|---|---|
| Total de Aulas Cobertas | 49 aulas | 0 tolerância |
| Disciplinas Estruturadas | 5 disciplinas (esp, leg, por, rlm, atu) | 0 tolerância |
| 14 Doenças do Edital | 14 com 6 eixos epidemiológicos | 0 tolerância |
| Total de Fontes Registradas | 126 fontes cadastradas | 0 tolerância |
| Alternativas por Questão | Exatamente 4 (A–D) | 0 tolerância (sem "E") |
| Deslocamento de IDs de Questão | 0 IDs deslocados | 0 tolerância |
| Erros de KaTeX (`data-math-error`) | 0 ocorrências | 0 tolerância |
| Divergência SHA-256 (Canônica vs Modulares) | 0 discrepâncias | 0 tolerância |
| Questões no Simulado Oficial | Exatamente 50 (15+10+10+10+5) | 0 tolerância |
| Erros de Console no Chrome CDP | 0 `console.error` | 0 tolerância |
| Exceções Não Tratadas no Chrome CDP | 0 exceções | 0 tolerância |
| Código de Saída Global da Suíte | Exit Code 0 | 0 tolerância |

---

## 4. Instruções de Execução no Ambiente Windows

Todas as execuções de teste no ambiente de desenvolvimento devem utilizar o padrão homologado com o PATH explícito do Node.js:

### 4.1. Execução Completa da Suíte E2E (4 Tiers)
```cmd
cmd /c "set PATH=C:\Users\Diego\.gemini\antigravity\scratch\.tools\node;%PATH% && cd /d C:\Users\Diego\.gemini\antigravity\scratch\acepvh_github && node scripts/run_e2e_suite.mjs"
```

### 4.2. Execução Seletiva de Tiers
Para executar apenas um ou mais Tiers específicos:
```cmd
cmd /c "set PATH=C:\Users\Diego\.gemini\antigravity\scratch\.tools\node;%PATH% && cd /d C:\Users\Diego\.gemini\antigravity\scratch\acepvh_github && node scripts/run_e2e_suite.mjs --tier=1"
cmd /c "set PATH=C:\Users\Diego\.gemini\antigravity\scratch\.tools\node;%PATH% && cd /d C:\Users\Diego\.gemini\antigravity\scratch\acepvh_github && node scripts/run_e2e_suite.mjs --tier=1,2"
cmd /c "set PATH=C:\Users\Diego\.gemini\antigravity\scratch\.tools\node;%PATH% && cd /d C:\Users\Diego\.gemini\antigravity\scratch\acepvh_github && node scripts/run_e2e_suite.mjs --tier=4"
```

### 4.3. Execução Direta de Arquivos de Teste via Node Native Test Runner
```cmd
cmd /c "set PATH=C:\Users\Diego\.gemini\antigravity\scratch\.tools\node;%PATH% && cd /d C:\Users\Diego\.gemini\antigravity\scratch\acepvh_github && node --experimental-websocket --import tsx --test --test-reporter=spec tests/e2e/tier1_feature_coverage.test.ts"
```

### 4.4. Execução dos Testes Unitários de Baseline
```cmd
cmd /c "set PATH=C:\Users\Diego\.gemini\antigravity\scratch\.tools\node;%PATH% && cd /d C:\Users\Diego\.gemini\antigravity\scratch\acepvh_github && npm test"
```

### 4.5. Pipeline Completo de Qualidade e Build
```cmd
cmd /c "set PATH=C:\Users\Diego\.gemini\antigravity\scratch\.tools\node;%PATH% && cd /d C:\Users\Diego\.gemini\antigravity\scratch\acepvh_github && npm run check && npm run build && node scripts/run_e2e_suite.mjs"
```

---

## 5. Políticas de Isolamento, Tolerância a Falhas e Teardown

1. **Isolamento de Processos e Portas Efêmeras:**
   - O servidor HTTP sobe na porta `0`, eliminando qualquer risco de conflito de portas com outros serviços.
   - O Chrome Headless é iniciado com `--remote-debugging-port=0`, alocando porta efêmera dinamicamente registrada em `DevToolsActivePort`.
   - Cada sessão de teste cria uma pasta temporária exclusiva em `os.tmpdir()` (`chrome-smoke-*`), garantindo que não haja contaminação de cookies, cache ou `localStorage` entre execuções.

2. **Teardown Seguro no Windows:**
   - Encerramento gracioso via protocolo CDP (`Browser.close`).
   - Finalização forçada da árvore de processos via comando nativo Windows:
     ```cmd
     taskkill /F /T /PID <chrome_pid>
     ```
   - Limpeza do diretório temporário com retry loop (6 tentativas espaçadas em 250ms) para contornar bloqueios temporários de arquivo do sistema de arquivos NTFS.

3. **Timeouts e Guardas de Falha Global:**
   - Guarda global contra congelamento com timeout fail-safe de 90 segundos.
   - Timeout por comando individual CDP de 15 segundos.
   - Toda rejeição de conexão ou término anômalo do processo do Chrome causa rejeição imediata de comandos pendentes, evitando promessas suspensas indefinidamente.
