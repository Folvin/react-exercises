import React from "react";

export class Login extends React.Component {
    state = {
        username: "",
        password: "",
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

    resetField = () => {
        this.setState({
            username: "",
            password: "",
            remember: false,
        });
    };

    render() {
        return (
            <div>
                <input
                    onChange={this.inputHandler}
                    name="username"
                    type="text"
                    placeholder="username"
                    value={this.state.username}
                />
                <input
                    onChange={this.inputHandler}
                    name="password"
                    type="password"
                    placeholder="password"
                    value={this.state.password}
                />
                <input
                    onChange={this.inputHandler}
                    name="remember"
                    type="checkbox"
                    checked={this.state.remember}
                />
                <span>remember me</span>
                <button
                    onClick={this.buttonHandler}
                    disabled={!(this.state.username && this.state.password)}>
                    login
                </button>
                <button onClick={this.resetField}>reset</button>
            </div>
        );
    }
}
