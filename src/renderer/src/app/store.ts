import { configureStore } from '@reduxjs/toolkit'
import authReducer from '@renderer/features/authSlice'
import chartReducer from '@renderer/features/chartSlice'
import specimentReducer from '@renderer/features/specimentSlice'
import methodReducer from '@renderer/features/methodSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    chart: chartReducer,
    speciments: specimentReducer,
    method: methodReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
