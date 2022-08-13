import {useEffect, useState} from "react";

export function GithubUser({username = "folvin"}) {
    const [githubData, setGithubData] = useState();

    async function fetchGithubUser(username) {
        const response = await fetch(
            `https://api.github.com/users/${username}`
        );
        const json = await response.json();
        console.log(json);
        setGithubData(() => {
            return json;
        });
    }

    useEffect(() => {
        fetchGithubUser(username);
    }, [username]);

    return (
        <div>
            {githubData && <h1>{githubData.name}</h1>}
        </div>
    );
}

/* Create a GithubUser component that fetches the data of the username passed as a prop, and renders some of the data 
within a div tag. The API to query is https://api.github.com/users/${username}. */
