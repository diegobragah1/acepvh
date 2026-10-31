"""Correções pontuais confrontadas com fontes; não certifica as 18 aulas."""
import json
from pathlib import Path
p=Path('data/app_data.json')
d=json.loads(p.read_text())
changes=[]
def replace_tree(v, pairs, path):
    if isinstance(v,str):
        for old,new in pairs:
            if old in v:
                changes.append(path)
                v=v.replace(old,new)
        return v
    if isinstance(v,list):return [replace_tree(z,pairs,f'{path}/{i}') for i,z in enumerate(v)]
    if isinstance(v,dict):return {k:replace_tree(z,pairs,f'{path}/{k}') for k,z in v.items()}
    return v
pairs={
'por_4':[
('Omissão de termo subentendido não citado antes','Omissão de termo recuperável pelo contexto; a zeugma é um caso particular'),
('Na <strong>Zeugma</strong> o termo omitido já apareceu antes na frase; na <strong>Elipse</strong> não apareceu.','A <strong>elipse</strong> omite um termo recuperável pelo contexto. A <strong>zeugma</strong> é uma elipse cujo termo já foi expresso.'),
('Elipse = Omissão de termo NÃO citado antes | Zeugma = Omissão de termo JÁ citado antes na frase.','Elipse = omissão recuperável pelo contexto | Zeugma = caso particular de elipse com termo já expresso.'),
('Elipse omite um termo que NÃO apareceu antes na frase; Zeugma omite um termo que JÁ FOI CITADO anteriormente no período.','Elipse é a omissão de um termo recuperável pelo contexto. Zeugma é o caso particular em que o termo omitido já foi expresso.'),
('"<strong>Esses terrenos baldios</strong>, é urgente que a prefeitura os limpe."','"<strong>Eu</strong>, parece que me vai tudo mal." (O termo inicial não exerce função na oração iniciada por "parece".)'),
('Esses terrenos baldios, ninguém sabe quem é o proprietário deles.','Eu, parece que me vai tudo mal.'),
('A multidão <em>gritaram</em>','A multidão chegou cedo. <em>Estavam todos animados</em>'),
('A multidão gritaram / Os agentes estamos prontos','A multidão chegou cedo. Estavam todos animados / Os agentes estamos prontos'),
('A turma chegaram cedo','A turma chegou cedo. Estavam todos animados'),
],
'por_9':[
('Correlação obrigatória:','Correlação frequente em hipóteses:'),
('<strong>Só admitem Voz Passiva verbos que possuem Objeto Direto (VTD ou VTDI)!</strong> Verbos intransitivos (VI), transitivos indiretos (VTI) e de ligação (VL) não passam para a voz passiva.','<strong>Regra geral:</strong> a transformação em passiva parte de uma construção transitiva direta (VTD ou VTDI). Há exceções lexicais reconhecidas: <em>obedecer</em> e <em>desobedecer</em>, embora transitivos indiretos na regência normativa, admitem passiva: "As normas foram obedecidas". Não se deve estender essa exceção a todo VTI. Verbos intransitivos e de ligação não fornecem objeto direto para essa transformação.'),
('Na passiva analítica, insere-se o verbo SER no mesmo tempo do verbo principal (particípio "sido")','Na passiva analítica, mantém-se o auxiliar "haviam", acrescenta-se "sido" (particípio de SER) e flexiona-se "inspecionados" para concordar com o sujeito paciente plural'),
],
'por_12':[
('Tudo o Que Você Precisa para Acertar 100% das Questões de Crase da IBGP','Crase: fundamentos, condições de uso e casos especiais'),
('Macete infalível:','Teste prático, quando houver equivalente adequado:'),
('Os 3 Casos FACULTATIVOS','Três situações frequentes de uso facultativo'),
('Os 3 Casos Facultativos','Situações de Uso Facultativo'),
('Os 3 Casos Facultativos','Situações de Uso Facultativo'),
('3. Os 3 Casos Facultativos','3. Situações de uso facultativo'),
('Quais são os 3 únicos casos em que a crase é FACULTATIVA?','Quais são três situações frequentes de uso facultativo do acento grave?'),
('Quais são os 3 únicos casos de Crase FACULTATIVA na Língua Portuguesa?','Quais são três situações frequentes de uso facultativo do acento grave?'),
('— se estiver no plural com "s", <em>às suas</em>, é obrigatória!','— no plural, distinguem-se <em>a suas equipes</em>, sem artigo, e <em>às suas equipes</em>, com artigo. A forma <em>as suas equipes</em> não atende à regência de <em>referir-se a</em>'),
('Antes de pronomes pessoais, de tratamento, indefinidos','Antes de pronomes que não admitem artigo, como os pessoais e a maioria dos de tratamento e indefinidos'),
('Inespecífica: <em>"O supervisor observava <strong>a distância</strong>."</em>','Uso sem especificador: <em>"ensino a distância"</em>. Há variação entre manuais: o Senado admite <em>à distância</em> por clareza, mesmo sem medida.'),
('Só leva crase se vier <strong>determinada em metros/medida</strong> (<em>à distância de 30 metros</em>).','Usa-se <em>à distância de 30 metros</em>. Sem especificador, há divergência de orientação: usa-se <em>ensino a distância</em>, mas o Manual do Senado também admite <em>à distância</em> por clareza. Não se deve proibir universalmente o acento por falta de medida.'),
('Apenas quando estiver DETERMINADA/ESPECIFICADA (ex.: "O posto fica à distância de 100 metros"). Se não estiver determinada, não leva crase ("Ensino a distância").','Com especificador: "à distância de 100 metros". Sem especificador, a orientação depende do contexto e do manual: "ensino a distância" é usual, mas o Senado também admite "à distância" por clareza. A ausência de medida não proíbe universalmente o acento.'),
('Tabela Integral de Regência dos 12 Verbos Campeões da IBGP','Tabela de Regência dos Verbos Selecionados'),
('São <strong>SEMPRE VTI (regem a preposição "A")</strong>!','Com complemento, na regência normativa, são <strong>VTI (preposição "A")</strong>; também podem ocorrer sem complemento expresso.'),
],
'por_15':[
('médico, lâmpada, trânsito, endêmico, vírus','médico, lâmpada, trânsito, endêmico'),
('(não confunda com proparoxítonas!)','(na análise com ditongo crescente; o Acordo também reconhece essas sequências como proparoxítonas aparentes)'),
('Omissão de um termo facilmente identificável pelo contexto que <strong>não</strong> foi citado antes','Omissão de um termo facilmente identificável pelo contexto'),
('Omissão de um termo facilmente identificável pelo contexto que **não** foi citado antes','Omissão de um termo facilmente identificável pelo contexto'),
],
'por_16':[
('Hífen: Iguais se separam, Opostos se juntam!','Hífen: conferir a regra do prefixo antes de aplicar a regra geral das vogais.'),
('Vogais iguais = SEPARA (micro-ondas, anti-inflamatório). Vogais diferentes = JUNTA (autoescola, infraestrutura). Vogal + R/S = JUNTA E DOBRA (antisséptico, ultrassom).','Na regra geral: micro-ondas e anti-inflamatório; autoescola e infraestrutura; antisséptico e ultrassom. Ressalvas: coorganizar, reeleição e prefixos tônicos pós-, pré-, pró- (pré-escolar).'),
('Vogais IGUAIS se separam com hífen (anti-inflamatório, micro-ondas); Vogais DIFERENTES se juntam sem hífen (autoescola, infraestrutura).','Regra geral na prefixação: anti-inflamatório e micro-ondas; autoescola e infraestrutura. Antes de aplicar, confira regras especiais: coorganizar e reeleição não levam hífen; pré-escolar leva por prefixo tônico acentuado.'),
('Iguais se separam:','Regra geral de vogais iguais (ressalvas: coorganizar e reeleição):'),
('Opostos se juntam:','Regra geral de vogais diferentes (ressalva: prefixos tônicos pós-, pré-, pró-):'),
('Há = Passado/Existir','Há = Tempo decorrido/Existir'),
("'Há' indica tempo PASSADO/decorrido","'Há' indica tempo decorrido"),
('acentuam-se as que NÃO terminam em A, E, O, EM, ENS','conferir a lista de terminações acentuadas: r, x, n, l, i(s), us, um/uns, ã(s), ão(s), ps e ditongo; a simples inversão da regra das oxítonas não basta, como mostra "cantam"'),
]}
for i,l in enumerate(d['lessons']):
    if l['id'] in pairs:d['lessons'][i]=replace_tree(l,pairs[l['id']],l['id'])
