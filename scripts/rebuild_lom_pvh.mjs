import fs from 'node:fs';
import path from 'node:path';

const lomJsonPath = path.resolve('public/assets/aistudio/lei_organica_pvh_importacao_d148dcb0.json');
const lomHtmlPath = path.resolve('public/assets/aistudio/lei_organica_pvh_apostila_site_7693c795.html');
const lomData = JSON.parse(fs.readFileSync(lomJsonPath, 'utf8'));

// High-precision curated exam commentary for key articles of LOM-PVH
const SPECIFIC_NOTES = {
  '1': {
    resumo: 'O Município de Porto Velho possui autonomia político-administrativa (parte integrante de RO e da República), regendo-se por sua Lei Orgânica e respeitando a CF/88 e a CE/RO.',
    foco_prova: 'Parágrafo único: Todo poder emana do povo, exercido por representantes eleitos ou diretamente (plebiscito, referendo e iniciativa popular).'
  },
  '2': {
    resumo: 'Divisão administrativa do território municipal: Distritos e Subdistritos.',
    foco_prova: 'A criação, organização, supressão ou fusão de Distritos faz-se por Lei Municipal (ver requisitos nos arts. 42 a 44).'
  },
  '3': {
    resumo: 'São 3 os símbolos oficiais de Porto Velho: Bandeira, Hino (música e poema) e Brasão, regulados pela Lei Municipal nº 249/1983.',
    foco_prova: 'Cuidado com pegadinhas que incluem "Selo", "Armas" ou "Três Caixas d\'Água" como quarto símbolo na LOM (as Três Caixas d\'Água figuram dentro do Brasão e da Bandeira, mas os símbolos são 3).'
  },
  '4': {
    resumo: 'São Poderes do Município, independentes e harmônicos entre si: o Legislativo (Câmara Municipal) e o Executivo (Prefeito).',
    foco_prova: 'Pegadinha clássica: NÃO existe Poder Judiciário Municipal nem Ministério Público Municipal.'
  },
  '5': {
    resumo: 'Patrimônio do Município: direitos, bens móveis e imóveis de pleno domínio, rendas, terrenos urbanos sem posse legítima de terceiros, herança jacente sobre imóvel urbano e, como bem natural, o boto do Rio Madeira e afluentes.',
    foco_prova: 'Destaque exclusivo de prova (inciso VII): o BOTO que viva e habite nas águas do Rio Madeira e seus afluentes é patrimônio natural do Município! Parágrafo único: transferência para distritos industriais exige prévia autorização legislativa e concessão de direito real de uso.'
  },
  '6': {
    resumo: 'A sede do Município dá-lhe o nome e tem a categoria de Cidade de Porto Velho.',
    foco_prova: 'A sede do Município é a Cidade (Art. 6º), enquanto a sede de cada Distrito tem a categoria de Vila (Art. 42, § 3º).'
  },
  '7': {
    resumo: 'Competência privativa do Município (interesse local): legislar sobre assuntos locais, suplementar legislação federal/estadual, criar distritos, organizar transporte coletivo e serviços locais, conceder/cassar licenças e exercer poder de polícia.',
    foco_prova: 'Regras específicas nos §§ 5º a 7º e Art. 7º-A: transporte coletivo por no mínimo 3 empresas (vedado consórcio/monopólio) e 1 veículo para cada 2.000 habitantes (IBGE). Coleta/aterro de resíduos sólidos pode ter concessão com autorização da Câmara, mas limpeza pública/varrição (Art. 7º-A, parágrafo único) NÃO pode ser objeto de concessão, sendo exclusiva de servidores municipais.'
  },
  '8': {
    resumo: 'Competência comum (cooperação com União e Estado de Rondônia): matérias do art. 23 da CF/88 (saúde, assistência pública, proteção ambiental, patrimônio histórico e combate à pobreza).',
    foco_prova: 'Lei complementar municipal disciplinará a viabilização dessas metas comuns na circunscrição de Porto Velho (parágrafo único).'
  },
  '9': {
    resumo: 'A Administração Pública direta, indireta ou fundacional de qualquer dos Poderes do Município obedece aos princípios de legalidade, impessoalidade, moralidade, publicidade e eficiência (Emenda nº 38/2000 e Art. 37 da CF/88).',
    foco_prova: 'Na redação da Emenda à LOM nº 38/2000 constam expressamente legalidade, impessoalidade, moralidade e eficiência, remetendo às Constituições Federal e Estadual (LIMPE).'
  },
  '10': {
    resumo: 'Cargos em comissão e funções gratificadas declarados em lei são de livre nomeação e exoneração (ad nutum) do titular do Poder respectivo.',
    foco_prova: 'Na CF/88 (Art. 37, V), funções de confiança são exclusivas de servidores ocupantes de cargo efetivo, e cargos em comissão destinam-se apenas às atribuições de direção, chefia e assessoramento.'
  },
  '11': {
    resumo: 'Acesso de pessoas com deficiência aos cargos, empregos e funções públicas municipais, com reserva mínima de 10% das vagas nos concursos públicos (Emenda nº 17/1995).',
    foco_prova: 'Atenção: Na LOM-PVH (Art. 11, parágrafo único) o percentual mínimo previsto para PcD é de 10% (enquanto na LC 385/2010, art. 7º, § 2º, a reserva é de até 20% com mínimo de 5%). Se a questão pedir expressamente "segundo a Lei Orgânica", marque no mínimo 10%.'
  },
  '12': {
    resumo: 'Ao final de cada exercício financeiro, Legislativo e Executivo publicarão no Diário Oficial a relação nominal dos servidores ativos e inativos (função, salário, lotação e tempo de serviço).',
    foco_prova: 'Instrumento de transparência ativa anual obrigatória para ambos os Poderes e órgãos vinculados.'
  },
  '14': {
    resumo: 'Responsabilidade civil objetiva do Município, autarquias, fundações, concessionárias e permissionárias pelos danos que seus agentes, nessa qualidade, causarem a terceiros.',
    foco_prova: 'A responsabilidade do ente/concessionária é objetiva (independe de dolo ou culpa), mas a ação regressiva contra o agente público responsável exige comprovação de DOLO ou CULPA.'
  },
  '18': {
    resumo: 'Todo cidadão é parte legítima para pleitear perante os Poderes Públicos a declaração de nulidade ou anulação de atos lesivos ao patrimônio municipal.',
    foco_prova: 'Corresponde ao fundamento da Ação Popular e do direito constitucional de petição em defesa do patrimônio público.'
  },
  '18-A': {
    resumo: 'Obrigatoriedade de publicação e afixação em local próprio de acesso ao público, na Prefeitura e na Câmara, dos atos licitatórios, contratos, aditivos, compras diretas e decretos (Emenda nº 73/2017).',
    foco_prova: 'Inclui licitações, leilões, contratos, termos aditivos, dispensas/inexigibilidades, ordens de serviço e decretos municipais.'
  },
  '19': {
    resumo: 'Cabe ao Prefeito a administração dos bens municipais, respeitada a competência da Câmara quanto àqueles utilizados em seus serviços.',
    foco_prova: 'Regra de repartição: o Prefeito administra os bens do Município em geral; a Câmara administra os bens afetados aos seus próprios serviços.'
  },
  '20': {
    resumo: 'A alienação de bens municipais, subordinada à existência de interesse público devidamente justificado, será sempre precedida de avaliação e obedecerá às regras de autorização legislativa e licitação.',
    foco_prova: 'Bens imóveis exigem: interesse público justificado + avaliação prévia + autorização legislativa + concorrência/licitação (dispensada em doação/investidura nos casos legais).'
  },
  '24': {
    resumo: 'Logradouros, obras e serviços públicos municipais só poderão receber nomes de pessoas falecidas há 90 (noventa) dias, no mínimo.',
    foco_prova: 'Prazo literal de prova: falecimento há no mínimo 90 DIAS (veda homenagem a pessoas vivas, em sintonia com o princípio da impessoalidade).'
  },
  '26': {
    resumo: 'Os cemitérios no Município terão caráter secular e serão administrados pela autoridade municipal, sendo permitido a todas as confissões religiosas praticar seus ritos.',
    foco_prova: 'Caráter secular = laico/não confessional, administrado pelo Poder Público Municipal; associações religiosas podem manter cemitérios particulares na forma da lei.'
  },
  '29': {
    resumo: 'O Município estabelecerá em Lei Complementar o Regime Jurídico Único (RJU) e os planos de carreira dos servidores públicos municipais (regulamentado pela LC nº 385/2010).',
    foco_prova: 'Seus §§ 1º a 6º disciplinam os descontos e consignações em folha de pagamento (limite de margem consignável e liberdade de escolha da instituição financeira pelo servidor).'
  },
  '30': {
    resumo: 'Texto originário de 1990 da LOM-PVH: "São estáveis, após dois anos de exercício, os servidores admitidos por concurso".',
    foco_prova: 'ALERTA MÁXIMO DE PROVA: O texto literal de 1990 da LOM fala em 2 anos, mas a Constituição Federal (Art. 41, com a EC 19/1998) e o Estatuto dos Servidores de PVH (LC 385/2010, Art. 25) exigem 3 ANOS de efetivo exercício para a estabilidade!'
  },
  '31': {
    resumo: 'O servidor público municipal que comprovar ser responsável por pessoa portadora de deficiência que requeira cuidados imprescindíveis terá direito à redução de até 50% de sua carga horária de trabalho, sem prejuízo da remuneração.',
    foco_prova: 'Número cravado na LOM-PVH: redução de até 50% (cinquenta por cento) da carga horária, mediante laudo médico oficial e avaliação social.'
  },
  '34': {
    resumo: 'O servidor público municipal estável só perderá o cargo em virtude de sentença judicial transitada em julgado ou mediante processo administrativo disciplinar (PAD) em que lhe seja assegurada ampla defesa.',
    foco_prova: 'Parágrafo único: Invalidada por sentença judicial a demissão, o servidor estável será REINTEGRADO, e o eventual ocupante da vaga será reconduzido ao cargo de origem (sem indenização), posto em disponibilidade ou aproveitado.'
  },
  '41': {
    resumo: 'Garante ao servidor público municipal o direito de afastar-se de suas atividades para cursar pós-graduação (lato sensu e stricto sensu), sem prejuízo de sua remuneração, desde que no interesse da Administração.',
    foco_prova: 'O afastamento remunerado exige correlação com a área de atuação do servidor e compromisso de permanência no serviço público municipal por período equivalente.'
  },
  '42': {
    resumo: 'O Município poderá dividir-se, para fins administrativos, em Distritos a serem criados, organizados, suprimidos ou fundidos por Lei Municipal.',
    foco_prova: 'A sede do Distrito tem a categoria de VILA (§ 3º). Pelo § 5º (Emenda nº 25/1998), a criação de Distrito que não implique fusão observará os requisitos do art. 43, não sendo obrigatória a consulta plebiscitária.'
  },
  '43': {
    resumo: 'Requisitos cumulativos para criação de Distrito: I — população, eleitorado e arrecadação não inferiores à 5ª parte (1/5) exigida para criação de Município; II — na povoação-sede: pelo menos 50 moradias, escola pública, posto de saúde e posto policial.',
    foco_prova: 'DECORE OS NÚMEROS DO ART. 43: Quinta parte (1/5) da população/eleitorado/arrecadação + 50 moradias + Escola Pública + Posto de Saúde + Posto Policial (comprovados por certidões do IBGE, TRE, Fazendas e Secretarias).'
  },
  '44': {
    resumo: 'Normas para fixação de divisas distritais: preferência por linhas naturais facilmente identificáveis, vedada a interrupção de continuidade territorial.',
    foco_prova: '§ 3º (Prazo eleitoral): A criação ou fusão de Distrito só poderá ocorrer até 6 (SEIS) MESES antes das eleições municipais!'
  },
  '45': {
    resumo: 'O Poder Legislativo é exercido pela Câmara Municipal, composta por Vereadores eleitos pelo sistema proporcional para mandato de 4 anos.',
    foco_prova: 'No § 3º da LOM consta a composição de 23 Vereadores (referente à faixa populacional do art. 29, IV da CF/88; observar que na faixa acima de 450 mil a 600 mil habitantes da EC 58/2009 o limite constitucional passa a até 25, mas o texto da LOM registra 23).'
  },
  '46': {
    resumo: 'Regra geral das deliberações da Câmara e de suas Comissões: maioria de votos (maioria simples), presente a maioria absoluta de seus membros.',
    foco_prova: 'Fórmula clássica: para abrir a votação exige-se presença da MAIORIA ABSOLUTA; para aprovar matéria ordinária basta MAIORIA SIMPLES dos presentes (salvo quórum qualificado expresso).'
  },
  '47': {
    resumo: 'Matérias de competência da Câmara Municipal COM SANÇÃO do Prefeito: efetivo da Guarda Municipal, planos de desenvolvimento, bens municipais, mudança temporária da sede, anistia/cancelamento de dívida ativa, criação de cargos/Secretarias, Plano Diretor e denominação de vias.',
    foco_prova: '§§ 1º e 2º (Orçamento Impositivo): Emendas individuais impositivas têm limite de 1,60% da Receita Corrente Líquida (RCL), sendo metade (50%) obrigatoriamente destinada a ações e serviços públicos de SAÚDE!'
  },
  '48': {
    resumo: 'Competência PRIVATIVA (exclusiva) da Câmara Municipal (NÃO depende de sanção do Prefeito): elaborar regimento interno, eleger/destituir Mesa, organizar seus serviços, emendar a LOM, dar posse e conceder licença ao Prefeito/Vice, julgar contas, sustar atos do Executivo e criar CPI.',
    foco_prova: 'Dica infalível para diferenciar Art. 47 vs. Art. 48: o Art. 47 traz verbos de "legislar/dispor com sanção do Prefeito"; o Art. 48 traz atos internos da Câmara, fiscalização e controle político (promulgados por Decreto Legislativo ou Resolução).'
  },
  '49': {
    resumo: 'A Câmara Municipal ou qualquer de suas Comissões pode convocar o Prefeito (quando se tratar de ato de sua responsabilidade direta), o Vice-Prefeito, o Procurador-Geral, Secretários Municipais e Diretores de Autarquias/Empresas para prestar informações.',
    foco_prova: 'Prazo: a autoridade convocada tem 15 DIAS para comparecer pessoalmente; a ausência sem justificativa adequada importa em crime de responsabilidade!'
  },
  '50': {
    resumo: 'Inviolabilidade material dos Vereadores por suas opiniões, palavras e votos no exercício do mandato e na circunscrição do Município.',
    foco_prova: 'A imunidade material do Vereador é restrita à circunscrição do Município de Porto Velho e ao exercício do mandato (Art. 29, VIII da CF/88).'
  },
  '53': {
    resumo: 'Hipóteses em que o Vereador NÃO perde o mandato: investido em cargo de Ministro, Secretário de Estado/Municipal, Secretário Adjunto ou Diretor/Superintendente de Autarquia/Fundação/Empresa Pública, ou licenciado por doença ou interesse particular.',
    foco_prova: 'A licença para tratar de interesses particulares é sem remuneração e não pode ultrapassar 120 dias por sessão legislativa. O suplente é convocado imediatamente nos casos de investidura nos cargos do Executivo (§ 1º).'
  },
  '56': {
    resumo: 'Sessão Legislativa Anual ordinária da Câmara Municipal: de 1º de fevereiro a 17 de julho e de 1º de agosto a 22 de dezembro.',
    foco_prova: 'Atenção aos §§ 2º a 4º: A sessão não será interrompida sem aprovação da LDO e da LOA; a posse ocorre em 1º de janeiro; e o mandato da Mesa Diretora é de 2 ANOS, vedada a recondução para o mesmo cargo na mesma legislatura.'
  },
  '58': {
    resumo: 'A Mesa Diretora da Câmara é composta de Presidente, 1º, 2º e 3º Vice-Presidentes, e 1º, 2º e 3º Secretários.',
    foco_prova: 'São 7 cargos na Mesa Diretora (Presidente + 3 Vice-Presidentes + 3 Secretários). Cabe à Mesa propor projetos de Resolução sobre os cargos e serviços internos da Câmara.'
  },
  '61': {
    resumo: 'As 5 espécies normativas do processo legislativo municipal: I — Emendas à Lei Orgânica; II — Leis Complementares; III — Leis Ordinárias; IV — Decretos Legislativos; V — Resoluções.',
    foco_prova: 'Note que a LOM-PVH não prevê Medida Provisória nem Lei Delegada no rol do Art. 61.'
  },
  '62': {
    resumo: 'Legitimados para propor Emenda à Lei Orgânica (4 legitimados): I — 1/3 dos membros da Câmara; II — Prefeito; III — no mínimo 50 entidades associativas constituídas há mais de 2 anos; IV — iniciativa popular de no mínimo 5% dos eleitores do Município.',
    foco_prova: 'DIFERENCIAL DE PORTO VELHO (Inciso III): Além de 1/3 dos Vereadores, Prefeito e 5% do eleitorado, a LOM-PVH permite proposta de emenda por no mínimo 50 ENTIDADES ASSOCIATIVAS legalmente constituídas há mais de 2 anos!'
  },
  '63': {
    resumo: 'A proposta de Emenda à LOM será discutida e votada em 2 (dois) turnos, com interstício mínimo de 10 (dez) dias, considerando-se aprovada se obtiver, em ambos, 2/3 (dois terços) dos votos dos membros da Câmara.',
    foco_prova: 'Tríade da Emenda à LOM: 2 TURNOS + interstício mínimo de 10 DIAS + quórum de 2/3 dos membros em ambos os turnos.'
  },
  '64': {
    resumo: 'A Emenda à Lei Orgânica será promulgada pela Mesa da Câmara Municipal com o respectivo número de ordem.',
    foco_prova: 'Pegadinha recorrente: O Prefeito NÃO sanciona, NÃO veta e NÃO promulga Emenda à Lei Orgânica! A promulgação é exclusiva da Mesa da Câmara.'
  },
  '65': {
    resumo: 'Iniciativa geral e privativa das leis: cabe a qualquer Vereador/Comissão, ao Prefeito e aos cidadãos (iniciativa popular de 5% do eleitorado). O § 1º lista as matérias de iniciativa privativa do Prefeito.',
    foco_prova: 'São de iniciativa privativa do Prefeito: criação/extinção de cargos e remuneração no Executivo, regime jurídico dos servidores municipais, criação/estruturação de Secretarias e órgãos da Administração, Plano Diretor e leis orçamentárias.'
  },
  '66': {
    resumo: 'O Prefeito pode solicitar urgência para apreciação de projetos de sua iniciativa; se a Câmara não se manifestar em até 45 dias, o projeto entra na ordem do dia sobrestando as demais deliberações.',
    foco_prova: 'O prazo de urgência do Executivo é de 45 DIAS (não corre no recesso parlamentar e NÃO se aplica aos projetos de Código — § 2º).'
  },
  '67': {
    resumo: 'As Leis Complementares exigem aprovação por MAIORIA ABSOLUTA dos membros da Câmara Municipal.',
    foco_prova: 'Exigem Lei Complementar na LOM-PVH: Código Tributário, Código de Obras, Código de Posturas, Plano Diretor, Plano de Saneamento, Estatuto dos Servidores (RJU), Lei da Guarda Municipal e criação de cargos/Secretarias.'
  },
  '70': {
    resumo: 'O projeto de lei que receber parecer contrário, quanto ao mérito, de todas as Comissões é tido como rejeitado e arquivado.',
    foco_prova: 'Se todas as Comissões derem parecer contrário, o projeto nem vai a Plenário, sendo tido por rejeitado.'
  },
  '71': {
    resumo: 'Princípio da irrepetibilidade: matéria de projeto de lei rejeitado só poderá constituir objeto de novo projeto, na mesma sessão legislativa, mediante proposta da maioria absoluta dos membros da Câmara (e para Emenda à LOM, 2/3).',
    foco_prova: 'Projeto de lei rejeitado = exige maioria absoluta para reapresentação no mesmo ano; Proposta de Emenda à LOM rejeitada = exige 2/3.'
  },
  '72': {
    resumo: 'Sanção e Veto: aprovado o projeto de lei, o Prefeito tem 15 dias úteis para sancionar ou vetar (por inconstitucionalidade ou contrariedade ao interesse público), comunicando os motivos ao Presidente da Câmara em 48 horas.',
    foco_prova: 'Quatro regras de ouro do Art. 72: (1) Prazo do Prefeito: 15 dias úteis; (2) Silêncio do Prefeito = sanção tácita; (3) Veto parcial só abrange texto integral de artigo, parágrafo, inciso ou alínea; (4) A Câmara aprecia o veto em 30 dias e só o rejeita pelo voto da MAIORIA ABSOLUTA!'
  },
  '73': {
    resumo: 'A fiscalização contábil, financeira, orçamentária, operacional e patrimonial do Município é exercida pela Câmara Municipal mediante controle externo, com o auxílio do Tribunal de Contas do Estado (TCE-RO).',
    foco_prova: '§ 2º e § 3º: A Câmara julga as contas anuais em 60 dias após o parecer prévio do TCE; o parecer prévio do TCE só deixará de prevalecer por decisão de 2/3 (DOIS TERÇOS) dos membros da Câmara, em votação nominal pública!'
  },
  '75': {
    resumo: 'As contas anuais do Município ficarão, pelo prazo de 60 (sessenta) dias, à disposição de qualquer contribuinte para exame e apreciação, podendo questionar-lhes a legitimidade.',
    foco_prova: 'Prazo de controle social das contas: 60 DIAS à disposição de qualquer contribuinte antes do envio ao TCE-RO.'
  },
  '78': {
    resumo: 'O Poder Executivo Municipal é exercido pelo Prefeito, auxiliado pelos Secretários Municipais.',
    foco_prova: 'O Prefeito exerce simultaneamente a chefia de governo e a chefia da administração municipal.'
  },
  '80': {
    resumo: 'Posse do Prefeito e do Vice-Prefeito perante a Câmara Municipal. Se, decorridos 10 (dez) dias da data fixada para a posse, não assumirem o cargo (salvo motivo de força maior), este será declarado vago.',
    foco_prova: 'Atenção: O caput originário da LOM menciona dia 12 de janeiro (enquanto o Art. 56, § 3º da LOM e a CF/88 fixam 1º de janeiro). O prazo fatal para assumir sob pena de vacância é de 10 DIAS!'
  },
  '82': {
    resumo: 'Em caso de impedimento do Prefeito e do Vice-Prefeito, ou vacância dos respectivos cargos, serão chamados sucessivamente ao exercício do cargo o Presidente da Câmara Municipal e o Procurador-Geral do Município.',
    foco_prova: 'Linha sucessória municipal em Porto Velho: Prefeito → Vice-Prefeito → Presidente da Câmara Municipal → Procurador-Geral do Município.'
  },
  '83': {
    resumo: 'Vagando os cargos de Prefeito e Vice-Prefeito, far-se-á eleição em até 60 dias depois de aberta a última vaga; se a vacância ocorrer no último ano do mandato, a eleição para ambos será feita pela Câmara Municipal em 15 dias.',
    foco_prova: 'Dupla vacância na LOM-PVH: nos 3 primeiros anos = eleição direta em até 60 DIAS; no último ano (§ 1º) = eleição indireta pela Câmara Municipal em 15 DIAS (em ambos os casos, para completar o período dos antecessores — mandato-tampão).'
  },
  '85': {
    resumo: 'O Prefeito não poderá ausentar-se do Município ou do Estado por mais de 15 (quinze) dias consecutivos, sem prévia autorização da Câmara Municipal, sob pena de perda do cargo.',
    foco_prova: 'Prazo clássico da IBGP: ausência superior a 15 DIAS CONSECUTIVOS exige licença prévia da Câmara! Até 15 dias não precisa de autorização legislativa.'
  },
  '87': {
    resumo: 'Competência privativa do Prefeito: representar o Município, exercer direção superior com os Secretários, iniciar leis, sancionar/publicar/regulamentar leis, vetar projetos, prover cargos, enviar PPA/LDO/LOA e prestar contas.',
    foco_prova: 'Prestação anual de contas pelo Prefeito à Câmara: até 31 de março do exercício seguinte (inciso XI).'
  },
  '94': {
    resumo: 'Os Secretários Municipais serão nomeados em comissão pelo Prefeito dentre brasileiros maiores de 18 anos no gozo dos direitos políticos, sendo solidariamente responsáveis pelos atos que assinarem ou praticarem.',
    foco_prova: 'Pelo § 2º, a Chefia de Gabinete do Prefeito e a Procuradoria-Geral do Município equivalem, em nível e hierarquia, às Secretarias Municipais.'
  },
  '101': {
    resumo: 'Os Conselhos Municipais são órgãos de cooperação governamental compostos obrigatoriamente por NÚMERO ÍMPAR de membros, observada a representatividade da administração e das entidades comunitárias.',
    foco_prova: 'Detalhe muito cobrado: a composição dos Conselhos Municipais na LOM-PVH deve ter sempre NÚMERO ÍMPAR de membros!'
  },
  '103': {
    resumo: 'A Guarda Municipal destina-se à proteção dos bens, serviços e instalações do Município, com ingresso exclusivo por concurso público de provas e títulos.',
    foco_prova: '§ 4º (Vedação expressa): É VEDADO à Guarda Municipal promover a segurança pessoal de qualquer cidadão ou agente investido em cargo público!'
  },
  '104': {
    resumo: 'A Guarda Municipal NÃO poderá atuar de forma repressiva em ocasiões de greve do setor público.',
    foco_prova: 'Dispositivo garantista expresso da LOM-PVH (Art. 104): proibição absoluta de atuação repressiva da Guarda Municipal contra greve de servidores públicos.'
  },
  '105': {
    resumo: 'A Procuradoria-Geral do Município (PGM) é a instituição que representa o Município judicial e extrajudicialmente, cabendo-lhe a consultoria e assessoramento jurídico do Executivo e a inscrição/cobrança da dívida ativa.',
    foco_prova: 'O ingresso na carreira de Procurador Municipal dá-se no cargo inicial mediante concurso público de provas e títulos, com participação da OAB em todas as fases.'
  },
  '106': {
    resumo: 'Transição governamental: até 30 (trinta) dias antes das eleições municipais, o Prefeito deverá preparar e publicar relatório completo da situação da Administração Municipal para entregar ao sucessor.',
    foco_prova: 'Prazo da transição no Art. 106: até 30 DIAS antes das eleições municipais.'
  },
  '109': {
    resumo: 'Consulta popular: requerida pela maioria absoluta da Câmara ou por pelo menos 2% do eleitorado; organizada pelo Executivo em 2 meses; aprovada pela maioria dos presentes (mínimo de 50% do eleitorado envolvido).',
    foco_prova: 'Limite do inciso V: até 2 (duas) consultas populares por ano, vedadas nos 4 (quatro) meses que antecedem as eleições!'
  },
  '110': {
    resumo: 'Espécies de tributos municipais expressos no Art. 110: Impostos (IPTU, ITBI e ISSQN), Taxas (poder de polícia ou serviço público específico e divisível) e Contribuição de Melhoria (valorização imobiliária por obra pública).',
    foco_prova: 'O Art. 114 prevê também a contribuição previdenciária dos servidores municipais para custeio do regime próprio de previdência.'
  },
  '150': {
    resumo: 'Saneamento básico: o Município, em consonância com sua política urbana e Plano Diretor, elaborará em convênio com o Estado e a União programa anual de saneamento básico (água, esgoto, drenagem e resíduos).',
    foco_prova: 'Conecta-se diretamente ao trabalho do ACE na vigilância ambiental e controle de criadouros hídricos.'
  },
  '151': {
    resumo: 'Proibição ambiental expressa: é VEDADA a criação de aterros sanitários à margem de rios, lagos, lagunas, manguezais e junto a mananciais.',
    foco_prova: 'Artigo curtíssimo e campeão de prova para ACE: vedação absoluta de aterros sanitários nas margens de corpos hídricos e mananciais (ex.: Rio Madeira e igarapés).'
  },
  '152': {
    resumo: 'A Administração Municipal (ou a concessionária do serviço) divulgará relatório SEMESTRAL de monitoragem da qualidade da água distribuída à população.',
    foco_prova: 'Periodicidade na LOM-PVH (Art. 152): relatório SEMESTRAL de monitoramento da água distribuída à população.'
  },
  '171': {
    resumo: 'A saúde é direito de todos e dever do Município, garantida mediante políticas sociais e econômicas destinadas a reduzir o risco de doenças e outros agravos e ao acesso universal e igualitário às ações e serviços.',
    foco_prova: 'Espelha o Art. 196 da CF/88 no âmbito do Município de Porto Velho (promoção, proteção e recuperação da saúde).'
  },
  '172': {
    resumo: 'O Município integra com a União e o Estado o Sistema Único de Saúde, organizado segundo três diretrizes: I — atendimento integral com prioridade para atividades preventivas; II — participação da comunidade; III — dignidade, gratuidade e qualidade.',
    foco_prova: 'Prioridade para as atividades PREVENTIVAS (onde atua o ACE!), sem prejuízo dos serviços assistenciais, e GRATUIDADE das ações públicas de saúde.'
  },
  '173': {
    resumo: 'A assistência à saúde é livre à iniciativa privada, que pode participar de forma complementar do sistema municipal mediante contrato de direito público ou convênio, tendo prioridade as entidades filantrópicas e sem fins lucrativos.',
    foco_prova: '§ 3º (Vedação constitucional e municipal): É VEDADA ao Município a destinação de recursos públicos para auxílios ou subvenções às instituições privadas COM FINS LUCRATIVOS!'
  },
  '174': {
    resumo: 'O Sistema Municipal de Saúde é financiado com recursos do orçamento da seguridade social, da União, do Estado e do Município, além de outras fontes.',
    foco_prova: 'Os recursos são geridos no Fundo Municipal de Saúde (ver também Art. 235 da LOM-PVH).'
  },
  '175': {
    resumo: 'Obrigações específicas do Sistema Municipal de Saúde: apoio a centros de recuperação de dependentes químicos (§ 1º), serviço obrigatório de socorro de urgência nos centros de saúde (§ 2º) e criação/manutenção de Banco de Leite Materno Municipal (§ 3º).',
    foco_prova: 'Fique atento ao § 3º do Art. 175: a LOM obriga o Município a criar e manter um BANCO DE LEITE MATERNO MUNICIPAL, administrado pela SEMUSA!'
  },
  '176': {
    resumo: 'O Município valorizará os profissionais do sistema municipal de saúde, garantindo-lhes, na forma da lei, planos de carreira envolvendo remuneração digna, treinamento, reciclagem e condições adequadas de trabalho.',
    foco_prova: 'Base orgânica das Leis Complementares Municipais nº 390/2010 e nº 391/2010 (Planos de Carreira da SEMUSA e dos Agentes).'
  },
  '178': {
    resumo: 'Compete supletivamente ao Município estimular a doação de órgãos, tecidos e substâncias humanas (incluindo sangue) para transplantes, pesquisa e tratamento.',
    foco_prova: '§ 2º: Todos os casos de morte encefálica ocorridos em hospitais e clínicas públicas ou privadas no Município devem ser obrigatoriamente comunicados aos centros de emergência.'
  },
  '180': {
    resumo: 'Quando houver insuficiência de serviços públicos de saúde, o Município poderá contratar a rede privada mediante autorização legislativa, submetendo-a às normas técnicas do SUS e priorizando entidades sem fins lucrativos.',
    foco_prova: '§ 3º: Se a intervenção em entidade contratada não restabelecer o atendimento à população, o Executivo poderá, após aprovação da Câmara, desapropriar os bens da entidade.'
  },
  '182': {
    resumo: 'Previsão de criação por Lei Complementar do Instituto de Previdência dos Servidores do Município de Porto Velho (atual IPAM), assegurando na diretoria um membro eleito diretamente pelos servidores.',
    foco_prova: 'Garante a representação democrática dos servidores municipais na diretoria do instituto previdenciário municipal.'
  },
  '206': {
    resumo: 'As pessoas com deficiência física terão acesso GRATUITO aos estádios, ginásios, quadras e todos os locais de eventos esportivos no Município.',
    foco_prova: 'Combine com o Art. 209: têm gratuidade nos estádios e ginásios de Porto Velho as pessoas com deficiência (Art. 206) e os menores de 14 anos (Art. 209).'
  },
  '209': {
    resumo: 'Os menores de 14 (quatorze) anos terão acesso gratuito aos estádios, ginásios, quadras e locais de eventos esportivos no Município.',
    foco_prova: 'Parágrafo único: Nas programações realizadas após as 22 horas, os menores deverão estar acompanhados por responsáveis maiores de idade.'
  },
  '212': {
    resumo: 'Preservação do meio ambiente em colaboração com União e Estado: normas para exploração mineral (areia, cascalho, pedra) com obrigação de recuperação da área degradada, criação de áreas verdes/parques botânicos e uso científico/contemplativo de reservas ecológicas.',
    foco_prova: 'Quem explorar recursos minerais (areia, cascalho, pedra) fica obrigado a recuperar o meio ambiente degradado de acordo com solução técnica exigida pelo órgão competente.'
  },
  '215': {
    resumo: 'Adoção expressa do princípio do POLUIDOR-PAGADOR pelo Município de Porto Velho e proteção especial de toda a orla fluvial do Rio Candeias (§ 2º).',
    foco_prova: '§ 1º: Empreendimentos poluidores devem tratar seus efluentes e arcar integralmente com os custos de recuperação ambiental; § 2º protege a orla fluvial do Rio Candeias na extensão territorial de Porto Velho.'
  },
  '217': {
    resumo: 'Conceito legal de poluição ambiental na LOM-PVH: alteração das propriedades físicas, químicas ou biológicas do meio ambiente (solo, água, ar) que prejudique a saúde/bem-estar da população, as atividades socioeconômicas ou a fauna/flora.',
    foco_prova: 'Conceito diretamente cobrado em questões de Vigilância Ambiental em Saúde para ACE.'
  },
  '229': {
    resumo: 'O Município garantirá assistência integral à saúde da mulher em todas as fases de sua vida, através da implementação de política adequada de saúde pública.',
    foco_prova: 'Vincula a SEMUSA à atenção integral à saúde da mulher (pré-natal, parto, puerpério, prevenção de câncer cérvico-uterino e de mama).'
  },
  '233': {
    resumo: 'Criação de 24 Conselhos Municipais na LOM-PVH, incluindo o Conselho Superior do Município, o Conselho Municipal de Saúde (inciso V), de Educação, de Defesa do Consumidor, de Transporte Urbano, de Cultura e da Mulher.',
    foco_prova: 'Lembre-se do Art. 101: todos os Conselhos Municipais têm composição com número ímpar de membros!'
  },
  '235': {
    resumo: 'Criação do Fundo Municipal de Saúde (FMS) para custeio das ações de saúde no Município, com recursos de dotações municipais e transferências da União e do Estado.',
    foco_prova: 'Artigo essencial para a prova de ACE: o Fundo Municipal de Saúde está instituído no Art. 235 da LOM-PVH (além da previsão da Lei Federal nº 8.142/1990).'
  },
  '237': {
    resumo: 'Previsão na Emenda à LOM nº 66/2013 de escolha dos Administradores dos Distritos de Porto Velho mediante eleição direta (mandato de 2 anos, maiores de 21 anos, eleição até 90 dias após a posse do Prefeito).',
    foco_prova: 'ALERTA JURISPRUDENCIAL (TJ-RO): Dispositivo de emenda parlamentar que impõe eleição para Administrador Distrital (cargo em comissão de direção da Administração Direta do Executivo) viola a iniciativa privativa do Prefeito (Art. 65, § 1º da LOM e simetria constitucional), mas conheça os números literais se a banca pedir a letra fria do Art. 237 (maior de 21 anos, mandato de 2 anos, eleição em até 90 dias).'
  },
  '237-A': {
    resumo: 'Competências do Administrador Distrital: representar o Distrito sob comando do Executivo, dirigir a Administração Distrital com auxílio das Secretarias e encaminhar proposta anual de ações prioritárias de saúde, educação e infraestrutura.',
    foco_prova: 'O inciso V destaca expressamente que a proposta anual do Distrito deve conter as ações prioritárias de SAÚDE, educação e infraestrutura.'
  }
};

