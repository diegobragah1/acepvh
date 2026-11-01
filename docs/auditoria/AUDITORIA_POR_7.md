# Auditoria individual — por_7, Coesão e coerência textual

Estado: **PARCIAL**, sem certificação integral. Lote: `COESAO_SINTAXE_2026-10-31`. A base exata e os hashes dos componentes lidos estão em [BASE_COESAO_SINTAXE.json](BASE_COESAO_SINTAXE.json). Índices abaixo começam em zero.

## Escopo efetivamente lido

Três blocos principais, modos A/B, as duas versões Markdown existentes no bloco 0, mapa completo, oito cartões e seis questões com todas as alternativas e comentários. Também foi lido o complemento `por_7` de `src/data/deepening/portugues.ts`: teoria, resumo, duas questões, um cartão e referências. Total examinado: oito questões e nove cartões. O complemento é acrescentado em runtime; não integra a contagem bruta dos três blocos JSON.

## Achados localizados

| Local | Achado e consequência | Encaminhamento |
| --- | --- | --- |
| `blocks[0].modoA`, objetivos; versão Markdown | Anuncia Aula 19 e agrupa assuntos atualmente distribuídos às aulas 1, 6 e 7. A lista de princípios contém «Não Tautologia», enquanto mapa e bloco 2 apresentam repetição, progressão, não contradição e relação como metarregras de Charolles. Há duas enumerações sem explicar a relação entre elas. | Ajustar a identidade da aula, distinguir critérios didáticos e modelo atribuído a autor, conferir a atribuição na fonte original. |
| `blocks[0].modoA`, estudo de caso | A diferença entre vetores de duas doenças é articulada por «conquanto». A retomada por esta/aquela pode ser analisada, mas a expectativa contrariada que justificaria a concessão não é explicitada. O texto ainda assegura correção científica de 100% sem demonstrar protocolo ou fonte específica. | Substituir o cenário ou explicitar a expectativa discursiva; avaliar a referência pronominal separadamente da informação epidemiológica. |
| `blocks[0..1].modoA/B`, tabela de demonstrativos; `blocks[1].flashcards[0]`; mapa, ramo 0 | A classificação é apresentada como tabela este=catáfora, esse=anáfora; o próprio material usa este para retomar o último de dois antecedentes, também anaforicamente. O cartão do bloco 0 contém essa ressalva, o do bloco 1 não. | Identificar primeiro a direção da referência em cada ocorrência e apresentar as formas como convenções de uso, sem transformar a forma isolada em diagnóstico. |
| `blocks[1].modoA`, título «Anáfora vs. Catáfora vs. Deixis» | A tabela desenvolve retomada e antecipação, mas não fornece análise correspondente de dêixis com locutor, interlocutor, tempo e lugar da enunciação. | Desenvolver contraste com referência ao contexto extralinguístico ou ajustar a promessa do título. |
| `blocks[0..1].modoA/B`, conectivos | «Pois antes do verbo» é usado como diagnóstico suficiente de explicação; «como» causal vem com «sempre no início do período». São atalhos sem delimitação da oração relevante nem discussão de estruturas encaixadas. «Ao passo que» é listado como proporcional sem contraste com leitura adversativa. | Confrontar exemplos completos e distinguir posição, sintaxe e relação discursiva; não resolver pelo conectivo isolado. |
| `blocks[1].modoA`, concessivas | «A despeito de» aparece em quadro de conjunções sem esclarecer a construção nominal/infinitiva e sua diferença de «a despeito de que». A substituição por «embora» não é uma troca mecânica mantendo a mesma sintaxe. | Reescrever exemplos pareados com os ajustes necessários de construção verbal. O complemento de `por_6` já faz ressalva semelhante, mas uma remissão não a substitui nesta tabela. |
| Mapa, ramo 1; `blocks[2].modoA`; complemento | Coesão lexical e elipse são anunciadas, mas recebem menos desenvolvimento nos blocos principais que a lista de conectivos. O complemento fornece retomada lexical, ambiguidade, progressão e reescrita e melhora o equilíbrio. | Ampliar exemplos de cadeias referenciais e elipse recuperável, além de atividades de reescrita com justificativa. |
| `blocks[1].modoA`, pressupostos | «Pressuposto inegável» e «decorre obrigatoriamente» são formulados sem delimitar a leitura convencional do enunciado. A lista mistura gatilhos de naturezas diferentes. | Explicar o diagnóstico em enunciados e contextos definidos, com contraste entre conteúdo posto, pressuposto e inferência cancelável; não declarar que uma lista resolve todos os usos. |
| `blocks[0].modoA`, aprofundamento; `blocks[1].flashcards[3]`; rótulos de questões | Há atribuições de comportamento à IBGP e enunciados «IBGP — Inédita 2026» sem prova/caderno/questão identificados. Os cenários sanitários não comprovam fatos ou protocolos. | Autenticar cada origem ou manter origem não demonstrada; não reclassificar automaticamente como autoral. |

