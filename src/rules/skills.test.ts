import { describe, expect, it } from 'vitest';
import { getSkillBonus } from './skills';

describe('getSkillBonus', () => {
  it('none: returns ability modifier only', () =>
    expect(getSkillBonus('none', 3, 3)).toBe(3));

  it('proficient: adds proficiency bonus', () =>
    expect(getSkillBonus('proficient', 3, 3)).toBe(6));

  it('expertise: doubles proficiency bonus', () =>
    expect(getSkillBonus('expertise', 3, 3)).toBe(9));
});
