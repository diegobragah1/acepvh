import test from 'node:test';
import assert from 'node:assert/strict';
import {validationErrors,AuditEvidence} from './auditEvidence';
const empty:AuditEvidence={nivel:null,evidenciaTeoria:[],evidenciaFonte:[],exerciciosValidados:[],evidenciaRevisao:[],pendenciasCriticas:[]};
test('linha não avaliada permanece distinta de ausência e de validação',()=>assert.deepEqual(validationErrors(empty),[]));
test('validação exige as quatro espécies de evidência',()=>assert.equal(validationErrors({...empty,nivel:'VALIDADO'}).length,4));
test('pendência crítica impede aprovação mesmo com evidências preenchidas',()=>{
 const full:AuditEvidence={nivel:'VALIDADO',evidenciaTeoria:['bloco/seção'],evidenciaFonte:['fonte/página'],exerciciosValidados:['questão/resolução'],evidenciaRevisao:['mapa/cartões/resumo'],pendenciasCriticas:[]};
 assert.deepEqual(validationErrors(full),[]);
 assert.deepEqual(validationErrors({...full,pendenciasCriticas:['questão ambígua']}),['pendenciasCriticas']);
});
