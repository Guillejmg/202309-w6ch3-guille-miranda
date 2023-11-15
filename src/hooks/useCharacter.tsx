import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useCallback, useMemo } from "react";
import { repoSerial } from "../services/api.repo.got"; 
import * as ac from '../slices/got.slice'
import { CharacterStructure } from "../models/character";

export function useCharacters (){
  const characters: any = useSelector<RootState>((state) => state.charactersState.characters)
  const dispatch = useDispatch();

  const repo = useMemo (() => new repoSerial(),[]);

  const loadCharacters = useCallback(async () => {
    try {
 
      const loadedCharacters = await repo.getCharacters();
  
      dispatch(ac.load(loadedCharacters));
    } catch (error) {
      console.log((error as Error).message);
    }
  }, [repo]);

  const updateCharacter = async (name: CharacterStructure['name'], character: Partial<CharacterStructure>) => {
    try {
      const updatedCharacter = await repo.updateCharacter(name, character);
      console.log(updatedCharacter);

      dispatch(ac.update(updatedCharacter));
    } catch (error) {
      console.log((error as Error).message);
    }
  };
  return {
    loadCharacters,
    updateCharacter,
    characters
  }
}
