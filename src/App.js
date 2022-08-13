import {ClickCounter} from "./ClickCounter";

export function App() {

    function onCounterChange(currentCounter) {
        console.log(currentCounter)
    }

    return (
        <div>
            <ClickCounter onCounterChange={onCounterChange}/>
        </div>
    );
}
