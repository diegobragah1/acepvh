# Continuidade — classes e formação de palavras

Lote `MORFOLOGIA_2026-10-31`, data civil de São Paulo. [Diagnóstico individual](AUDITORIA_POR_8.md); [base, hashes e evidência lexical](BASE_MORFOLOGIA.json).

Foram examinados três blocos principais e o complemento `por_8`: teoria/resumos, mapa completo, dez questões interativas com distratores/comentários e dez cartões. Também examinados casos resolvidos, atividade prática e recuperação ativa; esses elementos não foram somados aos itens interativos. As versões Markdown foram conferidas nos trechos correspondentes aos achados.

## Resultados

- A lista ortográfica pt-BR do LibreOffice/VERO registra `noitecer/abjkMò`, contrariando a afirmação categórica de inexistência usada no teste de retirada. A revisão da fonte, hash e linha foram registrados e confirmados. A apresentação do README identifica a finalidade ortográfica/Hunspell.
- Essa evidência lexical não certifica o processo de formação de anoitecer nem autoriza trocar gabaritos. Quatro questões de formação conservam justificativas pendentes de confronto morfológico específico.
- Comentário de uma alternativa E inexistente e resíduos sobre planalto/propusermos em outro comentário foram localizados. Há também generalizações sobre PA/plural, tempo composto/voz, pronomes e colocação.
- Artigo, numeral e interjeição têm desenvolvimento especialmente limitado; o grande volume de paradigmas verbais e vozes não demonstra ensino equilibrado das dez classes.
- Os 16 recortes anteriores foram preservados e oito acrescentados (`por_8-c17` a c24). A matriz passa de 392 para 400 recortes. Os 24 recortes de morfologia têm evidência persistida: 21 PARCIAIS e três SUPERFICIAIS, todos PENDENTES.

## Verificação executada

- Gerador: 49 fichas, 400 recortes, zero aprovações automáticas. Segunda execução com saídas idênticas.
- Não regressão: IDs e textos das 392 subcompetências anteriores preservados; linhas fora de `por_8` integralmente idênticas; exatamente oito IDs novos.
- Conferência de todos os arquivos de evidência: 114 recortes persistidos, sem perda de campos anteriores.
- Fonte externa: arquivo lido em revisão fixa do repositório público, com hash igual ao observado inicialmente e entrada na linha 212503. Nenhuma inferência de inexistência foi feita a partir de ausência de entrada literal.
- `npm run check`: nove entradas de arquivos aprovadas pelo runner, zero falhas; auditoria estrutural sem ocorrências; TypeScript aprovado.
- Build completo em cópia temporária: aprovado, incluindo estilos, fontes matemáticas e cópias estáticas. Permanece aviso de bundle acima de 500 kB.
- Dataset, código da aplicação, enunciados, respostas e chaves de progresso sem alterações.

## Limites e continuidade

A fonte externa consultada é ortográfica, não uma gramática morfológica ou obra etimológica. Os campos de fonte dos recortes de formação registram somente o contraexemplo lexical; não validam o restante da doutrina. Permanecem pendentes confronto gramatical/etimológico, autenticação das atribuições, Anexo IV/retificações e inspeção visual. Nenhum exercício ou aula recebeu certificação integral.

Próxima fila de diagnóstico: números e operações de RLM (`rlm_1`), com resolução independente e revisão dos distratores. As correções e validações pendentes de Português continuam abertas; o avanço para outra disciplina não encerra esses relatórios.
