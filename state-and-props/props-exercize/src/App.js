import React, { Component } from 'react';
import DishList from './component/DishList';
import fishes from './component/SampleDish';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      fishes:fishes
    }
  }
  render() {
    return (
      <section className="App">
        <DishList dishes = {this.state.fishes}/>
      </section>
    );
  }
}

export default App;
