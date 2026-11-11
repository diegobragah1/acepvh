import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { useApp } from '../context/AppContext';
import { questionIdentity } from '../utils/questionIdentity';
import { LessonMindMapView } from './LessonMindMapView';
import { buildVFChallenges, matchesLessonBlockFilter } from '../services/lessonService';
import { StatusSelector } from '../features/progress/StatusSelector';
import { LessonSidebar } from '../features/lessons/LessonSidebar';
import { DidacticToolbar } from '../features/lessons/DidacticToolbar';
import { PautaLocator } from '../features/lessons/PautaLocator';
import { VFTrainerSection } from '../features/lessons/VFTrainerSection';
import { LessonBlockItem } from '../features/lessons/LessonBlockItem';
import { VisualMemorizationBoard } from '../features/lessons/VisualMemorizationBoard';
import { QuestionCard } from '../features/questions/QuestionCard';
import { FlashcardGrid } from '../features/flashcards/FlashcardGrid';

export const Tab2Apostila: React.FC = () => {
  const {
    appData,
    currentLessonId,
    setCurrentLessonId,
    getTopicStatus,
    updateTopicStatus,
    isSubtopicCompleted,
    toggleSubtopicComplete,
    currentStudyMode,
    setCurrentStudyMode,
    setCurrentTab,
    lessonAnswers,
    setLessonAnswers,
    showToast,
    globalSearchTarget,
  } = useApp();

  const [searchTerm, setSearchTerm] = useState('');
  const [catFilter, setCatFilter] = useState<string>('ALL');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
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
    if (
      globalSearchTarget &&
      globalSearchTarget.type === 'aula' &&
      globalSearchTarget.lessonId === activeLesson.id &&
      Date.now() - globalSearchTarget.timestamp < 5000
    ) {
      setLessonSearchTerm(globalSearchTarget.query);
      setBlockTypeFilter('ALL');
      setRevealedClozeIds(new Set());
      const targetBlockIdx = globalSearchTarget.blockIdx ?? 0;
      setTimeout(() => {
        const el = document.getElementById(`lesson-block-${targetBlockIdx}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      return;
    }
    setLessonSearchTerm('');
    setBlockTypeFilter('ALL');
    setRevealedClozeIds(new Set());
  }, [activeLesson?.id, globalSearchTarget]);

  const handleSelectLesson = useCallback(
    (id: string) => {
      setCurrentLessonId(id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [setCurrentLessonId]
  );

  const jumpToLessonAndBlock = useCallback(
    (lessonId: string, blockIdx: number) => {
      setCatFilter('ALL');
      setStatusFilter('ALL');
      setSearchTerm('');
      setCurrentLessonId(lessonId);
      if (currentStudyMode === 'MAPA' || currentStudyMode === 'VISUAL' || currentStudyMode === 'C') {
        setCurrentStudyMode('ALL');
      }
      setTimeout(() => {
        const el = document.getElementById(`lesson-block-${blockIdx}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 80);
    },
    [setCurrentLessonId, currentStudyMode, setCurrentStudyMode]
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

  const consolidatedQuestions = useMemo(() => {
    const items: Array<{ q: NonNullable<typeof visibleBlocks[number]['block']['questions']>[number]; bIdx: number; qIdx: number; blockTitle: string }> = [];
    for (const { block, index: bIdx } of visibleBlocks) {
      (block.questions || []).forEach((q, qIdx) => {
        items.push({ q, bIdx, qIdx, blockTitle: block.title });
      });
    }
    return items;
  }, [visibleBlocks]);

  const consolidatedFlashcards = useMemo(() => {
    const groups: Array<{ flashcards: NonNullable<typeof visibleBlocks[number]['block']['flashcards']>; bIdx: number; blockTitle: string }> = [];
    for (const { block, index: bIdx } of visibleBlocks) {
      if (block.flashcards && block.flashcards.length > 0) {
        groups.push({ flashcards: block.flashcards, bIdx, blockTitle: block.title });
      }
    }
    return groups;
  }, [visibleBlocks]);

  const totalFlashcardCount = useMemo(
    () => consolidatedFlashcards.reduce((acc, g) => acc + g.flashcards.length, 0),
    [consolidatedFlashcards]
  );

  if (!activeLesson) {
    return (
      <div className="p-6 text-center text-slate-600 bg-white rounded-xl border border-slate-200">
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

  const showContinuousTheory =
    currentStudyMode !== 'MAPA' &&
    currentStudyMode !== 'VISUAL' &&
    currentStudyMode !== 'C' &&
    blockTypeFilter !== 'QUIZ' &&
    blockTypeFilter !== 'FLASHCARDS';

  const showConsolidatedPractice =
    currentStudyMode !== 'MAPA' &&
    currentStudyMode !== 'VISUAL' &&
    (currentStudyMode === 'ALL' ||
      currentStudyMode === 'C' ||
      blockTypeFilter === 'QUIZ' ||
      blockTypeFilter === 'FLASHCARDS');

  return (
    <div className="space-y-2.5 sm:space-y-3.5">
      {/* Top Pauta Oficial Locator */}
      <PautaLocator
        activeLessonId={activeLesson.id}
        onJumpToLessonBlock={jumpToLessonAndBlock}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-5 items-start">
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
          className="lg:col-span-9 space-y-3 sm:space-y-4 min-w-0"
          onClick={handleContentContainerClick}
        >
          {/* Compact Lesson Header Banner */}
          <div className="bg-white rounded-xl border border-slate-200 p-3.5 sm:p-4 shadow-xs space-y-3">
            <div className="flex flex-wrap items-start justify-between gap-2.5">
              <div className="space-y-1 min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-600 font-semibold">
                  <span className="font-extrabold text-teal-800">
                    Aula {String(activeLesson.num).padStart(2, '0')} &middot; {activeLesson.catName}
                  </span>
                  <span aria-hidden="true">&middot;</span>
                  <span>{activeLesson.weight}</span>
                  {sourcesArray.length > 0 && (
                    <>
                      <span aria-hidden="true">&middot;</span>
                      <span className="text-slate-500">
                        Fontes: {sourcesArray.map((n) => `#${n}`).join(', ')}
                      </span>
                    </>
                  )}
                </div>
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
                  {activeLesson.title}
                </h2>
                <p className="text-xs text-slate-600 leading-normal">
                  <strong>Edital (Anexo IV):</strong> {activeLesson.editalRef}
                </p>
              </div>

              <div className="bg-slate-50 px-2.5 py-2 rounded-lg border border-slate-200 no-print w-full sm:w-auto max-w-full">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Status da Aula:
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

          {/* Dedicated Per-Lesson Tab: Mapa Mental */}
          {activeLesson.mindMap && currentStudyMode === 'MAPA' && (
            <LessonMindMapView
              mindMap={activeLesson.mindMap}
              lessonNum={activeLesson.num}
              lessonId={activeLesson.id}
            />
          )}

          {/* Dedicated Per-Lesson Tab: Apostila Interativa de Memorização Visual */}
          {currentStudyMode === 'VISUAL' && (
            <VisualMemorizationBoard
              key={activeLesson.id}
              lesson={activeLesson}
              onJumpToLessonBlock={(blockIdx) => jumpToLessonAndBlock(activeLesson.id, blockIdx)}
            />
          )}

          {/* Continuous Integral Text Apostila Sheet */}
          {currentStudyMode !== 'MAPA' && currentStudyMode !== 'VISUAL' && (
            <>
              {visibleBlocks.length === 0 ? (
                <div className="bg-white rounded-xl border border-slate-200 p-6 text-center">
                  <p className="text-slate-600 font-bold text-sm mb-2">
                    Nenhum conteúdo corresponde ao filtro atual.
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
                <>
                  {showContinuousTheory && (
                    <article className="apostila-sheet">
                      {/* Resumo Prioritário da Lei Orgânica de Porto Velho (sem substituir o texto integral dos 249 artigos) */}
                      {activeLesson.id === 'leg_1' && (
                        <div className="mb-4 p-4 rounded-xl bg-amber-50/80 border-2 border-amber-300 text-xs text-slate-800 space-y-2.5">
                          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-200 pb-1.5">
                            <span className="font-black text-amber-950 uppercase tracking-wide text-xs sm:text-sm">
                              🎯 Resumo Prioritário de Prova (Banca IBGP) — Artigos de Maior Cobrança na LOM Porto Velho
                            </span>
                            <span className="px-2 py-0.5 rounded bg-amber-200 text-amber-950 font-extrabold text-[10px]">
                              Guia de Revisão Rápida + Texto Integral Abaixo (249 Artigos)
                            </span>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 leading-relaxed">
                            <div className="p-2.5 rounded-lg bg-white border border-amber-200">
                              <strong className="lom-art-tag block">Arts. 1º a 6º e 42 a 44</strong>
                              Símbolos oficiais: Bandeira, Hino e Brasão (Art. 3º). Patrimônio natural exclusivo: boto do Rio Madeira (Art. 5º, VII). Criação, organização e supressão de Distritos por Lei Municipal (Art. 2º e Arts. 42 a 44 — 1/5 dos requisitos e 50 moradias na Vila).
                            </div>
                            <div className="p-2.5 rounded-lg bg-white border border-amber-200">
                              <strong className="lom-art-tag block">Arts. 7º, 7º-A e 8º</strong>
                              <strong>Art. 7º (Privativa):</strong> legislar sobre interesse local, tributos municipais (IPTU, ITBI, ISS) e transporte coletivo (mínimo 3 empresas). <strong>Art. 7º-A:</strong> limpeza pública/varrição indelegável. <strong>Art. 8º (Comum c/ União e RO):</strong> saúde, assistência pública, meio ambiente e saneamento.
                            </div>
                            <div className="p-2.5 rounded-lg bg-white border border-amber-200">
                              <strong className="lom-art-tag block">Arts. 9º a 41</strong>
                              Princípios administrativos (Art. 9º), reserva mínima de 10% para PcD na LOM (Art. 11, parágrafo único), vedação de nome de pessoas vivas ou falecidas há menos de 90 dias em logradouros (Art. 24) e redução de até 50% da jornada para servidor responsável por PcD (Art. 31).
                            </div>
                            <div className="p-2.5 rounded-lg bg-white border border-amber-200">
                              <strong className="lom-art-tag block">Arts. 62 a 75</strong>
                              <strong>Emenda à LOM (Art. 62):</strong> proposta por 1/3 dos Vereadores, Prefeito, 50 entidades ou 5% do eleitorado; votada em 2 turnos (interstício mínimo de 10 dias), aprovada por <strong>2/3</strong> e promulgada pela Mesa da Câmara. <strong>Contas do Prefeito (Art. 75):</strong> parecer prévio do TCE-RO só deixa de prevalecer por voto de <strong>2/3</strong> da Câmara.
                            </div>
                            <div className="p-2.5 rounded-lg bg-white border border-amber-200">
                              <strong className="lom-art-tag block">Arts. 72, 80, 83 e 85</strong>
                              Posse em até <strong>10 dias</strong> (Art. 80). Ausência do Município ou Estado por mais de <strong>15 dias consecutivos</strong> exige licença prévia da Câmara sob pena de perda do cargo (Art. 85). Veto total ou parcial em <strong>15 dias úteis</strong> e apreciação em 30 dias por maioria absoluta (Art. 72).
                            </div>
                            <div className="p-2.5 rounded-lg bg-white border border-amber-200">
                              <strong className="lom-art-tag block">Arts. 150 a 153, 171 a 180 e 235</strong>
                              Saneamento básico e vedação de aterros à margem de rios e mananciais (Art. 151); direito à saúde, ações de vigilância epidemiológica, sanitária e controle de zoonoses, vedação de subvenção pública a instituições privadas lucrativas (Art. 173, § 3º) e Fundo Municipal de Saúde (Art. 235).
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Compact Continuous Apostila Intro Banner */}
                      <div className="apostila-intro-banner">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="font-bold text-[#123b59] text-xs sm:text-sm">
                            📄 Texto Integral Contínuo &amp; Destaques de Prova ({visibleBlocks.length} seções)
                          </span>
                          <span className="text-xs font-bold text-teal-800">
                            ✅{' '}
                            {
                              (activeLesson.blocks || []).filter((_, idx) =>
                                isSubtopicCompleted(activeLesson.id, idx)
                              ).length
                            }
                            /{activeLesson.blocks?.length || 0} tópicos concluídos nesta aula
                          </span>
                        </div>

                        {/* Quick Section Index inside the continuous sheet */}
                        {visibleBlocks.length > 1 && (
                          <div className="mt-2 pt-1.5 border-t border-blue-200/70 flex flex-wrap items-center gap-1 no-print">
                            <span className="text-[11px] font-bold text-[#123b59] mr-1">
                              Seções:
                            </span>
                            {visibleBlocks.map(({ block, index: bIdx }) => {
                              const done = isSubtopicCompleted(activeLesson.id, bIdx);
                              return (
                                <button
                                  key={bIdx}
                                  type="button"
                                  onClick={() => {
                                    const el = document.getElementById(`lesson-block-${bIdx}`);
                                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                  }}
                                  className={`px-2 py-0.5 rounded border text-[11px] font-semibold transition cursor-pointer ${
                                    done
                                      ? 'bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border-emerald-300'
                                      : 'bg-white hover:bg-blue-100 text-[#123b59] border-blue-200'
                                  }`}
                                >
                                  {done ? '✓ ' : ''}
                                  {bIdx + 1}. {block.title.replace(/^\d+\.\s*/, '').slice(0, 38)}
                                  {block.title.length > 40 ? '…' : ''}
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>

                      {/* Continuous Sections Flow */}
                      <div>
                        {visibleBlocks.map(({ block, index: bIdx }) => (
                          <LessonBlockItem
                            key={`${activeLesson.id}_block_${bIdx}`}
                            lessonId={activeLesson.id}
                            block={block}
                            blockIndex={bIdx}
                            currentMode={
                              currentStudyMode === 'ALL'
                                ? 'ALL'
                                : (currentStudyMode as 'A' | 'B' | 'C')
                            }
                            clozeMode={clozeMode}
                            revealedClozeIds={revealedClozeIds}
                            searchTerm={lessonSearchTerm}
                            isCompleted={isSubtopicCompleted(activeLesson.id, bIdx)}
                            onToggleComplete={() => toggleSubtopicComplete(activeLesson.id, bIdx)}
                          />
                        ))}
                      </div>
                    </article>
                  )}

                  {/* Consolidated Practice Section (Questions & Flashcards at the end of the continuous text) */}
                  {showConsolidatedPractice &&
                    (consolidatedQuestions.length > 0 || totalFlashcardCount > 0) && (
                      <section
                        id="lesson-fixacao-section"
                        className="scroll-mt-20 bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-4 min-w-0 max-w-full overflow-hidden"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2.5">
                          <div>
                            <span className="text-xs font-extrabold uppercase tracking-wider text-amber-900">
                              ✍️ Caderno de Fixação Prática da Aula
                            </span>
                            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mt-0.5">
                              Questões Comentadas ({consolidatedQuestions.length}) &amp; Flashcards ({totalFlashcardCount})
                            </h3>
                          </div>
                          <span className="text-xs text-slate-500">
                            Fixação ativa após a leitura contínua
                          </span>
                        </div>

                        {/* Consolidated Questions */}
                        {blockTypeFilter !== 'FLASHCARDS' && consolidatedQuestions.length > 0 && (
                          <div className="space-y-2.5 min-w-0">
                            {consolidatedQuestions.map(({ q, bIdx, qIdx }, globalIdx) => {
                              const qKey = questionIdentity(
                                `${activeLesson.id}_b${bIdx}_q${qIdx}`,
                                q
                              );
                              return (
                                <QuestionCard
                                  key={qKey}
                                  question={q}
                                  index={globalIdx}
                                  selectedOption={lessonAnswers[qKey]}
                                  onSelectOption={(optIdx) => handleSelectAnswer(qKey, optIdx)}
                                  compact
                                />
                              );
                            })}
                          </div>
                        )}

                        {/* Consolidated Flashcards */}
                        {blockTypeFilter !== 'QUIZ' && totalFlashcardCount > 0 && (
                          <div className="space-y-3 pt-2 border-t border-slate-200 min-w-0 max-w-full">
                            <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-700">
                              🃏 Flashcards de Memorização Ativa ({totalFlashcardCount} cartões — toque para virar)
                            </h4>
                            <div className="space-y-3 min-w-0 max-w-full">
                              {consolidatedFlashcards.map(({ flashcards, bIdx, blockTitle }) => (
                                <div key={`fc_group_${bIdx}`} className="space-y-1.5 min-w-0 max-w-full">
                                  <div className="text-xs font-bold text-slate-500 break-words">
                                    Eixo {bIdx + 1}: {blockTitle}
                                  </div>
                                  <FlashcardGrid
                                    flashcards={flashcards}
                                    flippedCards={flippedCards}
                                    onToggleFlip={handleToggleFlipCard}
                                    keyPrefix={`${activeLesson.id}_b${bIdx}_fc`}
                                    columnsClass="grid-cols-1 sm:grid-cols-2"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </section>
                    )}
                </>
              )}
            </>
          )}

          {/* Bottom Lesson Navigation */}
          <div className="bg-white rounded-xl border border-slate-200 p-3.5 flex flex-wrap items-center justify-between gap-2.5 shadow-xs no-print">
            <div>
              {prevLesson && (
                <button
                  type="button"
                  onClick={() => handleSelectLesson(prevLesson.id)}
                  className="px-3.5 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition cursor-pointer"
                >
                  ⬅ Aula {String(prevLesson.num).padStart(2, '0')}:{' '}
                  {prevLesson.title.slice(0, 28)}...
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
              className="px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold shadow-xs transition cursor-pointer"
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
                  className="px-3.5 py-2 rounded-lg bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold transition cursor-pointer"
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
