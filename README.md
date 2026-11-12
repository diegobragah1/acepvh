# Plataforma Integrada de Estudos ACEPVH — Concurso SEMUSA Porto Velho/RO 2026 (Banca IBGP)

Aplicação React + TypeScript + Vite + Tailwind CSS para preparação intensiva ao cargo de **Agente de Combate às Endemias (ACE — Códigos 340 a 356)** da **Secretaria Municipal de Saúde de Porto Velho/RO (SEMUSA)**, regido pelo **Edital Normativo nº 25/2026** consolidado até a **Retificação nº 01 — Edital nº 28/2026 (Banca IBGP)**.

- 🌐 **Aplicação Publicada (GitHub Pages):** [https://diegobragah1.github.io/acepvh/](https://diegobragah1.github.io/acepvh/)
- 💻 **Repositório GitHub:** [https://github.com/diegobragah1/acepvh](https://github.com/diegobragah1/acepvh)
- 📁 **Acervo no Google Drive:** [Pasta CONCURSO SEMUSA](https://drive.google.com/drive/folders/1L8bvMQeMBoqE9o-HacSqYsa0sujn8OBK)
- 🤖 **Caderno de Auditoria no NotebookLM:** [Caderno ACE SEMUSA 2026](https://notebooklm.google.com/notebook/2bd0b85d-ab28-4bd7-82b1-512d85ab1021)

---

## 1. Destaques e Métricas do Projeto

| Indicador | Quantidade / Detalhe | Descrição e Cobertura |
| :--- | :---: | :--- |
| **Vagas Totais** | **140 Vagas** | 40 Imediatas + 100 Cadastro de Reserva (Cód. 340 Urbano: 96 vagas; Códs. 341 a 356 Distritos: 44 vagas — Anexo I Retificado) |
| **Remuneração & Benefícios** | **R$ 3.242,00 + Benefícios** | Vencimento básico oficial para 40h semanais + adicional de insalubridade e gratificações da carreira |
| **Data e Turno da Prova** | **13/12/2026 (Tarde — 14h45 às 17h45)** | Prova objetiva de múltipla escolha (A, B, C, D) elaborada pela banca IBGP (Portões fecham às 14h30) |
| **Aulas Estruturadas** | **49 Aulas Oficiais** | 100% do Conteúdo Programático (Anexo IV) em leitura contínua com texto integral e destaques |
| **Seções e Tópicos** | **236 Seções Didáticas** | Estruturadas com texto fluido, quadros comparativos, pontos de memorização e alertas de pegadinhas |
| **Banco de Questões** | **746 Questões Comentadas** | Questões objetivas A–D (534 base + 212 aprofundamento), classificadas por nível (Fácil/Intermediário/Difícil) e tipo, com justificativa detalhada por alternativa |
| **Flashcards Ativos** | **723 Flashcards** | Memorização ativa com efeito 3D em grade responsiva organizada por aula e eixo temático |
| **Fichas Sinópticas** | **14 Endemias Oficiais** | Guias completos com vetores, reservatórios, ciclos, sintomas, LIRAa (A1 a E) e controle de vetores |
| **Fontes & Matriz** | **126 Fontes Oficiais** | Legislações federais e municipais de Porto Velho, manuais do Ministério da Saúde e notas técnicas |

---

## 2. Distribuição das 49 Aulas por Disciplina

Conforme a matriz oficial do Anexo IV do Edital nº 25/2026:

1. **Conhecimentos Específicos (10 Aulas — `esp_1` a `esp_10`):**
   - CF/88 (Art. 196 a 200), Leis Federais 8.080/90 e 8.142/90, Leis da Carreira ACE (11.350/06, 13.595/18 e 13.708/18), PNAB (Portaria 2.436/17), História da Profissão (SUCAM, FUNASA), Atribuições do ACE, Vigilância em Saúde (Epidemiológica, Sanitária, Ambiental), As 14 Doenças e Cadeia Epidemiológica.
2. **Legislação Municipal e Geral (7 Aulas — `leg_1` a `leg_7`):**
   - Lei Orgânica do Município de Porto Velho (Texto integral dos 249 artigos com Resumo Prioritário IBGP e notas de prova), Regime Jurídico Único (LC 385/2010), Plano de Carreiras SEMUSA (LC 390 e 391/2010), Estatuto da Pessoa com Deficiência (Lei 13.146/15), CF/88 (Administração Pública), Lei de Licitações (Lei 14.133/21) e LAI (Lei 12.527/11 e Decreto Municipal).
3. **Língua Portuguesa (18 Aulas — `por_1` a `por_18`):**
   - Compreensão textual, tipologia, semântica, figuras de sintaxe e pensamento, coesão, classes gramaticais, verbos, concordância verbal/nominal, regência, crase, termos da oração e pontuação.
4. **Raciocínio Lógico-Matemático (8 Aulas — `rlm_1` a `rlm_8`):**
   - Conjuntos numéricos (MMC/MDC), razão, proporção, porcentagem, grandezas, equações de 1º grau, lógica proposicional, equivalências, diagramas lógicos, contagem, probabilidade e matrizes/sistemas.
5. **Conhecimentos Gerais e Atualidades (6 Aulas — `atu_1` a `atu_6`):**
   - Fatos políticos/econômicos/sociais (últimos 5 anos), Rondônia e Porto Velho (história, ferrovia Madeira-Mamoré, hidrelétricas, hidrografia, economia), cidadania, símbolos cívicos e realidade socioambiental amazônica.

---

## 3. Funcionalidades da Plataforma

- 🔍 **Busca Global Instantânea (`Ctrl+K`):** Pesquisa rápida e em tempo real em todas as 49 aulas, 14 fichas de endemias e 746 questões, com navegação direta ao trecho pesquisado.
- 📈 **Painel do Candidato & Acompanhamento de Progresso:**
  - Cartão **"Retomar de onde parei"** com retorno direto à última aula/bloco estudado.
  - Barra percentual global e por disciplina (conclusão de aulas, eixos e taxa de acertos em questões).
  - Detector automático de assuntos com menor desempenho (`< 65%` de acerto ou marcados para revisão), além de histórico cronometrado de simulados realizados.
  - Marcação individual de conclusão por seção/tópico e por aula inteira, além de **★ Favoritos** (aulas e questões) e **📝 Anotações Pessoais por Aula**.
- 🎯 **Localizador de Pauta Oficial (`PautaLocator`):** Navegação rápida por todas as 49 aulas das 5 disciplinas do Anexo IV diretamente para o bloco correspondente.
- 🏆 **Simulado Oficial IBGP, Simulado Personalizado & Caderno de Erros:**
  - Prova simulada oficial de 50 questões (Peso 2,0 = 100 pts) com **cronômetro regressivo de 3h00** e opção *Modo Prova Real* (gabarito só ao finalizar).
  - Construtor de **Simulado Personalizado** por disciplina, aula/assunto, nível de dificuldade, quantidade (10–50) e tempo limite.
  - Filtros de **❌ Caderno de Erros**, **⬜ Não respondidas**, **✅ Acertadas**, **★ Favoritas** e nível de dificuldade.
- 🃏 **Flashcards com Revisão Espaçada (SRS):** Modos **Grade** e **Pilha (1 por vez)** com avaliação (*Difícil*, *Bom*, *Já sei*), agendamento automático de revisões pendentes para hoje e sincronização entre a apostila e o deck global.
- 📖 **Apostila Contínua com Tipografia Fluida:** Leitura confortável em dispositivos móveis e desktop, sem divisões excessivas em sanfonas, com tipografia `Plus Jakarta Sans`, entrelinha ajustada (`1.7`) e destaque para *Para memorizar* e *Atenção na prova*.
- 🧠 **Mapas Mentais Interativos:** Visualização dos ramos conceituais integrados para revisão visual de cada aula.
- 🗂️ **Edital Verticalizado Categorizado:** Navegação oficial por disciplina e peso, com status de estudo (`Não iniciado`, `Em estudo`, `Estudado`, `Revisar`, `Dominado`).
- ✍️ **Treinador de Certo/Errado & Simulados:** Modos de treino interativo para fixação ativa de conceitos e pegadinhas recorrentes da banca IBGP.
- 🧮 **Calculadoras Entomológicas e Sanitárias:**
  - Cálculo de Índice de Infestação Predial (IIP), Índice de Breteau (IB) e Índice por Tipo de Recipiente (IR) segundo as faixas de risco do LIRAa/MS (`< 1,0%`, `1,0% a 3,9%`, `≥ 4,0%`).
  - Cubagem de reservatórios e dosagem de larvicidas (Espinosade, Piriproxifeno 0,5% G e Bti) com aviso técnico oficial `[VERIFICAR]` e recomendações de EPIs.
- 💾 **Persistência Local e Backup JSON:** Todo o progresso, respostas e marcações são salvos localmente no navegador, com função de exportação e importação de arquivo JSON.

---

## 4. Tecnologias & Arquitetura

- **React 18** com **TypeScript** e **Vite** para inicialização instantânea e máxima performance.
- **Tailwind CSS v3.4.4** para design responsivo e acessível (otimizado para dispositivos móveis de 320px até telas ultrawide).
- **KaTeX** com MathML nativo para fórmulas matemáticas acessíveis em Raciocínio Lógico.
- **Node Test Runner (`scripts/run_tests.mjs`) & Headless Chrome DevTools Protocol (CDP — `scripts/e2e_smoke.mjs`)** para validação contínua com 61 testes unitários e testes de fumaça E2E (Desktop e Mobile 320px), com zero dependências externas como Playwright ou Puppeteer.

---

## 5. Scripts Disponíveis

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento (porta 3000)
npm run dev

# Executar suite de testes unitários (61 testes com node:test e tsx)
npm test

# Executar teste de fumaça E2E via Headless Chrome CDP (Desktop & Mobile 320px)
npm run test:e2e

# Executar auditoria estrutural do conteúdo pedagógico
npm run audit:content

# Sincronizar dados das 49 aulas e gerar arquivos Markdown
npm run sync:data

# Validação completa (testes unitários + auditoria de conteúdo + lint de tipos)
npm run check

# Compilar para produção, sincronizar 404.html e verificar integridade da publicação
npm run build

# Pré-visualizar build de produção
npm run preview
```
