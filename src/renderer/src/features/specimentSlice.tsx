import { createSlice } from '@reduxjs/toolkit'

export interface SpecimenState {
  speciments: any[]
}

const initialState: SpecimenState = {
  speciments: []
}

export const specimenSlice = createSlice({
  name: 'speciments',
  initialState,
  reducers: {
    addSpeciment: (state) => {
      state.speciments = [...state.speciments, { id: crypto.randomUUID(), data: [] }]
    },
    save: (state, action) => {
      console.log(action.payload)
    }
  }
})

// Aksiyon yaratıcıları her bir durum indirgeyici işlevi için otomatik olarak oluşturulur
export const { save, addSpeciment } = specimenSlice.actions

export default specimenSlice.reducer
