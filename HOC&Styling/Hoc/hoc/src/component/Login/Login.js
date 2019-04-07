import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            loginUser: {
                username: '',
                password: '',
                phone: ''
            }
        }
    }

    HandleOnChange = (e) => {
        this.setState({
            loginUser: { ...this.state.loginUser, [e.target.name]: e.target.value }

        })
    }

    render() {
        return (
            <form action="" onSubmit={(event) => {
                this.props.history.push('/userDetails');
                this.props.handleOnSubmit(event, this.state.loginUser)
            }}>
                <label htmlFor="name">Username</label>
                <input
                    type="text"
                    name="username"
                    id="name"
                    value={this.state.username}
                    onChange={this.HandleOnChange}
                />

                <label htmlFor="pwd">Password</label>
                <input
                    type="password"
                    name="password"
                    id="pwd"
                    value={this.state.password}
                    onChange={this.HandleOnChange}
                />

                <label htmlFor="mobileNo">Phone No.</label>
                <input
                    type="number"
                    name="phone"
                    id="mobileNo"
                    value={this.state.phone}
                    onChange={this.HandleOnChange}
                />

                <input type="submit" value="Login" />
            </form>
        )
    }
}
export default Login