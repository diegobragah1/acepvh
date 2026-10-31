#!/usr/bin/env python3
"""Add reviewed, original math practice without renumbering existing blocks/questions.
Re-running replaces only the uniquely titled supplementary block.
"""
import json
from pathlib import Path

items = [
 ('rlm_2', 'Porcentagens sucessivas e proporcionalidade',
 '''## Exemplo resolvido: desconto e aumento
Um valor de R$ 200 recebe desconto de 20% e depois aumento de 20%.
1. Desconto: 200 × 0,80 = 160.
2. Aumento sobre a nova base: 160 × 1,20 = 192.
3. Variação total: (192 − 200) / 200 = −0,04 = −4%.
As taxas incidem sobre bases diferentes; somar −20% e +20% produziria uma conclusão errada.

## Exemplo resolvido: divisão proporcional
Dividir 120 unidades na razão 2:3: somar os pesos (5); calcular a unidade de razão (120/5 = 24); multiplicar por cada peso (48 e 72). Conferir: 48 + 72 = 120 e 48/72 = 2/3.

## Como revisar o próprio erro
Identifique a base de cada porcentagem, escreva o fator multiplicativo e confira se o resultado faz sentido antes de consultar o gabarito.''',
 'Desconto de p%: multiplicar por 1 − p/100. Aumento de p%: multiplicar por 1 + p/100. Em operações sucessivas, multiplicar os fatores. Na divisão diretamente proporcional, dividir o total pela soma dos pesos e multiplicar cada peso.',
 [
 {'q':'[Autoral] Um valor de R$ 200 sofre desconto de 20% e depois aumento de 20%. Qual é o valor final?', 'options':['A) R$ 160','B) R$ 192','C) R$ 200','D) R$ 240'],'ans':1,'comment':'200 × 0,80 × 1,20 = 192. A é apenas a primeira etapa; C soma taxas sobre bases diferentes; D aplica só o aumento ao valor inicial.'},
 {'q':'[Autoral] Dividem-se 120 unidades entre dois grupos na razão direta 2:3. Quanto recebe o grupo de peso 3?', 'options':['A) 24','B) 48','C) 60','D) 72'],'ans':3,'comment':'Os pesos somam 5; cada unidade de razão vale 120/5 = 24. O grupo de peso 3 recebe 3 × 24 = 72. A é a unidade de razão; B é a outra parte; C divide igualmente e ignora os pesos.'}],
 [('Por que −20% e +20% não se anulam em etapas sucessivas?','Porque as bases mudam: 0,80 × 1,20 = 0,96; o resultado é redução de 4%.'),('Como dividir 120 na razão 2:3?','120/(2+3) = 24; as partes são 2×24 = 48 e 3×24 = 72.')]),
 ('rlm_3','Conversões de capacidade e tempo',
 '''## Exemplo resolvido: capacidade de um reservatório
Considere um reservatório retangular ideal, com dimensões internas 2 m × 1,5 m × 0,8 m, completamente cheio.
1. Volume = comprimento × largura × altura = 2,4 m³.
2. Como 1 m³ = 1.000 litros, capacidade = 2.400 litros.
3. As três medidas devem estar na mesma unidade antes da multiplicação.
Este exemplo calcula capacidade geométrica; não prescreve tratamento ou dosagem de produtos.

## Exemplo resolvido: tempo em horas decimais
2 h 30 min = 2 + 30/60 = 2,5 h. Escrever 2,30 h significa 2 h e 18 min, pois 0,30 × 60 = 18.

## Conferência independente
Compare as unidades de entrada e saída e faça o caminho inverso: 2.400/1.000 = 2,4 m³; 0,5 × 60 = 30 minutos.''',
 '1 m³ = 1.000 L; 1 L = 1.000 mL. Para converter minutos em fração de hora, dividir por 60. Para converter a parte decimal de hora em minutos, multiplicar por 60.',
 [
 {'q':'[Autoral] Um reservatório retangular ideal tem dimensões internas de 2 m, 1,5 m e 0,8 m. Cheio, qual é sua capacidade?', 'options':['A) 240 L','B) 2.400 L','C) 24.000 L','D) 4.300 L'],'ans':1,'comment':'V = 2 × 1,5 × 0,8 = 2,4 m³ = 2.400 L. A e C usam fatores de conversão incorretos; D soma dimensões, operação que não fornece volume.'},
 {'q':'[Autoral] Como expressar 2 horas e 30 minutos em horas decimais?', 'options':['A) 2,30 h','B) 2,03 h','C) 2,5 h','D) 3 h'],'ans':2,'comment':'30 minutos correspondem a 30/60 = 0,5 hora. Portanto, 2 + 0,5 = 2,5 h. O sistema de minutos é sexagesimal; concatenar 2 e 30 não converte a unidade.'}],
 [('Como converter 2,4 m³ em litros?','Multiplicar por 1.000: 2.400 L.'),('Como transformar 45 minutos em horas decimais?','45/60 = 0,75 hora.')]),
 ('rlm_4','Médias simples e ponderadas',
 '''## Exemplo resolvido: média simples
Três resultados são 6, 8 e 10. Soma = 24; quantidade = 3; média = 24/3 = 8.

## Exemplo resolvido: média ponderada
Uma nota 6 tem peso 1 e uma nota 9 tem peso 2.
1. Produtos: 6 × 1 = 6; 9 × 2 = 18.
2. Soma ponderada: 6 + 18 = 24.
3. Soma dos pesos: 1 + 2 = 3.
4. Média: 24/3 = 8.
Dividir pela quantidade de notas (2) daria 12, resultado fora do intervalo entre 6 e 9: um sinal de erro.

## Estratégia de revisão
Antes de calcular, identifique se todos os valores têm o mesmo peso. Depois confira se a média está entre o menor e o maior valor, considerando pesos positivos.''',
 'Média simples = soma dos valores / quantidade. Média ponderada = soma dos produtos valor×peso / soma dos pesos. Com pesos positivos, a média permanece entre o menor e o maior valor.',
 [
 {'q':'[Autoral] Qual é a média aritmética simples de 6, 8 e 10?', 'options':['A) 6','B) 8','C) 10','D) 24'],'ans':1,'comment':'(6 + 8 + 10)/3 = 24/3 = 8. D é só a soma; A e C são os extremos, sem efetuar a operação.'},
 {'q':'[Autoral] Uma nota 6 tem peso 1 e uma nota 9 tem peso 2. Qual é a média ponderada?', 'options':['A) 7,5','B) 8','C) 9','D) 12'],'ans':1,'comment':'(6×1 + 9×2)/(1+2) = 24/3 = 8. A ignora os pesos; C considera só uma nota; D divide por 2 em vez da soma dos pesos.'}],
 [('Qual é o denominador da média ponderada?','A soma dos pesos, e não necessariamente a quantidade de valores.'),('Como verificar uma média com pesos positivos?','Ela deve ficar entre o menor e o maior valor; isso detecta alguns erros, mas não substitui o cálculo.')])
]
root = Path(__file__).resolve().parents[1]
data = json.loads((root/'data/app_data.json').read_text())
for lid, name, theory, summary, questions, cards in items:
    title = 'Complemento autoral — ' + name
    block = dict(title=title, modoA_markdown=theory, modoB_markdown=summary, modoA='', modoB='', questions=questions, flashcards=[dict(f=f,b=b) for f,b in cards])
    lesson = next(l for l in data['lessons'] if l['id']==lid)
    lesson['blocks'] = [b for b in lesson['blocks'] if b['title'] != title] + [block]
    lesson['questionsCount'] = sum(len(b.get('questions',[])) for b in lesson['blocks'])
    lesson['flashcardsCount'] = sum(len(b.get('flashcards',[])) for b in lesson['blocks'])
    target = root / 'content/complementos' / (lid+'.md');target.parent.mkdir(exist_ok=True)
    target.write_text('# '+title+'\n\nMaterial autoral; exemplos matemáticos com resolução explícita, não questões oficiais da banca.\n\n'+theory+'\n\n## Resumo\n\n'+summary+'\n')
