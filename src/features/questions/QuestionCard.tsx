import React, { useMemo } from 'react';
import type { Question } from '../../types';
import { renderMathInHtml } from '../../utils/math';

interface QuestionCardProps {
  question: Question;
  index: number;
  selectedOption?: number;
  onSelectOption: (optionIdx: number) => void;
  badgeLabel?: string;
  weightLabel?: string;
  compact?: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = React.memo(({
  question,
  index,
  selectedOption,
  onSelectOption,
  badgeLabel,
  weightLabel,
  compact = false,
}) => {
  const isAnswered = selectedOption !== undefined;
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

  return (
    <div
      className={`bg-white border border-slate-200 rounded-xl shadow-2xs transition-all ${
        compact ? 'p-4' : 'p-5'
      }`}
    >
      {(badgeLabel || weightLabel) && (
        <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
          {badgeLabel && (
            <span className="bg-slate-100 text-slate-700 font-bold px-2.5 py-1 rounded text-xs uppercase tracking-wider border border-slate-200">
              {badgeLabel}
            </span>
          )}
          {weightLabel && (
            <span className="text-xs font-bold text-slate-500 mono">
              {weightLabel}
            </span>
          )}
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
          if (isAnswered) {
            if (isCorrect) {
              btnStyle =
                'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-1 ring-emerald-500';
            } else if (isSelected && !isCorrect) {
              btnStyle = 'bg-rose-50 border-rose-400 text-rose-900 line-through';
            } else {
              btnStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-75';
            }
          }

          return (
            <button
              key={oIdx}
              type="button"
              onClick={() => onSelectOption(oIdx)}
              className={`w-full text-left px-3 py-2 rounded-lg border text-xs sm:text-sm transition flex items-start gap-2 ${btnStyle}`}
            >
              <span className="font-bold shrink-0">
                {isAnswered && isCorrect ? '✅ ' : isAnswered && isSelected && !isCorrect ? '❌ ' : ''}
              </span>
              <span dangerouslySetInnerHTML={{ __html: renderedOptions[oIdx] }} />
            </button>
          );
        })}
      </div>

      {isAnswered && (
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
