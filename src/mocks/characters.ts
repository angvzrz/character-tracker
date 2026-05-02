import type { Character } from '@/store/character.store';

export const mockCharacter: Character = {
  id: '1',
  name: 'Astarion',
  level: 5,
  proficiencyBonus: 3,
  characterClass: 'Rogue',
  subclass: 'Arcane Trickster',
  race: 'Elf',
  background: 'Criminal',
  hp: {
    current: 34,
    max: 38,
    temp: 0,
  },
  abilityScores: {
    strength: 10,
    dexterity: 18,
    intelligence: 14,
    charisma: 16,
    wisdom: 10,
    constitution: 12,
  },
};
