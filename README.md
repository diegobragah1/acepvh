# Plataforma Integrada de Estudos ACEPVH — Concurso SEMUSA Porto Velho/RO 2026 (Banca IBGP)

Repositório oficial da plataforma interativa e da base educacional estruturada em Markdown (`.md`) para preparação ao cargo de **Agente de Combate às Endemias (ACE — Códigos 340 a 356)** da **Secretaria Municipal de Saúde de Porto Velho/RO (SEMUSA)**, regido pelo **Edital Normativo nº 25/2026** consolidado até a **Retificação nº 01 (Edital nº 28/2026 — Banca IBGP)**.

- 🌐 **Aplicação Publicada (GitHub Pages):** [https://diegobragah1.github.io/acepvh/](https://diegobragah1.github.io/acepvh/)
- 💻 **Repositório GitHub:** [https://github.com/diegobragah1/acepvh](https://github.com/diegobragah1/acepvh)
- 📁 **Acervo de 85 Apostilas no Google Drive:** [Pasta CONCURSO SEMUSA](https://drive.google.com/drive/folders/1L8bvMQeMBoqE9o-HacSqYsa0sujn8OBK)
- 🤖 **Caderno de Auditoria no NotebookLM:** [Caderno ACE SEMUSA 2026](https://notebooklm.google.com/notebook/2bd0b85d-ab28-4bd7-82b1-512d85ab1021)

---

## 1. Destaques e Números do Projeto

| Indicador | Quantidade / Detalhe | Descrição e Cobertura |
| :--- | :---: | :--- |
| **Vagas Totais** | **140 Vagas** | 40 imediatas + 100 cadastro de reserva (Cód. 340 Urbano: 96 vagas; Códs. 341 a 356 Distritos: 44 vagas) |
| **Vencimento Base** | **R$ 3.242,00** | Jornada de 40 horas semanais com adicional de insalubridade e benefícios da LC 391/2010 |
| **Estrutura da Prova** | **50 Questões (Peso 2,0 = 100 pts)** | 15 Específicos (30 pts), 10 Legislação (20 pts), 10 Português (20 pts), 10 RLM (20 pts) e 5 Gerais (10 pts) |
| **Aulas Estruturadas** | **32 Aulas** | 100% dos tópicos do Edital convertidos em Markdown com Modos A (Teoria), B (Resumo) e C (Questões) |
| **Banco de Questões** | **207 Questões** | Todas com 4 alternativas (A, B, C, D) e gabarito integralmente comentado |
| **Flashcards Ativos** | **246 Flashcards** | Revisão ativa com efeito 3D em grade responsiva |
| **Fichas de Endemias** | **14 Doenças do Anexo IV** | Guias com vetores, reservatórios, sintomas, exames, LIRAa (A1 a E) e controle de roedores |
| **Fontes Oficiais Conectadas** | **94 Documentos** | 85 apostilas em PDF do Google Drive + 9 diplomas legais oficiais da IBGP, ALE-RO e SAPL |

---

## 2. Arquitetura do Repositório e Estrutura de Arquivos

O projeto adota uma arquitetura modularizada e independente de frameworks pesados, garantindo carregamento ultrarrápido via GitHub Pages e compatibilidade total com visualizadores Markdown como Obsidian, Notion e VS Code:

```text
acepvh/
├── index.html                                     # Interface SPA responsiva (6 abas, Tailwind CSS, modais de backup)
├── css/
│   └── style.css                                  # Estilos customizados, grid 3D de flashcards e visualizador .md
├── js/
│   └── app.js                                     # Lógica da SPA: navegação, simulado, busca, localStorage e fetch()
├── data/
│   ├── materias.json                              # Índice das 5 disciplinas oficiais (pesos, pontos, pastas e aulas)
│   ├── aulas.json                                 # Índice automático das 32 aulas com metadados e caminhos
│   └── app_data.json                              # Base consolidada de dados (cargos, fontes, 32 aulas, endemias, matriz)
├── content/
│   ├── conhecimentos-especificos/                 # 10 aulas de Saúde Coletiva e Específicos ACE (esp_1 a esp_10)
│   │   ├── 01-cf88-seguridade-saude-evolucao-historica-pnps.md
│   │   ├── ...
│   │   └── 32-calculos-operacionais-cubagem-diluicao-larvicidas-biosseguranca-rg.md
│   ├── legislacao/                                # 7 aulas de Legislação Municipal PVH, CF/88, PcD, Licitações e LAI
│   │   └── 10-lei-organica-municipio-porto-velho-lom-pvh.md a 16-lei-acesso-informacao-lai...
│   ├── portugues/                                 # 6 aulas de Língua Portuguesa (por_1 a por_6 / aulas 17 a 22)
│   ├── raciocinio-logico/                         # 6 aulas de RLM (rlm_1 a rlm_6 / aulas 23 a 28)
│   ├── conhecimentos-gerais/                      # 3 aulas de História/Geografia de PVH/RO, SIG e Atualidades (atu_1 a atu_3)
│   ├── esp_1.md ... esp_10.md                     # Cópias de atalho direto para retrocompatibilidade
│   ├── leg_1.md ... leg_7.md
│   ├── por_1.md ... por_6.md
│   ├── rlm_1.md ... rlm_6.md
│   ├── atu_1.md ... atu_3.md
│   ├── catalogo_94_fontes_edital.md               # Inventário analítico das 85 apostilas + 9 normas oficiais
│   ├── fichas_14_endemias_liraa_roedores.md       # Fichas técnicas completas das 14 endemias e fórmulas LIRAa
│   └── _TEMPLATE_NOVA_AULA.md                     # Modelo padrão para criação de novas aulas em Markdown
├── sources/
│   └── fontes.md                                  # Inventário detalhado de todos os 94 PDFs e referências verificáveis
├── scripts/
│   ├── md_to_app_data.py                          # Compilador Python para sincronizar .md -> data/app_data.json
│   ├── validate_project.py                        # Suíte de testes automatizados de integridade (Python)
│   └── validate_project.ps1                       # Suíte de testes automatizados nativa para Windows (PowerShell)
├── 00_INDEX_ARQUITETURA_DADOS.md                  # Especificação técnica do schema de dados e catálogo mestre
└── README.md                                      # Guia completo de arquitetura, testes e expansão
```

---

## 3. Guia de Manutenção e Expansão

### 3.1 Como Criar ou Expandir uma Aula em Markdown (`.md`)
1. Copie o arquivo `./content/_TEMPLATE_NOVA_AULA.md` para a subpasta temática correspondente em `./content/<materia>/` (ou edite o arquivo correspondente).
2. Configure o cabeçalho **YAML Frontmatter** no início do documento:
   ```yaml
   ---
   id: "esp_11"
   slug: "33-novo-topico-ace"
   num: 33
   cat: "esp" # esp | leg | por | rlm | atu
   catName: "Conhecimentos Específicos (Saúde Coletiva & ACE)"
   weight: "15 Questões • Peso 2 (30 pts)"
   title: "33. Novo Tópico de Saúde Pública"
   editalRef: "Anexo IV — Conhecimentos Específicos ACE"
   auditBadge: "AUDITADO"
   sources: [55, 86, 91]
   ---
   ```
3. Desenvolva o conteúdo didático nos 3 modos pedagógicos:
   - **Modo A:** Teoria aprofundada, embasamento legal, quadros conceituais e tabelas.
   - **Modo B:** Resumo esquemático, mnemônicos e alertas de pegadinhas frequentes da banca.
   - **Modo C:** Questões inéditas no padrão IBGP (4 alternativas: A, B, C, D) com gabarito comentado + Flashcards de memorização.
4. Finalize o bloco com a seção ````json ... ```` para injeção contínua.

### 3.2 Como Sincronizar os Dados com a Aplicação
Após criar ou editar arquivos `.md`, execute o sincronizador para atualizar `data/app_data.json` e `data/aulas.json`:

```bash
# Via Python:
python3 ./scripts/md_to_app_data.py --content-dir ./content --data-dir ./data
```

### 3.3 Como Executar os Testes Automatizados de Integridade

O projeto possui suítes de validação que verificam:
- A existência e o tamanho de todos os arquivos obrigatórios;
- A contagem exata das 32 aulas e dos 64 arquivos Markdown;
- O padrão estrito de 4 alternativas (A–D) e gabarito válido de 100% das questões;
- O inventário das 94 fontes, 14 endemias, 16 cargos e matriz do edital;
- A integridade dos caminhos relativos (`./`) para publicação no GitHub Pages.

Execute no terminal:

```bash
# No Windows (sem dependências, nativo em PowerShell):
powershell -ExecutionPolicy Bypass -File ./scripts/validate_project.ps1

# No Linux / macOS / WSL (via Python):
python3 ./scripts/validate_project.py .
```

---

## 4. Como Executar Localmente

Como a aplicação é uma Single-Page Application (SPA) que realiza requisições assíncronas para `./data/app_data.json` e arquivos `.md`, utilize um servidor HTTP local simples:

```bash
# Opção 1: Via Python
python3 -m http.server 8000

# Opção 2: Via extensão "Live Server" no VS Code
# Clique com o botão direito em index.html -> "Open with Live Server"

# Opção 3: No terminal PowerShell do Windows
# Abra o navegador em: http://localhost:8000
```

---

## 5. Publicação no GitHub Pages e Google Sites

1. **GitHub Pages:**
   - Faça commit e push das alterações para a branch `main`:
     ```bash
     git add .
     git commit -m "docs: atualizacao da documentacao e integridade do projeto"
     git push origin main
     ```
   - No GitHub, acerte em **Settings &rarr; Pages &rarr; Source: Deploy from a branch (`main` / root)**.
   - Acesse imediatamente em: `https://diegobragah1.github.io/acepvh/`

2. **Google Sites:**
   - Abra a aplicação publicada ou local;
   - Clique no botão **"📋 Copiar Código HTML p/ Google Sites"** no cabeçalho;
   - No editor do Google Sites, clique em **Incorporar &rarr; Incorporar Código &rarr; Cole (Ctrl+V) &rarr; Publicar**.

---

## 6. Licença e Créditos

Base educacional elaborada para o concurso público SEMUSA Porto Velho/RO 2026. Materiais normativos e fontes oficiais pertencem aos seus respectivos órgãos públicos emissores (Prefeitura de Porto Velho, Ministério da Saúde, IBGP Concursos).
