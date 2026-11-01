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
“A equipe voltou” e “a equipe chegou” não preservam exatamente o mesmo sentido: a segunda redação elimina a pressuposição de retorno. A substituição de uma palavra pode manter o assunto e alterar uma informação importante. Para testar equivalência, confira o sentido, o grau de certeza, o tempo e a referência dos termos.`,
    summary: 'Localize evidência textual. Contradição nega o texto; extrapolação acrescenta informação. Inferência deve ser sustentada. Retorno pode pressupor ação anterior; quantificadores delimitam o alcance da afirmação.',
    questions: [
      { q: 'No texto autoral “A equipe voltou ao bairro”, qual informação é pressuposta?', options: ['A equipe já esteve no bairro.', 'Todos os moradores foram visitados.', 'O problema foi resolvido.', 'A visita ocorreu à noite.'], ans: 0, comment: '“Voltou” indica retorno e pressupõe presença anterior. As demais alternativas acrescentam abrangência, resultado ou horário que não foram informados.' },
      { q: '“A maioria dos recipientes estava coberta” permite concluir que:', options: ['Todos estavam cobertos.', 'Nenhum estava coberto.', 'Mais da metade estava coberta.', 'Exatamente metade estava coberta.'], ans: 2, comment: 'Maioria corresponde a mais da metade do conjunto considerado. A frase não autoriza substituir maioria por todos, nenhum ou metade exata.' },
    ],
    flashcards: [['Como justificar uma inferência?', 'Apontando as informações do texto e a relação que sustenta a conclusão.'], ['Por que “todos” merece atenção?', 'Porque universaliza uma afirmação; pode extrapolar um texto que disse apenas alguns ou a maioria.']], references: [reading],
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
Uma pergunta sobre o gênero exige analisar a situação social de circulação. Uma pergunta sobre o tipo predominante exige examinar a organização interna. Para identificar argumentação, encontre uma tese e razões usadas para sustentá-la; a simples presença de informação não prova neutralidade absoluta nem defesa de uma tese. Identifique o que o comando da questão está pedindo antes de classificar.`,
    summary: 'Gênero: prática comunicativa e finalidade. Sequência: organização do trecho. Um gênero pode combinar várias sequências. Verbos e conectivos são pistas, não critérios isolados.',
    questions: [
      { q: 'Um relatório pode conter relato de uma visita e descrição do imóvel. Isso demonstra que:', options: ['Todo relatório é ficcional.', 'Um gênero pode combinar sequências textuais.', 'Descrição e narração são gêneros idênticos.', 'O gênero depende apenas do tempo verbal.'], ans: 1, comment: 'Relato e descrição podem coexistir no mesmo relatório. Gênero se relaciona à prática social; sequência, à organização linguística. As outras opções confundem esses planos.' },
      { q: 'Em “Confira os recipientes e tampe os reservatórios”, predomina a finalidade de:', options: ['Narrar um fato passado.', 'Caracterizar uma paisagem.', 'Orientar uma ação do destinatário.', 'Apresentar uma definição de palavra.'], ans: 2, comment: 'Os imperativos dirigem condutas ao leitor, configurando sequência injuntiva. Não há relato passado, retrato de ambiente ou explicação metalinguística.' },
    ], flashcards: [['Um gênero tem um único tipo textual?', 'Não. Um relatório ou reportagem pode reunir narração, descrição e explicação.']], references: [reading],
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
    summary: 'Teste o sentido no período. Sinônimos não são substitutos universais. Possessivos podem gerar ambiguidade. Hiperônimo inclui; hipônimo especifica. Parônimos exigem atenção à forma e ao contexto.',
    questions: [
      { q: 'Em “a visita criou uma ponte entre a comunidade e o serviço”, “ponte” está empregada como:', options: ['Construção necessariamente física.', 'Ligação figurada entre participantes.', 'Nome de uma doença.', 'Indicação de quantidade.'], ans: 1, comment: 'A ponte expressa ligação em sentido figurado. As demais leituras não se ajustam à relação entre comunidade e serviço apresentada no período.' },
      { q: 'Qual redação elimina a ambiguidade sobre a casa a ser visitada?', options: ['A agente falou à moradora sobre sua casa.', 'Ela falou com ela sobre sua casa.', 'A agente informou que a casa da moradora seria visitada.', 'Sua casa foi mencionada por ela.'], ans: 2, comment: '“Da moradora” explicita o referente. Os possessivos e pronomes das demais alternativas mantêm possibilidades de referência dependentes do contexto.' },
    ], flashcards: [['Como testar uma substituição por sinônimo?', 'Releia a frase completa, conferindo sentido, intensidade, referência e registro.']], references: [reading, grammar],
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

