import React from 'react';
import { useApp } from '../context/AppContext';

export const Tab1Painel: React.FC = () => {
  const { appData, setCurrentTab } = useApp();

  const cargos = appData?.cargos || [];
  const officialSources = (appData?.sources || []).filter(s => s.num >= 86);

  let sumAc = 0, sumPcd = 0, sumPn = 0, sumPi = 0, sumIm = 0, sumCr = 0, sumTot = 0;
  cargos.forEach(c => {
    const im = c.im !== undefined ? c.im : (c.imediata ?? 0);
    const tot = c.tot !== undefined ? c.tot : (c.total ?? 0);
    sumAc += c.ac || 0;
    sumPcd += c.pcd || 0;
    sumPn += c.pn || 0;
    sumPi += c.pi || 0;
    sumIm += im;
    sumCr += c.cr || 0;
    sumTot += tot;
  });

  return (
    <section className="space-y-6">
      {/* Resumo da Atualização Pós-Auditoria */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-emerald-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-100 pb-3 mb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
              Diagnóstico Documental &amp; Consolidação Oficial
            </span>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
              Auditoria Integral do Edital nº 25/2026 (Consolidado até a Retificação nº 01 — Edital nº 28/2026)
            </h2>
          </div>
          <button
            type="button"
            onClick={() => setCurrentTab('tab-apostila')}
            className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs sm:text-sm font-bold shadow transition self-start"
          >
            Estudar as 49 Aulas Aprofundadas &rarr;
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
          <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-1">1. Quadro Oficial de Provas (Anexo III) &amp; Vagas (Anexo I)</h3>
            <p className="text-slate-600 leading-relaxed">
              Confirmada no <strong>Anexo III Retificado (pág. 2)</strong> a estrutura exata de <strong>50 questões objetivas (4 alternativas: A, B, C, D)</strong>, todas com <strong>Peso 2,0 = 100,0 pontos</strong> (15 Específicos [30 pts], 10 Português [20 pts], 10 RLM [20 pts], 10 Legislação [20 pts], 5 Gerais [10 pts]), e no <strong>Anexo I (págs. 13–14)</strong> o vencimento mensal de <strong>R$ 3.242,00</strong> e as <strong>140 vagas</strong> nos códigos <strong>340 a 356</strong>.
            </p>
          </div>
          <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-1">2. Fichas Individuais das 14 Doenças + Leis 11.350, 13.708, 13.595 e 14.536</h3>
            <p className="text-slate-600 leading-relaxed">
              Desenvolvidas fichas individuais completas para todas as doenças do Anexo IV — incluindo <strong>Febre Maculosa (Bloco 9.3)</strong>, <strong>Malária</strong>, <strong>Chagas (Oral/PITs)</strong>, <strong>Leishmanioses (LTA e LV)</strong>, <strong>Esquistossomose</strong>, <strong>Raiva</strong>, <strong>Leptospirose (3 roedores)</strong>, <strong>Dengue, Zika, Chikungunya, Febre Amarela, Influenza e COVID-19</strong>, além da comparação entre a Lei 11.350/2006 e o Anexo II Municipal.
            </p>
          </div>
          <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-1">3. Cobertura de 100% dos Subtópicos de Legislação, Português, RLM e Gerais</h3>
            <p className="text-slate-600 leading-relaxed">
              Integrados todos os 85 PDFs do Drive + 9 fontes oficiais, adicionando <strong>Nacionalidade (Arts. 12–13 CF)</strong>, <strong>Art. 29-A e 38 CF</strong>, <strong>LOM e LC 385/2010</strong>, <strong>LAI Estadual (Lei 3.166/13) e Municipal</strong>, <strong>Figuras de Sintaxe e Variação Linguística</strong>, <strong>Sistemas Lineares, Função do 1º Grau, Médias, Conjunto das Partes (2<sup>n</sup>) e Verdades/Mentiras</strong>, e <strong>Georreferenciamento (SIG/GPS)</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* KPI Cards do Concurso */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <div className="text-xs font-semibold text-slate-500">Total de Vagas ACE</div>
          <div className="text-xl font-extrabold text-teal-700 mt-1">140 Vagas</div>
          <div className="text-[11px] text-slate-500 mt-0.5">40 Imediatas + 100 CR</div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <div className="text-xs font-semibold text-slate-500">Área Urbana (Cód. 340)</div>
          <div className="text-xl font-extrabold text-indigo-700 mt-1">96 Vagas</div>
          <div className="text-[11px] text-slate-500 mt-0.5">25 Imediatas + 71 CR</div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <div className="text-xs font-semibold text-slate-500">15 Distritos (341–356)</div>
          <div className="text-xl font-extrabold text-amber-700 mt-1">44 Vagas</div>
          <div className="text-[11px] text-slate-500 mt-0.5">15 Imediatas + 29 CR</div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <div className="text-xs font-semibold text-slate-500">Vencimento (Anexo I)</div>
          <div className="text-xl font-extrabold text-emerald-700 mt-1">R$ 3.242,00</div>
          <div className="text-[11px] text-slate-500 mt-0.5">Jornada: 40h semanais</div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <div className="text-xs font-semibold text-slate-500">Prova Objetiva (IBGP)</div>
          <div className="text-lg font-extrabold text-slate-800 mt-1">50 Questões</div>
          <div className="text-[11px] text-slate-500 mt-0.5">Peso 2,0 = 100,0 pts (A–D)</div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-rose-200 shadow-sm">
          <div className="text-xs font-semibold text-rose-600">Data e Turno da Prova</div>
          <div className="text-lg font-extrabold text-rose-700 mt-1">13/12/2026</div>
          <div className="text-[11px] text-slate-600 mt-0.5">Tarde: 14h45 às 17h45 (Portões 14h30)</div>
        </div>
      </div>

      {/* Quadro Oficial da Prova Objetiva (Anexo III Retificado) */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
        <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-1">
          Quadro Oficial de Disciplinas, Questões e Pesos — Anexo III Retificado (Códigos 340 a 356: ACE)
        </h3>
        <p className="text-xs text-slate-600 mb-3">
          Conforme o item 9.1.2 e o Anexo III Retificado do Edital nº 25/2026, a Prova Objetiva consta de <strong>50 questões de múltipla escolha com 4 alternativas (A, B, C e D)</strong>, todas com <strong>Peso 2,0</strong>. Para ser aprovado, o candidato deve obter no mínimo <strong>50% do total de pontos (50,0 pontos = 25 acertos)</strong>.
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs sm:text-sm border border-slate-200 rounded-lg overflow-hidden">
            <thead className="bg-slate-800 text-white">
              <tr>
                <th className="p-2.5 text-left">Disciplina Oficial (Anexo III Retificado)</th>
                <th className="p-2.5 text-center">Nº de Questões</th>
                <th className="p-2.5 text-center">Peso por Questão</th>
                <th className="p-2.5 text-center">Total de Pontos</th>
                <th className="p-2.5 text-center">% da Prova</th>
                <th className="p-2.5 text-left">Módulos / Aulas e PDFs no Plano</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr className="bg-teal-50/70 font-semibold">
                <td className="p-2.5 text-teal-950">Conhecimentos Específicos (Agente de Combate às Endemias — ACE)</td>
                <td className="p-2.5 text-center font-bold">15</td>
                <td className="p-2.5 text-center"><span className="px-2 py-0.5 rounded bg-teal-600 text-white font-bold">Peso 2,0</span></td>
                <td className="p-2.5 text-center font-extrabold text-teal-900">30,0 pts</td>
                <td className="p-2.5 text-center font-bold text-teal-800">30%</td>
                <td className="p-2.5">Categorias 1 a 10 — Aulas 1 a 10 (<code>esp_1</code> a <code>esp_10</code>) &bull; PDFs #12, #55 a #69 + 14 Fichas</td>
              </tr>
              <tr className="bg-white">
                <td className="p-2.5 font-medium">Língua Portuguesa</td>
                <td className="p-2.5 text-center font-bold">10</td>
                <td className="p-2.5 text-center"><span className="px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 font-bold">Peso 2,0</span></td>
                <td className="p-2.5 text-center font-bold">20,0 pts</td>
                <td className="p-2.5 text-center">20%</td>
                <td className="p-2.5">Aulas 18 a 23 (<code>por_1</code> a <code>por_6</code>) &bull; PDFs #22 a #40</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="p-2.5 font-medium">Raciocínio Lógico</td>
                <td className="p-2.5 text-center font-bold">10</td>
                <td className="p-2.5 text-center"><span className="px-2 py-0.5 rounded bg-purple-100 text-purple-800 font-bold">Peso 2,0</span></td>
                <td className="p-2.5 text-center font-bold">20,0 pts</td>
                <td className="p-2.5 text-center">20%</td>
                <td className="p-2.5">Aulas 24 a 29 (<code>rlm_1</code> a <code>rlm_6</code>) &bull; PDFs #1 a #21</td>
              </tr>
              <tr className="bg-white">
                <td className="p-2.5 font-medium">Legislação (LOM, LC 385, Leis 390/391, PcD, CF/88, Lei 14.133 e LAI)</td>
                <td className="p-2.5 text-center font-bold">10</td>
                <td className="p-2.5 text-center"><span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold">Peso 2,0</span></td>
                <td className="p-2.5 text-center font-bold">20,0 pts</td>
                <td className="p-2.5 text-center">20%</td>
                <td className="p-2.5">Aulas 11 a 17 (<code>leg_1</code> a <code>leg_7</code>) &bull; PDFs #41 a #54 e Docs #92–94</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="p-2.5 font-medium">Conhecimentos Gerais e Atualidades (Município, Estado, Brasil e Mundo)</td>
                <td className="p-2.5 text-center font-bold">05</td>
                <td className="p-2.5 text-center"><span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">Peso 2,0</span></td>
                <td className="p-2.5 text-center font-bold">10,0 pts</td>
                <td className="p-2.5 text-center">10%</td>
                <td className="p-2.5">Aulas 30 a 32 (<code>atu_1</code> a <code>atu_3</code>) &bull; PDFs #70 a #85</td>
              </tr>
              <tr className="bg-slate-900 text-white font-bold">
                <td className="p-2.5">TOTAL DA PROVA OBJETIVA (ANEXO III RETIFICADO)</td>
                <td className="p-2.5 text-center">50 Questões</td>
                <td className="p-2.5 text-center">Peso 2,0</td>
                <td className="p-2.5 text-center text-emerald-400">100,0 Pontos</td>
                <td className="p-2.5 text-center">100%</td>
                <td className="p-2.5">Mínimo para aprovação: 50% (50,0 pontos)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Tabela Completa dos 16 Códigos Retificados de ACE (340 a 356) */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
          <div>
            <span className="text-xs font-bold uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-800">
              Anexo I Retificado (Páginas 13 e 14) — Edital nº 28/2026 (Retificação nº 01)
            </span>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mt-1">
              Quadro Integral de Vagas por Localidade — Códigos 340 a 356 (Agente de Combate às Endemias)
            </h3>
          </div>
        </div>
        <div className="bg-amber-50 border-l-4 border-amber-500 p-3 rounded text-xs sm:text-sm text-amber-950 mb-4 space-y-1">
          <p><strong>Observações Oficiais Verificadas no Anexo I Retificado (27/03/2026):</strong></p>
          <p>
            1. O código <strong>343</strong> não existe na tabela oficial do Anexo I Retificado (a numeração salta de <code>342 — Calama</code> para <code>344 — Cujubim Grande</code>, totalizando <strong>16 códigos de ACE</strong>: 1 Urbano [96 vagas] + 15 Localidades Rurais [44 vagas] = <strong>140 vagas totais</strong>: 40 imediatas + 100 CR).
          </p>
          <p>
            2. <strong>Vencimento Mensal Oficial no Anexo I:</strong> <strong>R$ 3.242,00</strong> para jornada de 40 horas semanais. Requisito de ingresso: <em>Ensino Médio Completo e conclusão, com aproveitamento, de curso de formação inicial com carga horária mínima de 40 horas</em> (como o curso gratuito do AVASUS/MS).
          </p>
          <p>
            3. <strong>Horário Único da Prova de ACE (Item 4.1.12.1):</strong> Todos os códigos de ACE (340 a 356) realizam prova no domingo, <strong>13/12/2026, no turno da tarde (fechamento dos portões às 14h30min; aplicação das 14h45 às 17h45, horário de RO)</strong>.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs border border-slate-200">
            <thead className="bg-slate-800 text-white">
              <tr>
                <th className="p-2 text-center">Cód.</th>
                <th className="p-2 text-left">Localidade de Lotação / Concorrência (Anexo I)</th>
                <th className="p-2 text-center">Vagas Imediatas</th>
                <th className="p-2 text-center">Cadastro Reserva (CR)</th>
                <th className="p-2 text-center">Total Vagas</th>
                <th className="p-2 text-center">Ampla (AC)</th>
                <th className="p-2 text-center">PcD</th>
                <th className="p-2 text-center">Negros (PN)</th>
                <th className="p-2 text-center">Idosos (PI)</th>
                <th className="p-2 text-center">Vencimento</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {cargos.map(c => {
                const im = c.im !== undefined ? c.im : (c.imediata ?? 0);
                const tot = c.tot !== undefined ? c.tot : (c.total ?? 0);
                const isUrban = c.code === "340";
                return (
                  <tr key={c.code} className={isUrban ? 'bg-teal-50/80 font-bold' : 'bg-white hover:bg-slate-50'}>
                    <td className="p-2 text-center font-mono font-bold text-slate-900">{c.code}</td>
                    <td className="p-2">{c.local}</td>
                    <td className="p-2 text-center font-bold text-teal-800">{im}</td>
                    <td className="p-2 text-center text-slate-600">{c.cr}</td>
                    <td className="p-2 text-center font-extrabold text-slate-900">{tot}</td>
                    <td className="p-2 text-center text-slate-700">{c.ac}</td>
                    <td className="p-2 text-center text-slate-700">{c.pcd}</td>
                    <td className="p-2 text-center text-slate-700">{c.pn}</td>
                    <td className="p-2 text-center text-slate-700">{c.pi}</td>
                    <td className="p-2 text-center font-semibold text-emerald-800">R$ 3.242,00</td>
                  </tr>
                );
              })}
              {cargos.length > 0 && (
                <tr className="bg-slate-900 text-white font-extrabold text-xs">
                  <td className="p-2.5 text-center font-mono">TOTAL</td>
                  <td className="p-2.5">16 CÓDIGOS DE CONCORRÊNCIA (URBANO + 15 DISTRITOS)</td>
                  <td className="p-2.5 text-center text-emerald-400">{sumIm}</td>
                  <td className="p-2.5 text-center text-amber-300">{sumCr}</td>
                  <td className="p-2.5 text-center text-teal-300">{sumTot}</td>
                  <td className="p-2.5 text-center">{sumAc}</td>
                  <td className="p-2.5 text-center">{sumPcd}</td>
                  <td className="p-2.5 text-center">{sumPn}</td>
                  <td className="p-2.5 text-center">{sumPi}</td>
                  <td className="p-2.5 text-center text-emerald-400">R$ 3.242,00 (40h)</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Cards dos 9 Documentos Oficiais IBGP e Legislação */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
        <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-3">
          Fontes Primárias Oficiais: Edital, Retificação nº 01, Anexos I a IV (IBGP) e Legislação Local (SAPL/RO)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {officialSources.map(s => (
            <a
              key={s.num}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-3.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-teal-50/60 hover:border-teal-400 transition"
            >
              <div className="flex items-center justify-between text-[11px] font-bold text-teal-700 mb-1">
                <span>FONTE OFICIAL #{s.num}</span>
                <span>ABRIR PDF / LINK &#8599;</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">{s.title || s.name}</div>
              <div className="text-[11px] text-slate-600 mt-1">{s.note || ''}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
