import React, { Component } from 'react';
import Form from './component/Form/Form';
import ItemCart from './component/Cart/ItemCart';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    }

  }
  handleOnSubmit = (event, itemData) => {
    event.preventDefault();

    let name = itemData.split("-")[0];
    let price = itemData.split("-")[1];
    console.log("$$44", name, price);
    this.setState({
      items: [...this.state.items,
      {
        name: name,
        price: price,
        quantity: 1
      }]
    })
  }

  handleOnIncrease = (id) => {
    let arr = this.state.items;
    arr[id].quantity++;
    this.setState({
      items: arr
    })
  }

  handleOnDecrease = (id) => {
    let arr = this.state.items;
    if (arr[id].quantity > 1) {
      arr[id].quantity--;
      this.setState({
        items: arr
      });
    }
    else {
      this.handleOnDelete(id);
    }
  }

  handleOnDelete = (id) => {
    let arr = this.state.items;
    arr.splice(id, 1)
    this.setState({
      items: arr
    })
    // console.log("obj..",temp)
    // console.log("id....",id)
  }

  totalPrice = () => {
    let total = 0;
    for (let i = 0; i < this.state.items.length; i++) {
      total += this.state.items[i].price * this.state.items[i].quantity
    }
    return total;
  }

  render() {
    console.log("state", this.state);
    return (
      <div className="App">
        <h1 className="heading">My Cart</h1>
        <Form handleOnSubmit={this.handleOnSubmit} />
        {
          this.state.items.map((item, index) => {
            return <ItemCart
              item={item}
              key={index}
              id={index}
              handleOnIncrease={this.handleOnIncrease}
              handleOnDecrease={this.handleOnDecrease}
              handleOnDelete={this.handleOnDelete}
            />
          })
        }
        <section className="total">
          <ul>
            <li>
              Total
            </li>
            <li>
              {this.totalPrice()}
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
