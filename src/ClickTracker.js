/* Create a ClickTracker component that renders three buttons. Implement a single event handler for all three buttons, 
and track of which button was pressed last. Show the last button that was pressed in an h1 tag within the ClickTracker 
component. 
Tip: you can use the event object to access the target property of the event. */

import React from "react";

export class ClickTracker extends React.Component {
    state = {
        lastClicked: "click a button!",
    };
    clickedButton = (e) => {
        this.setState({lastClicked: <img src={e.target.src ?? e.target.querySelector("img").src} />});
    };
    render() {
        return (
            <div>
                <button onClick={this.clickedButton}>
                    <img src="https://img.icons8.com/color/48/000000/italy.png" />
                </button>
                <button onClick={this.clickedButton}>
                    <img src="https://img.icons8.com/color/48/000000/france.png" />
                </button>
                <button onClick={this.clickedButton}>
                    <img src="https://img.icons8.com/color/48/000000/germany.png" />
                </button>
                <h1>{this.state.lastClicked}</h1>
            </div>
        );
    }
}
