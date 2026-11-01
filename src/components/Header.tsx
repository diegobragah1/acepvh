import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import type { TopicStatus } from '../types';
import { SegmentedProgressBar } from '../features/progress/SegmentedProgressBar';

export const HEADER_TABS = [
  { id: 'tab-painel', icon: '📊', shortLabel: 'Painel', desktopLabel: 'Painel', colSpan: 'col-span-3' },
  { id: 'tab-programatico', icon: '🗂️', shortLabel: 'Conteúdo', desktopLabel: 'Conteúdo', colSpan: 'col-span-3' },
  { id: 'tab-apostila', icon: '📚', shortLabel: 'Aulas', desktopLabel: 'Aulas (49)', colSpan: 'col-span-3' },
  { id: 'tab-simulado', icon: '✍️', shortLabel: 'Revisão', desktopLabel: 'Revisão', colSpan: 'col-span-3' },
  { id: 'tab-endemias', icon: '🦟', shortLabel: 'Endemias', desktopLabel: 'Endemias (14)', colSpan: 'col-span-4' },
  { id: 'tab-cronograma', icon: '📅', shortLabel: 'Cronograma', desktopLabel: 'Cronograma', colSpan: 'col-span-4' },
  { id: 'tab-biblioteca', icon: '🔎', shortLabel: 'Fontes', desktopLabel: 'Fontes (126)', colSpan: 'col-span-4' },
] as const;

export const Header: React.FC = () => {
  const { appData, currentTab, setCurrentTab, getTopicStatus, setSitesModalOpen } = useApp();
  const [showEditalInfo, setShowEditalInfo] = useState(false);

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
    <>
      <header className="bg-white border-b border-slate-200/80 no-print">
        <div className="max-w-7xl mx-auto px-2.5 sm:px-4 py-1.5 sm:py-2 flex flex-col gap-1.5">
          <div className="flex flex-wrap items-center justify-between gap-1.5 sm:gap-3">
            {/* Brand + Title + Edital Toggle */}
            <div className="flex items-center gap-1.5 sm:gap-2 min-w-0 flex-1 sm:flex-initial">
              <div className="w-7 h-7 rounded-lg bg-teal-700 text-white flex items-center justify-center font-black text-xs shadow-sm shrink-0">
                ACE
              </div>
              <h1 className="text-xs sm:text-sm md:text-base font-extrabold text-slate-900 tracking-tight truncate">
                <span className="sm:hidden">ACE — SEMUSA Porto Velho</span>
                <span className="hidden sm:inline">
                  Apostila Integrada ACE — SEMUSA Porto Velho/RO 2026
                </span>
              </h1>
              <button
                type="button"
                onClick={() => setShowEditalInfo((prev) => !prev)}
                aria-expanded={showEditalInfo}
                aria-controls="header-edital-details"
                className={`px-1.5 py-0.5 rounded-md text-[11px] font-extrabold border transition flex items-center gap-0.5 shrink-0 cursor-pointer whitespace-nowrap ${
                  showEditalInfo
                    ? 'bg-teal-700 text-white border-teal-700'
                    : 'bg-teal-50 text-teal-800 border-teal-200 hover:bg-teal-100'
                }`}
              >
                <span>ⓘ Edital</span>
              </button>
            </div>

            {/* Compact Progress + Save Button on the same row */}
            <div className="flex items-center gap-1.5 sm:gap-2 w-full sm:w-auto justify-between sm:justify-end">
              <div className="flex items-center gap-1.5 sm:gap-2 bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 flex-1 sm:flex-initial min-w-0 sm:min-w-[190px]">
                <span className="text-[11px] font-bold text-slate-600 whitespace-nowrap">
                  Progresso
                </span>
                <div className="flex-1 min-w-[44px] sm:w-16">
                  <SegmentedProgressBar
                    statusCounts={statusCounts}
                    total={totalLessons}
                    heightClass="h-1.5"
                  />
                </div>
                <span className="text-[11px] font-extrabold text-teal-700 whitespace-nowrap tabular-nums">
                  {finishedCount}/{totalLessons} ({pct}%)
                </span>
              </div>

              <button
                type="button"
                onClick={() => setSitesModalOpen(true)}
                aria-label="Salvar ou restaurar progresso"
                className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-900 text-white text-[11px] font-bold shadow-sm transition flex items-center gap-1 shrink-0 cursor-pointer whitespace-nowrap"
              >
                <span aria-hidden="true">💾</span>
                <span className="sm:hidden">Salvar</span>
                <span className="hidden sm:inline">Salvar / Backup</span>
              </button>
            </div>
          </div>

          {/* Collapsible Edital Details */}
          {showEditalInfo && (
            <div
              id="header-edital-details"
              className="bg-teal-50/70 border border-teal-200 rounded-lg px-2.5 py-1.5 text-[11px] sm:text-xs text-slate-700 leading-snug space-y-0.5"
            >
              <p className="font-extrabold text-teal-900">
                Edital nº 25/2026 + Retif. nº 01 (IBGP)
              </p>
              <p>
                Prova: <strong>14/06/2026 (Tarde)</strong> &bull; Salário:{' '}
                <strong>R$ 2.373,00 + Insalubridade + Gratificações</strong> &bull; 36 Vagas (27 AC + 2 PcD + 5 PN + 2 Indígenas)
              </p>
            </div>
          )}
        </div>
      </header>

      {/* Sticky Compact Navigation Menu (all buttons visible without horizontal scrolling) */}
      <nav
        aria-label="Menu principal da plataforma"
        className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm no-print"
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-4 py-1.5">
          <div className="grid grid-cols-12 gap-1 md:flex md:flex-wrap md:items-center md:gap-1.5">
            {HEADER_TABS.map((tab) => {
              const active = currentTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setCurrentTab(tab.id)}
                  aria-current={active ? 'page' : undefined}
                  className={`${tab.colSpan} md:flex-1 px-1 py-1.5 sm:px-2.5 sm:py-1.5 rounded-lg text-[10.5px] sm:text-xs font-extrabold leading-none flex items-center justify-center gap-0.5 sm:gap-1 whitespace-nowrap transition cursor-pointer ${
                    active
                      ? 'bg-teal-700 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <span aria-hidden="true" className="text-[11px] sm:text-xs">
                    {tab.icon}
                  </span>
                  <span className="lg:hidden">{tab.shortLabel}</span>
                  <span className="hidden lg:inline">{tab.desktopLabel}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};
