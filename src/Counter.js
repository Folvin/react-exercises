import React from "react";
import {CounterDisplay} from "./CounterDisplay";

export class Counter extends React.Component {
    state = {
        count: this.props.counterInitialValue ?? 0,
    };

    interval;
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState((state) => ({
                count: state.count + (this.props.counterIncrement ?? 1),
            }));
        }, this.props.counterInterval ?? 1000);
    }

    componentDidUpdate(prevProps, PrevState) {
        if (PrevState.count > ((this.props.counterInitialValue ?? +Infinity) * 10)) {
            this.setState({count: this.props.counterInitialValue})
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return <CounterDisplay count={this.state.count} />;
    }
}
