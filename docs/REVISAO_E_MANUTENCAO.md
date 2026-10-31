# Revisão e manutenção da plataforma

## Resultado desta revisão

Base inspecionada: `febfb7ba4f80f1ef3a8ed2752099a3fb8b90472d` (49 aulas).
A atualização do Gemini ampliou o material, mas a auditoria antiga ainda procurava arquivos de uma versão sem React e exigia 32 aulas. As fontes de Português e RLM estavam vazias; 16 aulas não apareciam no plano e o índice legado omitia 17 aulas.

As contagens agora vêm da base em execução. O plano preserva suas atribuições anteriores e distribui as aulas omitidas nas etapas menos carregadas. O índice foi sincronizado com o índice atual da aplicação. Os novos exemplos de porcentagem, capacidade/tempo e médias acrescentam 6 questões e 6 flashcards com resolução explícita, sem renumerar blocos existentes.

## Fluxo editorial

1. Atualizar o repositório antes de trabalhar no AI Studio ou em outra ferramenta. Usar branch por alteração; integrar a versão aprovada antes de continuar em outro editor.
2. Identificar o tópico literal do edital e a aula/bloco correspondente. IDs são referências persistentes: renomear `por_3`, por exemplo, não migra automaticamente o progresso antigo.
3. Ler a fonte antes de escrever. Registrar título, URL, página/artigo, data da consulta, trecho que fundamenta a afirmação e responsável pela revisão.
4. Escrever a teoria como explicação completa: conceito, condições, exceções, exemplo e contraexemplo. No resumo, condensar apenas o que já está fundamentado na teoria.
5. Criar questões autorais identificadas e justificar o gabarito e os distratores. Não chamar um distrator de falso sem considerar o enunciado: ele pode ser verdadeiro, mas inadequado à pergunta.
6. Conferir explicações e questões de modo independente. Testes estruturais não confirmam a correção dos gabaritos nem a vigência de uma lei.
7. Atualizar cópias de dados, rodar `npm run check` e `npm run build`. Conferir o relatório e abrir a interface antes de integrar.

## Registro sugerido para cada revisão documental

| Campo | Preenchimento |
| --- | --- |
| Aula/bloco e tópico do edital | IDs e texto literal do tópico |
| Afirmação conferida | Conceito, número, prazo ou regra específica |
| Evidência | URL oficial e página, seção ou artigo |
| Data e versão | Data consultada e versão/retificação |
| Questões relacionadas | Identificadores e análise dos distratores |
| Conclusão | Confirmado, corrigido ou pendente; explicar a divergência |
| Responsável | Quem confrontou a afirmação com a fonte |

## Pendências prioritárias

1. Vincular fontes das 18 aulas de Português e 8 de RLM a partir da leitura das apostilas. Não atribuir PDFs automaticamente por semelhança de títulos: a reorganização mudou o significado dos IDs.
2. Conferir legislação municipal/federal, dados atuais e informações do concurso em fontes oficiais, com marco temporal. Esta revisão não certificou esses fatos.
3. Rever os vínculos de fontes já existentes: um número cadastrado válido não prova que o PDF fundamenta a aula.
4. Conferir a matriz antiga de 20 macro-itens contra os 49 tópicos detalhados. Seus textos históricos de status não são evidência de auditoria independente.
5. Avaliar divisão dos blocos extensos em subseções menores, mantendo texto completo e os modos de resumo e questões separados.
6. Substituir gradualmente referências posicionais de questões por IDs estáveis e hashes de conteúdo com migração. Até lá, acrescentar questões no final e não mudar a ordem das antigas sem migrar as respostas.
7. Sanitizar HTML editorial antes da renderização caso o sistema passe a receber conteúdo de terceiros. Atualmente há renderização direta de HTML da base.

## Limites

O painel e o comando de auditoria verificam campos, referências, questões e cópias. Eles não abrem PDFs, não medem compreensão e não conferem leis. A fila de revisão usa os status escolhidos pelo estudante; não é um algoritmo de repetição espaçada nem registra datas de revisão.
