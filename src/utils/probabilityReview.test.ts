import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const lesson=JSON.parse(fs.readFileSync('data/app_data.json','utf8')).lessons.find((l:any)=>l.id==='rlm_8');
function answer(id:string):string {
 const q=lesson.blocks.flatMap((b:any)=>b.questions).find((q:any)=>q.auditId===`probabilidade-${id}`);
 assert.ok(q,`Questão não localizada: ${id}`);
 return q.options[q.ans];
}
function numberAnswer(id:string):number{return Number(answer(id).match(/\d+/)![0]);}
function fractionAnswer(id:string):number{
 const a=answer(id).match(/(\d+)\/(\d+)/)!;
 return Number(a[1])/Number(a[2]);
}

test('probability exercises agree with enumeration of labeled elementary outcomes',()=>{
 const exactlyOne=Array.from({length:30},(_,i)=>i+1).filter(n=>(n%4===0)!==(n%6===0));
 assert.equal(fractionAnswer('exatamente-um'),exactlyOne.length/30);
 for(const [id,colors,predicate] of [
  ['cores-ordem',[...Array(6).fill('a'),...Array(4).fill('v')],(a:string,b:string)=>a==='a'&&b==='v'],
  ['caminhos',[...Array(3).fill('a'),...Array(2).fill('v')],(a:string,b:string)=>a!==b],
 ] as const){
  let total=0,favorable=0;
  for(let i=0;i<colors.length;i++)for(let j=0;j<colors.length;j++)if(i!==j){total++;if(predicate(colors[i],colors[j]))favorable++;}
  assert.equal(fractionAnswer(id),favorable/total);
 }
});

test('stock guarantees are minimal across every feasible composition of a draw',()=>{
 for(const [id,caps,success] of [
  ['estoque',[8,12,15],(a:number,b:number,c:number)=>Math.max(a,b,c)>=10],
  ['cada-cor',[10,8,5],(a:number,b:number,c:number)=>Math.min(a,b,c)>=2],
 ] as const){
  const n=numberAnswer(id),failures=new Set<number>();
  for(let a=0;a<=caps[0];a++)for(let b=0;b<=caps[1];b++)for(let c=0;c<=caps[2];c++)if(!success(a,b,c))failures.add(a+b+c);
  assert.ok(failures.has(n-1),`${id}: N−1 precisa admitir contraexemplo`);
  assert.ok(!failures.has(n),`${id}: N precisa garantir a meta`);
 }
});

test('staged-motion answer agrees with simulation, and circular marks do not duplicate the start',()=>{
 let height=0,day=0;
 do{day++;height+=4;if(height>=11)break;height-=1;}while(day<100);
 assert.equal(numberAnswer('subida'),day);
 const points=new Set(Array.from({length:25},(_,i)=>(i*25)%600));
 assert.equal(numberAnswer('circuito'),points.size);
});
