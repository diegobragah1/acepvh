import type { DeepeningEntry } from './types';
const cf = {title:'Constituição Federal — portal oficial de legislação',url:'https://www4.planalto.gov.br/legislacao/portal-legis/legislacao-1/constituicao',section:'Arts. 196 a 200; casos de aplicação autorais.'};
const los = {title:'Lei 8.080/1990 — Planalto',url:'https://www.planalto.gov.br/ccivil_03/leis/l8080.htm',section:'Arts. 2º a 7º, 8º a 18: objetivos, organização e competências do SUS.'};
const agents = {title:'Lei 11.350/2006 — Planalto',url:'https://planalto.gov.br/ccivil_03/_ato2004-2006/2006/lei/l11350.htm',section:'Arts. 2º, 2º-A, 3º, 4º e 4º-A; observar as alterações e o marco temporal do edital.'};
const pnab = {title:'PNAB — Portaria 2.436/2017',url:'https://bvsms.saude.gov.br/bvs/saudelegis/gm/2017/prt2436_22_09_2017.html',section:'Arts. 1º a 3º e anexo: processo de trabalho e integração da atenção básica com a vigilância.'};
const pnvs = {title:'CNS — Resolução 588/2018',url:'https://bvsms.saude.gov.br/bvs/saudelegis/cns/2018/res0588_13_08_2018.html',section:'Arts. 2º e 3º: integração das vigilâncias e atuação territorial.'};

