import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from './components/Login/Login'
import userDetails from './components/UserDetails';
import BookList from './components/BookList/BookList'
import './App.css';
import BookDetails from './components/BookDetails/BookDetails';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false
    }
  }

  handleOnSubmit = (item,event) => {
    event.preventDefault();

  
    // let isLogin = false;
    for (let i in userDetails) {
        // console.log("username..", item.loginUser.username);
        // console.log("external..", userDetails[i].username);
        // console.log("password..", item.loginUser.password);
        // console.log("external..", userDetails[i].password);

        if (item.loginUser.username == userDetails[i].username && item.loginUser.password == userDetails[i].password) {
           
            
            this.setState({
              isLogin:true
            })
            break;
        }
    }
}
  
  render() {
    return (
      <div className="App">

        <Router>
          

          <Route
            exact
            path="/"
            render={(props) =>  <Login {...props} handleOnSubmit={this.handleOnSubmit}/> }
          />

          <PrivateRoute
            isLogin={this.state.isLogin}
            path="/booklist"
            component={BookList}
          />
          <PrivateRoute
            isLogin={this.state.isLogin}
            path="/bookDetails/:id"
            component={BookDetails}
          />
        </Router>


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