// 生命週期、props 傳遞

import React from 'react'
import { Select, Space } from 'antd'
import { Outter } from './Tools'

function Selector() {
  const handleChange = (param) => {
    console.log('Param selected ' + param)
  }

  return (
    <div className='selector'>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h3>Param select for page 3</h3>
        <Space wrap>
          <Select
            onChange={handleChange}
            defaultValue="Param1"
            style={{ width: 120 }}
            options={[
              { value: 'Param1', label: 'Param1', },
              { value: 'Param2', label: 'Param2', },
              { value: 'Param3', label: 'Param3', },
            ]}
          />
        </Space>
      </div>
      <hr />
    </div>
  )
}

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
        {/* <div className='home-selector'>
          <Selector></Selector>
        </div> */}
      </Outter>
    )
  }
}

export default Home