import test from 'node:test';
import assert from 'node:assert/strict';
import {validationErrors,AuditEvidence,applyEvidenceOverlay} from './auditEvidence';
const empty:AuditEvidence={nivel:null,evidenciaTeoria:[],evidenciaFonte:[],exerciciosValidados:[],evidenciaRevisao:[],pendenciasCriticas:[]};
test('linha não avaliada permanece distinta de ausência e de validação',()=>assert.deepEqual(validationErrors(empty),[]));
test('validação exige as quatro espécies de evidência',()=>assert.equal(validationErrors({...empty,nivel:'VALIDADO'}).length,4));
test('pendência crítica impede aprovação mesmo com evidências preenchidas',()=>{
 const full:AuditEvidence={nivel:'VALIDADO',evidenciaTeoria:['bloco/seção'],evidenciaFonte:['fonte/página'],exerciciosValidados:['questão/resolução'],evidenciaRevisao:['mapa/cartões/resumo'],pendenciasCriticas:[]};
 assert.deepEqual(validationErrors(full),[]);
 assert.deepEqual(validationErrors({...full,pendenciasCriticas:['questão ambígua']}),['pendenciasCriticas']);
});

test('persisted evidence retains critical findings and cannot validate them away',()=>{
 const base=[{id:'rlm_8-c01',...empty}];
 const reviewed=applyEvidenceOverlay(base,{'rlm_8-c01':{
  nivel:'VALIDADO',evidenciaTeoria:['bloco'],evidenciaFonte:['seção'],
  exerciciosValidados:['questão'],evidenciaRevisao:['mapa'],pendenciasCriticas:['gabarito ambíguo'],
 }});
 assert.deepEqual(validationErrors(reviewed[0]),['pendenciasCriticas']);
 assert.deepEqual(base[0].pendenciasCriticas,[]);
});

test('orphaned evidence and evidence with a different row identity are rejected',()=>{
 const base=[{id:'rlm_8-c01',...empty}];
 assert.throws(()=>applyEvidenceOverlay(base,{'rlm_8-c99':{nivel:'VALIDADO'}}),/sem competência/);
 assert.throws(()=>applyEvidenceOverlay(base,{'rlm_8-c01':{id:'por_1-c01'}}),/Identidade/);
});
