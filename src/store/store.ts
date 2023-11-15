import { configureStore } from '@reduxjs/toolkit'
import  charactersReduce from '../slices/got.slice'

export const store = configureStore({
  reducer: {
    charactersState: charactersReduce
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
