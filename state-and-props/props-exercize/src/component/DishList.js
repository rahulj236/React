import React, { Component } from 'react';
import Dish from './Dish';

class DishList extends Component {
   
    render() {
        return (
            <section>
                {
                    this.props.dishes.map((item, index) => {
                        // console.log("index..",index);
                        return <Dish key={index} dish={item} />
                    })
                }
            </section>
        )
    }
}
export default DishList;