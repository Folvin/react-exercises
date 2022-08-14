import {useCallback, useState} from "react";

export function useCounter() {
    const [counter, setCounter] = useState(0);

    const incrementCounter = useCallback(
        function incrementCounter() {
            setCounter((counter) => counter + 1);
        },
        [counter]
    );

    const decrementCounter = useCallback(
        function decrementCounter() {
            setCounter((counter) => counter - 1);
        },
        [counter]
    );

    const resetCounter = useCallback(function resetCounter() {
        setCounter(0);
    }, []);

    return {
        counter: counter,
        incrementCounter: incrementCounter,
        decrementCounter: decrementCounter,
        resetCounter: resetCounter,
    };
}
