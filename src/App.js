import {useState} from "react";
import {Counter} from "./Counter";

export function App() {
    const [counterToggle, setCounterToggle] = useState(true);
    function toggleHandler() {
        setCounterToggle(toggle => !toggle)
    }
    return (
        <div>
            <button onClick={toggleHandler}>toggle counter</button>
            {counterToggle && <Counter />}
        </div>
    );
}
