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
    },
    // editMethod: (state, action) => {},
    deleteMethod: (state, action) => {
      state.methods = state.methods.filter((method) => method.id !== action.payload)
    },
    copyMethod: (state, action) => {
      state.methods.push({
        ...action.payload,
        id: crypto.randomUUID(),
        definations: {
          ...action.payload.definations,
          name: {
            ...action.payload.definations.name,
            val: `${action.payload.definations.name.val} copy`
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
export const { createMethod, setSelectedMethod,  deleteMethod, copyMethod } =
  methodSlice.actions

export default methodSlice.reducer
