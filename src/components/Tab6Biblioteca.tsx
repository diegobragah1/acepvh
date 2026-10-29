import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const Tab6Biblioteca: React.FC = () => {
  const { appData, setCurrentTab, setCurrentLessonId } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [folderFilter, setFolderFilter] = useState('all');

  const sources = appData?.sources || [];

  const filteredSources = sources.filter(s => {
    const matchFolder = folderFilter === 'all' || s.folder === folderFilter;
    if (!matchFolder) return false;

    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();
    const titleStr = (s.title || s.name || '').toLowerCase();
    const noteStr = (s.note || '').toLowerCase();
    return (
      titleStr.includes(q) ||
      noteStr.includes(q) ||
      s.folder.toLowerCase().includes(q) ||
      String(s.num) === q
    );
  });

  const handleOpenLesson = (lessonId: string) => {
    setCurrentLessonId(lessonId);
    setCurrentTab('tab-apostila');
  };

  return (
    <section className="space-y-6">
      {/* 5 Divergências dos PDFs do Drive Sanadas */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-amber-300">
        <span className="text-xs font-bold uppercase px-2.5 py-0.5 rounded bg-amber-100 text-amber-900">
          Auditoria Documental das 7 Subpastas do Google Drive (85 PDFs)
        </span>
        <h2 className="text-lg font-extrabold text-slate-900 mt-1 mb-2">
          As 5 Divergências/Lacunas dos PDFs Brutos do Drive Identificadas e Sanadas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
          <div className="bg-amber-50/70 p-3 rounded-xl border border-amber-200">
            <p className="font-bold text-amber-950">1. Subpasta 4 — Ausência dos PDFs das Leis Municipais de Porto Velho:</p>
            <p className="text-slate-700 mt-0.5">
              A Subpasta 4 continha apenas 9 PDFs de Direito Constitucional (#42 a #50), faltando a LOM-PVH, a LC 385/2010 e as Leis 390 e 391/2010. <strong>Solução:</strong> Vinculados os textos oficiais do SAPL (#89, #92 e #93) e desenvolvidas as Aulas <code>leg_1</code>, <code>leg_2</code> e <code>leg_3</code>.
            </p>
          </div>
          <div className="bg-rose-50/70 p-3 rounded-xl border border-rose-200">
            <p className="font-bold text-rose-950">2. Subpasta 5 — PDF #54 (Lei nº 10.520/2002 REVOGADA) e Ausência da LAI Estadual/Municipal:</p>
            <p className="text-slate-700 mt-0.5">
              O PDF #54 trata da Lei 10.520/2002 (revogada pela Lei 14.133/2021) e o PDF #53 traz apenas a LAI Federal. <strong>Solução:</strong> PDF #54 marcado como <strong>REVOGADO — NÃO ESTUDAR</strong>; Pregão estudado pela Lei 14.133/21 (<code>leg_6</code>) e LAI de RO (Lei 3.166/13) e PVH incluídas em <code>leg_7</code> (#94).
            </p>
          </div>
          <div className="bg-amber-50/70 p-3 rounded-xl border border-amber-200">
            <p className="font-bold text-amber-950">3. Subpasta 6 — Ausência de "Doenças Transmissíveis I" e Capítulos Extras no PDF #66:</p>
            <p className="text-slate-700 mt-0.5">
              O PDF #66 (<em>Doenças Transmissíveis II</em>) cobre 8 agravos do edital, mas inclui 4 doenças fora do edital (TB, Hanseníase, Teníase, Lyme) e não traz Malária, Chagas, Esquistossomose, Raiva, Leptospirose e Febre Maculosa. <strong>Solução:</strong> Todas as 14 doenças ganharam fichas completas em <code>esp_7..9</code> e na Aba 4.
            </p>
          </div>
          <div className="bg-emerald-50/70 p-3 rounded-xl border border-emerald-200">
            <p className="font-bold text-emerald-950">4. Subpasta 1 — Ausência de Sistemas Lineares e Médias no PDF #17:</p>
            <p className="text-slate-700 mt-0.5">
              O PDF #17 (<em>Equação do 1º Grau</em>) tem 49 mil tokens e aborda apenas equações simples, omitindo Sistemas de Equações do 1º Grau e Média Aritmética Simples e Ponderada. <strong>Solução:</strong> Teoria passo a passo e exercícios incluídos no Bloco 25.2 (<code>rlm_3</code>).
            </p>
          </div>
          <div className="bg-emerald-50/70 p-3 rounded-xl border border-emerald-200 md:col-span-2">
            <p className="font-bold text-emerald-950">5. Subpasta 7 — Salto do PDF #8 e Ausência de Georreferenciamento e História/Geografia de PVH/RO:</p>
            <p className="text-slate-700 mt-0.5">
              A numeração da Subpasta 7 salta do PDF <em>7. Ecologia</em> para o <em>9. Humanidades</em> (totalizando 16 PDFs gerais), sem apostila de História/Geografia de Rondônia e Porto Velho nem de Georreferenciamento. <strong>Solução:</strong> Aulas <code>atu_1</code>, <code>atu_2</code> e <code>atu_3</code> completas com Censo IBGE 2022/2025, 15 distritos, cultura local e Georreferenciamento (SIG/GIS, GPS, Sensoriamento Remoto, PRODES/DETER).
            </p>
          </div>
        </div>
      </div>

      {/* Directory of 94 Documents */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
              Inventário Analítico Conectado: 85 PDFs do Google Drive + 9 Documentos Oficiais (Total: 94 Fontes)
            </h3>
            <p className="text-xs text-slate-600">
              Cada card informa o tamanho, tokens analisados, conteúdo encontrado no PDF, aula correspondente e botões para abrir o PDF ou ir direto para a aula.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <input
              type="text"
              placeholder="Filtrar por nome, assunto ou nº (1 a 94)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-3 py-2 rounded-lg border border-slate-300 text-xs sm:text-sm"
            />
            <select
              value={folderFilter}
              onChange={(e) => setFolderFilter(e.target.value)}
              className="px-3 py-2 rounded-lg border border-slate-300 text-xs sm:text-sm font-semibold bg-slate-50"
            >
              <option value="all">Todas as Pastas (94 Arquivos)</option>
              <option value="8 - EDITAL E LEIS OFICIAIS">8 - Editais IBGP e Leis Oficiais (9)</option>
              <option value="1 - RACIOCINIO LOGICO">1 - Raciocínio Lógico (21 PDFs)</option>
              <option value="2 - PORTUGUES">2 - Língua Portuguesa (19 PDFs)</option>
              <option value="3 - ESTATUTO DEFICIENCIA">3 - Estatuto da Pessoa com Deficiência (1 PDF)</option>
              <option value="4 - DIREITO CONST E LOM">4 - Direito Constitucional (9 PDFs)</option>
              <option value="5 - LEIS LICITACAO">5 - Licitações e LAI (4 PDFs)</option>
              <option value="6 - SAUDE COLETIVA">6 - Saúde Coletiva e Específicos ACE (15 PDFs)</option>
              <option value="7 - ATUALIDADES E GERAIS">7 - Conhecimentos Gerais e Atualidades (16 PDFs)</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredSources.map(s => {
            const isRevoked = s.status === 'revoked' || s.revoked === true;
            const isWarn = s.status === 'warn';

            const cardStyle = isRevoked
              ? 'bg-rose-50 border-rose-300'
              : isWarn
              ? 'bg-amber-50/70 border-amber-300'
              : 'bg-slate-50 border-slate-200 hover:border-teal-400';

            const badgeStyle = isRevoked
              ? 'bg-rose-600 text-white'
              : isWarn
              ? 'bg-amber-500 text-slate-950'
              : 'bg-slate-200 text-slate-800';

            return (
              <div
                key={s.num}
                className={`p-3.5 rounded-xl border transition flex flex-col justify-between space-y-2.5 ${cardStyle}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${badgeStyle}`}>
                      FONTE #{s.num} {isRevoked ? '— REVOGADA (NÃO ESTUDAR!)' : isWarn ? '— PARCIAL / COMPLEMENTADO' : ''}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-500">
                      {s.size || ''} &bull; {s.tokens ? s.tokens.toLocaleString('pt-BR') + ' tokens' : ''}
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm font-extrabold text-slate-900 leading-snug">
                    {s.title || s.name}
                  </div>
                  <div className="text-[11px] font-semibold text-teal-800 mt-0.5">{s.folder}</div>
                  <p className="text-xs text-slate-700 mt-1.5 leading-snug">{s.note || ''}</p>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-200/80">
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition"
                  >
                    Abrir PDF &#8599;
                  </a>
                  {s.lesson && (
                    <button
                      type="button"
                      onClick={() => handleOpenLesson(s.lesson!)}
                      className="px-2.5 py-1 rounded-lg bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs font-bold transition"
                    >
                      Ir p/ Aula ({s.lesson}) &rarr;
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
