import React,{Component} from 'react'
import '../Counter.css'

class Counter extends Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }
    handleIncrease = ()=>{
        this.setState({
            count: ++this.state.count
        })
    }
    handleDecrease = ()=>{
        this.setState({
            count: --this.state.count
        })
    }
    render(){
        return(
        <div className="counter-card">
            <h2>
                {this.state.count}
            </h2>
            <button className="btn" onClick={this.handleIncrease}>Increase</button>
            <button className="btn" onClick={this.handleDecrease}>Decrease</button>
        </div>
        )
    }
}
export default Counter;