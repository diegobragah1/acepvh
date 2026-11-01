# Validação — registro parcial, missão aberta

Continuação: [LOTE_PROBABILIDADE.md](LOTE_PROBABILIDADE.md). Quatro blocos principais de rlm_8 revisados, 13 questões e três cartões acrescentados; 18 recortes com evidências. 36 testes, TypeScript e build aprovados; auditoria estrutural sem ocorrências (594 questões e 659 cartões na plataforma). Inspeção visual detalhada permanece pendente após indisponibilidade da ferramenta de navegador. Sem envio ou publicação.

Retomada local posterior ao PR 8: ver [RETOMADA_2026-10-31.md](RETOMADA_2026-10-31.md) para correções transversais, verificações atuais e limites. Os números abaixo descrevem as etapas históricas indicadas, não uma certificação da versão atual.

**Não é um certificado final.** Base: main 526355bb579ccebd048c6fead564eb0f2ede37a8.

| Critério | Resultado desta etapa |
| --- | --- |
| Aulas inventariadas | 49 |
| Fichas individuais de acompanhamento | 49 |
| Recortes iniciais da matriz | 357; decomposição ainda incompleta |
| Aulas integralmente auditadas sob todos os novos critérios | 0 |
| Aulas corrigidas nesta etapa | 1: por_2, correção parcial |
| Aulas integralmente validadas | 0 |
| Testes automatizados | 31 aprovados, 0 falhas |
| Auditoria estrutural | 0 ocorrências; não é auditoria factual |
| TypeScript e build | Aprovados; permanece aviso de tamanho do bundle |
| Publicação estática | Estilos de 16 fundos, KaTeX e cópias dos bundles verificados |
| Inspeção visual de todas as aulas/mobile | Pendente |
| Documentos externos e retificações | Reconferência completa pendente |

Comandos executados: `npm run check`; `npm run build`; `node --import tsx scripts/start_integral_audit.ts`. O gerador verifica pré-condições de evidência antes de admitir VALIDADO, mas a existência de quatro campos preenchidos não comprova a qualidade ou veracidade dessas evidências: exige revisão humana/técnica da linha.

Correção desta etapa em por_2: retirada da universalidade das cinco categorias; distinção entre gênero, suporte e sequências coexistentes; situações autorais analisadas sem dados epidemiológicos apresentados como reais; atribuições IBGP não autenticadas identificadas nos enunciados. IDs, ordem e gabaritos preservados. Fontes 117–118, CEALE/UFMG. Script: scripts/review_text_types.ts.

Pendências críticas: revisão integral de todas as aulas segundo a nova matriz; decomposição fina de leis e itens abertos; conferência de todas as alternativas e comentários; protocolos e exemplos factuais; exercícios progressivos; fontes originais; links; visualização e consistência entre recursos. A fonte cadastrada e o inventário de questões não são evidência de ensino ou de aplicação daquela subcompetência.

## Continuação após a integração do PR 7

Aula 18: leitura integral dos dois blocos, mapa, resumos, cartões e quatro questões antigas; exposição desenvolvida e seis questões acrescentadas. Permanece PARCIAL. Evidências em LOTE_VARIACAO.md e por_18_evidencias.json. A aula 1 também permanece PARCIAL. O gerador agora preserva os dois arquivos de evidência ao reconstruir a matriz.

Validação deste lote: 31 testes aprovados, 0 falhas; auditoria estrutural sem ocorrências; TypeScript e build aprovados; estilos, matemática e cópias estáticas verificados. Aviso de tamanho do bundle mantido. Inspeção visual e certificação de integralidade continuam pendentes.

Triagem transversal: 49 aulas examinadas automaticamente em teoria/resumo; 56 candidatos a alegações sobre banca em 26 aulas, não erros confirmados. Localizadores em ALEGACOES_BANCA.json. O total de aulas integralmente validadas segue zero.
