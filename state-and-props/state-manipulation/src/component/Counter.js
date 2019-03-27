import React,{Component} from 'react'
import '../Counter.css'

class Counter extends Component{
    
    render(){
        console.log(this.props.data.index);
        return(
        <div className="counter-card">
            <h2>
                {this.props.data.name}
            </h2>
            <h3>
                {this.props.data.count}
            </h3>
            
            <button className="btn" onClick={()=>this.props.handleIncrease(this.props.data.index)}>Increase</button>
            <button className="btn" onClick={()=>this.props.handleDecrease(this.props.data.index)}>Decrease</button>
        </div>
        )
    }
}
export default Counter;