import {Link, Route, Routes} from "react-router-dom";
import {ClickCounter} from "./ClickCounter";
import {Welcome} from "./Welcome";
import {GithubUser} from "./GithubUser";
import {GithubUserList} from "./GithubUserList";

export function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Welcome name="Usuku" />} />
                <Route path="/counter" element={<ClickCounter />} />
                <Route path="users" element={<GithubUserList />}>
                    <Route index element={<p>add a user and select it</p>} />
                    <Route path=":username" element={<GithubUser />} />
                </Route>
                <Route path="*" element={<h1>route not found</h1>} />
            </Routes>
            <ul>
                <li>
                    <Link to="/">go back to /</Link>
                </li>
                <li>
                    <Link to="counter">render ClickCounter</Link>
                </li>
                <li>
                    <Link to="users">render github input fetcher</Link>
                </li>
                <li>
                    <Link to="nowhere">go nowhere</Link>
                </li>
            </ul>
        </div>
    );
}
