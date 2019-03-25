import React, { Component } from 'react';
import Counter from './component/Counter';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <h1 className="header">Counter</h1>
        <Counter />
        <Counter />
        <Counter />
      </div>
    );
  }
}

export default App;
