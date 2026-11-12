import React from 'react';
import type { Flashcard, FlashcardSrsEntry, SrsRating } from '../../types';
import { renderMathInHtml } from '../../utils/math';
import {
  formatNextReviewLabel,
  getFlashcardSrsStatus,
  isFlashcardDue,
} from '../../utils/srs';

export interface EnrichedFlashcard extends Flashcard {
  cat?: string;
  srsKey?: string;
}

interface FlashcardGridProps {
  flashcards: EnrichedFlashcard[];
  flippedCards: Record<string, boolean>;
  onToggleFlip: (cardKey: string) => void;
  keyPrefix: string;
  columnsClass?: string;
  srsMap?: Record<string, FlashcardSrsEntry>;
  onRateCard?: (srsKey: string, rating: SrsRating) => void;
}

const SRS_BADGE_MAP = {
  new: { label: 'Pendente', cls: 'bg-slate-700/90 text-slate-200 border-slate-500/60' },
  hard: { label: 'Difícil', cls: 'bg-rose-500/25 text-rose-100 border-rose-400/60' },
  good: { label: 'Em revisão', cls: 'bg-amber-500/25 text-amber-100 border-amber-400/60' },
  known: { label: 'Conhecido', cls: 'bg-emerald-500/30 text-emerald-100 border-emerald-400/60' },
} as const;

export const FlashcardGrid: React.FC<FlashcardGridProps> = React.memo(({
  flashcards,
  flippedCards,
  onToggleFlip,
  keyPrefix,
  columnsClass = 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  srsMap,
  onRateCard,
}) => {
  return (
    <div className={`grid ${columnsClass} gap-3 min-w-0 w-full`}>
      {flashcards.map((fc, idx) => {
        const cardKey = `${keyPrefix}_${idx}`;
        const isFlipped = Boolean(flippedCards[cardKey]);
        const frontText = fc.f || fc.front || '';
        const backText = fc.b || fc.back || '';
        const srsKey = fc.srsKey;
        const srsEntry = srsKey && srsMap ? srsMap[srsKey] : undefined;
        const srsStatus = getFlashcardSrsStatus(srsEntry);
        const srsBadge = SRS_BADGE_MAP[srsStatus];
        const dueNow = srsKey && srsMap ? isFlashcardDue(srsEntry) : false;
        const nextReviewText = srsKey && srsMap ? formatNextReviewLabel(srsEntry) : '';

        return (
          <div
            key={cardKey}
            role="button"
            tabIndex={0}
            aria-pressed={isFlipped}
            onClick={() => onToggleFlip(cardKey)}
            onKeyDown={(e) => {
              if (e.target !== e.currentTarget) return;
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onToggleFlip(cardKey);
              }
            }}
            className={`flashcard-3d rounded-xl cursor-pointer select-none min-h-[165px] min-w-0 max-w-full overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 ${
              isFlipped ? 'flipped' : ''
            }`}
          >
            <div className="flashcard-inner relative w-full h-full min-h-[165px] min-w-0 max-w-full">
              {!isFlipped ? (
                <div className="p-4 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 text-white border border-slate-700 h-full min-w-0 max-w-full overflow-hidden break-words flex flex-col justify-between shadow-sm">
                  <div className="flex items-center justify-between gap-2 min-w-0">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-300 truncate min-w-0 flex-1">
                      {fc.lessonTitle ? fc.lessonTitle : `Flashcard #${idx + 1}`}
                    </span>
                    {srsKey && srsMap ? (
                      <span
                        className={`text-[10px] font-bold px-1.5 py-0.5 rounded border shrink-0 ${srsBadge.cls}`}
                      >
                        {srsBadge.label}
                      </span>
                    ) : (
                      <span className="text-[10px] text-slate-400 shrink-0">Clique p/ virar 🔄</span>
                    )}
                  </div>
                  <p
                    className="text-xs sm:text-sm font-bold leading-snug my-2 min-w-0 break-words"
                    dangerouslySetInnerHTML={{ __html: renderMathInHtml(frontText) }}
                  />
                  <div className="flex items-center justify-between gap-2 text-[10px]">
                    <span className="text-teal-300/80 font-semibold">
                      Pergunta / Conceito
                    </span>
                    {srsKey && srsMap && (
                      <span className={dueNow ? 'text-amber-300 font-bold' : 'text-slate-400'}>
                        {nextReviewText}
                      </span>
                    )}
                  </div>
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-gradient-to-br from-teal-700 to-emerald-800 text-white border border-teal-500 h-full min-w-0 max-w-full overflow-hidden break-words flex flex-col justify-between shadow-sm gap-2">
                  <div className="flex items-center justify-between gap-2 min-w-0">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-200 truncate min-w-0 flex-1">
                      Resposta / Regra de Prova
                    </span>
                    <span className="text-[10px] text-teal-100 shrink-0">Virado ✅</span>
                  </div>
                  <p
                    className="text-xs leading-relaxed my-1 font-medium min-w-0 break-words"
                    dangerouslySetInnerHTML={{ __html: renderMathInHtml(backText) }}
                  />
                  {onRateCard && srsKey ? (
                    <div className="pt-2 border-t border-teal-500/40 flex flex-col gap-1.5">
                      <div className="flex items-center justify-between text-[10px] text-teal-100/90">
                        <span className="font-bold">Como foi sua memorização?</span>
                        {srsEntry && (
                          <span>
                            Rep.: {srsEntry.reps} ({srsBadge.label})
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 flex-wrap sm:flex-nowrap">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onRateCard(srsKey, 'hard');
                          }}
                          className={`flex-1 min-w-0 px-2 py-1.5 rounded-lg text-[10px] sm:text-[11px] font-bold border transition ${
                            srsEntry?.status === 'hard'
                              ? 'bg-rose-600 text-white border-rose-300 shadow-sm'
                              : 'bg-rose-900/50 hover:bg-rose-700 text-rose-100 border-rose-400/50'
                          }`}
                          title="Rever ainda hoje (curto prazo)"
                        >
                          😓 Difícil
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onRateCard(srsKey, 'good');
                          }}
                          className={`flex-1 min-w-0 px-2 py-1.5 rounded-lg text-[10px] sm:text-[11px] font-bold border transition ${
                            srsEntry?.status === 'good'
                              ? 'bg-amber-600 text-white border-amber-300 shadow-sm'
                              : 'bg-amber-900/40 hover:bg-amber-700 text-amber-100 border-amber-400/50'
                          }`}
                          title="Avançar intervalo de revisão"
                        >
                          🙂 Bom
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onRateCard(srsKey, 'known');
                          }}
                          className={`flex-1 min-w-0 px-2 py-1.5 rounded-lg text-[10px] sm:text-[11px] font-bold border transition ${
                            srsEntry?.status === 'known'
                              ? 'bg-emerald-600 text-white border-emerald-200 shadow-sm'
                              : 'bg-emerald-950/45 hover:bg-emerald-700 text-emerald-100 border-emerald-400/50'
                          }`}
                          title="Intervalo longo — cartão dominado"
                        >
                          ✅ Já sei
                        </button>
                      </div>
                    </div>
                  ) : (
                    <span className="text-[10px] text-teal-200 font-semibold">
                      Clique para voltar à pergunta
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
});
