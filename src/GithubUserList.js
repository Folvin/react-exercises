import {useState} from "react";
import {Link, Outlet} from "react-router-dom";

export function GithubUserList() {
    const [usernames, setUsernames] = useState([]);

    function addingUsername(e) {
        const inputValue = e.target.previousSibling.value;
        if (usernames.includes(inputValue)) {
            alert("user already rendered");
            return;
        }
        setUsernames((usernames) => {
            return [...usernames, inputValue];
        });
    }

    return (
        <div>
            <ul>
                {!!usernames.length &&
                    usernames.map((username) => (
                        <li>
                            <Link key={username} to={username}>
                                render github of {username}
                            </Link>
                        </li>
                    ))}
            </ul>
            <input type="text" />
            <button onClick={addingUsername}>fetch user</button>
            <Outlet />
        </div>
    );
}
