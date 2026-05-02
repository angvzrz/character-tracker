import './App.css';
import { Badge } from './components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './components/ui/card';
import { Separator } from './components/ui/separator';
import { ABILITY_ABBREVIATIONS, getAbilityModifiers } from './rules/abilityModifier';
import { useCharacterStore } from './store/character.store';

function App() {
  const character = useCharacterStore((state) => state.characters['1']);
  const modifiers = getAbilityModifiers(character.abilityScores);
  const abilityAbbr = Object.entries(ABILITY_ABBREVIATIONS);

  return (
    <div className="App">
      <h1>D&D Character Tracker</h1>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>{character.name}</CardTitle>
            <Badge variant="outline">Level {character.level}</Badge>
          </div>
          <CardDescription>
            {character.race} {character.characterClass} ({character.subclass})
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex items-center gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Background: </span>
              <span>{character.background}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Proficiency: </span>
              <span className="text-primary font-medium">
                +{character.proficiencyBonus}
              </span>
            </div>
          </div>

          <Separator />

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Hit Points</span>
              <span>
                {character.hp.current} / {character.hp.max}
                {character.hp.temp > 0 && (
                  <span className="text-primary ml-1">(+{character.hp.temp})</span>
                )}
              </span>
            </div>
          </div>

          <Separator />

          <div className="grid grid-cols-6 gap-2">
            {abilityAbbr.map(([key, abbr]) => {
              const score =
                character.abilityScores[key as keyof typeof character.abilityScores];
              const modifier = modifiers[key as keyof typeof modifiers];
              return (
                <div
                  key={key}
                  className="flex flex-col items-center p-2 rounded-md border bg-card"
                >
                  <span className="text-xs text-muted-foreground">{abbr}</span>
                  <span className="text-lg font-semibold text-primary">+{modifier}</span>
                  <span className="text-xs text-muted-foreground">{score}</span>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
