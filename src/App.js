import {useCounter} from "./useCounter";

export function App() {
    const {counter, incrementCounter, decrementCounter, resetCounter} =
        useCounter();
    return (
        <div>
            <h1>counter is: {counter}</h1>
            <button onClick={incrementCounter}>increment</button>
            <button onClick={decrementCounter}>decrement</button>
            <button onClick={resetCounter}>reset</button>
        </div>
    );
}
