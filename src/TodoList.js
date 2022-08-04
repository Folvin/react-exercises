import React, {createRef} from "react";

export class TodoList extends React.Component {
    state = {
        items: ["item A", "item B", "item C", "item D", "item E", "item F"],
    };

    inputRef = createRef();

    itemAdder = (e) => {
        const inputValue = this.inputRef.current.value
        const newItemsState = [...this.state.items, inputValue]
        this.setState({items: [...newItemsState]})
    };

    render() {
        return (
            <div>
                <ul>
                    {this.state.items.map((item, index) => {
                        return <li key={index}>{item}</li>;
                    })}
                </ul>
                <input ref={this.inputRef} type="text" />
                <button onClick={this.itemAdder} type="button">
                    add item
                </button>
            </div>
        );
    }
}
