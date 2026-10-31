"""Import the public normative text; no private course material is copied."""
import hashlib
import json
import urllib.request
from pathlib import Path
from bs4 import BeautifulSoup

url='https://bvsms.saude.gov.br/bvs/saudelegis/gm/2017/prt2436_22_09_2017.html'
with urllib.request.urlopen(url,timeout=40)as response:
    if response.status!=200:raise RuntimeError(response.status)
    raw=response.read()
soup=BeautifulSoup(raw,'html.parser')
paragraphs=[p.get_text(' ',strip=True)for p in soup.find_all(['h1','h2','h3','p'])if p.get_text(strip=True)]
start=next(i for i,p in enumerate(paragraphs)if p.startswith('PORTARIA Nº 2.436'))
paragraphs=paragraphs[start:]
if not any('ANEXO'in p for p in paragraphs)or len(paragraphs)<100:
    raise RuntimeError('Portaria/anexo incompletos; importação cancelada')
header=['# PNAB — texto normativo original de 2017','',
        f'Fonte: [Ministério da Saúde — Portaria 2.436/2017]({url}). Consulta: 31/10/2026.','',
        'Texto da portaria e de seu anexo, preservado em parágrafos. É a publicação de 2017, não uma consolidação de todas as alterações posteriores. eMulti e outras normas posteriores precisam ser estudadas separadamente.','']
path=Path('content/fontes-oficiais/pnab-2017.md');path.parent.mkdir(parents=True,exist_ok=True)
path.write_text('\n'.join(header)+'\n\n'.join(paragraphs)+'\n')
Path('docs/IMPORTACAO_PNAB.json').write_text(json.dumps({'date':'2026-10-31','url':url,
    'sourceSha256':hashlib.sha256(raw).hexdigest(),'paragraphs':len(paragraphs),
    'outputSha256':hashlib.sha256(path.read_bytes()).hexdigest(),
    'scope':'Publicação original de 2017, incluindo anexo; não é consolidação posterior.'},ensure_ascii=False,indent=2)+'\n')
print(len(paragraphs),'parágrafos normativos importados.')
