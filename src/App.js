import React from "react";
import {Hello} from "./Hello";
import {Welcome} from "./Welcome";

export class App extends React.Component {
    render() {
        return (
            <div>
                <Hello />
                <Welcome name={<strong>Chiara</strong>} age={20}/>
            </div>
        );
    }
}
