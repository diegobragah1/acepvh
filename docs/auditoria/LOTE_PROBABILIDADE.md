# Revisão de probabilidade e raciocínio sequencial

Continuidade: corrigida também a remissão de probabilidade em rlm_7, que confundia sorteios sucessivos com independência e mandava diminuir todo numerador sem reposição. Script: scripts/review_probability_crossrefs.mjs. A conferência scripts/review_rlm_answers.ts foi ampliada com memória própria das 13 questões novas, mantendo os controles de quantidade exata; 113 questões principais conferidas. Após as correções cruzadas, 36 testes e TypeScript passaram. A revisão integral de rlm_7 permanece pendente.

Leitura realizada dos quatro blocos principais de rlm_8, seus resumos, mapa, 14 cartões originais, 11 questões originais e do complemento em src/data/deepening/matematica.ts (duas questões e dois cartões). A revisão não certifica as outras 48 aulas.

## Correções e desenvolvimento

- Corrigida a multiplicação incondicional de probabilidades nos resumos e mapa: o produto simples exige independência; a regra geral usa probabilidade condicional.
- Explicitada a equiprobabilidade para razões de contagens, inclusive em cartões de condicionamento.
- Corrigida a afirmação de que todo numerador diminui sem reposição: retirar azul não reduz a quantidade de verdes.
- Desenvolvidas união inclusiva, exatamente um, complementar, condição inversa e caminhos em ordens diferentes.
- Demonstradas as condições de mínimo do princípio das gavetas, considerando estoques limitados e distinguindo alguma categoria de cada categoria.
- Corrigida a regra secular de anos bissextos e explicitada a contagem inclusiva de datas.
- Desenvolvidos linha aberta, circuito fechado e distâncias não divisíveis pelo espaçamento.
- Corrigida a fórmula de subida com recuo, com teto, caso de chegada no primeiro dia e restrições do modelo.
- Substituído o formulário repetido de PA/PG/contagem por problemas resolvidos; a contagem permanece referenciada à aula 7. Exemplos corretos de anagramas e de estoques foram preservados e explicados.

Os textos editáveis estão em content/revisao/rlm_8_1.md a rlm_8_4.md. Integração: scripts/review_probability.ts. HTML e Markdown, resumos, mapa e cartões foram sincronizados. As 11 questões antigas mantêm posições, alternativas, gabaritos e revisões; comentários foram ampliados. Atribuições não comprovadas à IBGP passaram a indicar origem não autenticada, sem inventar autoria. Foram acrescentadas 13 questões autorais e três cartões. Total normalizado da aula: 26 questões e 19 cartões.

## Conferência dos exercícios anteriores

| Bloco/questão (índices iniciados em zero) | Resultado conferido |
|---|---|
| 0/0 | União: (7+5−2)/30=1/3, B |
| 0/1 | Sem reposição: (6/10)(5/9)=1/3, A |
| 0/2 | Complementar sob independência: 1−0,6×0,7=58%, A |
| 0/3 | Cinco pares com soma oito entre 36, B |
| 1/0 | Condicional: 15/20=75%, C |
| 1/1 | DENGUE: 6!/2!=360, B |
| 2/0 | Doze meses, três pessoas por mês ainda não garantem quatro: 37, C |
| 2/1 | Doze verdes ainda podem ter a mesma cor; treze garantem outra: B |
| 3/0 | Cem dias têm resto dois por sete: terça-feira, B |
| 3/1 | 14+19−1=32 pessoas, B |
| 3/2 | 600/25+1=25 pontos, C |
| Complemento/0 | (3/5)(2/4)=3/10, A |
| Complemento/1 | Segunda mais trinta dias: quarta-feira, C |

As novas questões e suas justificativas individuais estão no script de integração e em rlm_8_evidencias.json. Os testes enumeram resultados elementares e todas as composições viáveis dos estoques, além de simular a subida e contar pontos distintos de um circuito.

## Fontes efetivamente consultadas

- Anexo IV, Retificação 01, página 3: conferido o trecho de probabilidade em espaços finitos e resolução de problemas lógicos/sequenciais. URL cadastrada como fonte 91. Isso não comprova ausência de retificações posteriores.
- [OpenStax, seção 3.1](https://openstax.org/books/introductory-statistics/pages/3-1-terminology): terminologia de experimento, espaço e evento.
- [OpenStax, seção 3.2](https://openstax.org/books/introductory-statistics/pages/3-2-independent-and-mutually-exclusive-events): independência e exclusão mútua.
- [OpenStax, seção 3.3](https://openstax.org/books/introductory-statistics/pages/3-3-two-basic-rules-of-probability): regras de adição e multiplicação.
- [US Naval Observatory](https://aa.usno.navy.mil/faq/leap_years): regra gregoriana e exceções seculares.
- David Guichard, Combinatorics and Graph Theory, seção 1.7, edição disponível no Mathematics LibreTexts: princípio das gavetas e generalização. URL completa cadastrada como fonte 126. A tentativa de abrir a versão no domínio Whitman falhou; não é registrada como consulta bem-sucedida.

Consulta em 31/10/2026. Exemplos e derivações de intervalos e subida são próprios; a fonte de calendário não fundamenta esses outros modelos.

## Evidências, testes e limites

Dezoito recortes individuais foram registrados como ADEQUADO, com validação pendente, em rlm_8_evidencias.json. A matriz foi regenerada com 370 linhas. Nenhuma aula foi automaticamente promovida a VALIDADO.

Corrigido também um defeito do gerador: pendências críticas persistidas eram substituídas por uma lista vazia antes da validação. Agora são preservadas; evidências sem linha correspondente ou com identidade incompatível provocam erro, e arquivos de evidência de todas as disciplinas são carregados.

36 testes passaram, incluindo cinco novos testes de preservação de evidências e de resultados matemáticos independentes. TypeScript passou. O navegador local carregou a plataforma, exibindo a aula com 26 questões e 19 cartões. A conferência visual detalhada não foi concluída: a ferramenta de navegador retornou `browser.user is unavailable` na continuidade. Não há aprovação visual desktop/mobile nem certificação integral da aula.

As alterações permanecem locais, sem envio ao GitHub e sem publicação. A auditoria integral das 49 aulas continua aberta.
