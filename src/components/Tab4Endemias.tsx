import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import {
  LIRAA_DEPOSIT_GROUPS,
  SYNANTHROPIC_RODENTS,
  CHEMICAL_PROTOCOLS,
  ACE_GLOSSARY_ITEMS,
} from '../data/endemiasReference';

type SubSection = 'FICHAS' | 'LIRAA' | 'ROEDORES' | 'QUIMICO' | 'GLOSSARIO';

export const Tab4Endemias: React.FC = () => {
  const { appData, globalSearchTarget } = useApp();
  const [subSection, setSubSection] = useState<SubSection>('FICHAS');
  const [searchDisease, setSearchDisease] = useState('');
  const [selectedDisease, setSelectedDisease] = useState<string>('ALL');
  const [glossarySearch, setGlossarySearch] = useState('');

  // LIRAa Calculator state (IIP, IB, IR)
  const [imoveisInspecionados, setImoveisInspecionados] = useState<number>(200);
  const [imoveisPositivos, setImoveisPositivos] = useState<number>(6);
  const [depositosPositivos, setDepositosPositivos] = useState<number>(9);
  const [depositosComAgua, setDepositosComAgua] = useState<number>(300);

  // Reservoir Cubage & Larvicide Dosage Calculator state
  const [tankShape, setTankShape] = useState<'RETANGULAR' | 'CILINDRICO'>('RETANGULAR');
  const [dimComp, setDimComp] = useState<number>(2.0);
  const [dimLarg, setDimLarg] = useState<number>(1.5);
  const [dimAlt, setDimAlt] = useState<number>(1.0);
  const [dimDiam, setDimDiam] = useState<number>(1.2);

  useEffect(() => {
    if (globalSearchTarget && globalSearchTarget.type === 'ficha') {
      setSubSection('FICHAS');
      setSelectedDisease(globalSearchTarget.diseaseName || 'ALL');
      setSearchDisease('');
    }
  }, [globalSearchTarget]);

  const endemics = appData?.endemics || [];

  const filteredEndemics = endemics.filter((e) => {
    if (selectedDisease !== 'ALL' && e.doenca !== selectedDisease) return false;
    if (searchDisease.trim()) {
      const q = searchDisease.toLowerCase();
      return (
        e.doenca.toLowerCase().includes(q) ||
        e.agente.toLowerCase().includes(q) ||
        e.vetor.toLowerCase().includes(q) ||
        e.clinica.toLowerCase().includes(q) ||
        e.controle.toLowerCase().includes(q)
      );
    }
    return true;
  });

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

  const volumeM3 =
    tankShape === 'RETANGULAR'
      ? Math.max(0, dimComp * dimLarg * dimAlt)
      : Math.max(0, Math.PI * Math.pow(dimDiam / 2, 2) * dimAlt);
  const volumeLitros = Math.round(volumeM3 * 1000);
  const piriproxifenoGramas = Number(((volumeLitros / 1000) * 2).toFixed(2));
  const espinosadePastilhas = Math.max(1, Math.ceil(volumeLitros / 200));
  const btiGramasRef = Number(((volumeLitros / 1000) * 1).toFixed(2));

  return (
    <div className="space-y-6">
      {/* Header & Sub-Tabs */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
              🦟 Central Operacional de Endemias, Vetores e Zoonoses (Edital SEMUSA 2026)
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Fichas sinópticas das 14 doenças do Anexo IV + Tabelas de Campo LIRAa/LIA, Roedores Sinantrópicos e Controle Químico.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {(
              [
                { id: 'FICHAS', label: '📋 14 Fichas de Doenças' },
                { id: 'LIRAA', label: '💧 Classificação LIRAa (A1 a E)' },
                { id: 'ROEDORES', label: '🐀 3 Espécies de Roedores' },
                { id: 'QUIMICO', label: '🧪 Controle Químico, UBV e EPIs' },
                { id: 'GLOSSARIO', label: '📖 Glossário Técnico de Prova' },
              ] as const
            ).map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setSubSection(s.id)}
                className={`px-3 py-2 rounded-xl text-xs font-extrabold transition cursor-pointer ${
                  subSection === s.id
                    ? 'bg-teal-700 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {subSection === 'FICHAS' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-100">
            <input
              type="text"
              value={searchDisease}
              onChange={(e) => setSearchDisease(e.target.value)}
              placeholder="Buscar por doença, agente etiológico (ex: Trypanosoma), vetor (ex: Lutzomyia)..."
              className="px-3 py-2 text-xs rounded-xl border border-slate-300 bg-slate-50"
            />
            <select
              value={selectedDisease}
              onChange={(e) => setSelectedDisease(e.target.value)}
              className="px-3 py-2 text-xs rounded-xl border border-slate-300 bg-slate-50 font-semibold text-slate-800"
            >
              <option value="ALL">Todas as 14 Doenças Exigidas no Edital</option>
              {endemics.map((e, i) => (
                <option key={i} value={e.doenca}>
                  {e.doenca}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* SECTION 1: 14 FICHAS */}
      {subSection === 'FICHAS' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredEndemics.map((e, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col"
            >
              <div className="bg-teal-900 text-white px-5 py-3 flex items-center justify-between">
                <h3 className="font-extrabold text-base">{e.doenca}</h3>
                <span className="px-2 py-0.5 rounded bg-teal-700 text-teal-100 text-[11px] font-bold">
                  Ficha #{idx + 1}
                </span>
              </div>

              <div className="p-4 space-y-2.5 text-xs flex-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="block text-[10px] font-extrabold uppercase text-teal-800">
                      🦠 Agente Etiológico
                    </span>
                    <p className="font-semibold text-slate-900 mt-0.5">{e.agente}</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="block text-[10px] font-extrabold uppercase text-indigo-800">
                      🦟 Vetor / Transmissor
                    </span>
                    <p className="font-semibold text-slate-900 mt-0.5">{e.vetor}</p>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="block text-[10px] font-extrabold uppercase text-slate-600">
                    🐾 Reservatórios e Hospedeiros
                  </span>
                  <p className="text-slate-800 mt-0.5">{e.hospedeiros}</p>
                </div>

                <div className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-200">
                  <span className="block text-[10px] font-extrabold uppercase text-amber-900">
                    🔄 Modo de Transmissão
                  </span>
                  <p className="text-slate-800 mt-0.5">{e.transmissao}</p>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="block text-[10px] font-extrabold uppercase text-rose-800">
                    🩺 Manifestações Clínicas & Sintomas
                  </span>
                  <p className="text-slate-800 mt-0.5">{e.clinica}</p>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="block text-[10px] font-extrabold uppercase text-blue-800">
                    🔬 Diagnóstico Laboratorial / Clínico
                  </span>
                  <p className="text-slate-800 mt-0.5">{e.diagnostico}</p>
                </div>

                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                  <span className="block text-[10px] font-extrabold uppercase text-emerald-900">
                    🛡️ Medidas de Prevenção e Controle (Papel do ACE)
                  </span>
                  <p className="text-emerald-950 font-semibold mt-0.5">{e.controle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* SECTION 2: LIRAA */}
      {subSection === 'LIRAA' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-5">
          <div>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
              💧 Classificação Oficial dos 7 Grupos de Depósitos do LIRAa / LIA (A1, A2, B, C, D1, D2 e E)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              O Levantamento Rápido de Índices para <em>Aedes aegypti</em> (LIRAa) classifica os criadouros em 7 grupos padronizados pelo Ministério da Saúde:
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-900 text-white uppercase text-[11px]">
                <tr>
                  <th className="p-3">Grupo</th>
                  <th className="p-3">Descrição Oficial MS</th>
                  <th className="p-3">Exemplos de Recipientes em Campo</th>
                  <th className="p-3">Conduta Prioritária do ACE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {LIRAA_DEPOSIT_GROUPS.map((row) => (
                  <tr key={row.grp} className="hover:bg-slate-50">
                    <td className="p-3 font-black text-teal-800 text-sm">{row.grp}</td>
                    <td className="p-3 font-bold text-slate-900">{row.desc}</td>
                    <td className="p-3 text-slate-700">{row.items}</td>
                    <td className="p-3 font-semibold text-emerald-900 bg-emerald-50/50">
                      {row.conduta}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
              <span className="text-xs font-black uppercase text-emerald-900">
                IIP Satisfatório (&lt; 1,0%)
              </span>
              <p className="text-xs text-emerald-950 mt-1">
                Índice de Infestação Predial inferior a 1%: situação de baixo risco, manutenção da rotina bimestral.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-300">
              <span className="text-xs font-black uppercase text-amber-900">
                IIP em Alerta (1,0% a 3,9%)
              </span>
              <p className="text-xs text-amber-950 mt-1">
                Estado de Alerta epidemiológico: intensificação de visitas, mutirões de limpeza e controle em Pontos Estratégicos.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-rose-50 border border-rose-300">
              <span className="text-xs font-black uppercase text-rose-900">
                IIP Risco de Surto (&ge; 4,0%)
              </span>
              <p className="text-xs text-rose-950 mt-1">
                Alto risco de epidemia de arboviroses: mobilização intersetorial imediata e bloqueio de transmissão.
              </p>
            </div>
          </div>

          {/* Interactive LIRAa Entomological Indices Calculator (IIP, IB, IR) */}
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
                <span className="text-lg font-black text-teal-800 tabular-nums">
                  {iipVal}%
                </span>
                <p className="text-[11px] text-slate-600 mt-0.5">
                  Fórmula: (Imóveis Positivos / Imóveis Inspecionados) &times; 100
                </p>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200">
                <span className="font-bold text-slate-500 block">
                  IB (Índice de Breteau)
                </span>
                <span className="text-lg font-black text-indigo-800 tabular-nums">
                  {ibVal}
                </span>
                <p className="text-[11px] text-slate-600 mt-0.5">
                  Fórmula: (Recipientes Positivos / Imóveis Inspecionados) &times; 100
                </p>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200">
                <span className="font-bold text-slate-500 block">
                  IR (Índice de Tipo de Recipiente)
                </span>
                <span className="text-lg font-black text-amber-800 tabular-nums">
                  {irVal}%
                </span>
                <p className="text-[11px] text-slate-600 mt-0.5">
                  Fórmula: (Recipientes Positivos / Recipientes Pesquisados) &times; 100
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 3: ROEDORES */}
      {subSection === 'ROEDORES' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-5">
          <div>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
              🐀 Quadro Comparativo das 3 Espécies de Roedores Sinantrópicos Comensais
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Diferenciação morfológica e comportamental essencial para o controle da Leptospirose e manejo integrado (antirratização + desratização):
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-900 text-white uppercase text-[11px]">
                <tr>
                  <th className="p-3">Espécie Científica</th>
                  <th className="p-3">Nome Popular</th>
                  <th className="p-3">Hábito & Abrigo Preferencial</th>
                  <th className="p-3">Morfologia (Cauda, Orelhas, Corpo)</th>
                  <th className="p-3">Raio de Ação</th>
                  <th className="p-3">Ninhada</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {SYNANTHROPIC_RODENTS.map((r) => (
                  <tr key={r.esp} className="hover:bg-slate-50">
                    <td className="p-3 font-extrabold italic text-teal-900">{r.esp}</td>
                    <td className="p-3 font-bold text-slate-900">{r.popular}</td>
                    <td className="p-3 text-slate-700">{r.habito}</td>
                    <td className="p-3 text-slate-800 font-medium">{r.morf}</td>
                    <td className="p-3 text-slate-700">{r.raio}</td>
                    <td className="p-3 text-slate-700">{r.ninhada}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-xl bg-amber-50 border border-amber-300 text-xs text-amber-950 space-y-1">
            <p className="font-extrabold">
              ⚠️ Pegadinha Clássica de Prova (Raticidas Anticoagulantes & Vitamina K1):
            </p>
            <p>
              Os raticidas autorizados pelo Ministério da Saúde são os{' '}
              <strong>anticoagulantes derivados cumarínicos (1ª geração: Warfarina; 2ª geração/dose única: Brodifacoum, Bromadiolone, Flocoumafen)</strong>. Eles atuam inibindo os fatores de coagulação dependentes de vitamina K, causando morte indolor de 3 a 7 dias após a ingestão (evitando a <em>neofobia</em> e o <em>efeito-isca</em> dos demais ratos da colônia). O antídoto específico em caso de intoxicação acidental humana ou em animais domésticos é a{' '}
              <strong>Vitamina K1 (Fitomenadiona) injetável</strong>.
            </p>
          </div>
        </div>
      )}

      {/* SECTION 4: CONTROLE QUIMICO */}
      {subSection === 'QUIMICO' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-5">
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
            🧪 Modalidades de Controle Químico, Biológico e Equipamentos de Proteção Individual (EPIs)
          </h3>

          {/* Mandatory Official Verification Warning Banner */}
          <div
            role="alert"
            className="p-4 rounded-xl bg-amber-50 border-2 border-amber-400 text-xs text-amber-950 space-y-1.5"
          >
            <div className="flex items-center gap-2 font-black text-amber-900 uppercase">
              <span>⚠️ Aviso Técnico Oficial — Conferência de Dosagens de Larvicidas [VERIFICAR]</span>
            </div>
            <p className="leading-relaxed">
              As dosagens operacionais de <strong>Espinosade (Spinosad DT 7,48% — 1 comprimido de 1,35 g / 200 L)</strong>,{' '}
              <strong>Piriproxifeno 0,5% G (Sumilarv — 0,01 mg i.a./L = 2 g / 1.000 L)</strong> e{' '}
              <strong>Bti (<em>Bacillus thuringiensis israelensis</em> WDG/G — [VERIFICAR formulação/potência ITU/mg do lote: 0,2 g a 2 g / 1.000 L])</strong>{' '}
              variam conforme a apresentação comercial e a Nota Técnica vigente da Coordenação-Geral de Vigilância de Arboviroses (<strong>CGARB/DEDT/SVSA/MS</strong>) e da Divisão de Controle de Vetores da <strong>SEMUSA Porto Velho</strong>. Sempre confirme a concentração do lote oficial e se a banca IBGP cobra o valor de referência das Diretrizes Nacionais do MS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {CHEMICAL_PROTOCOLS.map((card) => (
              <div
                key={card.title}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-extrabold text-teal-900 text-sm">{card.title}</span>
                  <span className="px-2 py-0.5 rounded bg-teal-100 text-teal-800 text-[10px] font-bold">
                    {card.badge}
                  </span>
                </div>
                <p className="text-slate-700">{card.desc}</p>
                <ul className="list-disc pl-4 space-y-1 text-slate-700">
                  {card.ficha.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Interactive Reservoir Cubage & Larvicide Dosage Calculator */}
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
              <div className="flex gap-1.5">
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
                <span className="font-bold text-indigo-800 block">
                  Piriproxifeno (0,5% G)
                </span>
                <span className="text-base font-black text-indigo-900 tabular-nums">
                  {piriproxifenoGramas} g
                </span>
                <span className="block text-[10px] text-amber-800 font-bold mt-0.5">
                  Ref: 2 g / 1.000 L (0,01 mg i.a./L) [VERIFICAR MS]
                </span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200">
                <span className="font-bold text-amber-800 block">
                  Bti (WDG / Granulado)
                </span>
                <span className="text-base font-black text-amber-900 tabular-nums">
                  ~{btiGramasRef} g
                </span>
                <span className="block text-[10px] text-amber-800 font-bold mt-0.5">
                  [VERIFICAR rótulo/lote MS: 0,2 g a 2 g / 1.000 L]
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 5: GLOSSARIO TECNICO DE PROVA */}
      {subSection === 'GLOSSARIO' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                📖 Glossário Técnico de Epidemiologia e Vigilância em Saúde (Conceitos de Prova IBGP)
              </h3>
              <p className="text-xs text-slate-600">
                Domine a diferença exata entre os termos que a banca examinadora utiliza para criar pegadinhas nas alternativas.
              </p>
            </div>
            <input
              type="text"
              value={glossarySearch}
              onChange={(e) => setGlossarySearch(e.target.value)}
              placeholder="Filtrar termo técnico (ex: hospedeiro, antropofilia, enzootia)..."
              className="px-3 py-2 text-xs rounded-xl border border-slate-300 bg-slate-50 min-w-[260px]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            {ACE_GLOSSARY_ITEMS.filter(
              (item) =>
                !glossarySearch.trim() ||
                item.term.toLowerCase().includes(glossarySearch.toLowerCase()) ||
                item.def.toLowerCase().includes(glossarySearch.toLowerCase())
            ).map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-extrabold text-slate-900 text-xs sm:text-sm">
                    {item.term}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-teal-100 text-teal-800 text-[10px] font-bold uppercase">
                    {item.cat}
                  </span>
                </div>
                <p className="text-slate-700 leading-relaxed">{item.def}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
