import { describe, expect, it } from 'vitest';
import { getArmorClass } from './armorClass';

describe('getArmorClass', () => {
  const modifiers = {
    dexterity: 3,
    constitution: 2,
    wisdom: 1,
    intelligence: 0,
    charisma: -1,
    strength: 4,
  };

  it('calculates armor class correctly', () => expect(getArmorClass(modifiers)).toBe(13));
});
