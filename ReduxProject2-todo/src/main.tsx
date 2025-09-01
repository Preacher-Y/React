import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { Provider, useSelector, type TypedUseSelectorHook } from 'react-redux'
import todoReducer from './features/todoListSlice'
import userReducer from './features/fetchUserSlice'
import { postReducer } from './features/fetchPostSlice.ts'

const UserPostReducer = combineReducers(
  {
    user:userReducer,
    post:postReducer
  }
)


const store = configureStore({
  reducer: {
    todoList: todoReducer,
    userPost: UserPostReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const AppSelector:TypedUseSelectorHook<RootState> = useSelector

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
