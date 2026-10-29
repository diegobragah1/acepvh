import React, { useRef } from 'react';
import { useApp } from '../context/AppContext';

export const BackupModal: React.FC = () => {
  const { isSitesModalOpen, setSitesModalOpen, exportProgress, importProgress, showToast } = useApp();
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isSitesModalOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      importProgress(file);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleCopyUrl = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText("https://diegobragah1.github.io/acepvh/");
      showToast("Link copiado com sucesso!");
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <h3 className="text-lg font-extrabold text-slate-900">
            Publicação no GitHub Pages, Google Sites &amp; Backup de Progresso
          </h3>
          <button
            type="button"
            onClick={() => setSitesModalOpen(false)}
            className="text-slate-400 hover:text-slate-700 font-bold text-2xl px-2"
          >
            &times;
          </button>
        </div>

        <div className="space-y-3 text-sm text-slate-700">
          <div className="bg-emerald-50 border-l-4 border-emerald-600 p-3.5 rounded space-y-1.5">
            <p className="font-bold text-emerald-900">
              &#10003; Plataforma ACE SEMUSA Porto Velho 2026 — 100% Compatível com GitHub Pages!
            </p>
            <p className="text-xs text-emerald-800 leading-relaxed">
              Repositório oficial configurado em{' '}
              <a
                href="https://github.com/diegobragah1/acepvh"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-bold"
              >
                github.com/diegobragah1/acepvh
              </a>
              . O projeto conta com bundle estático pré-compilado (<code>./assets/app-bundle.js</code>), pasta <code>/docs</code> e workflow automático (<code>.github/workflows/deploy.yml</code>), funcionando tanto em <strong>Deploy from a branch (main / root ou /docs)</strong> quanto via <strong>GitHub Actions</strong>.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-300 space-y-2.5">
            <div className="text-xs font-extrabold uppercase text-slate-800">
              Sincronizar Progresso entre Computador e Celular (Backup JSON):
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Seu progresso (status das aulas concluídas e respostas do simulado) fica gravado com segurança no seu navegador via <code>localStorage</code>. Exporte o arquivo JSON para salvar uma cópia ou importá-lo em outro celular ou computador:
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <button
                type="button"
                onClick={exportProgress}
                className="px-3.5 py-2 rounded-lg bg-teal-700 hover:bg-teal-600 text-white text-xs font-bold shadow transition"
              >
                &#11015; Exportar Meu Progresso (.json)
              </button>
              <label className="cursor-pointer px-3.5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow transition inline-flex items-center">
                <span>&#11014; Importar Progresso (.json)</span>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".json,application/json"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="text-xs font-extrabold uppercase text-slate-800">
              Acesso no GitHub Pages e Incorporação no Google Sites:
            </div>
            <p className="text-xs text-slate-600">
              Para acessar diretamente no GitHub Pages ou incorporar em uma página do Google Sites, utilize os links abaixo:
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <a
                href="https://diegobragah1.github.io/acepvh/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold transition inline-flex items-center gap-1"
              >
                <span>Abrir GitHub Pages</span>
                <span>&nearr;</span>
              </a>
              <button
                type="button"
                onClick={handleCopyUrl}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition"
              >
                Copiar URL do GitHub Pages
              </button>
              <a
                href="https://sites.google.com/view/planodeestudosace-semusaportov?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition inline-flex items-center gap-1"
              >
                <span>Abrir Google Sites Publicado</span>
                <span>&nearr;</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-2 border-t border-slate-200">
          <button
            type="button"
            onClick={() => setSitesModalOpen(false)}
            className="px-4 py-2 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold transition"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

