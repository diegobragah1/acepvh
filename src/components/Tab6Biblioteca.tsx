import React, { useMemo, useState } from 'react';
import { useApp } from '../context/AppContext';

export const Tab6Biblioteca: React.FC = () => {
  const { appData, openLessonBlock } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [folderFilter, setFolderFilter] = useState('all');

  const sources = appData?.sources || [];

  const folderOptions = useMemo(() => {
    const counts = new Map<string, number>();
    for (const s of sources) {
      const folder = s.folder || 'Sem pasta';
      counts.set(folder, (counts.get(folder) || 0) + 1);
    }
    return Array.from(counts.entries()).sort((a, b) => a[0].localeCompare(b[0], 'pt-BR'));
  }, [sources]);

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
    openLessonBlock(lessonId);
  };

  return (
    <section className="space-y-6">
      {/* 5 Divergências dos PDFs do Drive Sanadas */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-amber-300">
        <span className="text-xs font-bold uppercase px-2.5 py-0.5 rounded bg-amber-100 text-amber-900">
          Fontes primárias e material de apoio
        </span>
        <h2 className="text-lg font-extrabold text-slate-900 mt-1 mb-2">
          Versões, escopo e limites das referências
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
          <div className="bg-amber-50/70 p-3 rounded-xl border border-amber-200">
            <h3 className="font-bold text-amber-950">1. Subpasta 4 — Ausência dos PDFs das Leis Municipais de Porto Velho:</h3>
            <p className="text-slate-700 mt-0.5">
              As aulas <code>leg_1</code>, <code>leg_2</code> e <code>leg_3</code> usam a LOM e as LCs 385, 390 e 391. Consulte as consolidações do SAPL nas fontes 92, 93, 101 e 102. O confronto textual distingue redações atuais de versões históricas desativadas.
            </p>
          </div>
          <div className="bg-rose-50/70 p-3 rounded-xl border border-rose-200">
            <h3 className="font-bold text-rose-950">2. Subpasta 5 — PDF #54 (Lei nº 10.520/2002 REVOGADA) e Ausência da LAI Estadual/Municipal:</h3>
            <p className="text-slate-700 mt-0.5">
              O programa indica a Lei 14.133/2021. O material da Lei 10.520/2002 é histórico. A fonte 94 é estadual: sua presença não comprova a legislação municipal de acesso à informação, que exige conferência própria.
            </p>
          </div>
          <div className="bg-amber-50/70 p-3 rounded-xl border border-amber-200">
            <h3 className="font-bold text-amber-950">3. Subpasta 6 — Ausência de "Doenças Transmissíveis I" e Capítulos Extras no PDF #66:</h3>
            <p className="text-slate-700 mt-0.5">
              A aula <code>esp_9</code> reúne as 14 doenças do programa. Cada doença exige fonte específica para transmissão, vigilância e controle; fichas existentes e links cadastrados não certificam atualização de vacinas, profilaxias ou protocolos.
            </p>
          </div>
          <div className="bg-emerald-50/70 p-3 rounded-xl border border-emerald-200">
            <h3 className="font-bold text-emerald-950">4. Subpasta 1 — Ausência de Sistemas Lineares e Médias no PDF #17:</h3>
            <p className="text-slate-700 mt-0.5">
              Equações, sistemas, função afim e médias pertencem a <code>rlm_4</code>. As 100 questões principais de RLM têm memória de conferência; esse trabalho não autentica atribuições a bancas nem substitui a revisão completa da teoria e dos cartões.
            </p>
          </div>
          <div className="bg-emerald-50/70 p-3 rounded-xl border border-emerald-200 md:col-span-2">
            <h3 className="font-bold text-emerald-950">5. Subpasta 7 — Salto do PDF #8 e Ausência de Georreferenciamento e História/Geografia de PVH/RO:</h3>
            <p className="text-slate-700 mt-0.5">
              Dados estatísticos precisam de indicador, território e ano. Lotação distrital do concurso não equivale automaticamente à divisão administrativa municipal. Georreferenciamento está em <code>atu_5</code>; notícias da Prefeitura também são exigência expressa do programa.
            </p>
          </div>
        </div>
      </div>

      {/* Inventário de 126 Fontes Cadastradas */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <h2 className="text-base sm:text-lg font-extrabold text-slate-900">
              Inventário de referências: {sources.length} fontes cadastradas
            </h2>
            <p className="text-xs text-slate-600">
              Os cartões reúnem metadados, links e aulas relacionadas. Cadastro e tamanho informado não são comprovantes de leitura ou validação documental.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            <input
              id="library-search-input"
              type="search"
              aria-label="Filtrar referências por nome, assunto ou número"
              placeholder="Filtrar por nome, assunto ou número..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-auto max-w-full px-3 py-2 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <select
              id="library-folder-select"
              aria-label="Filtrar referências por pasta do Google Drive"
              value={folderFilter}
              onChange={(e) => setFolderFilter(e.target.value)}
              className="w-full sm:w-auto max-w-full px-3 py-2 rounded-lg border border-slate-300 text-xs sm:text-sm font-semibold bg-slate-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="all">Todas as pastas ({sources.length} fontes)</option>
              {folderOptions.map(([folder, count]) => (
                <option key={folder} value={folder}>
                  {folder} ({count})
                </option>
              ))}
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
                    aria-label={`Abrir ${s.url?.toLowerCase().includes('.pdf') ? 'PDF' : 'fonte'} ${s.num}: ${s.title || s.name} (abre em nova aba)`}
                    className="px-2.5 py-1 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    {s.url?.toLowerCase().includes('.pdf') ? 'Abrir PDF' : 'Abrir Fonte'} &#8599;
                  </a>
                  {s.lesson && (
                    <button
                      type="button"
                      onClick={() => handleOpenLesson(s.lesson!)}
                      aria-label={`Ir para a aula ${s.lesson} relacionada à fonte ${s.num}: ${s.title || s.name}`}
                      className="px-2.5 py-1 rounded-lg bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs font-bold transition focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer"
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
