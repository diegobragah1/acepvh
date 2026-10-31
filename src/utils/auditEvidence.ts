export const AUDIT_LEVELS=['AUSENTE','SUPERFICIAL','PARCIAL','ADEQUADO','APROFUNDADO','VALIDADO'] as const;
export interface AuditEvidence {
 nivel: typeof AUDIT_LEVELS[number] | null;
 evidenciaTeoria: string[];
 evidenciaFonte: string[];
 exerciciosValidados: string[];
 evidenciaRevisao: string[];
 pendenciasCriticas: string[];
}
/** A palavra encontrada, uma URL cadastrada ou um teste de build não provam cobertura. */
export function validationErrors(row:AuditEvidence): string[] {
 if(row.nivel!=='VALIDADO')return [];
 const errors:string[]=[];
 for(const k of ['evidenciaTeoria','evidenciaFonte','exerciciosValidados','evidenciaRevisao'] as const)
  if(!row[k].some(s=>s.trim().length>0))errors.push(k);
 if(row.pendenciasCriticas.length)errors.push('pendenciasCriticas');
 return errors;
}
