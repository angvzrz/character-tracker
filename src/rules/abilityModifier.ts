import type { AbilityScores, Character } from '@/store/character.store';

export const ABILITY_ABBREVIATIONS: Record<keyof AbilityScores, string> = {
  strength: 'STR',
  dexterity: 'DEX',
  intelligence: 'INT',
  charisma: 'CHA',
  wisdom: 'WIS',
  constitution: 'CON',
};

function getModifier(score: number): number {
  return Math.floor((score - 10) / 2);
}

export function getAbilityModifiers(abilityScores: Character['abilityScores']) {
  return {
    strength: getModifier(abilityScores.strength),
    dexterity: getModifier(abilityScores.dexterity),
    intelligence: getModifier(abilityScores.intelligence),
    charisma: getModifier(abilityScores.charisma),
    wisdom: getModifier(abilityScores.wisdom),
    constitution: getModifier(abilityScores.constitution),
  };
}
