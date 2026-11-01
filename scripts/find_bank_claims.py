"""Triagem de alegações, nunca prova de erro nem de cobertura."""
import json,re,hashlib
from pathlib import Path
from html.parser import HTMLParser

class PlainText(HTMLParser):
 def __init__(self):
  super().__init__(convert_charrefs=True)
  self.parts=[]
 def handle_data(self,data):
  if data.strip(): self.parts.append(data.strip())

def plain_text(html):
 parser=PlainText()
 parser.feed(html)
 parser.close()
 return ' '.join(parser.parts)
p=Path('data/app_data.json');data=json.loads(p.read_text(encoding='utf-8'));rows=[]
for l in data['lessons']:
 for i,b in enumerate(l['blocks']):
  for field in ['modoA','modoB']:
   text=plain_text(b.get(field,''))
   for match in re.finditer(r'[^.!?\n]{0,180}(?:IBGP|banca)[^.!?\n]{0,250}',text,re.I):
    if re.search(r'sempre|nunca|quase todas|100\s*%|mais cobrad|campe|certeza|certamente|90\s*%',match[0],re.I):
     rows.append({'aula':l['id'],'bloco':i,'campo':field,'trecho':match[0].strip(),'situacao':'CONFERIR: possível alegação sem evidência; pode haver falso positivo'})
out={'datasetSha256':hashlib.sha256(p.read_bytes()).hexdigest(),'aulasVarridas':len(data['lessons']),'metodo':'regex em teoria/resumo; não examina fonte, questões ou cartões; não é leitura integral','ocorrencias':rows}
Path('docs/auditoria/ALEGACOES_BANCA.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print(f'{len(data["lessons"])} aulas varridas; {len(rows)} candidatos para conferência, sem aprovação automática.')
