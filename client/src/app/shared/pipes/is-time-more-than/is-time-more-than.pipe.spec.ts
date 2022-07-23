import { IsTimeMoreThanPipe } from './is-time-more-than.pipe';

describe('IsTimeMoreThanPipe', () => {
  it('create an instance', () => {
    const pipe = new IsTimeMoreThanPipe();
    expect(pipe).toBeTruthy();
  });
});
