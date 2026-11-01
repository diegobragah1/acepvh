import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import type { TopicStatus } from '../types';
import { getStatusMeta } from '../utils/status';
import { StatusSelector, STATUS_OPTIONS } from '../features/progress/StatusSelector';
import { SegmentedProgressBar } from '../features/progress/SegmentedProgressBar';

interface SyllabusDiscipline {
  id: string;
  cat: 'esp' | 'leg' | 'por' | 'rlm' | 'atu';
  title: string;
  subtitle: string;
  weightBadge: string;
  questionsBadge: string;
  headerBg: string;
  lessonIds: string[];
}

const SYLLABUS_DISCIPLINES: SyllabusDiscipline[] = [
  {
    id: 'disc-esp',
    cat: 'esp',
    title: '1. CONHECIMENTOS ESPECÍFICOS (Agente de Combate às Endemias)',
    subtitle: '10 Categorias Oficiais — Maior peso estratégico do concurso (Foco em Saúde Pública, SUS, PNAB, Leis do ACE, Vigilância e 14 Endemias)',
    weightBadge: 'Peso 2,0 • 30,0 Pontos',
    questionsBadge: '15 Questões',
    headerBg: 'from-teal-900 to-emerald-900',
    lessonIds: ['esp_1', 'esp_2', 'esp_3', 'esp_4', 'esp_5', 'esp_6', 'esp_7', 'esp_8', 'esp_9', 'esp_10'],
  },
  {
    id: 'disc-leg',
    cat: 'leg',
    title: '2. LEGISLAÇÃO (Municipal de Porto Velho, Constitucional e Administrativa)',
    subtitle: '7 Categorias Oficiais — LOM Porto Velho, LC 385/2010, Leis 390 e 391/2010, Estatuto PcD (Lei 13.146), CF/88, Licitações (Lei 14.133) e LAI (Lei 12.527)',
    weightBadge: 'Peso 2,0 • 20,0 Pontos',
    questionsBadge: '10 Questões',
    headerBg: 'from-amber-800 to-orange-900',
    lessonIds: ['leg_1', 'leg_2', 'leg_3', 'leg_4', 'leg_5', 'leg_6', 'leg_7'],
  },
  {
    id: 'disc-por',
    cat: 'por',
    title: '3. LÍNGUA PORTUGUESA',
    subtitle: '18 Categorias Oficiais — Compreensão e Interpretação, Gêneros, Semântica, Figuras de Sintaxe e Linguagem, Coesão, Morfologia, Verbos, Concordância, Regência, Crase, Sintaxe e Pontuação',
    weightBadge: 'Peso 2,0 • 20,0 Pontos',
    questionsBadge: '10 Questões',
    headerBg: 'from-blue-900 to-indigo-950',
    lessonIds: [
      'por_1', 'por_2', 'por_3', 'por_4', 'por_5', 'por_6',
      'por_7', 'por_8', 'por_9', 'por_10', 'por_11', 'por_12',
      'por_13', 'por_14', 'por_15', 'por_16', 'por_17', 'por_18',
    ],
  },
  {
    id: 'disc-rlm',
    cat: 'rlm',
    title: '4. RACIOCÍNIO LÓGICO',
    subtitle: '8 Categorias Oficiais — Conjuntos Numéricos (MMC/MDC), Razão/Proporção/Porcentagem, Grandezas, Equações 1º Grau e Médias, Lógica Proposicional, Argumentação/Diagramas/Conjuntos, Sequências/Contagem/Probabilidade e Matrizes/Sistemas 2º Grau',
    weightBadge: 'Peso 2,0 • 20,0 Pontos',
    questionsBadge: '10 Questões',
    headerBg: 'from-purple-900 to-violet-950',
    lessonIds: ['rlm_1', 'rlm_2', 'rlm_3', 'rlm_4', 'rlm_5', 'rlm_6', 'rlm_7', 'rlm_8'],
  },
  {
    id: 'disc-atu',
    cat: 'atu',
    title: '5. CONHECIMENTOS GERAIS E ATUALIDADES (Município, Estado, Brasil e Mundo)',
    subtitle: '6 Categorias Oficiais — Fatos Políticos/Econômicos/Sociais (5 anos), Humanidades, Geografia/História/Estatísticas, Cidadania e Símbolos Oficiais, Atualidades Temáticas (Georreferenciamento/Saúde/Ecologia) e Realidade Socioambiental',
    weightBadge: 'Peso 2,0 • 10,0 Pontos',
    questionsBadge: '05 Questões',
    headerBg: 'from-emerald-900 to-slate-900',
    lessonIds: ['atu_1', 'atu_2', 'atu_3', 'atu_4', 'atu_5', 'atu_6'],
  },
];