lessons={l['id']:l for l in d['lessons']}
q=lessons['por_15']['blocks'][1]['questions'][0]
# Sanitário pode ser proparoxítona aparente: mudar o distrator para uma paroxítona inequívoca.
if q['options'][1]=='Sanitário, endêmico, público.':
    q['options'][1]='Vírus, endêmico, público.'
    q['revision']='20261031-acentuacao-2'
q['q']='(Questão de revisão — Acentuação Gráfica) Assinale a alternativa em que TODAS as palavras são acentuadas pela mesma regra:'
q['comment']='Gabarito: C. País, baú e saída seguem a regra de i/u tônicos em hiato com vogal anterior diferente, sozinhos na sílaba ou acompanhados de s. A mistura saúde (hiato) e período (proparoxítona); B mistura vírus (paroxítona em -us) e endêmico/público (proparoxítonas); D mistura café/cipó (oxítonas em -e/-o) e Piauí (hiato tônico final após ditongo). Vigilância, em A, pode ser analisada com ditongo crescente ou como proparoxítona aparente, sem tornar a alternativa homogênea. A atribuição anterior à banca não foi autenticada.'
fac='1) Após até, quando se admite também a preposição a e o termo feminino admite artigo: até a/à escola. 2) Antes de nome feminino quando o contexto admite artigo facultativo: a/à Maria. 3) Antes de possessivo feminino adjetivo com artigo facultativo: a/à minha equipe. No plural, a minhas equipes/às minhas equipes; não se alternam as/às mantendo a mesma regência. A facultatividade depende da construção, não apenas da presença dessas palavras.'
for b in lessons['por_12']['blocks']:
    c=b['flashcards'][0]
    for k in ['b','back']:
        if k in c:c[k]=fac
