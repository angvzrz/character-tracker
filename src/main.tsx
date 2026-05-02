import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { useCharacterStore } from './store/character.store.ts';
import { mockCharacter } from './mocks/characters.ts';

useCharacterStore.getState().setCharacters({ '1': mockCharacter });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
