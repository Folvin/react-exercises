import React from "react";

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
                <button onClick={this.incrementCounter}>increment</button>
                <h2>{this.state.counter}</h2>
            </div>
        );
    }
}

/* Create a ClickCounter class component that increments a counter every time a user clicks on a button. 
Render both the current value of the counter and the button within the ClickCounter component. */
