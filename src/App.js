import React from "react";
import {ClickCounter} from "./ClickCounter";
import {ClickTracker} from "./ClickTracker";
import {Counter} from "./Counter";
import {Hello} from "./Hello";
import {InteractiveWelcome} from "./InteractiveWelcome";
import {Login} from "./Login";
import {Welcome} from "./Welcome";

export class App extends React.Component {
    render() {
        return (
            <div>
                <Hello />
                <Welcome name={<strong>Jhon</strong>} age={20} />
                <Counter
                    counterInitialValue={6}
                    counterIncrement={10}
                    counterInterval={500}
                />
                <ClickCounter />
                <ClickTracker />
                <InteractiveWelcome />
                <Login />
            </div>
        );
    }
}