Pleonasmo expressivo reforça um termo com finalidade estilística. Ele deve ser distinguido de redundância desnecessária em uma redação técnica. A adequação depende do gênero: um efeito poético pode ser pouco útil em um relatório que exige concisão.`,
    summary: 'Reconstrua o termo omitido ou a ordem direta. Zeugma é uma espécie de elipse. Anáfora expressiva repete; referência anafórica retoma. Avalie o efeito e o gênero antes de chamar uma construção de erro.',
    questions: [
      { q: 'Em “Ana conferiu os relatórios; Bruno, os mapas”, a omissão de “conferiu” exemplifica:', options: ['Zeugma.', 'Antítese.', 'Onomatopeia.', 'Metonímia.'], ans: 0, comment: 'O verbo já expresso é recuperado na segunda oração, caracterizando zeugma. As outras figuras envolvem oposição, imitação de som ou substituição semântica.' },
      { q: '“Precisamos ouvir; precisamos orientar; precisamos retornar” apresenta:', options: ['Ausência de repetição.', 'Anáfora expressiva no início das orações.', 'Pronome relativo retomando um antecedente.', 'Apenas uma enumeração de substantivos.'], ans: 1, comment: '“Precisamos” repete-se no início das estruturas, produzindo ênfase. Não se trata de pronome anafórico, e as estruturas são orações verbais.' },
    ], flashcards: [['Zeugma e elipse se excluem?', 'Não. Zeugma é uma elipse de termo já expresso.']], references: [reading],
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

Nas questões de reescrita, compare o efeito expressivo. Substituir a frase por “mensagens falsas circularam rapidamente” conserva parte do conteúdo, mas reduz sua figuratividade.`,
    summary: 'Metáfora: aproximação por semelhança. Metonímia: contiguidade. Hipérbole exagera; ironia exige contexto; eufemismo suaviza. Explique o efeito, não só o nome.',
    questions: [
      { q: 'Em “li Machado de Assis durante a viagem”, o uso do autor pelas obras é:', options: ['Metonímia.', 'Hipérbole.', 'Assíndeto.', 'Onomatopeia.'], ans: 0, comment: 'A autoria relaciona o nome às obras: contiguidade, característica da metonímia. Não há exagero, omissão de conjunções ou reprodução de sons.' },
      { q: 'Para identificar ironia em “Que serviço excelente!”, é necessário:', options: ['Considerar apenas a palavra excelente.', 'Examinar a situação e as pistas de avaliação.', 'Tratar todo elogio como crítica.', 'Ignorar quem enuncia a fala.'], ans: 1, comment: 'A frase pode ser elogio literal ou ironia. O contexto e a posição do enunciador permitem distinguir essas leituras.' },
    ], flashcards: [['Qual diferença central entre metáfora e metonímia?', 'Metáfora opera por aproximação de sentidos; metonímia, por vínculo de contiguidade, como autoria.']], references: [reading],
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
    summary: 'Conectores dependem do contexto. Retomadas podem apontar para um nome ou uma proposição inteira. Apenas restringe; também acrescenta. Substituições exigem revisar sentido, sintaxe e pontuação.',
    questions: [
      { q: 'Em “Como a estrada estava interditada, a equipe retornou”, “como” expressa:', options: ['Comparação.', 'Conformidade.', 'Causa.', 'Conclusão.'], ans: 2, comment: 'A interdição explica o retorno; “já que” preserva essa relação causal. A leitura não é de comparação ou conformidade.' },
      { q: 'Em “A visita foi remarcada; isso alterou a rota”, “isso” retoma:', options: ['Necessariamente apenas a palavra rota.', 'O fato de a visita ter sido remarcada.', 'Um lugar que não aparece no texto.', 'A pessoa do leitor.'], ans: 1, comment: 'O demonstrativo encapsula o conteúdo da primeira oração. Retomadas referenciais não precisam apontar apenas para um substantivo.' },
    ], flashcards: [['Qual o teste para o valor de um conectivo?', 'Substituí-lo por uma paráfrase e conferir a relação entre as ideias no período.']], references: [reading, grammar],
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
    summary: 'Coesão liga; coerência constrói sentido global. Conectivo não corrige contradição. Progressão exige informação nova. Identifique referentes e limite conclusões ao que foi efetivamente afirmado.',
    questions: [
      { q: 'Um texto usa “portanto”, mas sua conclusão contradiz a informação anterior. O problema central é:', options: ['Falta obrigatória de adjetivos.', 'Incoerência, apesar de haver ligação formal.', 'Uso de palavras longas.', 'Ausência necessária de verbos.'], ans: 1, comment: 'O conector estabelece uma ligação superficial, mas não garante compatibilidade entre as proposições. O defeito é de construção do sentido.' },
      { q: 'Qual revisão melhora a clareza de “Maria conversou com Ana e ela registrou a visita”?', options: ['Maria conversou com Ana e alguém registrou.', 'Ela conversou com ela e ela registrou.', 'Maria conversou com Ana; em seguida, Ana registrou a visita.', 'Maria conversou e sua visita foi dela.'], ans: 2, comment: 'A repetição de Ana identifica quem fez o registro. Economia de palavras não deve impedir o reconhecimento do referente.' },
    ], flashcards: [['Muitos conectivos garantem coerência?', 'Não. As ideias ainda precisam ser compatíveis e relacionadas ao contexto e ao tema.']], references: [reading],
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
    summary: 'Classe, função e formação respondem a perguntas diferentes. Flexão ajusta o paradigma; derivação forma palavra. Analise o contexto de que/se e o termo modificado pelo adjetivo ou advérbio.',
    questions: [
      { q: 'Em “a rápida conferência”, “rápida” é:', options: ['Advérbio que modifica conferência.', 'Adjetivo que caracteriza conferência.', 'Conjunção integrante.', 'Verbo flexionado.'], ans: 1, comment: 'Conferência é substantivo; rápida o caracteriza e concorda com ele. Advérbios não fazem essa concordância nominal.' },
      { q: 'Qual par exemplifica flexão de número, em vez de derivação lexical?', options: ['Feliz/felicidade.', 'Útil/inútil.', 'Relatório/relatórios.', 'Claro/clareza.'], ans: 2, comment: 'Relatório/relatórios pertence ao mesmo paradigma nominal, com mudança de número. Os demais pares envolvem formação de outra palavra.' },
    ], flashcards: [['Encontrar prefixo e sufixo basta para reconhecer parassíntese?', 'Não. É preciso analisar se a formação exige os dois afixos no mesmo processo.']], references: [grammar],
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

