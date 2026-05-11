import { describe, expect, it } from 'vitest';
import { getInitiative } from './initiative';
import type { AbilityModifiers } from './abilityScores';

const mockModifiers: AbilityModifiers = {
  strength: 0,
  dexterity: 3,
  constitution: 0,
  intelligence: 0,
  wisdom: 0,
  charisma: 0,
};

describe('getInitiative', () => {
  it('returns the dexterity modifier as initiative', () =>
    expect(getInitiative(mockModifiers)).toBe(3));
});
