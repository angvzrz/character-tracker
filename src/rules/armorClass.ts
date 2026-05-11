import type { AbilityModifiers } from './abilityScores';

export function getArmorClass(modifiers: AbilityModifiers): number {
  return 10 + modifiers.dexterity;
}
