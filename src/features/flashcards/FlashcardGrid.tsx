import React from 'react';
import type { Flashcard } from '../../types';
import { renderMathInHtml } from '../../utils/math';

export interface EnrichedFlashcard extends Flashcard {
  cat?: string;
}

interface FlashcardGridProps {
  flashcards: EnrichedFlashcard[];
  flippedCards: Record<string, boolean>;
  onToggleFlip: (cardKey: string) => void;
  keyPrefix: string;
  columnsClass?: string;
}

export const FlashcardGrid: React.FC<FlashcardGridProps> = React.memo(({
  flashcards,
  flippedCards,
  onToggleFlip,
  keyPrefix,
  columnsClass = 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
}) => {
  return (
    <div className={`grid ${columnsClass} gap-3`}>
      {flashcards.map((fc, idx) => {
        const cardKey = `${keyPrefix}_${idx}`;
        const isFlipped = Boolean(flippedCards[cardKey]);
        const frontText = fc.f || fc.front || '';
        const backText = fc.b || fc.back || '';

        return (
          <div
            key={cardKey}
            onClick={() => onToggleFlip(cardKey)}
            className={`flashcard-3d rounded-xl cursor-pointer select-none min-h-[150px] ${
              isFlipped ? 'flipped' : ''
            }`}
          >
            <div className="flashcard-inner relative w-full h-full min-h-[150px]">
              {!isFlipped ? (
                <div className="p-4 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 text-white border border-slate-700 h-full flex flex-col justify-between shadow-sm">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-300 truncate">
                      {fc.lessonTitle ? fc.lessonTitle : `Flashcard #${idx + 1}`}
                    </span>
                    <span className="text-[10px] text-slate-400 shrink-0">Clique p/ virar 🔄</span>
                  </div>
                  <p
                    className="text-xs sm:text-sm font-bold leading-snug my-2"
                    dangerouslySetInnerHTML={{ __html: renderMathInHtml(frontText) }}
                  />
                  <span className="text-[10px] text-teal-300/80 font-semibold">
                    Pergunta / Conceito
                  </span>
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-gradient-to-br from-teal-700 to-emerald-800 text-white border border-teal-500 h-full flex flex-col justify-between shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-200">
                      Resposta / Regra de Prova
                    </span>
                    <span className="text-[10px] text-teal-100">Virado ✅</span>
                  </div>
                  <p
                    className="text-xs leading-relaxed my-2 font-medium"
                    dangerouslySetInnerHTML={{ __html: renderMathInHtml(backText) }}
                  />
                  <span className="text-[10px] text-teal-200 font-semibold">
                    Clique para voltar à pergunta
                  </span>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
});
