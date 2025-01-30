// 生命週期、props 傳遞

import React from 'react'
import Outter from './Tools'

export default class Page2 extends React.Component { // ES6 class
  constructor(props) {
    super(props);
    this.state = { date: new Date() };

    console.log('[Page 2] Constructor');
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );

    console.log('[Page 2] Mounting');
  }

  componentWillUnmount() {
    console.log('[Page 2] Unmounting');
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    console.log('[Page 2] Render');

    return (
      <Outter title='Page 2' subTitle={this.state.date.toLocaleTimeString()}>
        <p>This is props test</p>
        <p>props : {this.props.name}</p>
      </Outter>
    );
  }
}