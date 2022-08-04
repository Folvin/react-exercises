import React from "react";
import {UncontrolledLogin} from "./UncontrolledLogin";

export class App extends React.Component {
    state = {
        loginState: {
            username: "",
            password: "",
            remember: false,
        },
    };

    loginStateSaver = (state) => {
        this.setState({loginState: state});
    }

    render() {
        return (
            <div>
                <UncontrolledLogin loginStateSaver={this.loginStateSaver} />
            </div>
        );
    }
}
