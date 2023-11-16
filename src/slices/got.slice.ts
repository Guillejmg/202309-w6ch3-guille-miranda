import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CharacterStructure } from "../models/character";
import { loadCharacterThunk, updateCharacterThunk } from "../slices/got.thunks";

type CharacterState = {
  characters: CharacterStructure[];
  pageState: 'idle' | 'loading' | 'error';
}

const initialState: CharacterState = {
  characters: [],
  pageState: "idle"
};

const charactersSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
      builder.addCase(
      loadCharacterThunk.fulfilled,
      (state: CharacterState, { payload }: PayloadAction<CharacterStructure[]>) => {
        state.characters = payload;
        state.pageState = 'idle';
        return state;
        }),
      builder.addCase(loadCharacterThunk.pending, (state: CharacterState) => {
        state.pageState = 'loading';
        return state;
        }),
      builder.addCase(loadCharacterThunk.rejected, (state: CharacterState) => {
        state.pageState = 'error';
        return state;
        }),
      builder.addCase(
        updateCharacterThunk.fulfilled,
        (state: CharacterState, { payload }: PayloadAction<CharacterStructure>) => {
        state.characters[state.characters.findIndex((item) => item.id === payload.id)] = payload;
          return state;
        }
        )
    
    },
});

export default charactersSlice.reducer;
