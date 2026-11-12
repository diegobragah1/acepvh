import React, { useEffect, useMemo, useState } from 'react';
import type { ExamAttemptRecord, Lesson, QuestionDifficulty } from '../../types';
import {
  CATEGORY_OPTIONS,
  CUSTOM_DRAFT_STORAGE_KEY,
  loadCustomExamDraft,
  saveExamDraft,
  scoreExamQuestions,
  seededPick,
  type CustomExamDraft,
  type FlatQuestion,
} from '../../utils/simulado';
import { useExamTimer } from '../../hooks/useExamTimer';
import { ExamTimerBar } from './ExamTimerBar';
import { QuestionCard } from './QuestionCard';

interface CustomExamPanelProps {
  lessons: Lesson[];
  allQuestions: FlatQuestion[];
  favoriteQuestions: string[];
  onToggleFavorite: (qid: string) => void;
  onRecordAttempt: (attempt: ExamAttemptRecord) => void;
  showToast: (msg: string) => void;
  customIntent?: { lessonId: string; timestamp: number } | null;
}

export const CustomExamPanel: React.FC<CustomExamPanelProps> = ({
  lessons,
  allQuestions,
  favoriteQuestions,
  onToggleFavorite,
  onRecordAttempt,
  showToast,
  customIntent,
}) => {
  const [draft, setDraft] = useState<CustomExamDraft>(() => loadCustomExamDraft());
  const [timerRunning, setTimerRunning] = useState<boolean>(false);

  useEffect(() => {
    if (customIntent?.lessonId) {
      setTimerRunning(false);
      setDraft((prev) => ({
        ...prev,
        lessonId: customIntent.lessonId,
        answers: {},
        submitted: false,
        recorded: false,
        elapsed: 0,
      }));
    }
  }, [customIntent]);

  useEffect(() => {
    saveExamDraft(CUSTOM_DRAFT_STORAGE_KEY, draft);
  }, [draft]);

  useExamTimer(timerRunning && !draft.submitted, () => {
    setDraft((prev) => ({ ...prev, elapsed: prev.elapsed + 1 }));
  });

  const customPool = useMemo(() => {
    return allQuestions.filter((q) => {
      if (draft.lessonId !== 'ALL') {
        if (q.lessonId !== draft.lessonId) return false;
      } else if (draft.cats.length > 0 && !draft.cats.includes(q.cat)) {
        return false;
      }
      if (draft.difficulty !== 'ALL' && q.difficulty !== draft.difficulty) return false;
      return true;
    });
  }, [allQuestions, draft.cats, draft.lessonId, draft.difficulty]);

  const examQuestions = useMemo(
    () => seededPick(customPool, Math.min(draft.count, customPool.length), draft.seed),
    [customPool, draft.count, draft.seed]
  );

  const customScore = useMemo(
    () => scoreExamQuestions(examQuestions, draft.answers),
    [examQuestions, draft.answers]
  );

  const handleFinish = () => {
    setTimerRunning(false);
    if (examQuestions.length === 0) return;
    setDraft((prev) => {
      if (!prev.recorded) {
        const selectedLessonTitle =
          prev.lessonId !== 'ALL'
            ? lessons.find((l) => l.id === prev.lessonId)?.title
            : undefined;
        onRecordAttempt({
          id: `exam_cu_${Date.now()}`,
          mode: 'SIMULADO_CUSTOM',
          title: selectedLessonTitle
            ? `Treino: ${selectedLessonTitle}`
            : `Simulado Personalizado (${examQuestions.length}Q)`,
          createdAt: Date.now(),
          durationSec: prev.elapsed,
          totalQuestions: examQuestions.length,
          answered: customScore.answered,
          correct: customScore.correct,
          points: customScore.correct * 2,
          maxPoints: examQuestions.length * 2,
          pct: customScore.pct,
          byCategory: customScore.byCat,
        });
      }
      return { ...prev, submitted: true, recorded: true };
    });
  };

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
              🎛️ Construtor de Simulado Personalizado
            </h3>
            <p className="text-xs text-slate-600">
              Monte treinos direcionados por disciplina, aula específica do Edital, nível de dificuldade e tempo.
            </p>
          </div>
          <span className="px-2.5 py-1 rounded-lg bg-sky-50 border border-sky-200 text-sky-900 text-xs font-extrabold">
            Disponíveis no filtro: {customPool.length} questões
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          <div>
            <label htmlFor="custom-lesson-select" className="block font-bold text-slate-700 mb-1">
              Aula / Assunto:
            </label>
            <select
              id="custom-lesson-select"
              value={draft.lessonId}
              onChange={(e) => {
                setTimerRunning(false);
                setDraft((prev) => ({
                  ...prev,
                  lessonId: e.target.value,
                  answers: {},
                  submitted: false,
                  recorded: false,
                  elapsed: 0,
                }));
              }}
              className="w-full min-w-0 max-w-full px-3 py-2 rounded-xl border border-slate-300 bg-slate-50 font-semibold text-slate-800"
            >
              <option value="ALL">Todas conforme disciplinas</option>
              {lessons.map((l) => (
                <option key={l.id} value={l.id}>
                  Aula {String(l.num).padStart(2, '0')} — {l.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="custom-count-select" className="block font-bold text-slate-700 mb-1">
              Quantidade:
            </label>
            <select
              id="custom-count-select"
              value={draft.count}
              onChange={(e) =>
                setDraft((prev) => ({ ...prev, count: Number(e.target.value) }))
              }
              className="w-full min-w-0 max-w-full px-3 py-2 rounded-xl border border-slate-300 bg-slate-50 font-semibold text-slate-800"
            >
              {[10, 15, 20, 30, 50].map((n) => (
                <option key={n} value={n}>
                  {n} questões
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="custom-difficulty-select" className="block font-bold text-slate-700 mb-1">
              Nível:
            </label>
            <select
              id="custom-difficulty-select"
              value={draft.difficulty}
              onChange={(e) =>
                setDraft((prev) => ({
                  ...prev,
                  difficulty: e.target.value as 'ALL' | QuestionDifficulty,
                }))
              }
              className="w-full min-w-0 max-w-full px-3 py-2 rounded-xl border border-slate-300 bg-slate-50 font-semibold text-slate-800"
            >
              <option value="ALL">Todos os níveis</option>
              <option value="Fácil">Fácil</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Difícil">Difícil</option>
            </select>
          </div>

          <div>
            <label htmlFor="custom-timer-select" className="block font-bold text-slate-700 mb-1">
              Cronômetro:
            </label>
            <select
              id="custom-timer-select"
              value={draft.timeLimit === null ? 'none' : String(draft.timeLimit)}
              onChange={(e) =>
                setDraft((prev) => ({
                  ...prev,
                  timeLimit: e.target.value === 'none' ? null : Number(e.target.value),
                }))
              }
              className="w-full min-w-0 max-w-full px-3 py-2 rounded-xl border border-slate-300 bg-slate-50 font-semibold text-slate-800"
            >
              <option value="none">Sem limite de tempo</option>
              <option value="1800">30 minutos</option>
              <option value="3600">1 hora</option>
              <option value="5400">1h30</option>
              <option value="10800">3 horas (Padrão IBGP)</option>
            </select>
          </div>
        </div>

        {draft.lessonId === 'ALL' && (
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-bold text-slate-600 mr-1">Disciplinas:</span>
            {CATEGORY_OPTIONS.map((c) => {
              const selected = draft.cats.includes(c.id);
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => {
                    setTimerRunning(false);
                    setDraft((prev) => ({
                      ...prev,
                      cats: prev.cats.includes(c.id)
                        ? prev.cats.length > 1
                          ? prev.cats.filter((x) => x !== c.id)
                          : prev.cats
                        : [...prev.cats, c.id],
                      answers: {},
                      submitted: false,
                      recorded: false,
                      elapsed: 0,
                    }));
                  }}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold border transition cursor-pointer ${
                    selected
                      ? 'bg-sky-700 text-white border-sky-700'
                      : 'bg-slate-50 text-slate-600 border-slate-200'
                  }`}
                >
                  {selected ? '✓ ' : ''}
                  {c.label}
                </button>
              );
            })}
          </div>
        )}

        <div className="bg-slate-900 text-white rounded-2xl p-4 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="text-xs space-y-0.5">
              <div>
                Caderno Atual: <strong>{examQuestions.length}</strong> questões &bull;{' '}
                Respondidas: <strong>{customScore.answered}</strong>
                {(!draft.blindMode || draft.submitted) && (
                  <>
                    {' '}&bull; Acertos:{' '}
                    <strong className="text-emerald-300">
                      {customScore.correct}/{customScore.total} ({customScore.pct}%)
                    </strong>
                  </>
                )}
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setDraft((prev) => ({ ...prev, blindMode: !prev.blindMode }))}
                className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/15 cursor-pointer"
              >
                {draft.blindMode ? '🔒 Gabarito só ao finalizar' : '👁️ Feedback imediato'}
              </button>
              <button
                type="button"
                onClick={handleFinish}
                disabled={examQuestions.length === 0}
                className="px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 disabled:opacity-40 text-slate-950 text-xs font-black cursor-pointer"
              >
                ✅ Finalizar &amp; Salvar Resultado
              </button>
              <button
                type="button"
                onClick={() => {
                  setTimerRunning(false);
                  setDraft((prev) => ({
                    ...prev,
                    seed: prev.seed + 1,
                    answers: {},
                    submitted: false,
                    recorded: false,
                    elapsed: 0,
                  }));
                  showToast('🎲 Novo simulado personalizado sorteado!');
                }}
                className="px-3.5 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold cursor-pointer"
              >
                🎲 Sortear Novo
              </button>
            </div>
          </div>

          <ExamTimerBar
            limitSeconds={draft.timeLimit}
            elapsedSeconds={draft.elapsed}
            running={timerRunning}
            submitted={draft.submitted}
            onToggleRunning={() => setTimerRunning((r) => !r)}
            onReset={() => {
              setTimerRunning(false);
              setDraft((prev) => ({ ...prev, elapsed: 0 }));
            }}
            label="Cronômetro Personalizado"
          />
        </div>
      </div>

      {examQuestions.map((item, idx) => (
        <QuestionCard
          key={`custom_${draft.seed}_${item.qid}`}
          question={item}
          index={idx}
          selectedOption={draft.answers[item.qid]}
          onSelectOption={(optIdx) => {
            if (!timerRunning && !draft.submitted) {
              setTimerRunning(true);
            }
            setDraft((prev) => ({
              ...prev,
              answers: { ...prev.answers, [item.qid]: optIdx },
            }));
          }}
          badgeLabel={`${item.catName} • Aula ${String(item.lessonNum).padStart(2, '0')}`}
          weightLabel={`${idx + 1}/${examQuestions.length}`}
          revealFeedback={!draft.blindMode || draft.submitted}
          isFavorite={favoriteQuestions.includes(item.qid)}
          onToggleFavorite={() => onToggleFavorite(item.qid)}
        />
      ))}
    </div>
  );
};
