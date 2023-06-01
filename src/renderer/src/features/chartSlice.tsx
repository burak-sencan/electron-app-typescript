import { createSlice } from '@reduxjs/toolkit'

export interface ChartState {
  timeArr: number[]
  elengationArr: number[]
  loadArr: number[]
}

const initialState: ChartState = {
  timeArr: [],
  loadArr: [],
  elengationArr: []
}

export const chartSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {
    update: (state, action) => {
      const { time, load, elengation } = action.payload
      console.log(time, load, elengation)
      state.timeArr.push(time)
      state.loadArr.push(load)
      state.elengationArr.push(elengation)
    },
    stop: (state) => {
      state.timeArr = []
      state.loadArr = []
      state.elengationArr = []
    }
  }
})

// Action creators are generated for each case reducer function
export const { update, stop } = chartSlice.actions

export default chartSlice.reducer
