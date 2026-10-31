import React from 'react';
import { ContentAuditPanel } from './ContentAuditPanel';
import { StudyMethodPanel } from './StudyMethodPanel';
import { useApp } from '../context/AppContext';
import { getStatusMeta } from '../utils/status';

export const Tab5Cronograma: React.FC = () => {
  const { appData, setCurrentTab, setCurrentLessonId, getTopicStatus } = useApp();

  const auditMatrix = appData?.auditMatrix || [];
  const schedule = appData?.schedule || [];
  const lessons = appData?.lessons || [];

  const handleOpenLesson = (lessonId: string) => {
    setCurrentLessonId(lessonId);
    setCurrentTab('tab-apostila');
  };

  return (
    <section className="space-y-6">
      <StudyMethodPanel />
      <ContentAuditPanel />
      {/* 7-Column Audit Matrix */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
          <div>
            <span className="text-xs font-bold uppercase px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800">
              Matriz documental de referência — conferência por fonte necessária
            </span>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mt-1">
              Matriz Integral de Correspondência com o Edital (7 Colunas Obrigatórias)
            </h3>
          </div>
          <div className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
            {auditMatrix.length} macro-itens cadastrados para conferência
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs border border-slate-200">
            <thead className="bg-slate-800 text-white">
              <tr>
                <th className="p-2 text-left">Disciplina (Peso)</th>
                <th className="p-2 text-left">Item Exato do Edital (Anexo IV)</th>
                <th className="p-2 text-left">PDF ou Fonte Localizada</th>
                <th className="p-2 text-left">Página ou Seção</th>
                <th className="p-2 text-center">Situação Anterior</th>
                <th className="p-2 text-left">O que faltava / Divergência</th>
                <th className="p-2 text-left">Ação Executada &amp; Status Final</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {auditMatrix.map((row, idx) => (
                <tr key={idx} className="bg-white hover:bg-slate-50 align-top">
                  <td className="p-2 font-bold text-slate-900">{row.disc}</td>
                  <td className="p-2 font-semibold text-teal-950">{row.item}</td>
                  <td className="p-2 text-slate-700">{row.source}</td>
                  <td className="p-2 text-slate-600">{row.pages}</td>
                  <td className="p-2 text-center">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        row.before === 'COMPLETO'
                          ? 'bg-slate-100 text-slate-700'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {row.before}
                    </span>
                  </td>
                  <td className="p-2 text-slate-700">{row.missing}</td>
                  <td className="p-2 font-semibold text-emerald-800">{row.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 12-Week Strategic Schedule */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
        <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-1">
          Plano de estudo em {schedule.length} etapas
        </h2>
        <p className="text-xs text-slate-600 mb-4">
          Adapte as etapas ao tempo disponível. Todas as aulas estão distribuídas; clique para abrir e ajuste a prioridade conforme seus erros.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {schedule.map((s, idx) => {
            return (
              <div
                key={idx}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex flex-col justify-between space-y-3"
              >
                <div>
                  <span className="text-xs font-extrabold uppercase px-2 py-0.5 rounded bg-teal-600 text-white">
                    {s.week}
                  </span>
                  <h4 className="text-sm font-extrabold text-slate-900 mt-2">{s.focus}</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    <strong>Meta da Semana:</strong> {s.meta}
                  </p>
                </div>
                <div className="space-y-1">
                  <div className="text-[11px] font-bold text-slate-500 uppercase">
                    Aulas da Semana (Clique p/ estudar):
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {s.lessons.map(lid => {
                      const lObj = lessons.find(x => x.id === lid);
                      const st = getTopicStatus(lid);
                      const meta = getStatusMeta(st);
                      const done = st === 'completed' || st === 'mastered';

                      let shortTitle = lid;
                      if (lObj && lObj.title) {
                        const parts = lObj.title.split('.');
                        if (parts.length > 1) {
                          shortTitle = parts[0] + '. ' + parts.slice(1).join('.').trim().slice(0, 24) + '...';
                        } else {
                          shortTitle = lObj.title.slice(0, 26) + '...';
                        }
                      }

                      return (
                        <button
                          key={lid}
                          type="button"
                          onClick={() => handleOpenLesson(lid)}
                          className={`px-2.5 py-1 rounded-lg text-xs font-bold border transition ${
                            done
                              ? 'bg-emerald-100 border-emerald-400 text-emerald-900'
                              : 'bg-white border-slate-300 text-teal-800 hover:bg-teal-50'
                          }`}
                        >
                          <span className="mr-1">{meta.icon}</span>
                          {shortTitle}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
