import type { AbilityModifiers } from './abilityScores';

export function getInitiative(modifiers: AbilityModifiers): number {
  return modifiers.dexterity;
}