## Conferência das questões e dos distratores

Conferência editorial interna, sem autenticação da banca e sem nova certificação epidemiológica. Letras indicam a posição da alternativa, mesmo quando o texto não traz prefixo.

| Local | Gabarito atual | Fundamentação e limites |
| --- | --- | --- |
| `blocks[0].questions[0]` | B | «Conquanto» introduz concessão; A oferece causa, C proporção e D condição. O contraste entre obstáculo e realização das visitas é construído no período. |
| `blocks[1].questions[0]` | B | Este retoma Lutzomyia, último dos dois antecedentes; aquele retoma Aedes. A inverte a ordem, C/D escolhem nomes que não correspondem à retomada proposta. Não se certifica a distribuição geográfica das espécies pela análise gramatical. |
| `blocks[1].questions[1]` | B | A leitura concessiva de «posto que» é sustentada pelo subjuntivo e pela relação entre aumento da chuva e recuo mencionado. A não mantém essa relação; C é conclusão; D proporção. A relação epidemiológica e a atribuição do resultado aos agentes permanecem hipotéticas/não demonstradas. |
| `blocks[1].questions[2]` | B | «Não apenas… mas também» acrescenta termos; inclusive reforça inclusão. A/C/D não descrevem essa articulação. A coordenação entre comércios e terrenos é redacionalmente pouco clara; convém ajustar o paralelismo, sem afirmar erro de gabarito. |
| `blocks[1].questions[3]` | B | «À proporção que» explicita variação concomitante; não é concessão, finalidade ou causa por si só. A frase não constitui evidência de causalidade sanitária. |
| `blocks[2].questions[0]` | B, com ressalva | Na leitura isolada pedida, limpeza e ausência de focos não fornecem a expectativa contrariada anunciada por embora. A/C/D admitem as relações causal/condicional apresentadas. O comentário corretamente admite contexto que legitime B; a conclusão depende dessa restrição, não de impossibilidade gramatical. |
| Complemento, `questions[0]` | B | O conector não elimina a incompatibilidade entre as afirmações no mesmo recorte; adjetivos, tamanho de palavras e presença de verbos não resolvem o defeito. |
| Complemento, `questions[1]` | C | Repetir Ana identifica a responsável. A deixa o agente indeterminado, B/D conservam ou agravam a imprecisão. A reescrita escolhe uma interpretação possível; não prova que o original já atribuía a ação a Ana. |

Não foi identificado gabarito inequivocamente errado nessas oito questões sob as leituras delimitadas. Isso não significa validação integral. Predominam reconhecimento de conectivos e identificação imediata; faltam tarefas de produção/revisão de parágrafos, cadeias referenciais mais extensas e comparação de leituras com contexto adicional.

## Fontes, evidências e pendências

Foram lidos os materiais locais acima, inclusive as referências cadastradas 95–97. Índices da BNCC/Inep e página de serviço do Manual da Presidência não comprovam consulta a uma seção específica nem a origem da classificação de Charolles.

Tentativas nesta etapa: [Senado, pronomes demonstrativos](https://www12.senado.leg.br/manualdecomunicacao/estilos/pronomes-demonstrativos), [CEALE/UFMG, coesão textual](https://www.ceale.fae.ufmg.br/glossarioceale/verbetes/coesao-textual) e [coerência textual](https://www.ceale.fae.ufmg.br/glossarioceale/verbetes/coerencia-textual). As três requisições foram bloqueadas pelo proxy com HTTP 403 antes da leitura. São destinos tentados, **não fontes consultadas**; disponibilidade e conteúdo dessas páginas não foram confirmados.

Permanecem: confronto com fontes integrais, reconferência do Anexo IV/retificações, correção dos achados, revisão de origem das questões e inspeção visual desktop/mobile. As evidências estruturadas mantêm `evidenciaFonte` e `exerciciosValidados` vazios e o estado PENDENTE. Nenhum conteúdo, identificador ou progresso do estudante foi alterado neste lote.
