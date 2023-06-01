import { createSlice } from '@reduxjs/toolkit'

export interface MethodState {
  methods: any[]
  selectedMethod: object
}

const initialState: MethodState = {
  methods: [],
  selectedMethod: {}
}

export const methodSlice = createSlice({
  name: 'method',
  initialState,
  reducers: {
    createMethod: (state, action) => {
      state.methods.push(action.payload)
      console.log(action.payload)
    },
    setSelectedMethod: (state, action) => {
      state.selectedMethod = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { createMethod,setSelectedMethod } = methodSlice.actions

export default methodSlice.reducer
