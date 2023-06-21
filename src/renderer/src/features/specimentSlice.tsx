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
          general: {
            ...state.selectedSpeciment.method.general,
            name: {
              ...state.selectedSpeciment.method.general.name,
              val: action.payload
            }
          }
        }
      }
    },
    updateSpecimenSpecimenLabel: (state, action) => {
      state.selectedSpeciment = {
        ...state.selectedSpeciment,
        method: {
          ...state.selectedSpeciment.method,
          specimen: {
            ...state.selectedSpeciment.method.specimen,
            specimenLabel: {
              ...state.selectedSpeciment.method.specimen.specimenLabel,
              val: action.payload
            }
          }
        }
      }
    },

    updateSpecimenSpecimenWidth: (state, action) => {
      state.selectedSpeciment = {
        ...state.selectedSpeciment,
        method: {
          ...state.selectedSpeciment.method,
          specimen: {
            ...state.selectedSpeciment.method.specimen,
            specimenWidth: {
              ...state.selectedSpeciment.method.specimen.specimenWidth,
              val: action.payload
            }
          }
        }
      }
    },
    updateSpecimenSpecimenThickness: (state, action) => {
      state.selectedSpeciment = {
        ...state.selectedSpeciment,
        method: {
          ...state.selectedSpeciment.method,
          specimen: {
            ...state.selectedSpeciment.method.specimen,
            specimenThickness: {
              ...state.selectedSpeciment.method.specimen.specimenThickness,
              val: action.payload
            }
          }
        }
      }
    },
    updateSpecimenSpecimenLenght: (state, action) => {
      state.selectedSpeciment = {
        ...state.selectedSpeciment,
        method: {
          ...state.selectedSpeciment.method,
          specimen: {
            ...state.selectedSpeciment.method.specimen,
            specimenLenght: {
              ...state.selectedSpeciment.method.specimen.specimenLenght,
              val: action.payload
            }
          }
        }
      }
    },
    updateTestControlPreload: (state, action) => {
      state.selectedSpeciment = {
        ...state.selectedSpeciment,
        method: {
          ...state.selectedSpeciment.method,
          testControl: {
            ...state.selectedSpeciment.method.testControl,
            preload: {
              ...state.selectedSpeciment.method.testControl.preload,
              val: action.payload
            }
          }
        }
      }
    }
  }
})

export const {
  saveCustomVariables,
  addSpeciment,
  setSelectedSpeciment,
  updateDefinationName,
  updateSpecimenSpecimenLabel,
  updateSpecimenSpecimenWidth,
  updateSpecimenSpecimenThickness,
  updateSpecimenSpecimenLenght,
  updateTestControlPreload
} = specimenSlice.actions

export default specimenSlice.reducer
