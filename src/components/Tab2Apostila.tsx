import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { useApp } from '../context/AppContext';
import { getStatusMeta, getCatBadgeClass } from '../utils/status';
import { LessonMindMapView } from './LessonMindMapView';
import { buildVFChallenges, matchesLessonBlockFilter } from '../services/lessonService';
import { StatusSelector } from '../features/progress/StatusSelector';
import { LessonSidebar } from '../features/lessons/LessonSidebar';
import { DidacticToolbar } from '../features/lessons/DidacticToolbar';
import { PautaLocator } from '../features/lessons/PautaLocator';
import { VFTrainerSection } from '../features/lessons/VFTrainerSection';
import { LessonBlockItem } from '../features/lessons/LessonBlockItem';

export const Tab2Apostila: React.FC = () => {
  const {
    appData,
    currentLessonId,
    setCurrentLessonId,
    getTopicStatus,
    updateTopicStatus,
    currentStudyMode,
    setCurrentStudyMode,
    setCurrentTab,
    lessonAnswers,
    setLessonAnswers,
    showToast,
  } = useApp();

  const [searchTerm, setSearchTerm] = useState('');
  const [catFilter, setCatFilter] = useState<string>('ALL');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [openBlocks, setOpenBlocks] = useState<Record<number, boolean>>({ 0: true, 1: true });
  const [blockModes, setBlockModes] = useState<Record<number, 'ALL' | 'A' | 'B' | 'C'>>({});
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});
  const [lessonSearchTerm, setLessonSearchTerm] = useState('');
  const [blockTypeFilter, setBlockTypeFilter] = useState<'ALL' | 'THEORY' | 'QUIZ' | 'FLASHCARDS'>('ALL');
  const [clozeMode, setClozeMode] = useState(false);
  const [revealedClozeIds, setRevealedClozeIds] = useState<Set<string>>(new Set());
  const [showVFTrainer, setShowVFTrainer] = useState(false);

  const lessons = appData?.lessons || [];

  const filteredLessons = useMemo(() => {
    return lessons.filter((l) => {
      if (catFilter !== 'ALL' && l.cat !== catFilter) return false;
      const st = getTopicStatus(l.id);
      if (statusFilter !== 'ALL' && st !== statusFilter) return false;
      if (searchTerm.trim()) {
        const q = searchTerm.toLowerCase();
        const inTitle = l.title.toLowerCase().includes(q);
        const inRef = (l.editalRef || '').toLowerCase().includes(q);
        const inBlocks = (l.blocks || []).some((b) =>
          (b.title || '').toLowerCase().includes(q)
        );
        return inTitle || inRef || inBlocks;
      }
      return true;
    });
  }, [lessons, catFilter, statusFilter, searchTerm, getTopicStatus]);

  const activeLesson = useMemo(() => {
    return (
      lessons.find((l) => l.id === currentLessonId) ||
      filteredLessons[0] ||
      lessons[0]
    );
  }, [lessons, currentLessonId, filteredLessons]);

  const vfChallenges = useMemo(
    () => (activeLesson ? buildVFChallenges(activeLesson) : []),
    [activeLesson]
  );

  useEffect(() => {
    if (!activeLesson) return;
    const allOpen: Record<number, boolean> = {};
    (activeLesson.blocks || []).forEach((_, idx) => {
      allOpen[idx] = true;
    });
    setOpenBlocks(allOpen);
    setLessonSearchTerm('');
    setBlockTypeFilter('ALL');
    setRevealedClozeIds(new Set());
  }, [activeLesson?.id]);

  const handleSelectLesson = useCallback(
    (id: string) => {
      setCurrentLessonId(id);
      const allOpen: Record<number, boolean> = {};
      const targetLesson = lessons.find((l) => l.id === id);
      if (targetLesson) {
        (targetLesson.blocks || []).forEach((_, idx) => {
          allOpen[idx] = true;
        });
      } else {
        allOpen[0] = true;
        allOpen[1] = true;
      }
      setOpenBlocks(allOpen);
      setBlockModes({});
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [lessons, setCurrentLessonId]
  );

  const jumpToLessonAndBlock = useCallback(
    (lessonId: string, blockIdx: number) => {
      setCatFilter('ALL');
      setStatusFilter('ALL');
      setSearchTerm('');
      setCurrentLessonId(lessonId);
      setOpenBlocks((prev) => ({ ...prev, [blockIdx]: true }));
      setTimeout(() => {
        const el = document.getElementById(`lesson-block-${blockIdx}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 80);
    },
    [setCurrentLessonId]
  );

  const handleContentContainerClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const target = e.target as HTMLElement;
      const clozeEl = target.closest('[data-cloze-id]') as HTMLElement | null;
      if (clozeEl) {
        e.preventDefault();
        const cid = clozeEl.getAttribute('data-cloze-id');
        if (cid) {
          setRevealedClozeIds((prev) => {
            const next = new Set(prev);
            if (next.has(cid)) next.delete(cid);
            else next.add(cid);
            return next;
          });
        }
        return;
      }

      const anchor = target.closest('a') as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute('href') || '';
      if (!href) return;

      const match = href.match(/02_Aulas_Markdown\/[^/]+\/Aula_(\d+)_/i);
      if (match) {
        e.preventDefault();
        const num = parseInt(match[1], 10);
        const found = lessons.find((l) => l.num === num);
        if (found) {
          handleSelectLesson(found.id);
          showToast(`Navegando para a Aula ${String(found.num).padStart(2, '0')}: ${found.title}`);
        }
        return;
      }

      if (/Fichas_14_Endemias/i.test(href)) {
        e.preventDefault();
        setCurrentTab('tab-endemias');
        showToast('Abrindo Fichas Sinópticas das 14 Endemias...');
        return;
      }
      if (/Banco_500_Questoes/i.test(href)) {
        e.preventDefault();
        setCurrentTab('tab-simulado');
        showToast('Abrindo Banco de Questões e Simulados...');
        return;
      }
      if (/Indice_Fontes|Matriz_Rastreabilidade/i.test(href)) {
        e.preventDefault();
        setCurrentTab('tab-biblioteca');
        showToast('Abrindo Biblioteca e Matriz de Rastreabilidade...');
      }
    },
    [lessons, handleSelectLesson, setCurrentTab, showToast]
  );

  const handleSelectAnswer = useCallback(
    (qKey: string, optIdx: number) => {
      setLessonAnswers((prev) => ({ ...prev, [qKey]: optIdx }));
    },
    [setLessonAnswers]
  );

  const handleToggleFlipCard = useCallback((cardKey: string) => {
    setFlippedCards((prev) => ({ ...prev, [cardKey]: !prev[cardKey] }));
  }, []);

  const visibleBlocks = useMemo(() => {
    if (!activeLesson) return [];
    return (activeLesson.blocks || [])
      .map((block, index) => ({ block, index }))
      .filter(({ block }) => matchesLessonBlockFilter(block, blockTypeFilter, lessonSearchTerm));
  }, [activeLesson, blockTypeFilter, lessonSearchTerm]);

  if (!activeLesson) {
    return (
      <div className="p-8 text-center text-slate-600 bg-white rounded-2xl border border-slate-200">
        Carregando aulas da apostila...
      </div>
    );
  }

  const currentStatus = getTopicStatus(activeLesson.id);
  const currentIdx = lessons.findIndex((l) => l.id === activeLesson.id);
  const prevLesson = currentIdx > 0 ? lessons[currentIdx - 1] : null;
  const nextLesson =
    currentIdx >= 0 && currentIdx < lessons.length - 1 ? lessons[currentIdx + 1] : null;

  const sourcesArray: number[] = Array.isArray(activeLesson.sources)
    ? activeLesson.sources
    : activeLesson.sources?.value || [];

  return (
    <div className="space-y-4">
      {/* Top Pauta Oficial Locator */}
      <PautaLocator
        activeLessonId={activeLesson.id}
        onJumpToLessonBlock={jumpToLessonAndBlock}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Sidebar */}
        <LessonSidebar
          lessons={lessons}
          filteredLessons={filteredLessons}
          activeLessonId={activeLesson.id}
          onSelectLesson={handleSelectLesson}
          searchTerm={searchTerm}
          onChangeSearch={setSearchTerm}
          catFilter={catFilter}
          onChangeCatFilter={setCatFilter}
          statusFilter={statusFilter}
          onChangeStatusFilter={setStatusFilter}
          getTopicStatus={getTopicStatus}
        />

        {/* Main Content Viewer */}
        <div
          className="lg:col-span-9 space-y-5"
          onClick={handleContentContainerClick}
        >
          {/* Lesson Header Banner */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-extrabold uppercase ${getCatBadgeClass(
                      activeLesson.cat
                    )}`}
                  >
                    Aula {String(activeLesson.num).padStart(2, '0')} &bull; {activeLesson.catName}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-300">
                    {activeLesson.weight}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                    🛡️ {activeLesson.auditBadge}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                  {activeLesson.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  <strong>Tópico do Edital (Anexo IV):</strong> {activeLesson.editalRef}
                </p>
                {sourcesArray.length > 0 && (
                  <p className="text-xs text-slate-500">
                    <strong>Fontes Documentais:</strong>{' '}
                    {sourcesArray.map((n) => `#${n}`).join(', ')}
                  </p>
                )}
              </div>

              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 no-print">
                <span className="block text-[10px] font-extrabold uppercase tracking-wider text-slate-500 mb-1.5">
                  Status desta Aula:
                </span>
                <StatusSelector
                  currentStatus={currentStatus}
                  onChange={(st) => updateTopicStatus(activeLesson.id, st)}
                  size="sm"
                />
              </div>
            </div>

            {/* Study Mode & Active Lab Toolbar */}
            <DidacticToolbar
              currentStudyMode={currentStudyMode}
              onChangeStudyMode={setCurrentStudyMode}
              hasMindMap={Boolean(activeLesson.mindMap)}
              lessonSearchTerm={lessonSearchTerm}
              onChangeSearch={setLessonSearchTerm}
              blockTypeFilter={blockTypeFilter}
              onChangeBlockTypeFilter={setBlockTypeFilter}
              clozeMode={clozeMode}
              onToggleClozeMode={() => setClozeMode((prev) => !prev)}
              revealedClozeCount={revealedClozeIds.size}
              onResetRevealedCloze={() => setRevealedClozeIds(new Set())}
              onExpandAll={() => {
                const all: Record<number, boolean> = {};
                (activeLesson.blocks || []).forEach((_, idx) => {
                  all[idx] = true;
                });
                setOpenBlocks(all);
              }}
              onCollapseAll={() => setOpenBlocks({})}
              showVFTrainer={showVFTrainer}
              onToggleVFTrainer={() => setShowVFTrainer((v) => !v)}
              vfCount={vfChallenges.length}
            />
          </div>

          {/* Interactive True/False Trainer */}
          <VFTrainerSection
            lessonId={activeLesson.id}
            challenges={vfChallenges}
            isOpen={showVFTrainer}
            onClose={() => setShowVFTrainer(false)}
          />

          {/* Interactive Mind Map Section */}
          {activeLesson.mindMap &&
            (currentStudyMode === 'ALL' || currentStudyMode === 'MAPA') && (
              <LessonMindMapView
                mindMap={activeLesson.mindMap}
                lessonNum={activeLesson.num}
                lessonId={activeLesson.id}
              />
            )}

          {/* Lesson Content Blocks */}
          {currentStudyMode !== 'MAPA' && (
            <div className="space-y-4">
              {visibleBlocks.length === 0 ? (
                <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center">
                  <p className="text-slate-600 font-bold text-sm mb-2">
                    Nenhum bloco corresponde ao filtro atual.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setLessonSearchTerm('');
                      setBlockTypeFilter('ALL');
                    }}
                    className="px-3 py-1.5 rounded-lg text-xs font-bold bg-teal-700 text-white hover:bg-teal-800 cursor-pointer"
                  >
                    Limpar Filtros da Aula
                  </button>
                </div>
              ) : (
                visibleBlocks.map(({ block, index: bIdx }) => {
                  const localMode =
                    blockModes[bIdx] ||
                    (currentStudyMode === 'ALL' ? 'ALL' : (currentStudyMode as 'A' | 'B' | 'C'));

                  return (
                    <LessonBlockItem
                      key={`${activeLesson.id}_block_${bIdx}`}
                      lessonId={activeLesson.id}
                      block={block}
                      blockIndex={bIdx}
                      isOpen={Boolean(openBlocks[bIdx])}
                      onToggleOpen={() =>
                        setOpenBlocks((prev) => ({ ...prev, [bIdx]: !prev[bIdx] }))
                      }
                      currentMode={localMode}
                      onChangeMode={(mode) => {
                        setOpenBlocks((prev) => ({ ...prev, [bIdx]: true }));
                        setBlockModes((prev) => ({ ...prev, [bIdx]: mode }));
                      }}
                      clozeMode={clozeMode}
                      revealedClozeIds={revealedClozeIds}
                      searchTerm={lessonSearchTerm}
                      lessonAnswers={lessonAnswers}
                      onSelectAnswer={handleSelectAnswer}
                      flippedCards={flippedCards}
                      onToggleFlipCard={handleToggleFlipCard}
                    />
                  );
                })
              )}
            </div>
          )}

          {/* Bottom Lesson Navigation */}
          <div className="bg-white rounded-2xl border border-slate-200 p-4 flex flex-wrap items-center justify-between gap-3 shadow-sm no-print">
            <div>
              {prevLesson && (
                <button
                  type="button"
                  onClick={() => handleSelectLesson(prevLesson.id)}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition cursor-pointer"
                >
                  ⬅ Aula {String(prevLesson.num).padStart(2, '0')}:{' '}
                  {prevLesson.title.slice(0, 32)}...
                </button>
              )}
            </div>

            <button
              type="button"
              onClick={() =>
                updateTopicStatus(
                  activeLesson.id,
                  currentStatus === 'completed' ? 'mastered' : 'completed'
                )
              }
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold shadow-sm transition cursor-pointer"
            >
              {currentStatus === 'completed'
                ? '🏆 Marcar Aula como Dominada'
                : '✅ Concluir Estudo desta Aula'}
            </button>

            <div>
              {nextLesson && (
                <button
                  type="button"
                  onClick={() => handleSelectLesson(nextLesson.id)}
                  className="px-4 py-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold transition cursor-pointer"
                >
                  Próxima: Aula {String(nextLesson.num).padStart(2, '0')} ➔
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
