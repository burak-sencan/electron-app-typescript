import { createSlice } from '@reduxjs/toolkit'

export interface MethodState {
  methods: any[]
}

const initialState: MethodState = {
  methods: []
}

export const methodSlice = createSlice({
  name: 'method',
  initialState,
  reducers: {
    createMethod: (state, action) => {
      state.methods.push(action.payload)
    }
  }
})

// Action creators are generated for each case reducer function
export const { createMethod } = methodSlice.actions

export default methodSlice.reducer
