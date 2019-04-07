import React, {Component} from 'react';
import Hoc from '../Hoc/Hoc';

class Child extends Component{
    
    render(){
        console.log("@@@@@@@2",this.props.value);
        let {username,phone,isLogin} = this.props.value;
        return(
            
            <fieldset>
                <legend>User Details</legend>
                Name: {username}
                <br/>
                Phone: {phone}
                <br/>
                Authenticated: {isLogin}
            </fieldset>
        )
    }
}

export default Hoc(Child)