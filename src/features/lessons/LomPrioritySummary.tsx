import React from 'react';

export const LomPrioritySummary: React.FC = () => {
  return (
    <div className="mb-4 p-4 rounded-xl bg-amber-50/80 border-2 border-amber-300 text-xs text-slate-800 space-y-2.5">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-200 pb-1.5">
        <span className="font-black text-amber-950 uppercase tracking-wide text-xs sm:text-sm">
          🎯 Resumo Prioritário de Prova (Banca IBGP) — Artigos de Maior Cobrança na LOM Porto Velho
        </span>
        <span className="px-2 py-0.5 rounded bg-amber-200 text-amber-950 font-extrabold text-[10px]">
          Guia de Revisão Rápida + Texto Integral Abaixo (249 Artigos)
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 leading-relaxed">
        <div className="p-2.5 rounded-lg bg-white border border-amber-200">
          <strong className="lom-art-tag block">Arts. 1º a 6º e 42 a 44</strong>
          Símbolos oficiais: Bandeira, Hino e Brasão (Art. 3º). Patrimônio natural exclusivo: boto do Rio Madeira (Art. 5º, VII). Criação, organização e supressão de Distritos por Lei Municipal (Art. 2º e Arts. 42 a 44 — 1/5 dos requisitos e 50 moradias na Vila).
        </div>
        <div className="p-2.5 rounded-lg bg-white border border-amber-200">
          <strong className="lom-art-tag block">Arts. 7º, 7º-A e 8º</strong>
          <strong>Art. 7º (Privativa):</strong> legislar sobre interesse local, tributos municipais (IPTU, ITBI, ISS) e transporte coletivo (mínimo 3 empresas). <strong>Art. 7º-A:</strong> limpeza pública/varrição indelegável. <strong>Art. 8º (Comum c/ União e RO):</strong> saúde, assistência pública, meio ambiente e saneamento.
        </div>
        <div className="p-2.5 rounded-lg bg-white border border-amber-200">
          <strong className="lom-art-tag block">Arts. 9º a 41</strong>
          Princípios administrativos (Art. 9º), reserva mínima de 10% para PcD na LOM (Art. 11, parágrafo único), vedação de nome de pessoas vivas ou falecidas há menos de 90 dias em logradouros (Art. 24) e redução de até 50% da jornada para servidor responsável por PcD (Art. 31).
        </div>
        <div className="p-2.5 rounded-lg bg-white border border-amber-200">
          <strong className="lom-art-tag block">Arts. 62 a 75</strong>
          <strong>Emenda à LOM (Art. 62):</strong> proposta por 1/3 dos Vereadores, Prefeito, 50 entidades ou 5% do eleitorado; votada em 2 turnos (interstício mínimo de 10 dias), aprovada por <strong>2/3</strong> e promulgada pela Mesa da Câmara. <strong>Contas do Prefeito (Art. 75):</strong> parecer prévio do TCE-RO só deixa de prevalecer por voto de <strong>2/3</strong> da Câmara.
        </div>
        <div className="p-2.5 rounded-lg bg-white border border-amber-200">
          <strong className="lom-art-tag block">Arts. 72, 80, 83 e 85</strong>
          Posse em até <strong>10 dias</strong> (Art. 80). Ausência do Município ou Estado por mais de <strong>15 dias consecutivos</strong> exige licença prévia da Câmara sob pena de perda do cargo (Art. 85). Veto total ou parcial em <strong>15 dias úteis</strong> e apreciação em 30 dias por maioria absoluta (Art. 72).
        </div>
        <div className="p-2.5 rounded-lg bg-white border border-amber-200">
          <strong className="lom-art-tag block">Arts. 150 a 153, 171 a 180 e 235</strong>
          Saneamento básico e vedação de aterros à margem de rios e mananciais (Art. 151); direito à saúde, ações de vigilância epidemiológica, sanitária e controle de zoonoses, vedação de subvenção pública a instituições privadas lucrativas (Art. 173, § 3º) e Fundo Municipal de Saúde (Art. 235).
        </div>
      </div>
    </div>
  );
};
