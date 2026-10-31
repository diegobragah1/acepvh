/** Narrow corrections of unsubstantiated exam-frequency claims in legacy prose.
 * Does not rewrite quotations, legal provisions, answer options or question IDs.
 */
export function correctEditorialClaims(text: string): string {
  const revisions = [
    ['A banca IBGP inicia 100% de suas provas de Nível Médio/ACE com questões sobre', 'Este bloco reúne conteúdos de'],
    ['Mais de 80% das questões de ortografia da banca IBGP resolvem-se com esta única regra visual sobre o final do prefixo e o início da segunda palavra:', 'A relação entre o final do prefixo e o início da palavra ajuda a organizar parte das regras de hífen; casos específicos exigem consulta ao Acordo e ao VOLP:'],
    ['A banca IBGP cobra em quase todas as provas a associação entre', 'Neste bloco, estude a associação entre'],
    ['são apenas 5:', 'neste esquema, distinguem-se cinco sequências:'],
    ['A banca IBGP inicia todas as provas de Língua Portuguesa com 2 a 4 questões sobre um texto-base', 'Neste bloco, o texto-base é usado para estudar compreensão e interpretação'],
    ['estruturas linguísticas fixas (em número de 5)', 'estruturas linguísticas organizadas em classificações didáticas'],
    ['5 tipos fixos:', 'uma classificação didática recorrente:'],
    ['Interpretação (Extratextualidade/Inferência)', 'Interpretação (inferência sustentada pelo texto e pelo contexto)'],
    ['Elipse omite termo não expresso antes', 'Elipse omite termo recuperável pelo contexto'],
    ['Elipse: omite termo não dito antes', 'Elipse: omite termo recuperável pelo contexto'],
    ['Iminente (imediato)', 'Iminente (prestes a ocorrer)'],
  ];
  return revisions.reduce((prose,[before,after]) => prose.split(before).join(after),text);
}
