import {describe,it,expect} from 'vitest';
import {sessions,detail} from './data';

describe('synthetic evidence',()=>{
 it('keeps test reports and source evidence tied to their event',()=>{
  const event=sessions[0].events.find(e=>e.id==='test')!;
  expect(detail(event,'Tests')).toContain('17 passed · 1 failed');
  expect(detail(event,'Evidence')).toContain('17 passed, 1 failed');
  expect(detail(event,'Decisions')).toContain('No agent-stated rationale');
 });
 it('distinguishes follow-up test evidence from unavailable verification',()=>{
  const event=sessions[1].events.find(e=>e.id==='test')!;
  expect(detail(event,'Tests')).toContain('18 passed');
  expect(detail(event,'Tests')).toContain('not captured');
 });
 it('preserves missing file and test evidence as unknown',()=>{
  const [read,command]=sessions[2].events;
  expect(detail(read,'Context')).toContain('not captured');
  expect(detail(command,'Tests')).toContain('unavailable');
 });
});
