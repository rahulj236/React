import React, { Component } from 'react';
import './App.css';
import Login from './component/Login/Login';
import Child from './component/Child/Child';
import MyContext from './MyContext';



class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loginUser:{}
    }

  }

  handleOnSubmit=(event,loginDetails)=>{
    event.preventDefault();
    this.setState({
      loginUser: loginDetails
    })

  }
  render() {
    console.log("######333",this.state.loginUser);
    return (
      <div>
        <Login handleOnSubmit={this.handleOnSubmit}/>

        <MyContext.Provider value="">
          <Child />
        </MyContext.Provider>
      </div>
    );
  }
}



export default App;