Nem todo verbo admite essa transformação: em “os agentes chegaram cedo”, não há objeto direto para assumir a posição de sujeito paciente. “Registram-se ocorrências” permite análise passiva; já “precisa-se de apoio” tem construção impessoalizante com verbo transitivo indireto.`,
    summary: 'Compare tempo, aspecto e modo. Intervir segue vir; se eu vir vem de ver; se eu vier vem de vir. Na passiva, preserve o tempo do auxiliar e faça o particípio concordar com o sujeito paciente.',
    questions: [
      { q: 'A passiva correspondente a “A equipe conferia os registros” é:', options: ['Os registros foram conferidos pela equipe.', 'Os registros eram conferidos pela equipe.', 'Os registros serão conferidos pela equipe.', 'A equipe era conferida pelos registros.'], ans: 1, comment: 'Conferia está no pretérito imperfeito, preservado por eram. Foram muda para perfeito; serão muda para futuro; a última opção inverte os papéis sem preservar o sentido.' },
      { q: 'Qual alternativa emprega corretamente o futuro do subjuntivo de ver?', options: ['Se eu ver o problema, avisarei.', 'Se eu vir o problema, avisarei.', 'Se eu vier o problema, avisarei.', 'Se eu vejo o problema, avisaria.'], ans: 1, comment: 'Vir é futuro do subjuntivo de ver. Vier pertence a vir. A forma ver é infinitivo e não corresponde ao paradigma exigido nessa oração condicional.' },
    ], flashcards: [['Como distinguir “se eu vir” de “se eu vier”?', 'Vir corresponde a ver; vier corresponde a vir.'], ['Como manter o tempo na passiva de “registravam”?', 'Use eram registradas/registrados, conforme o sujeito paciente.']], references: [grammar],
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
    summary: 'O núcleo do sujeito comanda a regra geral. Haver existencial e fazer temporal são impessoais. Existir concorda. Na passiva com se, procure o sujeito paciente; na indeterminação, não transforme complemento preposicionado em sujeito.',
    questions: [
      { q: 'Qual alternativa segue a concordância padrão?', options: ['Devem haver novas visitas.', 'Deve haver novas visitas.', 'Houveram novas visitas.', 'Fazem dois meses que houve visitas.'], ans: 1, comment: 'Haver existencial é impessoal e mantém o auxiliar no singular. Faz temporal também fica no singular; houveram não cabe nesse uso existencial.' },
      { q: 'Qual frase apresenta se apassivador?', options: ['Precisa-se de apoio.', 'Vive-se bem aqui.', 'Conferem-se os relatórios.', 'Trabalha-se muito.'], ans: 2, comment: 'Os relatórios são conferidos: há sujeito paciente e transformação passiva. Nas demais, o se indetermina o sujeito nas construções apresentadas.' },
    ], flashcards: [['Deve haver ou devem haver registros?', 'Deve haver: haver existencial é impessoal, inclusive em locução.']], references: [{ title: 'FUNAG — concordância verbal', url: 'https://www.funag.gov.br/manual/index.php?title=Concord%C3%A2ncia_verbal', section: 'Regra geral; partitivos; verbos impessoais.' }],
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

Para revisar uma frase, recoloque os termos na ordem mais simples e pergunte qual preposição a relação exige. Isso resolve melhor que memorizar apenas uma lista descontextualizada.`,
    summary: 'Regência depende de sentido e construção. Na oração relativa, recupere a preposição do verbo ou nome. Onde/aonde/de onde exigem relação adequada. Cujo concorda com o termo possuído e não admite artigo depois.',
    questions: [
      { q: 'Complete: “Estes são os materiais ___ a equipe necessita.”', options: ['que', 'de que', 'cujo', 'onde'], ans: 1, comment: 'Necessitar de materiais produz “materiais de que necessita”. Onde não retoma adequadamente materiais, e cujo exige outra relação sintática.' },
      { q: 'Qual construção emprega cujo corretamente?', options: ['A escola cujas as salas foram vistoriadas.', 'A escola cuja as salas foram vistoriadas.', 'A escola cujas salas foram vistoriadas.', 'A escola cujo salas foram vistoriadas.'], ans: 2, comment: 'Cujas concorda com salas, termo possuído, sem artigo interposto. As demais formas erram concordância ou inserem artigo.' },
    ], flashcards: [['Como descobrir a preposição antes de um relativo?', 'Reconstrua a oração simples: necessita de materiais → materiais de que necessita.']], references: [grammar],
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
    summary: 'Exija preposição e segundo elemento compatível. Visitou a unidade; retornou à unidade. Referiu-se àquele documento é possível mesmo com nome masculino. Horário e intervalo futuro têm estruturas diferentes.',
    questions: [
      { q: 'Qual alternativa usa corretamente o acento grave?', options: ['A equipe começou à registrar.', 'A equipe visitou à unidade.', 'A equipe retornou à unidade.', 'A equipe chegou daqui à duas horas.'], ans: 2, comment: 'Retornou a + a unidade = à unidade. Começar a registrar não tem artigo; visitar é transitivo direto; daqui a indica intervalo sem essa fusão.' },
      { q: 'Em “referiu-se àquele documento”, a crase ocorre porque:', options: ['Todo substantivo masculino admite artigo a.', 'A preposição a se combina com o início de aquele.', 'Documento é uma palavra feminina.', 'Todo demonstrativo exige crase.'], ans: 1, comment: 'Referir-se a exige preposição, que se funde com o a inicial do demonstrativo. A classe e o gênero de documento não explicam esse caso.' },
    ], flashcards: [['Por que “visitou a escola” não leva crase?', 'Porque visitar, nessa construção, não exige preposição a; há apenas artigo.']], references: [{ title: 'TCDF — Manual de Redação Oficial', url: 'https://biblioteca.tc.df.gov.br/wp-content/uploads/2018/11/ManualRedacao2014.pdf', section: 'Seção 11.9 — Crase; exemplos autorais neste complemento.' }],
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
    summary: 'Verifique oração, atração e pausa. Não se esqueça; encaminhar-se-á; não se encaminhará. Pronomes não se ligam encliticamente ao particípio nessa construção. Registrar + o → registrá-lo.',
    questions: [
      { q: 'Na escrita formal, qual frase apresenta a colocação esperada com negação?', options: ['Não esqueça-se do prazo.', 'Não se esqueça do prazo.', 'Não esquecerá-se do prazo.', 'Não esquecido-se do prazo.'], ans: 1, comment: 'A negação favorece a próclise: não se esqueça. As demais opções ignoram a atração ou usam combinação verbal inadequada.' },
      { q: 'Qual é a combinação de “registrar” com o pronome objeto “o”?', options: ['Registrar-o.', 'Registra-no.', 'Registrá-lo.', 'Registrá-lhe.'], ans: 2, comment: 'Após r, o pronome o assume lo e a consoante final é retirada: registrá-lo. Lhe não exerce o mesmo papel de objeto direto nesse exemplo.' },
    ], flashcards: [['Quando a mesóclise cede lugar à próclise?', 'Quando a construção exige atração, como em não se encaminhará.']], references: [{ title: 'FUNAG — colocação pronominal', url: 'https://www.funag.gov.br/manual/index.php?title=Coloca%C3%A7%C3%A3o_pronominal', section: 'Próclise, mesóclise, ênclise e locuções verbais.' }],
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

