import React from "react";
import {Welcome} from "./Welcome";

export class InteractiveWelcome extends React.Component {
    state = {
        welcomeName: undefined,
    };

    handleInput = (e) => {
        this.setState({welcomeName: e.target.value});
        console.log(e.target);
    };

    render() {
        return (
            <div>
                <input onChange={this.handleInput} type="text" />
                <Welcome name={this.state.welcomeName || undefined} />
            </div>
        );
    }
}
