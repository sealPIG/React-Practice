import React from 'react'
import { createStore } from 'redux'
import { connect, Provider } from 'react-redux'

import Outter from './Tools'

const initState = {
  param: ' param 2',
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const store = createStore(reducer)

class ConnectTitle extends React.Component {
  render() {
    return (
      <p>Param = {this.props.param}</p>
    )
  }
}

const mapStateToProps = state => ({
  param: state.param
})

const Title = connect(mapStateToProps)(ConnectTitle)

export default function Page2() {
  return (
    <Outter title='Page 2' subTitle='redux'>
      <Provider store={store}>
        <Title />
      </Provider>
    </Outter>
  )
}