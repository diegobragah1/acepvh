/** Narrow corrections of unsubstantiated exam-frequency claims in legacy prose.
 * Does not rewrite quotations, legal provisions, answer options or question IDs.
 */
export function correctEditorialClaims(text: string): string {
  const revisions = [
    ['A banca IBGP inicia 100% de suas provas de Nível Médio/ACE com questões sobre', 'Este bloco reúne conteúdos de'],
    ['Mais de 80% das questões de ortografia da banca IBGP resolvem-se com esta única regra visual sobre o final do prefixo e o início da segunda palavra:', 'A relação entre o final do prefixo e o início da palavra ajuda a organizar parte das regras de hífen; casos específicos exigem consulta ao Acordo e ao VOLP:'],
    ['A banca IBGP cobra em quase todas as provas a associação entre', 'Neste bloco, estude a associação entre'],
    ['são apenas 5:', 'neste esquema, distinguem-se cinco sequências:'],
  ];
  return revisions.reduce((prose,[before,after]) => prose.split(before).join(after),text);
}
