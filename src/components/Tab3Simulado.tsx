import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { toSafeString } from '../utils/normalizeData';
import { questionIdentity } from '../utils/questionIdentity';

export const Tab3Simulado: React.FC = () => {
  const { appData, simAnswers, setSimAnswer, resetSimAnswers } = useApp();
  const [catFilter, setCatFilter] = useState('all');
  const [lessonFilter, setLessonFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'unanswered' | 'wrong' | 'correct'>('all');
  const [examModeIds, setExamModeIds] = useState<string[] | null>(null);
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const lessons = appData?.lessons || [];

  interface FlattenedQuestion {
    id: string;
    lessonId: string;
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
    lessonId: string;
    lessonTitle: string;
    cat: string;
    front: string;
    back: string;
  }

  const { allQuestions, allFlashcards, catCounts } = useMemo(() => {
    const qList: FlattenedQuestion[] = [];
    const fcList: FlattenedFlashcard[] = [];
    const counts: Record<string, number> = { all: 0, esp: 0, leg: 0, por: 0, rlm: 0, atu: 0 };

    lessons.forEach(l => {
      (l.blocks || []).forEach((b, bIdx) => {
        (b.questions || []).forEach((qObj: any, qIdx: number) => {
          const questionText = toSafeString(qObj.q || qObj.stem || '');
          const answerIndex = qObj.ans !== undefined ? qObj.ans : (qObj.correct ?? 0);
          const explanationText = toSafeString(qObj.comment || qObj.explanation || '');
          qList.push({
            id: questionIdentity(`sim_${l.id}_${bIdx}_${qIdx}`, qObj),
            lessonId: l.id,
            lessonTitle: toSafeString(l.title),
            catName: toSafeString(l.catName),
            cat: toSafeString(l.cat),
            weight: toSafeString(l.weight),
            q: questionText,
            options: Array.isArray(qObj.options) ? qObj.options.map((o: unknown) => toSafeString(o)) : [],
            ans: answerIndex,
            comment: explanationText
          });
          counts.all++;
          counts[l.cat] = (counts[l.cat] || 0) + 1;
        });

        (b.flashcards || []).forEach((fc: any, fIdx: number) => {
          fcList.push({
            id: `gfc_${l.id}_${bIdx}_${fIdx}`,
            lessonId: l.id,
            lessonTitle: toSafeString(l.title),
            cat: toSafeString(l.cat),
            front: toSafeString(fc.f || fc.front || ''),
            back: toSafeString(fc.b || fc.back || '')
          });
        });
      });
    });

    return { allQuestions: qList, allFlashcards: fcList, catCounts: counts };
  }, [lessons]);

  const startOfficialMockExam = () => {
    const pickRandom = (arr: FlattenedQuestion[], n: number) => {
      const copy = [...arr];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy.slice(0, n).map(item => item.id);
    };

    const espQs = allQuestions.filter(q => q.cat === 'esp');
    const porQs = allQuestions.filter(q => q.cat === 'por');
    const rlmQs = allQuestions.filter(q => q.cat === 'rlm');
    const legQs = allQuestions.filter(q => q.cat === 'leg');
    const atuQs = allQuestions.filter(q => q.cat === 'atu');

    const selected = [
      ...pickRandom(espQs, 15),
      ...pickRandom(porQs, 10),
      ...pickRandom(rlmQs, 10),
      ...pickRandom(legQs, 10),
      ...pickRandom(atuQs, 5)
    ];

    setCatFilter('all');
    setLessonFilter('all');
    setStatusFilter('all');
    setExamModeIds(selected);
  };

  const filteredQuestions = allQuestions.filter(q => {
    if (examModeIds) {
      return examModeIds.includes(q.id);
    }
    if (catFilter !== 'all' && q.cat !== catFilter) return false;
    if (lessonFilter !== 'all' && q.lessonId !== lessonFilter) return false;
    const chosen = simAnswers[q.id];
    if (statusFilter === 'unanswered' && chosen !== undefined) return false;
    if (statusFilter === 'wrong' && (chosen === undefined || chosen === q.ans)) return false;
    if (statusFilter === 'correct' && chosen !== q.ans) return false;
    return true;
  });

  const filteredFlashcards = allFlashcards.filter(fc => {
    if (catFilter !== 'all' && fc.cat !== catFilter) return false;
    if (lessonFilter !== 'all' && fc.lessonId !== lessonFilter) return false;
    return true;
  });

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

  const availableLessons = lessons.filter(l => catFilter === 'all' || l.cat === catFilter);

  return (
    <section className="space-y-6">
      {/* Simulado Control & Stats Header */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 border-b border-slate-100 pb-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-100 px-2.5 py-0.5 rounded-full">
              Banco Completo &amp; Simulado Oficial Banca IBGP ({catCounts.all} Questões Comentadas + {allFlashcards.length} Flashcards)
            </span>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
              Banco de Questões Inéditas Comentadas, Caderno de Erros &amp; Prova Simulada IBGP (A–D)
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {examModeIds ? (
              <button
                type="button"
                onClick={() => setExamModeIds(null)}
                className="px-3.5 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-extrabold shadow-sm transition flex items-center gap-1.5"
              >
                <i className="fa-solid fa-xmark"></i> Sair do Modo Prova Sorteada (Voltar às {catCounts.all} Questões)
              </button>
            ) : (
              <button
                type="button"
                onClick={startOfficialMockExam}
                className="px-3.5 py-2 rounded-xl bg-purple-700 hover:bg-purple-800 text-white text-xs font-extrabold shadow-sm transition flex items-center gap-1.5"
              >
                <i className="fa-solid fa-shuffle"></i> Sortear Prova Oficial IBGP (50 Questões — Anexo III)
              </button>
            )}
            <button
              type="button"
              onClick={resetSimAnswers}
              className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold border border-slate-300 transition"
            >
              Limpar Respostas
            </button>
          </div>
        </div>

        {/* Multi-Filter Bar: Disciplina, Aula Específica e Caderno de Erros */}
        {!examModeIds && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 bg-slate-50 p-3 rounded-xl border border-slate-200">
            <div>
              <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                1. Filtrar por Disciplina:
              </label>
              <select
                value={catFilter}
                onChange={(e) => {
                  setCatFilter(e.target.value);
                  setLessonFilter('all');
                }}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs font-bold bg-white"
              >
                <option value="all">Todas as Disciplinas ({catCounts.all} Questões)</option>
                <option value="esp">Conhecimentos Específicos ACE ({catCounts.esp} Questões)</option>
                <option value="leg">Legislação SUS/PVH ({catCounts.leg} Questões)</option>
                <option value="por">Língua Portuguesa ({catCounts.por} Questões)</option>
                <option value="rlm">Raciocínio Lógico-Matemático ({catCounts.rlm} Questões)</option>
                <option value="atu">Conhecimentos Gerais RO/PVH ({catCounts.atu} Questões)</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                2. Filtrar por Aula Específica:
              </label>
              <select
                value={lessonFilter}
                onChange={(e) => setLessonFilter(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs font-bold bg-white"
              >
                <option value="all">Todas as Aulas ({availableLessons.length} aulas)</option>
                {availableLessons.map(l => (
                  <option key={l.id} value={l.id}>
                    {l.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                3. Filtro Inteligente / Caderno de Erros:
              </label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as any)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs font-bold bg-white"
              >
                <option value="all">Todas as Questões do Filtro</option>
                <option value="unanswered">Apenas Não Respondidas</option>
                <option value="wrong">Caderno de Erros (Apenas que Errei)</option>
                <option value="correct">Apenas que Acertei</option>
              </select>
            </div>
          </div>
        )}

        {examModeIds && (
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-3 text-xs text-purple-950 flex flex-wrap items-center justify-between gap-2">
            <div>
              <strong>Modo Simulado Oficial IBGP (Anexo III Retificado) Ativo:</strong> 50 questões sorteadas na proporção exata da prova (15 Específicas + 10 Português + 10 RLM + 10 Legislação + 5 Conhecimentos Gerais = 100,0 pts).
            </div>
            <button
              type="button"
              onClick={startOfficialMockExam}
              className="px-2.5 py-1 rounded-lg bg-purple-700 text-white font-bold hover:bg-purple-800 transition"
            >
              Gerar Novo Sorteio (50 Qs)
            </button>
          </div>
        )}

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
            <span className="text-[11px] font-bold text-rose-800 uppercase">Erros (Revisar)</span>
            <div className="text-lg font-black text-rose-700 mt-0.5">{wrongCount}</div>
          </div>
          <div className="bg-teal-50 p-3 rounded-xl border border-teal-200">
            <span className="text-[11px] font-bold text-teal-800 uppercase">Aproveitamento</span>
            <div className="text-lg font-black text-teal-700 mt-0.5">{scorePct}%</div>
          </div>
        </div>
      </div>

      {/* Questions List */}
      {filteredQuestions.length === 0 ? (
        <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center space-y-2">
          <p className="text-sm font-bold text-slate-700">Nenhuma questão encontrada para este filtro específico.</p>
          <button
            type="button"
            onClick={() => {
              setStatusFilter('all');
              setLessonFilter('all');
            }}
            className="px-3 py-1.5 rounded-lg bg-teal-600 text-white text-xs font-bold"
          >
            Mostrar Todas as Questões
          </button>
        </div>
      ) : (
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
      )}

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

