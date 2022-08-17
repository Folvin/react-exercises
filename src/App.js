import {Route, Routes} from "react-router-dom";
import {Welcome} from "./Welcome";

export function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Welcome name="Usuku" />} />
            </Routes>
        </div>
    );
}
