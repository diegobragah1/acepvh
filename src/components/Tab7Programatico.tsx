import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { getStatusMeta, getCatBadgeClass } from '../utils/status';
import { TopicStatus } from '../types';
import { PAUTA_ESPECIFICA_ITEMS } from '../data/pautaEspecificaMap';

export const Tab7Programatico: React.FC = () => {
  const { appData, setCurrentTab, setCurrentLessonId, getTopicStatus, updateTopicStatus } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [catFilter, setCatFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showPautaTable, setShowPautaTable] = useState(true);

  const lessons = appData?.lessons || [];
  const total = lessons.length || 32;

  let cNotStarted = 0, cStudying = 0, cCompleted = 0, cReview = 0, cMastered = 0;
  lessons.forEach(l => {
    const st = getTopicStatus(l.id);
    if (st === 'studying') cStudying++;
    else if (st === 'completed') cCompleted++;
    else if (st === 'review') cReview++;
    else if (st === 'mastered') cMastered++;
    else cNotStarted++;
  });

  const doneCount = cCompleted + cMastered;
  const overallPercent = total > 0 ? Math.round((doneCount / total) * 100) : 0;

  const wMastered = total > 0 ? ((cMastered / total) * 100).toFixed(1) : "0";
  const wCompleted = total > 0 ? ((cCompleted / total) * 100).toFixed(1) : "0";
  const wReview = total > 0 ? ((cReview / total) * 100).toFixed(1) : "0";
  const wStudying = total > 0 ? ((cStudying / total) * 100).toFixed(1) : "0";

  const filteredLessons = lessons.filter(l => {
    if (catFilter !== 'all' && l.cat !== catFilter) return false;
    const st = getTopicStatus(l.id);
    if (statusFilter !== 'all' && st !== statusFilter) return false;

    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();
    const inTitle = (l.title || '').toLowerCase().includes(q) ||
                    (l.editalRef && l.editalRef.toLowerCase().includes(q)) ||
                    (l.catName || '').toLowerCase().includes(q);
    const inBlocks = (l.blocks || []).some(b =>
      (b.title || '').toLowerCase().includes(q) ||
      (b.modoA && b.modoA.toLowerCase().includes(q)) ||
      (b.modoB && b.modoB.toLowerCase().includes(q))
    );
    return inTitle || inBlocks;
  });

  const handleOpenLesson = (lessonId: string) => {
    setCurrentLessonId(lessonId);
    setCurrentTab('tab-apostila');
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const handleOpenLessonAndBlock = (lessonId: string, blockIdx: number) => {
    setCurrentLessonId(lessonId);
    setCurrentTab('tab-apostila');
    setTimeout(() => {
      const el = document.getElementById(`lesson-block-${blockIdx}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 300, behavior: 'smooth' });
      }
    }, 150);
  };

  return (
    <section className="space-y-6">
      {/* Programmatic Content Header & Dedicated Progress */}
      <div className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white rounded-3xl p-6 shadow-md border border-teal-800/60">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-teal-500/20 text-teal-300 border border-teal-500/40">
                EDITAL Nº 25/2026 SEMUSA PORTO VELHO &bull; ANEXO IV
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                BANCA IBGP &bull; PROVA 13/12/2026
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              Conteúdo Programático Oficial Detalhado
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl">
              Acompanhe sua preparação tópico por tópico conforme o conteúdo programático do edital. Selecione seu status em cada item (⚪ Não iniciado, 📘 Estudando, ✅ Estudado, 🔄 Revisar, 🏆 Dominado) e acesse a aula correspondente na apostila com um clique.
            </p>
          </div>

          {/* Dedicated Programmatic Progress Card */}
          <div className="bg-slate-800/90 border border-slate-700/80 p-4 rounded-2xl w-full lg:w-96 shrink-0 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-300">Domínio do Conteúdo Oficial:</span>
              <span className="text-xl font-black text-emerald-400">{overallPercent}%</span>
            </div>
            {/* Segmented Progress Bar */}
            <div className="w-full bg-slate-900 rounded-full h-3 overflow-hidden flex p-0.5 gap-0.5">
              <div
                className="bg-purple-500 h-full rounded-l-full transition-all duration-300"
                style={{ width: `${wMastered}%` }}
                title={`Dominado: ${cMastered} (${wMastered}%)`}
              />
              <div
                className="bg-emerald-500 h-full transition-all duration-300"
                style={{ width: `${wCompleted}%` }}
                title={`Estudado: ${cCompleted} (${wCompleted}%)`}
              />
              <div
                className="bg-amber-400 h-full transition-all duration-300"
                style={{ width: `${wReview}%` }}
                title={`Revisar: ${cReview} (${wReview}%)`}
              />
              <div
                className="bg-sky-400 h-full transition-all duration-300"
                style={{ width: `${wStudying}%` }}
                title={`Estudando: ${cStudying} (${wStudying}%)`}
              />
            </div>

            {/* Breakdown */}
            <div className="flex items-center justify-between text-[11px] text-slate-300 pt-1 font-medium">
              <span title="Não iniciados">⚪ <span>{cNotStarted}</span></span>
              <span title="Estudando">📘 <span>{cStudying}</span></span>
              <span title="Estudados">✅ <span>{cCompleted}</span></span>
              <span title="Revisar">🔄 <span>{cReview}</span></span>
              <span title="Dominados">🏆 <span>{cMastered}</span></span>
            </div>
          </div>
        </div>
      </div>

      {/* Mapeamento Literal 1 para 1 da Pauta de Conhecimentos Específicos (Anexo IV) */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border-2 border-teal-600/30 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md bg-amber-400 text-slate-950 text-[11px] font-black uppercase">
                ★ Pauta Literal de Conhecimentos Específicos (Anexo IV)
              </span>
              <span className="text-xs font-bold text-teal-800">
                100% dos Blocos do Edital Mapeados com Acesso Direto
              </span>
            </div>
            <p className="text-xs text-slate-600">
              Confira abaixo onde cada item literal da pauta de Conhecimentos Específicos está localizado nas aulas e clique para abrir diretamente o bloco correspondente:
            </p>
          </div>
          <button
            type="button"
            onClick={() => setShowPautaTable(prev => !prev)}
            className="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300"
          >
            {showPautaTable ? 'Ocultar Mapa da Pauta ▲' : 'Mostrar Mapa da Pauta ▼'}
          </button>
        </div>

        {showPautaTable && (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-2.5 rounded-tl-xl font-bold">Tópico Literal na Pauta do Edital (Conhecimentos Específicos)</th>
                  <th className="p-2.5 font-bold">Aula &amp; Bloco Correspondente</th>
                  <th className="p-2.5 font-bold">Conteúdo Integral Abordado</th>
                  <th className="p-2.5 rounded-tr-xl font-bold text-right">Acesso</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {PAUTA_ESPECIFICA_ITEMS.map(item => (
                  <tr
                    key={item.id}
                    className={item.isHighlightedUserRequest ? 'bg-amber-50/70 hover:bg-amber-100/70' : 'hover:bg-slate-50'}
                  >
                    <td className="p-2.5 font-bold text-slate-900 align-top">
                      <div className="flex items-start gap-1.5">
                        {item.isHighlightedUserRequest && (
                          <span className="shrink-0 mt-0.5 px-1.5 py-0.2 rounded bg-amber-400 text-slate-950 text-[10px] font-black">
                            ★ FOCO
                          </span>
                        )}
                        <span>{item.pautaLiteral}</span>
                      </div>
                    </td>
                    <td className="p-2.5 text-teal-900 font-bold align-top">
                      <div>{item.lessonLabel}</div>
                      <div className="text-[11px] text-slate-600 font-semibold">{item.blockTitle.split('(')[0].trim()}</div>
                    </td>
                    <td className="p-2.5 text-slate-600 align-top max-w-md">
                      {item.description}
                    </td>
                    <td className="p-2.5 text-right align-top">
                      <button
                        type="button"
                        onClick={() => handleOpenLessonAndBlock(item.lessonId, item.blockIndex)}
                        className="px-3 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-bold text-[11px] whitespace-nowrap shadow-xs"
                      >
                        Abrir Bloco &#8594;
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2 flex-1">
          <input
            type="text"
            placeholder="Buscar tópico, palavra-chave ou legislação..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:border-teal-500 bg-slate-50 w-full sm:w-72"
          />
          <select
            value={catFilter}
            onChange={(e) => setCatFilter(e.target.value)}
            className="px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 bg-white font-medium"
          >
            <option value="all">Todas as Disciplinas</option>
            <option value="esp">Conhecimentos Específicos ACE</option>
            <option value="leg">Legislação</option>
            <option value="por">Língua Portuguesa</option>
            <option value="rlm">Raciocínio Lógico</option>
            <option value="atu">Conhecimentos Gerais</option>
          </select>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 bg-white font-medium"
          >
            <option value="all">Todos os Status</option>
            <option value="not_started">⚪ Não iniciado</option>
            <option value="studying">📘 Estudando</option>
            <option value="completed">✅ Estudado</option>
            <option value="review">🔄 Revisar</option>
            <option value="mastered">🏆 Dominado</option>
          </select>
        </div>
        <span className="text-xs font-bold text-slate-500">
          {filteredLessons.length} {filteredLessons.length === 1 ? 'tópico' : 'tópicos'}
        </span>
      </div>

      {/* Programmatic Topics Cards */}
      <div className="space-y-4">
        {filteredLessons.length === 0 ? (
          <div className="bg-white rounded-2xl p-8 text-center border border-slate-200 text-slate-500 space-y-2">
            <div className="text-3xl">🔍</div>
            <h4 className="text-sm font-bold text-slate-800">Nenhum tópico encontrado para esses filtros.</h4>
            <p className="text-xs text-slate-500">Tente buscar por outro termo ou selecione "Todas" e "Todos" nos filtros acima.</p>
          </div>
        ) : (
          filteredLessons.map(l => {
            const st = getTopicStatus(l.id);
            const m = getStatusMeta(st);
            const badgeCls = getCatBadgeClass(l.cat);
            const subtopics = (l.blocks || []).map(b => b.title);

            return (
              <div
                key={l.id}
                className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 hover:border-teal-300 transition space-y-3.5"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${badgeCls}`}>
                        {l.catName}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-700">
                        {l.weight}
                      </span>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${m.badgeClass}`}>
                        {m.icon} {m.label}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
                      {l.title}
                    </h3>
                    <p className="text-xs text-slate-600">
                      <strong>Item Oficial do Conteúdo Programático (Anexo IV):</strong> {l.editalRef}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleOpenLesson(l.id)}
                    className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold shadow-sm transition"
                  >
                    <span>Estudar Aula na Apostila</span>
                    <span>&rarr;</span>
                  </button>
                </div>

                {/* Subtopics bullet list */}
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <div className="text-[11px] font-bold text-slate-500 uppercase mb-1.5">
                    Subtópicos &amp; Blocos Trabalhados nesta Aula (Clique em qualquer bloco para abrir direto):
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {subtopics.length > 0 ? (
                      subtopics.map((t, idx) => (
                        <li key={idx} className="leading-relaxed flex items-start justify-between gap-2 bg-white p-2 rounded-lg border border-slate-200/80 hover:border-teal-400 transition">
                          <div>
                            <strong className="text-teal-900">Bloco #{idx + 1}:</strong>{' '}
                            <span className="font-semibold text-slate-800">{t}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleOpenLessonAndBlock(l.id, idx)}
                            className="shrink-0 px-2.5 py-1 rounded-md bg-teal-50 hover:bg-teal-600 hover:text-white text-teal-800 font-bold text-[11px] border border-teal-200 transition"
                          >
                            Ir ao Bloco &#8594;
                          </button>
                        </li>
                      ))
                    ) : (
                      <li className="text-slate-500 italic">Conteúdo integral conforme diretrizes do Edital nº 25/2026.</li>
                    )}
                  </ul>
                </div>

                {/* Inline 5-level status selector */}
                <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="text-[11px] font-bold text-slate-500">
                    Atualizar seu status neste conteúdo:
                  </span>
                  <div className="flex flex-wrap items-center bg-slate-100 p-1 rounded-xl border border-slate-200 gap-1">
                    {(['not_started', 'studying', 'completed', 'review', 'mastered'] as TopicStatus[]).map(statusOption => {
                      const sm = getStatusMeta(statusOption);
                      const active = st === statusOption;
                      return (
                        <button
                          key={statusOption}
                          type="button"
                          onClick={() => updateTopicStatus(l.id, statusOption)}
                          className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition ${
                            active ? sm.activeClass : 'text-slate-500 hover:text-slate-800'
                          }`}
                        >
                          {sm.icon} {sm.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};
