import React, { useState } from 'react';

export const LiraaCalculatorPanel: React.FC = () => {
  const [imoveisInspecionados, setImoveisInspecionados] = useState<number>(200);
  const [imoveisPositivos, setImoveisPositivos] = useState<number>(6);
  const [depositosPositivos, setDepositosPositivos] = useState<number>(9);
  const [depositosComAgua, setDepositosComAgua] = useState<number>(300);

  const safeImoveis = Math.max(1, imoveisInspecionados);
  const safeDepositosAgua = Math.max(1, depositosComAgua);
  const iipVal = Number(((imoveisPositivos / safeImoveis) * 100).toFixed(2));
  const ibVal = Number(((depositosPositivos / safeImoveis) * 100).toFixed(2));
  const irVal = Number(((depositosPositivos / safeDepositosAgua) * 100).toFixed(2));

  const iipRiskLabel =
    iipVal < 1.0
      ? 'Satisfatório (< 1,0%)'
      : iipVal < 4.0
        ? 'Alerta (1,0% a 3,9%)'
        : 'Risco de Surto (≥ 4,0%)';

  const iipRiskClass =
    iipVal < 1.0
      ? 'bg-emerald-100 text-emerald-900 border-emerald-300'
      : iipVal < 4.0
        ? 'bg-amber-100 text-amber-900 border-amber-300'
        : 'bg-rose-100 text-rose-900 border-rose-300';

  return (
    <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h4 className="text-sm font-extrabold text-slate-900">
            🧮 Calculadora Entomológica LIRAa / LIA (IIP, Índice de Breteau — IB e Índice de Recipientes — IR)
          </h4>
          <p className="text-xs text-slate-600">
            Simule os indicadores entomológicos oficiais das Diretrizes Nacionais para a Prevenção e Controle de Epidemias de Dengue (MS/SVS).
          </p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-extrabold border ${iipRiskClass}`}>
          Classificação MS: {iipRiskLabel}
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
        <label className="flex flex-col gap-1 font-bold text-slate-700">
          <span>Imóveis Inspecionados</span>
          <input
            type="number"
            min={1}
            value={imoveisInspecionados}
            onChange={(e) => setImoveisInspecionados(Math.max(1, Number(e.target.value) || 1))}
            className="px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white text-slate-900 font-extrabold"
          />
        </label>
        <label className="flex flex-col gap-1 font-bold text-slate-700">
          <span>Imóveis Positivos</span>
          <input
            type="number"
            min={0}
            value={imoveisPositivos}
            onChange={(e) => setImoveisPositivos(Math.max(0, Number(e.target.value) || 0))}
            className="px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white text-slate-900 font-extrabold"
          />
        </label>
        <label className="flex flex-col gap-1 font-bold text-slate-700">
          <span>Recipientes Positivos</span>
          <input
            type="number"
            min={0}
            value={depositosPositivos}
            onChange={(e) => setDepositosPositivos(Math.max(0, Number(e.target.value) || 0))}
            className="px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white text-slate-900 font-extrabold"
          />
        </label>
        <label className="flex flex-col gap-1 font-bold text-slate-700">
          <span>Recipientes c/ Água Insp.</span>
          <input
            type="number"
            min={1}
            value={depositosComAgua}
            onChange={(e) => setDepositosComAgua(Math.max(1, Number(e.target.value) || 1))}
            className="px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white text-slate-900 font-extrabold"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
        <div className="p-3 rounded-xl bg-white border border-slate-200">
          <span className="font-bold text-slate-500 block">
            IIP (Índice de Infestação Predial)
          </span>
          <span className="text-lg font-black text-teal-800 tabular-nums">{iipVal}%</span>
          <p className="text-[11px] text-slate-600 mt-0.5">
            Fórmula: (Imóveis Positivos / Imóveis Inspecionados) &times; 100
          </p>
        </div>
        <div className="p-3 rounded-xl bg-white border border-slate-200">
          <span className="font-bold text-slate-500 block">IB (Índice de Breteau)</span>
          <span className="text-lg font-black text-indigo-800 tabular-nums">{ibVal}</span>
          <p className="text-[11px] text-slate-600 mt-0.5">
            Fórmula: (Recipientes Positivos / Imóveis Inspecionados) &times; 100
          </p>
        </div>
        <div className="p-3 rounded-xl bg-white border border-slate-200">
          <span className="font-bold text-slate-500 block">
            IR (Índice de Tipo de Recipiente)
          </span>
          <span className="text-lg font-black text-amber-800 tabular-nums">{irVal}%</span>
          <p className="text-[11px] text-slate-600 mt-0.5">
            Fórmula: (Recipientes Positivos / Recipientes Pesquisados) &times; 100
          </p>
        </div>
      </div>
    </div>
  );
};
