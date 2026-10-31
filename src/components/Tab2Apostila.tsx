import React, { useState, useMemo, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { getStatusMeta } from '../utils/status';
import { renderMarkdownToHtml } from '../utils/markdown';
import { toSafeString } from '../utils/normalizeData';
import { TopicStatus, Source } from '../types';
import { LessonMindMapView } from './LessonMindMapView';
import { PAUTA_ESPECIFICA_ITEMS, PAUTA_LEGISLACAO_ITEMS, PAUTA_PORTUGUES_ITEMS, PAUTA_RLM_ITEMS, PAUTA_GERAIS_ITEMS, ALL_PAUTA_ITEMS } from '../data/pautaEspecificaMap';

interface VFChallengeItem {
  id: string;
  statement: string;
  isTrue: boolean;
  explanation: string;
  blockTitle: string;
}

export const Tab2Apostila: React.FC = () => {
  const {
    appData,
    currentLessonId,
    setCurrentLessonId,
    getTopicStatus,
    updateTopicStatus,
    currentStudyMode,
    setCurrentStudyMode,
    toggleCompleteCurrentLesson,
    lessonAnswers,
    setLessonAnswers
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  // Interactive In-Lesson Pedagogical States
  const [inLessonQuery, setInLessonQuery] = useState('');
  const [blockTypeFilter, setBlockTypeFilter] = useState<'all' | 'theory' | 'law' | 'pending_q'>('all');
  const [clozeMode, setClozeMode] = useState(false);
  const [revealedClozeIds, setRevealedClozeIds] = useState<Record<string, boolean>>({});
  const [collapsedBlocks, setCollapsedBlocks] = useState<Record<string, boolean>>({});
  const [vfAnswers, setVfAnswers] = useState<Record<string, boolean>>({});
  const [showVFTrainer, setShowVFTrainer] = useState(true);
  const [showPautaLocator, setShowPautaLocator] = useState(true);
  const [pautaOnlyHighlighted, setPautaOnlyHighlighted] = useState(false);
  const [pautaDisciplineTab, setPautaDisciplineTab] = useState<'esp' | 'leg' | 'por' | 'rlm' | 'atu' | 'all'>('esp');

  // Track chosen answers for current lesson questions: qKey -> optionIndex
  // Track flipped flashcards: fcKey -> boolean
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const lessons = appData?.lessons || [];
  const currentIndex = lessons.findIndex(l => l.id === currentLessonId);
  const currentLesson = currentIndex >= 0 ? lessons[currentIndex] : lessons[0];

  // Reset in-lesson search when switching lessons
  useEffect(() => {
    setInLessonQuery('');
    setBlockTypeFilter('all');
    setRevealedClozeIds({});
  }, [currentLesson?.id]);

  // Filtering lessons for the sidebar
  const filteredLessons = lessons.filter(l => {
    if (categoryFilter !== 'all' && l.cat !== categoryFilter) return false;
    const st = getTopicStatus(l.id);
    if (statusFilter !== 'all' && st !== statusFilter) return false;

    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();
    const inTitle = (l.title || '').toLowerCase().includes(q) || (l.editalRef && l.editalRef.toLowerCase().includes(q));
    const inMindMap =
      l.mindMap &&
      ((l.mindMap.centralTitle || '').toLowerCase().includes(q) ||
        (l.mindMap.mnemonic || '').toLowerCase().includes(q) ||
        (l.mindMap.deadlinesAndNumbers || []).some(
          d => (d.value || '').toLowerCase().includes(q) || (d.label || '').toLowerCase().includes(q)
        ) ||
        (l.mindMap.branches || []).some(
          br =>
            (br.title || '').toLowerCase().includes(q) ||
            (br.nodes || []).some(n => (n.label || '').toLowerCase().includes(q) || (n.detail || '').toLowerCase().includes(q))
        ));
    const inBlocks = (l.blocks || []).some(b =>
      (b.title || '').toLowerCase().includes(q) ||
      (b.modoA && b.modoA.toLowerCase().includes(q)) ||
      (b.modoB && b.modoB.toLowerCase().includes(q)) ||
      (b.modoA_markdown && b.modoA_markdown.toLowerCase().includes(q)) ||
      (b.modoB_markdown && b.modoB_markdown.toLowerCase().includes(q))
    );
    return inTitle || Boolean(inMindMap) || inBlocks;
  });

  const currentStatus = currentLesson ? getTopicStatus(currentLesson.id) : 'not_started';
  const meta = getStatusMeta(currentStatus);
  const isDone = currentStatus === 'completed' || currentStatus === 'mastered';

  const toggleFlashcard = (fcKey: string) => {
    setFlippedCards(prev => ({ ...prev, [fcKey]: !prev[fcKey] }));
  };

  const handleAnswerQuestion = (qKey: string, optionIndex: number) => {
    setLessonAnswers(prev => ({ ...prev, [qKey]: optionIndex }));
  };

  const resetBlockQuestions = (lessonId: string, bIdx: number, count: number) => {
    setLessonAnswers(prev => {
      const next = { ...prev };
      for (let i = 0; i < count; i++) {
        delete next[`${lessonId}_b${bIdx}_q${i}`];
      }
      return next;
    });
  };

  const toggleBlockCollapse = (blockKey: string) => {
    setCollapsedBlocks(prev => ({ ...prev, [blockKey]: !prev[blockKey] }));
  };

  const expandAllBlocks = () => {
    if (!currentLesson) return;
    const next: Record<string, boolean> = { ...collapsedBlocks };
    (currentLesson.blocks || []).forEach((_, idx) => {
      next[`${currentLesson.id}_${idx}`] = false;
    });
    setCollapsedBlocks(next);
  };

  const collapseAllBlocks = () => {
    if (!currentLesson) return;
    const next: Record<string, boolean> = { ...collapsedBlocks };
    (currentLesson.blocks || []).forEach((_, idx) => {
      next[`${currentLesson.id}_${idx}`] = true;
    });
    setCollapsedBlocks(next);
  };

  const jumpToLessonAndBlock = (lessonId: string, blockIdx: number) => {
    setCurrentLessonId(lessonId);
    if (currentStudyMode === 'MAPA') {
      setCurrentStudyMode('ALL');
    }
    setBlockTypeFilter('all');
    setInLessonQuery('');
    setCollapsedBlocks(prev => ({ ...prev, [`${lessonId}_${blockIdx}`]: false }));
    setTimeout(() => {
      const el = document.getElementById(`lesson-block-${blockIdx}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 120);
  };

  const goToPrevLesson = () => {
    if (currentIndex > 0) {
      setCurrentLessonId(lessons[currentIndex - 1].id);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  };

  const goToNextLesson = () => {
    if (currentIndex < lessons.length - 1) {
      setCurrentLessonId(lessons[currentIndex + 1].id);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  };

  // Extract sources
  const rawSources = currentLesson?.sources;
  const sourceNums: number[] = Array.isArray(rawSources)
    ? rawSources
    : (rawSources && Array.isArray((rawSources as any).value) ? (rawSources as any).value : []);

  const lessonSources = sourceNums
    .map(num => (appData?.sources || []).find(s => s.num === num))
    .filter((s): s is Source => Boolean(s));

  // Build Interactive True/False ("Certo ou Errado — Pegadinhas IBGP") challenges for the current lesson
  const vfChallenges: VFChallengeItem[] = useMemo(() => {
    if (!currentLesson) return [];
    const items: VFChallengeItem[] = [];
    (currentLesson.blocks || []).forEach((b, bIdx) => {
      (b.questions || []).forEach((qObj, qIdx) => {
        if (!qObj.options || qObj.options.length < 2) return;
        const cleanOpt = (txt: string) => txt.replace(/^[A-E]\)\s*/i, '').trim();
        const isExcept = /EXCETO|INCORRET/i.test(qObj.q);
        if (!isExcept && qObj.options[qObj.ans]) {
          // Create a TRUE item from the correct answer or a FALSE item from a distractor
          const useTrue = (bIdx + qIdx) % 2 === 0;
          if (useTrue) {
            items.push({
              id: `${currentLesson.id}_vf_${bIdx}_${qIdx}_T`,
              statement: `${qObj.q} — Alternativa proposta: ${cleanOpt(qObj.options[qObj.ans])}`,
              isTrue: true,
              explanation: qObj.comment,
              blockTitle: b.title.split('—')[0].trim()
            });
          } else {
            const wrongIdx = (qObj.ans + 1) % qObj.options.length;
            items.push({
              id: `${currentLesson.id}_vf_${bIdx}_${qIdx}_F`,
              statement: `${qObj.q} — Alternativa proposta: ${cleanOpt(qObj.options[wrongIdx])}`,
              isTrue: false,
              explanation: `Esta alternativa não é a resposta indicada pelo gabarito. ${qObj.comment}`,
              blockTitle: b.title.split('—')[0].trim()
            });
          }
        }
      });
    });
    return items.slice(0, 6);
  }, [currentLesson]);

  // Helper to apply live search highlight and Cloze (Active Recall) transformation on rendered HTML
  const processDidacticHtml = (rawHtml: string, blockPrefix: string): string => {
    if (!rawHtml) return '';
    let processed = rawHtml;

    // 1. Highlight in-lesson search matches outside HTML tags
    const query = inLessonQuery.trim();
    if (query.length >= 2) {
      const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`(>[^<]*?)(${escaped})([^<]*?<)`, 'gi');
      processed = processed.replace(regex, '$1<mark class="bg-amber-300 text-slate-950 font-bold px-1 rounded">$2</mark>$3');
    }

    // 2. If Cloze Mode is enabled, style <strong> tags as interactive active-recall chips
    if (clozeMode) {
      let idx = 0;
      processed = processed.replace(/<strong>([\s\S]*?)<\/strong>/gi, (match, inner) => {
        const plain = inner.replace(/<[^>]+>/g, '').trim();
        // Skip purely structural labels like "Art. 1º" or short punctuation
        if (plain.length < 3 || /^Art\.\s*\d+/i.test(plain)) {
          return match;
        }
        const tokenKey = `${blockPrefix}_c${idx++}`;
        const isRevealed = !!revealedClozeIds[tokenKey];
        if (isRevealed) {
          return `<strong data-cloze-key="${tokenKey}" class="cursor-pointer bg-emerald-100 text-emerald-950 border-b-2 border-emerald-600 px-1.5 py-0.5 rounded transition" title="Clique para ocultar novamente">${inner}</strong>`;
        }
        return `<strong data-cloze-key="${tokenKey}" class="cursor-pointer bg-amber-100 hover:bg-amber-200 text-transparent select-none border-b-2 border-dashed border-amber-600 px-1.5 py-0.5 rounded transition relative" title="Clique para revelar o termo-chave">${inner}</strong>`;
      });
    }

    return processed;
  };

  // Delegate clicks on Cloze chips inside dangerouslySetInnerHTML containers
  const handleDidacticContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!clozeMode) return;
    const target = (e.target as HTMLElement).closest('[data-cloze-key]') as HTMLElement | null;
    if (target) {
      const key = target.getAttribute('data-cloze-key');
      if (key) {
        setRevealedClozeIds(prev => ({ ...prev, [key]: !prev[key] }));
      }
    }
  };

  // Compute current lesson stats
  const lessonStats = useMemo(() => {
    if (!currentLesson) return { totalQ: 0, answeredQ: 0, correctQ: 0, totalFC: 0, flippedFC: 0 };
    let totalQ = 0;
    let answeredQ = 0;
    let correctQ = 0;
    let totalFC = 0;
    let flippedFC = 0;

    (currentLesson.blocks || []).forEach((b, bIdx) => {
      (b.questions || []).forEach((q, qIdx) => {
        totalQ++;
        const chosen = lessonAnswers[`${currentLesson.id}_b${bIdx}_q${qIdx}`];
        if (chosen !== undefined) {
          answeredQ++;
          if (chosen === q.ans) correctQ++;
        }
      });
      (b.flashcards || []).forEach((_, fIdx) => {
        totalFC++;
        if (flippedCards[`fc_${currentLesson.id}_${bIdx}_${fIdx}`]) {
          flippedFC++;
        }
      });
    });

    return { totalQ, answeredQ, correctQ, totalFC, flippedFC };
  }, [currentLesson, lessonAnswers, flippedCards]);

  return (
    <section className="flex flex-col lg:flex-row gap-6">
      {/* Sidebar: Lessons Navigation */}
      <aside className="w-full lg:w-80 shrink-0 space-y-4 no-print">
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
              Módulos do Edital ({lessons.length} Aulas)
            </span>
            <span className="text-xs font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200">
              {filteredLessons.length} {filteredLessons.length === 1 ? 'aula' : 'aulas'}
            </span>
          </div>

          {/* Search Box */}
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar aula, lei ou assunto..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:border-teal-500 bg-slate-50"
            />
            <span className="absolute left-2.5 top-2.5 text-slate-400 text-xs">🔍</span>
          </div>

          {/* Category Filter */}
          <div>
            <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1">Disciplina:</label>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white font-medium"
            >
              <option value="all">Todas as Disciplinas ({lessons.length} Aulas)</option>
              <option value="esp">Conhecimentos Específicos ACE ({lessons.filter(l => l.cat === "esp").length} Aulas)</option>
              <option value="leg">Legislação e Direito ({lessons.filter(l => l.cat === "leg").length} Aulas)</option>
              <option value="por">Língua Portuguesa ({lessons.filter(l => l.cat === "por").length} Aulas)</option>
              <option value="rlm">Raciocínio Lógico ({lessons.filter(l => l.cat === "rlm").length} Aulas)</option>
              <option value="atu">Conhecimentos Gerais e Atualidades ({lessons.filter(l => l.cat === "atu").length} Aulas)</option>
            </select>
          </div>

          {/* Status Filter */}
          <div>
            <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1">Status:</label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white font-medium"
            >
              <option value="all">Todos os Status</option>
              <option value="not_started">⚪ Não iniciado</option>
              <option value="studying">📘 Estudando</option>
              <option value="completed">✅ Estudado</option>
              <option value="review">🔄 Revisar</option>
              <option value="mastered">🏆 Dominado</option>
            </select>
          </div>
        </div>

        {/* Scrollable list of lessons */}
        <div
          id="lessonsSidebarList"
          className="bg-white rounded-2xl shadow-sm border border-slate-200 divide-y divide-slate-100 max-h-[750px] overflow-y-auto"
        >
          {filteredLessons.length === 0 ? (
            <div className="p-4 text-xs text-slate-500">Nenhuma aula encontrada para esse filtro.</div>
          ) : (
            filteredLessons.map(l => {
              const isCurrent = l.id === currentLessonId;
              const st = getTopicStatus(l.id);
              const m = getStatusMeta(st);
              return (
                <button
                  key={l.id}
                  type="button"
                  onClick={() => {
                    setCurrentLessonId(l.id);
                    window.scrollTo({ top: 300, behavior: 'smooth' });
                  }}
                  className={`lesson-nav-item w-full text-left p-3 transition flex items-start gap-2.5 ${
                    isCurrent ? 'bg-teal-50 border-l-4 border-teal-600' : 'hover:bg-slate-50'
                  }`}
                >
                  <span
                    className={`mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-lg text-xs font-bold flex-shrink-0 border ${m.badgeClass}`}
                    title={`Status: ${m.label}`}
                  >
                    {m.icon}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      <span>{l.catName.split(' ')[0]} &bull; {l.weight}</span>
                      <span className="text-[10px] font-semibold text-slate-600">{m.label}</span>
                    </div>
                    <div className="text-xs font-bold text-slate-900 leading-snug mt-0.5">{l.title}</div>
                    <div className="text-[10px] text-slate-500 mt-1 flex items-center gap-2">
                      <span>📑 {(l.blocks || []).length} blocos</span>
                      <span>&bull;</span>
                      <span>📝 {l.questionsCount || 0} Q</span>
                      <span>&bull;</span>
                      <span>🗂️ {l.flashcardsCount || 0} FC</span>
                    </div>
                  </div>
                </button>
              );
            })
          )}
        </div>
      </aside>

      {/* Main Lesson Content Area */}
      <main className="flex-1 min-w-0 space-y-5">
        {currentLesson ? (
          <>
            {/* Action Bar */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 flex flex-wrap items-center justify-between gap-3 no-print">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-500">
                  Aula {currentIndex + 1} de {lessons.length}
                </span>
                <span className="text-slate-300">|</span>
                <span className="text-xs font-semibold text-teal-800">
                  {currentLesson.catName}
                </span>
              </div>

              {/* Study Mode Switcher */}
              <div className="flex flex-wrap items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setCurrentStudyMode('ALL')}
                  className={`px-2.5 py-1 rounded-lg transition ${
                    currentStudyMode === 'ALL' ? 'bg-teal-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Todos os Modos
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentStudyMode('MAPA')}
                  className={`px-2.5 py-1 rounded-lg transition ${
                    currentStudyMode === 'MAPA' ? 'bg-teal-600 text-white shadow-sm' : 'text-teal-800 hover:text-slate-900 bg-teal-50/80'
                  }`}
                >
                  🧠 Mapa Mental
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentStudyMode('A')}
                  className={`px-2.5 py-1 rounded-lg transition ${
                    currentStudyMode === 'A' ? 'bg-teal-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Modo A (Teoria e fundamentação)
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentStudyMode('B')}
                  className={`px-2.5 py-1 rounded-lg transition ${
                    currentStudyMode === 'B' ? 'bg-teal-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Modo B (Resumo)
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentStudyMode('C')}
                  className={`px-2.5 py-1 rounded-lg transition ${
                    currentStudyMode === 'C' ? 'bg-teal-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Modo C (Questões)
                </button>
              </div>

              {/* Complete Toggle Button */}
              <button
                type="button"
                onClick={toggleCompleteCurrentLesson}
                className={`px-4 py-2 rounded-xl font-bold text-xs sm:text-sm transition ${
                  isDone
                    ? 'bg-emerald-600 text-white border border-emerald-600 shadow'
                    : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50'
                }`}
              >
                {isDone ? `${meta.icon} Concluído (${meta.label}) • Clique p/ Desmarcar` : 'Marcar Aula como Concluída'}
              </button>
            </div>

            {/* Interactive Didactic Toolbar (In-Lesson Search, Cloze Active Recall, Progress & Block Filters) */}
            <div className="bg-gradient-to-r from-teal-900 via-slate-900 to-slate-900 text-white rounded-2xl p-4 shadow-md border border-teal-700/40 space-y-3 no-print">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-md bg-teal-500/20 border border-teal-400/40 text-teal-300 text-[11px] font-extrabold uppercase tracking-wider">
                    ⚡ Laboratório de Estudo Interativo
                  </span>
                  <span className="text-xs text-slate-300 hidden sm:inline">
                    Destrinche a teoria, oculte palavras-chave para memorização ativa e filtre artigos em tempo real
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold">
                  <span className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-emerald-300">
                    ✓ Questões na Aula: {lessonStats.correctQ}/{lessonStats.totalQ} acertos ({lessonStats.answeredQ} resp.)
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-amber-300">
                    🗂️ Flashcards virados: {lessonStats.flippedFC}/{lessonStats.totalFC}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5 items-center">
                {/* In-Lesson Search Input */}
                <div className="md:col-span-5 relative">
                  <input
                    type="text"
                    value={inLessonQuery}
                    onChange={(e) => setInLessonQuery(e.target.value)}
                    placeholder="Filtrar/destacar nesta aula (ex: Art. 198, 30 dias, LIRAa, multa)..."
                    className="w-full pl-8 pr-7 py-2 rounded-xl text-xs bg-slate-800/90 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:border-teal-400"
                  />
                  <span className="absolute left-2.5 top-2.5 text-xs text-teal-300">🔎</span>
                  {inLessonQuery && (
                    <button
                      type="button"
                      onClick={() => setInLessonQuery('')}
                      className="absolute right-2 top-2 text-xs text-slate-400 hover:text-white px-1"
                      title="Limpar filtro"
                    >
                      ✕
                    </button>
                  )}
                </div>

                {/* Block Type Quick Filters */}
                <div className="md:col-span-4 flex flex-wrap items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setBlockTypeFilter('all')}
                    className={`px-2.5 py-1.5 rounded-lg text-[11px] font-bold transition ${
                      blockTypeFilter === 'all'
                        ? 'bg-teal-500 text-slate-950'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    Todos ({(currentLesson.blocks || []).length})
                  </button>
                  <button
                    type="button"
                    onClick={() => setBlockTypeFilter('theory')}
                    className={`px-2.5 py-1.5 rounded-lg text-[11px] font-bold transition ${
                      blockTypeFilter === 'theory'
                        ? 'bg-teal-500 text-slate-950'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    📘 Didática/Mapas
                  </button>
                  <button
                    type="button"
                    onClick={() => setBlockTypeFilter('law')}
                    className={`px-2.5 py-1.5 rounded-lg text-[11px] font-bold transition ${
                      blockTypeFilter === 'law'
                        ? 'bg-teal-500 text-slate-950'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    ⚖️ Texto Legal
                  </button>
                  <button
                    type="button"
                    onClick={() => setBlockTypeFilter('pending_q')}
                    className={`px-2.5 py-1.5 rounded-lg text-[11px] font-bold transition ${
                      blockTypeFilter === 'pending_q'
                        ? 'bg-teal-500 text-slate-950'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    📝 Q. Pendentes
                  </button>
                </div>

                {/* Cloze Mode (Active Recall) & Accordion Controls */}
                <div className="md:col-span-3 flex flex-wrap items-center justify-end gap-1.5">
                  <button
                    type="button"
                    onClick={() => {
                      setClozeMode(prev => !prev);
                      setRevealedClozeIds({});
                    }}
                    className={`px-2.5 py-1.5 rounded-lg text-[11px] font-extrabold border transition ${
                      clozeMode
                        ? 'bg-amber-400 text-slate-950 border-amber-300 shadow'
                        : 'bg-slate-800 text-amber-300 border-amber-500/40 hover:bg-slate-700'
                    }`}
                    title="Oculta os termos em negrito no texto para você testar sua memória clicando sobre eles!"
                  >
                    {clozeMode ? '🧠 Modo Lacunas: ATIVO' : '🧠 Ocultar Termos (Cloze)'}
                  </button>
                  <button
                    type="button"
                    onClick={expandAllBlocks}
                    className="px-2 py-1.5 rounded-lg text-[11px] font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700"
                    title="Expandir todos os blocos"
                  >
                    ➕ Expandir
                  </button>
                  <button
                    type="button"
                    onClick={collapseAllBlocks}
                    className="px-2 py-1.5 rounded-lg text-[11px] font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700"
                    title="Recolher todos os blocos para visão panorâmica"
                  >
                    ➖ Recolher
                  </button>
                </div>
              </div>

              {clozeMode && (
                <div className="bg-amber-500/15 border border-amber-400/40 rounded-xl px-3 py-2 text-xs text-amber-200 flex flex-wrap items-center justify-between gap-2">
                  <span>
                    💡 <strong>Modo Memorização Ativa (Cloze Test) ativado:</strong> Os conceitos, prazos e artigos em destaque foram ocultados nas tarjas tracejadas amarelas. Tente lembrar antes de clicar sobre cada tarja para revelar!
                  </span>
                  <button
                    type="button"
                    onClick={() => setRevealedClozeIds({})}
                    className="px-2.5 py-1 rounded-lg bg-amber-400 text-slate-950 font-bold text-[11px]"
                  >
                    Ocultar Todos Novamente
                  </button>
                </div>
              )}
            </div>

            {/* Pauta Oficial Categorizada (Anexo IV) — Todas as 5 Disciplinas (49 Tópicos) */}
            <div
              id="pauta-especifica-locator"
              className="bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white rounded-2xl p-4 shadow-md border border-teal-600/50 space-y-3 no-print"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-amber-400 text-slate-950 text-[11px] font-black uppercase tracking-wider">
                    🎯 Pauta Categorizada do Edital (Anexo IV)
                  </span>
                  <div className="flex flex-wrap items-center gap-1 bg-slate-950/80 p-1 rounded-xl border border-slate-700">
                    <button
                      type="button"
                      onClick={() => setPautaDisciplineTab('esp')}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-extrabold transition ${
                        pautaDisciplineTab === 'esp'
                          ? 'bg-teal-500 text-slate-950 shadow'
                          : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      Específicos (1 a 10)
                    </button>
                    <button
                      type="button"
                      onClick={() => setPautaDisciplineTab('leg')}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-extrabold transition ${
                        pautaDisciplineTab === 'leg'
                          ? 'bg-indigo-500 text-white shadow'
                          : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      Legislação (1 a 7)
                    </button>
                    <button
                      type="button"
                      onClick={() => setPautaDisciplineTab('por')}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-extrabold transition ${
                        pautaDisciplineTab === 'por'
                          ? 'bg-rose-500 text-white shadow'
                          : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      Português (1 a 18)
                    </button>
                    <button
                      type="button"
                      onClick={() => setPautaDisciplineTab('rlm')}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-extrabold transition ${
                        pautaDisciplineTab === 'rlm'
                          ? 'bg-violet-500 text-white shadow'
                          : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      Raciocínio Lógico (1 a 8)
                    </button>
                    <button
                      type="button"
                      onClick={() => setPautaDisciplineTab('atu')}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-extrabold transition ${
                        pautaDisciplineTab === 'atu'
                          ? 'bg-sky-500 text-slate-950 shadow'
                          : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      Gerais e Atualidades (1 a 6)
                    </button>
                    <button
                      type="button"
                      onClick={() => setPautaDisciplineTab('all')}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-extrabold transition ${
                        pautaDisciplineTab === 'all'
                          ? 'bg-amber-400 text-slate-950 shadow'
                          : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      Todas (49)
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setPautaOnlyHighlighted(prev => !prev)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold border transition ${
                      pautaOnlyHighlighted
                        ? 'bg-amber-400 text-slate-950 border-amber-300'
                        : 'bg-slate-800 text-amber-300 border-amber-500/40 hover:bg-slate-700'
                    }`}
                  >
                    {pautaOnlyHighlighted ? '★ Mostrando Destaques (Ver Todos)' : '★ Filtrar Destaques'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowPautaLocator(prev => !prev)}
                    className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700"
                  >
                    {showPautaLocator ? 'Recolher Categorias ▲' : 'Expandir Categorias ▼'}
                  </button>
                </div>
              </div>

              {showPautaLocator && (
                <div className="space-y-3 pt-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {(pautaDisciplineTab === 'esp'
                      ? PAUTA_ESPECIFICA_ITEMS
                      : pautaDisciplineTab === 'leg'
                      ? PAUTA_LEGISLACAO_ITEMS
                      : pautaDisciplineTab === 'por'
                      ? PAUTA_PORTUGUES_ITEMS
                      : pautaDisciplineTab === 'rlm'
                      ? PAUTA_RLM_ITEMS
                      : pautaDisciplineTab === 'atu'
                      ? PAUTA_GERAIS_ITEMS
                      : ALL_PAUTA_ITEMS
                    )
                      .filter(item => !pautaOnlyHighlighted || item.isHighlightedUserRequest)
                      .map(item => {
                        const isActiveLesson = currentLesson.id === item.lessonId;
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => jumpToLessonAndBlock(item.lessonId, item.blockIndex)}
                            className={`text-left p-2.5 rounded-xl border transition flex flex-col justify-between gap-1.5 ${
                              isActiveLesson
                                ? 'bg-teal-500/25 border-amber-400 ring-1 ring-amber-300'
                                : item.isHighlightedUserRequest
                                ? 'bg-slate-800/95 hover:bg-slate-800 border-amber-500/50'
                                : 'bg-slate-800/75 hover:bg-slate-800 border-slate-700'
                            }`}
                          >
                            <div className="space-y-1">
                              <div className="flex items-center justify-between gap-1">
                                <span
                                  className={`px-2 py-0.5 rounded text-[10px] font-extrabold uppercase ${
                                    item.isHighlightedUserRequest
                                      ? 'bg-amber-400 text-slate-950'
                                      : item.discipline === 'leg'
                                      ? 'bg-indigo-500/30 text-indigo-200 border border-indigo-400/40'
                                      : item.discipline === 'por'
                                      ? 'bg-rose-500/30 text-rose-200 border border-rose-400/40'
                                      : item.discipline === 'rlm'
                                      ? 'bg-violet-500/30 text-violet-200 border border-violet-400/40'
                                      : item.discipline === 'atu'
                                      ? 'bg-sky-500/30 text-sky-200 border border-sky-400/40'
                                      : 'bg-teal-500/20 text-teal-300 border border-teal-500/30'
                                  }`}
                                >
                                  {item.discipline === 'leg'
                                    ? `LEGISLAÇÃO ${item.num}`
                                    : item.discipline === 'por'
                                    ? `PORTUGUÊS ${item.num}`
                                    : item.discipline === 'rlm'
                                    ? `RACIOCÍNIO LÓGICO ${item.num}`
                                    : item.discipline === 'atu'
                                    ? `GERAIS ${item.num}`
                                    : `ESPECÍFICO ${item.num}`}{' '}
                                  {item.isHighlightedUserRequest ? '★' : ''}
                                </span>
                                <span className="text-[10px] font-bold text-slate-300 bg-slate-900 px-2 py-0.5 rounded">
                                  {item.lessonLabel}
                                </span>
                              </div>
                              <div className="text-xs font-extrabold text-white leading-snug">
                                {item.pautaLiteral}
                              </div>
                              <div className="text-[11px] text-slate-300 leading-tight line-clamp-2">
                                {item.description}
                              </div>
                            </div>
                            <div className="pt-1 border-t border-slate-700/60 flex items-center justify-between text-[10px] font-bold text-teal-300">
                              <span className="truncate">{item.blockTitle.split('(')[0].trim()}</span>
                              <span className="shrink-0 ml-1 text-amber-300">Abrir Aula &#8594;</span>
                            </div>
                          </button>
                        );
                      })}
                  </div>
                </div>
              )}
            </div>

            {/* Lesson Body Container */}
            <article className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-6">
              {/* Lesson Header */}
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-teal-100 text-teal-800">
                    {currentLesson.catName}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-100 text-indigo-800">
                    {currentLesson.weight}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                    Material de estudo — confira as fontes
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${meta.badgeClass}`}>
                    {meta.icon} {meta.label}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">{currentLesson.title}</h2>
                <p className="text-xs text-slate-600">
                  <strong>Correspondência no Conteúdo Programático Oficial (Anexo IV):</strong> {currentLesson.editalRef}
                </p>

                {/* 5-Level Status Selector for this Lesson */}
                <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="text-[11px] font-bold text-slate-500">
                    <i className="fa-solid fa-chart-line mr-1 text-brand-500"></i>Seu Status neste Assunto:
                  </span>
                  <div className="flex flex-wrap items-center bg-slate-100 p-1 rounded-xl border border-slate-200 gap-1">
                    {(['not_started', 'studying', 'completed', 'review', 'mastered'] as TopicStatus[]).map(st => {
                      const m = getStatusMeta(st);
                      const active = currentStatus === st;
                      return (
                        <button
                          key={st}
                          type="button"
                          onClick={() => updateTopicStatus(currentLesson.id, st)}
                          className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition ${
                            active ? m.activeClass : 'text-slate-500 hover:text-slate-800'
                          }`}
                        >
                          {m.icon} {m.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Integrated PDFs chips */}
                {lessonSources.length > 0 && (
                  <div className="pt-1">
                    <div className="text-[11px] font-bold text-slate-500 uppercase mb-1.5">
                      PDFs do Google Drive e Fontes Oficiais Integrados nesta Aula (Clique p/ abrir o PDF):
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {lessonSources.map(s => (
                        <a
                          key={s.num}
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={s.note || ''}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-teal-100 text-slate-800 border border-slate-300 transition"
                        >
                          <span>&#128196; PDF #{s.num}: {s.title || s.name} &#8599;</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quick Block & Title Jump Index */}
                {currentLesson.blocks && currentLesson.blocks.length > 0 && (
                  <div className="pt-2">
                    <div className="text-[11px] font-bold text-slate-500 uppercase mb-1.5">
                      Sumário Integral desta Aula (Mapa Mental + {currentLesson.blocks.length} Blocos — Clique para ir direto):
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {currentLesson.mindMap && (
                        <a
                          href="#lesson-mindmap-section"
                          onClick={() => {
                            if (currentStudyMode === 'A' || currentStudyMode === 'C') {
                              setCurrentStudyMode('ALL');
                            }
                          }}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-extrabold bg-amber-100 hover:bg-amber-200 text-amber-950 border border-amber-300 transition shadow-xs"
                        >
                          <span>🧠 Mapa Mental &amp; Prazos</span>
                        </a>
                      )}
                      {currentLesson.blocks.map((b, idx) => {
                        const bQCount = (b.questions || []).length;
                        let bAnswered = 0;
                        for (let i = 0; i < bQCount; i++) {
                          if (lessonAnswers[`${currentLesson.id}_b${idx}_q${i}`] !== undefined) bAnswered++;
                        }
                        const cleanBlockLabel = b.title.split('(')[0].trim();
                        return (
                          <a
                            key={idx}
                            href={`#lesson-block-${idx}`}
                            onClick={() => {
                              if (currentStudyMode === 'MAPA') {
                                setCurrentStudyMode('ALL');
                              }
                              setCollapsedBlocks(prev => ({ ...prev, [`${currentLesson.id}_${idx}`]: false }));
                            }}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-teal-50 hover:bg-teal-100 text-teal-900 border border-teal-200 transition"
                          >
                            <span>📑 {cleanBlockLabel.length > 82 ? cleanBlockLabel.slice(0, 80) + '…' : cleanBlockLabel}</span>
                            {bQCount > 0 && (
                              <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-white text-teal-800 border border-teal-200">
                                {bAnswered}/{bQCount} Q
                              </span>
                            )}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Visual Mind Map & Graphic Summary Section (All 32 Lessons) */}
              {currentLesson.mindMap &&
                (currentStudyMode === 'ALL' || currentStudyMode === 'MAPA' || currentStudyMode === 'B') && (
                  <LessonMindMapView
                    lessonId={currentLesson.id}
                    lessonNum={currentLesson.num || currentIndex + 1}
                    mindMap={currentLesson.mindMap}
                  />
                )}

              {/* Interactive Rapid-Fire V/F ("Certo ou Errado — Pegadinhas IBGP") Section */}
              {vfChallenges.length > 0 && (
                <div className="bg-slate-50 rounded-2xl p-4 border border-indigo-200 space-y-3 no-print">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-indigo-600 text-white text-xs font-extrabold">
                        ⚡ Análise de alternativas — esta responde ao enunciado? ({vfChallenges.length} Desafios)
                      </span>
                      <span className="text-xs text-slate-600">
                        Julgue as afirmativas desta aula para destravar as pegadinhas antes das questões de múltipla escolha!
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setVfAnswers({})}
                        className="px-2.5 py-1 rounded-lg text-xs font-bold bg-white hover:bg-slate-100 text-slate-700 border border-slate-300"
                      >
                        🔄 Reiniciar V/F
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowVFTrainer(prev => !prev)}
                        className="px-2.5 py-1 rounded-lg text-xs font-bold bg-indigo-100 hover:bg-indigo-200 text-indigo-900"
                      >
                        {showVFTrainer ? 'Ocultar V/F' : 'Mostrar V/F'}
                      </button>
                    </div>
                  </div>

                  {showVFTrainer && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                      {vfChallenges.map((item, idx) => {
                        const userAns = vfAnswers[item.id];
                        const answered = userAns !== undefined;
                        const isRight = answered && userAns === item.isTrue;

                        return (
                          <div
                            key={item.id}
                            className={`p-3.5 rounded-xl border transition space-y-2 flex flex-col justify-between ${
                              !answered
                                ? 'bg-white border-slate-200'
                                : isRight
                                ? 'bg-emerald-50/70 border-emerald-300'
                                : 'bg-rose-50/70 border-rose-300'
                            }`}
                          >
                            <div className="space-y-1.5">
                              <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-indigo-700">
                                <span>Desafio #{idx + 1} &bull; {item.blockTitle}</span>
                                {answered && (
                                  <span className={isRight ? 'text-emerald-700 font-extrabold' : 'text-rose-700 font-extrabold'}>
                                    {isRight ? '✓ Você Acertou!' : '✗ Você Caiu na Pegadinha!'}
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-slate-800 font-semibold leading-relaxed">
                                &ldquo;{item.statement}&rdquo;
                              </p>
                            </div>

                            <div className="space-y-2 pt-1">
                              <div className="flex items-center gap-2">
                                <button
                                  type="button"
                                  onClick={() => setVfAnswers(prev => ({ ...prev, [item.id]: true }))}
                                  className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-extrabold border transition ${
                                    answered && item.isTrue
                                      ? 'bg-emerald-600 text-white border-emerald-700'
                                      : answered && userAns === true && !item.isTrue
                                      ? 'bg-rose-600 text-white border-rose-700'
                                      : 'bg-white hover:bg-emerald-50 text-emerald-800 border-emerald-300'
                                  }`}
                                >
                                  Sim, é a resposta
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setVfAnswers(prev => ({ ...prev, [item.id]: false }))}
                                  className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-extrabold border transition ${
                                    answered && !item.isTrue
                                      ? 'bg-emerald-600 text-white border-emerald-700'
                                      : answered && userAns === false && item.isTrue
                                      ? 'bg-rose-600 text-white border-rose-700'
                                      : 'bg-white hover:bg-rose-50 text-rose-800 border-rose-300'
                                  }`}
                                >
                                  Não é a resposta
                                </button>
                              </div>

                              {answered && (
                                <div className="p-2.5 rounded-lg bg-white/90 border border-slate-200 text-[11px] text-slate-700 leading-snug">
                                  <strong className="text-slate-900">
                                    Gabarito: {item.isTrue ? 'É a alternativa do gabarito' : 'Não é a alternativa do gabarito'}.
                                  </strong>{' '}
                                  {item.explanation}
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

              {/* Lesson Blocks */}
              <div className="space-y-8 divide-y divide-slate-200">
                {(currentLesson.blocks || []).map((b, bIdx) => {
                  const blockKey = `${currentLesson.id}_${bIdx}`;
                  const isCollapsed = !!collapsedBlocks[blockKey];
                  const isLawBlock = /TEXTO INTEGRAL|LEI COMPLEMENTAR|TÍTULO|DECRETO|LEI FEDERAL/i.test(b.title);

                  // Check block filter
                  if (blockTypeFilter === 'law' && !isLawBlock) return null;
                  if (blockTypeFilter === 'theory' && isLawBlock) return null;

                  const totalBlockQ = (b.questions || []).length;
                  let answeredBlockQ = 0;
                  let correctBlockQ = 0;
                  (b.questions || []).forEach((q, qIdx) => {
                    const ch = lessonAnswers[`${currentLesson.id}_b${bIdx}_q${qIdx}`];
                    if (ch !== undefined) {
                      answeredBlockQ++;
                      if (ch === q.ans) correctBlockQ++;
                    }
                  });

                  if (blockTypeFilter === 'pending_q' && (totalBlockQ === 0 || answeredBlockQ === totalBlockQ)) {
                    return null;
                  }

                  // Check in-lesson search filter
                  if (inLessonQuery.trim().length >= 2) {
                    const q = inLessonQuery.toLowerCase().trim();
                    const hay = `${b.title || ''} ${b.modoA_markdown || ''} ${b.modoB_markdown || ''} ${b.modoA || ''} ${b.modoB || ''}`.toLowerCase();
                    if (!hay.includes(q)) return null;
                  }

                  const showA = currentStudyMode === 'ALL' || currentStudyMode === 'A';
                  const showB = currentStudyMode === 'ALL' || currentStudyMode === 'B';
                  const showC = currentStudyMode === 'ALL' || currentStudyMode === 'C';

                  const rawHtmlA = b.modoA || renderMarkdownToHtml(b.modoA_markdown || '');
                  const rawHtmlB = b.modoB || renderMarkdownToHtml(b.modoB_markdown || '');

                  return (
                    <div
                      id={`lesson-block-${bIdx}`}
                      key={bIdx}
                      className={bIdx > 0 ? 'pt-6 space-y-4 scroll-mt-24' : 'space-y-4 scroll-mt-24'}
                    >
                      {/* Interactive Block Header Bar */}
                      <div className="bg-slate-100 hover:bg-slate-200/70 transition px-3.5 py-2.5 rounded-xl border-l-4 border-teal-600 flex flex-wrap items-center justify-between gap-2">
                        <button
                          type="button"
                          onClick={() => toggleBlockCollapse(blockKey)}
                          className="text-left flex-1 flex items-center gap-2 text-base sm:text-lg font-extrabold text-slate-900"
                        >
                          <span className="text-xs px-2 py-0.5 rounded bg-teal-700 text-white font-bold">
                            {isCollapsed ? '▶ Expandir' : '▼'}
                          </span>
                          <span>{b.title}</span>
                        </button>

                        <div className="flex flex-wrap items-center gap-1.5 text-xs">
                          {totalBlockQ > 0 && (
                            <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-300 font-bold text-slate-700">
                              📝 {correctBlockQ}/{totalBlockQ} acertos
                            </span>
                          )}
                          {(b.flashcards || []).length > 0 && (
                            <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-300 font-bold text-slate-700">
                              🗂️ {(b.flashcards || []).length} Flashcards
                            </span>
                          )}
                          <button
                            type="button"
                            onClick={() => toggleBlockCollapse(blockKey)}
                            className="px-2.5 py-1 rounded-lg bg-white hover:bg-teal-50 text-teal-900 border border-slate-300 font-bold text-xs"
                          >
                            {isCollapsed ? 'Abrir Bloco' : 'Recolher'}
                          </button>
                        </div>
                      </div>

                      {!isCollapsed && (
                        <>
                          {/* Modo A: Teoria Aprofundada */}
                          {showA && (
                            <div className="space-y-2">
                              <div className="text-xs font-bold uppercase tracking-wider text-teal-700 flex items-center justify-between">
                                <span>Modo A — Teoria Destrinchada, Tabelas Comparativas e Fundamentação Legal Integral</span>
                                {clozeMode && (
                                  <span className="text-[11px] text-amber-700 font-extrabold">
                                    🧠 Clique nos termos ocultos em amarelo para revelar
                                  </span>
                                )}
                              </div>
                              <div
                                onClick={handleDidacticContainerClick}
                                className="text-xs sm:text-sm text-slate-800 leading-relaxed space-y-2 prose prose-slate max-w-none"
                                dangerouslySetInnerHTML={{
                                  __html: processDidacticHtml(rawHtmlA, `${blockKey}_A`)
                                }}
                              />
                            </div>
                          )}

                          {/* Modo B: Resumo e Mnemônicos */}
                          {showB && (
                            <div className="space-y-2">
                              <div className="text-xs font-bold uppercase tracking-wider text-amber-700">
                                Modo B — Resumo Final de Revisão, Mnemônicos e Pegadinhas de Prova
                              </div>
                              <div
                                onClick={handleDidacticContainerClick}
                                className="text-xs sm:text-sm text-slate-800 leading-relaxed space-y-2"
                                dangerouslySetInnerHTML={{
                                  __html: processDidacticHtml(rawHtmlB, `${blockKey}_B`)
                                }}
                              />
                            </div>
                          )}

                          {/* Modo C: Questões & Flashcards */}
                          {showC && (
                            <div className="space-y-4">
                              <div className="flex flex-wrap items-center justify-between gap-2">
                                <div className="text-xs font-bold uppercase tracking-wider text-indigo-700">
                                  Modo C — Questões de Fixação Comentadas (Padrão IBGP) &amp; Flashcards Ativos
                                </div>
                                {answeredBlockQ > 0 && (
                                  <button
                                    type="button"
                                    onClick={() => resetBlockQuestions(currentLesson.id, bIdx, totalBlockQ)}
                                    className="px-2.5 py-1 rounded-lg text-xs font-bold bg-indigo-50 hover:bg-indigo-100 text-indigo-800 border border-indigo-200"
                                  >
                                    🔄 Refazer Questões deste Bloco ({correctBlockQ}/{totalBlockQ} corretas)
                                  </button>
                                )}
                              </div>

                              {/* Fixation Questions */}
                              {b.questions && b.questions.length > 0 && (
                                <div className="space-y-3">
                                  {b.questions.map((qObj, qIdx) => {
                                    const qKey = `${currentLesson.id}_b${bIdx}_q${qIdx}`;
                                    const chosen = lessonAnswers[qKey];
                                    const answered = chosen !== undefined;

                                    return (
                                      <div
                                        key={qIdx}
                                        className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2.5"
                                      >
                                        <div className="text-xs sm:text-sm font-bold text-slate-900">{qObj.q}</div>
                                        <div className="space-y-1.5">
                                          {qObj.options.map((opt, oIdx) => {
                                            let cls = 'lesson-q-opt w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm border border-slate-300 bg-white hover:bg-slate-100 transition font-medium';
                                            if (answered) {
                                              if (oIdx === qObj.ans) {
                                                cls = 'lesson-q-opt w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm border-2 border-emerald-600 bg-emerald-100 text-emerald-950 font-bold';
                                              } else if (oIdx === chosen && chosen !== qObj.ans) {
                                                cls = 'lesson-q-opt w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm border-2 border-rose-500 bg-rose-100 text-rose-950 font-semibold';
                                              } else {
                                                cls = 'lesson-q-opt w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm border border-slate-200 bg-white text-slate-500';
                                              }
                                            }

                                            return (
                                              <button
                                                key={oIdx}
                                                type="button"
                                                onClick={() => handleAnswerQuestion(qKey, oIdx)}
                                                className={cls}
                                              >
                                                {opt}
                                              </button>
                                            );
                                          })}
                                        </div>
                                        {answered && (
                                          <div className="p-3 rounded-lg text-xs sm:text-sm bg-emerald-50 border border-emerald-200 text-emerald-950 font-medium">
                                            <strong>Comentário Didático do Professor:</strong> {qObj.comment}
                                          </div>
                                        )}
                                      </div>
                                    );
                                  })}
                                </div>
                              )}

                              {/* Flashcards 3D Grid */}
                              {b.flashcards && b.flashcards.length > 0 && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                                  {b.flashcards.map((fc, fIdx) => {
                                    const fcKey = `fc_${currentLesson.id}_${bIdx}_${fIdx}`;
                                    const isFlipped = !!flippedCards[fcKey];

                                    return (
                                      <div
                                        key={fIdx}
                                        onClick={() => toggleFlashcard(fcKey)}
                                        className="flashcard-container cursor-pointer"
                                      >
                                        <div
                                          className={`flashcard-inner border border-slate-200 rounded-xl shadow-sm bg-gradient-to-br from-slate-800 to-slate-900 text-white ${
                                            isFlipped ? 'flashcard-flipped' : ''
                                          }`}
                                        >
                                          <div className="flashcard-front">
                                            <span className="text-[10px] uppercase tracking-wider text-teal-400 font-bold mb-1">
                                              Flashcard &bull; Clique para virar
                                            </span>
                                            <p className="text-xs sm:text-sm font-bold leading-snug">
                                              {toSafeString(fc.f || fc.front || '')}
                                            </p>
                                          </div>
                                          <div className="flashcard-back bg-gradient-to-br from-teal-700 to-emerald-800 text-white">
                                            <span className="text-[10px] uppercase tracking-wider text-amber-200 font-bold mb-1">
                                              Resposta de Prova
                                            </span>
                                            <p className="text-xs sm:text-sm font-medium leading-snug">
                                              {toSafeString(fc.b || fc.back || '')}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Prev / Next Lesson Navigation Footer */}
              <div className="pt-6 border-t border-slate-200 flex items-center justify-between no-print">
                <button
                  type="button"
                  disabled={currentIndex <= 0}
                  onClick={goToPrevLesson}
                  className={`px-4 py-2 rounded-xl text-xs font-bold border transition ${
                    currentIndex > 0
                      ? 'bg-white hover:bg-slate-50 text-slate-800 border-slate-300'
                      : 'opacity-40 cursor-not-allowed bg-slate-100 text-slate-400 border-slate-200'
                  }`}
                >
                  &larr; Aula Anterior
                </button>
                <span className="text-xs font-bold text-slate-500">
                  {currentIndex + 1} de {lessons.length}
                </span>
                <button
                  type="button"
                  disabled={currentIndex >= lessons.length - 1}
                  onClick={goToNextLesson}
                  className={`px-4 py-2 rounded-xl text-xs font-bold border transition ${
                    currentIndex < lessons.length - 1
                      ? 'bg-teal-600 hover:bg-teal-700 text-white border-teal-600 shadow-sm'
                      : 'opacity-40 cursor-not-allowed bg-slate-100 text-slate-400 border-slate-200'
                  }`}
                >
                  Próxima Aula &rarr;
                </button>
              </div>
            </article>
          </>
        ) : (
          <div className="p-8 bg-white rounded-2xl border border-slate-200 text-center text-slate-500">
            Nenhuma aula selecionada.
          </div>
        )}
      </main>
    </section>
  );
};
