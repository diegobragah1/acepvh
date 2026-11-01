# Continuidade — pontuação

Lote `PONTUACAO_2026-10-31`, data civil de São Paulo. [Base e hashes](BASE_PONTUACAO.json). Diagnóstico: [AUDITORIA_POR_17.md](AUDITORIA_POR_17.md).

Escopo: dois blocos principais e complemento da aula, teoria/resumos, mapa completo, sete questões interativas com distratores/comentários e sete cartões. Também examinados casos resolvidos, atividade prática e perguntas embutidas na teoria. Os trechos Markdown correspondentes aos achados foram conferidos; não se declara uma segunda leitura integral independente de todas as versões.

## Achados e estado

O mapa conserva a regra numérica de três palavras para adjuntos deslocados, apesar da ressalva expressa na teoria revisada. Cartão e exemplos antigos de relativas ainda induzem inferências sobre elementos externos ao grupo, também ressalvadas no bloco revisado. Há excesso de conteúdo de acentuação/regência, pouca prática dos demais sinais e ressalvas sobre efeito expressivo da substituição de vírgulas e naturalidade de um distrator.

Nenhuma troca inequívoca de gabarito foi indicada. As correções permanecem descritas, sem modificar silenciosamente dataset ou chaves de progresso. A aula segue PARCIAL.

Os oito IDs existentes foram mantidos e oito recortes acrescentados (`por_17-c09` a c16). A matriz passa de 384 para 392 recortes. Os 16 recortes de pontuação receberam evidência persistida: 14 PARCIAIS, dois SUPERFICIAIS, todos PENDENTES. A decomposição continua ampliável e não prova exaustão do item do edital.

## Verificação executada

- Gerador: 49 fichas, 392 recortes, zero aprovações automáticas. Reexecução com saídas idênticas.
- Não regressão: IDs e subcompetências das 384 linhas anteriores preservados; linhas fora de `por_17` integralmente idênticas; exatamente oito novos IDs.
- Conferência de todos os arquivos de evidência: 90 recortes persistidos sem perda de campos.
- `npm run check`: nove entradas de arquivos aprovadas pelo runner, zero falhas; auditoria estrutural sem ocorrências; TypeScript aprovado.
- Build em cópia temporária: aprovado, incluindo verificação de estilos, fontes matemáticas e cópias estáticas. Permanece o aviso de bundle acima de 500 kB.
- Dataset, código da aplicação, enunciados, gabaritos e identificadores sem alterações.

## Limites e próxima fila

Nenhuma nova fonte externa foi lida neste lote. Bloqueios de consultas de lotes anteriores não foram repetidos nem registrados como observação nova. Permanecem pendentes confronto documental dos manuais, autenticação das citações/questões, edital/retificações e inspeção visual. O build não substitui essas verificações.

Próxima auditoria individual na fila de Português: `por_8`, classes e formação de palavras. As pendências de correção e validação dos demais relatórios continuam abertas, assim como a revisão das outras disciplinas. Não há declaração de cobertura integral.
