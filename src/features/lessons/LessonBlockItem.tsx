import React, { useMemo } from 'react';
import type { LessonBlock } from '../../types';
import { renderMarkdownToHtml } from '../../utils/markdown';
import { renderMathInHtml } from '../../utils/math';
import { questionIdentity } from '../../utils/questionIdentity';
import { processDidacticHtml } from '../../services/lessonService';
import { QuestionCard } from '../questions/QuestionCard';
import { FlashcardGrid } from '../flashcards/FlashcardGrid';

interface LessonBlockItemProps {
  lessonId: string;
  block: LessonBlock;
  blockIndex: number;
  isOpen: boolean;
  onToggleOpen: () => void;
  currentMode: 'ALL' | 'A' | 'B' | 'C';
  onChangeMode: (mode: 'ALL' | 'A' | 'B' | 'C') => void;
  clozeMode: boolean;
  revealedClozeIds: Set<string>;
  searchTerm: string;
  lessonAnswers: Record<string, number>;
  onSelectAnswer: (qKey: string, optIdx: number) => void;
  flippedCards: Record<string, boolean>;
  onToggleFlipCard: (cardKey: string) => void;
}

export const LessonBlockItem: React.FC<LessonBlockItemProps> = React.memo(({
  lessonId,
  block,
  blockIndex,
  isOpen,
  onToggleOpen,
  currentMode,
  onChangeMode,
  clozeMode,
  revealedClozeIds,
  searchTerm,
  lessonAnswers,
  onSelectAnswer,
  flippedCards,
  onToggleFlipCard,
}) => {
  const showA = currentMode === 'ALL' || currentMode === 'A';
  const showB = currentMode === 'ALL' || currentMode === 'B';
  const showC = currentMode === 'ALL' || currentMode === 'C';

  // Memoize expensive Markdown + KaTeX rendering per block so it only runs when block content changes
  const baseHtmlA = useMemo(
    () =>
      block.modoA_markdown
        ? renderMarkdownToHtml(block.modoA_markdown)
        : renderMathInHtml(block.modoA || ''),
    [block.modoA_markdown, block.modoA]
  );

  const baseHtmlB = useMemo(
    () =>
      block.modoB_markdown
        ? renderMarkdownToHtml(block.modoB_markdown)
        : renderMathInHtml(block.modoB || ''),
    [block.modoB_markdown, block.modoB]
  );

  const htmlA = useMemo(
    () =>
      isOpen && showA
        ? processDidacticHtml(
            baseHtmlA,
            searchTerm,
            clozeMode,
            revealedClozeIds,
            `${lessonId}_b${blockIndex}_A`
          )
        : baseHtmlA,
    [isOpen, showA, baseHtmlA, searchTerm, clozeMode, revealedClozeIds, lessonId, blockIndex]
  );

  const htmlB = useMemo(
    () =>
      isOpen && showB
        ? processDidacticHtml(
            baseHtmlB,
            searchTerm,
            clozeMode,
            revealedClozeIds,
            `${lessonId}_b${blockIndex}_B`
          )
        : baseHtmlB,
    [isOpen, showB, baseHtmlB, searchTerm, clozeMode, revealedClozeIds, lessonId, blockIndex]
  );

  const questions = block.questions || [];
  const flashcards = block.flashcards || [];

  return (
    <article
      id={`lesson-block-${blockIndex}`}
      className="scroll-mt-24 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all"
    >
      {/* Block Header */}
      <div className="bg-slate-900 text-white px-4 py-3 flex flex-wrap items-center justify-between gap-2">
        <button
          type="button"
          onClick={onToggleOpen}
          className="flex items-center gap-2 text-left font-extrabold text-sm sm:text-base hover:text-teal-300 transition cursor-pointer"
        >
          <span className="w-6 h-6 rounded-lg bg-teal-600 text-white text-xs flex items-center justify-center font-black shrink-0">
            {blockIndex + 1}
          </span>
          <span>{block.title}</span>
          <span className="text-xs text-slate-400 ml-1">{isOpen ? '▼' : '▶'}</span>
        </button>

        {/* Local Block Mode Switcher */}
        <div className="flex items-center gap-1 no-print">
          {(['ALL', 'A', 'B', 'C'] as const).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => onChangeMode(m)}
              className={`px-2 py-1 rounded text-[11px] font-bold transition cursor-pointer ${
                currentMode === m
                  ? 'bg-teal-500 text-slate-950'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {m === 'ALL' ? 'Todos' : `Modo ${m}`}
            </button>
          ))}
        </div>
      </div>

      {/* Block Body */}
      {isOpen && (
        <div className="p-4 sm:p-6 space-y-6">
          {/* MODO A: Texto Base Didático */}
          {showA && htmlA && (
            <section className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-teal-50 border border-teal-200 text-teal-900 text-xs font-extrabold">
                📖 Modo A — Estudo Teórico Aprofundado
              </div>
              <div
                className="prose-content text-slate-800 text-xs sm:text-sm leading-relaxed space-y-2"
                dangerouslySetInnerHTML={{ __html: htmlA }}
              />
            </section>
          )}

          {/* MODO B: Resumo Rápido, Tabelas e Pegadinhas */}
          {showB && htmlB && (
            <section className="space-y-2 pt-3 border-t border-slate-200/80">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-900 text-xs font-extrabold">
                ⚡ Modo B — Síntese, Quadros Comparativos & Pegadinhas IBGP
              </div>
              <div
                className="prose-content text-slate-800 text-xs sm:text-sm leading-relaxed space-y-2"
                dangerouslySetInnerHTML={{ __html: htmlB }}
              />
            </section>
          )}

          {/* MODO C: Fixação Imediata (Questões + Flashcards do Bloco) */}
          {showC && (
            <section className="space-y-5 pt-3 border-t border-slate-200/80">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs font-extrabold">
                ✍️ Modo C — Fixação Prática ({questions.length} Questões e {flashcards.length} Flashcards)
              </div>

              {/* Block Questions */}
              {questions.length > 0 && (
                <div className="space-y-3">
                  {questions.map((q, qIdx) => {
                    const qKey = questionIdentity(`${lessonId}_b${blockIndex}_q${qIdx}`, q);
                    return (
                      <QuestionCard
                        key={qKey}
                        question={q}
                        index={qIdx}
                        selectedOption={lessonAnswers[qKey]}
                        onSelectOption={(optIdx) => onSelectAnswer(qKey, optIdx)}
                        compact
                      />
                    );
                  })}
                </div>
              )}

              {/* Block Flashcards */}
              {flashcards.length > 0 && (
                <div className="space-y-2.5">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-600">
                    🃏 Flashcards de Memorização Ativa (Clique no cartão para virar)
                  </h4>
                  <FlashcardGrid
                    flashcards={flashcards}
                    flippedCards={flippedCards}
                    onToggleFlip={onToggleFlipCard}
                    keyPrefix={`${lessonId}_b${blockIndex}_fc`}
                    columnsClass="grid-cols-1 sm:grid-cols-2"
                  />
                </div>
              )}
            </section>
          )}
        </div>
      )}
    </article>
  );
});
