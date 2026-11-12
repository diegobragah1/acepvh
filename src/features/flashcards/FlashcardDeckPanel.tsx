import React from 'react';
import type { FlashcardSrsEntry, SrsRating } from '../../types';
import type { FlatFlashcard, SrsFilterMode } from '../../utils/simulado';
import { FlashcardGrid } from './FlashcardGrid';
import { FlashcardStackPlayer } from './FlashcardStackPlayer';

interface SrsCountsSummary {
  total: number;
  due: number;
  hard: number;
  fresh: number;
  known: number;
}

interface FlashcardDeckPanelProps {
  srsCounts: SrsCountsSummary;
  srsFilter: SrsFilterMode;
  onChangeSrsFilter: (filter: SrsFilterMode) => void;
  displayMode: 'GRID' | 'STACK';
  onChangeDisplayMode: (mode: 'GRID' | 'STACK') => void;
  filteredFlashcards: FlatFlashcard[];
  flashcardSrs: Record<string, FlashcardSrsEntry>;
  onRateCard: (srsKey: string, rating: SrsRating) => void;
  onResetSrs: () => void;
  flippedCards: Record<string, boolean>;
  onToggleFlip: (cardKey: string) => void;
}

export const FlashcardDeckPanel: React.FC<FlashcardDeckPanelProps> = ({
  srsCounts,
  srsFilter,
  onChangeSrsFilter,
  displayMode,
  onChangeDisplayMode,
  filteredFlashcards,
  flashcardSrs,
  onRateCard,
  onResetSrs,
  flippedCards,
  onToggleFlip,
}) => {
  return (
    <div className="space-y-4">
      <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-1.5">
            {(
              [
                { id: 'ALL', label: `Todos (${srsCounts.total})` },
                { id: 'DUE', label: `⏰ Para revisar hoje (${srsCounts.due})` },
                { id: 'HARD', label: `😓 Difíceis (${srsCounts.hard})` },
                { id: 'NEW', label: `🆕 Pendentes (${srsCounts.fresh})` },
                { id: 'KNOWN', label: `✅ Conhecidos (${srsCounts.known})` },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => onChangeSrsFilter(tab.id)}
                className={`px-2.5 py-1.5 rounded-xl text-xs font-bold border transition cursor-pointer ${
                  srsFilter === tab.id
                    ? 'bg-indigo-700 text-white border-indigo-700'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex rounded-xl border border-slate-200 bg-slate-100 p-0.5 text-xs font-bold">
              <button
                type="button"
                onClick={() => onChangeDisplayMode('GRID')}
                className={`px-2.5 py-1 rounded-lg transition cursor-pointer ${
                  displayMode === 'GRID' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600'
                }`}
              >
                🗂️ Grade
              </button>
              <button
                type="button"
                onClick={() => onChangeDisplayMode('STACK')}
                className={`px-2.5 py-1 rounded-lg transition cursor-pointer ${
                  displayMode === 'STACK' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600'
                }`}
              >
                🎯 Pilha (1 por vez)
              </button>
            </div>

            {Object.keys(flashcardSrs).length > 0 && (
              <button
                type="button"
                onClick={() => {
                  if (
                    window.confirm(
                      'Deseja reiniciar o histórico de revisão espaçada (SRS) de todos os flashcards?'
                    )
                  ) {
                    onResetSrs();
                  }
                }}
                className="px-2.5 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 text-xs font-bold cursor-pointer"
              >
                ↺ Zerar SRS
              </button>
            )}
          </div>
        </div>
      </div>

      {displayMode === 'STACK' ? (
        <FlashcardStackPlayer
          cards={filteredFlashcards}
          srsMap={flashcardSrs}
          onRateCard={onRateCard}
        />
      ) : filteredFlashcards.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center text-sm text-slate-600">
          Nenhum flashcard encontrado para este filtro SRS.
        </div>
      ) : (
        <FlashcardGrid
          flashcards={filteredFlashcards}
          flippedCards={flippedCards}
          onToggleFlip={onToggleFlip}
          keyPrefix="global_fc"
          srsMap={flashcardSrs}
          onRateCard={onRateCard}
        />
      )}
    </div>
  );
};
