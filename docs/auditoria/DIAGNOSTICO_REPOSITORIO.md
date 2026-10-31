# Diagnóstico de entrada

Base: main 526355b, após integração do PR 5. Este arquivo registra a inspeção de arquitetura; não substitui auditoria factual.

- Aplicação: React/TypeScript/Vite; Tailwind e KaTeX. Configuração: package.json, tsconfig.json, tailwind.config.js.
- Conteúdo principal: data/app_data.json, 49 objetos em lessons. Teoria modoA, resumo modoB, variantes Markdown, questions, flashcards e mindMap. JSON não é apenas um índice de documentos.
- Distribuição: public/data/app_data.json e os dois app_data.js são cópias estáticas. Alterações devem manter equivalência, e npm run build verifica a publicação. assets/ e public/assets/ contêm bundles gerados.
- Exibição: src/components/Tab2Apostila.tsx; fontes em Tab6Biblioteca.tsx; normalização em src/utils/normalizeData.ts; apresentação de Markdown e matemática nos utilitários homônimos.
- Fontes: catálogo data.sources com URLs, incluindo edital 86, quadro de provas 90 e programa 91. Uma URL cadastrada não significa PDF disponível ou consultado. O inventário local encontrou sources/test_56.pdf; as demais apostilas precisam de inventário e acesso individual, não se presume armazenamento integral.
- Textos primários efetivamente importados e respectivos metadados: content/fontes-oficiais/, docs/IMPORTACAO_PNAB.json e docs/IMPORTACAO_LAI.json. Normas municipais têm confronto textual em docs/CONFRONTO_MUNICIPAL.json, não validação jurídica das explicações.
- Reescritas recentes: content/revisao/ e scripts/review_*. Não executar scripts legados de enriquecimento indiscriminadamente: podem restaurar explicações superadas.
- Persistência: src/utils/progress.ts, questionIdentity.ts e componentes consumidores. Questões corrigidas com alteração substantiva usam revision; não apagar armazenamento nem reutilizar respostas antigas como se fossem novas tentativas. Questões novas devem ser acrescentadas sem deslocar as anteriores.
- Testes: npm run check, audit:curriculum e build. Testes específicos de progresso, backups, identidade das questões, normalização, matemática e correções documentais em src/utils/*.test.ts. Auditoria por palavras não é validação pedagógica.
- Falhas já documentadas: repetição, títulos de outras aulas, regras absolutas, comentários sobre alternativa E inexistente, atribuição de questões sem autenticação e mistura de LAI/LGPD. Relatórios anteriores permanecem como evidência parcial.
- Dependências pedagógicas iniciais: por_1 → por_2/3/6/7 (leitura e análise contextual); por_8/9 → por_10/11/12/13/14/17 (classes e estruturas); rlm_1 → rlm_2/3/4/7/8 (operações antes de problemas); rlm_5 → rlm_6 (lógica antes da argumentação); esp_1/2 → esp_4/5/7/8/9/10 (marco do SUS antes de processos e protocolos). São remissões de planejamento, não pré-requisitos impeditivos de navegação.

Pendências: confirmar versões oficiais mais recentes do edital e retificações; classificar acessibilidade de cada fonte; mapear dependências finas; inspecionar visualmente todas as aulas em tela móvel e desktop; verificar links e autenticar questões oficiais. Não foi criado mecanismo de autenticação ou manipulado token do estudante nesta etapa.
