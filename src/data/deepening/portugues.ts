import type { DeepeningEntry } from './types';

const reading = { title: 'Inep — matriz de Língua Portuguesa do Saeb', url: 'https://portal.mec.gov.br/seed/arquivos/pdf/saeb.pdf', section: 'Procedimentos de leitura; relações entre recursos expressivos e efeitos de sentido; coesão e coerência.' };
const grammar = { title: 'FUNAG — Manual de revisão', url: 'https://www.funag.gov.br/manual/index.php?title=Manual_de_revis%C3%A3o_de_textos_da_FUNAG', section: 'Noções básicas de gramática; pontuação; vocabulário. Os exemplos abaixo são autorais.' };
const spelling = { title: 'Acordo Ortográfico — Decreto 6.583/2008', url: 'https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2008/decreto/d6583.htm', section: 'Anexo: bases de acentuação e emprego do hífen.' };

export const portugues: DeepeningEntry[] = [
  {
    id: 'por_1', title: 'Inferência, pressuposto e alcance de uma conclusão',
    theory: `## Ler o que está escrito e justificar o que está implícito
Compreender envolve localizar informações explícitas. Interpretar também envolve relacioná-las, reconhecer a posição do enunciador e produzir inferências autorizadas pelo texto. Uma inferência não é um palpite: deve ser possível apontar as expressões que a sustentam. Conhecimento de mundo ajuda a ler, mas não autoriza acrescentar acontecimentos inexistentes.

Considere este texto autoral: “A equipe voltou ao bairro na terça-feira. Embora a maioria dos recipientes estivesse coberta, ainda havia pneus expostos. Por isso, uma nova orientação foi realizada.” A expressão **voltou** permite pressupor visita anterior. **Embora** estabelece uma concessão: a cobertura de muitos recipientes não elimina a existência de problemas. **Por isso** liga a nova orientação à situação descrita. O texto não informa quantos moradores foram orientados nem afirma que todos descumpriram a recomendação.

## Como eliminar alternativas com rigor
Uma alternativa que diz “nenhum recipiente estava protegido” contradiz o texto. Outra que afirma “a orientação solucionou definitivamente o problema” extrapola: o resultado posterior não foi narrado. A alternativa “a equipe identificou situações que ainda exigiam orientação” pode ser inferida. Observe os quantificadores: **maioria**, **todos**, **alguns** e **nenhum** não são intercambiáveis.

Também diferencie fato apresentado e avaliação. “Foram visitados 30 imóveis” tem conteúdo verificável; “a ação foi exemplar” expressa uma avaliação, mesmo que venha de uma autoridade. Se a questão pede a opinião do autor, procure marcas avaliativas e atribuição de voz. Uma fala citada de um morador não se transforma automaticamente na posição do narrador.

## Exemplo de reescrita
“A equipe voltou” e “a equipe chegou” não preservam exatamente o mesmo sentido: a segunda redação elimina a pressuposição de retorno. A substituição de uma palavra pode manter o assunto e alterar uma informação importante. Para testar equivalência, confira o sentido, o grau de certeza, o tempo e a referência dos termos.

## Gatilhos lexicais de pressuposição e subentendido
Enquanto o **pressuposto** decorre de uma marca linguística inscrita na superfície da frase (verbos aspectuais como *deixar de*, *passar a*, *continuar*, *voltar a*; advérbios como *ainda*, *já*, *novamente*; adjetivos ou orações adjetivas restritivas), o **subentendido** depende do contexto pragmático e da intenção comunicativa, podendo ser negado pelo locutor sem contradição gramatical. Em relatórios e comunicados oficiais de vigilância em saúde, reconhecer gatilhos de pressuposto evita extrapolações indevidas sobre o histórico de inspeções de um imóvel.`,
    summary: `Localize evidência textual. Contradição nega o texto; extrapolação acrescenta informação. Inferência deve ser sustentada. Retorno pode pressupor ação anterior; quantificadores delimitam o alcance da afirmação.

| Fenômeno de Leitura | Definição Operacional | Exemplo Autoral Contextualizado | Diagnóstico de Prova |
| --- | --- | --- | --- |
| **Compreensão (Explícito)** | Informação declarada diretamente na superfície textual. | "Foram vistoriados 40 imóveis na manhã de terça-feira." | Comando típico: *Segundo o texto... / O autor afirma expressamente que...* |
| **Pressuposto** | Ideia implícita acionada por marca linguística (*ainda, já, voltou a, deixou de*). | "O morador **deixou de** armazenar pneus no quintal." (Pressuposto: armazenava antes). | Mantém-se verdadeiro mesmo se a frase principal for negada. |
| **Subentendido** | Insinuação pragmática dependente do contexto e da situação comunicativa. | "O portão está trancado e o cão está solto." (Subentendido: aguarde o morador abrir). | Não possui marca gramatical fixa; exige leitura de contexto. |
| **Extrapolação** | Acréscimo de fato, causa ou generalização sem respaldo no texto. | Trocar *"a maioria dos imóveis"* por *"todos os imóveis do distrito"*. | Principal armadilha: palavras como *sempre, nunca, exclusivamente, todos*. |`,
    questions: [
      { q: 'No texto autoral “A equipe voltou ao bairro”, qual informação é pressuposta?', options: ['A equipe já esteve no bairro.', 'Todos os moradores foram visitados.', 'O problema foi resolvido.', 'A visita ocorreu à noite.'], ans: 0, difficulty: 'Fácil', questionType: 'Interpretação', comment: 'Gabarito: A. O verbo aspectual iterativo “voltou” aciona o pressuposto de presença anterior da equipe no local. Erro da B: extrapola abrangência total sem marca textual; erro da C: o trecho não informa desfecho; erro da D: não há informação temporal de período noturno.' },
      { q: '“A maioria dos recipientes estava coberta” permite concluir que:', options: ['Todos estavam cobertos.', 'Nenhum estava coberto.', 'Mais da metade estava coberta.', 'Exatamente metade estava coberta.'], ans: 2, difficulty: 'Fácil', questionType: 'Interpretação', comment: 'Gabarito: C. “Maioria” designa parcela superior a 50% (mais da metade) dos recipientes observados. Erro da A: “todos” (100%) extrapola “a maioria”; erro da B: contradiz frontalmente o enunciado; erro da D: “exatamente metade” corresponde a 50%, e não à maioria.' },
      { q: 'Em “O setor de endemias passou a registrar os boletins digitalmente em março”, o emprego da locução verbal “passou a registrar” autoriza pressupor que:', options: ['O registro digital já era utilizado desde a fundação do setor.', 'Antes de março, o registro dos boletins não era feito nessa modalidade digital.', 'Nenhum boletim foi emitido depois do mês de março.', 'Todos os agentes recusaram o uso do sistema digital.'], ans: 1, difficulty: 'Intermediário', questionType: 'Interpretação', comment: 'Gabarito: B. A locução aspectual incoativa “passou a” marca mudança de estado/hábito, pressupondo que anteriormente os boletins não eram digitais. Erro da A: contraria o marco inicial “em março”; erro da C e D: inventam interrupção ou recusa sem respaldo no enunciado.' },
      { q: 'Considere o período: “Embora parte dos terrenos baldios tenha sido limpa, o índice de focos permaneceu elevado no quarteirão.” Assinale a leitura que constitui inferência autorizada:', options: ['A limpeza parcial de terrenos baldios não foi suficiente, isoladamente, para reduzir o índice de focos daquele quarteirão.', 'Nenhum terreno baldio do quarteirão passou por limpeza.', 'Os focos estavam localizados exclusivamente dentro de terrenos baldios.', 'A limpeza dos terrenos foi a causa direta do aumento de focos.'], ans: 0, difficulty: 'Intermediário', questionType: 'Interpretação', comment: 'Gabarito: A. O conector concessivo “Embora” opõe a limpeza parcial à permanência do índice elevado, autorizando inferir insuficiência isolada da medida. Erro da B: contradiz “parte dos terrenos tenha sido limpa”; erro da C: “exclusivamente” extrapola os demais imóveis/focos; erro da D: transforma concessão em falsa relação de causalidade.' },
    ],
    flashcards: [
      ['Como justificar uma inferência?', 'Apontando as informações do texto e a relação que sustenta a conclusão.'],
      ['Por que “todos” merece atenção?', 'Porque universaliza uma afirmação; pode extrapolar um texto que disse apenas alguns ou a maioria.'],
      ['Qual a diferença entre pressuposto e subentendido?', 'O pressuposto é garantido por marca linguística na frase (ex.: ainda, deixou de); o subentendido depende de dedução contextual.'],
    ],
    references: [reading],
  },
  {
    id: 'por_2', title: 'Gênero, sequência textual e finalidade em textos mistos',
    theory: `## Classificações que respondem a perguntas diferentes
O gênero identifica uma prática comunicativa reconhecida socialmente: notícia, relatório, receita, ofício ou artigo de opinião. Para reconhecê-lo, examine quem escreve, para quem, em qual suporte e com qual finalidade. A sequência textual descreve a organização linguística de um trecho: contar acontecimentos, caracterizar algo, explicar um conceito, defender uma posição ou orientar uma ação.

Não existe correspondência obrigatória de um gênero com uma única sequência. Uma reportagem pode narrar um evento, descrever um local e explicar suas causas. Uma receita costuma combinar lista descritiva de ingredientes e instruções de preparo. As classificações tipológicas variam entre modelos teóricos; evite a afirmação de que há uma contagem universal e imutável de tipos.

## Texto de campanha analisado
“A água se acumula em recipientes destampados. Verifique seu quintal uma vez por semana e mantenha os reservatórios protegidos.” A primeira frase explica uma situação. A segunda dirige uma ação ao leitor; verbos como **verifique** e **mantenha** sustentam uma sequência injuntiva. A existência da primeira frase não impede que a finalidade predominante do conjunto seja orientar um comportamento.

Compare com “A vistoria ocorreu às oito horas, após a chegada da equipe”. Aqui há progressão temporal e relato de um acontecimento. Já “O quintal era estreito, sombreado e cercado por um muro baixo” caracteriza um ambiente. O tempo verbal é uma pista, mas a função do trecho decide a análise: presente também pode aparecer em narração histórica, e descrição não depende sempre de adjetivos.

## Predominância e intenção
Uma pergunta sobre o gênero exige analisar a situação social de circulação. Uma pergunta sobre o tipo predominante exige examinar a organização interna. Para identificar argumentação, encontre uma tese e razões usadas para sustentá-la; a simples presença de informação não prova neutralidade absoluta nem defesa de uma tese. Identifique o que o comando da questão está pedindo antes de classificar.

## Gêneros frequentes na rotina administrativa e sanitária
Na atuação pública, circulam gêneros com propósitos bem demarcados: o **ofício** (comunicação oficial externa ou entre órgãos sobre matéria administrativa), o **relatório técnico de vistoria** (exposição estruturada de fatos observados, dados coletados e encaminhamentos), a **notificação sanitária** (documento de ciência e determinação de providências com base legal) e o **folheto educativo** (gênero de divulgação comunitária com forte apelo injuntivo e expositivo).`,
    summary: `Gênero: prática comunicativa e finalidade. Sequência: organização do trecho. Um gênero pode combinar várias sequências. Verbos e conectivos são pistas, não critérios isolados.

| Dimensão | Sequência / Tipo Textual | Traços Linguísticos Dominantes | Gêneros Textuais em que Costuma Predominar |
| --- | --- | --- | --- |
| **Contar fatos** | **Narrativa** | Progressão temporal (*antes, depois, quando*), verbos de ação no pretérito, mudança de estado. | Relato de ocorrência, crônica, fábula, notícia factual. |
| **Caracterizar** | **Descritiva** | Simultaneidade espacial, verbos de estado (*ser, estar, permanecer*), adjetivação e localização. | Laudo de inspeção de imóvel, retrato falado, cardápio, classificado. |
| **Explicar / Informar** | **Expositiva / Explicativa** | Conceituação, dados objetivos, presente genérico, relações de causa/consequência sem defesa de tese polêmica. | Verbete, resumo técnico, nota informativa, boletim epidemiológico. |
| **Defender tese** | **Dissertativo-argumentativa** | Posicionamento (tese), operadores argumentativos (*portanto, todavia, visto que*), contra-argumentação. | Artigo de opinião, editorial, parecer fundamentado, carta argumentativa. |
| **Orientar conduta** | **Injuntiva / Instrucional** | Verbos no imperativo ou infinitivo impessoal, passos ordenados, orientação direta ao interlocutor. | Campanha preventiva de saúde, manual de biossegurança, receita, edital. |`,
    questions: [
      { q: 'Um relatório pode conter relato de uma visita e descrição do imóvel. Isso demonstra que:', options: ['Todo relatório é ficcional.', 'Um gênero pode combinar sequências textuais.', 'Descrição e narração são gêneros idênticos.', 'O gênero depende apenas do tempo verbal.'], ans: 1, difficulty: 'Fácil', questionType: 'Gramática e Texto', comment: 'Gabarito: B. Gêneros concretos (como relatório técnico, notícia ou ata) comumente integram múltiplas sequências tipológicas (expositiva, narrativa, descritiva). Erro da A: relatório técnico de serviço público é gênero factual/não ficcional; erro da C: narração (sucessão temporal) e descrição (caracterização estática) são sequências distintas; erro da D: o gênero define-se por função social, suporte e interlocutores.' },
      { q: 'Em “Confira os recipientes e tampe os reservatórios”, predomina a finalidade de:', options: ['Narrar um fato passado.', 'Caracterizar uma paisagem.', 'Orientar uma ação do destinatário.', 'Apresentar uma definição de palavra.'], ans: 2, difficulty: 'Fácil', questionType: 'Gramática e Texto', comment: 'Gabarito: C. Verbos no imperativo (“Confira”, “tampe”) caracterizam a sequência injuntiva (instrucional), voltada a orientar o comportamento do leitor. Erro da A: não há relato no pretérito; erro da B: não descreve cenário físico; erro da D: função metalinguística/conceitual ausente.' },
      { q: 'No trecho “O depósito inspecionado media dois metros de largura, apresentava rachaduras laterais e estava situado ao fundo do lote”, predomina a sequência:', options: ['Narrativa, pois estabelece sucessão cronológica de eventos.', 'Descritiva, pois caracteriza propriedades físicas e localização do objeto.', 'Injuntiva, pois ordena ao morador o conserto imediato.', 'Argumentativa, pois refuta uma tese científica sobre reservatórios.'], ans: 1, difficulty: 'Intermediário', questionType: 'Gramática e Texto', comment: 'Gabarito: B. O trecho apresenta atributos simultâneos de dimensão, estado material e localização espacial com verbos descritivos no pretérito imperfeito, sem progressão temporal. Erro da A: não há sequência de ações encadeadas no tempo; erro da C: ausente qualquer verbo injuntivo/imperativo; erro da D: não apresenta defesa ou refutação de tese.' },
      { q: 'Qual característica distingue um artigo de opinião de uma notícia estritamente informativa sobre o mesmo surto epidemiológico?', options: ['O artigo de opinião sustenta explicitamente um ponto de vista por meio de argumentos atribuídos ao autor.', 'A notícia informativa é escrita obrigatoriamente em versos rimados.', 'O artigo de opinião proíbe qualquer menção a dados reais ou locais.', 'A notícia informativa utiliza exclusivamente verbos no modo imperativo.'], ans: 0, difficulty: 'Fácil', questionType: 'Gramática e Texto', comment: 'Gabarito: A. O artigo de opinião assume tese explícita e defesa argumentativa assinada; a notícia prioriza o relato objetivo e impessoal de fatos (quem, o quê, quando, onde). Erro da B: notícia jornalística é em prosa; erro da C: artigos de opinião frequentemente citam dados reais como argumento de autoridade/prova; erro da D: notícia usa sobretudo modo indicativo.' },
    ],
    flashcards: [
      ['Um gênero tem um único tipo textual?', 'Não. Um relatório ou reportagem pode reunir narração, descrição e explicação.'],
      ['Como diferenciar gênero textual de tipo textual?', 'Gênero é a forma social concreta (ofício, notícia, bula); tipo é a estrutura linguística interna (narração, descrição, dissertação, injunção).'],
      ['Qual sequência textual predomina em manuais de procedimento e campanhas de prevenção?', 'A sequência injuntiva (instrucional), marcada por verbos no imperativo ou infinitivo orientando ações.'],
    ],
    references: [reading],
  },
  {
    id: 'por_3', title: 'Sentido contextual, ambiguidade e relações lexicais',
    theory: `## A palavra não carrega sozinha todo o sentido
O contexto seleciona a acepção de uma palavra. Em “a rede de atendimento recebeu novos equipamentos”, **rede** designa uma organização de serviços; em “o pescador recolheu a rede”, designa um instrumento. A polissemia corresponde à possibilidade de sentidos relacionados de uma unidade lexical. A homonímia envolve formas coincidentes com significados distintos; a distinção pode exigir consulta lexicográfica, e não apenas intuição.

Sinonímia é contextual. Trocar “identificou” por “reconheceu” pode funcionar em determinado período, mas não garante equivalência em qualquer uso. Também preserve intensidade e registro: “preocupação” não equivale sempre a “pânico”. Antônimos dependem do eixo de comparação; “aberto” pode opor-se a “fechado”, mas em “pessoa aberta” a interpretação muda.

## Exemplo de ambiguidade resolvida
“A agente informou à moradora que sua casa seria visitada.” O possessivo **sua** pode apontar para mais de uma participante. Para eliminar a ambiguidade, escreva “a casa da moradora seria visitada”. Repetir o substantivo pode melhorar a precisão, mesmo que a redação fique menos econômica. Ambiguidade não é sempre erro: em humor e publicidade, pode ser intencional.

## Organização do vocabulário
Hiperônimo é o termo mais abrangente: “veículo” inclui “ônibus” e “barco”, que são hipônimos nesse recorte. Dizer que todos os barcos são veículos não autoriza concluir que todos os veículos são barcos. Esse cuidado ajuda tanto na interpretação quanto na lógica.

Parônimos têm formas semelhantes e significados diferentes, como **descrição** e **discrição**. No primeiro caso, caracteriza-se algo; no segundo, pode-se falar de reserva ou prudência. Para resolver questões, substitua a palavra por uma paráfrase compatível com o período e confira se a ação continua fazendo sentido. Denotação e conotação também dependem do uso: “uma ponte entre os serviços” pode ser uma metáfora de articulação, sem construção física.`,
    summary: `Teste o sentido no período. Sinônimos não são substitutos universais. Possessivos podem gerar ambiguidade. Hiperônimo inclui; hipônimo especifica. Parônimos exigem atenção à forma e ao contexto.

| Relação Lexical | Conceito | Pares Clássicos de Prova | Significado de Cada Forma |
| --- | --- | --- | --- |
| **Paronímia** | Palavras parecidas na grafia/pronúncia, mas com sentidos distintos. | *Ratificar* × *Retificar* | **Ratificar** = confirmar, validar; **Retificar** = corrigir, emendar. |
| **Paronímia** | Semelhança formal com distinção semântica. | *Descrição* × *Discrição* | **Descrição** = ato de descrever; **Discrição** = reserva, cautela. |
| **Paronímia** | Semelhança formal com distinção semântica. | *Infringir* × *Infligir* | **Infringir** = violar regra/lei; **Infligir** = aplicar pena ou castigo. |
| **Homonímia** | Mesma pronúncia (ou grafia), origens/sentidos diferentes. | *Sessão* / *Seção* / *Cessão* | **Sessão** = reunião/tempo; **Seção** = setor/repartição; **Cessão** = ato de ceder. |
| **Hiperonímia / Hiponímia** | Relação de inclusão semântica (geral → específico). | *Arbovirose* (hiperônimo) → *Dengue* (hipônimo) | O hiperônimo retoma o hipônimo sem repetir a palavra e sem restringir indevidamente. |`,
    questions: [
      { q: 'Em “a visita criou uma ponte entre a comunidade e o serviço”, “ponte” está empregada como:', options: ['Construção necessariamente física.', 'Ligação figurada entre participantes.', 'Nome de uma doença.', 'Indicação de quantidade.'], ans: 1, difficulty: 'Fácil', questionType: 'Interpretação', comment: 'Gabarito: B. “Ponte” assume acepção conotativa/metafórica de vínculo institucional e diálogo entre população e SUS. Erro da A: leitura literal incompatível com o sentido abstrato de aproximação social; erro da C e D: não designa patologia nem medida quantitativa.' },
      { q: 'Qual redação elimina a ambiguidade sobre a casa a ser visitada?', options: ['A agente falou à moradora sobre sua casa.', 'Ela falou com ela sobre sua casa.', 'A agente informou que a casa da moradora seria visitada.', 'Sua casa foi mencionada por ela.'], ans: 2, difficulty: 'Fácil', questionType: 'Gramática e Texto', comment: 'Gabarito: C. O sintagma preposicionado “da moradora” especifica univocamente quem é a proprietária da casa. Erro da A, B e D: o possessivo “sua” e os pronomes “ela” permitem dupla referência (casa da agente ou casa da moradora), mantendo a ambiguidade.' },
      { q: 'Assinale a alternativa em que o parônimo ou homônimo foi empregado com precisão vocabular na frase administrativa:', options: ['O coordenador reuniu a equipe na sessão de endemias para retificar os erros da planilha e ratificar o cronograma.', 'O servidor foi à seção plenária para infringir uma multa ao proprietário.', 'A equipe agiu com total descrição para não alardear os dados sigilosos.', 'O relatório de campo precisou ser ratificado porque continha dados incorretos que exigiam correção.'], ans: 0, difficulty: 'Intermediário', questionType: 'Gramática e Texto', comment: 'Gabarito: A. “Retificar” = corrigir erros; “ratificar” = confirmar/validar o cronograma; “sessão” = reunião/encontro. Erro da B: multa é aplicada (“infligir”), e “infringir” significa desrespeitar regra; erro da C: reserva/cautela escreve-se “discrição” (e não “descrição”); erro da D: se havia dados incorretos, cabia “retificar” (corrigir), não “ratificar”.' },
      { q: 'No trecho “A equipe recolheu pneus e garrafas no terreno. Esses recipientes foram encaminhados ao ecoponto”, o termo “recipientes” estabelece coesão por:', options: ['Hiperonímia, retomando pneus e garrafas por uma categoria mais abrangente.', 'Antonímia, opondo-se ao sentido de ecoponto.', 'Paronímia em relação ao verbo recolher.', 'Ambiguidade involuntária sem referente no período anterior.'], ans: 0, difficulty: 'Intermediário', questionType: 'Gramática e Texto', comment: 'Gabarito: A. “Recipientes” (hiperônimo = termo geral) encapsula e retoma os termos específicos “pneus e garrafas” (hipônimos), garantindo coesão lexical. Erro da B: não há relação de oposição; erro da C: não há semelhança gráfica com “recolher”; erro da D: o referente é nítido e unívoco no período anterior.' },
    ],
    flashcards: [
      ['Como testar uma substituição por sinônimo?', 'Releia a frase completa, conferindo sentido, intensidade, referência e registro.'],
      ['Por que pronomes possessivos como “seu/sua” frequentemente geram ambiguidade na escrita técnica?', 'Porque “seu/sua” podem referir-se tanto ao emissor quanto ao interlocutor ou à terceira pessoa; especificar “da moradora / da equipe” elimina a dupla leitura.'],
      ['O que diferencia seção, sessão e cessão?', 'Seção = setor/divisão; Sessão = tempo de uma reunião/apresentação; Cessão = ato de ceder/doar.'],
    ],
    references: [reading, grammar],
  },
  {
    id: 'por_4', title: 'Reconstrução da frase e efeito das figuras de sintaxe',
    theory: `## Primeiro reconstrua a estrutura
Figuras de sintaxe trabalham a construção do enunciado por omissão, repetição, inversão ou concordância orientada pela ideia. Para identificá-las, reconstrua mentalmente uma redação mais explícita e compare o efeito. O nome da figura deve ser sustentado por uma operação observável.

“A primeira equipe visitou o centro; a segunda, os distritos.” Recupera-se o verbo **visitou** na segunda oração. Trata-se de zeugma, caso particular de elipse em que o termo omitido já foi expresso. Elipse é uma categoria mais ampla: não é correto defini-la de modo a excluir toda omissão de termo anteriormente citado. A vírgula pode sinalizar o verbo suprimido, mas nem toda vírgula representa zeugma.

## Repetição e encadeamento
“A equipe observa, registra, orienta” encadeia ações sem conjunções entre elas: assíndeto. “A equipe observa e registra e orienta” repete a conjunção: polissíndeto. Ambos podem criar ritmo e destaque; o primeiro pode produzir concisão, o segundo enfatizar a soma das ações. Em “É preciso ouvir; é preciso explicar; é preciso acompanhar”, a repetição inicial é anáfora como figura expressiva.

Essa anáfora não deve ser confundida com referência anafórica: em “a equipe chegou; ela iniciou a visita”, **ela** retoma uma expressão anterior, sem repetição expressiva de início de períodos.

## Inversão e concordância
Em “Do portão, a agente observava o quintal”, a antecipação da circunstância dá destaque ao lugar de observação. A inversão, quando estilisticamente marcada, pode ser analisada como hipérbato; a ordem indireta por si só não torna uma frase incorreta. Em “Os brasileiros somos diversos”, o falante inclui-se no grupo: a concordância com a pessoa do discurso pode caracterizar silepse de pessoa.

Pleonasmo expressivo reforça um termo com finalidade estilística. Ele deve ser distinguido de redundância desnecessária em uma redação técnica. A adequação depende do gênero: um efeito poético pode ser pouco útil em um relatório que exige concisão.

## As três modalidades de silepse e o anacoluto
A **silepse** (concordância ideológica) ocorre quando a flexão acompanha a ideia subentendida e não a forma gramatical explícita:
1. **Silepse de gênero:** “Vossa Excelência está *preocupado*” (forma feminina com adjetivo masculino referindo-se a homem) ou “*Porto Velho* inteira *mobilizou-se*”.
2. **Silepse de número:** “A *equipe* vistoriou o galpão e *saíram* ao meio-dia” (coletivo singular no primeiro verbo e plural ideológico no segundo).
3. **Silepse de pessoa:** “Todos os *agentes* *sabemos* a importância da prevenção” (sujeito de 3ª pessoa plural com verbo na 1ª pessoa plural para incluir o enunciador).
Já o **anacoluto** consiste na quebra da estrutura sintática inicial, deixando um termo solto sem função sintática na oração seguinte: “*Esses lotes abandonados*, é preciso que a fiscalização notifique os proprietários.”`,
    summary: `Reconstrua o termo omitido ou a ordem direta. Zeugma é uma espécie de elipse. Anáfora expressiva repete; referência anafórica retoma. Avalie o efeito e o gênero antes de chamar uma construção de erro.

| Figura de Sintaxe | Operação Estrutural | Exemplo Autoral | Efeito de Sentido |
| --- | --- | --- | --- |
| **Elipse** | Omissão de termo facilmente subentendido pelo contexto. | "No pátio, [havia] três caixas destampadas." | Concisão e rapidez na frase. |
| **Zeugma** | Omissão de termo já expresso anteriormente no período. | "O turno da manhã cobriu a zona norte; o da tarde, [cobriu] a sul." | Evita repetição verbal; frequentemente marcada por vírgula. |
| **Assíndeto / Polissíndeto** | Ausência de conjunção coordenativa / repetição da conjunção. | "Entrou, olhou, anotou." / "E orienta, e inspeciona, e retorna." | Ritmo dinâmico e conciso (assíndeto) ou soma enfática (polissíndeto). |
| **Anáfora** | Repetição da mesma palavra ou expressão no início de frases/versos. | "**Todo** foco importa. **Todo** cuidado protege." | Reforço rítmico e persuasivo em campanhas. |
| **Silepse** | Concordância com a ideia (gênero, número ou pessoa), não com a palavra. | "A população compareceu ao mutirão e **apoiaram** a limpeza." | Aproximação expressiva ou inclusão do falante no grupo. |
| **Anacoluto** | Termo inicial fica sintaticamente solto após pausa ou retomada. | "Aquele reservatório antigo, ninguém sabe quem o instalou." | Destaca o tópico em foco, comum na oralidade. |`,
    questions: [
      { q: 'Em “Ana conferiu os relatórios; Bruno, os mapas”, a omissão de “conferiu” exemplifica:', options: ['Zeugma.', 'Antítese.', 'Onomatopeia.', 'Metonímia.'], ans: 0, difficulty: 'Fácil', questionType: 'Gramática e Texto', comment: 'Gabarito: A. Zeugma é a modalidade específica de elipse em que o termo omitido (“conferiu”) já apareceu expresso anteriormente na frase. Erro da B: antítese contrapõe ideias opostas; erro da C: onomatopeia imita sons naturais; erro da D: metonímia substitui termos por contiguidade semântica.' },
      { q: '“Precisamos ouvir; precisamos orientar; precisamos retornar” apresenta:', options: ['Ausência de repetição.', 'Anáfora expressiva no início das orações.', 'Pronome relativo retomando um antecedente.', 'Apenas uma enumeração de substantivos.'], ans: 1, difficulty: 'Fácil', questionType: 'Gramática e Texto', comment: 'Gabarito: B. A reiteração regular da forma “precisamos” na abertura de cada oração configura anáfora estilística (figura de construção para ênfase). Erro da A: há repetição intencional evidente; erro da C: não há pronome relativo; erro da D: são orações estruturadas por locuções verbais, não meros substantivos.' },
      { q: 'Na frase “Os servidores da vigilância conhecemos de perto a realidade de cada bairro”, o emprego de “conhecemos” com o sujeito “Os servidores da vigilância” configura:', options: ['Silepse de pessoa, pois o falante se inclui no grupo de terceira pessoa.', 'Zeugma de preposição obrigatória.', 'Assíndeto entre orações subordinadas.', 'Ambiguidade lexical por paronímia.'], ans: 0, difficulty: 'Intermediário', questionType: 'Gramática e Texto', comment: 'Gabarito: A. O sujeito gramatical é de 3ª pessoa do plural (“Os servidores”), mas o verbo flexiona-se na 1ª pessoa do plural (“conhecemos”), estabelecendo concordância ideológica (silepse de pessoa). Erro da B: não há omissão de preposição previamente citada; erro da C: período simples de única oração; erro da D: não envolve parônimos nem ambiguidade.' },
      { q: 'Em “A equipe verificou as calhas, vedou os tambores, recolheu as garrafas, orientou os moradores”, a coordenação das orações sem conectivos exemplifica:', options: ['Polissíndeto.', 'Assíndeto.', 'Anacoluto.', 'Silepse de gênero.'], ans: 1, difficulty: 'Fácil', questionType: 'Gramática e Texto', comment: 'Gabarito: B. As quatro orações coordenadas ligam-se apenas por justaposição com vírgulas, sem conjunção aditiva (“e”), caracterizando assíndeto. Erro da A: polissíndeto seria o inverso (repetição enfática do conectivo “e”); erro da C: não há termo sintaticamente desligado no início da frase; erro da D: todos os termos respeitam a concordância gramatical estrita.' },
    ],
    flashcards: [
      ['O que distingue a anáfora estilística da referência anafórica?', 'A anáfora estilística repete a mesma palavra/expressão no início de períodos ou orações por ênfase; a referência anafórica apenas retoma um termo anterior por pronome ou sinônimo.'],
      ['Quais são os três tipos de silepse?', 'Silepse de gênero (ideia masculino/feminino), de número (coletivo singular com verbo no plural) e de pessoa (sujeito na 3ª pessoa e verbo na 1ª plural).'],
      ['Qual a diferença entre assíndeto e polissíndeto?', 'Assíndeto omite os conectivos coordenativos; polissíndeto repete o conectivo a cada elemento enumerado.'],
    ],
    references: [reading],
  },
  {
    id: 'por_5', title: 'Como explicar o efeito de uma figura de linguagem',
    theory: `## Identifique a relação, não apenas a palavra
Metáfora aproxima campos de sentido sem apresentar a comparação por um conectivo explícito: “a informação é uma chave” sugere que conhecer permite acessar soluções. Comparação torna a aproximação explícita: “a informação funciona como uma chave”. A expressão “como” também pode ter outros valores; sua presença isolada não decide a classificação.

Metonímia envolve relação de contiguidade, como autor pela obra, instituição por seus integrantes ou recipiente pelo conteúdo. “Li Machado de Assis” normalmente significa ler obras do autor. Não há semelhança entre autor e livro; há vínculo de autoria. Personificação atribui ação ou característica humana a algo não humano: “o bairro acordou assustado” representa figuradamente seus habitantes ou o espaço coletivo conforme o contexto.

## Contraste, exagero e avaliação
Hipérbole intensifica por exagero: “expliquei isso mil vezes” não precisa relatar mil ocorrências literais. Eufemismo suaviza uma expressão considerada desagradável. Ironia depende da distância entre a formulação e o sentido pretendido: dizer “Que organização!” diante de uma sala caótica pode ser crítica. Sem pistas contextuais, a mesma frase pode ser elogio sincero.

Antítese aproxima ideias opostas, como “perto no mapa, longe no acesso”. Paradoxo articula uma contradição aparente que exige interpretação, como “o silêncio dizia tudo”. As classificações podem se sobrepor em textos literários; a questão deve especificar o trecho e a relação examinada.

## Exemplo de análise completa
No enunciado autoral “A desinformação correu mais rápido que a equipe”, o verbo **correu** transfere movimento físico à circulação de mensagens, criando uma representação figurada de velocidade. A leitura literal, em que a informação teria pernas, é inadequada. Uma boa justificativa diz qual aproximação foi feita e qual efeito produz, em vez de apenas decorar o rótulo.

Nas questões de reescrita, compare o efeito expressivo. Substituir a frase por “mensagens falsas circularam rapidamente” conserva parte do conteúdo, mas reduz sua figuratividade.

## Catacrese, sinestesia e gradação
Além das figuras mais cobradas, observe três recursos recorrentes:
- **Catacrese:** metáfora já cristalizada pelo uso cotidiano por falta de termo específico (“braço da cadeira”, “dente de alho”, “embarcar no avião”).
- **Sinestesia:** cruzamento de planos sensoriais distintos na mesma expressão (“voz áspera e fria”, “olhar doce”, “cheiro verde”).
- **Gradação (clímax ou anticlímax):** encadeamento de termos em progressão crescente ou decrescente de intensidade (“Um descuido gera um foco, um foco atinge a quadra, a quadra mobiliza o bairro inteiro”).`,
    summary: `Metáfora: aproximação por semelhança. Metonímia: contiguidade. Hipérbole exagera; ironia exige contexto; eufemismo suaviza. Explique o efeito, não só o nome.

| Figura de Linguagem | Mecanismo Semântico | Exemplo Aplicado | Como Distinguir na Prova |
| --- | --- | --- | --- |
| **Metáfora** | Transferência implícita por semelhança entre dois domínios. | "A prevenção é o escudo da comunidade." | Não usa conectivo comparativo (*como, tal qual*). |
| **Comparação (Símile)** | Confronto explícito entre dois elementos com conectivo. | "O boato espalhou-se **como** fogo em palha seca." | Presença de conectivo comparativo explícito. |
| **Metonímia** | Substituição por contiguidade (parte/todo, continente/conteúdo, autor/obra). | "O bairro inteiro saiu às ruas." (O lugar pelos moradores). | Há relação objetiva de proximidade/pertencimento, não de semelhança. |
| **Antítese × Paradoxo** | Oposição de termos × fusão contraditória na mesma ideia. | "Dia e noite na ativa" (antítese) × "Cegueira que enxerga longe" (paradoxo). | A antítese contrasta polos; o paradoxo une ideias logicamente excludentes. |
| **Eufemismo × Hipérbole** | Suavização de expressão penosa × intensificação exagerada. | "Faltou com a verdade" × "Avisamos um milhão de vezes". | Oposto funcional: atenuar versus amplificar. |
| **Prosopopeia / Personificação** | Atribuição de ação/sentimento humano a seres inanimados. | "O rio Madeira pedia socorro durante a estiagem." | Verbos ou adjetivos humanos aplicados a elementos naturais/abstratos. |`,
    questions: [
      { q: 'Em “li Machado de Assis durante a viagem”, o uso do autor pelas obras é:', options: ['Metonímia.', 'Hipérbole.', 'Assíndeto.', 'Onomatopeia.'], ans: 0, difficulty: 'Fácil', questionType: 'Gramática e Texto', comment: 'Gabarito: A. Substituir a obra pelo nome do autor baseia-se em relação de contiguidade/autoria (metonímia). Erro da B: hipérbole envolve exagero expressivo; erro da C: assíndeto é supressão de conectivos coordenativos; erro da D: onomatopeia reproduz sons.' },
      { q: 'Para identificar ironia em “Que serviço excelente!”, é necessário:', options: ['Considerar apenas a palavra excelente.', 'Examinar a situação e as pistas de avaliação.', 'Tratar todo elogio como crítica.', 'Ignorar quem enuncia a fala.'], ans: 1, difficulty: 'Fácil', questionType: 'Interpretação', comment: 'Gabarito: B. A ironia exige contraste entre o significado literal e o contexto discursivo/entonação do falante. Erro da A: isoladamente, “excelente” é elogio literal; erro da C: nem todo elogio tem sentido inverso; erro da D: a intenção do enunciador e o contexto definem a leitura irônica.' },
      { q: 'No slogan “Aquele pneu esquecido no quintal é uma fábrica de mosquitos”, a imagem de “fábrica de mosquitos” constitui:', options: ['Metáfora, pois aproxima o recipiente acumulador de água de uma estrutura que produz algo em série.', 'Eufemismo, pois suaviza a presença de larvas no ambiente doméstico.', 'Sinestesia, pois combina olfato e audição na mesma palavra.', 'Pleonasmo vicioso sem valor expressivo.'], ans: 0, difficulty: 'Intermediário', questionType: 'Gramática e Texto', comment: 'Gabarito: A. Há transferência figurada por semelhança funcional (“é uma fábrica”, sem conectivo comparativo “como”), caracterizando metáfora. Erro da B: pelo contrário, intensifica o alerta em vez de atenuar; erro da C: não mistura sentidos físicos; erro da D: não repete palavras redundantes.' },
      { q: 'Em “O posto de saúde atendeu toda a vila naquela manhã”, o emprego de “toda a vila” para designar os moradores da localidade exemplifica:', options: ['Metonímia (o lugar pelos seus habitantes).', 'Paradoxo (ideias mutuamente excludentes).', 'Onomatopeia (imitação de ruído urbano).', 'Catacrese (ausência de nome para o edifício).'], ans: 0, difficulty: 'Intermediário', questionType: 'Gramática e Texto', comment: 'Gabarito: A. Emprega-se o espaço físico (“toda a vila”) para designar os moradores que ali vivem — modalidade clássica de metonímia. Erro da B: não há contradição lógica; erro da C: não há reprodução sonora; erro da D: existe denominação literal (“os moradores”), logo não é catacrese.' },
    ],
    flashcards: [
      ['Qual diferença central entre metáfora e metonímia?', 'Metáfora opera por aproximação de sentidos (semelhança); metonímia, por vínculo de contiguidade (parte pelo todo, continente pelo conteúdo, lugar pelos habitantes).'],
      ['Qual a diferença entre antítese e paradoxo?', 'Antítese aproxima termos opostos sem contradizer a lógica; paradoxo funde ideias contraditórias numa mesma afirmação.'],
      ['O que diferencia eufemismo de hipérbole nas figuras de linguagem?', 'O eufemismo suaviza uma expressão desagradável ou penosa ("faltou com a verdade"); a hipérbole intensifica por exagero intencional ("avisamos mil vezes").'],
    ],
    references: [reading],
  },
  {
    id: 'por_6', title: 'Conectores, retomadas e mudanças de orientação argumentativa',
    theory: `## Conectivos estabelecem relações
Compare “Choveu, portanto a visita foi adiada” com “Choveu, mas a visita foi mantida”. No primeiro período, a segunda oração apresenta uma conclusão relacionada à primeira. No segundo, apresenta um resultado contrário a uma expectativa. Trocar **portanto** por **mas** altera a relação argumentativa, mesmo que as palavras principais continuem no texto.

Um conector não funciona sempre com o mesmo valor em todos os contextos. “Como a rua estava alagada, a equipe mudou a rota” apresenta causa. “A equipe procedeu como foi orientada” indica conformidade. Para decidir, substitua o conector por uma paráfrase e confira o sentido: **já que** no primeiro caso, **conforme** no segundo.

## Referenciação e progressão
“A equipe elaborou um mapa do território. Esse instrumento auxiliou o planejamento.” A expressão **esse instrumento** retoma o mapa por uma descrição, evitando repetição sem perder referência. Pode-se retomar uma ideia inteira: “A visita foi cancelada; isso exigiu reorganizar a agenda.” Nesse caso, **isso** não aponta necessariamente para um substantivo isolado.

Demonstrativos precisam ser lidos na situação e na sequência textual. Em “Há duas prioridades: vistoria e registro. Esta documenta os resultados; aquela observa as condições”, a retomada convencional liga **esta** ao segundo termo e **aquela** ao primeiro. O recurso exige antecedentes claros; em texto técnico, repetir os nomes pode ser mais preciso.

## Mudança de conclusão por uma palavra
“O agente apenas registrou a ocorrência” restringe a ação ao registro, podendo sugerir ausência de providências adicionais. “O agente também registrou a ocorrência” acrescenta o registro a outras ações. São operadores que afetam a orientação, embora não sejam conjunções coordenativas.

Em uma questão de substituição, verifique quatro aspectos: relação lógica, referente, posição na frase e pontuação. Dois termos próximos em significado podem exigir construções diferentes; “embora” costuma introduzir uma oração no subjuntivo, enquanto “apesar de” pode integrar uma construção nominal ou com infinitivo.`,
    summary: `Conectores dependem do contexto. Retomadas podem apontar para um nome ou uma proposição inteira. Apenas restringe; também acrescenta. Substituições exigem revisar sentido, sintaxe e pontuação.

| Valor Semântico | Conectivos e Locuções Equivalentes | Armadilha de Substituição |
| --- | --- | --- |
| **Oposição / Adversidade** | *mas, porém, contudo, todavia, entretanto, no entanto* | Não confundir *porquanto* (causal/explicativo = porque) com *entretanto* (adversativo). |
| **Concessão** | *embora, ainda que, mesmo que, conquanto, posto que, apesar de* | *Conquanto* e *posto que* são concessivos (= embora); exigem subjuntivo. |
| **Causa / Explicação** | *porque, já que, visto que, uma vez que, como (inicial), porquanto* | *Como* causal ocorre tipicamente no início do período e equivale a *já que*. |
| **Conclusão** | *portanto, logo, por conseguinte, assim, desse modo, destarte* | *Pois* posposto ao verbo (entre vírgulas) é conclusivo (= portanto). |
| **Condição** | *se, caso, desde que, contanto que, salvo se, a menos que* | *Caso* exige verbo no subjuntivo (*Se chover* → *Caso chova*). |
| **Proporção / Conformidade** | *à medida que, à proporção que* / *conforme, segundo, consoante* | Não confundir *à medida que* (proporção) com *na medida em que* (causa). |`,
    questions: [
      { q: 'Em “Como a estrada estava interditada, a equipe retornou”, “como” expressa:', options: ['Comparação.', 'Conformidade.', 'Causa.', 'Conclusão.'], ans: 2, difficulty: 'Fácil', questionType: 'Gramática e Texto', comment: 'Gabarito: C. Posicionado antes da oração principal, “Como” equivale a “Já que / Uma vez que”, introduzindo a causa do retorno da equipe. Erro da A: não compara duas entidades com base em grau; erro da B: não indica acordo/regra (“conforme”); erro da D: o retorno é a consequência, enquanto a interdição é a causa.' },
      { q: 'Em “A visita foi remarcada; isso alterou a rota”, “isso” retoma:', options: ['Necessariamente apenas a palavra rota.', 'O fato de a visita ter sido remarcada.', 'Um lugar que não aparece no texto.', 'A pessoa do leitor.'], ans: 1, difficulty: 'Fácil', questionType: 'Gramática e Texto', comment: 'Gabarito: B. Trata-se de anáfora encapsuladora: “isso” resume toda a proposição anterior (“A visita foi remarcada”). Erro da A: “rota” aparece depois do pronome; erro da C e D: não faz referência espacial exofórica nem ao interlocutor.' },
      { q: 'No período “O mutirão de limpeza ocorreu conforme o cronograma, conquanto a chuva tivesse atrasado o início dos trabalhos”, o conectivo “conquanto” pode ser substituído, sem alteração de sentido e de modo verbal, por:', options: ['Portanto.', 'Embora.', 'Porquanto.', 'Conforme.'], ans: 1, difficulty: 'Intermediário', questionType: 'Gramática e Texto', comment: 'Gabarito: B. “Conquanto” é conjunção concessiva sinônima de “embora / ainda que”, exigindo também o modo subjuntivo (“tivesse atrasado”). Erro da A: “portanto” é conclusiva; erro da C: “porquanto” é causal/explicativa (= porque) e não cabe no contraste; erro da D: “conforme” expressa conformidade e não concessão.' },
      { q: 'Em “O agente examina dois fatores no imóvel: a vedação da caixa-d’água e o escoamento das calhas. Este evita água empoçada no telhado; aquela impede a entrada de fêmeas do vetor”, os pronomes “Este” e “aquela” retomam, respectivamente:', options: ['O escoamento das calhas e a vedação da caixa-d’água.', 'A vedação da caixa-d’água e o escoamento das calhas.', 'O agente e o imóvel.', 'O vetor e o telhado.'], ans: 0, difficulty: 'Intermediário', questionType: 'Gramática e Texto', comment: 'Gabarito: A. Na coesão distributiva, “este” retoma o elemento mais próximo na frase (último citado: “o escoamento das calhas”, masculino) e “aquela” o mais distante (primeiro citado: “a vedação da caixa-d’água”, feminino). Erro da B: inverte os referentes e desrespeita o gênero gramatical; erro da C e D: termos que não correspondem ao par anunciado após os dois-pontos.' },
    ],
    flashcards: [
      ['Qual o teste para o valor de um conectivo?', 'Substituí-lo por uma paráfrase e conferir a relação entre as ideias no período.'],
      ['Qual o valor semântico de “conquanto” e “porquanto”?', 'Conquanto é concessivo (= embora); porquanto é causal/explicativo (= porque).'],
      ['Como funcionam “este” e “aquele” ao retomar dois termos já citados?', 'Este retoma o termo mais próximo (último citado); aquele retoma o mais distante (primeiro citado).'],
    ],
    references: [reading, grammar],
  },
  {
    id: 'por_7', title: 'Texto coeso pode ser incoerente: diagnóstico e reescrita',
    theory: `## Dois planos que se relacionam
Coesão diz respeito aos recursos de ligação: pronomes, elipses, repetição controlada, substituição lexical e conectores. Coerência envolve a construção de um sentido global compatível com as informações, o gênero, o contexto e os conhecimentos mobilizados. Um texto pode conter muitos conectivos e continuar contraditório.

Veja: “Nenhuma visita foi realizada naquele dia. Por isso, todas as visitas daquele mesmo dia foram concluídas pela equipe.” As expressões conectam formalmente as frases, mas, mantendo o mesmo sentido de visita e o mesmo recorte temporal, as afirmações são incompatíveis. Inserir **portanto** não transforma contradição em conclusão válida.

## Progressão e continuidade
Um texto precisa manter um tema e trazer informação nova. Repetir “a prevenção é importante” em todos os parágrafos mantém o assunto, mas não o desenvolve. Para progredir, explique por que é importante, como se realiza e quais obstáculos existem. Por outro lado, inserir um parágrafo sem relação com o problema pode quebrar a unidade temática.

Em “A equipe visitou a escola. O estabelecimento estava fechado”, o segundo termo retoma o primeiro por relação lexical. Já “a equipe encontrou Maria depois de conversar com Ana, e ela apresentou o relatório” permite dúvida sobre quem apresentou o documento. A coesão pronominal é formalmente possível, mas a referência não está suficientemente determinada.

## Reescrita comentada
Versão imprecisa: “O bairro recebeu a visita. Eles orientaram os moradores e isso resolveu tudo.” Versão mais precisa: “A equipe visitou o bairro e orientou os moradores sobre a proteção dos recipientes. Uma nova vistoria verificará as condições posteriores.” A segunda versão identifica o agente da ação, explicita o conteúdo da orientação e evita anunciar um resultado total sem evidência.

Ao revisar, pergunte: cada pronome tem referente reconhecível? As conclusões decorrem das premissas? O recorte temporal é consistente? Há informação nova? Uma redação curta pode ser coerente, e uma redação longa pode repetir a mesma ideia sem aprofundamento.`,
    summary: `Coesão liga; coerência constrói sentido global. Conectivo não corrige contradição. Progressão exige informação nova. Identifique referentes e limite conclusões ao que foi efetivamente afirmado.

| Mecanismo Textual | Função no Texto | Exemplo Correto | Falha Frequente em Provas |
| --- | --- | --- | --- |
| **Coesão Referencial Anafórica** | Retoma termo já expresso no texto. | "O **laudo** ficou pronto; **ele** foi enviado." | Pronome com dois antecedentes possíveis gerando ambiguidade. |
| **Coesão Referencial Catafórica** | Antecipa termo que será enunciado adiante. | "Só desejamos **isto**: **que todos cooperem**." | Empregar *esse/isso* quando se quer apontar para o que ainda virá (*este/isto*). |
| **Coesão Lexical** | Substitui por sinônimo, hiperônimo ou nome síntese. | "Visitamos **Porto Velho**. A **capital rondoniense** avançou." | Usar termo substituto incompatível com a natureza do antecedente. |
| **Coerência Lógica (Não Contradição)** | Compatibilidade entre premissas e conclusão do texto. | "Havia larvas; logo, o depósito foi tratado." | Usar conectivo conclusivo (*portanto*) para ligar ideias opostas ou contraditórias. |`,
    questions: [
      { q: 'Um texto usa “portanto”, mas sua conclusão contradiz a informação anterior. O problema central é:', options: ['Falta obrigatória de adjetivos.', 'Incoerência, apesar de haver ligação formal.', 'Uso de palavras longas.', 'Ausência necessária de verbos.'], ans: 1, difficulty: 'Fácil', questionType: 'Gramática e Texto', comment: 'Gabarito: B. A simples presença do conector formal (“portanto”) cria aparência de coesão, mas não sustenta coerência quando premissa e conclusão se contradizem. Erro da A: adjetivos não são exigência de coerência lógica; erro da C: extensão vocabular não gera contradição; erro da D: a incompatibilidade é lógico-semântica, não ausência verbal.' },
      { q: 'Qual revisão melhora a clareza de “Maria conversou com Ana e ela registrou a visita”?', options: ['Maria conversou com Ana e alguém registrou.', 'Ela conversou com ela e ela registrou.', 'Maria conversou com Ana; em seguida, Ana registrou a visita.', 'Maria conversou e sua visita foi dela.'], ans: 2, difficulty: 'Fácil', questionType: 'Gramática e Texto', comment: 'Gabarito: C. Explicitar o nome “Ana” desfaz a ambiguidade pronominal de “ela”. Erro da A: substitui por indefinido vago (“alguém”); erro da B: agrava a indeterminação referencial multiplicando pronomes ambíguos; erro da D: redação truncada e igualmente obscura.' },
      { q: 'Em “A supervisora destacou este ponto prioritário: a atualização diária dos croquis de quarteirão”, o pronome demonstrativo “este” realiza referência:', options: ['Catafórica, anunciando o termo que será explicitado após os dois-pontos.', 'Anafórica, retomando uma palavra do parágrafo anterior.', 'Exofórica exclusiva de tempo passado.', 'Incoerente, pois dois-pontos proíbem pronomes demonstrativos.'], ans: 0, difficulty: 'Intermediário', questionType: 'Gramática e Texto', comment: 'Gabarito: A. “Este” projeta a leitura para frente (catáfora), introduzindo o segmento apositivo após os dois-pontos. Erro da B: retomada regressiva seria anáfora (tipicamente “esse/isso”); erro da C: o referente está dentro do texto (endofórico), não fora dele; erro da D: dois-pontos combinam regularmente com demonstrativos catafóricos.' },
      { q: 'Assinale o período que apresenta quebra de coerência lógica pelo emprego inadequado do conectivo:', options: ['O imóvel estava fechado no horário comercial; por isso, o agente agendou retorno em horário alternativo.', 'Embora o morador limpasse o pátio semanalmente, a calha superior acumulava água sem que ele percebesse.', 'Os índices de infestação subiram de forma acentuada no bairro; portanto, nenhuma ação de controle precisa ser mantida.', 'Como o laboratório confirmou a positividade das amostras, a vigilância intensificou o bloqueio no quarteirão.'], ans: 2, difficulty: 'Intermediário', questionType: 'Gramática e Texto', comment: 'Gabarito: C. Alta acentuada de infestação exige reforçar o controle; concluir que “nenhuma ação precisa ser mantida” quebra a coerência pragmática e lógica com “portanto”. Erro da A: retorno alternativo é consequência lógica de imóvel fechado; erro da B: “Embora” articula corretamente concessão possível; erro da D: “Como” introduz causa coerente com a intensificação do bloqueio.' },
    ],
    flashcards: [
      ['Muitos conectivos garantem coerência?', 'Não. As ideias ainda precisam ser compatíveis e relacionadas ao contexto e ao tema.'],
      ['Qual a diferença entre anáfora e catáfora na coesão referencial?', 'Anáfora retoma um termo já dito (usa-se esse/isso); catáfora anuncia um termo que ainda será dito (usa-se este/isto).'],
    ],
    references: [reading],
  },
  {
    id: 'por_8', title: 'Classe, função e formação: três análises da mesma palavra',
    theory: `## Classe gramatical e função sintática não são sinônimos
Classe caracteriza o comportamento da palavra no contexto; função indica sua relação com os demais termos da oração. Em “o agente cuidadoso registrou tudo”, **agente** é substantivo e núcleo do sujeito; **cuidadoso** é adjetivo e modifica esse núcleo. Em “o cuidadoso evitou o erro”, o adjetivo foi empregado substantivamente. O artigo ajuda a reconhecer essa mudança de emprego.

Pronomes acompanham ou substituem nomes; artigos delimitam nomes; numerais podem indicar quantidade ou ordem. Preposições estabelecem relações de dependência; conjunções conectam termos ou orações. Não classifique uma palavra apenas pela forma: **que** pode atuar como pronome relativo em “o laudo que chegou” e como conjunção integrante em “espero que o laudo chegue”. No primeiro caso, retoma **laudo**; no segundo, introduz o conteúdo esperado.

## Flexão e derivação
Flexionar modifica uma palavra dentro de seu paradigma: “agente/agentes” marca número; “visitava/visitarei” altera tempo e pessoa. Derivar cria uma unidade lexical: “feliz/felicidade”. O sufixo pode mudar a classe, como de adjetivo para substantivo. Um mesmo radical não significa que todos os termos tenham o mesmo emprego sintático.

Prefixação e sufixação podem ocorrer em momentos independentes: “infelizmente” relaciona-se a “infeliz” e a “felizmente”. Na parassíntese, o processo formador exige a associação dos dois afixos na estrutura relevante, como em “envelhecer”, formado a partir de **velho**. Não basta encontrar prefixo e sufixo para concluir que houve parassíntese.

## Teste aplicado
Em “os registros foram rapidamente conferidos”, **rapidamente** modifica a forma como a conferência ocorreu: é advérbio. Em “a rápida conferência evitou atraso”, **rápida** caracteriza o nome **conferência**: é adjetivo. A diferença não é apenas o sufixo, mas o termo sobre o qual cada palavra atua.`,
    summary: `Classe, função e formação respondem a perguntas diferentes. Flexão ajusta o paradigma; derivação forma palavra. Analise o contexto de que/se e o termo modificado pelo adjetivo ou advérbio.

| Processo de Formação | Como Reconhecer na Prática | Exemplos Clássicos | Teste Diferencial |
| --- | --- | --- | --- |
| **Derivação Prefixal e Sufixal** | Tem prefixo e sufixo, mas a palavra continua existindo se retirarmos um deles. | *infelizmente* (*infeliz* existe; *felizmente* existe), *deslealdade*. | Retirando o sufixo ou o prefixo, resta palavra dicionarizada. |
| **Derivação Parassintética** | Prefixo e sufixo entram simultaneamente; sem um deles, a forma não existe. | *envelhecer, amanhecer, entristecer, subterrâneo*. | Não existe *"envelho"* nem *"velhecer"*. |
| **Derivação Regressiva** | Redução da palavra primitiva (geralmente verbo → substantivo abstrato de ação). | *combate* (de combater), *busca* (de buscar), *recuo* (de recuar). | Se o substantivo indica ação, deriva do verbo; se indica objeto concreta, o verbo deriva dele. |
| **Derivação Imprópria (Conversão)** | Mudança de classe gramatical no contexto sem alterar a forma da palavra. | "O **olhar** atento do agente"; "Falaram **baixo** na sala". | Verbo substantivado por artigo (*o olhar*) ou adjetivo funcionando como advérbio (*falar baixo*). |
| **Composição (Justaposição × Aglutinação)** | União de dois ou mais radicais sem perda fonética × com fusão/perda fonética. | *segunda-feira, passatempo* (justaposição) × *planalto, aguardente* (aglutinação). | Na justaposição os radicais mantêm sua integridade sonora. |`,
    questions: [
      { q: 'Em “a rápida conferência”, “rápida” é:', options: ['Advérbio que modifica conferência.', 'Adjetivo que caracteriza conferência.', 'Conjunção integrante.', 'Verbo flexionado.'], ans: 1, difficulty: 'Fácil', questionType: 'Morfologia', comment: 'Gabarito: B. “Rápida” concorda em gênero e número com o substantivo “conferência”, caracterizando-o como adjetivo. Erro da A: advérbio é invariável e modifica verbo, adjetivo ou outro advérbio; erro da C: conjunção liga orações (ex.: que, se); erro da D: não apresenta flexão verbal de tempo/pessoa.' },
      { q: 'Qual par exemplifica flexão de número, em vez de derivação lexical?', options: ['Feliz/felicidade.', 'Útil/inútil.', 'Relatório/relatórios.', 'Claro/clareza.'], ans: 2, difficulty: 'Fácil', questionType: 'Morfologia', comment: 'Gabarito: C. “Relatório/relatórios” acrescenta apenas a desinência de plural (-s), mantendo mesma classe gramatical e lexema (flexão nominal). Erro da A: acréscimo de sufixo derivacional (-idade) formando substantivo abstrato; erro da B: derivação prefixal (in-); erro da D: sufixo derivacional (-eza) mudando adjetivo para substantivo.' },
      { q: 'Assinale a alternativa em que a palavra destacada foi formada por derivação parassintética:', options: ['Os agentes trabalharam até o **anoitecer** para concluir o bloqueio.', 'A **infelizmente** recorrente recusa de visita exige orientação educativa.', 'O **recomeço** do ciclo epidemiológico ocorreu em janeiro.', 'A **limpeza** do canal evitou o transbordamento.'], ans: 0, difficulty: 'Difícil', questionType: 'Morfologia', comment: 'Gabarito: A. “Anoitecer” forma-se pelo acoplamento simultâneo do prefixo “a-” e do sufixo “-ecer” ao radical “noite”, não existindo “anoite” nem “noitecer”. Erro da B: “infelizmente” é prefixal e sufixal, pois existem “infeliz” e “felizmente”; erro da C: “recomeço” deriva por prefixação de “começo” (ou regressiva + prefixo); erro da D: “limpeza” apresenta apenas sufixo (-eza) sobre “limpo”.' },
      { q: 'No período “Os técnicos conversaram **bastante** sobre a logística e trouxeram **bastantes** amostras para o laboratório”, as palavras destacadas classificam-se, respectivamente, como:', options: ['Advérbio de intensidade (invariável) e pronome indefinido (variável).', 'Adjetivo e advérbio.', 'Preposição e conjunção coordenativa.', 'Substantivo e numeral ordinal.'], ans: 0, difficulty: 'Intermediário', questionType: 'Morfologia', comment: 'Gabarito: A. O primeiro “bastante” modifica o verbo “conversaram” (advérbio invariável); o segundo quantifica o substantivo “amostras” (= muitas amostras, pronome indefinido variável). Erro da B: inverte o caráter invariável/variável das ocorrências; erro da C e D: não exerce função relacional (preposição/conjunção), núcleo nominal nem ordem numérica.' },
    ],
    flashcards: [
      ['Encontrar prefixo e sufixo basta para reconhecer parassíntese?', 'Não. É preciso analisar se a formação exige os dois afixos simultaneamente (ex.: entristecer é parassíntese; infelizmente não é).'],
      ['Quando a palavra “bastante” vai para o plural?', 'Quando acompanha ou substitui um substantivo, equivalendo a “muitos/muitas” (pronome indefinido ou adjetivo). Como advérbio (= muito), é invariável.'],
    ],
    references: [grammar],
  },
  {
    id: 'por_9', title: 'Tempos, modos, aspecto e transformação de vozes passo a passo',
    theory: `## Tempo não é apenas uma data
O tempo verbal situa o processo em relação a um ponto de referência. O aspecto mostra como esse processo é apresentado: concluído, em curso, habitual ou anterior a outro. “A equipe visitou o imóvel” apresenta a visita como concluída no passado; “a equipe visitava o imóvel quando choveu” apresenta uma ação em desenvolvimento em relação à chuva. A troca não preserva exatamente o recorte temporal.

O presente pode indicar hábito (“a equipe registra as visitas”), descrição geral (“a água ocupa espaço”) ou evento previsto em contexto apropriado (“a reunião começa amanhã”). Portanto, não conclua que presente significa sempre ação acontecendo agora.

## Modo e correlação
O indicativo apresenta o conteúdo como afirmado; o subjuntivo pode marcar hipótese, desejo ou dependência de outra expressão; o imperativo dirige pedido, conselho ou ordem. Compare “se chover, a equipe reorganizará a rota” e “se chovesse, a equipe reorganizaria a rota”. A primeira estrutura formula condição futura; a segunda, uma situação hipotética com outra perspectiva modal. A correlação deve ser examinada junto do sentido, sem decorar uma única combinação para todos os casos.

Irregularidades exigem reconhecer o verbo de origem: **intervir** acompanha **vir** (“interveio”, “intervier”); **ver** produz “se eu vir”; **vir** produz “se eu vier”. A terminação semelhante não autoriza misturar os paradigmas.

## Voz passiva com preservação do tempo
Ativa: “Os agentes registraram as ocorrências.” Identifique sujeito agente, verbo transitivo direto e objeto direto. Passiva: “As ocorrências foram registradas pelos agentes.” O objeto direto torna-se sujeito paciente; o auxiliar mantém o pretérito perfeito; o particípio concorda com **ocorrências**. Se a ativa fosse “registravam”, a passiva seria “eram registradas”.

Nem todo verbo admite essa transformação: em “os agentes chegaram cedo”, não há objeto direto para assumir a posição de sujeito paciente. “Registram-se ocorrências” permite análise passiva; já “precisa-se de apoio” tem construção impessoalizante com verbo transitivo indireto.

## Verbos derivados de TER, VIR e PÔR
Quatro famílias de verbos irregulares respondem por grande parte das questões de flexão verbal:
- Derivados de **TER** (*manter, conter, deter, reter*): *ele manteve* (pretérito perfeito), *se ele mantiver* (futuro do subjuntivo).
- Derivados de **VIR** (*intervir, convir, provir, sobrevir*): *ele interveio* (pretérito perfeito), *se ele intervier* (futuro do subjuntivo), *eles intervieram*.
- Derivados de **PÔR** (*compor, propor, repor, supor, depor*): *ele propôs* (pretérito perfeito), *se ele propuser* (futuro do subjuntivo).
- Derivados de **VER** (*prever, rever, antever*): *ele previu* (pretérito perfeito), *se ele previr* (futuro do subjuntivo).`,
    summary: `Compare tempo, aspecto e modo. Intervir segue vir; se eu vir vem de ver; se eu vier vem de vir. Na passiva, preserve o tempo do auxiliar e faça o particípio concordar com o sujeito paciente.

| Tempo / Correlação ou Derivado | Voz Ativa / Forma de Origem | Conversão Passiva / Flexão Padrão | Pegadinha Clássica |
| --- | --- | --- | --- |
| **Presente do Indicativo** | "A equipe **inspeciona** os lotes." | "Os lotes **são inspecionados** pela equipe." | Trocar por *foram inspecionados* (altera para pretérito perfeito). |
| **Pretérito Imperfeito** | "A equipe **inspecionava** os lotes." | "Os lotes **eram inspecionados** pela equipe." | Confundir aspecto contínuo passado (*eram*) com pontual (*foram*). |
| **Pretérito Mais-que-Perfeito** | "A equipe **inspecionara** (tinha inspecionado) os lotes." | "Os lotes **foram/tinham sido inspecionados**." | Esquecer que a terminação *-ra* átona equivale a *tinha + particípio*. |
| **Família TER / VIR / PÔR / VER** | *Manter / Intervir / Propor / Prever* | *Manteve, mantiver / Interveio, intervier / Propôs, propuser / Previu, previr* | Formas inexistentes na norma-padrão: *"interviu"*, *"se eu prever"*, *"se ele manter"*. |`,
    questions: [
      { q: 'A passiva correspondente a “A equipe conferia os registros” é:', options: ['Os registros foram conferidos pela equipe.', 'Os registros eram conferidos pela equipe.', 'Os registros serão conferidos pela equipe.', 'A equipe era conferida pelos registros.'], ans: 1, difficulty: 'Fácil', questionType: 'Gramática e Texto', comment: 'Gabarito: B. Na transposição da voz ativa para a voz passiva analítica, o auxiliar “ser” mantém o pretérito imperfeito de “conferia” (“eram conferidos”). Erro da A: “foram conferidos” altera para pretérito perfeito; erro da C: muda para futuro do presente; erro da D: inverte agente e sujeito paciente tornando o sentido absurdo.' },
      { q: 'Qual alternativa emprega corretamente o futuro do subjuntivo de ver?', options: ['Se eu ver o problema, avisarei.', 'Se eu vir o problema, avisarei.', 'Se eu vier o problema, avisarei.', 'Se eu vejo o problema, avisaria.'], ans: 1, difficulty: 'Intermediário', questionType: 'Gramática e Texto', comment: 'Gabarito: B. O futuro do subjuntivo de “ver” é “vir” (“Se eu vir”). Erro da A: “ver” é infinitivo pessoal/impessoal, inadequado após conjunção condicional futura; erro da C: “vier” é futuro do subjuntivo de “vir” (não de “ver”); erro da D: mistura presente do indicativo (“vejo”) com futuro do pretérito (“avisaria”), quebrando a correlação verbal.' },
      { q: 'Assinale a frase em que a conjugação dos verbos derivados de “vir”, “ter” e “pôr” respeita rigorosamente a norma-padrão:', options: ['O supervisor interveio na discussão e propôs que a equipe mantivesse o roteiro original.', 'O supervisor interviu na discussão e propôs que a equipe mantesse o roteiro original.', 'Se o coordenador intervir no setor, ele reporá os insumos imediatamente.', 'Quando os técnicos preverem a estiagem, conterão o desperdício.'], ans: 0, difficulty: 'Difícil', questionType: 'Gramática e Texto', comment: 'Gabarito: A. Verbos derivados seguem seus primitivos: intervir ← vir (“interveio”), propor ← pôr (“propôs”), manter ← ter (“mantivesse”). Erro da B: “interviu” e “mantesse” são desvios graves de conjugação; erro da C: o futuro do subjuntivo correto de intervir é “se intervier”; erro da D: o futuro do subjuntivo correto de prever é “quando previrem”.' },
      { q: 'No período “Quando a equipe chegou ao galpão, o proprietário já **retirara** os pneus inservíveis”, a forma verbal destacada está no:', options: ['Pretérito mais-que-perfeito do indicativo, indicando ação passada anterior a outra também passada.', 'Futuro do presente simples, indicando previsão.', 'Presente do subjuntivo, indicando dúvida.', 'Pretérito imperfeito do subjuntivo, indicando condição irreal.'], ans: 0, difficulty: 'Intermediário', questionType: 'Gramática e Texto', comment: 'Gabarito: A. “Retirara” (sem acento agudo, paroxítona) é pretérito mais-que-perfeito simples do indicativo (= tinha retirado), expressando anterioridade em relação a “chegou”. Erro da B: futuro do presente levaria acento agudo na última sílaba (“retirará”); erro da C e D: formas correspondentes no subjuntivo seriam “retire” e “retirasse”.' },
    ],
    flashcards: [
      ['Como distinguir “se eu vir” de “se eu vier”?', 'Vir corresponde ao futuro do subjuntivo de ver; vier corresponde ao futuro do subjuntivo de vir.'],
      ['Como manter o tempo na passiva de “registravam”?', 'Use eram registradas/registrados, conforme o sujeito paciente.'],
      ['Como se conjugam “intervir” e “manter” no pretérito perfeito e no futuro do subjuntivo?', 'Ele interveio / se ele intervier (segue vir); ele manteve / se ele mantiver (segue ter).'],
    ],
    references: [grammar],
  },
  {
    id: 'por_10', title: 'Concordância guiada pelo núcleo e pelas funções do se',
    theory: `## Encontre o núcleo antes de flexionar
Em “a fiscalização dos imóveis começou cedo”, o sujeito tem núcleo singular **fiscalização**. O plural **imóveis** integra um termo dependente e não comanda a concordância do verbo. A distância entre o núcleo e o verbo é uma fonte comum de erro; retirar provisoriamente os termos acessórios ajuda: “a fiscalização começou”.

Com sujeito composto anteposto, a regra geral leva o verbo ao plural: “a agente e a supervisora chegaram”. Sujeito composto posposto e expressões partitivas admitem particularidades; não transforme um caso específico em regra absoluta. Em “a maioria dos agentes chegou/chegaram”, ambas as concordâncias podem ser admitidas, conforme o foco adotado.

## Haver, existir e fazer
**Haver**, com sentido de existir, é impessoal: “havia registros pendentes”. Na locução, essa impessoalidade recai no auxiliar: “deve haver registros”. **Existir** tem sujeito e concorda com ele: “existiam registros”, “devem existir registros”. **Fazer**, indicando tempo decorrido, também é impessoal: “faz dois meses”. O plural do termo seguinte não transforma esses usos em verbos pessoais.

## Dois usos do se comparados
“Conferem-se os relatórios” corresponde a “os relatórios são conferidos”: **se** é partícula apassivadora e o verbo concorda com o sujeito paciente plural. Em “precisa-se de agentes”, a expressão **de agentes** não é sujeito, pois integra o complemento preposicionado; **se** indetermina o sujeito e o verbo fica no singular.

## Concordância nominal em contexto
“As fichas seguem anexas”: **anexas** caracteriza fichas e concorda. “As fichas seguem em anexo”: a locução não recebe essa flexão. “As agentes estavam meio cansadas”: **meio** significa um pouco e é advérbio. “Meia garrafa”: o numeral fracionário concorda com garrafa. O teste é reconhecer a função, em vez de decorar que uma palavra é sempre variável ou invariável.`,
    summary: `O núcleo do sujeito comanda a regra geral. Haver existencial e fazer temporal são impessoais. Existir concorda. Na passiva com se, procure o sujeito paciente; na indeterminação, não transforme complemento preposicionado em sujeito.

| Caso de Concordância | Regra da Norma-Padrão | Exemplo Correto | Contraste / Observação |
| --- | --- | --- | --- |
| **Haver (existir / tempo)** | Impessoal (3ª pessoa do singular), inclusive no verbo auxiliar. | "**Houve** falhas" / "**Deve haver** soluções". | *Existir*, *ocorrer* e *acontecer* são pessoais: "**Devem existir** soluções". |
| **Fazer (tempo / clima)** | Impessoal (3ª pessoa do singular), inclusive em locução. | "**Faz** dez anos" / "**Vai fazer** três meses". | Nunca use *"Fazem dez anos"* para tempo decorrido. |
| **Partícula Apassivadora (VTD/VTDI + se)** | Verbo concorda com o sujeito paciente. | "**Vistoriaram-se** os galpões" (= foram vistoriados). | Sem preposição no termo paciente. |
| **Índice de Indeterminação (VTI/VI/VL + se)** | Verbo obrigatoriamente na 3ª pessoa do singular. | "**Precisa-se** de agentes" / "**Confia-se** nos laudos". | O termo preposicionado (*de agentes*) é objeto indireto, não sujeito. |
| **É proibido / É necessário / É bom** | Sem determinante: invariável; com artigo/pronome: concorda. | "Água parada **é perigoso**" × "**A** água parada **é perigosa**". | Verifique a presença de artigo antes do substantivo sujeito. |
| **Anexo / Mesmo / Próprio / Quites / Menos** | *Anexo, mesmo, próprio, quite* concordam; *em anexo* e *menos* são invariáveis. | "Elas **mesmas** enviaram as planilhas **anexas**". | A palavra *"menas"* não existe na língua portuguesa. |`,
    questions: [
      { q: 'Qual alternativa segue a concordância padrão?', options: ['Devem haver novas visitas.', 'Deve haver novas visitas.', 'Houveram novas visitas.', 'Fazem dois meses que houve visitas.'], ans: 1, difficulty: 'Fácil', questionType: 'Gramática e Texto', comment: 'Gabarito: B. O verbo “haver” existencial é impessoal e transmite essa impessoalidade ao auxiliar da locução (“Deve haver”). Erro da A: flexiona o auxiliar indevidamente (“Devem haver”); erro da C: “houveram” pluraliza verbo impessoal; erro da D: “fazer” indicando tempo decorrido é impessoal (“Faz dois meses”).' },
      { q: 'Qual frase apresenta se apassivador?', options: ['Precisa-se de apoio.', 'Vive-se bem aqui.', 'Conferem-se os relatórios.', 'Trabalha-se muito.'], ans: 2, difficulty: 'Fácil', questionType: 'Gramática e Texto', comment: 'Gabarito: C. “Conferir” é VTD sem preposição no paciente (“os relatórios são conferidos”), logo “se” é partícula apassivadora e o verbo concorda no plural. Erro da A: “precisar de” é VTI, logo “se” é índice de indeterminação do sujeito (IIS); erro da B e D: verbos intransitivos (“viver” e “trabalhar”) exigem IIS e singular obrigatório.' },
      { q: 'Assinale a alternativa em que a concordância nominal respeita integralmente a norma-padrão:', options: ['Seguem anexo as fichas de campo e há menas pendências hoje.', 'As próprias agentes conferiram as planilhas anexas e ficaram quites com a meta mensal.', 'É proibida entrada de pessoas estranhas sem crachá.', 'Os moradores ficaram meios preocupados com o resultado da vistoria.'], ans: 1, difficulty: 'Intermediário', questionType: 'Gramática e Texto', comment: 'Gabarito: B. “Próprias” (agente fem. pl.), “anexas” (planilhas) e “quites” (elas ficaram quites) concordam perfeitamente. Erro da A: “anexas” deve concordar com fichas, e “menas” não existe (correto: “menos”); erro da C: sem determinante antes de “entrada”, usa-se “É proibido”; erro da D: “meio” com sentido de “um pouco” é advérbio invariável (“meio preocupados”).' },
      { q: 'Em “Mais de um agente **participou** do treinamento, mas cerca de vinte supervisores **acompanharam** a prática”, a flexão dos verbos justifica-se porque:', options: ['Expressões com “mais de um” levam, em regra, o verbo ao singular, enquanto “cerca de + numeral plural” leva ao plural.', 'Ambos os verbos são impessoais como o verbo haver.', 'O verbo participar não possui forma plural no pretérito.', 'A preposição “de” obriga todos os verbos do período a ficarem no plural.'], ans: 0, difficulty: 'Intermediário', questionType: 'Gramática e Texto', comment: 'Gabarito: A. “Mais de um” leva em regra o verbo ao singular (salvo reciprocidade ou repetição); “cerca de vinte” exige plural conforme o numeral “vinte”. Erro da B: “participar” e “acompanhar” são pessoais com sujeito explícito; erro da C: existe “participaram”; erro da D: preposição não comanda concordância verbal.' },
    ],
    flashcards: [
      ['Deve haver ou devem haver registros?', 'Deve haver: haver existencial é impessoal, inclusive em locução verbal.'],
      ['Qual a diferença entre “É necessário cautela” e “É necessária a cautela”?', 'Sem artigo determinante, o adjetivo predicativo fica invariável no masculino singular; com artigo (“a cautela”), concorda no feminino.'],
      ['Como diferenciar “se” partícula apassivadora de “se” índice de indeterminação do sujeito?', 'Com VTD/VTDI sem preposição no sujeito paciente, o “se” é apassivador e o verbo concorda (Analisaram-se os casos); com VTI/VI/VL, indetermina o sujeito e o verbo fica no singular (Trata-se de casos graves).'],
    ],
    references: [{ title: 'FUNAG — concordância verbal', url: 'https://www.funag.gov.br/manual/index.php?title=Concord%C3%A2ncia_verbal', section: 'Regra geral; partitivos; verbos impessoais.' }],
  },
  {
    id: 'por_11', title: 'Regência e pronomes relativos: reconstrução do complemento',
    theory: `## A relação exigida pelo sentido
Regência trata da relação entre um termo e seus complementos. A mesma forma verbal pode mudar de regência e de significado. **Aspirar** pode significar sorver (“aspirar o ar”) ou desejar (“aspirar ao cargo”). **Assistir**, no sentido formal de presenciar, costuma construir-se com a preposição a (“assistir à apresentação”). O enunciado precisa indicar o sentido e o registro esperado; não se deve declarar que um verbo tem uma única regência em todos os usos.

Na redação formal, compare “lembrar o prazo” com “lembrar-se do prazo”. A construção pronominal seleciona de. “Preferir o planejamento à improvisação” explicita os dois termos comparados; na norma de referência de concursos, evite acrescentar “mais” e “do que” a essa estrutura.

## Relativo com preposição passo a passo
Comece por “a equipe necessita de equipamentos”. Substitua equipamentos pelo antecedente **os equipamentos** e forme a oração relativa: “os equipamentos **de que** a equipe necessita”. A preposição acompanha a exigência do verbo, mesmo quando o complemento se desloca. Outro exemplo: “a agente confia no supervisor” produz “o supervisor **em quem** a agente confia”.

Em “a unidade a que me dirigi”, **a** vem de dirigir-se a. **Onde** representa uma relação locativa equivalente a em que em muitos usos; **aonde** reúne a + onde. Movimento, sozinho, não basta: “o lugar de onde saí” exige de por causa da relação de origem.

## Regência nominal e cujo
Nomes também selecionam complementos: “necessidade de apoio”, “favorável à proposta”, “compatível com o serviço”. O pronome **cujo** expressa relação entre possuidor e possuído e concorda com o segundo: “a escola cujas salas foram vistoriadas”. Não se insere artigo depois de cujo: “cujas as salas” é construção inadequada na norma-padrão.

Para revisar uma frase, recoloque os termos na ordem mais simples e pergunte qual preposição a relação exige. Isso resolve melhor que memorizar apenas uma lista descontextualizada.

## Informar, avisar, cientificar e implicar
Verbos bitransitivos como **informar, avisar, certificar, notificar e prevenir** admitem dupla construção na norma-padrão: *informar algo a alguém* (OD de coisa + OI de pessoa) ou *informar alguém de/sobre algo* (OD de pessoa + OI de coisa). O que não se admite é colocar dois objetos diretos ou dois indiretos simultaneamente (ex.: *"informou ao morador que..."* com ambas as funções preposicionadas). Já o verbo **implicar**, no sentido de *acarretar / produzir como consequência*, é transitivo direto na norma-padrão (“O acúmulo de lixo **implica** risco sanitário”, sem a preposição *em*).`,
    summary: `Regência depende de sentido e construção. Na oração relativa, recupere a preposição do verbo ou nome. Onde/aonde/de onde exigem relação adequada. Cujo concorda com o termo possuído e não admite artigo depois.

| Verbo | Sentido 1 (Transitivo Direto — sem preposição) | Sentido 2 (Transitivo Indireto — com preposição) | Observação de Prova |
| --- | --- | --- | --- |
| **Aspirar** | Inalar, sorver: *"Aspirou o pó químico."* | Almejar, desejar: *"Aspira **ao** cargo de ACE."* | Na acepção de desejar, não admite *lhe* (usa-se *a ele*). |
| **Assistir** | Dar suporte/ajuda (TD ou TI): *"O médico assistiu o paciente."* | Presenciar, ver (TI): *"Assistiu **ao** treinamento."* / Caber direito: *"Assiste **ao** servidor."* | No sentido de ver/presenciar, exige preposição **a**. |
| **Visar** | Mirar ou pôr visto: *"Visou o passaporte."* | Ter por objetivo (TI): *"A ação visa **à** redução de focos."* | Com sentido de objetivar, rege preposição **a** na norma-padrão. |
| **Implicar** | Acarretar, gerar consequência: *"A recusa implica notificação."* | Ter implicância (*com*) ou envolver-se (*em*): *"Implicou-se em fraude."* | No sentido de acarretar, é VTD (evite *"implica em"*). |
| **Obedecer / Desobedecer** | — | Sempre Transitivos Indiretos (preposição **a**): *"Obedeceu **ao** protocolo."* | Embora sejam VTI, admitem voz passiva por tradição gramatical. |
| **Preferir** | — | VTDI (*preferir X **a** Y*): *"Prefiro prevenção **a** remediação."* | Não admite intensificadores (*muito mais, antes*) nem *do que*. |`,
    questions: [
      { q: 'Complete: “Estes são os materiais ___ a equipe necessita.”', options: ['que', 'de que', 'cujo', 'onde'], ans: 1, difficulty: 'Fácil', questionType: 'Gramática e Texto', comment: 'Gabarito: B. Quem necessita, necessita DE algo (“necessita dos materiais”); por isso a preposição “de” migra para antes do pronome relativo (“de que”). Erro da A: omite a preposição exigida pelo verbo necessitar; erro da C: “cujo” indica posse e não caberia antes de “a equipe” sem vínculo possessivo; erro da D: “onde” retoma lugar físico, não materiais.' },
      { q: 'Qual construção emprega cujo corretamente?', options: ['A escola cujas as salas foram vistoriadas.', 'A escola cuja as salas foram vistoriadas.', 'A escola cujas salas foram vistoriadas.', 'A escola cujo salas foram vistoriadas.'], ans: 2, difficulty: 'Fácil', questionType: 'Gramática e Texto', comment: 'Gabarito: C. “Cujas” concorda em gênero e número com o termo consequente/possuído (“salas”, fem. pl.) e proíbe artigo definido após si. Erro da A: inclui artigo indevido (“as”); erro da B: falha na concordância de número e insere artigo; erro da D: deixa “cujo” no masculino singular diante de “salas”.' },
      { q: 'Assinale a alternativa que respeita as regras de regência verbal da norma-padrão:', options: ['A campanha visa mais do que nunca na erradicação dos criadouros.', 'Preferimos atuar preventivamente nos bairros do que remediar surtos graves.', 'O descarte irregular de pneus implica proliferação de vetores, razão por que obedecemos às normas sanitárias.', 'O agente informou ao morador de que o retorno ocorreria na sexta-feira.'], ans: 2, difficulty: 'Difícil', questionType: 'Gramática e Texto', comment: 'Gabarito: C. “Implicar” (no sentido de acarretar) é VTD sem preposição (“implica proliferação”), e “obedecer” é VTI exigindo preposição “a” (“às normas”). Erro da A: “visar” (objetivar) rege preposição “a” (“visa à erradicação”), não “em”; erro da B: “preferir” rejeita “do que” (correto: “Preferimos atuar... a remediar”); erro da D: incorre em dequeísmo/dupla preposição (“informou ao morador que” ou “o morador de que”).' },
      { q: 'No período “O imóvel ___ proprietário a equipe conversou fica na rua ___ nos dirigimos”, as lacunas são preenchidas corretamente por:', options: ['com cujo / aonde (ou à qual)', 'cujo o / onde', 'de que / donde', 'quem / na qual'], ans: 0, difficulty: 'Intermediário', questionType: 'Gramática e Texto', comment: 'Gabarito: A. “Conversar” rege “com” (a equipe conversou com o proprietário do imóvel → “com cujo proprietário”), e “dirigir-se” exige preposição “a” de destino (“aonde / à qual nos dirigimos”). Erro da B: falta preposição “com”, insere artigo proibido após “cujo” e usa “onde” estático; erro da C: “de que” não exprime posse e “donde” significa procedência; erro da D: “quem” e “na qual” não articulam posse nem movimento.' },
    ],
    flashcards: [
      ['Como descobrir a preposição antes de um relativo?', 'Reconstrua a oração simples: necessita de materiais → materiais de que necessita.'],
      ['Qual a regência de “preferir” e “implicar” (no sentido de acarretar)?', 'Preferir X a Y (sem “mais” nem “do que”); implicar algo (transitivo direto, sem preposição “em”).'],
      ['Qual a diferença entre “onde” e “aonde”?', 'Onde indica permanência/lugar em que (verbos estáticos); aonde combina a preposição “a” + “onde” para verbos que exigem direção/movimento a (ir, chegar, dirigir-se a).'],
    ],
    references: [grammar],
  },
  {
    id: 'por_12', title: 'Crase como resultado de duas relações, não de uma palavra feminina',
    theory: `## Dois elementos devem coincidir
No caso mais comum, o acento grave registra a fusão da preposição **a**, exigida pelo termo anterior, com o artigo feminino **a/as**. Em “a equipe retornou à unidade”, retornar seleciona a e unidade admite artigo. Em “a equipe visitou a unidade”, visitar é transitivo direto nessa construção: o a é apenas artigo, sem crase.

O teste do masculino pode ajudar: “retornou ao posto” sugere a + o; no feminino correspondente, à unidade. Use um termo semanticamente comparável e preserve a construção. O teste não substitui a análise quando o segundo elemento é pronome demonstrativo: “referiu-se àquele documento” reúne a preposição com o início de aquele, mesmo diante de um substantivo masculino.

## Casos comentados
Antes de infinitivo, não há artigo feminino: “começou a registrar”. Em “entregou as fichas a uma supervisora”, a construção com artigo indefinido uma não resulta em à. Já “entregou as fichas à supervisora” delimita a destinatária por artigo definido. Observe como a escolha de artigo também modifica a determinação do referente.

Em locuções femininas consagradas, como **à tarde**, **às vezes** e **à medida que**, aprende-se a grafia junto do valor da expressão. “À medida que o trabalho avançava, os registros aumentavam” indica proporção. “Na medida em que” pode ser usado com valor causal em certos contextos; trocar as duas expressões automaticamente pode alterar o sentido.

## Horas, distância e paralelismo
“A reunião começará às oito horas” delimita horário. “Daqui a oito horas” expressa intervalo futuro, com outra estrutura. Em “das oito às dez”, a construção contrai os artigos em ambos os extremos; em “de oito a dez horas”, usa-se estrutura sem artigos. O paralelismo ajuda a perceber o padrão.

Com possessivo feminino singular em contextos que admitem artigo facultativo, pode haver variação: “dirigiu-se a/à sua equipe”. A possibilidade depende da construção. Não generalize facultatividade para toda frase com possessivo nem use a regra como substituto da regência.`,
    summary: `Exija preposição e segundo elemento compatível. Visitou a unidade; retornou à unidade. Referiu-se àquele documento é possível mesmo com nome masculino. Horário e intervalo futuro têm estruturas diferentes.

| Categoria | Regra Prática | Exemplos Corretos | Por que Funciona Assim? |
| --- | --- | --- | --- |
| **Proibida (Nunca ocorre)** | Antes de verbo, palavra masculina, artigo indefinido (*uma*), pronomes gerais (*ela, você, esta, toda, cada*) ou plural precedido de *a* singular. | "Começou **a** vistoriar"; "Dirigiu-se **a** Vossa Senhoria"; "Orientou **a** populações ribeirinhas". | Falta o artigo definido feminino *a(s)* para fundir-se com a preposição. |
| **Obrigatória** | Fusão de *a* (preposição) + *a/as* (artigo ou *aquele/aquela/aquilo*), horas exatas e locuções femininas adverbiais/prepositivas/conjuntivas. | "Chegou **às** 14h"; "**À** medida que"; "Em relação **àquela** quadra". | Coincidência de regência preposicionada + determinante feminino (ou *a* inicial de *aquele*). |
| **Facultativa (3 casos)** | 1) Pronome possessivo feminino singular adjetivo; 2) Nome próprio feminino de pessoa; 3) Depois da preposição **até**. | "Entregou o mapa **a/à** sua chefe"; "Refiro-me **a/à** Helena"; "Foi **até a/à** margem". | O emprego do artigo definido feminino antes desses três elementos é opcional. |
| **Casa / Terra / Distância** | Sem especificador: sem crase; com especificador (determinado): com crase. | "Voltou **a** casa" × "Voltou **à** casa dos pais"; "Fica **a** 10 metros" × "Visto **à** distância de 10 metros". | Só recebem artigo definido quando vêm determinados por adjunto. |`,
    questions: [
      { q: 'Qual alternativa usa corretamente o acento grave?', options: ['A equipe começou à registrar.', 'A equipe visitou à unidade.', 'A equipe retornou à unidade.', 'A equipe chegou daqui à duas horas.'], ans: 2, difficulty: 'Fácil', questionType: 'Gramática e Texto', comment: 'Gabarito: C. “Retornar” exige preposição “a”, que se funde ao artigo “a” de “unidade” (retornou ao posto → retornou à unidade). Erro da A: proíbe-se crase antes de verbo no infinitivo (“registrar”); erro da B: “visitar” é VTD, logo há apenas artigo feminino sem preposição; erro da D: “daqui a” indica intervalo futuro sem artigo.' },
      { q: 'Em “referiu-se àquele documento”, a crase ocorre porque:', options: ['Todo substantivo masculino admite artigo a.', 'A preposição a se combina com o início de aquele.', 'Documento é uma palavra feminina.', 'Todo demonstrativo exige crase.'], ans: 1, difficulty: 'Fácil', questionType: 'Gramática e Texto', comment: 'Gabarito: B. “Referir-se” exige preposição “a”, que se contrai com a vogal inicial de “aquele” (a + aquele = àquele), mesmo antes de palavra masculina. Erro da A: substantivos masculinos admitem artigo “o”, nunca “a”; erro da C: “documento” é masculino; erro da D: “este” e “esse” não aceitam crase.' },
      { q: 'Assinale a alternativa em que o emprego do acento indicativo de crase é facultativo, preservando a correção gramatical com ou sem ele:', options: ['O coordenador entregou a escala mensal à sua supervisora de campo.', 'A reunião técnica teve início às nove horas da manhã.', 'À medida que a chuva diminuía, as equipes retomavam as visitas.', 'Os agentes dirigiram-se àquela comunidade ribeirinha.'], ans: 0, difficulty: 'Intermediário', questionType: 'Gramática e Texto', comment: 'Gabarito: A. Diante de pronome possessivo feminino singular adjetivo (“sua supervisora”), o uso do artigo definido é facultativo, tornando facultativa a crase (“a/à sua supervisora”). Erro da B: indicação de hora exata (“às 9h”) torna a crase obrigatória; erro da C: locução conjuntiva proporcional feminina (“À medida que”) exige crase obrigatória; erro da D: “dirigir-se a + aquela” tem fusão obrigatória (“àquela”).' },
      { q: 'Compare os pares: I) “Trabalharemos de segunda a sexta-feira” / II) “Trabalharemos da segunda à sexta-feira”. A presença de crase apenas em II explica-se pelo:', options: ['Paralelismo sintático: quando o primeiro termo vem precedido apenas de preposição (“de”), o segundo também rejeita artigo (“a”); com “da” (de + a), exige-se “à” (a + a).', 'Fato de sexta-feira ser palavra masculina no primeiro par.', 'Erro gramatical do segundo período, pois dias da semana nunca admitem artigo.', 'Uso obrigatório de crase antes de qualquer numeral cardinal.'], ans: 0, difficulty: 'Intermediário', questionType: 'Gramática e Texto', comment: 'Gabarito: A. O paralelismo determina simetria de determinação: “de ... a” (sem artigo nos dois extremos) ou “da ... à” (preposição + artigo nos dois extremos). Erro da B: “sexta-feira” é sempre feminina; erro da C: dias da semana admitem artigo quando determinados em paralelo; erro da D: numerais não impõem crase indiscriminadamente.' },
    ],
    flashcards: [
      ['Por que “visitou a escola” não leva crase?', 'Porque visitar, nessa construção, é transitivo direto e não exige preposição a; há apenas artigo.'],
      ['Quais são os três casos clássicos de crase facultativa?', 'Antes de pronome possessivo feminino singular adjetivo (a/à minha equipe), antes de nome próprio feminino (a/à Maria) e após a preposição “até” (até a/à porta).'],
      ['Por que não há crase em “Dirigiu-se a populações ribeirinhas”?', 'Porque antes de substantivo no plural precedido de “a” no singular há apenas preposição, sem artigo definido.'],
    ],
    references: [{ title: 'TCDF — Manual de Redação Oficial', url: 'https://biblioteca.tc.df.gov.br/wp-content/uploads/2018/11/ManualRedacao2014.pdf', section: 'Seção 11.9 — Crase; exemplos autorais neste complemento.' }],
  },
  {
    id: 'por_13', title: 'Colocação pronominal e o papel da estrutura da oração',
    theory: `## Posição do pronome átono
Próclise coloca o pronome antes do verbo (“não **se** esqueça”); ênclise, depois (“registre-**se**”); mesóclise insere o pronome na forma de futuro (“encaminhar-**se**-á”). O estudo deve distinguir o padrão formal de escrita e os usos correntes da língua falada. No português brasileiro, iniciar frase com pronome é frequente na fala, mas provas de norma-padrão podem exigir outra colocação.

## Elementos que favorecem a próclise
Negação sem pausa antes do verbo: “não se esqueça”. Pronome relativo: “o documento que me entregaram”. Construção subordinada: “quando se concluir a vistoria”. Advérbio sem pausa: “aqui se trabalha com registros”. Não basta decorar uma sigla: identifique a relação do termo com o verbo e se há uma pausa que muda a estrutura.

Compare “Ontem se realizou a reunião” e “Ontem, realizou-se a reunião”. O advérbio isolado por vírgula deixa de produzir a mesma condição de atração imediata na análise normativa tradicional. A pontuação participa da construção; não é apenas uma marca de respiração.

## Futuro e locução verbal
Em registro formal, “encaminhar-se-á o relatório” admite mesóclise quando não há elemento que imponha próclise. Com negação, prefere-se “não se encaminhará o relatório”. Não se usa a ênclise diretamente ao futuro simples na forma “encaminhará-se”.

Na locução, examine o verbo principal. “O documento foi entregue” pode originar “o documento lhe foi entregue”; evita-se ligar o pronome átono ao particípio (“entregue-lhe”) nessa função. Com infinitivo, outras posições podem ser admitidas conforme a construção e o padrão de referência.

## Alterações de forma
Em “registrar + o”, a combinação normativa é “registrá-lo”: retira-se o r e usa-se lo, com ajuste de acentuação. Em “registraram + o”, obtém-se “registraram-no”. Colocação e combinação pronominal são problemas relacionados, mas diferentes: primeiro determine a função do pronome, depois sua posição e a forma gráfica.`,
    summary: `Verifique oração, atração e pausa. Não se esqueça; encaminhar-se-á; não se encaminhará. Pronomes não se ligam encliticamente ao particípio nessa construção. Registrar + o → registrá-lo.

| Posição do Pronome | Condições Determinantes na Norma-Padrão | Exemplos Corretos | Proibições Absolutas na Norma-Padrão |
| --- | --- | --- | --- |
| **Próclise (antes do verbo)** | Palavras atrativas: negativas (*não, nunca, jamais*), advérbios sem vírgula (*já, aqui*), relativos (*que, onde*), indefinidos (*tudo, ninguém*), conjunções subordinativas (*quando, embora, se*). | "Nunca **se** omita"; "O lote **que** **me** indicaram"; "Quando **se** analisa o mapa". | **Nunca iniciar período** com pronome oblíquo átono (*"Me entregaram o mapa"* → "Entregaram-me o mapa"). |
| **Mesóclise (no meio do verbo)** | Verbos no **futuro do presente** ou **futuro do pretérito** sem palavra atrativa antes. | "**Realizar-se-á** o mutirão"; "**Falar-lhe-íamos** sobre o foco". | **Nunca usar ênclise no futuro** (*"Realizará-se"*, *"Faria-se"*). Se houver atrativo, usa-se próclise. |
| **Ênclise (depois do verbo)** | Início de frase, imperativo afirmativo, gerúndio sem *em* ou após pausa (vírgula). | "**Inspecione-o** agora"; "Ontem, **registrou-se** o foco". | **Nunca usar ênclise no particípio** (*"Tinha entregado-lhe"* → "Tinha-lhe entregado"). |
| **Adaptação Fonética (*o, a, os, as*)** | Verbo terminado em **-R, -S, -Z** → **lo, la**; terminado em som nasal (**-M, -ÃO, -ÕE**) → **no, na**. | *Fazer + o = fazê-lo*; *Repomos + os = repomo-los*; *Viram + a = viram-na*. | Confundir objeto direto (*o/lo/no*) com objeto indireto (*lhe*). |`,
    questions: [
      { q: 'Na escrita formal, qual frase apresenta a colocação esperada com negação?', options: ['Não esqueça-se do prazo.', 'Não se esqueça do prazo.', 'Não esquecerá-se do prazo.', 'Não esquecido-se do prazo.'], ans: 1, difficulty: 'Fácil', questionType: 'Gramática e Texto', comment: 'Gabarito: B. O advérbio de negação “Não” (sem vírgula após ele) atua como palavra atrativa, impondo próclise (“Não se esqueça”). Erro da A: emprega ênclise ignorando o atrativo negativo; erro da C: associa ênclise proibida a futuro do presente; erro da D: une pronome enclítico proibido ao particípio.' },
      { q: 'Qual é a combinação de “registrar” com o pronome objeto “o”?', options: ['Registrar-o.', 'Registra-no.', 'Registrá-lo.', 'Registrá-lhe.'], ans: 2, difficulty: 'Fácil', questionType: 'Gramática e Texto', comment: 'Gabarito: C. Verbo terminado em -R perde a consoante final e transforma o pronome “o” em “-lo” (com acento agudo na oxítona terminada em -a: “registrá-lo”). Erro da A: mantém o -r antes de -o; erro da B: “-no” aplica-se após terminação nasal (-m, -ão, -õe); erro da D: “lhe” substitui objeto indireto, não objeto direto.' },
      { q: 'Assinale a alternativa que obedece integralmente às regras de colocação pronominal da norma-padrão:', options: ['Me informaram que o cronograma de bloqueio foi alterado.', 'Os equipamentos que enviaram-nos ontem já estão em uso.', 'Realizar-se-á amanhã a conferência dos croquis, caso não se altere o expediente.', 'A equipe tinha comunicado-se com a coordenação antes do meio-dia.'], ans: 2, difficulty: 'Difícil', questionType: 'Gramática e Texto', comment: 'Gabarito: C. Verbo no futuro em início de oração sem palavra atrativa usa mesóclise (“Realizar-se-á”); na segunda oração, “não” atrai próclise (“não se altere”). Erro da A: proíbe-se iniciar período com pronome oblíquo átono na norma-padrão; erro da B: o pronome relativo “que” atrai próclise (“que nos enviaram”); erro da D: proíbe-se ênclise no particípio (“tinha-se comunicado”).' },
      { q: 'Substituindo os complementos destacados por pronomes oblíquos átonos em “Os agentes **orientaram os moradores** e **entregaram o folheto aos proprietários**”, obtém-se na norma-padrão:', options: ['Os agentes orientaram-nos e entregaram-lhes o folheto.', 'Os agentes orientaram-lhes e entregaram-no eles.', 'Os agentes orientaram-os e entregaram-lo aos proprietários.', 'Os agentes lhes orientaram e entregaram-os o folheto.'], ans: 0, difficulty: 'Intermediário', questionType: 'Gramática e Texto', comment: 'Gabarito: A. “Orientar” é VTD com terminação nasal (“orientaram”), pedindo “-nos” (orientaram-nos); “aos proprietários” é OI de “entregar”, substituído por “-lhes”. Erro da B: “orientar” não rege “lhes” aqui e “eles” não é oblíquo átono; erro da C: falta assimilação nasal (“-nos”) e mantém-se o complemento já substituível; erro da D: “lhes” não cabe em VTD e falta assimilação em “entregaram-os”.' },
    ],
    flashcards: [
      ['Quando a mesóclise cede lugar à próclise?', 'Quando há fator de atração antes do verbo no futuro, como em “não se encaminhará”.'],
      ['Quais são as três proibições absolutas da colocação pronominal na norma-padrão?', '1) Iniciar período com pronome átono; 2) Usar ênclise em verbos no futuro do presente ou do pretérito; 3) Usar ênclise em verbo no particípio.'],
      ['Como ficam os pronomes o/a/os/as após verbos terminados em -R/-S/-Z e após som nasal (-M/-ÃO)?', 'Após -R, -S ou -Z, caem as consoantes e usa-se lo/la/los/las; após som nasal, usa-se no/na/nos/nas.'],
    ],
    references: [{ title: 'FUNAG — colocação pronominal', url: 'https://www.funag.gov.br/manual/index.php?title=Coloca%C3%A7%C3%A3o_pronominal', section: 'Próclise, mesóclise, ênclise e locuções verbais.' }],
  },
  {
    id: 'por_14', title: 'Oração, período e mudança de sentido pela subordinação',
    theory: `## Comece pelos predicados
Oração organiza-se em torno de um verbo ou locução verbal. Período pode conter uma ou várias orações. Uma locução como “vai registrar” não deve ser contada mecanicamente como duas orações só por ter duas formas verbais. Para analisar, identifique os predicados e suas relações.

Em “a equipe registrou as ocorrências”, **a equipe** é sujeito; **registrou as ocorrências**, predicado; **as ocorrências**, objeto direto. Em “a equipe precisa de apoio”, o complemento é objeto indireto. Termos preposicionados podem exercer outras funções: em “a necessidade de apoio aumentou”, **de apoio** completa o sentido do nome necessidade. A preposição sozinha não resolve a classificação.

## Orações substantivas, adjetivas e adverbiais
“É necessário que a equipe retorne.” A oração **que a equipe retorne** ocupa função comparável à de um substantivo; pode-se testar “isso é necessário”. “A equipe que retornou registrou o caso.” A relativa caracteriza um antecedente, **equipe**. “A equipe retornou porque recebeu uma solicitação.” A oração causal acrescenta uma circunstância ao fato de retornar.

## Restrição e explicação
Compare “Os imóveis que estavam fechados serão revisitados” e “Os imóveis, que estavam fechados, serão revisitados”. Sem vírgulas, a relativa seleciona os imóveis fechados dentre um conjunto. Com vírgulas, apresenta uma explicação sobre o conjunto de imóveis já delimitado. A diferença pode alterar quantos imóveis estão abrangidos pela afirmação.

## Coordenação e dependência
“A equipe chegou e iniciou a vistoria” articula predicados coordenados. “Quando a equipe chegou, iniciou a vistoria” explicita uma relação temporal por subordinação. Coordenação sintática não significa ausência de relação de sentido: também pode haver adição, oposição, conclusão ou explicação.

Para resolver uma questão, não classifique pelo conectivo isolado. Primeiro descubra que papel a oração desempenha, depois observe o conector e, por fim, o efeito da pontuação. Esse caminho evita confundir que integrante com que relativo.

## Complemento nominal versus adjunto adnominal
Termos iniciados pela preposição **de** ligados a um substantivo frequentemente geram dúvida entre **complemento nominal (CN)** e **adjunto adnominal (AA)**:
- Se o termo se liga a um **adjetivo** ou **advérbio**, é sempre **complemento nominal** (“fiel *ao regulamento*”, “longe *do foco*”).
- Se o termo se liga a um **substantivo abstrato** e tem valor **paciente** (sofre a ação nominal), é **complemento nominal** (“a inspeção *do galpão*” → o galpão foi inspecionado).
- Se o termo tem valor **agente** ou indica **posse/especificação** de substantivo concreto ou abstrato, é **adjunto adnominal** (“a inspeção *do agente*” → o agente inspecionou; “as fichas *da equipe*”).`,
    summary: `Localize predicados e funções. Substantiva ocupa função nominal; adjetiva caracteriza antecedente; adverbial indica circunstância. A vírgula pode mudar uma relativa de restritiva para explicativa.

| Estrutura Sintática | Critério de Identificação Rápida | Exemplo Aplicado | Contraste Essencial |
| --- | --- | --- | --- |
| **Oração Subordinada Substantiva** | Substituível pelo pronome demonstrativo **ISSO**. | "É fundamental **que o morador coopere**" (= *Isso* é fundamental → Subjetiva). | Conjunção integrante (*que / se*) não retoma antecedente nominal. |
| **Oração Subordinada Adjetiva** | Introduzida por pronome relativo (*que = o qual, onde, cujo*). | "As caixas **que estavam abertas** foram vedadas." | Sem vírgulas = **Restritiva** (parte do grupo); com vírgulas = **Explicativa** (todo o grupo). |
| **Oração Subordinada Adverbial** | Exerce função de adjunto adverbial da oração principal (9 tipos). | "**Embora chovesse**, a equipe concluiu a quadra." (Concessiva). | Quando anteposta à oração principal, pede vírgula obrigatória. |
| **Complemento Nominal × Adjunto Adnominal** | Termo paciente de nome abstrato/adjetivo/advérbio × termo agente ou posse. | "A coleta **das amostras**" (CN: paciente) × "A coleta **do técnico**" (AA: agente). | Teste da passiva: se o termo sofre a ação do substantivo abstrato, é Complemento Nominal. |`,
    questions: [
      { q: 'Em “É importante que a equipe retorne”, “que a equipe retorne” funciona como:', options: ['Oração substantiva subjetiva.', 'Oração adjetiva restritiva.', 'Vocativo.', 'Objeto indireto de importante.'], ans: 0, difficulty: 'Intermediário', questionType: 'Gramática e Texto', comment: 'Gabarito: A. Substituindo por “ISSO”: “É importante ISSO” (= Isso é importante), logo a oração exerce função de sujeito da oração principal (subordinada substantiva subjetiva). Erro da B: não modifica substantivo antecedente nem tem pronome relativo; erro da C: não é chamamento; erro da D: “importante” é adjetivo predicativo, que não seleciona objeto indireto.' },
      { q: 'A retirada das vírgulas de uma oração adjetiva explicativa pode:', options: ['Jamais alterar o sentido.', 'Transformar a informação em restrição de um conjunto.', 'Eliminar obrigatoriamente todos os verbos.', 'Converter qualquer frase em pergunta.'], ans: 1, difficulty: 'Fácil', questionType: 'Gramática e Texto', comment: 'Gabarito: B. Com vírgulas, a oração adjetiva explicativa se refere à totalidade do antecedente; sem vírgulas, torna-se restritiva, especificando apenas parte do conjunto. Erro da A: altera diretamente a extensão referencial do enunciado; erro da C: mantém os verbos originais; erro da D: pontuação restritiva não transforma frase declarativa em interrogativa.' },
      { q: 'Compare as expressões destacadas em: I) “A vistoria **do quarteirão** revelou três focos” e II) “A vistoria **do agente** seguiu todas as normas”. Os termos destacados exercem, respectivamente, as funções sintáticas de:', options: ['Complemento nominal (sofre a ação de vistoriar) e adjunto adnominal (pratica a ação de vistoriar).', 'Objeto direto e objeto indireto.', 'Sujeito simples e predicativo do sujeito.', 'Aposto explicativo e vocativo.'], ans: 0, difficulty: 'Difícil', questionType: 'Gramática e Texto', comment: 'Gabarito: A. Ligado ao substantivo abstrato “vistoria”, o termo paciente (“do quarteirão”, que foi vistoriado) é complemento nominal; o termo agente (“do agente”, que realizou a vistoria) é adjunto adnominal. Erro da B: objetos completam verbos, não substantivos; erro da C: o sujeito de cada oração é “A vistoria...”; erro da D: não explicam nem invocam termos.' },
      { q: 'No período “Os supervisores tinham certeza **de que o bloqueio vetorial reduziria os casos**”, a oração destacada classifica-se como:', options: ['Oração subordinada substantiva completiva nominal.', 'Oração subordinada substantiva objetiva indireta.', 'Oração subordinada adjetiva restritiva.', 'Oração coordenada sindética explicativa.'], ans: 0, difficulty: 'Intermediário', questionType: 'Gramática e Texto', comment: 'Gabarito: A. A oração preposicionada (“de ISSO”) completa o sentido do substantivo abstrato “certeza”, portanto é subordinada substantiva completiva nominal. Erro da B: objetiva indireta completaria um verbo (ex.: “precisar de”), não o substantivo “certeza”; erro da C: “que” é conjunção integrante, não pronome relativo; erro da D: há relação de subordinação, não coordenação.' },
    ],
    flashcards: [
      ['Como diferenciar que relativo de que integrante?', 'O relativo retoma antecedente e equivale a o qual/a qual; o integrante introduz uma oração inteira que pode ser substituída por ISSO.'],
      ['Como diferenciar complemento nominal de adjunto adnominal com a preposição “de”?', 'Ligado a substantivo abstrato, se o termo é paciente (sofre a ação, ex.: leitura do edital), é complemento nominal; se é agente ou posse (leitura do candidato), é adjunto adnominal.'],
    ],
    references: [grammar, reading],
  },
  {
    id: 'por_15', title: 'Acentuação a partir da sílaba tônica e da estrutura da palavra',
    theory: `## Não confunda tonicidade com acento gráfico
Toda palavra lexical pronunciada isoladamente apresenta uma sílaba de maior proeminência, mas nem toda palavra tônica recebe acento escrito. **Caju** é oxítona sem acento; **café** é oxítona acentuada. A classificação depende da posição da sílaba tônica: última, penúltima ou antepenúltima.

## Raciocínio por grupos
As proparoxítonas recebem acento: “público”, “médico”. Nas oxítonas, examine a terminação: “café”, “cipó”, “também” e “parabéns” integram padrões de acentuação. Nas paroxítonas, as terminações seguem outro conjunto de regras, como em “fácil”, “tórax” e “órgão”. Não transporte uma regra de oxítona para uma paroxítona apenas porque ambas terminam com a mesma letra.

## Hiato e ditongo
Em **sa-ú-de**, o u tônico forma hiato com a vogal anterior e recebe acento pela regra aplicável. Em **ca-ju**, a situação é diferente: o u integra a última sílaba após consoante, sem o mesmo hiato. Em **ra-i-nha**, o i antes de nh não recebe o acento da regra geral dos hiatos. A separação silábica é um instrumento de análise, não uma etapa dispensável.

As paroxítonas **ideia** e **heroico** perderam o acento dos ditongos abertos nesse contexto, mas **herói** conserva o acento por ser oxítona. “Todas as palavras com éi/ói perderam o acento” é uma generalização incorreta.

## Diferenciais e flexão
**Pôde** marca passado e distingue-se de **pode**, presente; **pôr**, verbo, distingue-se de **por**, preposição. **Tem/têm** e **vem/vêm** distinguem singular de plural. Nos derivados, observe o paradigma: “ele mantém”, “eles mantêm”.

Por fim, não misture regras de palavras inteiras com combinações pronominais. “Registrá-lo” precisa ser analisado pela forma verbal resultante da retirada do r, não como se fosse a grafia intacta de registrar. Ao justificar uma resposta, cite a regra específica e a estrutura da palavra.`,
    summary: `Localize a tônica; identifique o grupo e a terminação. Saúde tem hiato; heroico e herói têm tonicidades diferentes. Pode/pôde e tem/têm distinguem flexões.

| Regra de Acentuação | Critério Estrutural | Exemplos Acentuados | Exceções / Mudanças do Acordo Ortográfico |
| --- | --- | --- | --- |
| **Proparoxítonas** | Sílaba tônica na antepenúltima posição. | *público, lâmpada, epidêmico, ônibus*. | Todas as proparoxítonas são acentuadas, sem exceção. |
| **Oxítonas** | Tônica na última sílaba terminada em **A(s), E(s), O(s), EM, ENS** ou ditongo aberto (**ÉI, ÉU, ÓI**). | *Igarapé, através, avô, armazém, herói, chapéu*. | Oxítonas em *-i* ou *-u* não levam acento, salvo se formarem hiato (*a-ça-í, ba-ú*). |
| **Paroxítonas** | Tônica na penúltima sílaba **NÃO** terminada em *a(s), e(s), o(s), em, ens* (ou terminada em ditongo crescente). | *fácil, caráter, tórax, vírus, álbum, órfão, história, série*. | **Hifens** (plural) não tem acento; **hífen** (singular) tem. Ditongos abertos *ei/oi* em paroxítonas perderam o acento (*ideia, jiboia, heroico*). |
| **Hiatos (I e U tônicos)** | **I** ou **U** tônicos constituindo segunda vogal de hiato, sozinhos na sílaba ou com **-s**. | *sa-ú-de, sa-í-da, ba-ú, pa-ís, ego-ís-ta*. | Não se acentuam antes de **-nh** (*rainha*) nem em paroxítonas após ditongo decrescente (*feiura, baiuca*). |
| **Acentos Diferenciais** | Mantidos para distinguir tempo, classe ou número verbal. | *pôde* (passado) × *pode*; *pôr* (verbo) × *por*; *tem/vem* × *têm/vêm*; *mantém* × *mantêm*. | *Para* (verbo), *pelo* (substantivo) e *polo* perderam o acento diferencial. |`,
    questions: [
      { q: 'Qual comparação explica a grafia atual de heroico e herói?', options: ['Ambas são proparoxítonas.', 'Heroico é paroxítona; herói é oxítona.', 'Herói perdeu o acento pelo Acordo.', 'Acentos não dependem de tonicidade.'], ans: 1, difficulty: 'Fácil', questionType: 'Gramática e Texto', comment: 'Gabarito: B. O Novo Acordo Ortográfico aboliu o acento dos ditongos abertos éi/ói apenas nas paroxítonas (“he-roi-co”, “i-dei-a”, “ji-boi-a”), mantendo-o nas oxítonas (“he-rói”, “pa-péis”). Erro da A: nenhuma das duas tem sílaba tônica antepenúltima; erro da C: “herói” conservou o acento por ser oxítona; erro da D: posição da sílaba tônica é critério basilar da acentuação.' },
      { q: 'Qual par distingue presente de passado por acento diferencial?', options: ['Pode/pôde.', 'Tem/têm.', 'Vem/vêm.', 'Por/pôr.'], ans: 0, difficulty: 'Fácil', questionType: 'Gramática e Texto', comment: 'Gabarito: A. “Pode” (presente do indicativo) vs. “pôde” (pretérito perfeito do indicativo) é o diferencial de tempo verbal obrigatório mantido pelo Acordo. Erro da B e C: “tem/têm” e “vem/vêm” marcam diferença de número (singular vs. plural), não tempo; erro da D: “por/pôr” diferencia classe gramatical (preposição vs. verbo).' },
      { q: 'As palavras “saúde”, “baú” e “açaí” recebem acento gráfico pela mesma razão estrutural, que consiste em:', options: ['Apresentarem as vogais “i” ou “u” tônicas como segunda vogal de um hiato, sozinhas na sílaba.', 'Serem todas palavras proparoxítonas aparentes.', 'Serem todas oxítonas terminadas nas vogais a, e ou o.', 'Conterem ditongo aberto na penúltima sílaba.'], ans: 0, difficulty: 'Intermediário', questionType: 'Gramática e Texto', comment: 'Gabarito: A. Na regra especial dos hiatos, “i” e “u” tônicos como segunda vogal de hiato (sa-ú-de, ba-ú, a-ça-í), sozinhos ou com -s, levam acento (salvo antes de -nh ou após ditongo em paroxítona). Erro da B: “saúde” é paroxítona com hiato, enquanto “baú” e “açaí” são oxítonas; erro da C: terminam em u/i, não em a/e/o; erro da D: formam hiato, não ditongo.' },
      { q: 'Assinale a alternativa em que todas as formas verbais e nominais estão grafadas de acordo com as regras vigentes de acentuação:', options: ['Os agentes detêm o conhecimento técnico, contêm o avanço dos focos e mantêm os registros em dia.', 'Os agentes detêem o conhecimento técnico, contêem o avanço dos focos e mantêem os registros em dia.', 'A assembléia comunitária discutiu a idéia de mutirão contra a jibóia.', 'O agente pôr-se-á em campo assim que ele pôde conferir o roteiro.'], ans: 0, difficulty: 'Intermediário', questionType: 'Gramática e Texto', comment: 'Gabarito: A. Derivados de “ter” recebem acento agudo na 3ª p. sing. (“ele mantém”) e circunflexo com um único “e” na 3ª p. pl. (“eles detêm, contêm, mantêm”). Erro da B: duplica incorretamente a letra “e” (*detêem); erro da C: mantém acentos abolidos em ditongos abertos paroxítonos (“assembleia, ideia, jiboia”); erro da D: emprega incorretamente “pôde” (passado) na correlação futura.' },
    ],
    flashcards: [
      ['Por que saúde leva acento no u?', 'O u é tônico e forma hiato com a vogal anterior, ficando sozinho na sílaba.'],
      ['Qual a diferença na acentuação de “ele mantém” e “eles mantêm”?', 'Nos derivados de ter e vir, o singular recebe acento agudo (ele mantém, ele intervém) e o plural recebe circunflexo (eles mantêm, eles intervêm).'],
      ['Por que “caju” e “urubu” não têm acento, mas “baú” e “jaú” têm?', 'Porque em caju (ca-ju) o u forma sílaba com a consoante (oxítona em -u, sem acento); em baú (ba-ú) o u tônico forma hiato com a vogal anterior.'],
    ],
    references: [spelling],
  },
  {
    id: 'por_16', title: 'Ortografia por estrutura e sentido: limites dos macetes',
    theory: `## Não reduza o hífen a uma única fórmula
Prefixos têm comportamentos específicos. **Micro-ondas** apresenta encontro de vogais iguais; **autoescola**, encontro de vogais diferentes; **antissocial**, vogal seguida de s, com duplicação. Mas a orientação “iguais sempre se separam” falha em formações como **coobrigação**. A grafia deve ser conferida no Acordo e no vocabulário ortográfico, considerando o prefixo.

Também diferencie prefixos tônicos, como **pré-** em pré-natal, de elementos átonos em palavras lexicalizadas. Uma lista de exemplos não autoriza inventar novas grafias por analogia indiscriminada. Quando houver dúvida, consultar o VOLP é melhor do que justificar pela sonoridade apenas.

## Os porquês em contexto
“Por que a visita foi remarcada?” e “Não sei por que a visita foi remarcada” expressam pergunta direta e indireta. Em “a razão por que retornou”, pode-se reconhecer valor relativo, equivalente a pela qual. “A visita foi remarcada porque choveu” apresenta causa. “A visita foi remarcada por quê?” coloca a expressão interrogativa em posição tônica ao fim do enunciado. “O porquê da mudança” emprega um substantivo, que admite plural: “os porquês”.

## Pares que exigem interpretação
“Ele se sentiu mal após perceber o mau cheiro”: mal contrapõe-se a bem; mau caracteriza cheiro e contrapõe-se a bom. “Há duas semanas houve reunião” indica tempo decorrido; “daqui a duas semanas haverá reunião” indica futuro. “Se não chover, sairemos” formula condição negativa; “saia cedo, senão chegará tarde” apresenta consequência de não cumprir a orientação.

## Reescrita comentada
“Não explicou o porquê de ter retornado” pode ser reescrito como “não explicou o motivo de ter retornado”. Já “não explicou por que retornou” contém uma oração interrogativa indireta. As duas construções podem ser semanticamente próximas e ter grafias diferentes por causa da estrutura.

Em exercícios, faça uma substituição de sentido antes de escolher a grafia. Esse procedimento funciona melhor que contar palavras ou tratar toda pergunta como se começasse com a mesma forma.`,
    summary: `Macetes de hífen têm limites e exceções. Porquê substantivo admite os porquês. Por que pode estar em pergunta indireta ou relativo. Analise a função de mal/mau, há/a e senão/se não.

| Dúvida Ortográfica | Forma 1 (Quando Usar) | Forma 2 (Quando Usar) | Teste de Substituição Imediata |
| --- | --- | --- | --- |
| **Por que × Por quê** | **Por que**: início/meio de pergunta direta ou indireta (*por qual razão*) ou pronome relativo (*pelo qual*). | **Por quê**: antes de pausa forte ou fim de frase interrogativa. | Substitua por *"por qual razão"* ou *"pelo qual"*. Se vier antes de ponto, acentue. |
| **Porque × Porquê** | **Porque**: conjunção causal/explicativa em respostas e justificativas. | **Porquê**: substantivo masculino precedido de determinante (*o porquê, um porquê*). | Substitua por *"pois / já que"* (*porque*) ou por *"o motivo"* (*o porquê*). |
| **Mal × Mau** | **Mal**: advérbio (oposto de *bem*), substantivo (*o mal*) ou conjunção temporal (*logo que*). | **Mau**: adjetivo qualificativo (oposto de *bom*). | Troque por **bem** (→ *mal*) ou por **bom** (→ *mau*). |
| **Senão × Se não** | **Senão**: *do contrário, caso contrário, a não ser, mas sim, defeito*. | **Se não**: conjunção condicional **se** + advérbio **não** (*caso não*). | Se couber *"caso não"* antes de verbo no subjuntivo/futuro, escreva separado (*se não*). |
| **Acerca de × A cerca de × Há cerca de** | **Acerca de** = *sobre, a respeito de*. | **A cerca de** = distância/futuro aproximado; **Há cerca de** = tempo passado aproximado. | *"Falou acerca de dengue"*; *"Fica a cerca de 2 km"*; *"Ocorreu há cerca de dois meses"*. |`,
    questions: [
      { q: 'Complete: “Não sabemos ___ a visita foi adiada.”', options: ['porquê', 'por quê', 'por que', 'porque'], ans: 2, difficulty: 'Fácil', questionType: 'Gramática e Texto', comment: 'Gabarito: C. Trata-se de frase interrogativa indireta (“por qual razão/motivo a visita foi adiada”), exigindo “por que” separado e sem acento. Erro da A: “porquê” é substantivo precedido de artigo/determinante (“o porquê”); erro da B: “por quê” exige pausa final/ponto imediatamente após si; erro da D: “porque” é conjunção explicativa/causal.' },
      { q: 'Qual grafia mostra que o macete “vogais iguais sempre exigem hífen” tem limites?', options: ['Micro-ondas.', 'Coobrigação.', 'Anti-inflamatório.', 'Contra-ataque.'], ans: 1, difficulty: 'Intermediário', questionType: 'Gramática e Texto', comment: 'Gabarito: B. O prefixo “co-” une-se sem hífen ao segundo elemento mesmo quando inicia por “o” (“coobrigação”, “coordenar”, “cooperar”). Erro da A, C e D: seguem a regra geral de separação por hífen entre vogais idênticas (micro-ondas, anti-inflamatório, contra-ataque).' },
      { q: 'Assinale a alternativa em que as formas “por que / por quê / porque / porquê” foram todas empregadas corretamente:', options: ['Os caminhos por que passamos estavam alagados; ninguém entendeu o porquê da demora, porque o aviso atrasou.', 'Não sabemos porque o imóvel estava fechado, nem o por que de o morador não atender.', 'Porquê a vistoria atrasou? Atrasou por que choveu forte pela manhã.', 'Eles reclamaram sem explicar por que, já que desconheciam o porque da norma.'], ans: 0, difficulty: 'Intermediário', questionType: 'Gramática e Texto', comment: 'Gabarito: A. “Por que” = pelos quais (relativo); “o porquê” = o motivo (substantivo); “porque” = pois/já que (conjunção causal). Erro da B: deveria ser “por que” (interrogativa indireta) e “o porquê” (substantivo); erro da C: em início de pergunta usa-se “Por que”, e na resposta explicativa “porque”; erro da D: antes de vírgula/pausa forte exige “por quê”, e após “o” exige “porquê”.' },
      { q: 'Complete corretamente as lacunas: “___ chover agora, cumpriremos a meta; mantenha a caixa vedada, ___ o vetor encontrará abrigo, pois ___ duas semanas registramos foco neste quarteirão.”', options: ['Se não / senão / há', 'Senão / se não / a', 'Se não / se não / há', 'Senão / senão / a'], ans: 0, difficulty: 'Difícil', questionType: 'Gramática e Texto', comment: 'Gabarito: A. 1ª lacuna: “Se não chover” = caso não chova (condição negativa); 2ª lacuna: “senão” = do contrário / caso contrário; 3ª lacuna: “há duas semanas” = tempo decorrido no passado (verbo haver). Erro da B e D: trocam “Se não” condicional por “senão” e usam “a” futuro para passado; erro da C: repete “se não” onde o sentido é “do contrário” (“senão”).' },
      { q: 'Assinale a alternativa em que TODAS as palavras destacadas estão grafadas corretamente segundo o Acordo Ortográfico vigente e o VOLP:', options: ['A sub-região recebeu veículo antirrábico, estoque de super-homem não faltou e a micro-organização funcionou em coedição.', 'O agente trabalhou na auto-escola e no posto infra-estruturado com equipe anti-social.', 'O supermercado vendeu microondas e material extra-escolar para pré escola.', 'A subsecretaria fez re-edição da cartilha pós operatória contra o mosquito.'], ans: 0, difficulty: 'Difícil', questionType: 'Gramática e Texto', comment: 'Gabarito: A. “Sub-região” (sub + r = hífen), “antirrábico” (vogal + r = dobra rr), “super-homem” (antes de h = hífen) e “coedição” (co- junta sem hífen). Erro da B: vogais diferentes juntam (“autoescola”, “infraestruturado”) e vogal + s dobra (“antissocial”); erro da C: vogais iguais separam (“micro-ondas”), vogais diferentes juntam (“extraescolar”) e prefixo tônico “pré-” exige hífen (“pré-escola”); erro da D: “re-” junta (“reedição”) e “pós-” exige hífen (“pós-operatória”).' },
    ],
    flashcards: [
      ['Por que consultar o VOLP?', 'Para confirmar grafias e casos específicos que não são resolvidos por um macete geral.'],
      ['Como diferenciar os 4 porquês rapidamente?', 'Por que = por qual razão / pelo qual; Por quê = antes de ponto; Porque = pois/já que; O porquê = o motivo (substantivo).'],
      ['Qual a diferença entre “senão” e “se não”?', 'Senão = do contrário / a não ser; Se não = caso não (conjunção condicional + advérbio de negação).'],
    ],
    references: [spelling, { title: 'Academia Brasileira de Letras — VOLP', url: 'https://www.academia.org.br/nossa-lingua/busca-no-vocabulario', section: 'Consulta de formas vocabulares.' }],
  },
  {
    id: 'por_17', title: 'Pontuação como organização sintática e delimitação de sentido',
    theory: `## A pausa da fala não é a regra da vírgula
A pontuação organiza relações sintáticas e sentidos. Na ordem direta, não se separa sujeito e verbo por vírgula apenas porque o sujeito é longo: “A equipe responsável pelas visitas aos imóveis do distrito retornou cedo”. Inserir vírgula depois de distrito, sem outra estrutura que a justifique, rompe a ligação entre sujeito e predicado.

Termos intercalados podem aparecer entre essas posições, desde que delimitados: “A equipe, segundo a supervisora, retornou cedo”. Aqui as duas vírgulas isolam a expressão intercalada; a análise não é simplesmente “há vírgula entre equipe e retornou”. A regra precisa considerar a função das marcas.

## Vocativo, aposto e circunstância
“Moradores, recebam a equipe”: moradores é um chamamento e funciona como vocativo. “Os moradores receberam a equipe”: agora integra o sujeito. “Joana, supervisora da ação, apresentou o mapa”: a expressão intercalada explica quem é Joana e constitui aposto explicativo. Adjuntos adverbiais antecipados podem ser separados por vírgula, especialmente quando extensos; em estruturas curtas, pode haver facultatividade conforme contexto e clareza.

## Restrição e explicação
“Os agentes que concluíram o curso participaram” seleciona um grupo. “Os agentes, que concluíram o curso, participaram” acrescenta informação explicativa sobre o grupo delimitado. Reescrever a pontuação pode mudar a abrangência, mesmo sem alterar nenhuma palavra.

## Outros sinais em uso
Dois-pontos podem introduzir enumeração ou explicação: “Havia um problema: o endereço estava incompleto”. Ponto e vírgula organiza segmentos coordenados mais extensos ou que já contêm vírgulas. Travessões podem destacar uma intervenção ou informação incidental. Parênteses introduzem informações acessórias; retirar o trecho exige conferir se a estrutura restante continua coerente.

Na revisão, descubra primeiro a função de cada termo. Depois confira se os sinais abrem e fecham as intercalações corretamente. Não transforme “antes de e nunca há vírgula” em regra absoluta: há situações de intercalação, mudança de sujeito e organização discursiva que exigem análise específica.`,
    summary: `Analise funções, não apenas pausas. Vocativo é isolado; sujeito não se separa do verbo por vírgula gratuita. Intercalações exigem delimitação. A pontuação da relativa muda o alcance da informação.

| Situação Sintática | Regra de Pontuação | Exemplo Correto | Erro Clássico de Prova |
| --- | --- | --- | --- |
| **Ordem Direta (SVC)** | **Proibido** usar vírgula única entre Sujeito e Verbo ou entre Verbo e Complemento. | "Os agentes de combate às endemias do turno matutino **visitaram** o bairro." | Colocar vírgula após sujeito longo antes do verbo. |
| **Termo ou Oração Intercalada** | **Obrigatório** usar **par** de vírgulas (ou par de travessões/parênteses). | "A equipe**, durante a manhã de terça-feira,** vistoriou trinta lotes." | Abrir a intercalação com vírgula e esquecer a segunda vírgula que a fecha. |
| **Aposto Explicativo e Vocativo** | **Obrigatório** isolar por vírgula(s). | "**Morador,** mantenha o quintal limpo em Porto Velho**, capital de Rondônia**." | Confundir vocativo (isolado por vírgula) com o sujeito da oração. |
| **Adjunto Adverbial Deslocado** | De longa extensão (3 ou mais palavras): vírgula recomendada/obrigatória; curto: facultativa. | "**Logo após o término do período chuvoso na região,** o mutirão avançou." | Afirmar que a retirada da vírgula de um adjunto curto (*Ontem,*) gera erro gramatical. |
| **Vírgula antes da conjunção "E"** | Usa-se quando as orações coordenadas têm **sujeitos diferentes** ou em polissíndeto enfático. | "A equipe inspecionou o pátio**, e** o morador cobriu a caixa-d'água." | Achar que nunca pode existir vírgula antes da conjunção *e*. |`,
    questions: [
      { q: 'Em “Moradores, mantenham os recipientes protegidos”, a vírgula isola:', options: ['O sujeito de mantenham.', 'Um vocativo.', 'Um objeto direto.', 'Um complemento nominal.'], ans: 1, difficulty: 'Fácil', questionType: 'Gramática e Texto', comment: 'Gabarito: B. “Moradores” dirige-se diretamente aos interlocutores como chamamento (vocativo), exigindo isolamento por vírgula. Erro da A: nunca se separa sujeito de verbo por vírgula única, além de o sujeito de “mantenham” estar desinencial (“vocês”); erro da C: o objeto direto é “os recipientes protegidos”; erro da D: não completa nome com preposição.' },
      { q: 'Qual frase contém uma intercalação corretamente delimitada?', options: ['A equipe, retornou cedo.', 'A equipe, segundo a supervisora, retornou cedo.', 'A equipe segundo, a supervisora retornou cedo.', 'A equipe segundo a supervisora, retornou cedo.'], ans: 1, difficulty: 'Fácil', questionType: 'Gramática e Texto', comment: 'Gabarito: B. O termo intercalado (“segundo a supervisora”) entre sujeito e verbo está corretamente delimitado por duas vírgulas. Erro da A: vírgula solitária separando sujeito (“A equipe”) e verbo (“retornou”); erro da C e D: deixam de isolar integralmente a expressão intercalada nas duas extremidades.' },
      { q: 'No período “Os agentes de endemias visitaram os imóveis do setor norte, e a equipe de limpeza urbana recolheu os pneus inservíveis”, a vírgula antes da conjunção “e” justifica-se porque:', options: ['As duas orações coordenadas possuem sujeitos diferentes (“Os agentes de endemias” e “a equipe de limpeza urbana”).', 'A conjunção “e” introduz uma oração subordinada adjetiva restritiva.', 'É obrigatório separar o verbo “visitaram” de seu objeto direto.', 'Trata-se de um vocativo colocado no meio do período.'], ans: 0, difficulty: 'Intermediário', questionType: 'Gramática e Texto', comment: 'Gabarito: A. Quando a conjunção aditiva “e” conecta orações coordenadas com sujeitos distintos, a vírgula antes do “e” evita confusão de regência/sujeito e recomenda-se pela clareza sintática. Erro da B: “e” coordena orações, não é pronome relativo; erro da C: é proibido separar verbo de objeto direto; erro da D: não há chamamento.' },
      { q: 'Compare: I) “Os reservatórios, que estavam destampados, receberam tela de proteção” e II) “Os reservatórios que estavam destampados receberam tela de proteção”. Sobre o efeito das vírgulas, é correto afirmar:', options: ['Em I, subentende-se que todos os reservatórios considerados estavam destampados; em II, apenas o subconjunto dos que estavam destampados recebeu tela.', 'As duas frases possuem exatamente o mesmo sentido e alcance semântico.', 'A frase II apresenta erro de pontuação por omitir vírgula entre sujeito e verbo.', 'Em I, o trecho entre vírgulas funciona como objeto direto de receberam.'], ans: 0, difficulty: 'Intermediário', questionType: 'Gramática e Texto', comment: 'Gabarito: A. Em I, a oração adjetiva explicativa (entre vírgulas) generaliza o atributo a todos os reservatórios do contexto; em II, a restritiva (sem vírgulas) restringe apenas aos destampados. Erro da B: o alcance muda significativamente; erro da C: oração adjetiva restritiva corretamente não leva vírgulas; erro da D: funciona como adjunto/explicação de “Os reservatórios”, sujeito do período.' },
    ],
    flashcards: [
      ['Por que a vírgula não pode ser escolhida só pela respiração?', 'Porque deve marcar relações sintáticas e discursivas; uma pausa pessoal não justifica separar sujeito e verbo.'],
      ['Quando é correto usar vírgula antes da conjunção aditiva “e”?', 'Principalmente quando une orações coordenadas com sujeitos diferentes ou em casos de polissíndeto enfático.'],
      ['Qual o efeito de substituir as duas vírgulas de um aposto explicativo por dois travessões?', 'A substituição preserva a correção gramatical e dá maior destaque visual e discursivo ao aposto intercalado.'],
    ],
    references: [{ title: 'FUNAG — vírgula', url: 'https://www.funag.gov.br/manual/index.php?title=V%C3%ADrgula', section: 'Emprego da vírgula e estruturas intercaladas.' }],
  },
  {
    id: 'por_18', title: 'Adequação linguística, identidade e comunicação com o público',
    theory: `## Variedade linguística não mede inteligência
As línguas variam entre regiões, grupos sociais, situações e épocas. A variação não constitui, por si só, defeito de raciocínio. A escola e os concursos podem exigir domínio da norma-padrão em determinadas tarefas, mas isso não autoriza desqualificar a identidade de um falante ou considerar sua variedade incapaz de expressar conhecimento.

**Norma-padrão** é um modelo de referência prescritiva; **norma culta** descreve usos de grupos com escolarização elevada em situações e comunidades determinadas. Não são expressões rigorosamente sinônimas. A fala efetiva de pessoas escolarizadas também varia e nem sempre coincide com todas as prescrições.

## Quatro dimensões em exemplos
Dizer **mandioca**, **macaxeira** ou **aipim**, conforme a comunidade, ilustra variação regional. O vocabulário técnico de uma equipe de saúde em contraste com uma conversa não especializada pode ilustrar diferenças de grupo social ou profissional. A mesma pessoa que redige um relatório formal e conversa informalmente com um vizinho ajusta o registro à situação. Mudanças históricas de grafia e formas de tratamento exemplificam variação ao longo do tempo.

As dimensões podem se sobrepor; não trate todo exemplo como se tivesse uma única causa. A idade, a região, a profissão e o interlocutor podem atuar simultaneamente.

## Caso de comunicação comunitária
Um relatório pode registrar “foram identificados recipientes com água acumulada”. Ao conversar com o morador, o agente pode explicar: “há água parada nesses recipientes; vamos verificar como mantê-los protegidos”. A segunda redação simplifica o vocabulário sem distorcer o conteúdo. Comunicação acessível não exige infantilização nem abandono da precisão.

## Funções da linguagem e predominância
Um aviso pode informar e orientar ao mesmo tempo. Em “Morador, confira os recipientes do quintal”, predomina o direcionamento ao destinatário, associado à função conativa. Uma definição de termo pode cumprir função metalinguística. Em provas, procure o foco predominante no trecho, sem afirmar que um texto só pode apresentar uma função. Não há base para deduzir percentuais de cobrança da banca a partir desta classificação.`,
    summary: `Variação é constitutiva da língua. Norma-padrão é referência prescritiva; norma culta descreve usos. Adeque o registro sem preconceito e sem perder precisão. Funções podem coexistir.

| Dimensão de Variação / Função | Fator Determinante / Foco Comunicativo | Exemplo Prático | Palavra-Chave de Prova |
| --- | --- | --- | --- |
| **Diatópica (Geográfica / Regional)** | Espaço físico, região ou localidade dos falantes. | *Jerimum / abóbora*; *igarapé / córrego*; *macaxeira / mandioca*. | Regionalismo, sotaque e léxico local. |
| **Diastrática (Social / Grupal)** | Grupo social, faixa etária, profissão (jargão técnico). | Jargão epidemiológico (*"bloqueio de transmissão, índice de Breteau"*). | Gírias, jargões profissionais, socioleto. |
| **Diafásica (Situacional / Registro)** | Grau de formalidade e monitoramento conforme a situação e o interlocutor. | Relatório oficial para a chefia × conversa acolhedora no portão do morador. | Adequação vocabular, estilo formal vs. informal. |
| **Diacrônica (Histórica)** | Evolução da língua ao longo do tempo (séculos/gerações). | *Vossa Mercê → vosmecê → você*; *pharmacia → farmácia*. | Arcaísmos e mudanças históricas. |
| **Funções da Linguagem (Jakobson)** | **Referencial** (informação), **Conativa/Apelativa** (receptor/imperativo), **Emotiva** (1ª pessoa), **Metalinguística** (código explica o código), **Fática** (canal), **Poética** (forma da mensagem). | Cartaz preventivo: *"Proteja sua família!"* (Conativa) + dados de casos (Referencial). | Identifique a função **predominante** no trecho perguntado. |`,
    questions: [
      { q: 'A mesma agente escreve um relatório formal e conversa informalmente com uma vizinha. Isso exemplifica principalmente variação:', options: ['Situacional ou de registro.', 'Exclusivamente histórica.', 'Obrigatoriamente geográfica.', 'Que prova incapacidade de usar a língua.'], ans: 0, difficulty: 'Fácil', questionType: 'Gramática e Texto', comment: 'Gabarito: A. A adequação do grau de formalidade ao gênero e ao interlocutor configura variação diafásica (situacional ou de registro). Erro da B: variação histórica (diacrônica) compara épocas diferentes; erro da C: variação geográfica (diatópica) compara regiões distintas; erro da D: alternar registros demonstra competência comunicativa.' },
      { q: 'Qual atitude favorece comunicação pública acessível?', options: ['Ridicularizar vocabulário regional.', 'Usar o máximo de jargão sem explicação.', 'Explicar termos técnicos em linguagem clara, preservando seu sentido.', 'Trocar informação precisa por uma promessa sem fundamento.'], ans: 2, difficulty: 'Fácil', questionType: 'Caso Prático ACE', comment: 'Gabarito: C. Na educação em saúde, o ACE traduz conceitos técnicos (como LIRAa, larvicida ou período de incubação) para linguagem clara e respeitosa sem perder exatidão. Erro da A: configura preconceito linguístico; erro da B: jargão opaco bloqueia a compreensão comunitária; erro da D: distorce informação sanitária oficial.' },
      { q: 'Quando um manual técnico da vigilância utiliza termos específicos da profissão, como “pesquisa larvária”, “tratamento focal” e “ovitrampa”, observa-se sobretudo uma variedade associada à dimensão:', options: ['Diastrática (jargão técnico-profissional de um grupo específico de atuação).', 'Diacrônica do século XVI.', 'Incoerente por erro de concordância.', 'Exclusivamente fática de teste de microfone.'], ans: 0, difficulty: 'Intermediário', questionType: 'Gramática e Texto', comment: 'Gabarito: A. Jargões profissionais integram a variação diastrática (social/ocupacional). Erro da B: trata-se de terminologia técnica contemporânea; erro da C: vocabulário especializado é gramaticalmente legítimo no manual; erro da D: a função fática testa o canal de contato, distinta de variação sociolinguística.' },
      { q: 'No trecho de um glossário educativo: “Vetor biológico significa o organismo, como o mosquito Aedes aegypti, no qual o agente infeccioso se multiplica antes de ser transmitido”, predomina a função da linguagem:', options: ['Metalinguística, pois utiliza a própria língua para definir e explicar o significado de uma expressão do código.', 'Fática, pois limita-se a testar se o ouvinte está na linha telefônica.', 'Emotiva, pois relata memórias íntimas em primeira pessoa do singular.', 'Apelativa exclusiva, pois contém apenas interjeições de chamamento.'], ans: 0, difficulty: 'Intermediário', questionType: 'Gramática e Texto', comment: 'Gabarito: A. Glossários e definições voltadas a esclarecer o significado de palavras ou conceitos exemplificam a função metalinguística (o código falando do código). Erro da B: função fática checa/mantém o canal; erro da C: emotiva expressa subjetividade do emissor; erro da D: apelativa/conativa dirige comandos ou apelos ao receptor.' },
    ],
    flashcards: [
      ['Norma-padrão e norma culta são idênticas?', 'Não. Norma-padrão é modelo prescritivo idealizado; norma culta descreve os usos reais praticados por falantes escolarizados em contextos monitorados.'],
      ['Quais são as 4 dimensões clássicas da variação linguística?', 'Diatópica (regional), Diastrática (social/profissional), Diafásica (situacional/registro) e Diacrônica (histórica).'],
      ['Qual função da linguagem predomina em campanhas de vacinação e combate ao Aedes que se dirigem ao cidadão no imperativo?', 'A função conativa (ou apelativa), centrada no destinatário para influenciar seu comportamento.'],
    ],
    references: [reading],
  },
];
