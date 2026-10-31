"""Compare every current SAPL text unit against the published primary theory.
Requires beautifulsoup4. This verifies textual presence, not interpretation or quiz answers.
Historical .desativado nodes are deliberately excluded and separately counted.
"""
import hashlib
import argparse
import json
import re
import unicodedata
import urllib.request
from pathlib import Path
from bs4 import BeautifulSoup

SOURCES = [('lom','leg_1','https://sapl.portovelho.ro.leg.br/ta/1639/text'),
           ('lc385','leg_2','https://sapl.portovelho.ro.leg.br/ta/2/text'),
           ('lc390','leg_3','https://sapl.portovelho.ro.leg.br/ta/57/text'),
           ('lc391','leg_3','https://sapl.portovelho.ro.leg.br/ta/58/text')]

def normalize(text):
    return re.sub('[^a-z0-9]', '', unicodedata.normalize('NFD', text).encode('ascii','ignore').decode().lower())

def run():
    parser=argparse.ArgumentParser()
    parser.add_argument('--cache-dir',type=Path)
    args=parser.parse_args()
    data_path=Path('data/app_data.json')
    data=json.loads(data_path.read_text())
    report={'date':'2026-10-31','method':'comparacao-textual-de-unidades-vigentes-sapl',
            'scope':'Presença textual após normalização de acentos, espaços e pontuação. Não certifica comentários, questões, tabelas financeiras externas ao texto articulado ou interpretação jurídica.',
            'datasetSha256':hashlib.sha256(data_path.read_bytes()).hexdigest(),'sources':[]}
    for key,lid,url in SOURCES:
        if args.cache_dir:
            raw=(args.cache_dir/f'{key}.html').read_bytes()
        else:
            with urllib.request.urlopen(url,timeout=40) as response:
                if response.status!=200:raise RuntimeError(f'HTTP {response.status}: {url}')
                raw=response.read()
        soup=BeautifulSoup(raw,'html.parser')
        units=soup.select('.dptt')
        if not units:raise RuntimeError(f'Texto articulado não encontrado: {url}')
        lesson=next(l for l in data['lessons']if l['id']==lid)
        theory=normalize(' '.join(BeautifulSoup(b.get('modoA',''),'html.parser').get_text(' ',strip=True)for b in lesson['blocks']))
        rows=[];excluded=0
        for unit in units:
            if 'desativado'in unit.get('class',[])or unit.find_parent(class_='desativado'):
                excluded+=1;continue
            for note in unit.select('.nota-alteracao,.nota-vigencia'):note.decompose()
            text=unit.get_text(' ',strip=True)
            if not normalize(text):continue
            label=unit.select_one('a.dpt-link')
            rows.append({'unit':unit.get('id'),'label':label.get_text(' ',strip=True)if label else '',
                         'sha256':hashlib.sha256(text.encode()).hexdigest(),
                         'matched':normalize(text)in theory,
                         'unmatchedPreview':text[:180]if normalize(text)not in theory else None})
        report['sources'].append({'id':key,'lesson':lid,'url':url,'sourceSha256':hashlib.sha256(raw).hexdigest(),
                                  'currentUnits':len(rows),'historicalUnitsExcluded':excluded,
                                  'matched':sum(r['matched']for r in rows),'units':rows})
    Path('docs/CONFRONTO_MUNICIPAL.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
    for source in report['sources']:
        print(source['id'],source['matched'],'/',source['currentUnits'],'unidades localizadas')

if __name__=='__main__':run()
