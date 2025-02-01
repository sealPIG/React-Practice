/**
 * React 狀態管理套件比較與原理實現 - https://medium.com/%E6%89%8B%E5%AF%AB%E7%AD%86%E8%A8%98/a-comparison-of-react-state-management-libraries-ba61db07332b
 * 
 * 看起來是很好的寫法，但是沒看懂
 */

import { createSlice, configureStore } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    incremented: state => {
      state.value += 1
    },
    decremented: state => {
      state.value -= 1
    }
  }
})

export const { incremented, decremented } = counterSlice.actions

const store = configureStore({
  reducer: counterSlice.reducer
})

store.dispatch(incremented())
store.dispatch(decremented())