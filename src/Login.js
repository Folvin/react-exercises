/* Create a Login component containing three inputs: a username input, a password input and a remember checkbox. 
All three inputs should be controlled components */

import React from "react";

export class Login extends React.Component {
    state = {
        username: undefined,
        password: undefined,
        remember: undefined,
    };

    inputHandler = (e) => {
        const name = e.target.name
        const type = e.target.type
        this.setState({[name]: (type === "checkbox") ? e.target.checked : e.target.value})
    };

    render() {
        return (
            <div>
                <input
                    onChange={this.inputHandler}
                    name="username"
                    type="text"
                    placeholder="username"
                />
                <input
                    onChange={this.inputHandler}
                    name="password"
                    type="password"
                    placeholder="password"
                />
                <input
                    onChange={this.inputHandler}
                    name="remember"
                    type="checkbox"
                />
                <span>remember me</span>
            </div>
        );
    }
}
