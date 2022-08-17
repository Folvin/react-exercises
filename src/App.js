import {Link, Route, Routes} from "react-router-dom";
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
                <Route path="*" element={<h1>route not found</h1>} />
            </Routes>
            <ul>
                <li><Link to="/">go back to /</Link></li>
                <li><Link to="counter">render ClickCounter</Link></li>
                <li><Link to="users/folvin">render GithubUser</Link></li>
                <li><Link to="nowhere">go nowhere</Link></li>
            </ul>
        </div>
    );
}
