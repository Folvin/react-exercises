import React from "react";
import Container from "./Container";

export class App extends React.Component {
    render() {
        return (
            <Container>
                <ul>
                    <li>item 1</li>
                    <li>item 2</li>
                    <li>item 3</li>
                </ul>
            </Container>
        );
    }
}
