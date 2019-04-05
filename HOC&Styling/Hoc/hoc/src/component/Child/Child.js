import React, {Component} from 'react';
import MyContext from '../../MyContext';

export default class Child extends Component{
    constructor(){
        super();
        this.state={
            social_life:'girlfriend'
        }
    }
 
    render(){
        console.log(this.context);
        return(
            <div>
                
            </div>
        )
    }
}


Child.contextType=MyContext;
