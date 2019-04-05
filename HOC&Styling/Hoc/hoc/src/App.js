import React, { Component } from 'react';
import './App.css';
import Child from './component/Child/Child';
import MyContext from './MyContext';



class App extends Component {
  render() {
    return (
      <div>
        <MyContext.Provider value='hello'> 
          <Child/>
        </MyContext.Provider>
      </div>
    );
  }
}



export default App;
