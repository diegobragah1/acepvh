import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const Tab4Endemias: React.FC = () => {
  const { appData } = useApp();
  const endemics = appData?.endemics || [];

  // LIRAa state
  const [imoveisPesq, setImoveisPesq] = useState<number>(400);
  const [imoveisPos, setImoveisPos] = useState<number>(18);
  const [recipientesPos, setRecipientesPos] = useState<number>(24);

  const pesq = Math.max(1, imoveisPesq || 1);
  const pos = Math.max(0, imoveisPos || 0);
  const rec = Math.max(0, recipientesPos || 0);

  const iip = (pos / pesq) * 100;
  const ib = (rec / pesq) * 100;

  let riskClass = {
    box: 'bg-rose-50 border-rose-300 text-rose-900',
    title: 'text-rose-900',
    badge: 'text-rose-700',
    text: 'Classificação MS: RISCO DE SURTO / EPIDEMIA (>= 4,0%)'
  };

  if (iip < 1.0) {
    riskClass = {
      box: 'bg-emerald-50 border-emerald-300 text-emerald-900',
      title: 'text-emerald-900',
      badge: 'text-emerald-700',
      text: 'Classificação MS: SATISFATÓRIO (< 1,0%)'
    };
  } else if (iip < 4.0) {
    riskClass = {
      box: 'bg-amber-50 border-amber-300 text-amber-900',
      title: 'text-amber-900',
      badge: 'text-amber-800',
      text: 'Classificação MS: SITUAÇÃO DE ALERTA (1,0% a 3,9%)'
    };
  }

  // Cubagem state
  const [formato, setFormato] = useState<'retangular' | 'cilindrico'>('retangular');
  const [comp, setComp] = useState<number>(2.0);
  const [larg, setLarg] = useState<number>(1.5);
  const [prof, setProf] = useState<number>(1.0);
  const [diam, setDiam] = useState<number>(1.2);
  const [alt, setAlt] = useState<number>(1.0);
  const [larvicida, setLarvicida] = useState<'espinosade' | 'piriproxifeno' | 'bti'>('espinosade');

  let volM3 = 0;
  if (formato === 'retangular') {
    volM3 = Math.max(0.01, comp) * Math.max(0.01, larg) * Math.max(0.01, prof);
  } else {
    const r = Math.max(0.01, diam) / 2;
    volM3 = Math.PI * r * r * Math.max(0.01, alt);
  }

  const litros = Math.round(volM3 * 1000);

  let dosagemText = '';
  let epiText = '';

  if (larvicida === 'espinosade') {
    const pastilhas = Math.ceil(litros / 200);
    dosagemText = `Dosagem: ${pastilhas} pastilha(s) de Espinosade (1 pastilha / 200 L)`;
    epiText = 'EPI: Luvas nitrílicas + respirador c/ filtro químico (NR-6 / Lei 11.350/06)';
  } else if (larvicida === 'piriproxifeno') {
    const gramas = ((litros / 1000) * 2).toFixed(1).replace('.', ',');
    dosagemText = `Dosagem: ${gramas} g de Piriproxifeno 0,5% (2g / 1.000 L)`;
    epiText = 'EPI: Luvas nitrílicas, óculos ampla visão e avental impermeável';
  } else {
    const gramas = ((litros / 1000) * 1).toFixed(1).replace('.', ',');
    dosagemText = `Dosagem: ${gramas} g de Bti Biológico (1g / 1.000 L)`;
    epiText = 'EPI: Luvas nitrílicas + proteção respiratória contra aerossóis';
  }

  return (
    <section className="space-y-6">
      {/* Calculadora Interativa de IIP e IB (LIRAa) */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-teal-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
          <div>
            <span className="text-xs font-bold uppercase px-2.5 py-0.5 rounded bg-teal-100 text-teal-800">
              Instrumento Técnico de Controle Vetorial (Diretrizes PNCD/MS)
            </span>
            <h2 className="text-lg font-extrabold text-slate-900 mt-1">
              Calculadora de Índices Entomológicos do LIRAa (IIP e Índice de Breteau)
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Total de Imóveis Pesquisados:
            </label>
            <input
              type="number"
              value={imoveisPesq}
              onChange={(e) => setImoveisPesq(Number(e.target.value))}
              min={1}
              className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm font-bold"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Imóveis Positivos (c/ larvas/pupas):
            </label>
            <input
              type="number"
              value={imoveisPos}
              onChange={(e) => setImoveisPos(Number(e.target.value))}
              min={0}
              className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm font-bold"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Recipientes/Depósitos Positivos:
            </label>
            <input
              type="number"
              value={recipientesPos}
              onChange={(e) => setRecipientesPos(Number(e.target.value))}
              min={0}
              className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm font-bold"
            />
          </div>
          <div className={`p-3 rounded-xl border text-xs ${riskClass.box}`}>
            <div className={`font-extrabold text-sm ${riskClass.title}`}>
              IIP: {iip.toFixed(2)}% | IB: {ib.toFixed(2)}%
            </div>
            <div className={`font-bold mt-0.5 ${riskClass.badge}`}>
              {riskClass.text}
            </div>
          </div>
        </div>
      </div>

      {/* Calculadora Operacional de Campo do ACE — Cubagem e Dosagem de Larvicidas */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-teal-200">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-100 px-2.5 py-0.5 rounded-full">
              Operacionalização de Campo (Aula 32 &bull; Diretrizes MS/SVSA)
            </span>
            <h2 className="text-lg font-extrabold text-slate-900 mt-1">
              Calculadora de Cubagem de Reservatórios &amp; Dosagem de Larvicidas
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Formato do Reservatório:</label>
            <select
              value={formato}
              onChange={(e) => setFormato(e.target.value as any)}
              className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm font-bold bg-white"
            >
              <option value="retangular">Retangular / Cúbico (C &times; L &times; P)</option>
              <option value="cilindrico">Cilíndrico (Diâmetro &times; Altura)</option>
            </select>
          </div>

          {formato === 'retangular' ? (
            <div className="grid grid-cols-3 gap-1.5">
              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">Comp. (m):</label>
                <input
                  type="number"
                  value={comp}
                  step="0.1"
                  min="0.1"
                  onChange={(e) => setComp(Number(e.target.value))}
                  className="w-full px-2 py-2 rounded-lg border border-slate-300 text-xs font-bold"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">Larg. (m):</label>
                <input
                  type="number"
                  value={larg}
                  step="0.1"
                  min="0.1"
                  onChange={(e) => setLarg(Number(e.target.value))}
                  className="w-full px-2 py-2 rounded-lg border border-slate-300 text-xs font-bold"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">Prof. (m):</label>
                <input
                  type="number"
                  value={prof}
                  step="0.1"
                  min="0.1"
                  onChange={(e) => setProf(Number(e.target.value))}
                  className="w-full px-2 py-2 rounded-lg border border-slate-300 text-xs font-bold"
                />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-1.5">
              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">Diâmetro (m):</label>
                <input
                  type="number"
                  value={diam}
                  step="0.1"
                  min="0.1"
                  onChange={(e) => setDiam(Number(e.target.value))}
                  className="w-full px-2 py-2 rounded-lg border border-slate-300 text-xs font-bold"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">Altura (m):</label>
                <input
                  type="number"
                  value={alt}
                  step="0.1"
                  min="0.1"
                  onChange={(e) => setAlt(Number(e.target.value))}
                  className="w-full px-2 py-2 rounded-lg border border-slate-300 text-xs font-bold"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Larvicida Preconizado:</label>
            <select
              value={larvicida}
              onChange={(e) => setLarvicida(e.target.value as any)}
              className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm font-bold bg-white"
            >
              <option value="espinosade">Espinosade (1 pastilha / 200 L)</option>
              <option value="piriproxifeno">Piriproxifeno 0,5% (2g / 1.000 L)</option>
              <option value="bti">Bti Biológico (1g / 1.000 L)</option>
            </select>
          </div>

          <div className="p-3 rounded-xl border bg-teal-50 border-teal-300 text-xs space-y-1">
            <div className="font-extrabold text-sm text-teal-950">
              Volume: {volM3.toFixed(2).replace('.', ',')} m³ ({litros.toLocaleString('pt-BR')} L)
            </div>
            <div className="font-bold text-teal-800">{dosagemText}</div>
            <div className="text-[11px] text-teal-700 font-medium">{epiText}</div>
          </div>
        </div>
      </div>

      {/* Quadro Operacional de Depósitos do LIRAa e Roedores */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
          <h3 className="text-base font-extrabold text-slate-900 mb-2">
            Os 7 Grupos de Depósitos do LIRAa (PNCD / Ministério da Saúde)
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-xs border border-slate-200">
              <thead className="bg-slate-800 text-white">
                <tr>
                  <th className="p-2 text-center">Grupo</th>
                  <th className="p-2 text-left">Categoria Principal</th>
                  <th className="p-2 text-left">Exemplos Clássicos de Campo e Prova</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="p-2 font-extrabold text-center bg-teal-50">A1</td>
                  <td className="p-2 font-semibold">Armazenamento de água ELEVADO</td>
                  <td className="p-2">Caixa d'água elevada ligada à rede pública ou captação.</td>
                </tr>
                <tr>
                  <td className="p-2 font-extrabold text-center bg-teal-50">A2</td>
                  <td className="p-2 font-semibold">Armazenamento de água AO NÍVEL DO SOLO</td>
                  <td className="p-2">Tambores, tonéis, barris, cisternas, poços, cacimbas.</td>
                </tr>
                <tr>
                  <td className="p-2 font-extrabold text-center bg-indigo-50">B</td>
                  <td className="p-2 font-semibold">Depósitos MÓVEIS</td>
                  <td className="p-2">Vasos/frascos com água, pratinhos de plantas, bebedouros de animais, degelo de geladeira.</td>
                </tr>
                <tr>
                  <td className="p-2 font-extrabold text-center bg-amber-50">C</td>
                  <td className="p-2 font-semibold">Depósitos FIXOS</td>
                  <td className="p-2">Calhas, lajes em desnível, ralos, sanitários em desuso, piscinas não tratadas, tanques em obras.</td>
                </tr>
                <tr>
                  <td className="p-2 font-extrabold text-center bg-rose-50">D1</td>
                  <td className="p-2 font-semibold">Passíveis de remoção — RODANTES</td>
                  <td className="p-2">Pneus, câmaras de ar e outros materiais rodantes.</td>
                </tr>
                <tr>
                  <td className="p-2 font-extrabold text-center bg-rose-50">D2</td>
                  <td className="p-2 font-semibold">Passíveis de remoção — LIXO / SUCATA</td>
                  <td className="p-2">Garrafas PET, latas, plásticos, carcaças em ferros-velhos e entulhos de construção.</td>
                </tr>
                <tr>
                  <td className="p-2 font-extrabold text-center bg-emerald-50">E</td>
                  <td className="p-2 font-semibold">Depósitos NATURAIS</td>
                  <td className="p-2">Axilas de folhas (bromélias), buracos em árvores e rochas, cascas de caramujos/ovos.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
          <h3 className="text-base font-extrabold text-slate-900 mb-2">
            Tipos de Imóveis (R, C, TB, PE, O) &amp; Diferenciação dos 3 Roedores Sinantrópicos
          </h3>
          <div className="space-y-3 text-xs">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
              <p className="font-bold text-slate-900 mb-1">Classificação de Imóveis e Periodicidade de Visita do ACE:</p>
              <p>&bull; <strong>R (Residencial), C (Comercial), TB (Terreno Baldio) e O (Outros):</strong> Visita domiciliar em <strong>ciclos bimestrais (a cada 2 meses = 6 ciclos/ano)</strong>.</p>
              <p>&bull; <strong>PE (Ponto Estratégico — cemitérios, borracharias, ferros-velhos, sucatas, garagens):</strong> Visita e tratamento <strong>QUINZENAL (a cada 15 dias)</strong>!</p>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-xs border border-slate-200">
                <thead className="bg-slate-800 text-white">
                  <tr>
                    <th className="p-2 text-left">Espécie de Roedor</th>
                    <th className="p-2 text-left">Morfologia Chave</th>
                    <th className="p-2 text-left">Hábito / Abrigo e Raio</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-2 font-bold"><em>Rattus norvegicus</em> (Ratazana / esgoto)</td>
                    <td className="p-2">Grande, focinho rombudo, orelhas pequenas, <strong>cauda MENOR que o corpo</strong>.</td>
                    <td className="p-2">Escavador/nadador; <strong>tocas no solo e esgotos</strong> (Raio: 30–50m).</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-bold"><em>Rattus rattus</em> (Rato de telhado / preto)</td>
                    <td className="p-2">Médio/esguio, orelhas grandes, <strong>cauda MAIOR que o corpo</strong>.</td>
                    <td className="p-2">Escalador; <strong>forros, telhados e árvores</strong> (Raio: 30–50m).</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-bold"><em>Mus musculus</em> (Camundongo)</td>
                    <td className="p-2">Pequeno (15–30g), orelhas grandes, curioso (sem neofobia).</td>
                    <td className="p-2"><strong>Intradomiciliar</strong> (armários, gavetas, fogão). Raio curto: <strong>3–5m</strong>.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Fichas Técnicas Individuais das 14 Doenças Exigidas no Anexo IV */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
        <span className="text-xs font-bold uppercase px-2.5 py-0.5 rounded bg-teal-100 text-teal-800">
          Anexo IV — Conhecimentos Específicos ACE (14 Fichas Individuais Completas)
        </span>
        <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mt-1 mb-3">
          Fichas Individuais das 14 Doenças/Agravos do Edital (Agente, Vetor, Reservatório/Hospedeiro, Transmissão, Incubação, Sintomas, Diagnóstico, Notificação e Conduta do ACE)
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs border border-slate-200">
            <thead className="bg-slate-900 text-white">
              <tr>
                <th className="p-2 text-left">Doença / Agravo (Anexo IV)</th>
                <th className="p-2 text-left">Agente Etiológico</th>
                <th className="p-2 text-left">Vetor</th>
                <th className="p-2 text-left">Reservatório &amp; Hospedeiros</th>
                <th className="p-2 text-left">Transmissão, Incubação &amp; Clínica</th>
                <th className="p-2 text-left">Diagnóstico &amp; Notificação</th>
                <th className="p-2 text-left">Prevenção, Controle &amp; Conduta do ACE</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {endemics.map((e, idx) => (
                <tr key={idx} className="bg-white hover:bg-slate-50 align-top">
                  <td className="p-2.5 font-extrabold text-teal-900">{e.doenca}</td>
                  <td className="p-2.5 font-medium">{e.agente}</td>
                  <td className="p-2.5">{e.vetor}</td>
                  <td className="p-2.5 font-semibold text-indigo-950">{e.hospedeiros}</td>
                  <td className="p-2.5">
                    <strong>Transmissão/Incubação:</strong> {e.transmissao}
                    <br /><br />
                    <strong>Sintomas:</strong> {e.clinica}
                  </td>
                  <td className="p-2.5">{e.diagnostico}</td>
                  <td className="p-2.5">{e.controle}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
