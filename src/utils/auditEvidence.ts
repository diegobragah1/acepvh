export const AUDIT_LEVELS=['AUSENTE','SUPERFICIAL','PARCIAL','ADEQUADO','APROFUNDADO','VALIDADO'] as const;
export interface AuditEvidence {
 nivel: typeof AUDIT_LEVELS[number] | null;
 evidenciaTeoria: string[];
 evidenciaFonte: string[];
 exerciciosValidados: string[];
 evidenciaRevisao: string[];
 pendenciasCriticas: string[];
}

/** Apply persisted reviews without silently losing orphaned evidence or changing row IDs. */
export function applyEvidenceOverlay<T extends {id:string}>(rows:T[], overlay:Record<string,Partial<T>>):T[] {
 const known=new Set(rows.map(row=>row.id));
 for(const [id,value] of Object.entries(overlay)) {
  if(!known.has(id))throw Error(`Evidência sem competência correspondente: ${id}`);
  if(value.id!==undefined&&value.id!==id)throw Error(`Identidade de evidência incompatível: ${id}`);
 }
 return rows.map(row=>({...row,...overlay[row.id],id:row.id}));
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
