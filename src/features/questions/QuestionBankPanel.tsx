import React from 'react';
import { QUESTIONS_PER_PAGE, type FlatQuestion } from '../../utils/simulado';
import { QuestionCard } from './QuestionCard';

interface QuestionBankPanelProps {
  paginatedQuestions: FlatQuestion[];
  safePage: number;
  totalPages: number;
  onChangePage: (page: number) => void;
  onClearFilters: () => void;
  getEffectiveAnswer: (q: FlatQuestion) => number | undefined;
  simAnswers: Record<string, number>;
  lessonAnswers: Record<string, number>;
  onSelectAnswer: (qid: string, optIdx: number) => void;
  favoriteQuestions: string[];
  onToggleFavorite: (qid: string) => void;
}

export const QuestionBankPanel: React.FC<QuestionBankPanelProps> = ({
  paginatedQuestions,
  safePage,
  totalPages,
  onChangePage,
  onClearFilters,
  getEffectiveAnswer,
  simAnswers,
  lessonAnswers,
  onSelectAnswer,
  favoriteQuestions,
  onToggleFavorite,
}) => {
  return (
    <div className="space-y-4">
      {paginatedQuestions.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center space-y-2">
          <p className="text-sm font-bold text-slate-700">
            Nenhuma questão encontrada para os filtros selecionados.
          </p>
          <button
            type="button"
            onClick={onClearFilters}
            className="px-3.5 py-2 rounded-xl bg-teal-700 text-white text-xs font-bold cursor-pointer"
          >
            Limpar Filtros
          </button>
        </div>
      ) : (
        paginatedQuestions.map((item, idx) => {
          const globalNum = (safePage - 1) * QUESTIONS_PER_PAGE + idx + 1;
          const userSelected = getEffectiveAnswer(item);
          const fromApostila =
            simAnswers[item.qid] === undefined && lessonAnswers[item.lessonQid] !== undefined;

          return (
            <QuestionCard
              key={item.qid}
              question={item}
              index={globalNum - 1}
              selectedOption={userSelected}
              onSelectOption={(optIdx) => onSelectAnswer(item.qid, optIdx)}
              badgeLabel={`Aula ${String(item.lessonNum).padStart(2, '0')} • ${item.catName}`}
              weightLabel={fromApostila ? `${item.blockTitle} (Apostila)` : item.blockTitle}
              isFavorite={favoriteQuestions.includes(item.qid)}
              onToggleFavorite={() => onToggleFavorite(item.qid)}
            />
          );
        })
      )}

      {totalPages > 1 && (
        <div className="flex items-center justify-between bg-white rounded-2xl border border-slate-200 p-4">
          <button
            type="button"
            disabled={safePage <= 1}
            onClick={() => {
              onChangePage(Math.max(1, safePage - 1));
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-xs font-bold cursor-pointer"
          >
            ⬅ Página Anterior
          </button>
          <span className="text-xs font-extrabold text-slate-700">
            Página {safePage} de {totalPages}
          </span>
          <button
            type="button"
            disabled={safePage >= totalPages}
            onClick={() => {
              onChangePage(Math.min(totalPages, safePage + 1));
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-4 py-2 rounded-xl bg-teal-700 hover:bg-teal-800 disabled:opacity-40 text-white text-xs font-bold cursor-pointer"
          >
            Próxima Página ➔
          </button>
        </div>
      )}
    </div>
  );
};
