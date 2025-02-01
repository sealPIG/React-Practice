import React from 'react'
import { connect } from 'react-redux'
import { Select, Space } from 'antd'

import { CHANGE_PARAM } from './components'

const changeParam = (param) => {
  console.log('[Redux] changeParam')

  return {
    type: CHANGE_PARAM,
    payload: { param: param }
  }
}

class ConnectParam extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Space wrap style={{ marginRight: '50px' }}>
          <Select
            onChange={this.props.changeParam.bind()}
            defaultValue={this.props.param}
            style={{ width: 120 }}
            options={[
              { value: 'Param1', label: 'Param1', },
              { value: 'Param2', label: 'Param2', },
              { value: 'Param3', label: 'Param3', },
              { value: 'Param4', label: 'Param4', },
              { value: 'Param5', label: 'Param5', },
            ]}
          />
        </Space>
        <p>Param = {this.props.param}</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  param: state.param
})

const mapDispatchToProps = dispatch => {
  console.log('[Redux] mapDispatchToProps')

  return {
    changeParam: param => dispatch(changeParam(param))
  }
}

const Param = connect(mapStateToProps, mapDispatchToProps)(ConnectParam)

export { Param }