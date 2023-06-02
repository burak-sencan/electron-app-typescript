import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface TestState {
  tests: object[]
}

const initialState: TestState = {
  tests: []
}

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    startTest: (state, action: PayloadAction<object>) => {
      state.tests.push(action.payload)
    }
  }
})

export const { startTest } = testSlice.actions

export default testSlice.reducer
