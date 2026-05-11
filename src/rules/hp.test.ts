import { describe, expect, it } from 'vitest';
import { getHp } from './hp';

describe('hp rules', () => {
  it('calculates total hp correctly', () => {
    const currentHp = 30;
    const tempHp = 5;
    const totalHp = getHp(currentHp, tempHp);
    expect(totalHp).toBe(35);
  });
});
