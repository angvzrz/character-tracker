import type { AbilityScores } from '@/store/character.store';

export const SKILL_KEYS = [
  'acrobatics',
  'animalHandling',
  'arcana',
  'athletics',
  'deception',
  'history',
  'insight',
  'intimidation',
  'investigation',
  'medicine',
  'nature',
  'perception',
  'performance',
  'persuasion',
  'religion',
  'sleightOfHand',
  'stealth',
  'survival',
] as const;

export type SkillKey = (typeof SKILL_KEYS)[number];
export type ProficiencyLevel = 'none' | 'proficient' | 'expertise';
export type SkillProficiencies = Record<SkillKey, ProficiencyLevel>;

export const SKILL_ABILITY_MAP: Record<SkillKey, keyof AbilityScores> = {
  acrobatics: 'dexterity',
  animalHandling: 'wisdom',
  arcana: 'intelligence',
  athletics: 'strength',
  deception: 'charisma',
  history: 'intelligence',
  insight: 'wisdom',
  intimidation: 'charisma',
  investigation: 'intelligence',
  medicine: 'wisdom',
  nature: 'intelligence',
  perception: 'wisdom',
  performance: 'charisma',
  persuasion: 'charisma',
  religion: 'intelligence',
  sleightOfHand: 'dexterity',
  stealth: 'dexterity',
  survival: 'wisdom',
};

export const SKILL_UI_NAMES: Record<SkillKey, string> = {
  acrobatics: 'Acrobatics',
  animalHandling: 'Animal Handling',
  arcana: 'Arcana',
  athletics: 'Athletics',
  deception: 'Deception',
  history: 'History',
  insight: 'Insight',
  intimidation: 'Intimidation',
  investigation: 'Investigation',
  medicine: 'Medicine',
  nature: 'Nature',
  perception: 'Perception',
  performance: 'Performance',
  persuasion: 'Persuasion',
  religion: 'Religion',
  sleightOfHand: 'Sleight of Hand',
  stealth: 'Stealth',
  survival: 'Survival',
};

export function getSkillBonus(
  proficiency: ProficiencyLevel,
  abilityModifier: number,
  proficiencyBonus: number,
) {
  switch (proficiency) {
    case 'none':
      return abilityModifier;
    case 'proficient':
      return abilityModifier + proficiencyBonus;
    case 'expertise':
      return abilityModifier + proficiencyBonus * 2;
  }
}