export const especificos: DeepeningEntry[] = [
  {
    id:'esp_1',title:'Direito à saúde aplicado: universalidade, integralidade e rede',
    theory:`## Do direito ao funcionamento do serviço
O art. 196 relaciona o direito à saúde tanto à redução de riscos quanto ao acesso às ações de promoção, proteção e recuperação. Isso impede reduzir a saúde pública ao atendimento de quem já está doente. O saneamento, a informação e a prevenção dialogam com o direito à saúde, ainda que envolvam outros setores da administração.

O art. 198 organiza a rede e apresenta diretrizes como descentralização, atendimento integral e participação da comunidade. **Descentralizar** não significa que cada município possa ignorar a articulação do sistema; **integralidade** não significa que toda unidade execute todos os procedimentos. A rede articula diferentes pontos de atenção, conforme as necessidades e os serviços disponíveis.

## Caso resolvido: encaminhamento não elimina responsabilidade
Uma pessoa procura uma unidade com necessidade de avaliação que demanda outro serviço. A unidade que encaminha não deve tratar o encaminhamento como abandono. O caso ajuda a distinguir três ideias: acesso inicial, referência para um serviço adequado e continuidade do cuidado. Se o fluxo exige transporte e informação entre equipes, planejar essas etapas integra a organização da rede.

Não se conclui, a partir desse caso, que qualquer pessoa possa exigir qualquer procedimento em qualquer unidade e a qualquer momento. Universalidade diz respeito ao direito de acesso; a organização concreta considera necessidade, prioridade, regulação e capacidade da rede.

## Iniciativa privada: dois planos
O art. 199 permite a assistência à saúde pela iniciativa privada e prevê participação complementar no SUS nas condições ali descritas. Atuar no setor privado e atuar complementarmente no SUS não são situações idênticas. Em questão de prova, descubra se o enunciado está tratando de liberdade de prestar assistência ou de integração contratual com o sistema público.

## Competência ampla do SUS
O art. 200 inclui vigilância, saúde do trabalhador, formação de recursos humanos e participação em saneamento, entre outras atribuições. Assim, uma alternativa que diga “o SUS atua exclusivamente em hospitais” exclui campos expressamente previstos. Ao revisar artigos com emendas, use a redação aplicável ao marco temporal do edital; um texto histórico com alterações riscadas não deve ser lido como se todas as versões vigorassem simultaneamente.`,
    summary:`Saúde abrange reduzir riscos e prestar cuidado. Rede articula pontos de atenção; integralidade não exige tudo em cada unidade. Assistência privada e participação complementar no SUS são planos distintos.

| Dispositivo (CF/88) | Núcleo Normativo | Regra-Chave e Exceções Constitucionais | Pegadinha Recorrente de Prova |
| --- | --- | --- | --- |
| **Art. 196** | Direito de todos e dever do Estado. | Acesso **universal e igualitário** às ações de promoção, proteção e recuperação. | Restringir o SUS aos segurados da Previdência ou apenas às ações curativas. |
| **Art. 197** | Relevância pública das ações e serviços. | Execução direta pelo Poder Público ou através de terceiros (pessoa física ou jurídica de direito privado). | Dizer que a execução é monopólio estatal exclusivo sem possibilidade de terceiros. |
| **Art. 198** | Rede regionalizada e hierarquizada (3 diretrizes). | 1) Descentralização (direção única); 2) Atendimento integral (prioridade preventiva); 3) Participação da comunidade. | Afirmar que a prioridade constitucional das preventivas prejudica os serviços assistenciais. |
| **Art. 199** | Assistência livre à iniciativa privada. | Participação **complementar** mediante contrato de direito público ou convênio, com preferência para **entidades filantrópicas e sem fins lucrativos**. | Permitir destinação de recursos públicos para auxílios/subvenções às instituições privadas **com fins lucrativos** (vedado pelo § 2º). |
| **Art. 200** | Competências constitucionais do SUS (8 incisos). | Fiscalizar alimentos/bebidas/água, controlar produtos psicoativos/tóxicos/radioativos, ordenar RH, **colaborar** na proteção do meio ambiente (incluindo o do trabalho). | Trocar *"colaborar na proteção do meio ambiente"* por *"executar com exclusividade o licenciamento ambiental"*. |`,
    questions:[
      {q:'[Autoral] Uma unidade encaminha uma pessoa para avaliação especializada. Qual conclusão respeita a organização em rede?',options:['Integralidade exige todos os procedimentos em cada unidade.','O encaminhamento deve integrar um fluxo que preserve a continuidade do cuidado.','O SUS se limita ao atendimento hospitalar.','A referência elimina qualquer necessidade de comunicação entre serviços.'],ans:1,comment:'A rede organiza pontos com funções diferentes e exige articulação. Integralidade não equivale a concentrar todo procedimento em uma unidade nem a abandonar o usuário após o encaminhamento.'},
      {q:'[Autoral] O art. 196 permite reduzir saúde pública apenas ao tratamento de pessoas já doentes?',options:['Sim, pois prevenção não integra saúde.','Sim, pois políticas sociais são irrelevantes.','Não, pois também trata de redução de riscos e promoção e proteção.','Não, porque proíbe toda assistência privada.'],ans:2,comment:'O artigo abrange políticas de redução de riscos e acesso a promoção, proteção e recuperação. A existência de assistência privada é tratada em outro plano pelo art. 199.'},
      {q:'[Autoral] Nos termos do art. 199 da Constituição Federal, quando as disponibilidades do SUS forem insuficientes para garantir a cobertura assistencial à população, as instituições privadas poderão participar de forma:',options:['Complementar, segundo diretrizes do SUS, mediante contrato de direito público ou convênio, tendo preferência as entidades filantrópicas e as sem fins lucrativos.','Substitutiva e soberana, dispensando qualquer contrato ou convênio com o gestor público.','Preferencialmente lucrativa, recebendo subvenções e auxílios diretos do fundo de saúde para ampliar o lucro societário.','Exclusiva para procedimentos estéticos não previstos na rede pública.'],ans:0,comment:'O art. 199, § 1º, estabelece a participação complementar mediante contrato de direito público ou convênio, com preferência expressa para entidades filantrópicas e sem fins lucrativos, sendo vedada a destinação de auxílios/subvenções a entidades com fins lucrativos (§ 2º).'},
      {q:'[Autoral] De acordo com o art. 200 da Constituição Federal, compete ao Sistema Único de Saúde, além de outras atribuições previstas em lei:',options:['Executar ações de vigilância sanitária e epidemiológica, bem como as de saúde do trabalhador, e participar da formulação da política e da execução das ações de saneamento básico.','Julgar processos trabalhistas e aplicar penas privativas de liberdade a infratores ambientais.','Monopolizar a fabricação de todos os medicamentos comercializados em farmácias privadas do país.','Definir as alíquotas do imposto de renda de profissionais liberais da saúde.'],ans:0,comment:'Os incisos II e IV do art. 200 atribuem expressamente ao SUS a execução das ações de vigilância sanitária, epidemiológica e de saúde do trabalhador, bem como a participação na política e execução de saneamento básico.'},
    ],
    flashcards:[
      ['Integralidade significa tudo em cada unidade?','Não. A rede deve articular as ações necessárias nos pontos adequados.'],
      ['O SUS atua apenas em hospitais?','Não. Inclui vigilâncias, atenção básica e outras atribuições previstas constitucionalmente.'],
      ['Quais entidades privadas têm preferência para participar complementarmente do SUS (art. 199, § 1º)?','As entidades filantrópicas e as sem fins lucrativos, mediante contrato de direito público ou convênio.'],
    ],
    references:[cf],
  },
  {
    id:'esp_2',title:'Controle social e gestão: conselho, conferência e comissões',
    theory:`## Separe as funções institucionais
A Lei 8.080 organiza campos de atuação e competências do sistema. A Lei 8.142 disciplina participação da comunidade e transferências de recursos. Para comparar instituições, pergunte quem participa, com qual finalidade e com que periodicidade. Nomes parecidos não asseguram funções equivalentes.

O **Conselho de Saúde** tem caráter permanente e deliberativo e atua na formulação de estratégias e no controle da execução da política, inclusive nos aspectos econômicos e financeiros. A **Conferência de Saúde** reúne-se ordinariamente a cada quatro anos para avaliar a situação e propor diretrizes. A lei admite convocação extraordinária; por isso, “só pode acontecer a cada quatro anos” é formulação excessiva.

## Paridade calculada
A Lei 8.142 estabelece representação dos usuários paritária em relação ao conjunto dos demais segmentos. Em um exemplo com 24 assentos, essa relação corresponde a 12 para usuários e 12 para os demais, considerados em conjunto. A lei não está dizendo que usuários, gestores, prestadores e trabalhadores devem receber quatro parcelas iguais de 25%.

## Caso resolvido: formular diretrizes não é gerir a folha
Uma conferência propõe priorizar comunidades com dificuldade de acesso. A proposta orienta a formulação de políticas, mas não transforma a conferência em órgão executor de todas as despesas. O conselho acompanha e delibera nos limites legais; a gestão executa e presta contas. Participação da comunidade complementa o sistema de controles, sem apagar as competências dos demais órgãos.

## Pactuação e controle social
Comissões intergestores constituem espaços de articulação entre gestores. Não devem ser confundidas com conselhos de saúde, nos quais há representação social. Uma pergunta sobre pactuação entre entes federados exige identificar essa natureza; outra sobre participação de usuários exige olhar o conselho e a conferência.

Nos exercícios sobre transferência financeira, não memorize apenas “fundo a fundo”. Examine também requisitos, finalidade, planejamento e mecanismos de acompanhamento previstos na legislação. Uma transferência de recurso não comprova, sozinha, que uma ação foi executada nem que os resultados esperados foram alcançados.`,
    summary:`Conselho é permanente e deliberativo; conferência avalia e propõe diretrizes, ordinariamente a cada quatro anos. Paridade dos usuários é em relação ao conjunto dos demais. Pactuação de gestores não é controle social.

| Colegiado / Requisito (Leis 8.080 e 8.142) | Natureza e Periodicidade | Composição / Requisitos Legais | Função Principal |
| --- | --- | --- | --- |
| **Conferência de Saúde** | Consultiva/propositiva; reúne-se **a cada 4 anos** (convocada pelo Executivo ou, extraordinariamente, por esta ou pelo Conselho). | Vários segmentos sociais, com representação paritária de usuários. | Avaliar a situação de saúde e **propor as diretrizes** para a formulação da política de saúde. |
| **Conselho de Saúde** | **Permanente e deliberativo** (decisões homologadas pelo chefe do poder legalmente constituído em cada esfera). | **50% Usuários** + **50% demais segmentos** (governo, prestadores de serviço e profissionais de saúde). | Atuar na **formulação de estratégias e no controle da execução** da política de saúde (inclusive aspectos econômicos e financeiros). |
| **Comissões Intergestores (CIT, CIB, CIR)** | Fóruns de negociação e **pactuação entre gestores** (art. 14-A da Lei 8.080). | Apenas representantes dos gestores (União/Estados/Municípios), **sem** usuários. | Pactuar aspectos operacionais, financeiros e administrativos da gestão compartilhada do SUS. |
| **6 Requisitos para Repasse (Art. 4º da Lei 8.142)** | Condições para Municípios, Estados e DF receberem recursos de cobertura assistencial. | 1) Fundo de Saúde; 2) Conselho de Saúde; 3) Plano de Saúde; 4) Relatórios de Gestão; 5) Contrapartida no orçamento; 6) Comissão de elaboração do **PCCS** (prazo de 2 anos). | Sem atender a esses requisitos, os recursos são administrados, respectivamente, pelos Estados ou pela União (art. 4º, parágrafo único). |`,
    questions:[
      {q:'[Autoral] Em um conselho hipotético de 24 assentos, quantos correspondem aos usuários na paridade prevista pela Lei 8.142?',options:['6','8','12','24'],ans:2,comment:'Usuários ocupam metade em relação ao conjunto dos demais segmentos: 12 e 12. Dividir todos os segmentos em quatro parcelas iguais não expressa essa paridade.'},
      {q:'[Autoral] Qual afirmação distingue corretamente conselho e conferência?',options:['Ambos só existem no ano da conferência.','O conselho é permanente; a conferência reúne-se ordinariamente a cada quatro anos.','A conferência é a única gestora da folha de pessoal.','As comissões intergestores substituem a representação dos usuários.'],ans:1,comment:'A Lei 8.142 diferencia o caráter permanente do conselho e a reunião ordinária da conferência. Admite conferências extraordinárias e não transfere toda a execução administrativa a esses colegiados.'},
      {q:'[Autoral] Nos termos do art. 4º da Lei Federal nº 8.142/1990, assinale a alternativa que apresenta apenas requisitos exigidos dos Municípios, Estados e Distrito Federal para o recebimento regular e automático dos recursos de que trata o art. 3º da referida lei:',options:['Fundo de Saúde, Conselho de Saúde, Plano de Saúde, Relatórios de Gestão, contrapartida de recursos no respectivo orçamento e Comissão de elaboração do Plano de Carreira, Cargos e Salários (PCCS).','Apenas a assinatura de termo de adesão com hospital privado lucrativo e a extinção do Conselho Municipal de Saúde.','Existência de faculdade pública de medicina no município e realização de conferência mensal de saúde.','Autorização prévia da Comissão Intergestores Tripartite para cada compra individual de insumo básico.'],ans:0,comment:'Os seis incisos do art. 4º da Lei 8.142/1990 exigem: I - Fundo de Saúde; II - Conselho de Saúde; III - Plano de Saúde; IV - relatórios de gestão; V - contrapartida de recursos para a saúde no respectivo orçamento; VI - Comissão de elaboração do PCCS, previsto o prazo de dois anos para sua implantação.'},
      {q:'[Autoral] Sobre as Comissões Intergestores Bipartite (CIB) e Tripartite (CIT), reconhecidas no art. 14-A da Lei nº 8.080/1990, é correto afirmar que:',options:['São foros de negociação e pactuação entre gestores quanto aos aspectos operacionais do SUS, não se confundindo com as instâncias de controle social com participação de usuários.','Substituem integralmente os Conselhos Municipais e Estaduais de Saúde na fiscalização popular das contas.','São compostas por 50% de moradores do bairro e 50% de agentes de combate às endemias.','Reúnem-se apenas uma vez a cada dez anos para votar emendas constitucionais.'],ans:0,comment:'As Comissões Intergestores (CIT, CIB e CIR) reúnem exclusivamente gestores das esferas de governo para pactuação técnica e operacional, enquanto os Conselhos e Conferências exercem a participação social com paridade de usuários.'},
    ],
    flashcards:[
      ['Qual é a paridade dos usuários?','Metade (50%) dos assentos em relação ao conjunto dos demais segmentos (governo, prestadores e profissionais de saúde).'],
      ['Comissão intergestores é conselho de saúde?','Não. Pactuação entre gestores (CIT, CIB, CIR) e participação/controle social (Conselhos e Conferências) têm composições e finalidades distintas.'],
      ['Quais são os 6 requisitos do art. 4º da Lei 8.142/1990 para repasse regular e automático?', 'Fundo de Saúde, Conselho de Saúde, Plano de Saúde, Relatórios de Gestão, contrapartida orçamentária e Comissão de elaboração do PCCS.'],
    ],
    references:[los,{title:'Lei 8.142/1990 — Câmara dos Deputados',url:'https://www2.camara.leg.br/legin/fed/lei/1990/lei-8142-28-dezembro-1990-366031-publicacaooriginal-1-pl.html',section:'Art. 1º, §§ 1º a 5º: conselho, conferência e paridade.'}],
  },
  {
    id:'esp_3',title:'Atribuições, requisitos e evolução legal: como não misturar regimes',
    theory:`## Leis modificadoras e texto consolidado
As Leis 13.595/2018 e 13.708/2018 alteraram a Lei 11.350/2006. Para estudar, acompanhe a redação incorporada a cada artigo, distinguindo texto vigente e histórico. A lei modificadora explica de onde veio a mudança; o texto consolidado permite localizar a regra no conjunto. A denominação Lei Ruth Brilhante consta na Lei 11.350, incluída pela Lei 14.799/2024; não deve ser atribuída automaticamente a toda alteração anterior.

## ACS e ACE: integração sem identidade completa
O ACS atua com referência à atenção básica e ao vínculo com a comunidade. O ACE desenvolve vigilância, prevenção e controle de doenças e promoção da saúde, conforme a legislação e supervisão. Há ações compartilhadas, mas isso não elimina as atribuições específicas. Em uma questão que descreva pesquisa entomológica, é necessário identificar a atividade e sua base legal, sem concluir que ambos os cargos têm requisitos idênticos em todos os pontos.

## Atividade típica e atividade assistida
A lei distingue atividades típicas e ações realizadas em caráter excepcional com assistência de profissional de nível superior e estrutura adequada. Participar de determinada ação assistida não confere autorização geral para diagnosticar doenças ou prescrever medicamentos. Leia o verbo empregado: identificar suspeita e encaminhar não equivale a confirmar diagnóstico clínico.

## Caso resolvido: suspeita durante a visita
Durante uma visita, um agente observa relato de febre e identifica situação compatível com a definição operacional de suspeita trabalhada pela equipe. O percurso adequado envolve orientar o acesso ao serviço, comunicar a situação ao responsável e registrar conforme o fluxo. A confirmação e o manejo clínico dependem da avaliação profissional competente. Isso articula a vigilância com a assistência, sem substituir uma pela outra.

## Vínculo, jornada e remuneração
Separe requisito de ingresso, atribuição profissional, organização da jornada e composição remuneratória. Um certificado de curso não prova sozinho que todos os requisitos de ingresso foram cumpridos. Da mesma forma, piso constitucional, vencimento básico e gratificações locais não são conceitos idênticos. Valores e vantagens exigem combinar a norma federal, a norma local aplicável e a data de referência da questão.

## Detalhamento normativo essencial: Arts. 2º-A, 4º, 4º-A, 6º, 7º, 9º-A e EC 120/2022
Para gabaritar questões literais sobre a Lei nº 11.350/2006 e a EC nº 120/2022, domine cinco pontos centrais:
1. **Profissionais de saúde regulamentados (Art. 2º-A, incluído pela Lei 14.536/2023):** ACS e ACE são reconhecidos como profissionais de saúde, com profissões regulamentadas, para fins do disposto na alínea "c" do inciso XVI do caput do art. 37 da CF/88 (acumulação remunerada de dois cargos ou empregos privativos de profissionais de saúde, desde que haja compatibilidade de horários).
2. **Requisitos de ingresso distintos (Arts. 6º e 7º):** Ambos exigem haver concluído o **ensino médio** e concluir, com aproveitamento, **curso de formação inicial, com carga horária mínima de 40 horas**. Contudo, **residir na área da comunidade em que atuar, desde a data da publicação do edital do processo seletivo público**, é requisito exigido para o **ACS** (art. 6º, I), e **NÃO** para o ACE (art. 7º).
3. **Jornada de 40 horas semanais e distribuição (Art. 9º-A, § 2º):** A jornada integral de **40 horas semanais** é exigida para a garantia do piso salarial e deve ser dedicada integralmente às ações e serviços de promoção da saúde, vigilância epidemiológica e ambiental e combate a endemias, compondo-se de **30 horas para atividades de campo** e **10 horas para atividades de planejamento, avaliação de ações, preenchimento de sistemas e educação permanente** na unidade.
4. **Piso salarial constitucional, Insalubridade e Aposentadoria Especial (EC 120/2022 — Art. 198, §§ 7º a 11 da CF/88):** O vencimento dos agentes **não será inferior a 2 (dois) salários mínimos**, repassados pela União aos Municípios, aos Estados e ao DF, sem entrar no limite de despesa com pessoal do ente subnacional quanto aos recursos federais vinculados, assegurando-se também **adicional de insalubridade** e **aposentadoria especial** em razão dos riscos inerentes às funções.
5. **Atividades típicas vs. Atividades assistidas do ACE (Art. 4º, §§ 1º e 2º) e Compartilhadas (Art. 4º-A):** O ACE realiza em caráter típico pesquisa larvária, vistoria de imóveis/pontos estratégicos, identificação de criadouros, educação comunitária e execução de controle químico/biológico/manejo ambiental. Já em caráter complementar/assistido (observada a estrutura de vigilância e com assistência de profissional de nível superior), participa de campanhas de vacinação de animais, coleta de materiais biológicos de animais, necropsia de animais e investigação de óbitos de animais suspeitos de zoonoses.`,
    summary:`Leia as alterações dentro da Lei 11.350. ACS e ACE compartilham ações, mas não são cargos idênticos. Suspeita e encaminhamento não são diagnóstico/prescrição. Requisito, atribuição e remuneração são planos diferentes.

| Eixo Comparativo | Agente de Combate às Endemias (ACE) | Agente Comunitário de Saúde (ACS) | Base Legal (Lei 11.350/06 e CF/88) |
| --- | --- | --- | --- |
| **Foco Primordial** | Vigilância, prevenção e controle de doenças/zoonoses e promoção da saúde (art. 4º). | Prevenção de doenças e promoção da saúde por ações domiciliares/comunitárias na Atenção Básica (art. 3º). | Arts. 3º e 4º (redação da Lei 13.595/2018). |
| **Escolaridade e Curso Inicial** | Ensino médio completo (ou curso técnico em vigilância) + Curso de Formação Inicial de no mínimo **40 horas**. | Ensino médio completo (ou curso técnico em ACS) + Curso de Formação Inicial de no mínimo **40 horas**. | Arts. 6º e 7º (exceção para quem já exercia antes de 05/01/2018). |
| **Exigência de Residência na Área** | **NÃO exige** residir na área de atuação como requisito de investidura. | **EXIGE** residir na área da comunidade em que atuar desde a data da publicação do edital. | Art. 6º, I (exclusivo do ACS) × Art. 7º (ACE). |
| **Atividades Assistidas (com nível superior)** | Coleta de material biológico/necropsia de animais, vacinação antirrábica animal, censo animal (art. 4º, § 1º). | Aferição de pressão arterial, glicemia capilar, temperatura axilar, antropometria e curativos limpos no domicílio (art. 3º, § 4º). | Exigem capacitação, equipamento e supervisão de profissional de nível superior. |
| **Jornada, Piso e Direitos (EC 120/2022)** | **40h semanais** (30h campo + 10h planejamento/registro); piso mínimo de **2 salários mínimos**, insalubridade e aposentadoria especial. | **40h semanais** (30h campo + 10h planejamento/registro); piso mínimo de **2 salários mínimos**, insalubridade e aposentadoria especial. | Art. 9º-A da Lei 11.350/2006 e Art. 198, §§ 7º a 11 da CF/88. |`,
    questions:[
      {q:'[Autoral] Identificar um caso suspeito e encaminhar ao serviço significa que o ACE pode:',options:['Prescrever qualquer tratamento.','Substituir a confirmação clínica por impressão pessoal.','Articular vigilância e assistência dentro de suas atribuições.','Ignorar registro e comunicação à equipe.'],ans:2,comment:'Identificação de suspeitas, orientação e encaminhamento articulam o trabalho de campo com a rede. Não conferem autorização geral de diagnóstico ou prescrição.'},
      {q:'[Autoral] Para comparar requisito de ingresso e vantagem remuneratória, o candidato deve:',options:['Tratá-los como a mesma regra.','Distinguir os objetos e conferir normas e marco temporal aplicáveis.','Consultar apenas o nome do cargo.','Considerar que uma lei modificadora apaga todos os artigos não alterados.'],ans:1,comment:'Requisitos e remuneração têm objetos diferentes. Leis modificadoras alteram dispositivos específicos; o conjunto deve ser lido em sua versão pertinente.'},
      {q:'[Autoral] Comparando os requisitos legais de investidura do Agente Comunitário de Saúde (art. 6º) e do Agente de Combate às Endemias (art. 7º) na Lei Federal nº 11.350/2006, assinale a afirmação correta:',options:['Ambos exigem conclusão do ensino médio e curso introdutório de formação inicial com carga horária mínima de 40 horas, mas a exigência de residir na área da comunidade desde a publicação do edital aplica-se ao ACS e não consta entre os requisitos do ACE.','O ACE precisa comprovar residência no mesmo quarteirão de trabalho há pelo menos dez anos antes do edital, enquanto o ACS é dispensado de residir no município.','Nenhum dos dois cargos exige curso de formação inicial nem conclusão do ensino médio após a Lei nº 13.595/2018.','Apenas o ACE pode acumular cargos na administração pública, sendo o ACS impedido pela Lei nº 14.536/2023.'],ans:0,comment:'O art. 6º, I, exige do ACS residir na área da comunidade em que atuar desde a data da publicação do edital; o art. 7º estabelece os requisitos do ACE (curso de formação inicial de no mínimo 40 horas e ensino médio) sem impor residência na microárea.'},
      {q:'[Autoral] De acordo com a Emenda Constitucional nº 120/2022 (art. 198, §§ 7º a 10 da CF/88) e com o art. 2º-A da Lei nº 11.350/2006 (incluído pela Lei nº 14.536/2023), aos Agentes de Combate às Endemias é assegurado:',options:['O vencimento não inferior a 2 salários mínimos (com recursos repassados pela União), adicional de insalubridade, aposentadoria especial e o reconhecimento como profissionais de saúde para fins de acumulação constitucional de cargos privativos de profissionais de saúde com compatibilidade de horários.','O vencimento fixo de 1 salário mínimo pago exclusivamente pelo orçamento próprio municipal, sem direito a adicional de insalubridade.','Aposentadoria compulsória aos 45 anos de idade independentemente de tempo de contribuição e proibição absoluta de acumular outro cargo de saúde.','Autorização irrestrita para realizar cirurgias ambulatoriais e prescrever antimicrobianos sem supervisão médica.'],ans:0,comment:'A EC 120/2022 fixou o piso constitucional de no mínimo 2 salários mínimos custeado pela União, além de adicional de insalubridade e aposentadoria especial; a Lei 14.536/2023 incluiu o art. 2º-A reconhecendo ACS e ACE como profissionais de saúde para fins do art. 37, XVI, "c", da CF/88.'},
    ],
    flashcards:[
      ['Identificar suspeita equivale a confirmar doença?','Não. A suspeita orienta o fluxo de vigilância e avaliação; a confirmação segue critérios e competências próprias.'],
      ['Por que ler a lei consolidada?','Para localizar cada alteração no conjunto, sem confundir redações antigas com atuais.'],
      ['Qual requisito do art. 6º da Lei 11.350/2006 é exigido do ACS, mas NÃO do ACE (art. 7º)?','Residir na área da comunidade em que atuar desde a data da publicação do edital do processo seletivo público.'],
      ['O que a EC 120/2022 e a Lei 14.536/2023 garantiram aos ACS e ACE?','A EC 120/2022 garantiu piso não inferior a 2 salários mínimos, adicional de insalubridade e aposentadoria especial; a Lei 14.536/2023 reconheceu ambos como profissionais de saúde regulamentados para fins de acumulação lícita de cargos (art. 37, XVI, c, da CF/88).'],
    ],
    references:[agents],
  },
  {
    id:'esp_4',title:'Universalidade, equidade, integralidade e competências em um caso de território',
    theory:`## Princípios aplicados à mesma situação
Imagine duas comunidades com populações semelhantes. Uma tem acesso rodoviário e serviços próximos; outra depende de deslocamento fluvial e enfrenta barreiras sazonais. **Universalidade** significa que ambas integram o universo de pessoas com direito às ações de saúde. **Equidade** orienta considerar necessidades e barreiras distintas; repartir recursos em parcelas numericamente iguais nem sempre produz acesso comparável. **Integralidade** exige relacionar prevenção, cuidado e continuidade conforme as necessidades.

O exemplo não determina automaticamente quanto cada comunidade receberá. A decisão exige diagnóstico, critérios transparentes e planejamento. Equidade não é preferência pessoal do gestor, e universalidade não é sinônimo de distribuição idêntica de cada insumo a cada pessoa.

## Direção única e cooperação
O SUS possui direção em cada esfera e competências distribuídas entre União, estados e municípios. Normatização, coordenação, apoio técnico e execução articulam-se na rede. Uma ação ocorrer no município não prova que sua responsabilidade é exclusivamente municipal; financiamento e coordenação podem envolver mais de uma esfera.

No cotidiano, planejar uma rota de visita, consolidar dados e organizar referências são atividades relacionadas, mas distintas. O município conhece as necessidades locais; a articulação regional permite acessar serviços que extrapolam sua capacidade isolada. A direção única não elimina pactuação nem cooperação.

## Promoção, prevenção e proteção
Promoção da saúde trata de condições e possibilidades de vida saudável, incluindo ações intersetoriais. Prevenção busca evitar doenças ou agravos específicos e suas consequências. Proteção pode envolver medidas contra exposições e riscos. As categorias podem se articular em uma intervenção; não é necessário forçar toda atividade a caber em apenas uma caixa.

## Caso comentado
Um bairro apresenta armazenamento inseguro de água porque o abastecimento é irregular. Orientar o morador é parte da ação; dialogar com saneamento e abastecimento enfrenta uma condição que favorece o problema. Culpar exclusivamente a família oculta um determinante estrutural. O agente registra o risco observado e participa do fluxo de articulação da equipe, respeitando suas competências. A análise relaciona comportamento, infraestrutura e organização dos serviços.`,
    summary:`Universalidade inclui; equidade considera necessidades; integralidade articula cuidado. Competências são distribuídas e cooperativas. Educação e ação intersetorial podem enfrentar dimensões diferentes do mesmo risco.

| Esfera / Princípio (Lei 8.080/90) | Palavras-Chave Legais (Arts. 7º, 16, 17 e 18) | Exemplo Aplicado à Vigilância | Distinção de Prova |
| --- | --- | --- | --- |
| **Direção Nacional (Ministério da Saúde — Art. 16)** | **Formular, avaliar e apoiar** políticas nacionais; coordenar sistemas nacionais de alta complexidade e vigilâncias; normatizar em caráter geral. | Definir o Programa Nacional de Controle da Dengue e adquirir insumos estratégicos nacionais. | A União normatiza e coordena nacionalmente; só executa diretamente em caráter suplementar/excepcional. |
| **Direção Estadual (SES — Art. 17)** | **Coordenar, em caráter complementar, e executar** ações e serviços quando extrapolarem o município; apoiar técnica e financeiramente os municípios. | Apoiar os municípios rondonienses em surtos regionais e gerir laboratórios estaduais (LACEN). | O Estado articula a regionalização e suplementa os municípios. |
| **Direção Municipal (SEMUSA — Art. 18)** | **Planejar, organizar, controlar, avaliar, gerir e EXECUTAR** os serviços públicos de saúde e as ações de vigilância no território local. | Executar as visitas domiciliares dos ACEs e gerir as UBS de Porto Velho. | Verbo-chave municipal na prova: **executar** os serviços públicos locais de saúde. |
| **Princípios Doutrinários × Organizativos** | **Doutrinários**: Universalidade, Integralidade, Equidade. **Organizativos**: Descentralização, Regionalização/Hierarquização, Participação Social. | Equidade prioriza distritos ribeirinhos com maior vulnerabilidade epidemiológica. | Na letra literal do art. 7º da Lei 8.080/90, consta *"igualdade da assistência, sem preconceitos ou privilégios"*. |`,
    questions:[
      {q:'[Autoral] Garantir apoio adicional a uma comunidade com barreiras fluviais, com base em necessidades identificadas, relaciona-se a:',options:['Equidade.', 'Exclusão da universalidade.', 'Preferência pessoal sem critério.', 'Eliminação da cooperação regional.'],ans:0,comment:'Equidade considera desigualdades de necessidades e acesso. O apoio deve ter justificativa e critérios, preservando o direito universal.'},
      {q:'[Autoral] A orientação sobre recipientes acompanhada de articulação com abastecimento de água mostra:',options:['Que educação e saneamento nunca se relacionam.', 'Atuação sobre comportamentos e determinantes estruturais.', 'Que todo risco decorre apenas de desatenção individual.', 'Que o ACE substitui sozinho todos os setores da prefeitura.'],ans:1,comment:'A ação identifica níveis de determinação e demanda cooperação. Isso não atribui ao agente competência para executar sozinho todas as respostas intersetoriais.'},
      {q:'[Autoral] Na distribuição de competências prevista nos arts. 16 a 18 da Lei Federal nº 8.080/1990, a atribuição de “planejar, organizar, controlar e avaliar as ações e os serviços de saúde e gerir e executar os serviços públicos de saúde” no âmbito local pertence precipuamente:',options:['À direção municipal do Sistema Único de Saúde.', 'Exclusivamente à Organização Mundial da Saúde.', 'Ao Poder Judiciário estadual.', 'Às operadoras privadas de planos de saúde suplementar.'],ans:0,comment:'O art. 18, inciso I, da Lei 8.080/1990 estabelece como competência da direção municipal do SUS planejar, organizar, controlar e avaliar as ações e os serviços de saúde e gerir e executar os serviços públicos de saúde.'},
      {q:'[Autoral] De acordo com o art. 3º da Lei nº 8.080/1990, os níveis de saúde expressam a organização social e econômica do País, tendo a saúde como determinantes e condicionantes, entre outros:',options:['A alimentação, a moradia, o saneamento básico, o meio ambiente, o trabalho, a renda, a educação, a atividade física, o transporte, o lazer e o acesso aos bens e serviços essenciais.', 'Apenas a ausência de bactérias no sangue avaliada em exame hospitalar.', 'Exclusivamente a herança genética familiar, sem influência de saneamento ou moradia.', 'Unicamente a quantidade de medicamentos distribuídos em pronto-socorro.'],ans:0,comment:'O art. 3º da Lei 8.080/1990 adota o conceito ampliado de saúde, elencando alimentação, moradia, saneamento básico, meio ambiente, trabalho, renda, educação, atividade física, transporte, lazer e acesso aos bens e serviços essenciais como determinantes e condicionantes.'},
    ],
    flashcards:[
      ['Equidade exige dividir tudo igualmente?','Não. Exige considerar diferenças de necessidades e barreiras com critérios justificáveis.'],
      ['Ação local é sempre responsabilidade exclusiva do município?','Não. O SUS distribui competências e prevê cooperação entre esferas.'],
      ['Como diferenciar os verbos de competência da União, do Estado e do Município na Lei 8.080/1990?','União (art. 16): formular, avaliar e coordenar sistemas nacionais; Estado (art. 17): coordenar e, em caráter complementar, executar; Município (art. 18): gerir e executar os serviços públicos locais.'],
    ],
    references:[los,{title:'Ministério da Saúde — SUS',url:'https://www.gov.br/saude/pt-br/sus',section:'Universalidade, integralidade e articulação das ações.'}],
  },
  {
    id:'esp_5',title:'Territorialização, adscrição e continuidade: o papel da atenção básica',
    theory:`## Território é uma população em condições concretas
Territorializar não significa apenas desenhar um limite. Implica conhecer população, circulação, serviços, condições de moradia, barreiras de acesso e riscos. **Adscrição** vincula uma população a uma equipe para organizar responsabilidade e acompanhamento. Esse vínculo não autoriza negar acolhimento por uma interpretação mecânica do endereço.

A PNAB considera atenção básica e atenção primária à saúde equivalentes nos termos do documento. A equipe multiprofissional desenvolve ações individuais, familiares e coletivas. A atenção básica é descrita como principal porta de entrada e coordenadora do cuidado; isso não significa ser a única porta possível da rede, pois urgências e outros pontos têm funções próprias.

## Caso resolvido: visita que alimenta o planejamento
A equipe identifica concentração de recipientes sem proteção em uma área onde o abastecimento é intermitente. O registro territorial permite planejar visitas, orientação e articulação com outras ações. O mapa organiza a localização; o diálogo com moradores explica a dinâmica de armazenamento; os dados consolidados ajudam a avaliar se a resposta alcançou as áreas de maior necessidade.

Sem registro, o conhecimento fica dependente da memória individual. Sem escuta, o mapa pode mostrar pontos e ocultar os motivos do risco. Territorialização combina informação quantitativa, observação e conhecimento comunitário.

## Integração ACS–ACE
Uma ação integrada pode compartilhar planejamento, identificação de situações e educação em saúde. O ACS pode contribuir com o vínculo e o conhecimento das famílias; o ACE, com saberes de vigilância e controle de endemias. A integração respeita atribuições próprias, supervisão e fluxos de comunicação. Ela não exige duplicar cadastros nem transformar todo profissional em responsável por qualquer procedimento.

## Longitudinalidade e coordenação
Uma visita isolada pode resolver uma tarefa, mas acompanhamento longitudinal considera a relação ao longo do tempo. Coordenação conecta a informação produzida na atenção básica a outros pontos da rede. Para avaliar um encaminhamento, pergunte se a pessoa conseguiu acesso e se a equipe recebeu informação relevante sobre o seguimento. Em questões, diferencie o vínculo continuado da simples repetição de um atendimento burocrático.`,
    summary:`Territorialização reúne localização e condições de vida. Adscrição organiza responsabilidade. Atenção básica é principal, não única porta. Integração ACS–ACE compartilha planejamento e preserva atribuições.

| Conceito da PNAB (Portaria 2.436/2017) | Definição Operacional | Parâmetro / Regra Prática | Erro Comum em Provas |
| --- | --- | --- | --- |
| **Território-Processo** | Espaço vivo, dinâmico, com perfil demográfico, epidemiológico, social e ambiental em constante mudança. | Base para o planejamento local e mapeamento de áreas de risco. | Tratar território como mero mapa estático de ruas e lotes. |
| **População Adscrita por eSF** | População vinculada a uma equipe de Saúde da Família para cuidado longitudinal. | **2.000 a 3.500 pessoas** por equipe (podendo ser menor em áreas vulneráveis/rurais/ribeirinhas). | Dizer que o limite é fixo em 10.000 pessoas para qualquer realidade territorial. |
| **Microárea do ACS** | Subdivisão do território de responsabilidade de um ACS. | Máximo de **750 pessoas** por ACS. | Confundir o teto da microárea do ACS (750) com o da equipe inteira (2.000–3.500). |
| **Integração Atenção Básica + Vigilância** | Recomendação expressa da PNAB e da PNVS (Res. 588/2018): base territorial única, planejamento conjunto e troca de informações entre ACS e ACE. | Reuniões conjuntas de equipe, mapa único de vulnerabilidades e ações educativas compartilhadas. | Afirmar que a atenção básica e a vigilância em saúde devem trabalhar em territórios incomunicáveis. |`,
    questions:[
      {q:'[Autoral] Territorializar uma área exige:',options:['Somente traçar linhas no mapa.', 'Conhecer população, riscos, serviços e barreiras de acesso.', 'Proibir circulação entre bairros.', 'Dispensar escuta dos moradores.'],ans:1,comment:'O território incorpora condições de vida, dinâmica populacional e serviços. O desenho cartográfico é um instrumento, não a totalidade do diagnóstico.'},
      {q:'[Autoral] Na PNAB, ser a principal porta de entrada significa:',options:['Ser a única porta possível em qualquer situação.', 'Coordenar o cuidado em articulação com outros pontos da rede.', 'Executar todo procedimento especializado em cada UBS.', 'Eliminar o papel das urgências.'],ans:1,comment:'A coordenação organiza o cuidado na rede. Principal não equivale a única; especialidades e urgências permanecem com funções próprias.'},
      {q:'[Autoral] Segundo a Política Nacional de Atenção Básica (Portaria nº 2.436/2017) e a Política Nacional de Vigilância em Saúde (Resolução CNS nº 588/2018), a integração entre as equipes de Atenção Básica e os Agentes de Combate às Endemias pressupõe:',options:['A adoção de base territorial comum, o planejamento conjunto das ações de campo, o compartilhamento de dados epidemiológicos/entomológicos e a atuação articulada junto à comunidade.', 'A extinção das visitas domiciliares de controle vetorial e o fechamento dos laboratórios de entomologia.', 'A proibição de o ACE participar de reuniões da Unidade Básica de Saúde.', 'A fusão obrigatória do cargo de ACE com o cargo de médico da família.'],ans:0,comment:'Tanto a PNAB quanto a PNVS determinam a integração entre Atenção Primária e Vigilância em Saúde por meio da compatibilização dos territórios de atuação, planejamento integrado, educação permanente conjunta e compartilhamento de informações.'},
      {q:'[Autoral] Na organização territorial prevista na PNAB (Portaria nº 2.436/2017), o parâmetro populacional de referência para cada Equipe de Saúde da Família (eSF) e o número máximo de pessoas por Agente Comunitário de Saúde (ACS) são, respectivamente:',options:['De 2.000 a 3.500 pessoas por eSF (considerando vulnerabilidades locais) e no máximo 750 pessoas por ACS.', 'Exatamente 15.000 pessoas por eSF e 5.000 pessoas por ACS.', 'De 100 a 200 pessoas por eSF e 50 pessoas por ACS.', 'Não existe qualquer parâmetro populacional na PNAB.'],ans:0,comment:'A PNAB 2017 preconiza população adscrita de 2.000 a 3.500 pessoas por equipe de Saúde da Família (podendo variar segundo vulnerabilidade e dispersão territorial, como em áreas ribeirinhas) e o limite máximo de 750 pessoas por ACS.'},
    ],
    flashcards:[
      ['Adscrição se resume a endereço?', 'Não. Organiza vínculo e responsabilidade sanitária sobre uma população.'],
      ['Visitas repetidas garantem longitudinalidade?', 'Não por si. É preciso continuidade de relação, informação e acompanhamento.'],
      ['Quais são os parâmetros populacionais da PNAB 2017 para eSF e para cada ACS?', '2.000 a 3.500 pessoas por equipe de Saúde da Família (eSF) e até 750 pessoas por ACS.'],
    ],
    references:[pnab],
  },
  {
    id:'esp_6',title:'História do ACE por mudanças de modelo, não só por datas',
    theory:`## Duas perguntas para cada marco
Uma linha do tempo ganha sentido quando mostra o problema enfrentado e a mudança institucional. Campanhas de controle de doenças, consolidação de órgãos federais, descentralização e regulamentação profissional representam dimensões diferentes. A criação de uma instituição não equivale automaticamente ao surgimento de uma carreira municipal com o mesmo nome.

## Campanhas e território
Modelos campanhistas organizaram ações dirigidas a doenças e vetores específicos. Sua lógica privilegiava intervenções focalizadas e estruturas de comando próprias. Na experiência amazônica, condições ambientais, deslocamentos e circulação de pessoas influenciaram a organização do trabalho. Ao estudar o período, relacione o problema sanitário às condições de execução, sem reduzir a história a uma narrativa de progresso inevitável.

## Do órgão central à articulação do SUS
SUCAM e FUNASA são marcos institucionais importantes no controle de endemias. A trajetória da profissão, porém, inclui também mudanças de vínculo, luta por reconhecimento e organização municipal. A descentralização exige que a execução territorial dialogue com normas, apoio técnico, informação e financiamento de outras esferas. Não é simples desaparecimento do papel federal.

## Marcos jurídicos com objetos distintos
A Emenda Constitucional 51/2006 e a Lei 11.350/2006 integram o marco de disciplina das atividades e admissão. Alterações posteriores detalharam atribuições e outros aspectos do trabalho. A Lei 14.536/2023 reconhece ACS e ACE como profissionais de saúde para a finalidade constitucional expressamente indicada no art. 2º-A; não é correto deduzir autorização para toda atividade clínica a partir desse reconhecimento.

## Caso de análise histórica
Uma alternativa diz: “a criação do SUS tornou desnecessário o controle de vetores”. Ela falha porque confunde mudança de organização com abandono da finalidade sanitária. Outra diz: “a municipalização eliminou toda coordenação nacional”. Também erra ao apagar cooperação e definição de diretrizes.

Para revisar, monte três colunas: instituição ou norma; problema/objeto; consequência para o trabalho. Essa estrutura evita confundir datas de criação de órgãos, regras de ingresso, remuneração e expansão de atribuições, que não ocorreram todas no mesmo momento.

## Síntese cronológica: dos mata-mosquitos e guardas da SUCAM ao ACE constitucional
Na história sanitária brasileira e amazônica, a evolução institucional percorreu etapas bem definidas:
1. **1903–1910 (Campanhas de Oswaldo Cruz e expedições à Amazônia):** brigadas de profilaxia da febre amarela ("mata-mosquitos") no Rio de Janeiro e atuação de Oswaldo Cruz e Carlos Chagas na Amazônia e na ferrovia Madeira-Mamoré contra a malária.
2. **1942 (SESP) e 1956 (DNERu):** criação do Serviço Especial de Saúde Pública (foco nas bacias amazônica e do Vale do Rio Doce) e do Departamento Nacional de Endemias Rurais (unificando serviços nacionais de febre amarela, malária e peste).
3. **1970 (SUCAM — Superintendência de Campanhas de Saúde Pública):** fusão do DNERu, da CEM (Campanha de Erradicação da Malária) e da CEV (Varíola), consolidando a figura histórica do "guarda de endemias / guarda da SUCAM" em modelo vertical e campanhista.
4. **1990–1991 (Lei 8.080/90 e criação da FUNASA em 1991):** fusão da SUCAM com a Fundação SESP originando a Fundação Nacional de Saúde (FUNASA).
5. **1999 (Portaria Ministerial nº 1.399/1999) e 2003 (Criação da SVS/MS):** descentralização e certificação dos estados e municípios para a gestão das ações de epidemiologia e controle de doenças (passando da execução federal vertical para a execução municipal descentralizada).
6. **2006 a 2024 (Constitucionalização e valorização da carreira):** EC 51/2006 e Lei 11.350/2006 (processo seletivo público e vínculo direto); EC 63/2010 e Lei 12.994/2014 (piso e carreira); Lei 13.595/2018 (Lei Ruth Brilhante — atribuições detalhadas e 30h campo + 10h internas); Lei 13.708/2018 (escalonamento do piso); EC 120/2022 (piso de 2 salários mínimos, insalubridade e aposentadoria especial); Lei 14.536/2023 (reconhecimento como profissionais de saúde regulamentados).`,
    summary:`Relacione marcos a mudanças de modelo, vínculo e atribuições. Instituição e carreira não são sinônimos. Descentralizar não elimina coordenação. Reconhecimento profissional não autoriza qualquer procedimento clínico.

| Ano / Marco Histórico-Legal | Órgão ou Instrumento Jurídico | Transformação Institucional / Profissional |
| --- | --- | --- |
| **1903–1910** | Diretoria Geral de Saúde Pública (Oswaldo Cruz) | Brigadas contra a febre amarela ("mata-mosquitos") e missão sanitária na Estrada de Ferro Madeira-Mamoré (malária). |
| **1942 / 1956** | **SESP** (1942) e **DNERu** (1956) | Atuação sanitária na Amazônia (SESP) e centralização das campanhas contra endemias rurais (DNERu). |
| **1970** | **SUCAM** (Superintendência de Campanhas de Saúde Pública) | Fusão de DNERu + CEM + CEV; modelo campanhista verticalizado no interior e na Amazônia. |
| **1991 / 1999** | **FUNASA** (1991) e **Portaria GM/MS 1.399/1999** | Fusão SUCAM + FSESP (1991) e descentralização das ações de vigilância e controle de endemias para estados e municípios (1999). |
| **2006** | **EC nº 51/2006** e **Lei nº 11.350/2006** | Criação formal das categorias de ACS e ACE, exigência de processo seletivo público e vedação da terceirização (salvo surto). |
| **2010 / 2014 / 2018** | **EC 63/10**, **Lei 12.994/14**, **Leis 13.595/18 e 13.708/18** | Instituição do piso nacional, jornada de 40h (30h campo + 10h planejamento) e detalhamento das atribuições típicas, assistidas e compartilhadas. |
| **2022 / 2023 / 2024** | **EC 120/2022**, **Lei 14.536/2023** e **Lei 14.799/2024** | Piso constitucional de **2 salários mínimos**, insalubridade, aposentadoria especial, status de **profissional de saúde** (acumulação de cargos) e denominação "Lei Ruth Brilhante". |`,
    questions:[
      {q:'[Autoral] Qual interpretação histórica é mais adequada?',options:['Municipalização eliminou toda coordenação federal.', 'Mudanças institucionais alteram a organização do trabalho sem tornar o controle de endemias desnecessário.', 'A criação de um órgão equivale sempre à criação de toda carreira municipal.', 'Reconhecimento profissional elimina limites legais de atuação.'],ans:1,comment:'A finalidade de controle e vigilância persiste em diferentes arranjos. As demais opções confundem instituições, competências e limites profissionais.'},
      {q:'[Autoral] Para estudar uma lei modificadora na linha do tempo, é necessário identificar:',options:['Somente seu número.', 'O dispositivo e o objeto alterados, além da data.', 'A remuneração de todos os servidores do país.', 'Uma mudança automática em todas as profissões de saúde.'],ans:1,comment:'A análise histórica exige entender o efeito da norma. O número e a data, isolados, não explicam qual aspecto do trabalho mudou.'},
      {q:'[Autoral] Na evolução institucional do controle de endemias no Brasil, a criação da FUNASA (Fundação Nacional de Saúde) no início da década de 1990 e a edição da Portaria Ministerial nº 1.399/1999 representaram, respectivamente:',options:['A fusão da antiga SUCAM com a Fundação SESP e a regulamentação da descentralização das ações de epidemiologia e controle de doenças para estados e municípios.', 'A extinção definitiva do Sistema Único de Saúde e o retorno às brigadas imperiais do século XIX.', 'A proibição de os municípios contratarem Agentes de Combate às Endemias.', 'A privatização integral da vigilância epidemiológica brasileira.'],ans:0,comment:'Em 1991, a FUNASA resultou da fusão da SUCAM com a Fundação SESP; em 1999, a Portaria GM/MS nº 1.399 estruturou a descentralização e o financiamento das ações de epidemiologia e controle de doenças junto a estados e municípios.'},
      {q:'[Autoral] Qual marco constitucional estabeleceu que a admissão de Agentes Comunitários de Saúde e de Agentes de Combate às Endemias pelos gestores locais do SUS deve ser precedida de processo seletivo público de provas ou de provas e títulos?',options:['A Emenda Constitucional nº 51, de 14 de fevereiro de 2006 (que acrescentou os §§ 4º, 5º e 6º ao art. 198 da CF/88), regulamentada pela Lei nº 11.350/2006.', 'O Decreto Imperial de 1850 sobre portos marítimos.', 'A criação do DNERu em 1956.', 'A Portaria de consolidação de tarifas bancárias de 1994.'],ans:0,comment:'A Emenda Constitucional nº 51/2006 inseriu o § 4º no art. 198 da CF/88 exigindo processo seletivo público de provas ou de provas e títulos para a admissão de ACS e ACE, sendo regulamentada no mesmo ano pela Lei nº 11.350/2006.'},
    ],
    flashcards:[
      ['Descentralização equivale a ausência de coordenação?', 'Não. Execução territorial pode coexistir com diretrizes, financiamento e cooperação entre esferas.'],
      ['Como organizar uma linha do tempo útil?', 'Marco; problema/objeto; consequência para o trabalho.'],
      ['Quais órgãos se fundiram em 1970 para formar a SUCAM e em 1991 para formar a FUNASA?', 'Em 1970: DNERu + CEM + CEV formaram a SUCAM. Em 1991: SUCAM + Fundação SESP formaram a FUNASA.'],
    ],
    references:[{title:'Fiocruz — arquivo histórico da SUCAM',url:'https://basearch.coc.fiocruz.br/index.php/superintendencia-de-campanhas-de-saude-publica-sucam',section:'História institucional e vinculação com a FUNASA.'},agents],
  },
  {
    id:'esp_7',title:'Visita técnica, indicadores entomológicos e segurança do trabalho',
    theory:`## A visita como sequência de decisões
Uma visita exige preparação, identificação, comunicação com o responsável, observação, intervenção autorizada e registro. O objetivo não se resume a localizar um recipiente: é compreender o risco e orientar uma resposta possível. Descrever a condição observada ajuda a equipe a verificar depois o que mudou.

O manejo integrado combina medidas adequadas ao contexto. Proteção ou eliminação de depósitos, organização ambiental, mobilização comunitária e controle conforme protocolo não são etapas substituídas automaticamente por aplicação de produto. O uso de insumos depende de indicação técnica, formulação, equipamento, capacitação e proteção. Não se deve improvisar concentração nem transferir uma dose entre produtos diferentes.

## Dois índices com denominadores distintos
Em um exemplo de 200 imóveis inspecionados, 18 apresentam depósitos positivos e foram encontrados 27 depósitos positivos no total. O **índice de infestação predial**, no recorte do exercício, é 18/200 × 100 = 9%. O **índice de Breteau** é 27/200 × 100 = 13,5 depósitos positivos por 100 imóveis. O primeiro conta imóveis positivos; o segundo, depósitos positivos. Um imóvel pode ter mais de um depósito positivo.

Não chame automaticamente o índice de Breteau de “percentual de imóveis”. Também não conclua que um levantamento isolado mede diretamente a quantidade de pessoas doentes. Entomologia e epidemiologia produzem informações relacionadas, mas distintas.

## Registro e acompanhamento
“Imóvel fechado” e “imóvel inspecionado sem depósito positivo” não são o mesmo resultado. Fechado significa que a observação prevista não foi realizada; registrá-lo como negativo criaria uma informação falsa. O planejamento do retorno precisa considerar essa diferença.

## Segurança em campo
O risco depende da tarefa, do ambiente, dos produtos e dos equipamentos. EPI é uma barreira dentro de um conjunto de medidas, e não autorização para qualquer exposição. Diante de acidente ou suspeita de intoxicação, siga o fluxo de assistência e comunicação; exemplos didáticos não devem ser usados para escolher antídotos ou realizar procedimentos sem habilitação. Uma boa resposta de prova combina prevenção, registro e encaminhamento.`,
    summary:`Imóvel fechado não é negativo. IIP conta imóveis positivos; Breteau conta depósitos positivos por 100 imóveis. Controle segue protocolo e formulação; EPI não elimina todos os riscos.

| Indicador / Modalidade Operacional | Fórmula ou Periodicidade Técnica | Classificação de Risco / Alvo Operacional | Detalhe Crucial de Campo |
| --- | --- | --- | --- |
| **Índice de Infestação Predial (IIP — LIRAa/LIA)** | $(\text{Imóveis positivos} \div \text{Imóveis pesquisados}) \times 100$ | **< 1,0%**: Satisfatório; **1,0% a 3,9%**: Alerta; **$\ge$ 4,0%**: Risco de surto. | Considera no denominador apenas imóveis efetivamente **inspecionados** (exclui fechados/recusados). |
| **Índice de Breteau (IB)** | $(\text{Recipientes positivos} \div \text{Imóveis pesquisados}) \times 100$ | Mede a densidade de depósitos positivos por 100 imóveis pesquisados. | Como um imóvel positivo pode ter 2 ou mais focos, tem-se sempre $\text{IB} \ge \text{IIP}$. |
| **Grupos de Depósitos (A1, A2, B, C, D1, D2, E)** | **A1**: caixa elevada; **A2**: nível do solo; **B**: móveis (vasos/bebedouros); **C**: fixos (calhas/lajes); **D1**: pneus; **D2**: lixo/sucata; **E**: naturais (bromélias/ocos). | Permite direcionar a estratégia (ex.: se predomina A2, reforçar vedação e abastecimento; se D1/D2, mutirão e ecopontos). | Identificar o grupo predominante evita aplicar a ação errada no território. |
| **Ponto Estratégico (PE) × Armadilhas** | **PE**: visita quinzenal (a cada **15 dias**) com pesquisa larvária e tratamento focal/residual. **Ovitrampa/Larvitrampa**: semanal (**7 dias**). | PE: cemitérios, borracharias, ferros-velhos, depósitos de sucata/recicláveis. | Nos PEs não se aguarda o ciclo bimestral regular da visita domiciliar. |
| **Controle Mecânico, Biológico e Químico** | **Mecânico**: eliminar/vedar; **Biológico**: *Bti*; **Químico**: larvicida (focal) ou adulticida (perifocal/espacial UBV). | O controle **mecânico e manejo ambiental** são prioritários e permanentes; o UBV ("fumacê") só atinge alados em voo para bloqueio de transmissão. | O UBV não tem efeito residual nem mata ovos/larvas dentro da água. |`,
    questions:[
      {q:'[Autoral] Em 200 imóveis inspecionados, 18 positivos e 27 depósitos positivos, quais são IIP e Breteau?',options:['9% e 13,5 por 100 imóveis.', '13,5% e 9 por 100 imóveis.', '18% e 27 por 100 imóveis.', '9% e 27% de pessoas doentes.'],ans:0,comment:'IIP=18/200×100=9%. Breteau=27/200×100=13,5 depósitos positivos por 100 imóveis. Os dados não calculam pessoas doentes.'},
      {q:'[Autoral] Um imóvel estava fechado e não foi inspecionado. Qual registro é correto?',options:['Negativo para depósitos, mesmo sem inspeção.', 'Inspecionado e positivo por presunção.', 'Fechado/não inspecionado, conforme o fluxo de registro.', 'Excluir o imóvel de toda informação de campo.'],ans:2,comment:'Ausência de observação não equivale a resultado negativo. Registrar a condição real permite planejar retorno e avaliar cobertura.'},
      {q:'[Autoral] De acordo com as Diretrizes Nacionais para a Prevenção e Controle de Epidemias de Dengue (MS), um município que apresenta Índice de Infestação Predial (IIP) igual a 2,5% no LIRAa encontra-se na faixa classificada como:',options:['Estado de Alerta (entre 1,0% e 3,9%), exigindo intensificação das ações de controle mecânico, focal e mobilização antes que atinja a faixa de risco de surto (igual ou superior a 4,0%).', 'Satisfatório, pois qualquer índice abaixo de 10% dispensa ações de vigilância.', 'Extinção completa do vetor na área urbana.', 'Incompatível com o cálculo matemático, pois o IIP só admite números acima de 50%.'],ans:0,comment:'A classificação oficial do Ministério da Saúde para o IIP no LIRAa define: inferior a 1% = satisfatório; de 1% a 3,9% = alerta; igual ou superior a 4% = risco de surto.'},
      {q:'[Autoral] Na classificação padronizada de criadouros das Diretrizes Nacionais de Controle da Dengue, os pneus e materiais rodantes (Grupo D1), as calhas e lajes (Grupo C) e os locais com grande concentração desses materiais, como borracharias, cemitérios e ferros-velhos, recebem tratamento operacional específico. Nesses locais cadastrados como Pontos Estratégicos (PE), a periodicidade padrão de inspeção pelo ACE é:',options:['Quinzenal (a cada 15 dias), em razão do elevado potencial de produção e dispersão de vetores.', 'Anual, realizada apenas no mês de dezembro.', 'Decenal, coincidindo com o censo demográfico do IBGE.', 'Facultativa, ocorrendo somente mediante ordem judicial.'],ans:0,comment:'Enquanto a visita domiciliar de rotina ocorre em ciclos bimestrais (a cada 2 meses), os Pontos Estratégicos (PE) são inspecionados quinzenalmente (a cada 15 dias), e as armadilhas (ovitrampas/larvitrampas) são vistoriadas semanalmente.'},
    ],
    flashcards:[
      ['Por que IIP e Breteau podem ser diferentes?', 'Um imóvel positivo pode conter mais de um depósito positivo (por isso o Índice de Breteau é maior ou igual ao IIP).'],
      ['Fechado significa negativo?', 'Não. Significa que a inspeção prevista não foi realizada e requer estratégias de recuperação de pendência.'],
      ['Quais são as três faixas de risco do IIP no LIRAa?', 'Menor que 1%: Satisfatório; de 1% a 3,9%: Alerta; igual ou maior que 4%: Risco de surto.'],
    ],
    references:[agents,{title:'Ministério da Saúde — Aedes aegypti',url:'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/a/aedes-aegypti',section:'Vigilância entomológica e controle integrado; cálculos do complemento são exemplos autorais.'}],
  },
  {
    id:'esp_8',title:'Incidência, prevalência, letalidade e ciclo da informação',
    theory:`## O indicador depende da pergunta
Incidência examina ocorrência de casos novos em população sob risco durante um período. Prevalência considera pessoas com a condição em um ponto ou intervalo definido, segundo a medida utilizada. Letalidade relaciona óbitos pela doença aos casos dessa doença; mortalidade relaciona óbitos à população. Trocar o denominador altera a pergunta respondida.

## Cálculo comentado
Em um grupo hipotético de 2.000 pessoas inicialmente sob risco, ocorreram 40 casos novos em um mês. A incidência acumulada simplificada do exercício é 40/2.000 = 2%, ou 20 por 1.000 no período. Se 2 desses 40 casos evoluíram para óbito pela doença, a letalidade é 2/40 = 5%. A mortalidade nesse grupo, considerando esses óbitos e o mesmo recorte, é 2/2.000 = 0,1%, ou 1 por 1.000. Os resultados não são intercambiáveis.

Uma prevalência maior pode decorrer de mais casos novos, maior duração da condição ou melhor detecção, entre outros fatores. Portanto, a contagem isolada não revela automaticamente piora do risco de adoecer.

## Da suspeita à decisão
O ciclo da vigilância envolve coletar, qualificar, analisar, interpretar e devolver informação para orientar ações. Uma ficha preenchida e nunca analisada não completa esse processo. Data de início de sintomas e data de notificação respondem a perguntas diferentes: uma ajuda a reconstruir o tempo da ocorrência; a outra, o fluxo da informação.

Notificação pode ser indicada para suspeitas, conforme a definição e a norma aplicável; não se deve exigir confirmação laboratorial como condição universal. Prazos e listas são atualizados, portanto exigem consulta ao instrumento normativo pertinente e ao fluxo local.

## Comparações seguras
Dois bairros com números absolutos iguais podem ter taxas diferentes se suas populações forem distintas. Antes de comparar, confira período, definição de caso, população, fonte e completude. Aumento de notificações pode refletir maior transmissão, mas também busca ativa ou melhora de registro. A hipótese precisa de investigação, não de conclusão automática.`,
    summary:`Casos novos: incidência. Casos existentes: prevalência. Óbitos/casos: letalidade. Óbitos/população: mortalidade. Compare períodos e definições. Notificação e confirmação não são sinônimos.

| Conceito Epidemiológico | Numerador ÷ Denominador (ou Definição) | O que Mede na Prática? | Contraste Importante |
| --- | --- | --- | --- |
| **Incidência** | $\text{Casos NOVOS no período} \div \text{População exposta ao risco}$ | Velocidade/risco de **adoecer** (surgir caso novo). | Essencial para doenças agudas e investigação de surtos. |
| **Prevalência** | $\text{Casos EXISTENTES (novos + antigos)} \div \text{População total}$ | Carga total da doença na comunidade em dado momento. | Aumenta com a incidência e com a maior duração da doença; diminui com cura ou óbito. |
| **Mortalidade Específica** | $\text{Óbitos pela doença X} \div \text{População total}$ | Risco de uma pessoa da população morrer por aquela causa. | Denominador é a **população inteira**, não apenas os doentes. |
| **Letalidade** | $\text{Óbitos pela doença X} \div \text{Total de DOENTES de X} \times 100$ | **Gravidade** da doença entre os acometidos (ex.: Raiva humana $\approx 100\%$). | Denominador restrito aos **casos diagnosticados** da doença. |
| **Endemia × Epidemia × Surto × Pandemia** | **Endemia**: dentro da faixa esperada local; **Epidemia**: acima do limite esperado; **Surto**: casos epidemiologicamente ligados em espaço restrito; **Pandemia**: vários países/continentes. | Orienta o nível de resposta e mobilização das equipes de vigilância. | Na Região Amazônica, a malária é **endêmica** (enquanto na Região extra-amazônica um foco autóctone exige alerta imediato). |`,
    questions:[
      {q:'[Autoral] Quarenta casos e dois óbitos pela doença correspondem a qual letalidade?',options:['0,1%','2%','5%','20%'],ans:2,comment:'Letalidade=2/40×100=5%. Usar a população geral como denominador produziria uma medida de mortalidade, não de letalidade.'},
      {q:'[Autoral] Um aumento de notificações demonstra necessariamente aumento real da transmissão?',options:['Sim, sem necessidade de análise.', 'Não; também pode refletir melhora de detecção e registro.', 'Sim, porque definição de caso nunca muda.', 'Não, porque notificações jamais se relacionam a transmissão.'],ans:1,comment:'Aumento de notificações requer investigar explicações concorrentes. Ele pode sinalizar transmissão, mas a conclusão exige avaliar definição, cobertura, busca ativa e período.'},
      {q:'[Autoral] Quando uma doença infecciosa ocorre de forma constante e habitual dentro dos limites esperados para uma determinada área geográfica ao longo dos anos (como a malária na bacia amazônica), esse padrão epidemiológico denomina-se:',options:['Endemia.', 'Pandemia intercontinental.', 'Erradicação global.', 'Letalidade nula.'],ans:0,comment:'Endemia é a presença habitual de uma doença ou agente infeccioso dentro de uma área geográfica determinada, mantendo incidência dentro da faixa esperada na série histórica local.'},
      {q:'[Autoral] No Sistema de Informação de Agravos de Notificação (SINAN), a notificação compulsória de agravos de relevância para a saúde pública é desencadeada, em regra:',options:['Diante da simples suspeita clínica ou epidemiológica do caso, não sendo necessário aguardar o resultado definitivo de exame laboratorial para iniciar a notificação e as medidas de bloqueio.', 'Apenas após o trânsito em julgado de sentença judicial confirmando a doença.', 'Somente depois da alta hospitalar ou do óbito do paciente.', 'Exclusivamente por médicos legistas do Instituto Médico Legal.'],ans:0,comment:'Para garantir oportunidade na interrupção da cadeia de transmissão (bloqueio vetorial, investigação de contatos, profilaxia), a notificação compulsória é realizada já diante da suspeita do agravo.'},
    ],
    flashcards:[
      ['Qual denominador distingue letalidade de mortalidade?', 'Letalidade usa os casos da doença como denominador; mortalidade usa a população total.'],
      ['Uma ficha preenchida completa o ciclo da vigilância?', 'Não. A informação precisa ser qualificada, analisada e usada na decisão ("informação para a ação").'],
      ['Qual a diferença entre endemia, epidemia e surto?', 'Endemia = ocorrência habitual dentro do esperado; Epidemia = elevação clara acima do esperado; Surto = casos com vínculo epidemiológico restritos a local/instituição/quarteirão delimitado.'],
    ],
    references:[pnvs,{title:'Ministério da Saúde — Guia de Vigilância em Saúde',url:'https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/svsa/vigilancia/guia-de-vigilancia-em-saude-volume-2-6a-edicao/view',section:'Vigilância e investigação: definições de caso e análise por tempo, lugar e pessoa; cálculos autorais.'}],
  },
  {
    id:'esp_9',title:'Matriz de transmissão e casos diferenciais das doenças do programa',
    theory:`## Estude o mecanismo antes de decorar o nome
Para cada doença, relacione agente, via, exposição e medida de controle. Ter febre não identifica sozinho a causa. Um relato de exposição orienta a investigação, mas não substitui avaliação e critérios de diagnóstico.

| Doença | Agente ou grupo | Mecanismo essencial para distinguir |
| --- | --- | --- |
| Dengue | Vírus dengue | Transmissão vetorial por Aedes infectado; queda da febre não garante recuperação sem risco. |
| Chikungunya | Vírus chikungunya | Transmissão por Aedes; dor articular pode ser importante e persistente. |
| Zika | Vírus Zika | Via vetorial e outras vias reconhecidas, inclusive sexual e vertical; atenção à gestação. |
| Febre amarela | Vírus da febre amarela | Ciclo silvestre brasileiro envolve Haemagogus e Sabethes; primatas não humanos são sentinelas, não alvos de eliminação. |
| Malária | Plasmodium | Transmissão usual pela fêmea infectada de Anopheles; exposição e diagnóstico oportuno importam. |
| Chagas | Trypanosoma cruzi | Via vetorial clássica envolve material fecal do triatomíneo; também há transmissão oral e outras vias. |
| Leishmaniose tegumentar | Leishmania | Picada de flebotomíneo infectado; acometimento cutâneo e/ou mucoso. |
| Leishmaniose visceral | Leishmania | Transmissão por flebotomíneo; doença sistêmica, com cão como reservatório importante no contexto urbano brasileiro. |
| Esquistossomose | Schistosoma mansoni | Cercárias em água doce penetram a pele; caramujo Biomphalaria participa do ciclo. |
| Raiva | Vírus do gênero Lyssavirus | Saliva de mamífero infectado em exposições relevantes, como mordedura; avaliação imediata da exposição. |
| Leptospirose | Leptospira | Contato com ambiente contaminado por urina de animais infectados; enchentes ampliam exposições. |
| Febre maculosa | Rickettsia | Transmissão por carrapatos infectados; história de exposição deve ser valorizada. |
| Influenza | Vírus influenza | Transmissão respiratória; medidas de prevenção e vigilância de síndromes respiratórias. |
| COVID-19 | SARS-CoV-2 | Transmissão respiratória, com relevância da ventilação e proteção conforme o contexto. |

## Caso 1: sem confundir vetor e agente
Um exercício descreve água doce, caramujo e penetração de larvas pela pele. A combinação aponta para o mecanismo da esquistossomose, não para ingestão obrigatória do caramujo. Outro descreve contaminação por fezes de triatomíneo: não se deve responder que o parasito é inoculado pela saliva do barbeiro como se fosse o mesmo mecanismo de uma picada de mosquito.

## Caso 2: sintomas e gravidade
Febre após exposição pode ter diversas causas. Dor abdominal intensa, sangramento ou deterioração do estado geral exigem encaminhamento oportuno conforme o fluxo assistencial. A função educativa do ACE é reconhecer situações de atenção e facilitar acesso; não escolher medicamentos a partir desta tabela.

## Controle coerente com a cadeia
Saneamento, controle de vetores, proteção individual, vacinação quando indicada e vigilância de exposições têm alvos diferentes. Eliminar um mosquito não previne toda doença da tabela. Compare cada medida com a via efetiva e com o protocolo específico.`,
    summary:`Agente não é vetor; reservatório não é via. Esquistossomose: cercária/pele. Chagas vetorial: material fecal. Arboviroses e doenças respiratórias não compartilham todas as medidas de prevenção. Sintomas orientam suspeita, não diagnóstico isolado.

| Recorte Diferencial de Prova | Ponto-Chave Clínico / Epidemiológico | Pegadinha Clássica de Banca |
| --- | --- | --- |
| **Dengue × Chikungunya × Zika** | **Dengue**: risco de choque/extravasamento plasmático na defervescência (3º ao 7º dia); **Chikungunya**: poliartralgia intensa/incapacitante (fases aguda, pós-aguda e crônica); **Zika**: exantema precoce, conjuntivite não purulenta, transmissão vertical/sexual (síndrome congênita). | Achar que quando a febre da dengue baixa o perigo acabou (é justamente o período crítico para **sinais de alarme**). |
| **Febre Amarela (Silvestre × Urbana)** | No Brasil não há transmissão urbana desde **1942**; nos casos silvestres, os vetores são *Haemagogus* e *Sabethes*, e os macacos (**PNH**) adoecem e funcionam como **sentinelas** de epizootia. | Afirmar que os macacos transmitem diretamente o vírus ao ser humano sem mosquito. |
| **Malária na Amazônia (Porto Velho)** | Agentes: *Plasmodium vivax* (mais frequente no Brasil/RO, com **hipnozoítos** hepáticos causadores de recaídas) e *P. falciparum* (formas graves). Vetor: fêmea de *Anopheles darlingi* (criadouros naturais limpos e sombreados). | Confundir o criadouro do *Anopheles* (coleções hídricas naturais/represas/igarapés) com o do *Aedes* (recipientes artificiais domésticos). |
| **Doença de Chagas na Amazônia** | Principal forma de transmissão atual na Região Norte é a **transmissão oral** (ingestão de alimentos como açaí/bacaba contaminados com *T. cruzi* de triatomíneos triturados ou suas fezes). | Dizer que a transmissão oral de Chagas não existe ou que a única via possível é a picada salivar. |`,
    questions:[
      {q:'[Autoral] Qual associação está correta?',options:['Chagas: inoculação obrigatória do parasito pela saliva do barbeiro.', 'Esquistossomose: cercárias podem penetrar a pele em água doce contaminada.', 'Malária: causada pelo mosquito como agente etiológico.', 'Leptospirose: causada por vírus influenza.'],ans:1,comment:'A cercária é a forma infectante para humanos na esquistossomose. Chagas vetorial envolve material fecal; malária é causada por Plasmodium; leptospirose por bactéria Leptospira.'},
      {q:'[Autoral] Por que uma única medida de controle não serve para todas as doenças da tabela?',options:['Porque todas têm o mesmo vetor.', 'Porque os agentes, vias e exposições são diferentes.', 'Porque nenhuma admite prevenção.', 'Porque o diagnóstico depende apenas da febre.'],ans:1,comment:'Medidas precisam atingir elementos da cadeia de transmissão. Controle de mosquito, saneamento, ventilação e avaliação de exposições não são intervenções intercambiáveis.'},
      {q:'[Autoral] No contexto epidemiológico da Região Amazônica (incluindo Porto Velho/RO), qual espécie de protozoário responde pela maioria dos casos autóctones de malária e caracteriza-se por formar formas latentes no fígado (hipnozoítos) capazes de provocar recaídas se o tratamento não incluir medicamento tecido-esquizonticida?',options:['Plasmodium vivax.', 'Schistosoma mansoni.', 'Rickettsia rickettsii.', 'Leptospira interrogans.'],ans:0,comment:'O Plasmodium vivax é a espécie predominante na Amazônia brasileira e forma hipnozoítos hepáticos responsáveis por recaídas tardias. O P. falciparum associa-se a maior gravidade aguda, mas não forma hipnozoítos.'},
      {q:'[Autoral] Na evolução clínica da dengue, o período de defervescência (queda da febre, geralmente entre o 3º e o 7º dia de doença) requer máxima atenção e orientação ao paciente porque:',options:['Marca o momento em que podem surgir os sinais de alarme (como dor abdominal intensa e contínua, vômitos persistentes, hipotensão postural e sangramento de mucosas) decorrentes do aumento da permeabilidade vascular.', 'Indica cura definitiva imediata sem qualquer possibilidade de complicação.', 'Significa que a doença transformou-se em raiva humana.', 'Permite suspender toda hidratação oral do paciente.'],ans:0,comment:'Na dengue, o desaparecimento da febre (defervescência) pode coincidir com o início da fase crítica de extravasamento plasmático; por isso, o ACE e a equipe de saúde devem orientar o reconhecimento imediato dos sinais de alarme.'},
    ],
    flashcards:[
      ['Por que não eliminar primatas não humanos em uma investigação de febre amarela?', 'São sentinelas epidemiológicas importantes (epizootias alertam a circulação viral); eles não transmitem o vírus diretamente e matá-los é crime ambiental.'],
      ['Qual é o mecanismo vetorial clássico de Chagas e qual via predomina hoje na Amazônia?', 'O mecanismo vetorial clássico ocorre pelas fezes do triatomíneo depositadas após o repasto; na Amazônia, predomina hoje a transmissão oral por alimentos contaminados (como açaí/bacaba sem pasteurização/branqueamento).'],
      ['Qual a diferença entre os vetores da Febre Amarela silvestre, da Malária e das Leishmanioses?', 'Febre Amarela silvestre: Haemagogus e Sabethes; Malária: Anopheles (prego/carapanã); Leishmanioses: Lutzomyia (flebotomíneo/mosquito-palha).'],
    ],
    references:[
      {title:'Ministério da Saúde — arboviroses',url:'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/a/arboviroses/arboviroses',section:'Doenças e ciclo silvestre da febre amarela.'},
      {title:'Ministério da Saúde — esquistossomose',url:'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/e/esquistossomose',section:'Ciclo e transmissão.'},
      {title:'Ministério da Saúde — doença de Chagas',url:'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/doenca-de-chagas/doenca-de-chagas',section:'Formas de transmissão.'},
      {title:'Ministério da Saúde — malária',url:'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/m/malaria',section:'Agente, transmissão e diagnóstico.'},
      {title:'Ministério da Saúde — leishmaniose visceral',url:'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/l/leishmaniose-visceral',section:'Doença sistêmica, vetor e reservatórios.'},
      {title:'Ministério da Saúde — raiva',url:'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/r/raiva/raiva',section:'Agente e exposição.'},
      {title:'Ministério da Saúde — leptospirose',url:'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/l/leptospirose/leptospirose/',section:'Transmissão e situações de risco.'},
      {title:'Ministério da Saúde — Guia de Vigilância em Saúde',url:'https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/svsa/vigilancia/vigilancia',section:'Volumes 1 a 3: capítulos de doenças respiratórias, arboviroses, protozooses e zoonoses.'},
    ],
  },
  {
    id:'esp_10',title:'Cadeia epidemiológica, períodos e pontos de interrupção',
    theory:`## Elementos diferentes da mesma cadeia
O agente etiológico é o causador da doença. Reservatório é o ambiente ou ser em que o agente se mantém nas condições relevantes de sua ecologia. Hospedeiro abriga o agente em alguma etapa; vetor participa da transmissão. Essas categorias podem sobrepor-se em situações específicas, mas não são sinônimos por definição.

**Porta de saída**, **modo de transmissão**, **porta de entrada** e **suscetibilidade do hospedeiro** completam um modelo útil para organizar a prevenção. Em uma doença respiratória, partículas emitidas por uma pessoa podem alcançar outra em um ambiente mal ventilado. Ventilação atua no ambiente de exposição; uma vacina indicada atua sobre a proteção do hospedeiro. Os alvos diferem, embora as medidas possam ser combinadas.

## Períodos que não se confundem
Incubação é o intervalo entre infecção e início de sintomas. Transmissibilidade é o período em que o agente pode ser transmitido nas condições da doença. A pessoa pode transmitir antes dos sintomas em certas infecções; logo, estar sem sintomas não equivale universalmente a não transmitir. Latência tem usos técnicos que dependem do campo; não a substitua automaticamente por incubação em toda definição.

## Caso resolvido: reservatório não é vetor
Em um cenário didático de leishmaniose visceral urbana, o cão pode participar como reservatório, enquanto o flebotomíneo participa como vetor. Responder “o cão é o mosquito transmissor” mistura categorias. Também não se deve deduzir contágio humano por simples convivência com o animal: a via deve ser especificada conforme o ciclo reconhecido.

## Hospedeiro definitivo e intermediário
Na parasitologia, a classificação depende da etapa do ciclo, especialmente reprodução sexuada ou fase adulta, conforme o parasito. Não use “definitivo” como sinônimo de “mais importante” nem suponha que seja sempre o humano. O ciclo da esquistossomose e o da malária mostram que o papel deve ser estudado para cada agente.

## Infecciosa, transmissível e contagiosa
Uma doença infecciosa é causada por agente biológico; isso não significa necessariamente transmissão direta entre pessoas. A expressão contagiosa costuma ser usada para destacar contágio, mas o material deve explicitar a via. Em questão, use a descrição epidemiológica precisa em vez de concluir que toda infecção exige isolamento idêntico.

## Classificação taxonômica dos agentes e papéis de hospedeiro nas 14 doenças do edital
Uma das questões mais frequentes da banca IBGP pede para agrupar ou distinguir as doenças do edital segundo a **natureza biológica do agente etiológico** (vírus, bactéria, protozoário ou helminto) e identificar quem é o **hospedeiro definitivo** e o **intermediário**:
- **6 Doenças Virais:** Dengue (*Flavivirus*), Chikungunya (*Alphavirus*), Zika (*Flavivirus*), Febre Amarela (*Flavivirus*), Raiva (*Lyssavirus*) e Influenza / COVID-19 (*Orthomyxovirus* / *SARS-CoV-2* — totalizando **7 agravos virais** na lista de 14).
- **2 Doenças Bacterianas:** Leptospirose (*Leptospira interrogans* — espiroqueta) e Febre Maculosa (*Rickettsia rickettsii* — bactéria intracelular obrigatória transmitida por carrapato *Amblyomma*).
- **4 Protozooses:** Malária (*Plasmodium*), Doença de Chagas (*Trypanosoma cruzi*), Leishmaniose Tegumentar (*Leishmania*) e Leishmaniose Visceral (*Leishmania infantum chagasi*).
- **1 Helmintíase (Verminose):** Esquistossomose (*Schistosoma mansoni* — trematódeo digenético).
- **Atenção máxima aos Hospedeiros:** Na **Esquistossomose**, o **ser humano** é o **hospedeiro definitivo** (abriga os vermes adultos que fazem reprodução sexuada no sistema porta-hepático, eliminando ovos nas fezes → miracídios) e o caramujo planorbídeo (*Biomphalaria*) é o **hospedeiro intermediário** (reprodução assexuada liberando cercárias). Já na **Malária**, ocorre o inverso: o mosquito **Anopheles** é o **hospedeiro definitivo** (onde ocorre a reprodução sexuada/esporogonia no estômago do inseto) e o **ser humano** é o **hospedeiro intermediário** (onde ocorre a reprodução assexuada/esquizogonia no fígado e nas hemácias).`,
    summary:`Agente causa; reservatório mantém; vetor transmite; hospedeiro abriga. Incubação não é transmissibilidade. Definitivo depende do ciclo parasitário. Doença infecciosa não implica transmissão direta entre pessoas.

| Grupo Taxonômico do Agente | Doenças do Edital (Total = 14) | Vetor Biológico / Reservatório / Hospedeiro | Ponto de Interrupção Prioritário |
| --- | --- | --- | --- |
| **Vírus (7 agravos)** | **Dengue, Zika, Chikungunya, Febre Amarela, Raiva, Influenza, COVID-19** | Arboviroses: *Aedes* / *Haemagogus* / *Sabethes*. Raiva: mamíferos (cão, gato, morcego). Respiratórias: aerossóis/gotículas humanas. | Controle vetorial (arboviroses), vacinação (FA, Raiva, Influenza, COVID-19, Dengue conforme PNI) e ventilação/higiene. |
| **Bactérias (2 agravos)** | **Leptospirose** (*Leptospira*) e **Febre Maculosa** (*Rickettsia rickettsii*) | Leptospirose: reservatório roedor (*Rattus*), sem vetor (água/lama com urina). Febre Maculosa: vetor carrapato-estrela (*Amblyomma*), capivaras/equinos como amplificadores. | Saneamento, drenagem, antirratização e EPI (botas/luvas) na leptospirose; manejo de áreas com carrapatos e retirada precoce na febre maculosa. |
| **Protozoários (4 agravos)** | **Malária** (*Plasmodium*), **Chagas** (*T. cruzi*), **LTA** e **LV** (*Leishmania*) | Malária: *Anopheles* (**hospedeiro definitivo**) e humano (**intermediário**). Chagas: triatomíneo (barbeiro). Leishmanioses: flebotomíneo (*Lutzomyia*); cão é reservatório urbano da LV. | Diagnóstico/tratamento oportuno, mosquiteiros/borrifação (malária), melhoria habitacional e boas práticas no açaí (Chagas), manejo ambiental e coleiras/controle vetorial (LV). |
| **Helminto (1 agravo)** | **Esquistossomose** (*Schistosoma mansoni* — platelminto trematódeo) | Humano é **hospedeiro definitivo** (elimina ovos → miracídio); caramujo *Biomphalaria* é **hospedeiro intermediário** (libera **cercária** que penetra ativamente na pele). | Saneamento básico (esgotamento sanitário para impedir que ovos cheguem à água), educação em saúde e tratamento dos portadores. |`,
    questions:[
      {q:'[Autoral] Em um cenário de leishmaniose visceral urbana, cão e flebotomíneo exercem, respectivamente, papéis de:',options:['Agente etiológico e bactéria.', 'Reservatório e vetor.', 'Vetor e reservatório, necessariamente.', 'Dois nomes do mesmo parasito.'],ans:1,comment:'O cão é reservatório importante nesse contexto, e o flebotomíneo participa como vetor. O agente etiológico é Leishmania.'},
      {q:'[Autoral] O período entre infecção e início dos sintomas é chamado de:',options:['Incubação.', 'Letalidade.', 'Prevalência.', 'Mortalidade.'],ans:0,comment:'Incubação é intervalo temporal até os sintomas. Letalidade, prevalência e mortalidade são medidas epidemiológicas, não esse período.'},
      {q:'[Autoral] Comparando os ciclos parasitários da Malária (Plasmodium spp.) e da Esquistossomose (Schistosoma mansoni), a classificação correta dos hospedeiros definitivo e intermediário é:',options:['Na malária, o mosquito Anopheles é o hospedeiro definitivo (reprodução sexuada) e o ser humano é o hospedeiro intermediário (esquizogonia assexuada); na esquistossomose, o ser humano é o hospedeiro definitivo e o caramujo Biomphalaria é o hospedeiro intermediário.', 'Em ambas as doenças o ser humano é o único hospedeiro intermediário e o cão é o hospedeiro definitivo.', 'Na esquistossomose, o mosquito Aedes aegypti é o hospedeiro definitivo e o caramujo é o agente etiológico.', 'Na malária, não existe hospedeiro invertebrado, ocorrendo transmissão direta pelo ar.'],ans:0,comment:'Na parasitologia, hospedeiro definitivo é aquele em que ocorre a fase adulta ou a reprodução sexuada do parasito: no Plasmodium, a fecundação (esporogonia) dá-se no Anopheles (definitivo) e a esquizogonia assexuada no humano (intermediário); no Schistosoma mansoni, os vermes adultos acasalam no sistema venoso porta humano (definitivo) e a fase larvária assexuada ocorre no caramujo Biomphalaria (intermediário).'},
      {q:'[Autoral] Entre as 14 doenças previstas no conteúdo programático de Conhecimentos Específicos do edital ACE SEMUSA, assinale a alternativa que reúne EXCLUSIVAMENTE doenças causadas por BACTÉRIAS:',options:['Leptospirose (Leptospira) e Febre Maculosa (Rickettsia).', 'Dengue, Zika e Chikungunya.', 'Malária, Doença de Chagas e Leishmaniose Visceral.', 'Esquistossomose e Raiva.'],ans:0,comment:'A leptospirose (causada por bactérias espiroquetas do gênero Leptospira) e a febre maculosa (causada pela bactéria gram-negativa intracelular Rickettsia rickettsii) são as duas doenças bacterianas da lista. Dengue, Zika, Chikungunya e Raiva são virais; Malária, Chagas e Leishmanioses são protozooses; Esquistossomose é helmintíase.'},
    ],
    flashcards:[
      ['Incubação e transmissibilidade são idênticas?', 'Não. Sintomas e capacidade de transmitir têm intervalos que podem diferir.'],
      ['Hospedeiro definitivo é sempre humano?', 'Não. Na malária, o hospedeiro definitivo é o mosquito Anopheles (reprodução sexuada) e o humano é o intermediário; já na esquistossomose, o humano é o definitivo e o caramujo Biomphalaria é o intermediário.'],
      ['Quais das 14 doenças do edital são causadas por bactérias e qual é causada por helminto?', 'Bactérias: Leptospirose e Febre Maculosa. Helminto (verme trematódeo): Esquistossomose.'],
    ],
    references:[{title:'Ministério da Saúde — zoonoses',url:'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/z/zoonoses',section:'Agentes, vias de exposição e medidas de prevenção.'},{title:'Ministério da Saúde — leishmaniose visceral',url:'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/l/leishmaniose-visceral',section:'Reservatórios e transmissão.'}],
  },
];
