import React from 'react';
import { useApp } from '../context/AppContext';
import type { TopicStatus } from '../types';
import { SegmentedProgressBar } from '../features/progress/SegmentedProgressBar';

const TABS = [
  { id: 'tab-painel', label: '📊 1. Painel & Edital' },
  { id: 'tab-programatico', label: '🗂️ Conteúdo Programático' },
  { id: 'tab-apostila', label: '📚 2. Apostila Interativa (49 Aulas)' },
  { id: 'tab-simulado', label: '✍️ 3. Simulado & Flashcards' },
  { id: 'tab-endemias', label: '🦟 4. Fichas das 14 Endemias' },
  { id: 'tab-cronograma', label: '📅 5. Cronograma 12 Semanas' },
  { id: 'tab-biblioteca', label: '🔎 6. Auditoria & 126 Fontes' },
];

export const Header: React.FC = () => {
  const { appData, currentTab, setCurrentTab, getTopicStatus, setSitesModalOpen } = useApp();

  const lessons = appData?.lessons || [];
  const totalLessons = lessons.length || 49;

  const statusCounts: Record<TopicStatus, number> = {
    not_started: 0,
    studying: 0,
    completed: 0,
    review: 0,
    mastered: 0,
  };

  lessons.forEach((l) => {
    const st = getTopicStatus(l.id);
    statusCounts[st] = (statusCounts[st] || 0) + 1;
  });

  const finishedCount = statusCounts.completed + statusCounts.mastered;
  const pct = totalLessons > 0 ? Math.round((finishedCount / totalLessons) * 100) : 0;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm no-print">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-700 text-white flex items-center justify-center font-black text-lg shadow-sm">
              ACE
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
                  Apostila Integrada ACE — SEMUSA Porto Velho/RO 2026
                </h1>
                <span className="px-2 py-0.5 text-[11px] font-bold rounded-full bg-teal-100 text-teal-800 border border-teal-300">
                  Edital nº 25/2026 + Retif. nº 01 (IBGP)
                </span>
              </div>
              <p className="text-xs text-slate-600">
                Prova: <strong>14/06/2026 (Tarde)</strong> &bull; Salário:{' '}
                <strong>R$ 2.373,00 + Insalubridade + Gratificações</strong> &bull; 36 Vagas (27 AC + 2 PcD + 5 PN + 2 Indígenas)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Progress Box */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 min-w-[200px]">
              <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-1">
                <span>Progresso Geral</span>
                <span className="text-teal-700">
                  {finishedCount}/{totalLessons} ({pct}%)
                </span>
              </div>
              <SegmentedProgressBar
                statusCounts={statusCounts}
                total={totalLessons}
                heightClass="h-2"
              />
            </div>

            <button
              type="button"
              onClick={() => setSitesModalOpen(true)}
              className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold shadow-sm transition flex items-center gap-1.5 cursor-pointer"
            >
              <span>💾</span>
              <span className="hidden sm:inline">Backup / Restaurar</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-1.5 overflow-x-auto pb-1">
          {TABS.map((tab) => {
            const active = currentTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setCurrentTab(tab.id)}
                className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition cursor-pointer ${
                  active
                    ? 'bg-teal-700 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
