import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const Tab3Simulado: React.FC = () => {
  const { appData, simAnswers, setSimAnswer, resetSimAnswers } = useApp();
  const [catFilter, setCatFilter] = useState('all');
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const lessons = appData?.lessons || [];

  interface FlattenedQuestion {
    id: string;
    lessonTitle: string;
    catName: string;
    cat: string;
    weight: string;
    q: string;
    options: string[];
    ans: number;
    comment: string;
  }

  interface FlattenedFlashcard {
    id: string;
    lessonTitle: string;
    cat: string;
    front: string;
    back: string;
  }

  const allQuestions: FlattenedQuestion[] = [];
  const allFlashcards: FlattenedFlashcard[] = [];

  lessons.forEach(l => {
    (l.blocks || []).forEach((b, bIdx) => {
      (b.questions || []).forEach((qObj, qIdx) => {
        allQuestions.push({
          id: `sim_${l.id}_${bIdx}_${qIdx}`,
          lessonTitle: l.title,
          catName: l.catName,
          cat: l.cat,
          weight: l.weight,
          q: qObj.q,
          options: qObj.options,
          ans: qObj.ans,
          comment: qObj.comment
        });
      });

      (b.flashcards || []).forEach((fc, fIdx) => {
        allFlashcards.push({
          id: `gfc_${l.id}_${bIdx}_${fIdx}`,
          lessonTitle: l.title,
          cat: l.cat,
          front: fc.f || fc.front || '',
          back: fc.b || fc.back || ''
        });
      });
    });
  });

  const filteredQuestions = allQuestions.filter(q =>
    catFilter === 'all' || q.cat === catFilter
  );

  const filteredFlashcards = allFlashcards.filter(fc =>
    catFilter === 'all' || fc.cat === catFilter
  );

  let answeredCount = 0;
  let correctCount = 0;
  let wrongCount = 0;

  filteredQuestions.forEach(q => {
    const chosen = simAnswers[q.id];
    if (chosen !== undefined) {
      answeredCount++;
      if (chosen === q.ans) correctCount++;
      else wrongCount++;
    }
  });

  const scorePct = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

  const toggleFlashcard = (id: string) => {
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="space-y-6">
      {/* Simulado Control & Stats Header */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-100 pb-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-100 px-2.5 py-0.5 rounded-full">
              Simulado Oficial Banca IBGP (50 Questões Peso 2,0 = 100 pts)
            </span>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
              Banco de Questões Inéditas Comentadas &amp; Fixação (4 Alternativas A–D)
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <select
              value={catFilter}
              onChange={(e) => setCatFilter(e.target.value)}
              className="px-3 py-2 rounded-lg border border-slate-300 text-xs sm:text-sm font-bold bg-white"
            >
              <option value="all">Todas as Disciplinas (207 Questões)</option>
              <option value="esp">Conhecimentos Específicos ACE (70 Questões)</option>
              <option value="leg">Legislação e Direito (42 Questões)</option>
              <option value="por">Língua Portuguesa (33 Questões)</option>
              <option value="rlm">Raciocínio Lógico (37 Questões)</option>
              <option value="atu">Conhecimentos Gerais (25 Questões)</option>
            </select>
            <button
              type="button"
              onClick={resetSimAnswers}
              className="px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold border border-slate-300 transition"
            >
              Limpar Respostas
            </button>
          </div>
        </div>

        {/* Real-time KPI Score Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
            <span className="text-[11px] font-bold text-slate-500 uppercase">Respondidas</span>
            <div className="text-lg font-black text-slate-900 mt-0.5">
              {answeredCount} / {filteredQuestions.length}
            </div>
          </div>
          <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-200">
            <span className="text-[11px] font-bold text-emerald-800 uppercase">Acertos</span>
            <div className="text-lg font-black text-emerald-700 mt-0.5">
              {correctCount} ({correctCount * 2} pts)
            </div>
          </div>
          <div className="bg-rose-50 p-3 rounded-xl border border-rose-200">
            <span className="text-[11px] font-bold text-rose-800 uppercase">Erros</span>
            <div className="text-lg font-black text-rose-700 mt-0.5">{wrongCount}</div>
          </div>
          <div className="bg-teal-50 p-3 rounded-xl border border-teal-200">
            <span className="text-[11px] font-bold text-teal-800 uppercase">Aproveitamento</span>
            <div className="text-lg font-black text-teal-700 mt-0.5">{scorePct}%</div>
          </div>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {filteredQuestions.map((item, idx) => {
          const chosen = simAnswers[item.id];
          const answered = chosen !== undefined;

          return (
            <div
              key={item.id}
              className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 font-bold">
                <span>Questão #{idx + 1} &bull; {item.lessonTitle}</span>
                <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-800 border border-slate-200">
                  {item.weight}
                </span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">{item.q}</div>

              {/* 4 Alternatives (A, B, C, D) */}
              <div className="space-y-1.5">
                {item.options.map((opt, oIdx) => {
                  let cls = "w-full text-left px-3 py-2.5 rounded-xl text-xs sm:text-sm border border-slate-200 bg-white hover:bg-slate-50 transition font-medium";
                  if (answered) {
                    if (oIdx === item.ans) {
                      cls = "w-full text-left px-3 py-2.5 rounded-xl text-xs sm:text-sm border-2 border-emerald-600 bg-emerald-50 text-emerald-950 font-bold";
                    } else if (oIdx === chosen && chosen !== item.ans) {
                      cls = "w-full text-left px-3 py-2.5 rounded-xl text-xs sm:text-sm border-2 border-rose-500 bg-rose-50 text-rose-950 font-semibold";
                    } else {
                      cls = "w-full text-left px-3 py-2.5 rounded-xl text-xs sm:text-sm border border-slate-200 bg-white text-slate-400";
                    }
                  }

                  return (
                    <button
                      key={oIdx}
                      type="button"
                      onClick={() => setSimAnswer(item.id, oIdx)}
                      className={cls}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {/* Commented Explanation */}
              {answered && (
                <div className="p-3.5 rounded-xl text-xs sm:text-sm bg-emerald-50 border border-emerald-200 text-emerald-950 leading-relaxed">
                  <strong>Gabarito Comentado Oficial:</strong> {item.comment}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Global Flashcards Section */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 space-y-4">
        <div className="border-b border-slate-100 pb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-100 px-2.5 py-0.5 rounded-full">
            Revisão Ativa &amp; Repetição Espaçada
          </span>
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mt-1">
            Mural Geral de Flashcards 3D ({filteredFlashcards.length} cards disponíveis)
          </h3>
          <p className="text-xs text-slate-500">
            Clique em qualquer flashcard para virar e conferir a resposta oficial de prova.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredFlashcards.map(fc => {
            const isFlipped = !!flippedCards[fc.id];
            const shortLesson = (fc.lessonTitle || '').split('.')[0] || 'Aula';

            return (
              <div
                key={fc.id}
                onClick={() => toggleFlashcard(fc.id)}
                className="flashcard-container cursor-pointer"
              >
                <div
                  className={`flashcard-inner border border-slate-200 rounded-xl shadow-sm bg-gradient-to-br from-slate-800 to-slate-900 text-white ${
                    isFlipped ? 'flashcard-flipped' : ''
                  }`}
                >
                  <div className="flashcard-front">
                    <span className="text-[10px] uppercase tracking-wider text-teal-400 font-bold mb-1">
                      Aula {shortLesson} &bull; Clique p/ virar
                    </span>
                    <p className="text-xs sm:text-sm font-bold leading-snug">{fc.front}</p>
                  </div>
                  <div className="flashcard-back bg-gradient-to-br from-teal-700 to-emerald-800 text-white">
                    <span className="text-[10px] uppercase tracking-wider text-amber-200 font-bold mb-1">
                      Resposta Oficial
                    </span>
                    <p className="text-xs sm:text-sm font-medium leading-snug">{fc.back}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
