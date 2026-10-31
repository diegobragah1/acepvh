import React, { useMemo, useState } from 'react';
import { useApp } from '../context/AppContext';
import { auditContent } from '../utils/contentAudit';

export function ContentAuditPanel() {
  const { appData, setCurrentLessonId, setCurrentTab, getTopicStatus } = useApp();
  const [onlyPending, setOnlyPending] = useState(true);
  const audit = useMemo(() => appData ? auditContent(appData) : null, [appData]);
  if (!appData || !audit) return null;
  const open = (id: string) => { setCurrentLessonId(id); setCurrentTab('tab-apostila'); };
  const review = appData.lessons.filter(l => getTopicStatus(l.id) === 'review');
  const rows = appData.lessons.filter(l => !onlyPending || audit.issues.some(i => i.lessonId === l.id));
  return <div className="bg-white rounded-2xl p-5 border border-slate-200 space-y-4">
    <h2 className="text-lg font-extrabold text-slate-900">Qualidade do conteúdo e fila de revisão</h2>
    <p className="text-sm text-slate-600">{audit.lessons} aulas · {audit.blocks} blocos · {audit.questions} questões · {audit.flashcards} flashcards · {audit.sources} fontes cadastradas.</p>
    <p className="text-sm text-slate-600">Esta verificação detecta lacunas estruturais. A correção de leis, dados atuais, gabaritos e cobertura do edital exige conferência nas fontes, com página/seção e data registradas.</p>
    <div className="rounded-xl bg-amber-50 p-3 text-sm text-amber-950">
      {audit.issues.filter(i => i.severity === 'error').length} erros estruturais e {audit.issues.filter(i => i.severity === 'warning').length} pendências de organização/complementação.
      {audit.issues.filter(i => !i.lessonId).map((i, n) => <p key={n}>{i.message}</p>)}
    </div>
    <div className="space-y-2">
      <h3 className="font-bold">Suas aulas marcadas para revisar ({review.length})</h3>
      {review.length ? <div className="flex flex-wrap gap-2">{review.map(l => <button key={l.id} onClick={() => open(l.id)} className="text-xs px-3 py-2 rounded-lg bg-teal-50 text-teal-900 border border-teal-200">{l.id} — {l.title}</button>)}</div> : <p className="text-sm text-slate-500">Marque uma aula como “Revisar” na apostila para incluí-la nesta fila.</p>}
      <p className="text-sm text-slate-600">Roteiro: tente explicar o conceito sem consultar; resolva as questões; confira o comentário e a fonte; registre a causa do erro; use o filtro “Erradas” no simulado para retomar os pontos difíceis.</p>
    </div>
    <label className="flex gap-2 items-center text-sm"><input type="checkbox" checked={onlyPending} onChange={e => setOnlyPending(e.target.checked)} />Mostrar apenas aulas com pendências</label>
    <div className="overflow-auto max-h-96"><table className="w-full text-sm text-left"><thead><tr><th className="p-2">Aula</th><th className="p-2">Complementar / conferir</th></tr></thead><tbody>{rows.map(l => {
      const issues = audit.issues.filter(i => i.lessonId === l.id);
      return <tr key={l.id} className="border-t border-slate-200"><td className="p-2 align-top"><button className="text-teal-800 underline text-left" onClick={() => open(l.id)}>{l.id} — {l.title}</button></td><td className="p-2">{issues.length ? <ul className="list-disc pl-4">{issues.map((i,n) => <li key={n}>{i.message}</li>)}</ul> : 'Sem pendência estrutural detectada; conferência documental permanece necessária.'}</td></tr>;
    })}</tbody></table></div>
  </div>;
}
