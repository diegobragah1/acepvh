import React, { useEffect, useMemo, useState } from 'react';
import type { ExamAttemptRecord } from '../../types';
import {
  OFFICIAL_DRAFT_STORAGE_KEY,
  OFFICIAL_LIMIT_SECONDS,
  buildOfficialExamSet,
  loadOfficialExamDraft,
  saveExamDraft,
  scoreExamQuestions,
  type FlatQuestion,
  type OfficialExamDraft,
} from '../../utils/simulado';
import { useExamTimer } from '../../hooks/useExamTimer';
import { ExamTimerBar } from './ExamTimerBar';
import { QuestionCard } from './QuestionCard';

interface OfficialExamPanelProps {
  allQuestions: FlatQuestion[];
  favoriteQuestions: string[];
  onToggleFavorite: (qid: string) => void;
  onRecordAttempt: (attempt: ExamAttemptRecord) => void;
}

const PRESET_CATEGORIES = {
  esp: { total: 15, hits: 0 },
  por: { total: 10, hits: 0 },
  rlm: { total: 10, hits: 0 },
  leg: { total: 10, hits: 0 },
  atu: { total: 5, hits: 0 },
};

export const OfficialExamPanel: React.FC<OfficialExamPanelProps> = ({
  allQuestions,
  favoriteQuestions,
  onToggleFavorite,
  onRecordAttempt,
}) => {
  const [draft, setDraft] = useState<OfficialExamDraft>(() => loadOfficialExamDraft());
  const [timerRunning, setTimerRunning] = useState<boolean>(false);

  useEffect(() => {
    saveExamDraft(OFFICIAL_DRAFT_STORAGE_KEY, draft);
  }, [draft]);

  useExamTimer(timerRunning && !draft.submitted, () => {
    setDraft((prev) => ({ ...prev, elapsed: prev.elapsed + 1 }));
  });

  const examQuestions = useMemo(
    () => buildOfficialExamSet(allQuestions, draft.seed),
    [allQuestions, draft.seed]
  );

  const examScore = useMemo(
    () => scoreExamQuestions(examQuestions, draft.answers, PRESET_CATEGORIES),
    [examQuestions, draft.answers]
  );

  const handleFinish = () => {
    setTimerRunning(false);
    setDraft((prev) => {
      if (!prev.recorded) {
        onRecordAttempt({
          id: `exam_of_${Date.now()}`,
          mode: 'PROVA_OFICIAL',
          title: `Simulado Oficial IBGP #${prev.seed}`,
          createdAt: Date.now(),
          durationSec: prev.elapsed,
          totalQuestions: examQuestions.length,
          answered: examScore.answered,
          correct: examScore.correct,
          points: examScore.points,
          maxPoints: examQuestions.length * 2,
          pct: Math.round((examScore.correct / Math.max(1, examQuestions.length)) * 100),
          byCategory: examScore.byCat,
        });
      }
      return { ...prev, submitted: true, recorded: true };
    });
  };

  const handleDrawNew = () => {
    setTimerRunning(false);
    setDraft((prev) => ({
      seed: prev.seed + 1,
      answers: {},
      submitted: false,
      recorded: false,
      blindMode: prev.blindMode,
      elapsed: 0,
    }));
  };

  const hidePartial = draft.blindMode && !draft.submitted;

  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white rounded-2xl p-5 shadow-md space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[10px] font-black uppercase">
              Simulação Fiel — Anexo III Retificado (Edital nº 28/2026)
            </span>
            <h3 className="text-lg font-extrabold mt-1">
              🏆 Prova Simulada Oficial ACE — 50 Questões (Peso 2,0 = 100,0 Pontos)
            </h3>
            <p className="text-xs text-slate-300">
              15 Específicos (30 pts) + 10 Português (20 pts) + 10 RLM (20 pts) + 10 Legislação (20 pts) + 5 Gerais (10 pts). Mínimo: <strong>50,0 pontos</strong>. Duração oficial: <strong>3h00 (14h45–17h45)</strong>.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setDraft((prev) => ({ ...prev, blindMode: !prev.blindMode }))}
              className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/15 transition cursor-pointer"
            >
              {draft.blindMode ? '🔒 Gabarito só ao finalizar' : '👁️ Feedback imediato'}
            </button>
            <button
              type="button"
              onClick={handleFinish}
              className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 text-xs font-black shadow-sm transition cursor-pointer"
            >
              ✅ Finalizar e Registrar Nota ({examScore.answered}/50)
            </button>
            <button
              type="button"
              onClick={handleDrawNew}
              className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/15 transition cursor-pointer"
            >
              🎲 Sortear Nova Prova
            </button>
          </div>
        </div>

        <ExamTimerBar
          limitSeconds={OFFICIAL_LIMIT_SECONDS}
          elapsedSeconds={draft.elapsed}
          running={timerRunning}
          submitted={draft.submitted}
          onToggleRunning={() => setTimerRunning((r) => !r)}
          onReset={() => {
            setTimerRunning(false);
            setDraft((prev) => ({ ...prev, elapsed: 0 }));
          }}
          label="Cronômetro Oficial IBGP"
        />

        <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 pt-2 border-t border-white/10 text-xs">
          <div
            className={`p-2.5 rounded-xl border ${
              !hidePartial && examScore.approved
                ? 'bg-emerald-500/20 border-emerald-400 text-emerald-200'
                : 'bg-white/5 border-white/15'
            }`}
          >
            <span className="block text-[10px] uppercase text-slate-300">
              {hidePartial ? 'Respondidas' : 'Nota Atual'}
            </span>
            {hidePartial ? (
              <strong className="text-base font-black">{examScore.answered}/50</strong>
            ) : (
              <>
                <strong className="text-base font-black">{examScore.points},0 / 100 pts</strong>
                <span className="block text-[10px] mt-0.5">
                  {examScore.approved ? '✅ APROVADO (≥50 pts)' : 'Meta: 50,0 pts'}
                </span>
              </>
            )}
          </div>
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
            <span className="block text-[10px] text-teal-300 font-bold">Específicos (15)</span>
            <strong>{hidePartial ? '—' : `${examScore.byCat.esp.hits}/15`}</strong>
          </div>
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
            <span className="block text-[10px] text-blue-300 font-bold">Português (10)</span>
            <strong>{hidePartial ? '—' : `${examScore.byCat.por.hits}/10`}</strong>
          </div>
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
            <span className="block text-[10px] text-indigo-300 font-bold">R. Lógico (10)</span>
            <strong>{hidePartial ? '—' : `${examScore.byCat.rlm.hits}/10`}</strong>
          </div>
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
            <span className="block text-[10px] text-amber-300 font-bold">Legislação (10)</span>
            <strong>{hidePartial ? '—' : `${examScore.byCat.leg.hits}/10`}</strong>
          </div>
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
            <span className="block text-[10px] text-emerald-300 font-bold">Gerais RO (5)</span>
            <strong>{hidePartial ? '—' : `${examScore.byCat.atu.hits}/5`}</strong>
          </div>
        </div>
      </div>

      {examQuestions.map((item, idx) => (
        <QuestionCard
          key={`exam_${draft.seed}_${item.qid}`}
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
          weightLabel={`${idx + 1}/50 · 2,0 pts`}
          revealFeedback={!draft.blindMode || draft.submitted}
          isFavorite={favoriteQuestions.includes(item.qid)}
          onToggleFavorite={() => onToggleFavorite(item.qid)}
        />
      ))}
    </div>
  );
};
