import React from "react";

export class UncontrolledLogin extends React.Component {

    constructor(props) {
        super(props);
        this.autoFocus = true
    }

    state = {
        username: "",
        password: "",
        remember: false,
    };

    formHandler = (e) => {
        e.preventDefault();

        const [username, password, remember] = Array.from(
            e.target.querySelectorAll("input"),
            (inputElement) => {
                return inputElement.type === "checkbox"
                    ? inputElement.checked
                    : inputElement.value;
            }
        );

        this.setState(
            {
                username: username,
                password: password,
                remember: remember,
            },
            () => {
                this.props.loginStateSaver(this.state);
            }
        );
    };

    render() {
        return (
            <form onSubmit={this.formHandler}>
                <input name="username" autoFocus={this.autoFocus} type="text" />
                <input name="password" type="password" />
                <input name="remember" type="checkbox" />
                <button type="submit">login</button>
                <button type="reset">reset</button>
            </form>
        );
    }
}