Para resolver uma questão, não classifique pelo conectivo isolado. Primeiro descubra que papel a oração desempenha, depois observe o conector e, por fim, o efeito da pontuação. Esse caminho evita confundir que integrante com que relativo.`,
    summary: 'Localize predicados e funções. Substantiva ocupa função nominal; adjetiva caracteriza antecedente; adverbial indica circunstância. A vírgula pode mudar uma relativa de restritiva para explicativa.',
    questions: [
      { q: 'Em “É importante que a equipe retorne”, “que a equipe retorne” funciona como:', options: ['Oração substantiva subjetiva.', 'Oração adjetiva restritiva.', 'Vocativo.', 'Objeto indireto de importante.'], ans: 0, comment: 'O conteúdo pode ser retomado por isso: isso é importante. A oração exerce função de sujeito, sem antecedente nominal que caracterize.' },
      { q: 'A retirada das vírgulas de uma oração adjetiva explicativa pode:', options: ['Jamais alterar o sentido.', 'Transformar a informação em restrição de um conjunto.', 'Eliminar obrigatoriamente todos os verbos.', 'Converter qualquer frase em pergunta.'], ans: 1, comment: 'A relativa sem isolamento pode selecionar um subconjunto; por isso, a alteração afeta o alcance da afirmação. Pontuação também participa do sentido.' },
    ], flashcards: [['Como diferenciar que relativo de que integrante?', 'O relativo retoma antecedente; o integrante introduz uma oração que ocupa função nominal.']], references: [grammar, reading],
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
    summary: 'Localize a tônica; identifique o grupo e a terminação. Saúde tem hiato; heroico e herói têm tonicidades diferentes. Pode/pôde e tem/têm distinguem flexões.',
    questions: [
      { q: 'Qual comparação explica a grafia atual de heroico e herói?', options: ['Ambas são proparoxítonas.', 'Heroico é paroxítona; herói é oxítona.', 'Herói perdeu o acento pelo Acordo.', 'Acentos não dependem de tonicidade.'], ans: 1, comment: 'O tratamento dos ditongos abertos difere nesses grupos. Heroico perdeu o acento como paroxítona; herói o conserva como oxítona.' },
      { q: 'Qual par distingue presente de passado por acento diferencial?', options: ['Pode/pôde.', 'Tem/têm.', 'Vem/vêm.', 'Por/pôr.'], ans: 0, comment: 'Pode é presente; pôde é pretérito perfeito. Tem/têm e vem/vêm distinguem número; por/pôr distingue preposição e verbo.' },
    ], flashcards: [['Por que saúde leva acento no u?', 'O u é tônico e forma hiato com a vogal anterior, nas condições da regra.']], references: [spelling],
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
    summary: 'Macetes de hífen têm limites e exceções. Porquê substantivo admite os porquês. Por que pode estar em pergunta indireta ou relativo. Analise a função de mal/mau, há/a e senão/se não.',
    questions: [
      { q: 'Complete: “Não sabemos ___ a visita foi adiada.”', options: ['porquê', 'por quê', 'por que', 'porque'], ans: 2, comment: 'A oração contém pergunta indireta equivalente a por qual razão. Não há substantivo determinado nem expressão tônica final.' },
      { q: 'Qual grafia mostra que o macete “vogais iguais sempre exigem hífen” tem limites?', options: ['Micro-ondas.', 'Coobrigação.', 'Anti-inflamatório.', 'Contra-ataque.'], ans: 1, comment: 'Coobrigação se escreve sem hífen, apesar do encontro de o com o. É necessário considerar as regras específicas do prefixo co-.' },
    ], flashcards: [['Por que consultar o VOLP?', 'Para confirmar grafias e casos específicos que não são resolvidos por um macete geral.']], references: [spelling, { title: 'Academia Brasileira de Letras — VOLP', url: 'https://www.academia.org.br/nossa-lingua/busca-no-vocabulario', section: 'Consulta de formas vocabulares.' }],
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
    summary: 'Analise funções, não apenas pausas. Vocativo é isolado; sujeito não se separa do verbo por vírgula gratuita. Intercalações exigem delimitação. A pontuação da relativa muda o alcance da informação.',
    questions: [
      { q: 'Em “Moradores, mantenham os recipientes protegidos”, a vírgula isola:', options: ['O sujeito de mantenham.', 'Um vocativo.', 'Um objeto direto.', 'Um complemento nominal.'], ans: 1, comment: 'Moradores é o destinatário chamado diretamente, portanto vocativo. O sujeito da forma de imperativo está associado ao interlocutor, mas o termo de chamamento tem função própria.' },
      { q: 'Qual frase contém uma intercalação corretamente delimitada?', options: ['A equipe, retornou cedo.', 'A equipe, segundo a supervisora, retornou cedo.', 'A equipe segundo, a supervisora retornou cedo.', 'A equipe segundo a supervisora, retornou cedo.'], ans: 1, comment: 'As duas vírgulas isolam a expressão intercalada "segundo a supervisora". Na primeira, a vírgula separa indevidamente sujeito e verbo; na terceira e na quarta, falta o par de vírgulas nas extremidades da intercalação.' },
    ], flashcards: [['Por que a vírgula não pode ser escolhida só pela respiração?', 'Porque deve marcar relações sintáticas e discursivas; uma pausa pessoal não justifica separar sujeito e verbo.']], references: [{ title: 'FUNAG — vírgula', url: 'https://www.funag.gov.br/manual/index.php?title=V%C3%ADrgula', section: 'Emprego da vírgula e estruturas intercaladas.' }],
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
    summary: 'Variação é constitutiva da língua. Norma-padrão é referência prescritiva; norma culta descreve usos. Adeque o registro sem preconceito e sem perder precisão. Funções podem coexistir.',
    questions: [
      { q: 'A mesma agente escreve um relatório formal e conversa informalmente com uma vizinha. Isso exemplifica principalmente variação:', options: ['Situacional ou de registro.', 'Exclusivamente histórica.', 'Obrigatoriamente geográfica.', 'Que prova incapacidade de usar a língua.'], ans: 0, comment: 'A mudança de situação e interlocutor orienta a adaptação do registro. O exemplo não exige mudança de época ou região nem indica incapacidade.' },
      { q: 'Qual atitude favorece comunicação pública acessível?', options: ['Ridicularizar vocabulário regional.', 'Usar o máximo de jargão sem explicação.', 'Explicar termos técnicos em linguagem clara, preservando seu sentido.', 'Trocar informação precisa por uma promessa sem fundamento.'], ans: 2, comment: 'A clareza adapta a expressão e conserva a informação. Preconceito, jargão opaco e promessas indevidas dificultam a compreensão.' },
    ], flashcards: [['Norma-padrão e norma culta são idênticas?', 'Não. Uma é modelo prescritivo; a outra descreve usos de determinados grupos e contextos.']], references: [reading],
  },
];
