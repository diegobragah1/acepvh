import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';

export const Header: React.FC = () => {
  const {
    appData,
    currentTab,
    setCurrentTab,
    getTopicStatus,
    setSitesModalOpen,
    exportProgress
  } = useApp();

  // Countdown state
  const [countdown, setCountdown] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isPast: boolean;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: false });

  useEffect(() => {
    function updateCountdown() {
      // Prova IBGP SEMUSA Porto Velho: 13/12/2026 14:45:00 (Fuso horário de Rondônia: UTC-4)
      const examDate = new Date("2026-12-13T14:45:00-04:00").getTime();
      const now = new Date().getTime();
      const diff = examDate - now;

      if (diff <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds, isPast: false });
    }

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  // Calculate statistics
  const totalLessons = appData?.lessons?.length || 0;
  let cNotStarted = 0;
  let cStudying = 0;
  let cCompleted = 0;
  let cReview = 0;
  let cMastered = 0;

  if (appData?.lessons) {
    appData.lessons.forEach(l => {
      const st = getTopicStatus(l.id);
      if (st === 'studying') cStudying++;
      else if (st === 'completed') cCompleted++;
      else if (st === 'review') cReview++;
      else if (st === 'mastered') cMastered++;
      else cNotStarted++;
    });
  } else {
    cNotStarted = totalLessons;
  }

  const doneCount = cCompleted + cMastered;
  const overallPercent = totalLessons > 0 ? Math.round((doneCount / totalLessons) * 100) : 0;

  const wMastered = totalLessons > 0 ? ((cMastered / totalLessons) * 100).toFixed(1) : "0";
  const wCompleted = totalLessons > 0 ? ((cCompleted / totalLessons) * 100).toFixed(1) : "0";
  const wReview = totalLessons > 0 ? ((cReview / totalLessons) * 100).toFixed(1) : "0";
  const wStudying = totalLessons > 0 ? ((cStudying / totalLessons) * 100).toFixed(1) : "0";

  const tabs = [
    { id: 'tab-painel', label: '1. Diagnóstico, Edital Retificado & Vagas (340–356)' },
    { id: 'tab-apostila', label: `2. Apostila (${totalLessons} aulas: Modos A, B e C)` },
    { id: 'tab-simulado', label: '3. Simulado IBGP (Peso 2) & Flashcards' },
    { id: 'tab-endemias', label: '4. Fichas Individuais das 14 Doenças, LIRAa & Roedores' },
    { id: 'tab-cronograma', label: '5. Matriz Integral de Auditoria & Cronograma 12 Semanas' },
    { id: 'tab-biblioteca', label: '6. Fontes e documentos de referência' },
    { id: 'tab-programatico', label: '7. Conteúdo Programático Detalhado' },
  ];

  return (
    <header className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white border-b border-teal-800/60 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
          {/* Left Column: Info & Action Buttons */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                CONTEÚDO E FONTES EM REVISÃO
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                EDITAL Nº 25/2026 + RETIFICAÇÃO Nº 01 (EDITAL 28/2026)
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                BANCA IBGP &bull; PROVA: 13/12/2026 (14h45–17h45)
              </span>
            </div>

            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white leading-tight">
              Plano de Estudos Integrado ACE — SEMUSA Porto Velho/RO 2026
            </h1>
            <p className="text-xs sm:text-sm text-slate-300">
              Agente de Combate às Endemias &bull; <strong>Códigos 340 (Urbano: 96 vagas) e 341 a 356 (15 Distritos: 44 vagas) = 140 Vagas</strong> &bull; <strong>R$ 3.242,00 (40h)</strong> &bull; 50 Questões (Peso 2 = 100 pts) &bull; {totalLessons} Aulas + {appData?.endemics.length || 0} Fichas de Endemias + {appData?.sources.length || 0} Fontes
            </p>

            <div className="flex flex-wrap gap-1.5 pt-1 no-print">
              <button
                type="button"
                onClick={() => setSitesModalOpen(true)}
                className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow flex items-center gap-1.5 transition"
              >
                <span>&#128203; Publicação &amp; Backup de Progresso</span>
              </button>
              <button
                type="button"
                onClick={exportProgress}
                className="px-3 py-1.5 rounded-lg bg-teal-700 hover:bg-teal-600 text-white font-bold text-xs shadow flex items-center gap-1.5 transition"
              >
                <span>&#11015; Exportar Backup JSON</span>
              </button>
              <a
                href="https://github.com/diegobragah1/acepvh"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-emerald-300 border border-emerald-500/40 font-bold text-xs shadow flex items-center gap-1 transition"
              >
                <span>&#128187; Repositório GitHub &#8599;</span>
              </a>
              <a
                href="https://drive.google.com/drive/folders/1L8bvMQeMBoqE9o-HacSqYsa0sujn8OBK"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-100 font-semibold text-xs flex items-center gap-1 transition"
              >
                <span>&#128193; Drive (85 PDFs) &#8599;</span>
              </a>
              <a
                href="https://notebooklm.google.com/notebook/2bd0b85d-ab28-4bd7-82b1-512d85ab1021"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-100 font-semibold text-xs flex items-center gap-1 transition"
              >
                <span>&#129302; NotebookLM &#8599;</span>
              </a>
            </div>
          </div>

          {/* Right Column: Countdown Card & 5-level Progress */}
          <div className="lg:col-span-5 bg-navy-900/90 backdrop-blur-md p-5 rounded-3xl border border-white/15 space-y-4 shadow-xl no-print">
            <div className="flex justify-between items-start gap-2">
              <div>
                <span className="text-[10px] uppercase tracking-wider font-extrabold text-amber-400 block">
                  <i className="fa-regular fa-calendar-check mr-1"></i> Prova: 13/12/2026 (14h45 às 17h45)
                </span>
                <div className="text-base sm:text-lg font-black text-white mt-0.5">
                  {countdown.isPast ? (
                    <span className="text-emerald-400 font-bold">Prova em andamento ou realizada!</span>
                  ) : (
                    <>
                      <span className="text-white">{countdown.days} dias</span>{" "}
                      <span className="text-slate-300 font-bold text-sm">
                        e {String(countdown.hours).padStart(2, '0')}h {String(countdown.minutes).padStart(2, '0')}m {String(countdown.seconds).padStart(2, '0')}s
                      </span>
                    </>
                  )}
                </div>
                <span className="text-[11px] text-slate-400 block">
                  Fechamento dos portões: <strong>14h30</strong> (Horário RO)
                </span>
              </div>
              <div className="text-right shrink-0">
                <span className="text-[10px] uppercase tracking-wider font-extrabold text-slate-300 block">
                  Progresso Geral
                </span>
                <div className="text-3xl font-black text-emerald-400">{overallPercent}%</div>
                <span className="text-[11px] font-semibold text-slate-400 block">
                  {doneCount} / {totalLessons} aulas
                </span>
              </div>
            </div>

            {/* Segmented Multi-status Progress Bar */}
            <div className="w-full bg-slate-800 rounded-full h-3.5 overflow-hidden flex p-0.5 gap-0.5">
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

            {/* 5-Status Breakdown Numbers */}
            <div className="flex items-center justify-between text-[11px] text-slate-300 pt-2 border-t border-slate-700/60 font-medium">
              <span title="Não iniciados">⚪ <span>{cNotStarted}</span></span>
              <span title="Estudando">📘 <span>{cStudying}</span></span>
              <span title="Estudados">✅ <span>{cCompleted}</span></span>
              <span title="Revisar">🔄 <span>{cReview}</span></span>
              <span title="Dominados">🏆 <span>{cMastered}</span></span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="mt-5 flex flex-wrap gap-1.5 border-t border-slate-800 pt-3 no-print">
          {tabs.map(tab => {
            const active = currentTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setCurrentTab(tab.id)}
                className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-bold transition ${
                  active
                    ? 'bg-teal-500 text-slate-950 shadow'
                    : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
