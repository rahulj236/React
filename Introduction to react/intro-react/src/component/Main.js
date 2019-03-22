import React, {Component} from 'react';

class Main extends Component{
    render(){
        console.log(this.props);
        return(
            <main className="main">
                <h3>
                    MAIN
                </h3>
                <button onClick={this.props.increaseCounter} className="btn">
                    Click Me
                </button>
            </main>
        )
    }
}
export default Main;