import React, { Component } from 'react';
import DishList from './component/DishList';
import fishes from './component/SampleDish';
import AddDish from './component/AddDish'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fishes: fishes
    }
  }
  addFormData = (event,dish) => {
    event.preventDefault();

    console.log("dish data...",dish);
    let newFishes = this.state.fishes
    newFishes.push(dish);
    
    this.setState({
      fishes:newFishes
    })
  }
  render() {
    return (
      <section className="App">
      <h1>Food List</h1>
        <DishList dishes={this.state.fishes} />

        <AddDish  handleAddDish={this.addFormData} />

      </section>
    );
  }
}

export default App;
