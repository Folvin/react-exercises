import React from "react";

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
        return <h1>counter: {this.state.count}</h1>;
    }
}
