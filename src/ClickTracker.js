import React from "react";

export class ClickTracker extends React.Component {
    state = {
        lastClicked: "click a button!",
    };
    clickedButton = (e) => {
        this.setState({
            lastClicked: (
                <img src={e.target.src ?? e.target.querySelector("img").src} />
            ),
        });
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
