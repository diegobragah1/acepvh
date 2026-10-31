import React from 'react';

export function StudyMethodPanel() {
  return (
    <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-teal-950 rounded-2xl p-5 text-white border border-indigo-800/60 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <span className="text-[11px] uppercase tracking-wider font-extrabold text-amber-300">Método de estudo ativo</span>
          <h2 className="text-lg font-extrabold mt-1">Como transformar cada aula em aprendizagem</h2>
        </div>
        <span className="text-xs rounded-full px-2.5 py-1 bg-white/10 border border-white/20">Teoria → recuperação → correção → revisão</span>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mt-4 text-xs leading-relaxed">
        <div className="rounded-xl bg-white/10 p-3 border border-white/10"><strong>1. Entenda</strong><br />Leia o Modo A procurando conceito, condição, exceção e exemplo. Feche o texto ao terminar um bloco.</div>
        <div className="rounded-xl bg-white/10 p-3 border border-white/10"><strong>2. Recupere</strong><br />Use o Modo B e os flashcards sem consultar a resposta. Fale ou escreva a explicação com suas palavras.</div>
        <div className="rounded-xl bg-white/10 p-3 border border-white/10"><strong>3. Corrija</strong><br />Resolva as questões. Ao errar, registre o motivo: conceito, distração, cálculo, interpretação ou desconhecimento.</div>
        <div className="rounded-xl bg-white/10 p-3 border border-white/10"><strong>4. Espaçe</strong><br />Revise o erro em 24 horas, 7 dias e 21 dias. Marque “Revisar” quando ainda depender da consulta.</div>
      </div>
      <p className="mt-4 text-[11px] text-slate-300">A auditoria indica onde conferir o material; ela não substitui a leitura da fonte oficial, a atualização da legislação ou a análise do gabarito.</p>
    </div>
  );
}
