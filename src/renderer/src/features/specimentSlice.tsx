import { createSlice } from '@reduxjs/toolkit'

export interface SpecimenState {
  speciments: any[]
  selectedSpeciment: { [key: string]: { [key: string]: { [key: string]: any } } }
}

const initialState: SpecimenState = {
  speciments: [],
  selectedSpeciment: {}
}

export const specimenSlice = createSlice({
  name: 'speciments',
  initialState,
  reducers: {
    addSpeciment: (state, action) => {
      const method = action.payload
      const speciment = { id: crypto.randomUUID(), method: method }

      state.speciments = [...state.speciments, { ...speciment }]
    },
    saveCustomVariables: (state, action) => {
      state.speciments.map((spcmnt, idx) => {
        if (spcmnt.id === action.payload.id) {
          state.speciments[idx] = action.payload
          return
        }
      })
    },
    setSelectedSpeciment: (state, action) => {
      state.selectedSpeciment = action.payload
    },
    updateDefinationName: (state, action) => {
      state.selectedSpeciment = {
        ...state.selectedSpeciment,
        method: {
          ...state.selectedSpeciment.method,
          definations: {
            ...state.selectedSpeciment.method.definations,
            name: {
              ...state.selectedSpeciment.method.definations.name,
              val: action.payload
            }
          }
        }
      }
    },
    updatePhysicalPropertiesRadious: (state, action) => {
      state.selectedSpeciment = {
        ...state.selectedSpeciment,
        method: {
          ...state.selectedSpeciment.method,
          physicalProperties: {
            ...state.selectedSpeciment.method.physicalProperties,
            radious: {
              ...state.selectedSpeciment.method.physicalProperties.radious,
              val: action.payload
            }
          }
        }
      }
    },
    updatePhysicalPropertiesWidth: (state, action) => {
      state.selectedSpeciment = {
        ...state.selectedSpeciment,
        method: {
          ...state.selectedSpeciment.method,
          physicalProperties: {
            ...state.selectedSpeciment.method.physicalProperties,
            width: {
              ...state.selectedSpeciment.method.physicalProperties.width,
              val: action.payload
            }
          }
        }
      }
    }
  }
})

// Aksiyon yaratıcıları her bir durum indirgeyici işlevi için otomatik olarak oluşturulur
export const {
  saveCustomVariables,
  addSpeciment,
  setSelectedSpeciment,
  updateDefinationName,
  updatePhysicalPropertiesRadious,
  updatePhysicalPropertiesWidth
} = specimenSlice.actions

export default specimenSlice.reducer
