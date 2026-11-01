import React, { useState, useMemo, useCallback } from 'react';
import { useApp } from '../context/AppContext';
import { getCatBadgeClass } from '../utils/status';
import { renderMathInHtml } from '../utils/math';
import { questionIdentity } from '../utils/questionIdentity';
import { FlashcardGrid } from '../features/flashcards/FlashcardGrid';

interface FlatQuestion {
  qid: string;
  lessonId: string;
  lessonNum: number;
  lessonTitle: string;
  cat: string;
  catName: string;
  blockTitle: string;
  q: string;
  options: string[];
  ans: number;
  comment: string;
}

interface FlatFlashcard {
  fcid: string;
  lessonId: string;
  lessonNum: number;
  lessonTitle: string;
  cat: string;
  f: string;
  b: string;
}

const QUESTIONS_PER_PAGE = 15;

export const Tab3Simulado: React.FC = () => {
  const { appData, simAnswers, setSimAnswer, resetSimAnswers } = useApp();

  const [subMode, setSubMode] = useState<'QUESTOES' | 'PROVA_OFICIAL' | 'FLASHCARDS'>('QUESTOES');
  const [catFilter, setCatFilter] = useState<string>('ALL');
  const [lessonFilter, setLessonFilter] = useState<string>('ALL');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [flippedGlobal, setFlippedGlobal] = useState<Record<string, boolean>>({});
  const [examSeed, setExamSeed] = useState<number>(1);
  const [examAnswers, setExamAnswers] = useState<Record<string, number>>({});
  const [examSubmitted, setExamSubmitted] = useState<boolean>(false);

  const lessons = appData?.lessons || [];

  const { allQuestions, allFlashcards } = useMemo(() => {
    const qList: FlatQuestion[] = [];
    const fcList: FlatFlashcard[] = [];

    lessons.forEach((l) => {
      (l.blocks || []).forEach((b, bIdx) => {
        (b.questions || []).forEach((q, qIdx) => {
          qList.push({
            qid: questionIdentity(`${l.id}_${bIdx}_${qIdx}`, q),
            lessonId: l.id,
            lessonNum: l.num,
            lessonTitle: l.title,
            cat: l.cat,
            catName: l.catName,
            blockTitle: b.title,
            q: q.q,
            options: q.options || [],
            ans: q.ans,
            comment: q.comment || '',
          });
        });

        (b.flashcards || []).forEach((fc, fcIdx) => {
          fcList.push({
            fcid: `${l.id}_fc_${bIdx}_${fcIdx}`,
            lessonId: l.id,
            lessonNum: l.num,
            lessonTitle: fc.lessonTitle || `Aula ${String(l.num).padStart(2, '0')} — ${l.title}`,
            cat: l.cat,
            f: fc.f || fc.front || '',
            b: fc.b || fc.back || '',
          });
        });
      });
    });

    return { allQuestions: qList, allFlashcards: fcList };
  }, [lessons]);

  const officialExamQuestions = useMemo(() => {
    const pickByCat = (cat: string, count: number) => {
      const pool = allQuestions.filter((q) => q.cat === cat);
      const copy = [...pool];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.abs((i * 1103515245 + examSeed * 12345) % (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy.slice(0, count);
    };
    return [
      ...pickByCat('esp', 15),
      ...pickByCat('por', 10),
      ...pickByCat('rlm', 10),
      ...pickByCat('leg', 10),
      ...pickByCat('atu', 5),
    ];
  }, [allQuestions, examSeed]);

  const examScore = useMemo(() => {
    let answered = 0;
    let correct = 0;
    const byCat: Record<string, { total: number; hits: number }> = {
      esp: { total: 15, hits: 0 },
      por: { total: 10, hits: 0 },
      rlm: { total: 10, hits: 0 },
      leg: { total: 10, hits: 0 },
      atu: { total: 5, hits: 0 },
    };
    officialExamQuestions.forEach((q) => {
      const ans = examAnswers[q.qid];
      if (ans !== undefined) {
        answered += 1;
        if (ans === q.ans) {
          correct += 1;
          if (byCat[q.cat]) byCat[q.cat].hits += 1;
        }
      }
    });
    const points = correct * 2;
    return { answered, correct, points, approved: points >= 50, byCat };
  }, [officialExamQuestions, examAnswers]);

  const filteredQuestions = useMemo(() => {
    return allQuestions.filter((item) => {
      if (catFilter !== 'ALL' && item.cat !== catFilter) return false;
      if (lessonFilter !== 'ALL' && item.lessonId !== lessonFilter) return false;
      if (searchTerm.trim()) {
        const s = searchTerm.toLowerCase();
        return (
          item.q.toLowerCase().includes(s) ||
          item.comment.toLowerCase().includes(s) ||
          item.lessonTitle.toLowerCase().includes(s)
        );
      }
      return true;
    });
  }, [allQuestions, catFilter, lessonFilter, searchTerm]);

  const filteredFlashcards = useMemo(() => {
    return allFlashcards.filter((item) => {
      if (catFilter !== 'ALL' && item.cat !== catFilter) return false;
      if (lessonFilter !== 'ALL' && item.lessonId !== lessonFilter) return false;
      if (searchTerm.trim()) {
        const s = searchTerm.toLowerCase();
        return (
          item.f.toLowerCase().includes(s) ||
          item.b.toLowerCase().includes(s) ||
          item.lessonTitle.toLowerCase().includes(s)
        );
      }
      return true;
    });
  }, [allFlashcards, catFilter, lessonFilter, searchTerm]);

  const stats = useMemo(() => {
    let answered = 0;
    let correct = 0;
    filteredQuestions.forEach((q) => {
      const userAns = simAnswers[q.qid];
      if (userAns !== undefined) {
        answered += 1;
        if (userAns === q.ans) correct += 1;
      }
    });
    const pct = answered > 0 ? Math.round((correct / answered) * 100) : 0;
    return { answered, correct, wrong: answered - correct, pct };
  }, [filteredQuestions, simAnswers]);

  const handleToggleFlip = useCallback((cardKey: string) => {
    setFlippedGlobal((prev) => ({ ...prev, [cardKey]: !prev[cardKey] }));
  }, []);

  const totalPages = Math.max(1, Math.ceil(filteredQuestions.length / QUESTIONS_PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const paginatedQuestions = filteredQuestions.slice(
    (safePage - 1) * QUESTIONS_PER_PAGE,
    safePage * QUESTIONS_PER_PAGE
  );

  return (
    <div className="space-y-6">
      {/* Top Controls & Scoreboard */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
              ✍️ Centro de Treinamento — Questões Comentadas & Flashcards 3D
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Banco unificado das 49 aulas ({allQuestions.length} questões de múltipla escolha A–D e{' '}
              {allFlashcards.length} flashcards interativos).
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setSubMode('QUESTOES')}
              className={`px-3.5 py-2 rounded-xl text-xs font-extrabold transition cursor-pointer ${
                subMode === 'QUESTOES'
                  ? 'bg-teal-700 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              📝 Banco Completo ({filteredQuestions.length})
            </button>
            <button
              type="button"
              onClick={() => setSubMode('PROVA_OFICIAL')}
              className={`px-3.5 py-2 rounded-xl text-xs font-extrabold transition cursor-pointer ${
                subMode === 'PROVA_OFICIAL'
                  ? 'bg-amber-500 text-slate-950 shadow-sm ring-2 ring-amber-300'
                  : 'bg-amber-50 text-amber-900 border border-amber-300 hover:bg-amber-100'
              }`}
            >
              🏆 Simulado Oficial IBGP (50 Questões / 100 pts)
            </button>
            <button
              type="button"
              onClick={() => setSubMode('FLASHCARDS')}
              className={`px-3.5 py-2 rounded-xl text-xs font-extrabold transition cursor-pointer ${
                subMode === 'FLASHCARDS'
                  ? 'bg-indigo-700 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              🃏 Deck de Flashcards ({filteredFlashcards.length})
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-slate-100">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setPage(1);
            }}
            placeholder="Pesquisar por tema, artigo, doença ou palavra-chave..."
            className="px-3 py-2 text-xs rounded-xl border border-slate-300 bg-slate-50 focus:outline-none focus:border-teal-600"
          />

          <select
            value={catFilter}
            onChange={(e) => {
              setCatFilter(e.target.value);
              setLessonFilter('ALL');
              setPage(1);
            }}
            className="px-3 py-2 text-xs rounded-xl border border-slate-300 bg-slate-50 font-semibold text-slate-800"
          >
            <option value="ALL">Todas as Disciplinas (5 Matérias)</option>
            <option value="esp">Conhecimentos Específicos ACE (Peso 2)</option>
            <option value="leg">Legislação Municipal, SUS e CF/88 (Peso 2)</option>
            <option value="por">Língua Portuguesa (Peso 2)</option>
            <option value="rlm">Raciocínio Lógico-Matemático (Peso 2)</option>
            <option value="atu">Conhecimentos Gerais e Hist/Geo RO (Peso 2)</option>
          </select>

          <select
            value={lessonFilter}
            onChange={(e) => {
              setLessonFilter(e.target.value);
              setPage(1);
            }}
            className="px-3 py-2 text-xs rounded-xl border border-slate-300 bg-slate-50 font-semibold text-slate-800"
          >
            <option value="ALL">Todas as 49 Aulas</option>
            {lessons
              .filter((l) => catFilter === 'ALL' || l.cat === catFilter)
              .map((l) => (
                <option key={l.id} value={l.id}>
                  Aula {String(l.num).padStart(2, '0')} — {l.title}
                </option>
              ))}
          </select>
        </div>

        {/* Score Bar */}
        {subMode === 'QUESTOES' && (
          <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900 text-white p-3.5 rounded-xl">
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <span>
                Respondidas: <strong>{stats.answered}</strong>/{filteredQuestions.length}
              </span>
              <span className="text-emerald-400">
                Acertos: <strong>{stats.correct}</strong>
              </span>
              <span className="text-rose-400">
                Erros: <strong>{stats.wrong}</strong>
              </span>
              <span className="px-2 py-0.5 rounded bg-teal-600 font-extrabold">
                Aproveitamento: {stats.pct}%
              </span>
            </div>
            <button
              type="button"
              onClick={resetSimAnswers}
              className="px-3 py-1 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition cursor-pointer"
            >
              🔄 Zerar Simulado
            </button>
          </div>
        )}
      </div>

      {/* Questions List */}
      {subMode === 'QUESTOES' && (
        <div className="space-y-4">
          {paginatedQuestions.map((item, idx) => {
            const globalNum = (safePage - 1) * QUESTIONS_PER_PAGE + idx + 1;
            const userSelected = simAnswers[item.qid];
            const isAnswered = userSelected !== undefined;

            return (
              <div
                key={item.qid}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-lg bg-slate-900 text-white text-xs font-extrabold">
                      #{globalNum}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded text-[11px] font-bold uppercase ${getCatBadgeClass(
                        item.cat
                      )}`}
                    >
                      Aula {String(item.lessonNum).padStart(2, '0')} &bull; {item.catName}
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium truncate max-w-md">
                    {item.blockTitle}
                  </span>
                </div>

                <p
                  className="text-xs sm:text-sm font-extrabold text-slate-900 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: renderMathInHtml(item.q) }}
                />

                <div className="space-y-1.5">
                  {item.options.map((opt, oIdx) => {
                    const isCorrect = oIdx === item.ans;
                    const isSelected = userSelected === oIdx;

                    let btnStyle =
                      'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200';
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
                        onClick={() => setSimAnswer(item.qid, oIdx)}
                        className={`w-full text-left px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm transition flex items-start gap-2 cursor-pointer ${btnStyle}`}
                      >
                        <span className="font-bold">
                          {isAnswered && isCorrect
                            ? '✅ '
                            : isAnswered && isSelected && !isCorrect
                            ? '❌ '
                            : ''}
                        </span>
                        <span dangerouslySetInnerHTML={{ __html: renderMathInHtml(opt) }} />
                      </button>
                    );
                  })}
                </div>

                {isAnswered && (
                  <div
                    className={`p-3.5 rounded-xl text-xs border leading-relaxed ${
                      userSelected === item.ans
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                        : 'bg-amber-50 border-amber-200 text-amber-950'
                    }`}
                  >
                    <p className="font-extrabold mb-1">
                      {userSelected === item.ans
                        ? '🎯 Resposta Correta!'
                        : '⚠️ Gabarito Comentado:'}
                    </p>
                    <div dangerouslySetInnerHTML={{ __html: renderMathInHtml(item.comment) }} />
                  </div>
                )}
              </div>
            );
          })}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between bg-white rounded-2xl border border-slate-200 p-4">
              <button
                type="button"
                disabled={safePage <= 1}
                onClick={() => {
                  setPage((p) => Math.max(1, p - 1));
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
                  setPage((p) => Math.min(totalPages, p + 1));
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-4 py-2 rounded-xl bg-teal-700 hover:bg-teal-800 disabled:opacity-40 text-white text-xs font-bold cursor-pointer"
              >
                Próxima Página ➔
              </button>
            </div>
          )}
        </div>
      )}

      {/* PROVA OFICIAL 50 QUESTOES MODE */}
      {subMode === 'PROVA_OFICIAL' && (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white rounded-2xl p-5 shadow-md space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[10px] font-black uppercase">
                  Simulação Fiel — Anexo III Retificado (Edital nº 28/2026)
                </span>
                <h3 className="text-lg font-extrabold mt-1">
                  🏆 Prova Simulada Oficial ACE — 50 Questões (Peso 2,0 = 100,0 Pontos)
                </h3>
                <p className="text-xs text-slate-300">
                  15 Específicos (30 pts) + 10 Português (20 pts) + 10 Raciocínio Lógico (20 pts) + 10 Legislação (20 pts) + 5 Gerais (10 pts). Mínimo para aprovação: <strong>50,0 pontos</strong>.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => setExamSubmitted(true)}
                  className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 text-xs font-black shadow-sm transition cursor-pointer"
                >
                  ✅ Finalizar e Calcular Nota ({examScore.answered}/50)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setExamSeed((s) => s + 1);
                    setExamAnswers({});
                    setExamSubmitted(false);
                  }}
                  className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/15 transition cursor-pointer"
                >
                  🎲 Sortear Nova Prova
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 pt-2 border-t border-white/10 text-xs">
              <div
                className={`p-2.5 rounded-xl border ${
                  examScore.approved
                    ? 'bg-emerald-500/20 border-emerald-400 text-emerald-200'
                    : 'bg-white/5 border-white/15'
                }`}
              >
                <span className="block text-[10px] uppercase text-slate-300">Nota Atual</span>
                <strong className="text-base font-black">{examScore.points},0 / 100 pts</strong>
                <span className="block text-[10px] mt-0.5">
                  {examScore.approved ? '✅ APROVADO (≥50 pts)' : 'Meta: 50,0 pts'}
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                <span className="block text-[10px] text-teal-300 font-bold">Específicos (15)</span>
                <strong>{examScore.byCat.esp.hits}/15</strong> ({examScore.byCat.esp.hits * 2} pts)
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                <span className="block text-[10px] text-blue-300 font-bold">Português (10)</span>
                <strong>{examScore.byCat.por.hits}/10</strong> ({examScore.byCat.por.hits * 2} pts)
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                <span className="block text-[10px] text-indigo-300 font-bold">R. Lógico (10)</span>
                <strong>{examScore.byCat.rlm.hits}/10</strong> ({examScore.byCat.rlm.hits * 2} pts)
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                <span className="block text-[10px] text-amber-300 font-bold">Legislação (10)</span>
                <strong>{examScore.byCat.leg.hits}/10</strong> ({examScore.byCat.leg.hits * 2} pts)
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                <span className="block text-[10px] text-emerald-300 font-bold">Gerais RO (5)</span>
                <strong>{examScore.byCat.atu.hits}/5</strong> ({examScore.byCat.atu.hits * 2} pts)
              </div>
            </div>
          </div>

          {officialExamQuestions.map((item, idx) => {
            const userSelected = examAnswers[item.qid];
            const isAnswered = userSelected !== undefined;

            return (
              <div
                key={`exam_${item.qid}`}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-lg bg-amber-500 text-slate-950 text-xs font-black">
                      Questão {String(idx + 1).padStart(2, '0')}/50 &bull; Vale 2,0 pts
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded text-[11px] font-bold uppercase ${getCatBadgeClass(
                        item.cat
                      )}`}
                    >
                      {item.catName} (Aula {String(item.lessonNum).padStart(2, '0')})
                    </span>
                  </div>
                </div>

                <p
                  className="text-xs sm:text-sm font-extrabold text-slate-900 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: renderMathInHtml(item.q) }}
                />

                <div className="space-y-1.5">
                  {item.options.map((opt, oIdx) => {
                    const isCorrect = oIdx === item.ans;
                    const isSelected = userSelected === oIdx;
                    const revealFeedback = isAnswered || examSubmitted;

                    let btnStyle =
                      'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200';
                    if (revealFeedback) {
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
                        onClick={() =>
                          setExamAnswers((prev) => ({ ...prev, [item.qid]: oIdx }))
                        }
                        className={`w-full text-left px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm transition flex items-start gap-2 cursor-pointer ${btnStyle}`}
                      >
                        <span className="font-bold">
                          {revealFeedback && isCorrect
                            ? '✅ '
                            : revealFeedback && isSelected && !isCorrect
                            ? '❌ '
                            : ''}
                        </span>
                        <span dangerouslySetInnerHTML={{ __html: renderMathInHtml(opt) }} />
                      </button>
                    );
                  })}
                </div>

                {(isAnswered || examSubmitted) && (
                  <div
                    className={`p-3.5 rounded-xl text-xs border leading-relaxed ${
                      userSelected === item.ans
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                        : 'bg-amber-50 border-amber-200 text-amber-950'
                    }`}
                  >
                    <p className="font-extrabold mb-1">
                      {userSelected === item.ans
                        ? '🎯 +2,0 Pontos Garantidos!'
                        : '⚠️ Comentário da Questão:'}
                    </p>
                    <div dangerouslySetInnerHTML={{ __html: renderMathInHtml(item.comment) }} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Flashcards Grid */}
      {subMode === 'FLASHCARDS' && (
        <FlashcardGrid
          flashcards={filteredFlashcards}
          flippedCards={flippedGlobal}
          onToggleFlip={handleToggleFlip}
          keyPrefix="global_fc"
        />
      )}
    </div>
  );
};
