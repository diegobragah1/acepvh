import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { getStatusMeta } from '../utils/status';
import { renderMarkdownToHtml } from '../utils/markdown';
import { TopicStatus, Source } from '../types';

export const Tab2Apostila: React.FC = () => {
  const {
    appData,
    currentLessonId,
    setCurrentLessonId,
    getTopicStatus,
    updateTopicStatus,
    currentStudyMode,
    setCurrentStudyMode,
    toggleCompleteCurrentLesson
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  // Track chosen answers for current lesson questions: qKey -> optionIndex
  const [lessonAnswers, setLessonAnswers] = useState<Record<string, number>>({});
  // Track flipped flashcards: fcKey -> boolean
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const lessons = appData?.lessons || [];
  const currentIndex = lessons.findIndex(l => l.id === currentLessonId);
  const currentLesson = currentIndex >= 0 ? lessons[currentIndex] : lessons[0];

  // Filtering lessons for the sidebar
  const filteredLessons = lessons.filter(l => {
    if (categoryFilter !== 'all' && l.cat !== categoryFilter) return false;
    const st = getTopicStatus(l.id);
    if (statusFilter !== 'all' && st !== statusFilter) return false;

    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();
    const inTitle = (l.title || '').toLowerCase().includes(q) || (l.editalRef && l.editalRef.toLowerCase().includes(q));
    const inBlocks = (l.blocks || []).some(b =>
      (b.title || '').toLowerCase().includes(q) ||
      (b.modoA && b.modoA.toLowerCase().includes(q)) ||
      (b.modoB && b.modoB.toLowerCase().includes(q))
    );
    return inTitle || inBlocks;
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

  return (
    <section className="flex flex-col lg:flex-row gap-6">
      {/* Sidebar: Lessons Navigation */}
      <aside className="w-full lg:w-80 shrink-0 space-y-4 no-print">
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
              Módulos do Edital (32 Aulas)
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
              <option value="all">Todas as Disciplinas (32 Aulas)</option>
              <option value="esp">Conhecimentos Específicos ACE (10 Aulas)</option>
              <option value="leg">Legislação e Direito (7 Aulas)</option>
              <option value="por">Língua Portuguesa (6 Aulas)</option>
              <option value="rlm">Raciocínio Lógico (6 Aulas)</option>
              <option value="atu">Conhecimentos Gerais (3 Aulas)</option>
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
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-bold">
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
                  onClick={() => setCurrentStudyMode('A')}
                  className={`px-2.5 py-1 rounded-lg transition ${
                    currentStudyMode === 'A' ? 'bg-teal-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Modo A (Teoria)
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
                    &#10003; {currentLesson.auditBadge}
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
                          <span>&#128196; PDF #{s.num}: {s.title || s.name} &nearr;</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Lesson Blocks */}
              <div className="space-y-8 divide-y divide-slate-200">
                {(currentLesson.blocks || []).map((b, bIdx) => {
                  const showA = currentStudyMode === 'ALL' || currentStudyMode === 'A';
                  const showB = currentStudyMode === 'ALL' || currentStudyMode === 'B';
                  const showC = currentStudyMode === 'ALL' || currentStudyMode === 'C';

                  return (
                    <div key={bIdx} className={bIdx > 0 ? "pt-6 space-y-4" : "space-y-4"}>
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900 bg-slate-100 px-3.5 py-2 rounded-xl border-l-4 border-teal-600">
                        {b.title}
                      </h3>

                      {/* Modo A: Teoria Aprofundada */}
                      {showA && (
                        <div className="space-y-2">
                          <div className="text-xs font-bold uppercase tracking-wider text-teal-700">
                            Modo A — Teoria Aprofundada, Conceitos, Quadros e Fundamentação Legal
                          </div>
                          <div
                            className="text-xs sm:text-sm text-slate-800 leading-relaxed space-y-2 prose prose-slate max-w-none"
                            dangerouslySetInnerHTML={{
                              __html: b.modoA || renderMarkdownToHtml(b.modoA_markdown || '')
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
                            className="text-xs sm:text-sm text-slate-800 leading-relaxed space-y-2"
                            dangerouslySetInnerHTML={{
                              __html: b.modoB || renderMarkdownToHtml(b.modoB_markdown || '')
                            }}
                          />
                        </div>
                      )}

                      {/* Modo C: Questões & Flashcards */}
                      {showC && (
                        <div className="space-y-4">
                          <div className="text-xs font-bold uppercase tracking-wider text-indigo-700">
                            Modo C — Questões de Fixação Comentadas (Padrão IBGP) &amp; Flashcards
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
                                        let cls = "lesson-q-opt w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm border border-slate-300 bg-white hover:bg-slate-100 transition font-medium";
                                        if (answered) {
                                          if (oIdx === qObj.ans) {
                                            cls = "lesson-q-opt w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm border-2 border-emerald-600 bg-emerald-100 text-emerald-950 font-bold";
                                          } else if (oIdx === chosen && chosen !== qObj.ans) {
                                            cls = "lesson-q-opt w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm border-2 border-rose-500 bg-rose-100 text-rose-950 font-semibold";
                                          } else {
                                            cls = "lesson-q-opt w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm border border-slate-200 bg-white text-slate-500";
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
                                        <strong>Comentário do Professor:</strong> {qObj.comment}
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
                                          {fc.f || fc.front || ''}
                                        </p>
                                      </div>
                                      <div className="flashcard-back bg-gradient-to-br from-teal-700 to-emerald-800 text-white">
                                        <span className="text-[10px] uppercase tracking-wider text-amber-200 font-bold mb-1">
                                          Resposta de Prova
                                        </span>
                                        <p className="text-xs sm:text-sm font-medium leading-snug">
                                          {fc.b || fc.back || ''}
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
