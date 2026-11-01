import React, { useState } from 'react';

export interface PautaItem {
  num: number;
  title: string;
  desc: string;
  lessonId: string;
  blockIdx: number;
  badge: string;
}

export const ESPECIFICO_PAUTA_ITEMS: PautaItem[] = [
  {
    num: 1,
    title: '1. CF/88 (Art. 196 a 200)',
    desc: 'Direito à saúde, relevância pública, diretrizes, financiamento e vedação ao capital estrangeiro.',
    lessonId: 'esp_1',
    blockIdx: 0,
    badge: 'Aula 01 (esp_1)',
  },
  {
    num: 2,
    title: '2. Legislações Federais do SUS',
    desc: 'Lei Federal nº 8.080/1990, Lei Federal nº 8.142/1990 e Portaria nº 2.436/2017.',
    lessonId: 'esp_2',
    blockIdx: 0,
    badge: 'Aula 02 (esp_2)',
  },
  {
    num: 3,
    title: '3. Leis da Carreira ACE/ACS',
    desc: 'Lei Federal nº 11.350/2006, Lei nº 13.595/2018 (Lei Ruth Brilhante) e Lei nº 13.708/2018 (Piso).',
    lessonId: 'esp_3',
    blockIdx: 0,
    badge: 'Aula 03 (esp_3)',
  },
  {
    num: 4,
    title: '4. Sistema Único de Saúde — SUS',
    desc: 'Princípios fundamentais, diretrizes, atribuições/competências das esferas e promoção/proteção da saúde.',
    lessonId: 'esp_4',
    blockIdx: 0,
    badge: 'Aula 04 (esp_4)',
  },
  {
    num: 5,
    title: '5. Política Nacional de Atenção Básica (PNAB)',
    desc: 'Portaria nº 2.436/2017: territorialização, adscrição, equipes e integração Atenção Básica + Vigilância.',
    lessonId: 'esp_5',
    blockIdx: 0,
    badge: 'Aula 05 (esp_5)',
  },
  {
    num: 6,
    title: '6. História e Evolução da Profissão de ACE',
    desc: 'De Oswaldo Cruz, DNERu, SUCAM e FUNASA até a EC 51/2006, EC 63/2010 e EC 120/2022.',
    lessonId: 'esp_6',
    blockIdx: 0,
    badge: 'Aula 06 (esp_6)',
  },
  {
    num: 7,
    title: '7. Atribuições do Agente de Combate às Endemias',
    desc: 'Atribuições específicas e compartilhadas (Art. 3º, 4º e 4º-A da Lei 11.350/2006 e Lei 13.595/2018).',
    lessonId: 'esp_7',
    blockIdx: 0,
    badge: 'Aula 07 (esp_7)',
  },
  {
    num: 8,
    title: '8. Vigilância em Saúde',
    desc: 'Epidemiológica, Ambiental, Sanitária e Saúde do Trabalhador; LIRAa/LIA, Pontos Estratégicos, UBV e EPIs.',
    lessonId: 'esp_8',
    blockIdx: 0,
    badge: 'Aula 08 (esp_8)',
  },
  {
    num: 9,
    title: '9. Conhecimentos Básicos das 14 Doenças',
    desc: 'Raiva, Esquistossomose, Chagas, Dengue, F. Amarela, F. Maculosa, Influenza, Chikungunya, Zika, Leptospirose, LT, LV, Malária e COVID-19.',
    lessonId: 'esp_9',
    blockIdx: 0,
    badge: 'Aula 09 (esp_9)',
  },
  {
    num: 10,
    title: '10. Doenças Contagiosas e Cadeia Epidemiológica',
    desc: 'Agente etiológico, reservatório, hospedeiro definitivo/intermediário, modo de transmissão, sintomas e controle.',
    lessonId: 'esp_10',
    blockIdx: 0,
    badge: 'Aula 10 (esp_10)',
  },
];

interface PautaLocatorProps {
  activeLessonId: string;
  onJumpToLessonBlock: (lessonId: string, blockIndex: number) => void;
}

export const PautaLocator: React.FC<PautaLocatorProps> = ({
  activeLessonId,
  onJumpToLessonBlock,
}) => {
  const [showPautaPanel, setShowPautaPanel] = useState(true);

  return (
    <div className="bg-gradient-to-r from-teal-950 via-slate-900 to-teal-900 text-white rounded-2xl border border-teal-800 p-4 shadow-sm no-print">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-amber-400 text-slate-950">
            Edital Verticalizado (49 Aulas)
          </span>
          <h3 className="text-xs sm:text-sm font-extrabold text-white">
            Pauta de Conhecimento Específico (1 a 10), Legislação (1 a 7), Português (1 a 18), Raciocínio Lógico (1 a 8) e Gerais (1 a 6)
          </h3>
        </div>
        <button
          type="button"
          onClick={() => setShowPautaPanel((v) => !v)}
          className="text-xs font-bold px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-teal-200 transition cursor-pointer"
        >
          {showPautaPanel ? 'Ocultar Atalhos ▲' : 'Mostrar 10 Categorias ▼'}
        </button>
      </div>

      {showPautaPanel && (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-2 mt-3">
          {ESPECIFICO_PAUTA_ITEMS.map((item) => {
            const isActiveItem = activeLessonId === item.lessonId;
            return (
              <button
                key={item.num}
                type="button"
                onClick={() => onJumpToLessonBlock(item.lessonId, item.blockIdx)}
                className={`text-left p-2.5 rounded-xl border transition flex flex-col justify-between gap-1.5 cursor-pointer ${
                  isActiveItem
                    ? 'bg-teal-600/40 border-amber-400 ring-1 ring-amber-400 shadow-sm'
                    : 'bg-white/5 hover:bg-white/10 border-white/15'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-teal-400/20 text-teal-200 border border-teal-400/30">
                      {item.badge}
                    </span>
                    <span className="text-[10px] font-bold text-amber-300">Abrir ➔</span>
                  </div>
                  <p className="text-xs font-extrabold text-white leading-snug">{item.title}</p>
                </div>
                <p className="text-[11px] text-slate-300 leading-tight line-clamp-2">{item.desc}</p>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
