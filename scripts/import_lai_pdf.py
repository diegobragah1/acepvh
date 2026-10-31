"""Retrieve public legal documents and transcribe every page with Poppler.
Extraction is kept distinguishable from a legal consolidation or editorial explanation.
"""
import hashlib,json,re,subprocess,tempfile,urllib.request
from pathlib import Path

sources=[
 ('lai-pvh-14565-2017','Decreto de Porto Velho 14.565/2017','https://sapl.portovelho.ro.leg.br/media/sapl/public/normajuridica/2017/8889/1500645904decreto-no-14565.pdf'),
 ('lai-ro-3166-2013','Lei de Rondônia 3.166/2013 — publicação original','https://rondonia.ro.gov.br/wp-content/uploads/2017/10/L3166.pdf'),
 ('lai-ro-6385-2026','Lei de Rondônia 6.385/2026 — alteração da LAI estadual','https://sapl.al.ro.leg.br/media/sapl/public/normajuridica/2026/13830/l6385.pdf'),
]
report=[]
for key,title,url in sources:
    with urllib.request.urlopen(url,timeout=40)as response:
        if response.status!=200:raise RuntimeError(response.status)
        raw=response.read()
    if not raw.startswith(b'%PDF'):raise RuntimeError(f'Não é PDF: {url}')
    with tempfile.TemporaryDirectory()as temp:
        pdf=Path(temp)/'source.pdf';txt=Path(temp)/'source.txt';pdf.write_bytes(raw)
        subprocess.run(['pdftotext','-layout',str(pdf),str(txt)],check=True)
        text=txt.read_text()
    pages=text.split('\f');paragraphs=[]
    for page in pages:
        lines=[line.rstrip()for line in page.splitlines()if not re.match(r'^\s*(?:PREFEITURA DO MUNICÍPIO DE PORTO VELHO|GOVERNO DO ESTADO DE RONDÔNIA|GOVERNADORIA(?: - CASA CIVIL)?|_{8,}|\d+)\s*$',line)]
        paragraphs.extend(p.strip()for p in re.split(r'\n\s*\n','\n'.join(lines))if p.strip())
    body='\n\n'.join(' '.join(p.split())for p in paragraphs)
    if len(body)<1000:raise RuntimeError(f'Extração insuficiente: {key}')
    # Preserve text as text: underscores, bars and stars from forms are not Markdown syntax.
    header=f'# {title}\n\nFonte oficial: {url}\n\nConsulta: 31/10/2026. Extração textual de todas as páginas; não é consolidação de alterações posteriores. Consulte o PDF original para layout, assinaturas e eventuais falhas da camada textual.\n\n'
    path=Path('content/fontes-oficiais')/(key+'.md')
    path.parent.mkdir(parents=True,exist_ok=True)
    path.write_text(header+'```text\n'+body+'\n```\n')
    report.append({'id':key,'url':url,'sourceSha256':hashlib.sha256(raw).hexdigest(),'textSha256':hashlib.sha256(body.encode()).hexdigest(),'pages':len(pages)-(not pages[-1].strip()),'chars':len(body)})
    print(key,len(body),'caracteres extraídos')
Path('docs/IMPORTACAO_LAI.json').write_text(json.dumps({'date':'2026-10-31','documents':report},ensure_ascii=False,indent=2)+'\n')
