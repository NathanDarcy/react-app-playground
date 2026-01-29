import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: string[] = []

const exampleSlice = createSlice({
  name: 'examples',
  initialState,
  reducers: {
    addExampleString(state, action: PayloadAction<string>) {
      state.push(action.payload)
    },
  },
})

export const { addExampleString } = exampleSlice.actions
export default exampleSlice.reducer
