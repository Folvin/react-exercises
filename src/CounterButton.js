import React from "react";

export class CounterButton extends React.Component {

    render() {
        return (
            <button
                onClick={this.props.incrementCounter} >{`times clicked: ${this.props.counter}`}</button>
        );
    }
}

/* Extract the button within a new component called CounterButton and render 
it within the ClickCounter component. How can you pass the onClick event handler to the CounterButton component? */
