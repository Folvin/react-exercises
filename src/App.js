import React from "react";
import { Counter } from "./Counter";
import {Hello} from "./Hello";
import {Welcome} from "./Welcome";

export class App extends React.Component {
    render() {
        return (
            <div>
                <Hello />
                <Welcome name={<strong>Jhon</strong>} age={18} />
                <Counter />
            </div>
        );
    }
}