function cleanLegalLineText(str) {
  return String(str)
    .replace(/\u00ad/g, '')
    .replace(/\.\s*Competência do Município\s+DA\s+Competência Privativa\s*$/i, '')
    .replace(/\.\s*DOS SERVIÇOS E OBRAS PÚBLICAS MUNICIPAIS\s*$/i, '')
    .replace(/\.\s*(?:Subseção\s+[IVX]+(?:\s+Disposição Geral)?|Disposições\s+(?:Gerais|Preliminares)|Disposição\s+Geral)\s*$/i, '')
    .replace(/\s*Declaração de Inconstitucionalidade conforme processo ADIN[\s\S]*$/i, '')
    .replace(/[.;]?\s*(?:Inclusão|Alteração)\s+feita\s+pelo\s+Art(?:igo)?\.?\s*(?:único|\d+[º°]?\.?)\s*-\s*Emenda\s+à\s+Lei\s+Orgânica\s+nº\s*[\d\-A-Z]+,\s*de\s*[^.]+$/i, '')
    .trim();
}

function generateSmartNotes(artObj) {
  const artNum = String(artObj.artigo);
  if (SPECIFIC_NOTES[artNum]) {
    return SPECIFIC_NOTES[artNum];
  }

  const fullText = artObj.texto.map(t => `${t.parte === 'caput' ? '' : t.parte + ' '}${cleanLegalLineText(t.texto)}`).join(' ').replace(/\s+/g, ' ').trim();
  const caput = cleanLegalLineText(artObj.texto[0]?.texto || '').replace(/\s+/g, ' ').trim();
  const subParts = artObj.texto.slice(1);

  let resumo = caput
    .replace(/\.\s*(Alteração|Inclusão|Redação|Revogado).*$/i, '')
    .trim();
  if (resumo.endsWith(':')) {
    const firstItems = subParts.slice(0, 3).map(p => cleanLegalLineText(p.texto).replace(/\s+/g, ' ').replace(/;$/, '').trim()).join('; ');
    resumo = `${resumo} ${firstItems}${subParts.length > 3 ? ` (e demais ${subParts.length - 3} dispositivos).` : '.'}`;
  } else if (!resumo.endsWith('.')) {
    resumo += '.';
  }

  const triggers = [];
  const numMatches = fullText.match(/\b(\d+\s*(?:%|por cento|dias?|meses|anos?|horas?|turnos?|terços?| quintos?)|um terço|dois terços|maioria absoluta|maioria simples|quinta parte|cinqüenta|cinquenta|sessenta|noventa|trinta|quinze|dez|vinte|cento e oitenta)\b/gi);
  if (numMatches && numMatches.length > 0) {
    const uniqueNums = Array.from(new Set(numMatches.map(m => m.toLowerCase()))).slice(0, 4);
    triggers.push(`Prazos/quóruns/números do artigo: ${uniqueNums.join(', ')}`);
  }
  if (/lei complementar/i.test(fullText)) {
    triggers.push('Exige regulamentação por LEI COMPLEMENTAR (maioria absoluta), e não mera lei ordinária ou decreto');
  }
  if (/vedad[oa]|proibid[oa]|não poderá|defeso/i.test(fullText)) {
    triggers.push('Contém VEDAÇÃO/PROIBIÇÃO expressa (a banca costuma trocar "é vedado" por "é facultado/permitido")');
  }
  if (/privativamente|exclusivamente/i.test(fullText)) {
    triggers.push('Trata de competência PRIVATIVA/EXCLUSIVA (atenção para não confundir atribuições da Câmara com as do Prefeito)');
  }
  if (/câmara municipal/i.test(fullText) && /prefeito|executivo/i.test(fullText)) {
    triggers.push('Relação entre Legislativo (Câmara) e Executivo (Prefeito): verifique quem propõe, quem autoriza e quem executa');
  }
  if (subParts.length > 0) {
    const labels = subParts.map(p => p.parte.replace(/\s*–$/, '')).slice(0, 5).join(', ');
    triggers.push(`Artigo detalhado em ${subParts.length} desdobramento(s) (${labels}${subParts.length > 5 ? '...' : ''})`);
  }
  if (triggers.length === 0) {
    triggers.push('Conferir a literalidade do sujeito competente, a obrigatoriedade do comando ("deverá/será") e a finalidade pública prevista no caput.');
  }

  return {
    resumo,
    foco_prova: triggers.join(' • ') + '.'
  };
}

