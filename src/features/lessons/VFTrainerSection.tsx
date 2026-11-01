import React, { useState, useEffect } from 'react';
import type { VFChallenge } from '../../services/lessonService';
import { renderMathInHtml } from '../../utils/math';

interface VFTrainerSectionProps {
  lessonId: string;
  challenges: VFChallenge[];
  isOpen: boolean;
  onClose: () => void;
}

export const VFTrainerSection: React.FC<VFTrainerSectionProps> = ({
  lessonId,
  challenges,
  isOpen,
  onClose,
}) => {
  const [vfAnswers, setVfAnswers] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setVfAnswers({});
  }, [lessonId]);

  if (!isOpen || challenges.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl border-2 border-emerald-500 p-4 sm:p-5 shadow-md space-y-4 no-print">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
        <div>
          <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 text-[10px] font-extrabold uppercase">
            Julgamento Rápido de Assertivas
          </span>
          <h3 className="text-sm sm:text-base font-extrabold text-slate-900 mt-0.5">
            ⚡ Treinador de Pegadinhas (Certo ou Errado) — Desta Aula
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setVfAnswers({})}
            className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold cursor-pointer"
          >
            Reiniciar V/F
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-2.5 py-1 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-800 text-xs font-bold cursor-pointer"
          >
            Fechar ✕
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {challenges.map((vf, idx) => {
          const userChoice = vfAnswers[vf.id];
          const answered = userChoice !== undefined;
          const isHit = answered && userChoice === vf.isTrue;

          return (
            <div
              key={vf.id}
              className={`p-3.5 rounded-xl border transition flex flex-col justify-between gap-3 ${
                !answered
                  ? 'bg-slate-50 border-slate-200'
                  : isHit
                  ? 'bg-emerald-50/70 border-emerald-400'
                  : 'bg-rose-50/70 border-rose-400'
              }`}
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[10px] font-bold text-slate-500">
                  <span>Assertiva #{idx + 1}</span>
                  <span className="truncate max-w-[200px]">{vf.blockTitle}</span>
                </div>
                <p
                  className="text-xs sm:text-sm font-semibold text-slate-900 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: renderMathInHtml(vf.statement) }}
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setVfAnswers((prev) => ({ ...prev, [vf.id]: true }))}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-extrabold border transition cursor-pointer ${
                      userChoice === true
                        ? vf.isTrue
                          ? 'bg-emerald-600 text-white border-emerald-700'
                          : 'bg-rose-600 text-white border-rose-700'
                        : 'bg-white hover:bg-emerald-50 text-emerald-800 border-emerald-300'
                    }`}
                  >
                    ✅ CERTO
                  </button>
                  <button
                    type="button"
                    onClick={() => setVfAnswers((prev) => ({ ...prev, [vf.id]: false }))}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-extrabold border transition cursor-pointer ${
                      userChoice === false
                        ? !vf.isTrue
                          ? 'bg-emerald-600 text-white border-emerald-700'
                          : 'bg-rose-600 text-white border-rose-700'
                        : 'bg-white hover:bg-rose-50 text-rose-800 border-rose-300'
                    }`}
                  >
                    ❌ ERRADO
                  </button>
                </div>

                {answered && (
                  <div
                    className={`p-2.5 rounded-lg text-[11px] leading-relaxed border ${
                      isHit
                        ? 'bg-emerald-100/80 border-emerald-300 text-emerald-950'
                        : 'bg-amber-100/80 border-amber-300 text-amber-950'
                    }`}
                  >
                    <p className="font-extrabold mb-0.5">
                      {isHit
                        ? '🎯 Acertou!'
                        : `⚠️ Gabarito: ${vf.isTrue ? 'CERTO' : 'ERRADO'}`}
                    </p>
                    <div dangerouslySetInnerHTML={{ __html: renderMathInHtml(vf.explanation) }} />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
