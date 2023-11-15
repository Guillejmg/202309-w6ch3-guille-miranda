import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CharacterStructure } from "../models/character";

type CharacterState = {
  characters: CharacterStructure[];
}

const initialState: CharacterState = {
  characters:[],
};

const charactersSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    
    load: (state, {payload}: PayloadAction<CharacterStructure[]>) => {
      state.characters= payload
      return state
    },
    update: (state: CharacterState, { payload }: PayloadAction<CharacterStructure>) => {
      state.characters[state.characters.findIndex((item) => item.name === payload.name)] =
        payload;
      return state;
    }
  },
});

export default charactersSlice.reducer;
export const { load, update } = charactersSlice.actions;
