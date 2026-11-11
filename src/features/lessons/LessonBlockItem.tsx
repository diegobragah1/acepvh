import React, { useMemo } from 'react';
import type { LessonBlock } from '../../types';
import { renderMarkdownToHtml } from '../../utils/markdown';
import { renderMathInHtml } from '../../utils/math';
import { processDidacticHtml } from '../../services/lessonService';

interface LessonBlockItemProps {
  lessonId: string;
  block: LessonBlock;
  blockIndex: number;
  currentMode: 'ALL' | 'A' | 'B' | 'C';
  clozeMode: boolean;
  revealedClozeIds: Set<string>;
  searchTerm: string;
  isCompleted?: boolean;
  onToggleComplete?: () => void;
}

export const LessonBlockItem: React.FC<LessonBlockItemProps> = React.memo(({
  lessonId,
  block,
  blockIndex,
  currentMode,
  clozeMode,
  revealedClozeIds,
  searchTerm,
  isCompleted = false,
  onToggleComplete,
}) => {
  const showA = currentMode === 'ALL' || currentMode === 'A';
  const showB = currentMode === 'ALL' || currentMode === 'B';

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
      showA
        ? processDidacticHtml(
            baseHtmlA,
            searchTerm,
            clozeMode,
            revealedClozeIds,
            `${lessonId}_b${blockIndex}_A`
          )
        : baseHtmlA,
    [showA, baseHtmlA, searchTerm, clozeMode, revealedClozeIds, lessonId, blockIndex]
  );

  const htmlB = useMemo(
    () =>
      showB
        ? processDidacticHtml(
            baseHtmlB,
            searchTerm,
            clozeMode,
            revealedClozeIds,
            `${lessonId}_b${blockIndex}_B`
          )
        : baseHtmlB,
    [showB, baseHtmlB, searchTerm, clozeMode, revealedClozeIds, lessonId, blockIndex]
  );

  if (!showA && !showB) {
    return null;
  }

  return (
    <section
      id={`lesson-block-${blockIndex}`}
      className="apostila-section scroll-mt-20"
    >
      {/* Continuous Section Heading + Topic Completion Toggle */}
      <div className="apostila-section-title flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-inherit font-extrabold m-0">
          {blockIndex + 1}. {block.title}
        </h2>
        {onToggleComplete && (
          <button
            type="button"
            onClick={onToggleComplete}
            aria-pressed={isCompleted}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-extrabold border transition flex items-center gap-1 shrink-0 cursor-pointer no-print ${
              isCompleted
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-2xs'
                : 'bg-white hover:bg-teal-50 text-slate-700 hover:text-teal-800 border-slate-300'
            }`}
          >
            <span>{isCompleted ? '✅ Tópico Concluído' : '⬜ Concluir Tópico'}</span>
          </button>
        )}
      </div>

      {/* Texto Integral Contínuo (Modo A) */}
      {showA && htmlA && (
        <div
          className="prose-content text-slate-800 leading-[1.7]"
          dangerouslySetInnerHTML={{ __html: htmlA }}
        />
      )}

      {/* Pontos Importantes — Para Memorizar & Atenção na Prova (Modo B) */}
      {showB && htmlB && (
        <div className="mt-3 rounded-xl bg-amber-50/60 border border-amber-200/90 p-3 sm:p-3.5 space-y-1.5">
          <div className="flex flex-wrap items-center justify-between gap-1.5 border-b border-amber-200/70 pb-1">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#123b59]">
              📌 Pontos Importantes — Para Memorizar &amp; Atenção na Prova
            </span>
            <span className="text-[11px] font-medium text-amber-900">
              Síntese Direta, Quadros Comparativos e Pegadinhas
            </span>
          </div>
          <div
            className="prose-content text-slate-800 leading-[1.7]"
            dangerouslySetInnerHTML={{ __html: htmlB }}
          />
        </div>
      )}
    </section>
  );
});

