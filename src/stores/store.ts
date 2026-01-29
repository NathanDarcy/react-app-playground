import { configureStore } from '@reduxjs/toolkit'
import exampleReducer from '../features/example/exampleSlice'

export const store = configureStore({
  reducer: {
    examples: exampleReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