# Preserve existing assignments and add omitted lessons to the least loaded stage.
scheduled = {lid for stage in data['schedule'] for lid in stage['lessons']}
for lesson in data['lessons']:
    if lesson['id'] not in scheduled:
        stage = min(data['schedule'], key=lambda s: len(s['lessons']))
        stage['lessons'].append(lesson['id'])
        scheduled.add(lesson['id'])
# Derive the index from all current lessons, not from an already stale index.
keys = ['id','num','slug','cat','catName','title','editalRef','mdPath','mdLegacyPath','subjectFolder','sources']
data['aulasIndex'] = []
for lesson in data['lessons']:
    row = {key: lesson[key] for key in keys if key in lesson}
    row.update(blocksCount=len(lesson['blocks']), questionsCount=sum(len(b.get('questions',[])) for b in lesson['blocks']), flashcardsCount=sum(len(b.get('flashcards',[])) for b in lesson['blocks']))
    data['aulasIndex'].append(row)
# The derived index supersedes the stale 32-lesson index.
(root/'data/aulas.json').write_text(json.dumps(data['lessons'],ensure_ascii=False,indent=2)+'\n')
raw = json.dumps(data,ensure_ascii=False,indent=2)+'\n'
for base in ['data','public/data']:
    (root/base/'app_data.json').write_text(raw)
    (root/base/'app_data.js').write_text('window.APP_DATA = '+raw.rstrip()+';\nwindow.LOCAL_APP_DATA = window.APP_DATA;\n')
