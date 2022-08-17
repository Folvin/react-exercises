import {Route, Routes} from "react-router-dom";
import {ClickCounter} from "./ClickCounter";
import {Welcome} from "./Welcome";
import {GithubUser} from "./GithubUser"

export function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Welcome name="Usuku" />} />
                <Route path="/counter" element={<ClickCounter />} />
                <Route path="users/:username" element={<GithubUser />} />
            </Routes>
        </div>
    );
}
