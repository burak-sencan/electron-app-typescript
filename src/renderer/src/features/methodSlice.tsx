import { createSlice } from '@reduxjs/toolkit'
import { Method } from '@renderer/types'

export interface MethodState {
  methods: Method[]
  selectedMethod: any
}

const initialState: MethodState = {
  methods: [],
  selectedMethod: {}
}

export const methodSlice = createSlice({
  name: 'method',
  initialState,
  reducers: {
    setMethods: (state, action) => {
      state.methods = action.payload
    },
    createMethod: (state, action) => {
      state.methods.push(action.payload)
    },
    // editMethod: (state, action) => {},
    deleteMethod: (state, action) => {
      state.methods = state.methods.filter((method) => method.id !== action.payload)
    },
    copyMethod: (state, action) => {
      state.methods.push({
        ...action.payload,
        id: crypto.randomUUID(),
        general: {
          ...action.payload.general,
          name: {
            ...action.payload.general.name,
            val: `${action.payload.general.name.val} copy`
          }
        }
      })
    },
    setSelectedMethod: (state, action) => {
      state.selectedMethod = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setMethods, createMethod, setSelectedMethod, deleteMethod, copyMethod } =
  methodSlice.actions

export default methodSlice.reducer
