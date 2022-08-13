import {useState} from "react";

export function useCounter() {
    const [counter, setCounter] = useState(0);

    function incrementCounter() {
        setCounter((counter) => {return counter + 1})
    }

    function decrementCounter() {
        setCounter((counter) => {return counter - 1})
    }

    function resetCounter() {
        setCounter(0)
    }


    return {
        counter: counter,
        incrementCounter: incrementCounter,
        decrementCounter: decrementCounter,
        resetCounter: resetCounter,
    };
}
