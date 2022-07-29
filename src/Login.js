import React from "react";

export class Login extends React.Component {
    state = {
        username: undefined,
        password: undefined,
        remember: false,
    };

    inputHandler = (e) => {
        const name = e.target.name;
        const type = e.target.type;
        this.setState({
            [name]: type === "checkbox" ? e.target.checked : e.target.value,
        });
    };

    buttonHandler = () => {
        this.props.onLogin(this.state);
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
                <button
                    onClick={this.buttonHandler}
                    disabled={!(this.state.username && this.state.password)}>
                    login
                </button>
            </div>
        );
    }
}

/* Add a "login" button to the Login component. This button should be disabled as long as the username and password 
inputs are empty. When clicked, the event handler attached to the button should call an onLogin function passed as a 
prop to the Login component, passing it the state. */
