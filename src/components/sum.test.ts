import { sum } from '@/components/sum';

test('add number', () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(2, 3)).not.toBe(6);
});
