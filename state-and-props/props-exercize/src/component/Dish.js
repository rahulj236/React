import React, { Component } from 'react';

class Dish extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         key: this.props.key
    //     }
    // }
    handleClick = (price,status)=>{
        console.log(`Price: ${price} \n Status: ${status}`);
    }
    render() {
        let { name, desc, price, status} = this.props.dish;
        // console.log("key..",this.props.key);
        return (
            
            <section onClick={()=>{this.handleClick(price,status)}} className="dish-card">
                
                <h2>
                    Name: {name}
                </h2>
                <p>
                    <b>Description: </b>  {desc};
                </p>
            </section>
        )
    }
}
export default Dish;