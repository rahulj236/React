import React, {Component} from 'react';
import Dish from './Dish';

class DishList extends Component{
    render(){
        return(
            <section>
                {this.props.dishes.map((item,index)=>{
                    return <Dish dish={item} key={index} />
                })}
            </section>
        )
    }
}
export default DishList;