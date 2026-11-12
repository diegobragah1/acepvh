# Registro de Arquivos Removidos ou Otimizados na Refatoração

Todos os arquivos abaixo foram auditados antes da remoção para comprovar ausência de referências no código-fonte (`src/`), no pipeline de build (`package.json` / `vite.config.ts`) e nos testes automatizados. **Nenhum conteúdo pedagógico das 49 aulas foi removido.**

## 1. Snapshots Temporários Redundantes Removidos (`40,30 MB` liberados)

| Arquivo | Tamanho | Classificação | Justificativa Técnica |
| :--- | :---: | :---: | :--- |
| `scripts/backup_before_recategorize_10.json` | 8,04 MB | REDUNDANTE / OBSOLETO | Snapshot intermediário pré-recategorização de Específicos |
| `scripts/backup_before_recategorize_gerais_6.json` | 8,01 MB | REDUNDANTE / OBSOLETO | Snapshot intermediário pré-recategorização de Conhecimentos Gerais |
| `scripts/backup_before_recategorize_leg_7.json` | 8,02 MB | REDUNDANTE / OBSOLETO | Snapshot intermediário pré-recategorização de Legislação |
| `scripts/backup_before_recategorize_por_18.json` | 8,16 MB | REDUNDANTE / OBSOLETO | Snapshot intermediário pré-recategorização de Língua Portuguesa |
| `scripts/backup_before_recategorize_rlm_8.json` | 8,07 MB | REDUNDANTE / OBSOLETO | Snapshot intermediário pré-recategorização de Raciocínio Lógico |

## 2. Scripts Pontuais de Migração Legada Removidos

| Arquivo | Classificação | Justificativa Técnica |
| :--- | :---: | :--- |
| `scripts/recategorize_especifico_10.mjs` | OBSOLETO | Script de execução única que gerava `backup_before_recategorize_10.json` |
| `scripts/recategorize_gerais_6.mjs` | OBSOLETO | Script de execução única que gerava `backup_before_recategorize_gerais_6.json` |
| `scripts/recategorize_legislacao_7.mjs` | OBSOLETO | Script de execução única que gerava `backup_before_recategorize_leg_7.json` |
| `scripts/recategorize_portugues_18.mjs` | OBSOLETO | Script de execução única que gerava `backup_before_recategorize_por_18.json` |
| `scripts/recategorize_raciocinio_8.mjs` | OBSOLETO | Script de execução única que gerava `backup_before_recategorize_rlm_8.json` |
| `scripts/update_6_syllabus_blocks.mjs` | OBSOLETO | Script pontual de migração já consolidada no dataset canônico |

## 3. Scripts Locais Windows PowerShell / Batch da Fase de 31 Aulas Removidos (65 arquivos)

Foram removidos os 64 arquivos `scripts/*.ps1` (`build_aula_04.ps1` a `build_aula_29.ps1`, `clean_aula_29.ps1`, `fix_aula_29.ps1`, `check_JS.ps1`, `debug_browser.ps1`, `gen_app_data.ps1`, `parse_edital.ps1`, `rebuild_all.ps1`, `sync_31_lessons.ps1`, `update_lessons_18_to_31.ps1`, `verify_all.ps1`, etc.) e `scripts/test_chrome.bat`, classificados como **OBSOLETO / NÃO UTILIZADO**, pois continham caminhos locais fixos do Windows (`C:\Users\Diego\...`) e pertenciam à antiga estrutura de 31 aulas.

## 4. Arquivos de Dados Desduplicados (Mantidos e Otimizados)

| Arquivo | Antes | Depois | Ação Executada |
| :--- | :---: | :---: | :--- |
| `data/aulas.json` | 8,12 MB | 33,0 KB | Substituída a duplicata integral de `app_data.json` por um índice leve das 49 aulas com contagens e hashes SHA-256 |
| `data/materias.json` | Defasado (32 aulas) | Atualizado (49 aulas) | Sincronizado com a distribuição real (`esp: 10`, `leg: 7`, `por: 18`, `rlm: 8`, `atu: 6`) |

## 5. Consolidação dos Arquivos Markdown em `content/aulas-49/`

| Diretório Original | Diretório Consolidado | Justificativa Técnica e Estrutural |
| :--- | :--- | :--- |
| `content/*.md` (arquivos dispersos da fase de 32 aulas: `esp_1.md`..`esp_10.md`, `leg_1.md`..`leg_7.md`, etc.) | `content/aulas-49/*.md` (exatamente 49 arquivos padronizados com numeração sequencial 1 a 49) | Consolidação dos 49 cadernos didáticos na pasta canônica `content/aulas-49/`, permitindo saneamento da raiz de `content/` que agora mantém apenas subdiretórios temáticos (`aprofundamento/`, `complementos/`, `fontes-oficiais/`, `revisao/`) e os gabaritos de apoio (`fichas_14_endemias_liraa_roedores.md`, `_TEMPLATE_NOVA_AULA.md`). |

## 6. Substituição de Scripts de Pipeline Legado (Python -> TypeScript)

| Arquivo / Script Legado | Substituto Canônico | Justificativa Técnica |
| :--- | :--- | :--- |
| `scripts/md_to_app_data.py` | `scripts/sync_all_data.ts` (`npm run sync:data`) | Migração do compilador/injetor de Python externo para pipeline TypeScript nativo integrado ao Node.js com `tsx`, garantindo total tipagem com os contratos de `src/types/index.ts`, validação de integridade referencial, renumeração determinística 1..49 e sincronização multi-alvo (`data/app_data.json`, `data/lessons/*.json`, `data/manifest.json`, `content/aulas-49/*.md`). |
