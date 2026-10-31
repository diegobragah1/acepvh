# Fechamentos documentais e técnicos — 31/10/2026

Esta etapa fecha os pontos discriminados abaixo. **A revisão factual integral das 49 aulas continua incompleta.** Não houve aprovação automática dos 341 requisitos por presença de palavras nem aprovação de questões/cartões não examinados. O relatório individual permanece em [REVISAO_INTEGRAL_49.md](REVISAO_INTEGRAL_49.md).

| Fechamento | Alteração na plataforma | Evidência e alcance |
| --- | --- | --- |
| Quadros com texto branco ilegível | Incluído o HTML de `data/app_data.json` na extração de classes Tailwind | Defeito observado na plataforma publicada. O build verifica que todos os fundos coloridos presentes no HTML das 49 aulas têm regras CSS e que as cópias estáticas são idênticas. |
| Busca/cloze e fórmulas | Proteção também dos spans KaTeX já renderizados antes de aplicar as ferramentas de leitura | Teste de ida e volta sem alteração de MathML, em fórmulas inline e destacadas. Não certifica a correção matemática de uma expressão. |
| Constituição atualizada para ACS/ACE | Inciso IV e §§ 4º-A e 4º-B do art. 198; § 10; regra permanente e transições previdenciárias diferenciadas | [EC 140/2026 — Senado](https://legis.senado.leg.br/norma/44187742/publicacao/44190103), arts. 1º–14, publicada em 16/10/2026. Atualizados teoria, resumo, mapa, cartão e descrição do programa relacionados. |
| Relação entre lei e Constituição | Corrigida explicação do art. 8º da Lei 11.350 após a EC 140 | A menção infraconstitucional à CLT não foi tratada como suficiente para definir o regime atual, sem considerar o novo § 4º-B e a disciplina de regularização. |
| Texto da PNAB ausente | Portaria 2.436 e anexo original inseridos na teoria principal de esp_5, preservados os exercícios | 649 parágrafos extraídos do [Ministério da Saúde](https://bvsms.saude.gov.br/bvs/saudelegis/gm/2017/prt2436_22_09_2017.html); hashes em [IMPORTACAO_PNAB.json](IMPORTACAO_PNAB.json). Publicação original de **21/09/2017**, distinguida de normas posteriores, como eMulti/2023. |
| LOM e estatutos municipais: confronto do texto | Referências atuais do SAPL vinculadas; confronto de cada unidade atual recuperada com a teoria | [CONFRONTO_MUNICIPAL.json](CONFRONTO_MUNICIPAL.json): LOM, LC 385, LC 390 e LC 391. Excluídas redações históricas marcadas como desativadas. Diferenças localizadas em preâmbulo, agrupamento de título e assinaturas, sem unidade dispositiva não localizada pelo método. |
| LAI municipal confundida com LGPD | Reescrito leg_7/bloco 2; removido o resumo municipal equivocado do bloco de textos legais | [Decreto 14.565/2017 — SAPL](https://sapl.portovelho.ro.leg.br/norma/8889): resposta e prorrogação, arts. 15–16; recursos e reclamação, arts. 21–24; classificação, arts. 26–30. [Decreto 18.310/2022](https://sapl.portovelho.ro.leg.br/ta/10567/text) é o diploma de LGPD. |
| LAI estadual: âmbito e alteração posterior | Corrigida a transposição da lista federal de Poderes à redação estadual e incluída alteração de 2026 | Lei RO 3.166, arts. 1º–2º; [Lei 6.385/2026](https://sapl.al.ro.leg.br/norma/13830), alteração dos arts. 21–24. As publicações originais estadual, modificadora e municipal foram incorporadas como textos de referência, com hashes em [IMPORTACAO_LAI.json](IMPORTACAO_LAI.json). |
| Rótulos e fontes contraditórios | Contagem dinâmica da biblioteca; fontes oficiais identificadas como documentos, sem chamar toda página de PDF | Corrigidos os IDs indicados na biblioteca, a remissão de médias/sistemas para rlm_4 e os rótulos que afirmavam lacunas “sanadas” sem evidência. A descrição de esp_3 já não ensina 30h/10h ou curso mínimo bienal de 200h como regras atuais. |
| Generalizações editoriais repetidas | Retiradas formulações específicas sobre frequência universal da banca, número fixo de tipos textuais e definição restritiva de elipse | Correções limitadas às formulações identificadas; não constituem revisão integral de Português. Enunciados e gabaritos não foram alterados automaticamente por essas substituições. |

## O que o confronto municipal prova

O script percorreu as unidades textuais atuais disponíveis no HTML do SAPL, excluiu as históricas desativadas e procurou cada texto normalizado na teoria principal das aulas leg_1, leg_2 e leg_3. A normalização elimina acentos, espaços e pontuação: por isso o resultado prova presença textual aproximada, **não identidade literal de pontuação, interpretação correta, exatidão de comentários ou gabaritos**. Os relatórios preservam identificadores e hashes para rastreabilidade.

Não se confundem esses resultados com uma aprovação jurídica de toda a apostila. Tabelas, vantagens, exemplos, remissões e questões podem exigir conferência própria, mesmo quando o texto normativo está presente.

## Validação e reprodução

- `npm run check`: testes e tipagem, com regressões de fórmulas, progresso, atualização constitucional e LAI.
- `npm run audit:curriculum`: relatório das 49 aulas, mantendo distinta a triagem textual e a aprovação documental.
- `npm run build`: inclui verificação de estilos da base, fontes matemáticas incorporadas e sincronização das duas cópias estáticas.
- Importações normativas: `python scripts/import_pnab.py` e `python scripts/import_lai_pdf.py`. Requerem Poppler (`pdftotext`) e `python -m pip install -r scripts/requirements-audit.txt`.
- Aplicação das correções: `node --import tsx scripts/close_findings.ts`.
- Confronto municipal: `python scripts/confront_municipal.py`. O parâmetro `--cache-dir` permite reproduzir a comparação com os HTML previamente baixados; os hashes identificam a fonte usada.
- Os textos normativos foram obtidos de fontes públicas oficiais. Não foram copiados novos capítulos de apostilas privadas.

## Limites que não foram artificialmente fechados

Não foi concluída a leitura e validação documental de todas as afirmações, comentários, cartões e questões de todas as disciplinas. Permanecem especialmente relevantes os protocolos das 14 doenças, versões dos demais diplomas legais, a revisão integral de Português, atualidades em todas as escalas e a autenticação de questões atribuídas a bancas.

A inspeção visual da publicação identificou o defeito de contraste. A correção do build tem verificação automatizada; a validação visual da nova versão, após sua publicação, ainda deve ser distinguida dessa evidência. A prévia local não estava acessível pelo navegador remoto, que retornou exigência de token de acesso.
