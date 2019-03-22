import React, {Component} from 'react';
 
class Header extends Component{
    render(){
        console.log("inside header..",this.props);
        return(
            <header className="header" >
                <h1>
                    Header
                    <p>{this.props.disp_counter}</p>
                </h1>
                <h3>

                </h3>
            </header>
        )
    }
}
export default Header;