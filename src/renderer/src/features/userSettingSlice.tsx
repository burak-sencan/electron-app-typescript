import { createSlice } from '@reduxjs/toolkit'
import _ from 'lodash'

export interface SettingState {
  defaultSettingsState?: {
    appearance: {
      showRowData: true
    }
    language: string
  }
  settingsState: any
  unsavedTempSetting: any
  isChanged: boolean
}

const initialState: SettingState = {
  defaultSettingsState: {
    appearance: {
      showRowData: true
    },
    language: 'en'
  },
  settingsState: {},
  unsavedTempSetting: {},
  isChanged: false
}

export const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    saveSettings: (state, action) => {
      state.settingsState = action.payload
    },
    creaeteUnsavedTempSettings: (state) => {
      state.unsavedTempSetting = state.settingsState
    },
    // General
    saveLanguage: (state, action) => {
      state.unsavedTempSetting.language = action.payload
    },

    // Appearence
    saveAppearence: (state, action) => {
      state.unsavedTempSetting.appearance.showRowData = action.payload
    },
    changed: (state) => {
      if (!_.isEqual(state.settingsState, state.unsavedTempSetting)) state.isChanged = true
      else {
        state.isChanged = false
      }
    }
  }
})

// Action creators are generated for each case reducer function
export const { saveSettings, creaeteUnsavedTempSettings, saveLanguage, saveAppearence, changed } =
  settingSlice.actions

export default settingSlice.reducer
