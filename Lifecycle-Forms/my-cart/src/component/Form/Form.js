import React, {Component} from 'react';
import './Form.css'

class Form extends Component{
    constructor(){
        super();
        this.state={
            itemData:""
        }
    }
    handleOnChange = (e)=>{

        const {itemData}= this.state;
        console.log("itemdata is ...",itemData);
        this.setState({
            itemData: e.target.value
        });
    }
    render(){
        return(
            <div className="form">
                <form onSubmit={(event)=>this.props.handleOnSubmit(event,this.state.itemData)}>

                    <input type="text" 
                    name="itemData"
                    placeholder="Enter item and price seperated by a - (Hyphen)"
                    value={this.state.itemData}
                    onChange={this.handleOnChange}
                    />

                    <input type="submit" value="Add Item"/>
                
                </form>
            </div>
        )
    }
}
export default Form