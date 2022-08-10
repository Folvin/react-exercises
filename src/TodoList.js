import React, {createRef} from "react";

export class TodoList extends React.Component {
    state = {
        items: ["item A", "item B", "item C", "item D", "item E", "item F"],
    };

    inputRef = createRef();

    removeHandler = (e) => {
        const allLiEl = e.target.closest("ul").children;
        const currentLiEl = e.target.closest("li");
        const currentLiElIndex = Array.from(allLiEl).indexOf(currentLiEl);
        const clonedItemsState = [...this.state.items];
        clonedItemsState.splice(currentLiElIndex, 1);
        this.setState({items: clonedItemsState});
    };

    itemManager = (e) => {
        if (e.target.name === "add") {
            let inputValue = this.inputRef.current.value;
            const newItemsState = [...this.state.items, inputValue];
            this.setState({items: newItemsState});
        }
        this.inputRef.current.value = "";
    };

    render() {
        return (
            <div>
                {this.props.render(this.state.items, this.removeHandler)}
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
