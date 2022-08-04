import React, {createRef} from "react";

export class TodoList extends React.Component {
    state = {
        items: ["item A", "item B", "item C", "item D", "item E", "item F"],
    };

    inputRef = createRef();

    itemManager = (e) => {
        if (e.target.name === "remove") {
            const allLiEl = e.target.closest("ul").children;
            const liEl = e.target.closest("li");
            const liElIndex = Array.from(allLiEl).indexOf(liEl);
            const newItemsState = [...this.state.items];
            newItemsState.splice(liElIndex, 1);
            this.setState({items: newItemsState});
        } else {
            if (e.target.name === "add") {
                let inputValue = this.inputRef.current.value;
                const newItemsState = [...this.state.items, inputValue];
                this.setState({items: newItemsState});
            }
            this.inputRef.current.value = "";
        }
    };

    render() {
        return (
            <div>
                <ul>
                    {this.state.items.map((item, index) => {
                        return (
                            <li key={index}>
                                {item}
                                <button
                                    name="remove"
                                    onClick={this.itemManager}>
                                    remove
                                </button>
                            </li>
                        );
                    })}
                </ul>
                <input ref={this.inputRef} type="text" />
                <button name="add" onClick={this.itemManager} type="button">
                    add item
                </button>
                <button name="reset" onClick={this.itemManager} type="button">
                    reset
                </button>
            </div>
        );
    }
}
