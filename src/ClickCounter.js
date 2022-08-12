import { useState } from "react";

export function ClickCounter({ini}) {
    const [counter, setCounter] = useState(0)

    function increment() {
        setCounter((counter) => {return counter + 1})
    }
    return (
        <div>
            <button type="button" onClick={increment}>increment counter</button>
            <h1>you clicked {counter} times</h1>
        </div>
    );
}
