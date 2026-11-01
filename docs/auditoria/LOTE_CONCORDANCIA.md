# Continuidade — concordância verbal e nominal

Lote `CONCORDANCIA_2026-10-31`, data civil de São Paulo. [Base, instante, hashes e consultas tentadas](BASE_CONCORDANCIA.json). Diagnóstico: [AUDITORIA_POR_10.md](AUDITORIA_POR_10.md).

Foram lidos três blocos principais e o complemento da aula: teoria/resumos, mapa completo, sete questões com distratores e comentários e oito cartões. As versões Markdown foram conferidas nos trechos correspondentes aos achados, sem alegar uma segunda leitura integral independente de todas as versões.

## Resultado editorial e matriz

Os achados incluem plural indevidamente generalizado para existir, resumo VTD+se=plural incompatível com ressalvas da teoria, quite incluído entre palavras que variam em gênero, condições pouco delimitadas para é proibido/necessário e objetivos sem prática proporcional. Não foi indicada troca inequívoca de gabarito; a leitura de todos os comentários não equivale à sua validação documental.

Os dois recortes amplos de concordância foram preservados. O gerador acrescenta 14 subcompetências (`por_10-c03` a `por_10-c16`), sem alterar os IDs ou textos das 370 linhas anteriores. A matriz passa a 384 recortes. Os 16 recortes de `por_10` têm diagnóstico persistido em `por_10_evidencias.json`, mantendo PENDENTE; dois são SUPERFICIAIS, os demais PARCIAIS. A decomposição é editorial e ampliável, não certificação de exaustão do edital.

O inventário geral de questões permanece distinto das questões efetivamente relacionadas a cada recorte: os novos registros listam somente os localizadores conferidos aplicáveis, inclusive com lista vazia onde falta prática específica. Nenhuma fonte ou validação integral foi inventada para preencher campos.

## Verificação executada

- Gerador: 49 fichas, 384 recortes e zero aprovações automáticas. Reexecução com saídas idênticas.
- Não regressão: identidades e subcompetências das 370 linhas anteriores preservadas; linhas fora de `por_10` integralmente idênticas; apenas 14 IDs novos.
- Conferência de todos os arquivos de evidência: 74 recortes persistidos sem perda de campos, incluindo os registros de lotes anteriores.
- `npm run check`: nove entradas de arquivos aprovadas pelo runner, zero falhas; auditoria estrutural sem ocorrências; TypeScript aprovado.
- Build completo em cópia temporária: aprovado, incluindo estilos, fontes matemáticas e cópias estáticas; permanece aviso de bundle acima de 500 kB.
- Dataset e código do aplicativo sem alterações. Não houve modificação de enunciados, gabaritos, cartões ou chaves de progresso.

## Limites e continuidade

Novas tentativas de ler FUNAG/concordância verbal e Aulete/alerta foram bloqueadas pelo proxy com HTTP 403 antes da leitura. Os destinos não foram confirmados como disponíveis nem como fontes consultadas. Permanecem pendentes confronto das regras e variantes, autenticação de origem, reconferência do Anexo IV/retificações e inspeção visual.

Próximas auditorias individuais na fila de Português: `por_8` (classes e formação de palavras) e `por_17` (pontuação). As correções registradas neste lote exigem confronto documental e harmonização entre recursos antes de qualquer elevação de nível. A revisão das demais disciplinas continua aberta.
