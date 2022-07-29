import React from "react";
import {CounterButton} from "./CounterButton";

export class ClickCounter extends React.Component {
    state = {
        counter: 0,
    };

    incrementCounter = () => {
        this.setState((state) => ({counter: state.counter + 1}));
    };

    render() {
        return (
            <div>
                <CounterButton
                    incrementCounter={this.incrementCounter}
                    counter={this.state.counter}
                />
            </div>
        );
    }
}
