import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface TestState {
  tests: any
}

const initialState: TestState = {
  tests: []
}

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    completeTest: (state, action: PayloadAction<object>) => {
      state.tests.push({
        id: crypto.randomUUID(),
        name: 'test name ...',
        speciments: action.payload
      })
    }
  }
})

export const { completeTest } = testSlice.actions

export default testSlice.reducer
