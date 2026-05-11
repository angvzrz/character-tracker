import { describe, it, expect } from 'vitest';
import { getAbilityModifiers, getModifier } from './abilityScores';

describe('getModifier', () => {
  it('returns 0 for score of 10', () => expect(getModifier(10)).toBe(0));
  it('returns +1 for score of 12', () => expect(getModifier(12)).toBe(1));
  it('returns -1 for score of 8', () => expect(getModifier(8)).toBe(-1));
  it('returns +4 for score of 18', () => expect(getModifier(18)).toBe(4));
  it('returns +5 for score of 20', () => expect(getModifier(20)).toBe(5));
});

describe('getAbilityModifiers', () => {
  it('calculates modifiers for a full set of ability scores', () => {
    const abilityScores = {
      strength: 19,
      dexterity: 5,
      constitution: 11,
      intelligence: 15,
      wisdom: 3,
      charisma: 7,
    };
    const modifiers = getAbilityModifiers(abilityScores);
    expect(modifiers).toEqual({
      strength: 4,
      dexterity: -3,
      constitution: 0,
      intelligence: 2,
      wisdom: -4,
      charisma: -2,
    });
  });
});
