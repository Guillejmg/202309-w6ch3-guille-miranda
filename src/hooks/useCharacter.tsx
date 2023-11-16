import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/store";
import { useCallback, useMemo } from "react";
import { repoSerial } from "../services/api.repo.got"; 
import * as ac from '../slices/got.slice'
import { CharacterStructure } from "../models/character";
import { loadCharacterThunk, updateCharacterThunk } from "../slices/got.thunks";

export function useCharacters (){

  const dispatch = useDispatch<AppDispatch>();

  const repo = useMemo (() => new repoSerial(),[]);

  const loadCharacters = useCallback(async () => {
    try {
      dispatch(loadCharacterThunk(repo));
    } catch (error) {
      console.log((error as Error).message);
    }
  }, [repo]);

  const updateCharacter = async (id: CharacterStructure['id'], character: Partial<CharacterStructure>) => {
    try {
      dispatch(updateCharacterThunk({id, repo, updatedCharacter: character}));
    } catch (error) {
      console.log((error as Error).message);
    }
  };
  return {
    loadCharacters,
    updateCharacter
  }
}
