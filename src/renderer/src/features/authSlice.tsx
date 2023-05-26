import { createSlice } from '@reduxjs/toolkit'

export interface AuthState {
  password: string
  isLogged: boolean
}

const initialState: AuthState = {
  password: '',
  isLogged: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      if (state.password === '0000') {
        state.isLogged = true
      }
    },
    logout: (state) => {
      state.isLogged = false
    },
    onChange: (state, action) => {
      state.password = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, logout, onChange } = authSlice.actions

export default authSlice.reducer
