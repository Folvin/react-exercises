import {useEffect, useState} from "react";

export function ClickCounter({onCounterChange}) {
    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter((counter) => {
            return counter + 1;
        });
    }

    useEffect(() => {
        onCounterChange(counter);
    }, [counter]);

    return (
        <div>
            <button type="button" onClick={increment}>
                increment counter
            </button>
            <h1>you clicked {counter} times</h1>
        </div>
    );
}
