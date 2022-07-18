import React from "react";
import {CounterDisplay} from "./CounterDisplay";

export class Counter extends React.Component {
    state = {
        count: this.props.counterInitialValue ?? 0,
    };

    componentDidMount() {
        setInterval(() => {
            this.setState((state) => ({
                count:
                    (state.count + (this.props.counterIncrement ?? 1) >
                        (this.props.counterInitialValue * 10 || -Infinity) &&
                        this.props.counterInitialValue) ||
                    state.count + (this.props.counterIncrement ?? 1),
            }));
        }, this.props.counterInterval ?? 1000);
    }

    render() {
        return <CounterDisplay count={this.state.count} />;
    }
}
