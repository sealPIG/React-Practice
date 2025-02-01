/**
 * Redux 基礎教學 - https://medium.com/enjoy-life-enjoy-coding/react-%E5%8F%8A-redux-%E9%96%93%E7%9A%84%E6%97%A5%E5%B8%B8-1-%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8-215436d14430
 * Redux 事件處理 - https://medium.com/enjoy-life-enjoy-coding/react-%E8%88%87%E4%BB%96%E7%9A%84%E5%BF%AB%E6%A8%82%E5%B0%8F%E5%A4%A5%E4%BC%B4-redux-%E4%BA%8B%E4%BB%B6%E8%99%95%E7%90%86-handling-events-8dd35545f7b9
 * Redux Saga 基本用法 - https://medium.com/enjoy-life-enjoy-coding/redux-saga-redux-%E7%95%8C%E7%9A%84%E9%9D%9E%E5%90%8C%E6%AD%A5%E6%95%91%E6%98%9F-%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95-d38ce3e64308
 * 
 * 這裡的架構很怪，為了避免警告所以拆成兩份
 */

import { createStore } from 'redux'

const CHANGE_PARAM = 'CHANGE_PARAM'

const initState = {
  param: 'Param2',
}

const reducer = (state = initState, action) => {
  console.log('[Redux] param reducer')

  switch (action.type) {
    case CHANGE_PARAM:
      return { ...state, param: action.payload.param }
    default:
      return state
  }
}

const reduxStore = createStore(reducer)

export { reduxStore, CHANGE_PARAM }