import React, { Component } from 'react';
import Header from './component/Header';
import Main from './component/Main';
import Aside from './component/Aside';
import Footer from './component/Footer';
import './App.css';

class App extends Component {
  constructor(counter) {
    super();
    this.state = {
      counter: 0
    }
  }

  increaseCounter = () => {
    this.setState({
      counter: ++this.state.counter
    });
    console.log("value increased.. ", this.state.counter);
  }

  render() {
    console.log("Counter... ", this.counter);
    return (
      <div className="App">
        <Header disp_counter={this.state.counter} />
        <div className="container">
          <Main increaseCounter={this.increaseCounter} />
          <Aside />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;
