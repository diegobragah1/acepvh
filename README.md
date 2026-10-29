# Plataforma Integrada de Estudos ACEPVH — Concurso SEMUSA Porto Velho/RO 2026 (Banca IBGP)

Aplicação React + TypeScript + Vite + Tailwind CSS para preparação ao cargo de **Agente de Combate às Endemias (ACE — Códigos 340 a 356)** da **Secretaria Municipal de Saúde de Porto Velho/RO (SEMUSA)**, regido pelo **Edital Normativo nº 25/2026** consolidado até a **Retificação nº 01 (Edital nº 28/2026 — Banca IBGP)**.

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

## 2. Tecnologias & Arquitetura

O projeto foi reescrito como uma Single Page Application (SPA) em **React 18** com **TypeScript** e **Vite**:

- **React 18 & TypeScript**: Componentes tipados, hooks e Context API para persistência em `localStorage`.
- **Tailwind CSS**: Estilização moderna e responsiva mantendo a identidade visual do edital.
- **Vite**: Bundler ultra-rápido com suporte a HMR e dev server configurado na porta 3000 (`0.0.0.0:3000`).
- **Animações 3D**: Flashcards com rotação 3D interativa.
- **Calculadoras Técnicas**:
  - Calculadora Entomológica LIRAa (IIP e IB com classificação MS).
  - Calculadora de Cubagem de Reservatórios (Retangular e Cilíndrico) com dosagem de larvicidas (Espinosade, Piriproxifeno, Bti) e EPIs (NR-6 / Lei 11.350/06).
- **Importação & Exportação JSON**: Backup de progresso para transferência entre dispositivos.

---

## 3. Scripts de Execução

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento (porta 3000)
npm run dev

# Compilar para produção
npm run build

# Pré-visualizar build de produção
npm run preview
```
