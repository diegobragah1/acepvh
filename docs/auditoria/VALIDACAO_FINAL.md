# Validação Técnica, Estrutural e Pedagógica — Plataforma ACE SEMUSA 2026

Data de atualização: 31/10/2026.

## 1. Resumo das Validações Executadas

| Verificação | Comando / Ferramenta | Resultado |
| --- | --- | --- |
| Suíte de testes unitários e de regressão | `npm test` (`node --import tsx --test src/utils/*.test.ts`) | **38 testes aprovados, 0 falhas** |
| Checagem estática de tipos TypeScript | `npm run lint` (`tsc --noEmit`) | **Aprovado (0 erros)** |
| Auditoria estrutural das 49 aulas | `npm run audit:content` | **0 ocorrências** (49 aulas, 236 blocos base, 632 questões base, 660 flashcards, 126 fontes) |
| Conferência matemática de RLM | `npm run audit:rlm` | **90 memórias de conferência registradas** em `docs/REVISAO_QUESTOES_RLM.md` |
| Geração da matriz e fichas de auditoria | `node --import tsx scripts/start_integral_audit.ts` | **49 fichas e 400 linhas de matriz atualizadas** |
| Build de produção (Vite) | `npm run build` | **Aprovado** (`dist/` gerado sem erros) |
| Inspeção visual em navegador real (`playwright-cli`) | Desktop (`1440×900`) e Mobile (`390×844`) | **0 erros de console/página**, renderização íntegra de teoria, MathML, mapas mentais, flashcards e questões |

---

## 2. Invariantes Garantidas por Testes Automatizados (`src/utils/*.test.ts`)

1. **Integridade do Esquema e Categorização (`normalizeData.test.ts`)**:
   - Todas as 49 aulas (`esp_1..10`, `leg_1..7`, `por_1..18`, `rlm_1..8`, `atu_1..6`) correspondem exatamente aos itens do Edital nº 25/2026 e passam na normalização sem campos inválidos.
2. **Higiene Editorial e Consistência Interna (`closure.test.ts`)**:
   - `0` comentários órfãos mencionando `"Erro da E:"` ou `"letra E"` em questões de 4 opções (`A–D`);
   - `0` cabeçalhos residuais da numeração legada (`Aula 18` a `Aula 31`);
   - `100%` dos flashcards sincronizados com o `title` da aula a que pertencem;
   - Presença verificada das atualizações normativas (EC 140/2026 em `esp_1`, texto original da Portaria 2.436/2017 em `esp_5`, Decreto Municipal 14.565/2017 e Lei Estadual RO 6.385/2026 em `leg_7`) e das correções conceituais em `por_3..17`, `rlm_1..8`, `esp_2, 4, 7` e `atu_3, 4, 6`.
3. **Renderização Matemática Acessível (`math.test.ts`)**:
   - Todas as 8 aulas de Raciocínio Lógico (`rlm_1` a `rlm_8`) renderizam teoria (`modoA`) e resumo (`modoB`) em KaTeX/MathML com zero `data-math-error` e mais de 200 fórmulas válidas.
4. **Exatidão Combinatória e Probabilística (`probabilityReview.test.ts`)**:
   - Exercícios de probabilidade, extração sem reposição, princípio das gavetas de Dirichlet, anos bissextos e movimento em etapas são verificados contra enumeração computacional exaustiva de resultados elementares.
5. **Preservação do Progresso do Usuário (`progress.test.ts`, `questionIdentity.test.ts`)**:
   - Respostas salvas pelo estudante são vinculadas à assinatura de conteúdo da questão; questões cujo gabarito foi corrigido não herdam marcações legadas incorretas.

---

## 3. Distinção Metodológica de Governança (`docs/auditoria/MATRIZ_EDITAL.md`)

Em conformidade com as regras de governança da auditoria (`src/utils/auditEvidence.ts`):
- A aprovação de `npm run check` e `npm run audit:content` certifica a **integridade técnica, estrutural, matemática e editorial** da plataforma e a implementação das correções nas 49 aulas.
- Na matriz fina de 400 subcompetências (`docs/auditoria/MATRIZ_EDITAL.md`), o status `VALIDADO` permanece bloqueado por regra de código (`validationErrors`) enquanto não houver anexação individual dos 4 vetores formais de evidência documental externa para cada recorte, evitando qualquer aprovação automática superficial.