export const Tab7Programatico: React.FC = () => {
  const {
    appData,
    getTopicStatus,
    updateTopicStatus,
    setCurrentLessonId,
    setCurrentTab,
    setCurrentStudyMode,
  } = useApp();

  const [selectedDisc, setSelectedDisc] = useState<string>('ALL');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedTopics, setExpandedTopics] = useState<Record<string, boolean>>({});

  const lessons = appData?.lessons || [];

  const lessonMap = useMemo(() => {
    const map = new Map<string, (typeof lessons)[number]>();
    lessons.forEach((l) => map.set(l.id, l));
    return map;
  }, [lessons]);

  const handleOpenLesson = (
    lessonId: string,
    mode: 'ALL' | 'MAPA' | 'A' | 'B' | 'C' = 'ALL'
  ) => {
    setCurrentLessonId(lessonId);
    setCurrentStudyMode(mode);
    setCurrentTab('tab-apostila');
  };

  const toggleExpandTopic = (lessonId: string) => {
    setExpandedTopics((prev) => ({ ...prev, [lessonId]: !prev[lessonId] }));
  };

  const globalStats = useMemo(() => {
    const counts: Record<TopicStatus, number> = {
      not_started: 0,
      studying: 0,
      completed: 0,
      review: 0,
      mastered: 0,
    };
    lessons.forEach((l) => {
      const st = getTopicStatus(l.id);
      counts[st] = (counts[st] || 0) + 1;
    });
    const total = lessons.length || 49;
    const finished = counts.completed + counts.mastered;
    const pct = Math.round((finished / total) * 100);
    return { counts, total, finished, pct };
  }, [lessons, getTopicStatus]);

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-5">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-1.5 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-xs font-extrabold uppercase tracking-wider">
              📋 Edital Verticalizado Interativo — Anexo IV Completo
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Conteúdo Programático Categorizado (49 Tópicos Oficiais)
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Navegue diretamente pelas{' '}
              <strong>10 categorias de Conhecimento Específico</strong>,{' '}
              <strong>7 de Legislação</strong>,{' '}
              <strong>18 de Língua Portuguesa</strong>,{' '}
              <strong>8 de Raciocínio Lógico</strong> e{' '}
              <strong>6 de Conhecimentos Gerais e Atualidades</strong>. Marque seu progresso e abra a aula completa, o Mapa Mental ou as Questões com 1 clique.
            </p>
          </div>

          {/* Global Progress Box */}
          <div className="bg-slate-900 text-white rounded-2xl p-4 w-full sm:w-auto sm:min-w-[260px] shadow-sm space-y-2">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-slate-300">Domínio do Edital (49 itens)</span>
              <span className="text-emerald-400 font-extrabold">
                {globalStats.finished}/{globalStats.total} ({globalStats.pct}%)
              </span>
            </div>
            <SegmentedProgressBar
              statusCounts={globalStats.counts}
              total={globalStats.total}
              heightClass="h-2.5"
            />
            <div className="flex flex-wrap gap-2 pt-1 text-[10px] text-slate-300">
              <span>🏆 Dominados: <strong>{globalStats.counts.mastered}</strong></span>
              <span>✅ Estudados: <strong>{globalStats.counts.completed}</strong></span>
              <span>📘 Em estudo: <strong>{globalStats.counts.studying}</strong></span>
              <span>🔄 Revisar: <strong>{globalStats.counts.review}</strong></span>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 pt-3 border-t border-slate-100">
          <div className="md:col-span-5">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="🔎 Filtrar tópico, artigo, lei (ex: 13.708, PNAB, LOM, Crase, Matrizes)..."
              className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 bg-slate-50 focus:outline-none focus:border-teal-600"
            />
          </div>

          <div className="md:col-span-4 flex flex-wrap gap-1">
            {[
              { id: 'ALL', label: 'Todas (49)' },
              { id: 'esp', label: 'Específicos (10)' },
              { id: 'leg', label: 'Legislação (7)' },
              { id: 'por', label: 'Português (18)' },
              { id: 'rlm', label: 'R. Lógico (8)' },
              { id: 'atu', label: 'Gerais (6)' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedDisc(tab.id)}
                className={`px-2.5 py-1.5 rounded-xl text-[11px] font-extrabold transition cursor-pointer ${
                  selectedDisc === tab.id
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="md:col-span-3">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-slate-50 font-bold text-slate-700"
            >
              <option value="ALL">Filtrar por Status (Todos)</option>
              {STATUS_OPTIONS.map((st) => {
                const meta = getStatusMeta(st);
                return (
                  <option key={st} value={st}>
                    {meta.icon} {meta.label}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>

      {/* Discipline Sections */}
      <div className="space-y-6">
        {SYLLABUS_DISCIPLINES.filter(
          (disc) => selectedDisc === 'ALL' || disc.cat === selectedDisc
        ).map((disc) => {
          const discLessons = disc.lessonIds
            .map((id) => lessonMap.get(id))
            .filter((l): l is NonNullable<typeof l> => Boolean(l));

          const visibleLessons = discLessons.filter((l) => {
            const st = getTopicStatus(l.id);
            if (statusFilter !== 'ALL' && st !== statusFilter) return false;
            if (searchQuery.trim()) {
              const q = searchQuery.toLowerCase();
              const inTitle = l.title.toLowerCase().includes(q);
              const inRef = (l.editalRef || '').toLowerCase().includes(q);
              const inBlocks = (l.blocks || []).some((b) =>
                (b.title || '').toLowerCase().includes(q)
              );
              return inTitle || inRef || inBlocks;
            }
            return true;
          });

          if (visibleLessons.length === 0) return null;

          const doneInDisc = discLessons.filter((l) => {
            const st = getTopicStatus(l.id);
            return st === 'completed' || st === 'mastered';
          }).length;
          const discPct =
            discLessons.length > 0
              ? Math.round((doneInDisc / discLessons.length) * 100)
              : 0;

          return (
            <section
              key={disc.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
            >
              {/* Discipline Header */}
              <div
                className={`bg-gradient-to-r ${disc.headerBg} text-white p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4`}
              >
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/15 text-white text-[11px] font-extrabold">
                      {disc.questionsBadge}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[11px] font-extrabold">
                      {disc.weightBadge}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-400/20 text-emerald-200 border border-emerald-400/30 text-[11px] font-bold">
                      {doneInDisc}/{discLessons.length} Tópicos Concluídos ({discPct}%)
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold tracking-tight">
                    {disc.title}
                  </h3>
                  <p className="text-xs text-slate-200">{disc.subtitle}</p>
                </div>
              </div>

              {/* Topics Table / Cards */}
              <div className="divide-y divide-slate-200">
                {visibleLessons.map((lesson, idx) => {
                  const topicNumber = disc.lessonIds.indexOf(lesson.id) + 1;
                  const currentStatus = getTopicStatus(lesson.id);
                  const statusMeta = getStatusMeta(currentStatus);
                  const isExpanded = Boolean(expandedTopics[lesson.id]);

                  const qCount = (lesson.blocks || []).reduce(
                    (acc, b) => acc + (b.questions?.length || 0),
                    0
                  );
                  const fcCount = (lesson.blocks || []).reduce(
                    (acc, b) => acc + (b.flashcards?.length || 0),
                    0
                  );

                  return (
                    <div
                      key={lesson.id}
                      className={`p-4 sm:p-5 transition ${
                        currentStatus === 'mastered'
                          ? 'bg-purple-50/30'
                          : currentStatus === 'completed'
                          ? 'bg-emerald-50/30'
                          : 'hover:bg-slate-50/80'
                      }`}
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        {/* Left: Topic Number, Title & Official Edital Text */}
                        <div className="space-y-1.5 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="px-2.5 py-0.5 rounded-lg bg-slate-900 text-white text-xs font-black">
                              Item {topicNumber > 0 ? topicNumber : idx + 1}
                            </span>
                            <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-300 text-[11px] font-bold">
                              Aula {String(lesson.num).padStart(2, '0')} ({lesson.id})
                            </span>
                            <span
                              className={`px-2 py-0.5 rounded border text-[11px] font-bold ${statusMeta.badgeClass}`}
                            >
                              {statusMeta.icon} {statusMeta.label}
                            </span>
                            <span className="text-[11px] font-semibold text-slate-500">
                              &bull; {lesson.blocks?.length || 0} blocos &bull; {qCount} questões &bull;{' '}
                              {fcCount} flashcards
                            </span>
                          </div>

                          <h4 className="text-sm sm:text-base font-extrabold text-slate-900">
                            {lesson.title}
                          </h4>

                          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/90 text-xs text-slate-700 leading-relaxed">
                            <strong className="text-slate-900">
                              📌 Texto Oficial do Edital:
                            </strong>{' '}
                            {lesson.editalRef}
                          </div>
                        </div>

                        {/* Right: Quick Action Buttons & Status Selector */}
                        <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end justify-between gap-2.5 shrink-0">
                          <div className="flex flex-wrap items-center gap-1.5">
                            <button
                              type="button"
                              onClick={() => handleOpenLesson(lesson.id, 'ALL')}
                              className="px-3 py-1.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs font-extrabold shadow-sm transition flex items-center gap-1 cursor-pointer"
                            >
                              📖 Estudar Aula
                            </button>
                            {lesson.mindMap && (
                              <button
                                type="button"
                                onClick={() => handleOpenLesson(lesson.id, 'MAPA')}
                                className="px-2.5 py-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-900 border border-indigo-200 text-xs font-bold transition cursor-pointer"
                                title="Abrir diretamente o Mapa Mental desta aula"
                              >
                                🧠 Mapa
                              </button>
                            )}
                            <button
                              type="button"
                              onClick={() => handleOpenLesson(lesson.id, 'C')}
                              className="px-2.5 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 text-xs font-bold transition cursor-pointer"
                              title="Praticar diretamente as questões desta aula"
                            >
                              ✍️ {qCount} Questões
                            </button>
                            <button
                              type="button"
                              onClick={() => toggleExpandTopic(lesson.id)}
                              className="px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition cursor-pointer"
                            >
                              {isExpanded ? '▲ Subtópicos' : '▼ Subtópicos'}
                            </button>
                          </div>

                          <StatusSelector
                            currentStatus={currentStatus}
                            onChange={(st) => updateTopicStatus(lesson.id, st)}
                            size="sm"
                          />
                        </div>
                      </div>

                      {/* Expanded Blocks Preview */}
                      {isExpanded && (
                        <div className="mt-3 pt-3 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                          {(lesson.blocks || []).map((b, bIdx) => (
                            <button
                              key={bIdx}
                              type="button"
                              onClick={() => handleOpenLesson(lesson.id, 'ALL')}
                              className="text-left p-2.5 rounded-xl bg-white hover:bg-teal-50/50 border border-slate-200 hover:border-teal-400 transition flex flex-col justify-between gap-1 cursor-pointer"
                            >
                              <div className="flex items-center justify-between gap-1">
                                <span className="text-[10px] font-black uppercase text-teal-800">
                                  Bloco {bIdx + 1}
                                </span>
                                <span className="text-[10px] font-bold text-slate-500">
                                  {b.questions?.length || 0} Q / {b.flashcards?.length || 0} FC
                                </span>
                              </div>
                              <p className="text-xs font-bold text-slate-800 line-clamp-2">
                                {b.title}
                              </p>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};
