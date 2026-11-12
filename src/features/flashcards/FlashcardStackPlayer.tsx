import React, { useState, useEffect } from 'react';
import type { FlashcardSrsEntry, SrsRating } from '../../types';
import { renderMathInHtml } from '../../utils/math';
import { formatNextReviewLabel, getFlashcardSrsStatus } from '../../utils/srs';
import type { EnrichedFlashcard } from './FlashcardGrid';

interface FlashcardStackPlayerProps {
  cards: EnrichedFlashcard[];
  srsMap: Record<string, FlashcardSrsEntry>;
  onRateCard: (srsKey: string, rating: SrsRating) => void;
}

const SRS_LABELS = {
  new: { label: 'Pendente', cls: 'bg-slate-700 text-slate-100 border-slate-500' },
  hard: { label: 'Difícil', cls: 'bg-rose-600/30 text-rose-100 border-rose-400' },
  good: { label: 'Em revisão', cls: 'bg-amber-600/30 text-amber-100 border-amber-400' },
  known: { label: 'Conhecido', cls: 'bg-emerald-600/30 text-emerald-100 border-emerald-400' },
} as const;

export const FlashcardStackPlayer: React.FC<FlashcardStackPlayerProps> = ({
  cards,
  srsMap,
  onRateCard,
}) => {
  const [cursor, setCursor] = useState(0);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    setCursor(0);
    setFlipped(false);
  }, [cards.length]);

  if (cards.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center text-sm text-slate-500">
        Nenhum cartão corresponde ao filtro selecionado.
      </div>
    );
  }

  const safeIdx = Math.min(cursor, cards.length - 1);
  const card = cards[safeIdx];
  const srsEntry = card.srsKey ? srsMap[card.srsKey] : undefined;
  const status = getFlashcardSrsStatus(srsEntry);
  const badge = SRS_LABELS[status];
  const frontText = card.f || card.front || '';
  const backText = card.b || card.back || '';

  const goPrev = () => {
    setFlipped(false);
    setCursor((prev) => (prev <= 0 ? cards.length - 1 : prev - 1));
  };

  const goNext = () => {
    setFlipped(false);
    setCursor((prev) => (prev >= cards.length - 1 ? 0 : prev + 1));
  };

  const handleRateAndAdvance = (rating: SrsRating) => {
    if (card.srsKey) {
      onRateCard(card.srsKey, rating);
    }
    setFlipped(false);
    setCursor((prev) => (prev >= cards.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-slate-600 bg-white border border-slate-200 rounded-xl px-4 py-2.5">
        <span>
          Cartão <strong className="text-slate-900">{safeIdx + 1}</strong> de{' '}
          <strong className="text-slate-900">{cards.length}</strong>
        </span>
        <span className="text-teal-700 truncate max-w-xs sm:max-w-md">{card.lessonTitle}</span>
        <span>{formatNextReviewLabel(srsEntry)}</span>
      </div>

      <div
        role="button"
        tabIndex={0}
        onClick={() => setFlipped((f) => !f)}
        onKeyDown={(e) => {
          if (e.target !== e.currentTarget) return;
          if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            setFlipped((f) => !f);
          }
        }}
        className={`rounded-2xl p-6 sm:p-8 min-h-[250px] flex flex-col justify-between cursor-pointer select-none shadow-md border transition ${
          flipped
            ? 'bg-gradient-to-br from-teal-700 to-emerald-800 text-white border-teal-500'
            : 'bg-gradient-to-br from-slate-800 to-slate-900 text-white border-slate-700'
        }`}
      >
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-teal-200">
            {flipped ? 'Resposta / Regra de Prova' : 'Pergunta / Conceito'}
          </span>
          <span className={`px-2 py-0.5 rounded border text-[10px] font-bold ${badge.cls}`}>
            {badge.label}
          </span>
        </div>

        <div
          className="text-sm sm:text-base font-bold leading-relaxed my-4 break-words"
          dangerouslySetInnerHTML={{
            __html: renderMathInHtml(flipped ? backText : frontText),
          }}
        />

        <div className="text-[11px] text-slate-200/85 font-semibold">
          {flipped
            ? 'Avalie sua resposta abaixo para agendar a próxima revisão espaçada:'
            : 'Toque no cartão para revelar a resposta e avaliar no SRS 🔄'}
        </div>
      </div>

      {flipped && card.srsKey && (
        <div className="grid grid-cols-3 gap-2">
          <button
            type="button"
            onClick={() => handleRateAndAdvance('hard')}
            className="px-3 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs sm:text-sm font-extrabold shadow-xs transition cursor-pointer"
          >
            😓 Difícil (hoje)
          </button>
          <button
            type="button"
            onClick={() => handleRateAndAdvance('good')}
            className="px-3 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs sm:text-sm font-extrabold shadow-xs transition cursor-pointer"
          >
            🙂 Bom (avançar)
          </button>
          <button
            type="button"
            onClick={() => handleRateAndAdvance('known')}
            className="px-3 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-extrabold shadow-xs transition cursor-pointer"
          >
            ✅ Já sei (longo)
          </button>
        </div>
      )}

      <div className="flex items-center justify-between gap-2 bg-white border border-slate-200 rounded-xl p-3">
        <button
          type="button"
          onClick={goPrev}
          className="px-3.5 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold cursor-pointer"
        >
          ⬅ Anterior
        </button>
        <button
          type="button"
          onClick={() => setFlipped((f) => !f)}
          className="px-4 py-2 rounded-lg bg-indigo-700 hover:bg-indigo-800 text-white text-xs font-extrabold cursor-pointer"
        >
          🔄 {flipped ? 'Ver Pergunta' : 'Virar Cartão'}
        </button>
        <button
          type="button"
          onClick={goNext}
          className="px-3.5 py-2 rounded-lg bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold cursor-pointer"
        >
          Próximo ➔
        </button>
      </div>
    </div>
  );
};
