import React from "react";
import {TodoList} from "./TodoList";

export class App extends React.Component {
    state = {
        prova: "provaaaa"
    }
    render() {
        return (
            <TodoList
                render={(items, buttonHandler) => {
                    return (
                        <ul>
                            {items.map((item, index) => {
                                return (
                                    <li key={index}>
                                        {item}

                                        <button
                                            name="remove"
                                            onClick={buttonHandler}>
                                            remove
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    );
                }}
            />
        );
    }
}
