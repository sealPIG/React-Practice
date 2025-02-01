// 生命週期、props 傳遞、redux

import React from 'react'
import { Provider } from 'react-redux'
import { Outter } from './Tools'
import { reduxStore } from '../Redux/components'
import { Param } from '../Redux/functions'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }

    console.log('[Home] Constructor')
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )

    console.log('[Home] Mounting')
  }

  componentWillUnmount() {
    console.log('[Home] Unmounting')
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    console.log('[Home] Render')

    return (
      <Outter title='Home' subTitle={this.state.date.toLocaleTimeString()}>
        <Provider store={reduxStore}>
          <Param />
        </Provider>
      </Outter>
    )
  }
}

export default Home