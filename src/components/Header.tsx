import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { calculateStudyProgress } from '../utils/progress';
import {
  searchGlobalContent,
  type GlobalSearchCategory,
  type GlobalSearchResultItem,
} from '../utils/globalSearch';

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
  const {
    appData,
    currentTab,
    setCurrentTab,
    currentLessonId,
    setCurrentLessonId,
    getTopicStatus,
    completedSubtopics,
    toggleCompleteCurrentLesson,
    setSitesModalOpen,
    navigateToSearchResult,
  } = useApp();
  const [showEditalInfo, setShowEditalInfo] = useState(false);
  const [showProgressPanel, setShowProgressPanel] = useState(false);
  const [quickQuery, setQuickQuery] = useState('');
  const [searchCat, setSearchCat] = useState<GlobalSearchCategory>('ALL');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const progressContainerRef = useRef<HTMLDivElement>(null);

  const lessons = appData?.lessons || [];

  const progress = useMemo(
    () => calculateStudyProgress(lessons, getTopicStatus, completedSubtopics),
    [lessons, getTopicStatus, completedSubtopics]
  );

  const currentLesson = useMemo(
    () => lessons.find((l) => l.id === currentLessonId) || lessons[0],
    [lessons, currentLessonId]
  );
  const isCurrentLessonDone =
    currentLesson &&
    (getTopicStatus(currentLesson.id) === 'completed' ||
      getTopicStatus(currentLesson.id) === 'mastered');

  const searchSummary = useMemo(
    () => searchGlobalContent(appData, quickQuery, searchCat, 15),
    [appData, quickQuery, searchCat]
  );

  // Close search and progress dropdowns on outside click or Escape key; support Ctrl+K / Cmd+K shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
        setIsSearchOpen(true);
        setShowProgressPanel(false);
      } else if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setShowProgressPanel(false);
      }
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target as Node)
      ) {
        setIsSearchOpen(false);
      }
      if (
        progressContainerRef.current &&
        !progressContainerRef.current.contains(e.target as Node)
      ) {
        setShowProgressPanel(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelectResult = (item: GlobalSearchResultItem) => {
    navigateToSearchResult(item);
    setIsSearchOpen(false);
  };

  return (
    <>
      <header className="bg-white border-b border-slate-200/80 no-print">
        <div className="max-w-7xl mx-auto px-2.5 sm:px-4 py-1.5 sm:py-2 flex flex-col gap-1.5">
          <div className="flex flex-wrap items-center justify-between gap-1.5 sm:gap-2.5">
            {/* Brand + Title + Edital Toggle */}
            <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
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

            {/* Global Quick Search Bar (Aulas, Fichas & Questões) */}
            <div
              ref={searchContainerRef}
              className="relative flex-1 min-w-[200px] sm:max-w-md order-3 sm:order-2 w-full sm:w-auto"
            >
              <div className="relative flex items-center">
                <span
                  aria-hidden="true"
                  className="absolute left-2.5 text-slate-400 text-xs pointer-events-none"
                >
                  🔍
                </span>
                <input
                  ref={searchInputRef}
                  type="search"
                  value={quickQuery}
                  onFocus={() => setIsSearchOpen(true)}
                  onChange={(e) => {
                    setQuickQuery(e.target.value);
                    setIsSearchOpen(true);
                  }}
                  aria-label="Busca rápida em aulas, fichas e questões"
                  placeholder="Buscar em aulas, fichas e questões (Ctrl+K)..."
                  className="w-full pl-7 pr-14 py-1 text-xs rounded-lg border border-slate-300 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-teal-600 focus:ring-2 focus:ring-teal-500/20 transition"
                />
                {quickQuery && (
                  <button
                    type="button"
                    onClick={() => {
                      setQuickQuery('');
                      searchInputRef.current?.focus();
                    }}
                    className="absolute right-1.5 px-1.5 py-0.5 rounded text-[10px] font-bold bg-slate-200 hover:bg-slate-300 text-slate-700 cursor-pointer"
                  >
                    Limpar
                  </button>
                )}
              </div>

              {/* Instant Search Results Popover */}
              {isSearchOpen && quickQuery.trim().length >= 2 && (
                <div
                  role="region"
                  aria-label="Resultados da busca rápida"
                  className="absolute left-0 right-0 sm:left-auto sm:right-0 sm:w-[460px] md:w-[540px] mt-1.5 bg-white rounded-xl border border-slate-200 shadow-xl z-50 overflow-hidden"
                >
                  {/* Filter Tabs inside Search Popover */}
                  <div className="bg-slate-50 px-3 py-2 border-b border-slate-200 flex flex-wrap items-center justify-between gap-1.5">
                    <div className="flex flex-wrap items-center gap-1">
                      {(
                        [
                          { id: 'ALL', label: `Todos (${searchSummary.counts.total})` },
                          { id: 'AULAS', label: `📚 Aulas (${searchSummary.counts.aulas})` },
                          { id: 'FICHAS', label: `🦟 Fichas (${searchSummary.counts.fichas})` },
                          { id: 'QUESTOES', label: `✍️ Questões (${searchSummary.counts.questoes})` },
                        ] as const
                      ).map((tab) => (
                        <button
                          key={tab.id}
                          type="button"
                          onClick={() => setSearchCat(tab.id)}
                          className={`px-2 py-1 rounded-md text-[11px] font-bold transition cursor-pointer whitespace-nowrap ${
                            searchCat === tab.id
                              ? 'bg-teal-700 text-white'
                              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsSearchOpen(false)}
                      className="text-[11px] font-bold text-slate-500 hover:text-slate-800 px-1.5 py-0.5 cursor-pointer"
                    >
                      ✕
                    </button>
                  </div>

                  {/* Results List */}
                  <div className="max-h-[65vh] overflow-y-auto divide-y divide-slate-100">
                    {searchSummary.results.length === 0 ? (
                      <div className="p-5 text-center text-xs text-slate-500">
                        Nenhum resultado encontrado para{' '}
                        <strong className="text-slate-800">&ldquo;{quickQuery}&rdquo;</strong> em aulas, fichas ou questões.
                      </div>
                    ) : (
                      searchSummary.results.map((item) => {
                        const typeIcon =
                          item.type === 'aula'
                            ? '📚'
                            : item.type === 'ficha'
                            ? '🦟'
                            : '✍️';
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => handleSelectResult(item)}
                            className="w-full text-left px-3.5 py-2.5 hover:bg-teal-50/60 transition flex flex-col gap-0.5 cursor-pointer"
                          >
                            <div className="flex items-center justify-between gap-2 text-[11px]">
                              <span className="font-extrabold text-teal-800 truncate">
                                {typeIcon} {item.title}
                              </span>
                              <span className="text-[10px] font-semibold text-slate-500 shrink-0">
                                {item.badge} ➔
                              </span>
                            </div>
                            <p className="text-[11px] font-semibold text-slate-600 truncate">
                              {item.subtitle}
                            </p>
                            <p className="text-xs text-slate-700 line-clamp-2 leading-snug mt-0.5">
                              {item.snippet}
                            </p>
                          </button>
                        );
                      })
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Interactive Percentage Completion Bar + Save Button */}
            <div
              ref={progressContainerRef}
              className="relative flex items-center gap-1.5 sm:gap-2 order-2 sm:order-3 justify-end"
            >
              <button
                type="button"
                onClick={() => setShowProgressPanel((prev) => !prev)}
                aria-expanded={showProgressPanel}
                aria-controls="header-progress-popover"
                aria-label={`Progresso de estudos: ${progress.overallPct}% concluído (${progress.completedLessons} de ${progress.totalLessons} aulas e ${progress.completedSubtopics} de ${progress.totalSubtopics} tópicos)`}
                className={`flex items-center gap-1.5 sm:gap-2 rounded-lg px-2 sm:px-2.5 py-1 border transition cursor-pointer min-w-0 ${
                  showProgressPanel
                    ? 'bg-teal-50 border-teal-500 ring-2 ring-teal-500/20'
                    : 'bg-slate-50 hover:bg-slate-100 border-slate-200'
                }`}
              >
                <div className="flex flex-col gap-0.5 min-w-[96px] sm:min-w-[140px]">
                  <div className="flex items-center justify-between gap-1.5 text-[10.5px] sm:text-[11px] leading-none">
                    <span className="font-bold text-slate-700 whitespace-nowrap">
                      Progresso
                    </span>
                    <span className="font-extrabold text-teal-800 tabular-nums whitespace-nowrap">
                      {progress.overallPct}%
                    </span>
                  </div>
                  <div
                    role="progressbar"
                    aria-label="Barra de conclusão percentual"
                    aria-valuenow={progress.overallPct}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    className="w-full h-2 rounded-full bg-slate-200 overflow-hidden"
                  >
                    <svg
                      viewBox="0 0 100 8"
                      preserveAspectRatio="none"
                      className="w-full h-full block"
                    >
                      <rect
                        x="0"
                        y="0"
                        width={progress.overallPct}
                        height="8"
                        className="fill-emerald-600 transition-all duration-300"
                      />
                    </svg>
                  </div>
                </div>

                <div className="hidden md:flex flex-col items-end text-[10px] leading-tight text-slate-600 font-semibold tabular-nums shrink-0 border-l border-slate-200 pl-2">
                  <span>
                    <strong className="text-slate-900">{progress.completedLessons}</strong>/{progress.totalLessons} aulas
                  </span>
                  <span>
                    <strong className="text-teal-800">{progress.completedSubtopics}</strong>/{progress.totalSubtopics} tópicos
                  </span>
                </div>
              </button>

              {/* Progress Breakdown Popover */}
              {showProgressPanel && (
                <div
                  id="header-progress-popover"
                  role="region"
                  aria-label="Painel detalhado de acompanhamento de progresso"
                  className="absolute right-0 top-full mt-1.5 w-[310px] sm:w-[370px] bg-white rounded-xl border border-slate-200 shadow-xl z-50 p-3.5 space-y-3 text-left"
                >
                  <div className="flex items-start justify-between gap-2 border-b border-slate-100 pb-2">
                    <div>
                      <p className="text-xs font-extrabold text-slate-900">
                        📈 Acompanhamento de Progresso
                      </p>
                      <p className="text-[11px] text-slate-500">
                        Baseado nas aulas e tópicos marcados como concluídos
                      </p>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 text-xs font-black tabular-nums">
                      {progress.overallPct}%
                    </span>
                  </div>

                  {/* Summary Metrics */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-slate-50 rounded-lg p-2 border border-slate-200/80">
                      <span className="block text-[10px] font-bold uppercase text-slate-500">
                        Aulas Concluídas
                      </span>
                      <span className="text-sm font-black text-slate-900 tabular-nums">
                        {progress.completedLessons}/{progress.totalLessons}{' '}
                        <span className="text-xs font-bold text-teal-700">
                          ({progress.lessonsPct}%)
                        </span>
                      </span>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-2 border border-slate-200/80">
                      <span className="block text-[10px] font-bold uppercase text-slate-500">
                        Tópicos Concluídos
                      </span>
                      <span className="text-sm font-black text-slate-900 tabular-nums">
                        {progress.completedSubtopics}/{progress.totalSubtopics}{' '}
                        <span className="text-xs font-bold text-teal-700">
                          ({progress.subtopicsPct}%)
                        </span>
                      </span>
                    </div>
                  </div>

                  {/* Breakdown by Discipline */}
                  <div className="space-y-1.5">
                    <span className="block text-[10px] font-extrabold uppercase tracking-wider text-slate-500">
                      Conclusão por Disciplina
                    </span>
                    {progress.byCategory.map((cat) => (
                      <div key={cat.cat} className="space-y-0.5">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="font-bold text-slate-700 truncate">
                            {cat.shortLabel}
                          </span>
                          <span className="text-slate-600 font-semibold tabular-nums">
                            {cat.completedLessons}/{cat.totalLessons} aulas &middot;{' '}
                            {cat.completedSubtopics}/{cat.totalSubtopics} tóp. ({cat.pct}%)
                          </span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                          <svg
                            viewBox="0 0 100 6"
                            preserveAspectRatio="none"
                            className="w-full h-full block"
                          >
                            <rect
                              x="0"
                              y="0"
                              width={cat.pct}
                              height="6"
                              className="fill-teal-600 transition-all duration-300"
                            />
                          </svg>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Quick Actions inside Popover */}
                  <div className="pt-2 border-t border-slate-100 flex flex-col gap-1.5">
                    {currentLesson && (
                      <button
                        type="button"
                        onClick={() => {
                          toggleCompleteCurrentLesson();
                        }}
                        className={`w-full px-3 py-1.5 rounded-lg text-xs font-extrabold transition cursor-pointer flex items-center justify-center gap-1.5 ${
                          isCurrentLessonDone
                            ? 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                            : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                        }`}
                      >
                        {isCurrentLessonDone
                          ? `⬜ Desmarcar Aula ${String(currentLesson.num).padStart(2, '0')} como Concluída`
                          : `✅ Concluir Aula Atual (Aula ${String(currentLesson.num).padStart(2, '0')})`}
                      </button>
                    )}

                    {progress.nextPendingLesson && (
                      <button
                        type="button"
                        onClick={() => {
                          setCurrentLessonId(progress.nextPendingLesson!.id);
                          setCurrentTab('tab-apostila');
                          setShowProgressPanel(false);
                        }}
                        className="w-full px-3 py-1.5 rounded-lg bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold transition cursor-pointer truncate"
                      >
                        ▶ Próxima pendente: Aula{' '}
                        {String(progress.nextPendingLesson.num).padStart(2, '0')} —{' '}
                        {progress.nextPendingLesson.title}
                      </button>
                    )}
                  </div>
                </div>
              )}

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
                Edital nº 25/2026 + Retificação nº 01 (Edital nº 28/2026 — Banca IBGP)
              </p>
              <p>
                Prova: <strong>13/12/2026 (Tarde — 14h45 às 17h45)</strong> &bull; Vencimento:{' '}
                <strong>R$ 3.242,00 (40h) + Insalubridade + Benefícios</strong> &bull; 140 Vagas (40 Imediatas + 100 CR) &bull; Códigos 340 a 356
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

