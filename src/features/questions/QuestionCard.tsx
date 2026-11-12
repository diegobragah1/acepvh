import React, { useMemo } from 'react';
import type { Question } from '../../types';
import { renderMathInHtml } from '../../utils/math';
import { useApp } from '../../context/AppContext';
import type { FlatQuestion } from '../../utils/simulado';

interface QuestionCardProps {
  question: Question;
  index: number;
  selectedOption?: number;
  onSelectOption: (optionIdx: number) => void;
  badgeLabel?: string;
  weightLabel?: string;
  compact?: boolean;
  revealFeedback?: boolean;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
}

const DIFFICULTY_STYLES: Record<string, string> = {
  Fácil: 'bg-emerald-50 text-emerald-800 border-emerald-200',
  Intermediário: 'bg-amber-50 text-amber-800 border-amber-200',
  Difícil: 'bg-rose-50 text-rose-800 border-rose-200',
};

export const QuestionCard: React.FC<QuestionCardProps> = React.memo(({
  question,
  index,
  selectedOption,
  onSelectOption,
  badgeLabel,
  weightLabel,
  compact = false,
  revealFeedback = true,
  isFavorite = false,
  onToggleFavorite,
}) => {
  const { openLessonBlock } = useApp();
  const flatQ = question as Partial<FlatQuestion>;
  const targetLessonId = flatQ.lessonId;

  const isAnswered = selectedOption !== undefined;
  const showFeedback = isAnswered && revealFeedback;
  const options = question.options || [];

  const renderedStem = useMemo(() => renderMathInHtml(question.q || ''), [question.q]);
  const renderedOptions = useMemo(
    () => options.map((opt) => renderMathInHtml(opt || '')),
    [options]
  );
  const renderedComment = useMemo(
    () => renderMathInHtml(question.comment || ''),
    [question.comment]
  );

  const hasHeaderMeta =
    Boolean(badgeLabel) ||
    Boolean(weightLabel) ||
    Boolean(question.difficulty) ||
    Boolean(question.questionType) ||
    Boolean(onToggleFavorite);

  return (
    <div
      className={`bg-white border border-slate-200 rounded-xl shadow-2xs transition-all ${
        compact ? 'p-4' : 'p-5'
      }`}
    >
      {hasHeaderMeta && (
        <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
          <div className="flex flex-wrap items-center gap-1.5">
            {badgeLabel && (
              targetLessonId ? (
                <button
                  type="button"
                  onClick={() => openLessonBlock(targetLessonId)}
                  aria-label={`Ir para a aula de referência (${badgeLabel})`}
                  title="Abrir aula correspondente na Apostila"
                  className="bg-slate-100 hover:bg-teal-50 hover:text-teal-900 hover:border-teal-300 text-slate-700 font-bold px-2.5 py-1 rounded text-xs uppercase tracking-wider border border-slate-200 transition cursor-pointer flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <span>{badgeLabel}</span>
                  <span className="text-[10px] text-teal-700 font-extrabold" aria-hidden="true">➔</span>
                </button>
              ) : (
                <span className="bg-slate-100 text-slate-700 font-bold px-2.5 py-1 rounded text-xs uppercase tracking-wider border border-slate-200">
                  {badgeLabel}
                </span>
              )
            )}
            {question.difficulty && (
              <span
                className={`font-bold px-2 py-0.5 rounded text-[11px] border ${
                  DIFFICULTY_STYLES[question.difficulty] || 'bg-slate-100 text-slate-700 border-slate-200'
                }`}
              >
                {question.difficulty}
              </span>
            )}
            {question.questionType && (
              <span className="bg-sky-50 text-sky-800 border border-sky-200 font-semibold px-2 py-0.5 rounded text-[11px]">
                {question.questionType}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 ml-auto">
            {weightLabel && (
              <span className="text-xs font-bold text-slate-500 mono">
                {weightLabel}
              </span>
            )}
            {onToggleFavorite && (
              <button
                type="button"
                onClick={onToggleFavorite}
                aria-label={isFavorite ? 'Remover questão dos favoritos' : 'Favoritar questão'}
                title={isFavorite ? 'Remover dos favoritos' : 'Salvar nos favoritos'}
                className={`px-2 py-0.5 rounded-md border text-xs font-bold transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                  isFavorite
                    ? 'bg-amber-50 border-amber-300 text-amber-700'
                    : 'bg-slate-50 border-slate-200 text-slate-500 hover:text-amber-700 hover:border-amber-200'
                }`}
              >
                {isFavorite ? '★ Favorita' : '☆ Favoritar'}
              </button>
            )}
          </div>
        </div>
      )}

      <p className="text-xs sm:text-sm font-extrabold text-slate-900 mb-3 leading-relaxed">
        <span className="text-teal-700 mr-1.5">Questão {index + 1}:</span>
        <span dangerouslySetInnerHTML={{ __html: renderedStem }} />
      </p>

      <div className="space-y-1.5 mb-3">
        {options.map((_, oIdx) => {
          const isCorrect = oIdx === question.ans;
          const isSelected = selectedOption === oIdx;

          let btnStyle =
            'bg-white hover:bg-slate-100 text-slate-800 border-slate-300 cursor-pointer';
          if (showFeedback) {
            if (isCorrect) {
              btnStyle =
                'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-1 ring-emerald-500';
            } else if (isSelected && !isCorrect) {
              btnStyle = 'bg-rose-50 border-rose-400 text-rose-900 line-through';
            } else {
              btnStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-75';
            }
          } else if (isAnswered && isSelected) {
            btnStyle = 'bg-teal-50 border-teal-500 text-teal-950 font-bold ring-1 ring-teal-500';
          }

          return (
            <button
              key={oIdx}
              type="button"
              onClick={() => onSelectOption(oIdx)}
              className={`w-full text-left px-3 py-2 rounded-lg border text-xs sm:text-sm transition flex items-start gap-2 focus:outline-none focus:ring-2 focus:ring-teal-500 ${btnStyle}`}
            >
              <span className="font-bold shrink-0">
                {showFeedback && isCorrect
                  ? '✅ '
                  : showFeedback && isSelected && !isCorrect
                    ? '❌ '
                    : !revealFeedback && isSelected
                      ? '● '
                      : ''}
              </span>
              <span dangerouslySetInnerHTML={{ __html: renderedOptions[oIdx] }} />
            </button>
          );
        })}
      </div>

      {showFeedback && (
        <div
          className={`p-3 rounded-lg text-xs border leading-relaxed ${
            selectedOption === question.ans
              ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
              : 'bg-amber-50 border-amber-200 text-amber-950'
          }`}
        >
          <p className="font-extrabold mb-1">
            {selectedOption === question.ans
              ? '🎯 Resposta Correta!'
              : '⚠️ Atenção ao Gabarito Comentado:'}
          </p>
          <div dangerouslySetInnerHTML={{ __html: renderedComment }} />
        </div>
      )}
    </div>
  );
});
