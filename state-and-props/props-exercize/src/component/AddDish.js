import React,{Component} from 'react';

class AddDish extends Component{
    constructor(props){
        super(props);
        this.state = {
            dish:{}
        }
    }
    handleOnChange = (e)=>{

        let newDish={};
        newDish[e.target.name]= e.target.value

        this.setState({
            dish:{
                ...this.state.dish,
                ...newDish
            }
        })
    }

    render(){
        // console.log("dish..",this.state.dish);
        return(
            <section className="addData">
                <h2>Add Data</h2>
                <form onSubmit={(event)=>this.props.handleAddDish(event,this.state.dish)}>
                    <label htmlFor="name">Name: </label>
                    <input name="name" type="text" value={this.state.dish.name} onChange={this.handleOnChange}/>
                    
                    <label htmlFor="desc">Description: </label>
                    <input name="desc" type="text" value={this.state.dish.desc} onChange={this.handleOnChange}/>
                    
                    <label htmlFor="price">Price: </label>
                    <input name="price" type="number" value={this.state.dish.price} onChange={this.handleOnChange}/>
                    
                    <label htmlFor="status">Status:</label>
                    <input name="status" type="text" value={this.state.dish.status} onChange={this.handleOnChange}/>
                    
                    <input type="submit" value="Add Dish"/>
                </form>
            </section>
        )
    }
}
export default AddDish;
