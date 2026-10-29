import React from 'react';
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
  const { currentTab, loading, error } = useApp();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Header />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-6">
        {loading && (
          <div className="flex flex-col items-center justify-center p-12 space-y-4">
            <div className="w-10 h-10 border-4 border-teal-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-sm font-bold text-slate-600">Carregando dados da plataforma...</p>
          </div>
        )}

        {error && (
          <div className="p-5 rounded-2xl bg-rose-50 border border-rose-300 text-rose-950 space-y-2">
            <h3 className="text-base font-extrabold text-rose-900">Erro ao carregar dados da plataforma</h3>
            <p className="text-xs sm:text-sm">{error}</p>
          </div>
        )}

        {!loading && (
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
            Plataforma Integrada ACE SEMUSA Porto Velho/RO 2026 &bull; Concurso Público Edital nº 25/2026 (Banca IBGP)
          </p>
          <p className="text-slate-500">
            32 Aulas Aprofundadas (Modos A, B e C), 207 Questões Comentadas, 246 Flashcards, Fichas das 14 Endemias e 94 Fontes Documentais.
          </p>
        </div>
      </footer>

      <BackupModal />
      <Toast />
    </div>
  );
};
