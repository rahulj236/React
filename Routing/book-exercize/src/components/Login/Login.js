import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginUser: {
                username: '',
                password: ''
            }
        }
    }

    handleOnchange = (e) => {
        e.preventDefault();
        this.setState({
            loginUser: { ...this.state.loginUser, [e.target.name]: [e.target.value] }
        })
    }

    

    render() {
        // console.log(isLogin, '#############');
        return (
            <div>
                <h1>Login Page</h1>

                <form onSubmit={(event)=>{
                        this.props.history.push('/booklist')
                        this.props.handleOnSubmit(this.state,event)
                    }}>
                    <label htmlFor="username">Username: </label>
                    <input type="text" name="username" id="username" value={this.state.loginUser.username}
                        onChange={this.handleOnchange}
                    />

                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password"
                        value={this.state.loginUser.password}
                        onChange={this.handleOnchange}
                    />

                    <input type="submit" value="Login" />
                </form>
            </div>
        )
    }
}
export default Login




