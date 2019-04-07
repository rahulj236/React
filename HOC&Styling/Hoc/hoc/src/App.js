import React, { Component } from 'react';
import './App.css';
import Login from './component/Login/Login';
import Child from './component/Child/Child';
import MyContext from './MyContext';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginUser: {
        isLogin: 'false'
      }
    }

  }

  handleOnSubmit = (event, loginDetails) => {
    event.preventDefault();
    let isLogin = 'true'
    let newUser = { ...loginDetails, isLogin }

    this.setState({
      loginUser: { ...newUser }
    })

  }
  render() {
    console.log("######333", this.state.loginUser);
    return (
      <div className="App">
        <Router>

          <Route
            exact
            path="/"
            render={(props) => <Login {...props} handleOnSubmit={this.handleOnSubmit} />}
          />

          <MyContext.Provider value={this.state.loginUser}>
            <PrivateRoute
              path={'/userDetails'}
              component={Child}
              isLogin={this.state.loginUser.isLogin}
            />
          </MyContext.Provider>

        </Router>

        {/* <Login handleOnSubmit={this.handleOnSubmit} /> */}

        {/* <MyContext.Provider value={this.state.loginUser}>
          <Child />
        </MyContext.Provider> */}
      </div>
    );
  }
}
export default App;

const PrivateRoute = ({ component: Component, isLogin, ...restProps }) => {
  console.log("$$$$$",isLogin);
  return (
    <Route {...restProps} render={(props) => isLogin ?  <Component {...props} /> : <Redirect to={'/'} />} />
  ) 
}