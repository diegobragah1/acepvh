import React, { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import type { QuestionDifficulty } from '../types';
import { questionIdentity } from '../utils/questionIdentity';
import { getCanonicalFlashcardKey, getFlashcardSrsStatus, isFlashcardDue } from '../utils/srs';
import {
  QUESTIONS_PER_PAGE,
  type FlatFlashcard,
  type FlatQuestion,
  type QuestionStatusFilter,
  type SimuladoSubMode,
  type SrsFilterMode,
} from '../utils/simulado';
import { QuestionBankPanel } from '../features/questions/QuestionBankPanel';
import { OfficialExamPanel } from '../features/questions/OfficialExamPanel';
import { CustomExamPanel } from '../features/questions/CustomExamPanel';
import { FlashcardDeckPanel } from '../features/flashcards/FlashcardDeckPanel';

const SUBMODE_STORAGE_KEY = 'ace_semusa_2026_simulado_submode_v1';

function loadInitialSubMode(): SimuladoSubMode {
  if (typeof window === 'undefined') return 'QUESTOES';
  try {
    const saved = window.sessionStorage.getItem(SUBMODE_STORAGE_KEY);
    if (
      saved === 'QUESTOES' ||
      saved === 'PROVA_OFICIAL' ||
      saved === 'SIMULADO_CUSTOM' ||
      saved === 'FLASHCARDS'
    ) {
      return saved;
    }
  } catch {
    // Ignore storage access errors
  }
  return 'QUESTOES';
}

export const Tab3Simulado: React.FC = () => {
  const {
    appData,
    simAnswers,
    setSimAnswer,
    resetSimAnswers,
    lessonAnswers,
    favoriteQuestions,
    toggleFavoriteQuestion,
    flashcardSrs,
    rateFlashcard,
    resetFlashcardSrs,
    recordExamAttempt,
    globalSearchTarget,
    simuladoQuickIntent,
    showToast,
  } = useApp();

  const [subMode, setSubModeState] = useState<SimuladoSubMode>(loadInitialSubMode);
  const [catFilter, setCatFilter] = useState<string>('ALL');
  const [lessonFilter, setLessonFilter] = useState<string>('ALL');
  const [questionStatusFilter, setQuestionStatusFilter] = useState<QuestionStatusFilter>('ALL');
  const [difficultyFilter, setDifficultyFilter] = useState<'ALL' | QuestionDifficulty>('ALL');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [customIntent, setCustomIntent] = useState<{ lessonId: string; timestamp: number } | null>(null);

  const [flippedGlobal, setFlippedGlobal] = useState<Record<string, boolean>>({});
  const [srsFilter, setSrsFilter] = useState<SrsFilterMode>('ALL');
  const [fcDisplayMode, setFcDisplayMode] = useState<'GRID' | 'STACK'>('GRID');

  const lastIntentTsRef = useRef<number>(0);

  const setSubMode = useCallback((next: SimuladoSubMode) => {
    setSubModeState(next);
    try {
      window.sessionStorage.setItem(SUBMODE_STORAGE_KEY, next);
    } catch {
      // Ignore storage access errors
    }
  }, []);

  useEffect(() => {
    if (globalSearchTarget && globalSearchTarget.type === 'questao') {
      setSubMode('QUESTOES');
      setCatFilter('ALL');
      setLessonFilter(globalSearchTarget.lessonId || 'ALL');
      setQuestionStatusFilter('ALL');
      setDifficultyFilter('ALL');
      setSearchTerm(globalSearchTarget.query || '');
      setPage(1);
    }
  }, [globalSearchTarget, setSubMode]);

  useEffect(() => {
    if (!simuladoQuickIntent) return;
    if (simuladoQuickIntent.timestamp === lastIntentTsRef.current) return;
    if (Date.now() - simuladoQuickIntent.timestamp > 8000) return;

    lastIntentTsRef.current = simuladoQuickIntent.timestamp;
    if (simuladoQuickIntent.subMode) {
      setSubMode(simuladoQuickIntent.subMode);
    }
    setCatFilter(simuladoQuickIntent.cat || 'ALL');
    setLessonFilter(simuladoQuickIntent.lessonId || 'ALL');
    setQuestionStatusFilter(simuladoQuickIntent.statusFilter || 'ALL');
    setDifficultyFilter('ALL');
    setSearchTerm('');
    if (simuladoQuickIntent.srsFilter) {
      setSrsFilter(simuladoQuickIntent.srsFilter);
    }
    if (simuladoQuickIntent.subMode === 'SIMULADO_CUSTOM' && simuladoQuickIntent.lessonId) {
      setCustomIntent({
        lessonId: simuladoQuickIntent.lessonId,
        timestamp: simuladoQuickIntent.timestamp,
      });
    }
    setPage(1);
  }, [simuladoQuickIntent, setSubMode]);

  const lessons = appData?.lessons || [];

  const { allQuestions, allFlashcards } = useMemo(() => {
    const qList: FlatQuestion[] = [];
    const fcList: FlatFlashcard[] = [];

    lessons.forEach((l) => {
      (l.blocks || []).forEach((b, bIdx) => {
        (b.questions || []).forEach((q, qIdx) => {
          qList.push({
            qid: questionIdentity(`${l.id}_${bIdx}_${qIdx}`, q),
            lessonQid: questionIdentity(`${l.id}_b${bIdx}_q${qIdx}`, q),
            lessonId: l.id,
            lessonNum: l.num,
            lessonTitle: l.title,
            cat: l.cat,
            catName: l.catName,
            blockTitle: b.title,
            q: q.q,
            options: q.options || [],
            ans: q.ans,
            comment: q.comment || '',
            difficulty: q.difficulty,
            questionType: q.questionType,
            sourceRef: q.sourceRef,
          });
        });

        (b.flashcards || []).forEach((fc, fcIdx) => {
          const srsKey = getCanonicalFlashcardKey(l.id, bIdx, fcIdx);
          fcList.push({
            fcid: srsKey,
            srsKey,
            lessonId: l.id,
            lessonNum: l.num,
            lessonTitle: fc.lessonTitle || `Aula ${String(l.num).padStart(2, '0')} — ${l.title}`,
            cat: l.cat,
            f: fc.f || fc.front || '',
            b: fc.b || fc.back || '',
          });
        });
      });
    });

    return { allQuestions: qList, allFlashcards: fcList };
  }, [lessons]);

  const getEffectiveAnswer = useCallback(
    (item: FlatQuestion): number | undefined => {
      const s = simAnswers[item.qid];
      return s !== undefined ? s : lessonAnswers[item.lessonQid];
    },
    [simAnswers, lessonAnswers]
  );

  const filteredQuestions = useMemo(() => {
    return allQuestions.filter((item) => {
      if (catFilter !== 'ALL' && item.cat !== catFilter) return false;
      if (lessonFilter !== 'ALL' && item.lessonId !== lessonFilter) return false;
      if (difficultyFilter !== 'ALL' && item.difficulty !== difficultyFilter) return false;

      const userAns = getEffectiveAnswer(item);
      if (questionStatusFilter === 'WRONG') {
        if (userAns === undefined || userAns === item.ans) return false;
      } else if (questionStatusFilter === 'CORRECT') {
        if (userAns === undefined || userAns !== item.ans) return false;
      } else if (questionStatusFilter === 'UNANSWERED') {
        if (userAns !== undefined) return false;
      } else if (questionStatusFilter === 'FAVORITES') {
        if (!favoriteQuestions.includes(item.qid)) return false;
      }

      if (searchTerm.trim()) {
        const s = searchTerm.toLowerCase();
        return (
          item.q.toLowerCase().includes(s) ||
          item.comment.toLowerCase().includes(s) ||
          item.lessonTitle.toLowerCase().includes(s)
        );
      }
      return true;
    });
  }, [
    allQuestions,
    catFilter,
    lessonFilter,
    difficultyFilter,
    questionStatusFilter,
    searchTerm,
    favoriteQuestions,
    getEffectiveAnswer,
  ]);

  const srsBaseCards = useMemo(() => {
    return allFlashcards.filter((item) => {
      if (catFilter !== 'ALL' && item.cat !== catFilter) return false;
      if (lessonFilter !== 'ALL' && item.lessonId !== lessonFilter) return false;
      if (searchTerm.trim()) {
        const s = searchTerm.toLowerCase();
        return (
          item.f.toLowerCase().includes(s) ||
          item.b.toLowerCase().includes(s) ||
          item.lessonTitle.toLowerCase().includes(s)
        );
      }
      return true;
    });
  }, [allFlashcards, catFilter, lessonFilter, searchTerm]);

  const srsCounts = useMemo(() => {
    const now = Date.now();
    let due = 0;
    let hard = 0;
    let fresh = 0;
    let known = 0;
    srsBaseCards.forEach((fc) => {
      const entry = flashcardSrs[fc.srsKey];
      const st = getFlashcardSrsStatus(entry);
      if (isFlashcardDue(entry, now)) due += 1;
      if (st === 'hard') hard += 1;
      else if (st === 'new') fresh += 1;
      else if (st === 'known') known += 1;
    });
    return { total: srsBaseCards.length, due, hard, fresh, known };
  }, [srsBaseCards, flashcardSrs]);

  const filteredFlashcards = useMemo(() => {
    const now = Date.now();
    return srsBaseCards.filter((fc) => {
      const entry = flashcardSrs[fc.srsKey];
      const st = getFlashcardSrsStatus(entry);
      if (srsFilter === 'DUE') return isFlashcardDue(entry, now);
      if (srsFilter === 'HARD') return st === 'hard';
      if (srsFilter === 'NEW') return st === 'new';
      if (srsFilter === 'KNOWN') return st === 'known';
      return true;
    });
  }, [srsBaseCards, flashcardSrs, srsFilter]);

  const stats = useMemo(() => {
    let answered = 0;
    let correct = 0;
    filteredQuestions.forEach((q) => {
      const userAns = getEffectiveAnswer(q);
      if (userAns !== undefined) {
        answered += 1;
        if (userAns === q.ans) correct += 1;
      }
    });
    const pct = answered > 0 ? Math.round((correct / answered) * 100) : 0;
    return { answered, correct, wrong: answered - correct, pct };
  }, [filteredQuestions, getEffectiveAnswer]);

  const handleToggleFlip = useCallback((cardKey: string) => {
    setFlippedGlobal((prev) => ({ ...prev, [cardKey]: !prev[cardKey] }));
  }, []);

  const totalPages = Math.max(1, Math.ceil(filteredQuestions.length / QUESTIONS_PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const paginatedQuestions = filteredQuestions.slice(
    (safePage - 1) * QUESTIONS_PER_PAGE,
    safePage * QUESTIONS_PER_PAGE
  );

  return (
    <div className="space-y-6">
      {/* Top Controls & Submodes */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
              ✍️ Centro de Treinamento — Questões Comentadas, Simulados &amp; SRS
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Banco unificado das 49 aulas ({allQuestions.length} questões objetivas A–D e{' '}
              {allFlashcards.length} flashcards com revisão espaçada).
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setSubMode('QUESTOES')}
              className={`px-3 py-2 rounded-xl text-xs font-extrabold transition cursor-pointer ${
                subMode === 'QUESTOES'
                  ? 'bg-teal-700 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              📝 Banco ({filteredQuestions.length})
            </button>
            <button
              type="button"
              onClick={() => setSubMode('PROVA_OFICIAL')}
              className={`px-3 py-2 rounded-xl text-xs font-extrabold transition cursor-pointer ${
                subMode === 'PROVA_OFICIAL'
                  ? 'bg-amber-500 text-slate-950 shadow-sm ring-2 ring-amber-300'
                  : 'bg-amber-50 text-amber-900 border border-amber-300 hover:bg-amber-100'
              }`}
            >
              🏆 Simulado Oficial (50Q)
            </button>
            <button
              type="button"
              onClick={() => setSubMode('SIMULADO_CUSTOM')}
              className={`px-3 py-2 rounded-xl text-xs font-extrabold transition cursor-pointer ${
                subMode === 'SIMULADO_CUSTOM'
                  ? 'bg-sky-700 text-white shadow-sm'
                  : 'bg-sky-50 text-sky-900 border border-sky-200 hover:bg-sky-100'
              }`}
            >
              🎛️ Personalizado
            </button>
            <button
              type="button"
              onClick={() => setSubMode('FLASHCARDS')}
              className={`px-3 py-2 rounded-xl text-xs font-extrabold transition cursor-pointer ${
                subMode === 'FLASHCARDS'
                  ? 'bg-indigo-700 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              🃏 Flashcards SRS ({srsCounts.due > 0 ? `${srsCounts.due} p/ hoje` : filteredFlashcards.length})
            </button>
          </div>
        </div>

        {(subMode === 'QUESTOES' || subMode === 'FLASHCARDS') && (
          <div className="space-y-3 pt-2 border-t border-slate-100">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 min-w-0">
              <input
                type="text"
                aria-label="Pesquisar questões ou flashcards"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setPage(1);
                }}
                placeholder="Pesquisar por tema, artigo, doença ou palavra-chave..."
                className="w-full min-w-0 max-w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-slate-50 focus:outline-none focus:border-teal-600"
              />

              <select
                aria-label="Filtrar por disciplina"
                value={catFilter}
                onChange={(e) => {
                  setCatFilter(e.target.value);
                  setLessonFilter('ALL');
                  setPage(1);
                }}
                className="w-full min-w-0 max-w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-slate-50 font-semibold text-slate-800"
              >
                <option value="ALL">Todas as Disciplinas (5 Matérias)</option>
                <option value="esp">Conhecimentos Específicos ACE (Peso 2)</option>
                <option value="leg">Legislação Municipal, SUS e CF/88 (Peso 2)</option>
                <option value="por">Língua Portuguesa (Peso 2)</option>
                <option value="rlm">Raciocínio Lógico-Matemático (Peso 2)</option>
                <option value="atu">Conhecimentos Gerais e Hist/Geo RO (Peso 2)</option>
              </select>

              <select
                aria-label="Filtrar por aula"
                value={lessonFilter}
                onChange={(e) => {
                  setLessonFilter(e.target.value);
                  setPage(1);
                }}
                className="w-full min-w-0 max-w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-slate-50 font-semibold text-slate-800"
              >
                <option value="ALL">Todas as 49 Aulas</option>
                {lessons
                  .filter((l) => catFilter === 'ALL' || l.cat === catFilter)
                  .map((l) => (
                    <option key={l.id} value={l.id}>
                      Aula {String(l.num).padStart(2, '0')} — {l.title}
                    </option>
                  ))}
              </select>
            </div>

            {subMode === 'QUESTOES' && (
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-1.5">
                  {(
                    [
                      { id: 'ALL', label: 'Todas' },
                      { id: 'WRONG', label: '❌ Caderno de Erros' },
                      { id: 'UNANSWERED', label: '⬜ Não respondidas' },
                      { id: 'CORRECT', label: '✅ Acertadas' },
                      { id: 'FAVORITES', label: `★ Favoritas (${favoriteQuestions.length})` },
                    ] as const
                  ).map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => {
                        setQuestionStatusFilter(opt.id);
                        setPage(1);
                      }}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-bold border transition cursor-pointer ${
                        questionStatusFilter === opt.id
                          ? 'bg-slate-900 text-white border-slate-900'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-[11px] font-bold text-slate-500">Nível:</span>
                  {(['ALL', 'Fácil', 'Intermediário', 'Difícil'] as const).map((lvl) => (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => {
                        setDifficultyFilter(lvl);
                        setPage(1);
                      }}
                      className={`px-2 py-1 rounded-lg text-[11px] font-bold border transition cursor-pointer ${
                        difficultyFilter === lvl
                          ? 'bg-teal-700 text-white border-teal-700'
                          : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {lvl === 'ALL' ? 'Todos' : lvl}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {subMode === 'QUESTOES' && (
          <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900 text-white p-3.5 rounded-xl">
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <span>
                Respondidas: <strong>{stats.answered}</strong>/{filteredQuestions.length}
              </span>
              <span className="text-emerald-400">
                Acertos: <strong>{stats.correct}</strong>
              </span>
              <span className="text-rose-400">
                Erros: <strong>{stats.wrong}</strong>
              </span>
              <span className="px-2 py-0.5 rounded bg-teal-600 font-extrabold">
                Aproveitamento: {stats.pct}%
              </span>
            </div>
            <button
              type="button"
              onClick={resetSimAnswers}
              className="px-3 py-1 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition cursor-pointer"
            >
              🔄 Zerar Banco Tab Simulado
            </button>
          </div>
        )}
      </div>

      {subMode === 'QUESTOES' && (
        <QuestionBankPanel
          paginatedQuestions={paginatedQuestions}
          safePage={safePage}
          totalPages={totalPages}
          onChangePage={setPage}
          onClearFilters={() => {
            setCatFilter('ALL');
            setLessonFilter('ALL');
            setQuestionStatusFilter('ALL');
            setDifficultyFilter('ALL');
            setSearchTerm('');
            setPage(1);
          }}
          getEffectiveAnswer={getEffectiveAnswer}
          simAnswers={simAnswers}
          lessonAnswers={lessonAnswers}
          onSelectAnswer={setSimAnswer}
          favoriteQuestions={favoriteQuestions}
          onToggleFavorite={toggleFavoriteQuestion}
        />
      )}

      {subMode === 'PROVA_OFICIAL' && (
        <OfficialExamPanel
          allQuestions={allQuestions}
          favoriteQuestions={favoriteQuestions}
          onToggleFavorite={toggleFavoriteQuestion}
          onRecordAttempt={recordExamAttempt}
        />
      )}

      {subMode === 'SIMULADO_CUSTOM' && (
        <CustomExamPanel
          lessons={lessons}
          allQuestions={allQuestions}
          favoriteQuestions={favoriteQuestions}
          onToggleFavorite={toggleFavoriteQuestion}
          onRecordAttempt={recordExamAttempt}
          showToast={showToast}
          customIntent={customIntent}
        />
      )}

      {subMode === 'FLASHCARDS' && (
        <FlashcardDeckPanel
          srsCounts={srsCounts}
          srsFilter={srsFilter}
          onChangeSrsFilter={setSrsFilter}
          displayMode={fcDisplayMode}
          onChangeDisplayMode={setFcDisplayMode}
          filteredFlashcards={filteredFlashcards}
          flashcardSrs={flashcardSrs}
          onRateCard={rateFlashcard}
          onResetSrs={resetFlashcardSrs}
          flippedCards={flippedGlobal}
          onToggleFlip={handleToggleFlip}
        />
      )}
    </div>
  );
};
