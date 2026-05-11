import type { AbilityScores } from '@/store/character.store';

export interface AbilityModifiers {
  strength: number;
  dexterity: number;
  intelligence: number;
  charisma: number;
  wisdom: number;
  constitution: number;
}

export const ABILITY_ABBREVIATIONS: Record<keyof AbilityScores, string> = {
  strength: 'STR',
  dexterity: 'DEX',
  intelligence: 'INT',
  charisma: 'CHA',
  wisdom: 'WIS',
  constitution: 'CON',
};

export function getModifier(score: number): number {
  return Math.floor((score - 10) / 2);
}

export function getAbilityModifiers(abilityScores: AbilityScores): AbilityModifiers {
  return {
    strength: getModifier(abilityScores.strength),
    dexterity: getModifier(abilityScores.dexterity),
    intelligence: getModifier(abilityScores.intelligence),
    charisma: getModifier(abilityScores.charisma),
    wisdom: getModifier(abilityScores.wisdom),
    constitution: getModifier(abilityScores.constitution),
  };
}
