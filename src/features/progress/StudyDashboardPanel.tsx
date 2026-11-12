import React, { useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { calculateQuestionPerformance, calculateStudyProgress } from '../../utils/progress';
import { getCanonicalFlashcardKey, isFlashcardDue } from '../../utils/srs';
import { formatDurationSeconds } from '../questions/ExamTimerBar';

const SUBJECT_BAR_COLORS: Record<string, string> = {
  esp: 'bg-teal-600',
  leg: 'bg-amber-600',
  por: 'bg-indigo-600',
  rlm: 'bg-purple-600',
  atu: 'bg-emerald-600',
};

export const StudyDashboardPanel: React.FC = () => {
  const {
    appData,
    getTopicStatus,
    completedSubtopics,
    simAnswers,
    lessonAnswers,
    flashcardSrs,
    favoriteLessons,
    favoriteQuestions,
    lessonNotes,
    examHistory,
    clearExamHistory,
    lastStudy,
    setCurrentLessonId,
    setCurrentTab,
    openLessonBlock,
    openSimuladoWithIntent,
  } = useApp();

  const lessons = appData?.lessons || [];

  const studySummary = useMemo(
    () => calculateStudyProgress(lessons, getTopicStatus, completedSubtopics),
    [lessons, getTopicStatus, completedSubtopics]
  );

  const perfSummary = useMemo(
    () => calculateQuestionPerformance(lessons, simAnswers, lessonAnswers),
    [lessons, simAnswers, lessonAnswers]
  );

  const srsStats = useMemo(() => {
    const now = Date.now();
    let total = 0;
    let due = 0;
    lessons.forEach((l) => {
      (l.blocks || []).forEach((b, bIdx) => {
        (b.flashcards || []).forEach((_, fcIdx) => {
          total += 1;
          const key = getCanonicalFlashcardKey(l.id, bIdx, fcIdx);
          if (isFlashcardDue(flashcardSrs[key], now)) {
            due += 1;
          }
        });
      });
    });
    return { total, due };
  }, [lessons, flashcardSrs]);

  const subjectLessonCounts = useMemo(() => {
    const map: Record<string, { total: number; done: number }> = {
      esp: { total: 0, done: 0 },
      leg: { total: 0, done: 0 },
      por: { total: 0, done: 0 },
      rlm: { total: 0, done: 0 },
      atu: { total: 0, done: 0 },
    };
    lessons.forEach((l) => {
      if (!map[l.cat]) return;
      map[l.cat].total += 1;
      const st = getTopicStatus(l.id);
      if (st === 'completed' || st === 'mastered') {
        map[l.cat].done += 1;
      }
    });
    return map;
  }, [lessons, getTopicStatus]);

  const resumeLesson = useMemo(() => {
    if (lastStudy?.lessonId) {
      const found = lessons.find((l) => l.id === lastStudy.lessonId);
      if (found) return found;
    }
    return (
      lessons.find((l) => getTopicStatus(l.id) === 'studying') ||
      lessons.find((l) => getTopicStatus(l.id) === 'review') ||
      lessons.find((l) => getTopicStatus(l.id) === 'not_started') ||
      lessons[0]
    );
  }, [lessons, lastStudy, getTopicStatus]);

  const flaggedReviewLessons = useMemo(
    () => lessons.filter((l) => getTopicStatus(l.id) === 'review'),
    [lessons, getTopicStatus]
  );

  if (lessons.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-teal-200 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
        <div>
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-teal-800 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-full">
            Painel Individual do Candidato ACE
          </span>
          <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
            Meu Progresso, Desempenho &amp; Revisão Inteligente
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-600">
          <span className="px-2.5 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-900">
            ★ {favoriteLessons.length} aulas · {favoriteQuestions.length} questões fav.
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-sky-50 border border-sky-200 text-sky-900">
            📝 {Object.keys(lessonNotes).length} anotações
          </span>
        </div>
      </div>

      {/* 4 Main Action & Telemetry Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {/* Retomar de onde parou */}
        <div className="p-3.5 rounded-xl bg-gradient-to-br from-slate-900 to-teal-950 text-white flex flex-col justify-between gap-2.5 shadow-xs">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-300">
              {lastStudy ? '▶ Retomar de onde parei' : '🚀 Próxima Aula Recomendada'}
            </span>
            {resumeLesson && (
              <p className="text-xs sm:text-sm font-bold leading-snug mt-1 line-clamp-2">
                Aula {String(resumeLesson.num).padStart(2, '0')} — {resumeLesson.title}
              </p>
            )}
          </div>
          {resumeLesson && (
            <button
              type="button"
              onClick={() => {
                const resumeBlockIdx =
                  lastStudy?.lessonId === resumeLesson.id ? lastStudy.blockIdx : undefined;
                openLessonBlock(resumeLesson.id, resumeBlockIdx, 'ALL');
              }}
              className="w-full px-3 py-1.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-black transition cursor-pointer"
            >
              Continuar Estudando ➔
            </button>
          )}
        </div>

        {/* Conclusão das 49 Aulas */}
        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between gap-2">
          <div>
            <div className="flex items-center justify-between text-xs font-bold text-slate-600">
              <span>Progresso na Apostila</span>
              <span className="text-teal-700 font-black">{studySummary.overallPct}%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden mt-1.5">
              <div
                className="h-full bg-teal-600 transition-all"
                style={{ width: `${studySummary.overallPct}%` }}
              />
            </div>
            <p className="text-xs text-slate-600 mt-1.5">
              <strong className="text-slate-900">{studySummary.completedLessons}</strong> de{' '}
              {studySummary.totalLessons} aulas &bull;{' '}
              <strong className="text-slate-900">{studySummary.completedSubtopics}</strong>/
              {studySummary.totalSubtopics} eixos
            </p>
          </div>
          <button
            type="button"
            onClick={() => setCurrentTab('tab-apostila')}
            className="w-full px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 text-xs font-bold transition cursor-pointer"
          >
            📚 Abrir Apostila (49 Aulas)
          </button>
        </div>

        {/* Desempenho em Questões & Caderno de Erros */}
        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between gap-2">
          <div>
            <div className="flex items-center justify-between text-xs font-bold text-slate-600">
              <span>Questões ({perfSummary.totalQuestions})</span>
              <span className="text-emerald-700 font-black">
                {perfSummary.accuracyPct !== null ? `${perfSummary.accuracyPct}% acertos` : 'Sem respostas'}
              </span>
            </div>
            <p className="text-xs text-slate-700 mt-1.5">
              Respondidas: <strong>{perfSummary.answered}</strong> &bull;{' '}
              <span className="text-emerald-700 font-bold">{perfSummary.correct} ✅</span> &bull;{' '}
              <span className="text-rose-700 font-bold">{perfSummary.wrong} ❌</span>
            </p>
          </div>
          <div className="flex gap-1.5">
            <button
              type="button"
              onClick={() =>
                openSimuladoWithIntent({
                  subMode: 'QUESTOES',
                  statusFilter: perfSummary.wrong > 0 ? 'WRONG' : 'UNANSWERED',
                })
              }
              className="flex-1 px-2.5 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition cursor-pointer"
            >
              {perfSummary.wrong > 0 ? `❌ Caderno de Erros (${perfSummary.wrong})` : '✍️ Treinar Questões'}
            </button>
          </div>
        </div>

        {/* SRS Flashcards */}
        <div className="p-3.5 rounded-xl bg-indigo-50/70 border border-indigo-200 flex flex-col justify-between gap-2">
          <div>
            <div className="flex items-center justify-between text-xs font-bold text-indigo-900">
              <span>Revisão Espaçada (SRS)</span>
              <span className="px-1.5 py-0.5 rounded bg-indigo-200 text-indigo-950 font-black">
                {srsStats.due} p/ hoje
              </span>
            </div>
            <p className="text-xs text-indigo-900/80 mt-1.5">
              Total de <strong>{srsStats.total}</strong> flashcards ativos com agendamento automático.
            </p>
          </div>
          <button
            type="button"
            onClick={() => openSimuladoWithIntent({ subMode: 'FLASHCARDS', srsFilter: 'DUE' })}
            className="w-full px-3 py-1.5 rounded-lg bg-indigo-700 hover:bg-indigo-800 text-white text-xs font-bold transition cursor-pointer"
          >
            🃏 Revisar Flashcards Hoje ➔
          </button>
        </div>
      </div>

      {/* Progresso e Taxa de Acertos por Disciplina */}
      <div className="space-y-2 pt-1">
        <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-600">
          Desempenho por Disciplina do Edital (Aulas Concluídas &amp; Precisão em Questões)
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
          {perfSummary.byCategory.map((catStat) => {
            const lessonStat = subjectLessonCounts[catStat.cat] || { total: 1, done: 0 };
            const lessonPct = Math.round((lessonStat.done / Math.max(1, lessonStat.total)) * 100);
            const barCls = SUBJECT_BAR_COLORS[catStat.cat] || 'bg-teal-600';

            return (
              <div
                key={catStat.cat}
                className="p-3 rounded-xl border border-slate-200 bg-white space-y-1.5 text-xs"
              >
                <div className="flex items-center justify-between gap-1">
                  <span className="font-extrabold text-slate-900 truncate">{catStat.shortLabel}</span>
                  <span className="font-bold text-slate-600">
                    {lessonStat.done}/{lessonStat.total} aulas
                  </span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                  <div className={`h-full ${barCls}`} style={{ width: `${lessonPct}%` }} />
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-600">
                  <span>
                    Questões:{' '}
                    {catStat.accuracyPct !== null ? (
                      <strong
                        className={
                          catStat.accuracyPct >= 70
                            ? 'text-emerald-700'
                            : catStat.accuracyPct >= 50
                              ? 'text-amber-700'
                              : 'text-rose-700'
                        }
                      >
                        {catStat.accuracyPct}% ({catStat.correct}/{catStat.answered})
                      </strong>
                    ) : (
                      '0 resp.'
                    )}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      openSimuladoWithIntent({ subMode: 'QUESTOES', cat: catStat.cat })
                    }
                    className="text-teal-700 hover:underline font-bold cursor-pointer"
                  >
                    Treinar
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pontos de Atenção: Assuntos com baixo desempenho (<65%) ou marcados para Revisão */}
      {(perfSummary.weakLessons.length > 0 || flaggedReviewLessons.length > 0) && (
        <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-amber-950">
              ⚠️ Assuntos Prioritários para Reforço (Baixo Aproveitamento ou Marcados p/ Revisão)
            </h3>
            <span className="text-[11px] text-amber-800 font-semibold">
              Critério: &lt; 65% de acerto (mín. 2 questões) ou status “Revisar”
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {perfSummary.weakLessons.slice(0, 4).map((w) => (
              <div
                key={`weak_${w.lessonId}`}
                className="flex flex-wrap items-center justify-between gap-2 bg-white border border-amber-200 rounded-lg p-2.5 text-xs"
              >
                <div className="min-w-0 flex-1">
                  <div className="font-bold text-slate-900 truncate">
                    Aula {String(w.lessonNum).padStart(2, '0')} — {w.title}
                  </div>
                  <div className="text-[11px] text-rose-700 font-bold">
                    {w.accuracyPct}% de acerto ({w.correct}/{w.answered} questões)
                  </div>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    type="button"
                    onClick={() => openLessonBlock(w.lessonId, undefined, 'ALL')}
                    aria-label={`Revisar Aula ${String(w.lessonNum).padStart(2, '0')}: ${w.title}`}
                    className="px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-[11px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    📖 Revisar Aula
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      openSimuladoWithIntent({
                        subMode: 'SIMULADO_CUSTOM',
                        lessonId: w.lessonId,
                      })
                    }
                    aria-label={`Abrir simulado da Aula ${String(w.lessonNum).padStart(2, '0')}: ${w.title}`}
                    className="px-2 py-1 rounded bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-[11px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    🎯 Simulado
                  </button>
                </div>
              </div>
            ))}

            {flaggedReviewLessons
              .filter((fl) => !perfSummary.weakLessons.some((w) => w.lessonId === fl.id))
              .slice(0, 4)
              .map((fl) => (
                <div
                  key={`rev_${fl.id}`}
                  className="flex flex-wrap items-center justify-between gap-2 bg-white border border-amber-200 rounded-lg p-2.5 text-xs"
                >
                  <div className="min-w-0 flex-1">
                    <div className="font-bold text-slate-900 truncate">
                      Aula {String(fl.num).padStart(2, '0')} — {fl.title}
                    </div>
                    <div className="text-[11px] text-amber-800 font-bold">
                      Marcada como “Revisar” na Apostila
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => openLessonBlock(fl.id, undefined, 'ALL')}
                    aria-label={`Abrir revisão da Aula ${String(fl.num).padStart(2, '0')}: ${fl.title}`}
                    className="px-2.5 py-1 rounded bg-teal-700 hover:bg-teal-800 text-white font-bold text-[11px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    📖 Abrir Revisão
                  </button>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Histórico Recente de Simulados Cronometrados */}
      {examHistory.length > 0 && (
        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
              📊 Histórico de Simulados Concluídos ({examHistory.length})
            </h3>
            <button
              type="button"
              onClick={() => {
                if (window.confirm('Deseja apagar o histórico de simulados realizados?')) {
                  clearExamHistory();
                }
              }}
              className="text-[11px] text-rose-700 hover:underline font-bold cursor-pointer"
            >
              Limpar histórico
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {examHistory.slice(0, 6).map((attempt) => (
              <div
                key={attempt.id}
                className="bg-white border border-slate-200 rounded-lg p-2.5 text-xs space-y-1"
              >
                <div className="flex items-center justify-between gap-1">
                  <span
                    className={`px-1.5 py-0.5 rounded text-[10px] font-extrabold uppercase ${
                      attempt.mode === 'PROVA_OFICIAL'
                        ? 'bg-amber-100 text-amber-900'
                        : 'bg-sky-100 text-sky-900'
                    }`}
                  >
                    {attempt.mode === 'PROVA_OFICIAL' ? 'Oficial 50Q' : 'Personalizado'}
                  </span>
                  <span className="text-[10px] text-slate-500">
                    {new Date(attempt.createdAt).toLocaleDateString('pt-BR')}
                  </span>
                </div>
                <div className="font-bold text-slate-900 truncate">{attempt.title}</div>
                <div className="flex items-center justify-between text-[11px] text-slate-700">
                  <span>
                    <strong className={attempt.pct >= 50 ? 'text-emerald-700' : 'text-rose-700'}>
                      {attempt.correct}/{attempt.totalQuestions}
                    </strong>{' '}
                    ({attempt.pct}%) &bull; {attempt.points} pts
                  </span>
                  <span className="mono text-slate-500">
                    ⏱ {formatDurationSeconds(attempt.durationSec)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
