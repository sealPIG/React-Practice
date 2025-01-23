// 生命週期、props 傳遞

import React from 'react'
// import ReactDOM from 'react-dom';

export default class Page2 extends React.Component { // ES6 class
  constructor(props) {
    super(props);
    this.state = { date: new Date() };

    console.log(this.state.date.toLocaleTimeString() + ' Page 2 Constructor');
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );

    console.log(this.state.date.toLocaleTimeString() + ' Page 2 Did Mount');
  }

  componentWillUnmount() {
    console.log(this.state.date.toLocaleTimeString() + ' Page 2 Will Unmount');
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div style={{ width: '90vw', height: '70vh', borderRadius: '20px', padding: '2rem', border: '2px solid White' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginRight: '20px', marginLeft: '20px' }}>
          <h1>Page 2</h1>
          <h2>{this.state.date.toLocaleTimeString()}</h2>
        </div>
        <p>This props test</p>
        <p>props : {this.props.name}</p>
      </div>
    );
  }
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Page2 />);