# Vínculo direto entre pontos corrigidos e fontes consultadas.
new_sources=[
(106,'Acordo Ortográfico — texto oficial, bases X, XI e XVI','https://www.camara.leg.br/internet/reformaortografica/decreto_e_texto_do_acordo.pdf',['por_15','por_16']),
(107,'Senado — Manual de Comunicação: crase','https://www12.senado.leg.br/manualdecomunicacao/estilos/crase',['por_12']),
(108,'Aulete — Gramática: regência verbal','https://www.aulete.com.br/gram/cap11-15-regencia',['por_9','por_12']),
(109,'Senado — Manual de Comunicação: hífen','https://www12.senado.leg.br/manualdecomunicacao/estilos/hifen',['por_16']),
]
for n,title,url,ids in new_sources:
    if not any(s['num']==n for s in d['sources']):
        d['sources'].append(dict(num=n,folder='9 - REFERÊNCIAS LINGUÍSTICAS',title=title,name=title,url=url,note='Consultada em 31/10/2026 para os pontos documentados em REVISAO_PORTUGUES_PARCIAL.md; não certifica toda a aula.',status='reference',revoked=False))
    for id in ids:
        if n not in lessons[id]['sources']:lessons[id]['sources'].append(n)
text=json.dumps(d,ensure_ascii=False,indent=2)+'\n'
for target in ['data/app_data.json', 'public/data/app_data.json']:
    Path(target).write_text(text)
fallback='window.APP_DATA = '+text.rstrip()+';\nwindow.LOCAL_APP_DATA = window.APP_DATA;\n'
for target in ['data/app_data.js', 'public/data/app_data.js']:
    Path(target).write_text(fallback)
print(f'{len(changes)} ocorrências corrigidas; questão por_15 b1 q0 versionada.')
