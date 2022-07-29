import React from "react";
import {Welcome} from "./Welcome";

export class InteractiveWelcome extends React.Component {
    state = {
        welcomeName: undefined,
    };

    handleInput = (e) => {
        this.setState({welcomeName: e.target.value});
        console.log(e.target)
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

/* Create an InteractiveWelcome component that renders an input tag and the Welcome component. Pass the current 
content of the input tag to the name prop of the Welcome component. The input tag should be a controlled component. */
