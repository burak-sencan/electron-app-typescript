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
    addSpeciment: (state, action) => {
      const method = action.payload
      const speciment = {
        id: crypto.randomUUID()
        // definations: {
        //   name: {},
        //   defination: {}
        // },
        // physicalProperties: {
        //   width: {},
        //   radious: {}
        // },
        // calculations: {
        //   elengation: {},
        //   lastHeight: {}
        // },
        // testEnd: {
        //   break: {},
        //   lastLoad: {}
        // }
      }

      // Definations
      if (method.definations.name.custom) {
        speciment['definations']['name'] = {
          custom: method.definations.name.custom,
          customVal: method.definations.name.customVal,
          val: method.definations.name.val
        }
      }
      // if (method.definations.defination.custom) {
      //   speciment.definations.defination = {
      //     custom: method.definations.defination.custom,
      //     customVal: method.definations.defination.customVal,
      //     val: method.definations.defination.val
      //   }
      // }

      // Physical Properties
      // if (method.physicalProperties.width.custom) {
      //   speciment.physicalProperties.width = {
      //     custom: method.physicalProperties.width.custom,
      //     customVal: method.physicalProperties.width.customVal,
      //     val: method.physicalProperties.width.val
      //   }
      // }
      // if (method.physicalProperties.radious.custom) {
      //   speciment.physicalProperties.radious = {
      //     custom: method.physicalProperties.radious.custom,
      //     customVal: method.physicalProperties.radious.customVal,
      //     val: method.physicalProperties.radious.val
      //   }
      // }

      // // Calculations
      // if (method.calculations.elengation.custom) {
      //   speciment.calculations.elengation = {
      //     custom: method.calculations.elengation.custom,
      //     customVal: method.calculations.elengation.customVal,
      //     val: method.calculations.elengation.val
      //   }
      // }
      // if (method.calculations.lastHeight.custom) {
      //   speciment.calculations.lastHeight = {
      //     custom: method.calculations.lastHeight.custom,
      //     customVal: method.calculations.lastHeight.customVal,
      //     val: method.calculations.lastHeight.val
      //   }
      // }

      // // Test End
      // if (method.testEnd.break.custom) {
      //   speciment.testEnd.break = {
      //     custom: method.testEnd.break.custom,
      //     customVal: method.testEnd.break.customVal,
      //     val: method.testEnd.break.val
      //   }
      // }
      // if (method.testEnd.lastLoad.custom) {
      //   speciment.testEnd.lastLoad = {
      //     custom: method.testEnd.lastLoad.custom,
      //     customVal: method.testEnd.lastLoad.customVal,
      //     val: method.testEnd.lastLoad.val
      //   }
      // }
      state.speciments = [...state.speciments, { ...speciment }]
    },
    save: (state, action) => {
      console.log(action.payload)
      console.log(state.speciments)
    }
  }
})

// Aksiyon yaratıcıları her bir durum indirgeyici işlevi için otomatik olarak oluşturulur
export const { save, addSpeciment } = specimenSlice.actions

export default specimenSlice.reducer
