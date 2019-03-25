import React, { Component } from 'react';

class Dish extends Component {
    constructor() {
        super();

    }
    // printConsole = (price)=>{
    //     console.log("Price",price);
    // }
    render() {
        // console.log(this.props.dish);
        let { name, desc, price, status } = this.props.dish
        return (

            // <section onClick={this.printConsole(price)}>
            <section>
                <h2>
                    Name: {name};
                </h2>
                <p>
                    Desc: {desc};
                </p>
                <p>
                    Price: {price};
                </p>
                <p>
                    Status: {status};
                </p>
            </section>
        )
    }
}
export default Dish;