// Clean and enrich all 249 articles
for (const art of lomData.artigos) {
  for (const t of art.texto) {
    t.texto = cleanLegalLineText(t.texto);
  }
  const enriched = generateSmartNotes(art);
  art.resumo = enriched.resumo;
  art.foco_prova = enriched.foco_prova;
}

fs.writeFileSync(lomJsonPath, JSON.stringify(lomData, null, 2), 'utf8');
console.log('Updated LOM JSON with cleaned text and enriched notes for all', lomData.artigos.length, 'articles.');

function escapeHtml(str) {
  return String(str)
    .replace(/\u00ad/g, '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function formatArtNumber(artNum) {
  const raw = String(artNum).trim();
  return raw.replace(/^([1-9])(-[A-Z])?$/, '$1º$2');
}

function renderArticleHtml(art) {
  const artNum = String(art.artigo).trim();
  const artLabel = `Art. ${escapeHtml(formatArtNumber(artNum))}`;
  const hasCuratedNotes = Boolean(SPECIFIC_NOTES[artNum]);

  const lines = art.texto.map((t, idx) => {
    const cleaned = cleanLegalLineText(t.texto);
    if (t.parte === 'caput' || idx === 0) {
      return `<p><strong class="lom-art-tag">${artLabel}</strong> ${escapeHtml(cleaned)}</p>`;
    }
    const cleanParte = String(t.parte).replace(/\s*[–—-]\s*$/, '').trim();
    return `<p><b>${escapeHtml(cleanParte)} —</b> ${escapeHtml(cleaned)}</p>`;
  }).join('\n');

  const curatedNotesHtml = hasCuratedNotes
    ? `\n  <p class="lom-review"><strong>Para memorizar:</strong> ${escapeHtml(art.resumo)}</p>\n  <p class="lom-focus"><strong>Atenção na prova:</strong> ${escapeHtml(art.foco_prova)}</p>`
    : '';

  return `<article class="lom-article">
  <div class="lom-legal">
    ${lines}
  </div>${curatedNotesHtml}
</article>`;
}

// Group articles into official thematic sections for continuous reading
function getArtNumericOrder(artStr) {
  if (String(artStr).startsWith('DT-')) {
    return 1000 + parseInt(String(artStr).replace('DT-', ''), 10);
  }
  return parseInt(String(artStr), 10) || 0;
}

const part1Articles = lomData.artigos.filter(a => {
  const n = getArtNumericOrder(a.artigo);
  return n >= 1 && n <= 44;
});

const part2Articles = lomData.artigos.filter(a => {
  const n = getArtNumericOrder(a.artigo);
  return n >= 45 && n <= 109;
});

const part3Articles = lomData.artigos.filter(a => {
  const n = getArtNumericOrder(a.artigo);
  return n >= 110;
});

console.log(`Grouped articles: Part 1 = ${part1Articles.length}, Part 2 = ${part2Articles.length}, Part 3 = ${part3Articles.length}`);

// Also update the standalone HTML file in public/assets/aistudio/
const standaloneSections = [
  { title: 'Título I — Da Organização do Município, Competências, Administração, Servidores e Distritos (Arts. 1º a 44)', arts: part1Articles },
  { title: 'Título II — Do Governo Municipal: Poder Legislativo, Processo Legislativo, Fiscalização Contábil e Poder Executivo (Arts. 45 a 109)', arts: part2Articles },
  { title: 'Títulos III, IV e V + ADCT — Tributação, Orçamento, Ordem Econômica (Saneamento), Ordem Social (Saúde e Meio Ambiente) e Disposições Gerais/Transitórias (Arts. 110 a 239 e DT-1 a DT-8)', arts: part3Articles },
];

const standaloneHtml = `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Lei Orgânica PVH — Apostila ACE</title><style>body{font-family:system-ui,Arial,sans-serif;max-width:900px;margin:40px auto;padding:0 22px;color:#243044;line-height:1.55}h1,h2{color:#183755}.intro{background:#f1f5f9;padding:16px;border-radius:9px}.block{border-top:2px solid #cbd5e1;margin-top:30px;padding-top:14px}.lom-article{margin:15px 0 20px}.lom-article h3{display:none}.lom-legal{font-size:.82rem;color:#475569;padding-left:12px;border-left:2px solid #dbe3eb}.lom-review{font-size:.95rem;margin:8px 0 0}.lom-review strong{color:#123b59}.lom-focus{font-size:.82rem;color:#52677b;margin:4px 0 0}.toolbar{display:flex;gap:10px;margin:15px 0}.toolbar input{flex:1;padding:9px}button{padding:8px 12px;cursor:pointer}@media print{.toolbar{display:none}.lom-article{break-inside:avoid}body{margin:0;max-width:none}}</style></head><body><h1>Lei Orgânica de Porto Velho</h1><p class="intro">Texto integral consolidado da Lei Orgânica de Porto Velho em fonte menor, com notas de memorização (<strong>Para memorizar</strong>) e pontos de atenção de prova (<strong>Atenção na prova</strong>) nos dispositivos de maior incidência.</p><div class="toolbar"><input id="search" placeholder="Buscar artigo ou tema"><button onclick="window.print()">Imprimir / salvar PDF</button></div>${standaloneSections.map(s => `<section class="block"><h2>${s.title}</h2>\n${s.arts.map(renderArticleHtml).join('\n')}</section>`).join('\n')}</body></html>`;

fs.writeFileSync(lomHtmlPath, standaloneHtml, 'utf8');
console.log('Updated standalone HTML apostila file.');

// Now update leg_1 in data/app_data.json
const appDataPath = path.resolve('data/app_data.json');
const rawAppData = JSON.parse(fs.readFileSync(appDataPath, 'utf8'));
const leg1 = rawAppData.lessons.find(l => l.id === 'leg_1');

if (!leg1) {
  throw new Error('leg_1 not found in data/app_data.json');
}

// Fix any inaccurate article numbers in leg_1 blocks 0, 1, 2
function fixLomArticleRefs(text) {
  if (!text) return text;
  return text
    .replace(/Art\.\s*2º,\s*§\s*1º\s*\(Símbolos/g, 'Art. 3º (Símbolos')
    .replace(/Art\.\s*2º,\s*§\s*1º/g, 'Art. 3º')
    .replace(/1\/6\s*\(um sexto\)\s*da população/gi, '1/5 (quinta parte) da população')
    .replace(/1\/6\s*da população/gi, '1/5 (quinta parte) da população')
    .replace(/Arts\.\s*4º\s*a\s*6º\s*\(Criação de Distritos\)/gi, 'Arts. 2º e 42 a 44 (Criação de Distritos)')
    .replace(/Requisitos para criar Distrito \(Art\.\s*5º\)/gi, 'Requisitos para criar Distrito (Art. 43)')
    .replace(/\(Art\.\s*5º\s*LOM-PVH\)/gi, '(Art. 43 LOM-PVH)')
    .replace(/Sessão Legislativa Anual \(Art\.\s*55\)/gi, 'Sessão Legislativa Anual (Art. 56)')
    .replace(/15 de fevereiro a 30 de junho e de 1º de agosto a 15 de dezembro/gi, '1º de fevereiro a 17 de julho e de 1º de agosto a 22 de dezembro (Art. 56)')
    .replace(/Competência da Câmara COM Sanção \(Art\.\s*48\)\s*vs\.\s*EXCLUSIVA da Câmara \(Art\.\s*49\)/gi, 'Competência da Câmara COM Sanção (Art. 47) vs. PRIVATIVA da Câmara SEM Sanção (Art. 48)')
    .replace(/ELOM\s*—\s*Art\.\s*59/gi, 'ELOM — Art. 62')
    .replace(/Art\.\s*69\s*LOM-PVH/gi, 'Art. 72 LOM-PVH')
    .replace(/Art\.\s*69,\s*§\s*4º\s*LOM-PVH/gi, 'Art. 72, § 4º LOM-PVH')
    .replace(/Saúde e Saneamento \(Arts\.\s*187\s*a\s*199\)/gi, 'Saneamento (Arts. 150 a 153), Saúde (Arts. 171 a 180) e Fundo Municipal de Saúde (Art. 235)')
    .replace(/Arts\.\s*195\s*a\s*207/gi, 'Arts. 150 a 153, 171 a 180 e 235')
    .replace(/Arts\.\s*187\s*–\s*199/gi, 'Arts. 171–180 e 235');
}

for (const b of leg1.blocks) {
  if (b.modoA) b.modoA = fixLomArticleRefs(b.modoA);
  if (b.modoB) b.modoB = fixLomArticleRefs(b.modoB);
  if (b.modoA_markdown) b.modoA_markdown = fixLomArticleRefs(b.modoA_markdown);
  if (b.modoB_markdown) b.modoB_markdown = fixLomArticleRefs(b.modoB_markdown);
  for (const q of b.questions || []) {
    q.q = fixLomArticleRefs(q.q);
    q.comment = fixLomArticleRefs(q.comment);
    q.options = (q.options || []).map(fixLomArticleRefs);
  }
  for (const fc of b.flashcards || []) {
    if (fc.f) fc.f = fixLomArticleRefs(fc.f);
    if (fc.b) fc.b = fixLomArticleRefs(fc.b);
    if (fc.front) fc.front = fixLomArticleRefs(fc.front);
    if (fc.back) fc.back = fixLomArticleRefs(fc.back);
  }
}

// Replace Blocks 3, 4, 5 of leg_1 with the clean continuous Apostila Integral HTML + conditional curated notes
leg1.blocks[3].title = 'Texto Integral Comentado da LOM-PVH (Parte 1 — Arts. 1º a 44): Organização do Município, Competências, Administração Pública, Bens, Obras, Servidores e Distritos';
delete leg1.blocks[3].modoA_markdown;
delete leg1.blocks[3].modoB_markdown;
leg1.blocks[3].modoA = `<div class="lom-section-intro">
  <p><strong>Título I — Da Organização do Município (Arts. 1º a 44):</strong> Texto integral artigo por artigo, com destaques de revisão (<strong>Para memorizar</strong> e <strong>Atenção na prova</strong>) nos dispositivos de maior incidência em prova.</p>
</div>
<div class="lom-articles-flow">
${part1Articles.map(renderArticleHtml).join('\n')}
</div>`;
leg1.blocks[3].modoB = `<div class="lom-summary-box">
  <p><strong>📌 Síntese Rápida dos Artigos 1º a 44 da LOM-PVH:</strong></p>
  <ul>
    <li><strong class="lom-art-tag">Art. 3º —</strong> Bandeira, Hino e Brasão (regulados pela Lei Municipal nº 249/1983).</li>
    <li><strong class="lom-art-tag">Art. 5º, VII —</strong> O <strong>boto</strong> que viva e habite nas águas do Rio Madeira e seus afluentes nos limites do Município constitui patrimônio natural municipal.</li>
    <li><strong class="lom-art-tag">Art. 7º, §§ 5º a 7º e Art. 7º-A —</strong> Transporte coletivo por no mínimo <strong>3 empresas</strong> (vedado consórcio/monopólio) e <strong>1 veículo para cada 2.000 habitantes</strong>. Coleta de lixo pode ser concedida com autorização da Câmara, mas <strong>limpeza pública e varrição (Art. 7º-A, parágrafo único) são indelegáveis</strong> e exercidas por servidores municipais.</li>
    <li><strong class="lom-art-tag">Art. 11, parágrafo único —</strong> Reserva mínima de <strong>10%</strong> dos cargos, empregos ou funções públicas para pessoas com deficiência na LOM.</li>
    <li><strong class="lom-art-tag">Art. 24 —</strong> Logradouros, obras e serviços públicos só podem receber nomes de pessoas falecidas há no mínimo <strong>90 dias</strong>.</li>
    <li><strong class="lom-art-tag">Arts. 30 e 31 —</strong> O texto originário de 1990 menciona estabilidade após 2 anos (na CF/88 Art. 41 e na LC 385/2010 são <strong>3 anos</strong>). O servidor responsável por pessoa com deficiência que exija cuidados imprescindíveis tem redução de até <strong>50% da carga horária</strong> (Art. 31).</li>
    <li><strong class="lom-art-tag">Arts. 42 a 44 —</strong> Criação de Distritos por Lei Municipal; exige <strong>1/5 (quinta parte)</strong> dos requisitos de Município + <strong>50 moradias, escola pública, posto de saúde e posto policial</strong> na povoação-sede (Vila), vedada criação nos <strong>6 meses</strong> anteriores às eleições.</li>
  </ul>
</div>`;

leg1.blocks[4].title = 'Texto Integral Comentado da LOM-PVH (Parte 2 — Arts. 45 a 109): Poder Legislativo (Câmara Municipal), Processo Legislativo, Fiscalização Contábil (TCE-RO) e Poder Executivo (Prefeito, Secretários, Conselhos, Guarda e PGM)';
delete leg1.blocks[4].modoA_markdown;
delete leg1.blocks[4].modoB_markdown;
leg1.blocks[4].modoA = `<div class="lom-section-intro">
  <p><strong>Título II — Do Governo Municipal (Arts. 45 a 109):</strong> Texto integral artigo por artigo sobre a Câmara Municipal, Vereadores, Emendas à LOM, Leis Complementares e Ordinárias, Veto, Controle Externo (TCE-RO) e Poder Executivo.</p>
</div>
<div class="lom-articles-flow">
${part2Articles.map(renderArticleHtml).join('\n')}
</div>`;
leg1.blocks[4].modoB = `<div class="lom-summary-box">
  <p><strong>📌 Síntese Rápida dos Artigos 45 a 109 da LOM-PVH:</strong></p>
  <ul>
    <li><strong class="lom-art-tag">Arts. 45 e 56 —</strong> Mandato de 4 anos (23 Vereadores no § 3º). Sessão legislativa ordinária de <strong>1º/fev a 17/jul</strong> e de <strong>1º/ago a 22/dez</strong>. Mesa Diretora com mandato de <strong>2 anos</strong>, vedada recondução para o mesmo cargo na mesma legislatura.</li>
    <li><strong class="lom-art-tag">Arts. 47 e 48 —</strong> Art. 47 = matérias da Câmara <strong>com sanção do Prefeito</strong> (inclui emendas impositivas de <strong>1,60% da RCL</strong>, sendo metade para a Saúde). Art. 48 = competência <strong>privativa da Câmara sem sanção</strong>.</li>
    <li><strong class="lom-art-tag">Arts. 62 a 64 —</strong> Proposta de Emenda à LOM por <strong>1/3 da Câmara</strong>, <strong>Prefeito</strong>, <strong>50 entidades associativas (+2 anos)</strong> ou <strong>5% do eleitorado</strong>; votada em <strong>2 turnos</strong> (interstício de <strong>10 dias</strong>) e aprovada por <strong>2/3</strong>, promulgada pela <strong>Mesa da Câmara</strong>.</li>
    <li><strong class="lom-art-tag">Arts. 66 e 72 —</strong> Urgência do Prefeito = <strong>45 dias</strong>. Prazo para sancionar ou vetar = <strong>15 dias úteis</strong> (48h para comunicar motivos); Câmara aprecia o veto em <strong>30 dias</strong>, derrubando-o apenas por <strong>maioria absoluta</strong>.</li>
    <li><strong class="lom-art-tag">Arts. 73 e 75 —</strong> Contas ficam por <strong>60 dias</strong> à disposição dos contribuintes; parecer prévio do TCE-RO só deixa de prevalecer por decisão de <strong>2/3 dos membros da Câmara</strong>.</li>
    <li><strong class="lom-art-tag">Arts. 80, 83 e 85 —</strong> Posse (prazo de <strong>10 dias</strong> para assumir, salvo força maior). Dupla vacância: eleição direta em <strong>60 dias</strong> (ou indireta pela Câmara em <strong>15 dias</strong> se no último ano). Ausência do Município ou Estado por <strong>mais de 15 dias consecutivos</strong> exige autorização prévia da Câmara.</li>
    <li><strong class="lom-art-tag">Arts. 101, 103 e 104 —</strong> Conselhos Municipais têm <strong>número ímpar</strong> de membros. Guarda Municipal não pode fazer segurança pessoal de autoridades (Art. 103, § 4º) nem agir repressivamente em greve do setor público (Art. 104).</li>
  </ul>
</div>`;

leg1.blocks[5].title = 'Texto Integral Comentado da LOM-PVH (Parte 3 — Arts. 110 a 239 + DT-1 a DT-8): Tributação, Orçamento, Ordem Econômica (Saneamento Básico), Ordem Social (Saúde, Educação, Meio Ambiente) e Disposições Gerais/Transitórias';
delete leg1.blocks[5].modoA_markdown;
delete leg1.blocks[5].modoB_markdown;
leg1.blocks[5].modoA = `<div class="lom-section-intro">
  <p><strong>Títulos III, IV e V + Ato das Disposições Transitórias (Arts. 110 a 239 e DT-1 a DT-8):</strong> Texto integral artigo por artigo cobrindo Tributos, Orçamento (PPA/LDO/LOA), Saneamento Básico (Arts. 150 a 153), Saúde (Arts. 171 a 180), Educação, Desporto, Meio Ambiente (Arts. 212 a 217), Fundo Municipal de Saúde (Art. 235) e Administração Distrital (Art. 237).</p>
</div>
<div class="lom-articles-flow">
${part3Articles.map(renderArticleHtml).join('\n')}
</div>`;
leg1.blocks[5].modoB = `<div class="lom-summary-box">
  <p><strong>📌 Síntese Rápida dos Artigos 110 a 239 + ADCT da LOM-PVH:</strong></p>
  <ul>
    <li><strong class="lom-art-tag">Arts. 110 a 138 —</strong> Impostos municipais (IPTU, ITBI e ISSQN), Taxas e Contribuição de Melhoria. Orçamento anual (LOA) e plurianual (PPA) de iniciativa do Executivo; se a LOA for rejeitada pela Câmara, prevalece o orçamento do ano anterior aplicando-se atualização monetária (Art. 130).</li>
    <li><strong class="lom-art-tag">Arts. 150 a 153 —</strong> Programa anual de saneamento básico em convênio com Estado e União; <strong>vedada a criação de aterros sanitários à margem de rios, lagos, lagunas, manguezais e mananciais</strong> (Art. 151); divulgação de <strong>relatório semestral</strong> de monitoramento da água distribuída (Art. 152).</li>
    <li><strong class="lom-art-tag">Arts. 171 a 180 e 235 —</strong> Saúde como direito de todos e dever do Município; prioridade para atividades preventivas e gratuidade (Art. 172); participação complementar da rede privada com prioridade às sem fins lucrativos e <strong>vedação de recursos públicos para auxílios/subvenções a privadas com fins lucrativos</strong> (Art. 173, § 3º); obrigatoriedade de <strong>Banco de Leite Materno Municipal</strong> administrado pela SEMUSA (Art. 175, § 3º); criação do <strong>Fundo Municipal de Saúde</strong> (Art. 235).</li>
    <li><strong class="lom-art-tag">Arts. 206 e 209 —</strong> Acesso gratuito aos estádios, ginásios e locais de eventos esportivos para pessoas com deficiência física (Art. 206) e menores de 14 anos (Art. 209).</li>
    <li><strong class="lom-art-tag">Arts. 212 a 217 —</strong> Exigência de recuperação de área degradada por extração mineral (Art. 212, I); adoção do princípio do <strong>poluidor-pagador</strong> e proteção da orla do Rio Candeias (Art. 215); conceito legal de poluição ambiental (Art. 217).</li>
    <li><strong class="lom-art-tag">Arts. 237 e 237-A —</strong> Texto da ELOM 66/2013 previu eleição direta para Administradores Distritais (2 anos, >21 anos, até 90 dias após posse do Prefeito), dispositivo declarado inconstitucional pelo TJ-RO por vício de iniciativa (cargo comissionado do Executivo).</li>
  </ul>
</div>`;

fs.writeFileSync(appDataPath, JSON.stringify(rawAppData, null, 2), 'utf8');
fs.writeFileSync(path.resolve('public/data/app_data.json'), JSON.stringify(rawAppData, null, 2), 'utf8');
const jsPayload = 'window.APP_DATA = ' + JSON.stringify(rawAppData) + ';\n';
fs.writeFileSync(path.resolve('data/app_data.js'), jsPayload, 'utf8');
fs.writeFileSync(path.resolve('public/data/app_data.js'), jsPayload, 'utf8');
fs.writeFileSync(path.resolve('data/lessons/leg_1.json'), JSON.stringify(leg1, null, 2), 'utf8');
fs.writeFileSync(path.resolve('public/data/lessons/leg_1.json'), JSON.stringify(leg1, null, 2), 'utf8');
console.log('Successfully updated leg_1 across all data and public mirror files!');

