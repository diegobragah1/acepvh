# Continuidade — auditorias de coesão e sintaxe

Lote `COESAO_SINTAXE_2026-10-31`, data civil de São Paulo. Commit-base e instante da leitura: [registro de proveniência](BASE_COESAO_SINTAXE.json).

Foram produzidos diagnósticos individuais de [coesão e coerência, por_7](AUDITORIA_POR_7.md) e [estrutura da oração e do período, por_14](AUDITORIA_POR_14.md). Escopo: seis blocos principais e dois complementos; todos os seus modos de estudo, mapas, 15 questões e 18 cartões. Cada questão tem registro de fundamento e análise dos distratores.

Os dez recortes já existentes dessas aulas receberam evidências persistidas em `por_7_evidencias.json` e `por_14_evidencias.json`. O gerador continua carregando as evidências históricas das demais aulas e agora inclui links para os diagnósticos individuais disponíveis. A decomposição desses itens ainda é inicial e não comprova exaustão do edital.

## Resultado editorial

- `por_7`: alinhar enumerações de coerência, diferenciar direção referencial de forma do demonstrativo, desenvolver dêixis e qualificar atalhos de conectivos. A conferência interna não identificou gabarito inequivocamente errado nas oito questões sob os limites registrados.
- `por_14`: resumos não incorporam ressalvas já presentes na teoria; há generalizações sobre posição do sujeito paciente, funções de se, complemento nominal e número de existir. Duas questões sobre relativas conservam ressalvas de redação na oposição «parte/todo». Tipos de predicado e coordenação recebem tratamento superficial.
- As duas aulas continuam PARCIAIS. Não houve elevação a VALIDADO nem correção automática das questões, dataset ou identificadores. As ocorrências ficam registradas para um lote posterior de correção com confronto documental.

## Validação executada

- `node --import tsx scripts/start_integral_audit.ts`: 49 fichas e 370 recortes; zero aprovações automáticas. Executado novamente com saídas idênticas.
- Conferência dos overlays: os dez recortes preservam seus campos no resultado gerado, estado PENDENTE e pendências críticas.
- `npm run check`: nove entradas de arquivos de teste aprovadas pelo runner, zero falhas; auditoria estrutural sem ocorrências; TypeScript aprovado. Essa contagem é a saída desta execução, não uma reprodução do número histórico de casos informado no pacote.
- `npm run build`: executado em cópia temporária para preservar bundles versionados; compilação e verificação de estilos/fontes/cópias estáticas aprovadas. Permanece aviso de bundle acima de 500 kB.
- Dataset, complementos didáticos e chaves de progresso sem alterações. Os hashes no registro de base identificam exatamente o conteúdo examinado.

## Limites e próxima fila

As consultas externas tentadas foram bloqueadas pelo proxy (HTTP 403); os destinos e o resultado estão no registro de base. Nenhuma fonte externa foi declarada lida nesta etapa. Não houve inspeção visual nem reconferência do edital e de suas retificações. O build não substitui essas verificações.

Próxima fila sugerida: leitura individual de `por_3`, `por_6`, `por_8`, `por_10` e `por_17`, ainda sem diagnóstico individual neste formato; tratar as correções dos dois relatórios com fontes acessíveis e registrar a revisão de identidade se algum enunciado ou gabarito mudar substancialmente. A auditoria das demais disciplinas também permanece aberta. Não há declaração de cobertura de 100%.
