import React from "react";
import {CounterDisplay} from "./CounterDisplay";

export class Counter extends React.Component {
    state = {
        count: this.props.counterInitialValue ?? 0,
    };

    constructor(props) {
        super(props);
        setInterval(() => {
            this.setState((state) => ({
                count: state.count + (this.props.counterIncrement ?? 1),
            }));
        }, this.props.counterInterval ?? 1000);
    }

    render() {
        return <CounterDisplay count={this.state.count} />;
    }
}
