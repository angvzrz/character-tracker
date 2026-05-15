import type { SkillProficiencies } from '@/rules/skills';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface AbilityScores {
  strength: number;
  dexterity: number;
  intelligence: number;
  charisma: number;
  wisdom: number;
  constitution: number;
}

export interface Character {
  id: string;
  name: string;
  level: number;
  proficiencyBonus: number;
  characterClass: string;
  subclass: string;
  race: string;
  background: string;
  hp: {
    current: number;
    max: number;
    temp: number;
  };
  abilityScores: AbilityScores;
  skills: SkillProficiencies;
}

export interface CharacterState {
  characters: Record<string, Character>;
  activeCharacterId: string | null;
  setCharacters: (characters: Record<string, Character>) => void;
  updateCharacter: (id: string, updatedCharacter: Partial<Character>) => void;
  setActiveCharacter: (id: string | null) => void;
}

export const useCharacterStore = create<CharacterState>()(
  persist(
    (set) => ({
      characters: {},
      activeCharacterId: null,
      setCharacters: (characters) => set({ characters }),
      updateCharacter: (id, updatedCharacter) =>
        set((state) => ({
          characters: {
            ...state.characters,
            [id]: {
              ...state.characters[id],
              ...updatedCharacter,
            },
          },
        })),
      setActiveCharacter: (id) => set({ activeCharacterId: id }),
    }),
    {
      name: 'character-storage',
    },
  ),
);
