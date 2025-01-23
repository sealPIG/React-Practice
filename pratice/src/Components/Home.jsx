// 生命週期、props 傳遞

import React from 'react'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };

    console.log(this.state.date.toLocaleTimeString() + ' Home Constructor');
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );

    console.log(this.state.date.toLocaleTimeString() + ' Home Did Mount');
  }

  componentWillUnmount() {
    console.log(this.state.date.toLocaleTimeString() + ' Home Will Unmount');
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div style={{ width: '90vw', height: '70vh', borderRadius: '20px', padding: '2rem', border: '2px solid White' }}>
        <h1>{this.state.date.toLocaleTimeString()}</h1>
      </div>
    );
  }
}

export default Home