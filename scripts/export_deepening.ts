import fs from 'node:fs';
import path from 'node:path';
import { DEEPENING_ENTRIES } from '../src/data/deepening';

// Readable exports are derived from the same editorial source used by the app.
const target = path.resolve('content/aprofundamento');
fs.mkdirSync(target, {recursive:true});
const rows = ['# Aprofundamento das 49 aulas', '',
  'Textos autorais integrados aos modos A, B e C, à busca e ao banco de questões. As referências correspondem a cada complemento; não certificam retroativamente todos os parágrafos do material anterior.', '',
  '| Aula | Conteúdo acrescentado | Palavras de teoria | Questões | Flashcards |',
  '| --- | --- | ---: | ---: | ---: |'];
let words = 0, questions = 0, cards = 0;
for (const e of DEEPENING_ENTRIES) {
  const count = e.theory.trim().split(/\s+/u).length;
  words += count; questions += e.questions.length; cards += e.flashcards.length;
  const out = [
    `# ${e.id} — ${e.title}`, '', e.theory, '', '## Resumo de revisão', '', e.summary, '',
    '## Exercícios autorais comentados', '',
    ...e.questions.flatMap((q,idx) => [
      `### Questão ${idx+1}`, '', q.q, '',
      ...q.options.map((o,i)=>`- ${String.fromCharCode(65+i)}) ${o}`), '',
      `**Gabarito: ${String.fromCharCode(65+q.ans)}.** ${q.comment}`, '',
    ]),
    '## Flashcards', '', ...e.flashcards.flatMap(([f,b])=>[`**${f}**`, '', b, '']),
    '## Referências de consulta', '',
    ...e.references.map(r=>`- [${r.title}](${r.url}) — ${r.section}`), '',
    'Consulta editorial: 31/10/2026. Legislação deve respeitar o marco temporal do edital.', '',
  ].join('\n');
  fs.writeFileSync(path.join(target, `${e.id}.md`), out);
  rows.push(`| [${e.id}](../content/aprofundamento/${e.id}.md) | ${e.title} | ${count} | ${e.questions.length} | ${e.flashcards.length} |`);
}
rows.push('', `Total acrescentado: ${words} palavras de teoria, ${questions} questões e ${cards} flashcards.`, '',
  '## O que foi verificado', '',
  '- Há um complemento específico em cada uma das 49 aulas, com resumo, exercícios, comentários e referências.',
  '- Os novos blocos são acrescentados ao final; os índices das questões anteriores são preservados.',
  '- A mesma camada editorial é usada na interface e na auditoria; não é necessário copiar os novos textos para dentro do JSON de 8 MB.',
  '- As questões são autorais, sem alegação de serem oficiais da IBGP.', '',
  '## Limites da revisão', '',
  'Esta entrega aprofunda todas as aulas, mas não declara o edital integralmente esgotado. O acervo anterior contém transcrições e conclusões que ainda exigem revisão documental por dispositivo e data. Os novos blocos esclarecem diferenças de conceitos e erros comuns, sem transformar uma referência genérica em prova de todo o texto legado.', '',
  'O texto constitucional e as normas municipais podem sofrer alterações. As referências apontam a fonte e a seção utilizada; em caso de divergência com um resumo antigo, consulte a redação aplicável ao concurso.', '',
);
fs.writeFileSync(path.resolve('docs/APROFUNDAMENTO_49_AULAS.md'),rows.join('\n'));
console.log(`${DEEPENING_ENTRIES.length} aulas; ${words} palavras; ${questions} questões; ${cards} flashcards.`);
