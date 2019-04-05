import React, { Component } from 'react';
import Counter from './component/Counter';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [
        { name: "Counter 1", count: 0, index: 0 },
        { name: "Counter 2", count: 0, index: 1 },
        { name: "Counter 3", count: 0, index: 2 }
      ]
    }
  }

  handleIncrease = (index) => {
    const newCounter = this.state.counters.map((element) => {
      if (element.index === index) {
        element.count = element.count + 1;
        return element
      }
      return element
    });
    this.setState({
      counters: newCounter
    })
  }

  handleDecrease = (index) => {
    const newCounter = this.state.counters.map((element) => {
      if (element.index === index) {
        element.count = element.count - 1;
        return element
      }
      return element
    });
    this.setState({
      counters: newCounter
    })
  }

  increaseAll = () => {
    const newCounter = this.state.counters.map((element) => {
      element.count = element.count + 1;
      return element
    });
    this.setState({
      counters: newCounter
    });
  }

  decreaseAll = () => {
    const newCounter = this.state.counters.map((element) => {
      element.count = element.count - 1;
      return element
    });
    this.setState({
      counters: newCounter
    });
  }

  render() {
    return (
      <div className="App">
      <h1 className="headline">Counter</h1>
        <div>
          {this.state.counters.map((element, index) => {
            return (
              <Counter
                data={element}
                key={index}
                handleIncrease={this.handleIncrease}
                handleDecrease={this.handleDecrease}
              />
            );
          })}
        </div>
          <button className="btn btn-lt" onClick={this.increaseAll}>Increase All</button>
          <button className="btn btn-lt" onClick={this.decreaseAll}>Decrease All</button>

      </div>
    );
  }
}

export default App;
