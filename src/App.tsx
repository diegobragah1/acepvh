import React, { useMemo } from 'react';
import { useApp } from './context/AppContext';
import { Header } from './components/Header';
import { Tab1Painel } from './components/Tab1Painel';
import { Tab2Apostila } from './components/Tab2Apostila';
import { Tab3Simulado } from './components/Tab3Simulado';
import { Tab4Endemias } from './components/Tab4Endemias';
import { Tab5Cronograma } from './components/Tab5Cronograma';
import { Tab6Biblioteca } from './components/Tab6Biblioteca';
import { Tab7Programatico } from './components/Tab7Programatico';
import { BackupModal } from './components/BackupModal';
import { Toast } from './components/Toast';

export const App: React.FC = () => {
  const { appData, currentTab, loading, error, reloadData } = useApp();

  const { totalQuestions, totalFlashcards } = useMemo(() => {
    let qCount = 0;
    let fcCount = 0;
    (appData?.lessons || []).forEach(l => {
      (l.blocks || []).forEach(b => {
        qCount += (b.questions || []).length;
        fcCount += (b.flashcards || []).length;
      });
    });
    return {
      totalQuestions: qCount,
      totalFlashcards: fcCount,
    };
  }, [appData]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Header />

      <main className="flex-1 max-w-7xl w-full mx-auto px-2.5 sm:px-4 py-3 sm:py-5">
        {loading && (
          <div className="flex flex-col items-center justify-center p-12 space-y-4">
            <div className="w-10 h-10 border-4 border-teal-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-sm font-bold text-slate-600">
              Carregando aulas e materiais de estudo...
            </p>
          </div>
        )}

        {error && (
          <div className="p-5 rounded-2xl bg-rose-50 border border-rose-300 text-rose-950 space-y-3">
            <h3 className="text-base font-extrabold text-rose-900">Erro ao carregar dados da plataforma</h3>
            <p className="text-xs sm:text-sm">{error}</p>
            <button
              type="button"
              onClick={reloadData}
              className="px-4 py-2 rounded-xl bg-rose-700 hover:bg-rose-800 text-white text-xs font-bold shadow transition"
            >
              Tentar Carregar Novamente
            </button>
          </div>
        )}

        {!loading && !error && (
          <>
            {currentTab === 'tab-painel' && <Tab1Painel />}
            {currentTab === 'tab-apostila' && <Tab2Apostila />}
            {currentTab === 'tab-simulado' && <Tab3Simulado />}
            {currentTab === 'tab-endemias' && <Tab4Endemias />}
            {currentTab === 'tab-cronograma' && <Tab5Cronograma />}
            {currentTab === 'tab-biblioteca' && <Tab6Biblioteca />}
            {currentTab === 'tab-programatico' && <Tab7Programatico />}
          </>
        )}
      </main>

      <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 py-6 text-xs text-center no-print">
        <div className="max-w-7xl mx-auto px-4 space-y-1">
          <p className="font-semibold text-slate-300">
            Plataforma Integrada ACE SEMUSA Porto Velho/RO 2026 &bull; Concurso Público Edital nº 25/2026 + Retificação nº 01 (Edital nº 28/2026 — Banca IBGP)
          </p>
          <p className="text-slate-500">
            {appData?.lessons.length || 0} Aulas Aprofundadas (Modos A, B, C e Mapa Mental), {totalQuestions} Questões Comentadas, {totalFlashcards} Flashcards, Fichas das {appData?.endemics.length || 0} Endemias e {appData?.sources.length || 0} Fontes Documentais.
          </p>
        </div>
      </footer>

      <BackupModal />
      <Toast />
    </div>
  );
};

