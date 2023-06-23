import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface LiveDataState {
  load: number
  elengation: number
}

const initialState: LiveDataState = {
  load: 0,
  elengation: 0
}

export const liveDataSlice = createSlice({
  name: 'liveData',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<{ loadData; elengationData }>) => {
      const { loadData, elengationData } = action.payload
      state.load = loadData
      state.elengation = elengationData
    }
  }
})

export const { setData } = liveDataSlice.actions

export default liveDataSlice.reducer
