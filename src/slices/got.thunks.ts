import { createAsyncThunk } from '@reduxjs/toolkit';
import { repoSerial } from '../services/api.repo.got';
import { CharacterStructure } from '../models/character';


export const loadCharacterThunk = createAsyncThunk<CharacterStructure[], repoSerial>(
  'tasks/load',
  async (repo) => {
    const characters = await repo.getCharacters();
    return characters;
  }
); 

export const updateCharacterThunk = createAsyncThunk<
  CharacterStructure,
  {
    repo: repoSerial;
    id: CharacterStructure['id'];
    updatedCharacter: Partial<CharacterStructure>;
  }
>('tasks/update', async ({ repo, id, updatedCharacter }) => {
  const finalCharacter = await repo.updateCharacter(id, updatedCharacter);
  return finalCharacter;
});
