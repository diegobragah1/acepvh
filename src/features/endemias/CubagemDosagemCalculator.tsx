import React, { useState } from 'react';

export const CubagemDosagemCalculator: React.FC = () => {
  const [tankShape, setTankShape] = useState<'RETANGULAR' | 'CILINDRICO'>('RETANGULAR');
  const [dimComp, setDimComp] = useState<number>(2.0);
  const [dimLarg, setDimLarg] = useState<number>(1.5);
  const [dimAlt, setDimAlt] = useState<number>(1.0);
  const [dimDiam, setDimDiam] = useState<number>(1.2);

  const volumeM3 =
    tankShape === 'RETANGULAR'
      ? Math.max(0, dimComp * dimLarg * dimAlt)
      : Math.max(0, Math.PI * Math.pow(dimDiam / 2, 2) * dimAlt);
  const volumeLitros = Math.round(volumeM3 * 1000);
  const piriproxifenoGramas = Number(((volumeLitros / 1000) * 2).toFixed(2));
  const espinosadePastilhas = Math.max(1, Math.ceil(volumeLitros / 200));
  const btiGramasRef = Number(((volumeLitros / 1000) * 1).toFixed(2));

  return (
    <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h4 className="text-sm font-extrabold text-slate-900">
            📐 Calculadora de Cubagem de Reservatórios e Dosagem de Larvicidas (MS / Aula esp_7)
          </h4>
          <p className="text-xs text-slate-600">
            Calcule o volume em metros cúbicos (m³) e litros (1 m³ = 1.000 L) para tratamento focal.
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {(['RETANGULAR', 'CILINDRICO'] as const).map((shape) => (
            <button
              key={shape}
              type="button"
              onClick={() => setTankShape(shape)}
              className={`px-3 py-1 rounded-lg text-xs font-extrabold cursor-pointer ${
                tankShape === shape
                  ? 'bg-teal-700 text-white'
                  : 'bg-white text-slate-700 border border-slate-300'
              }`}
            >
              {shape === 'RETANGULAR' ? ' Caixa Retangular (C × L × A)' : ' Tambor Cilíndrico (π × r² × h)'}
            </button>
          ))}
        </div>
      </div>

      {tankShape === 'RETANGULAR' ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <label className="flex flex-col gap-1 font-bold text-slate-700">
            <span>Comprimento (m)</span>
            <input
              type="number"
              step="0.1"
              min={0.1}
              value={dimComp}
              onChange={(e) => setDimComp(Math.max(0, Number(e.target.value) || 0))}
              className="px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white font-extrabold"
            />
          </label>
          <label className="flex flex-col gap-1 font-bold text-slate-700">
            <span>Largura (m)</span>
            <input
              type="number"
              step="0.1"
              min={0.1}
              value={dimLarg}
              onChange={(e) => setDimLarg(Math.max(0, Number(e.target.value) || 0))}
              className="px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white font-extrabold"
            />
          </label>
          <label className="flex flex-col gap-1 font-bold text-slate-700">
            <span>Profundidade / Altura (m)</span>
            <input
              type="number"
              step="0.1"
              min={0.1}
              value={dimAlt}
              onChange={(e) => setDimAlt(Math.max(0, Number(e.target.value) || 0))}
              className="px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white font-extrabold"
            />
          </label>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <label className="flex flex-col gap-1 font-bold text-slate-700">
            <span>Diâmetro (m) — Raio = D/2</span>
            <input
              type="number"
              step="0.1"
              min={0.1}
              value={dimDiam}
              onChange={(e) => setDimDiam(Math.max(0, Number(e.target.value) || 0))}
              className="px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white font-extrabold"
            />
          </label>
          <label className="flex flex-col gap-1 font-bold text-slate-700">
            <span>Altura do Nível de Água (m)</span>
            <input
              type="number"
              step="0.1"
              min={0.1}
              value={dimAlt}
              onChange={(e) => setDimAlt(Math.max(0, Number(e.target.value) || 0))}
              className="px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white font-extrabold"
            />
          </label>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
        <div className="p-3 rounded-xl bg-white border border-slate-200">
          <span className="font-bold text-slate-500 block">Volume Calculado</span>
          <span className="text-base font-black text-slate-900 tabular-nums">
            {volumeM3.toFixed(2)} m³ ({volumeLitros.toLocaleString('pt-BR')} L)
          </span>
        </div>
        <div className="p-3 rounded-xl bg-white border border-slate-200">
          <span className="font-bold text-teal-800 block">
            Espinosade (Natular DT 7,48%)
          </span>
          <span className="text-base font-black text-teal-900 tabular-nums">
            {espinosadePastilhas} comp. (1,35 g cada)
          </span>
          <span className="block text-[10px] text-amber-800 font-bold mt-0.5">
            Ref: 1 pastilha / 200 L [VERIFICAR Nota Técnica MS]
          </span>
        </div>
        <div className="p-3 rounded-xl bg-white border border-slate-200">
          <span className="font-bold text-indigo-800 block">Piriproxifeno (0,5% G)</span>
          <span className="text-base font-black text-indigo-900 tabular-nums">
            {piriproxifenoGramas} g
          </span>
          <span className="block text-[10px] text-amber-800 font-bold mt-0.5">
            Ref: 2 g / 1.000 L (0,01 mg i.a./L) [VERIFICAR MS]
          </span>
        </div>
        <div className="p-3 rounded-xl bg-white border border-slate-200">
          <span className="font-bold text-amber-800 block">Bti (WDG / Granulado)</span>
          <span className="text-base font-black text-amber-900 tabular-nums">
            ~{btiGramasRef} g
          </span>
          <span className="block text-[10px] text-amber-800 font-bold mt-0.5">
            [VERIFICAR rótulo/lote MS: 0,2 g a 2 g / 1.000 L]
          </span>
        </div>
      </div>
    </div>
  );
};
