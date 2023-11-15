import { createAsyncThunk } from '@reduxjs/toolkit';
import { repoSerial } from '../services/api.repo.got';
import { CharacterStructure } from '../models/character';

// Thunk -> función devuelve un actionCreator
// Parámetros
// - nombre acción
// - function action creator

// Tipado
// - retorno de la función -> payload de la acción síncrona
// - parámetros de la función

export const loadCharacterThunk = createAsyncThunk<CharacterStructure[], repoSerial>(
  'tasks/load',
  async (repo) => {
    const characters = await repo.getCharacters();
    return characters;
  }
); // => {
// type:  'tasks/load'
// payload: tasks
// }

export const updateTaskThunk = createAsyncThunk<
  CharacterStructure,
  {
    repo: repoSerial;
    name: CharacterStructure['name'];
    updatedCharacter: Partial<CharacterStructure>;
  }
>('tasks/update', async ({ repo, name, updatedCharacter }) => {
  const finalCharacter = await repo.updateCharacter(name, updatedCharacter);
  return finalCharacter;
});

