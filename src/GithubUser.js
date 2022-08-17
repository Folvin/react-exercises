import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export function GithubUser() {
    const {username} = useParams();
    const [githubData, setGithubData] = useState();

    async function fetchGithubUser(username) {
        const response = await fetch(
            `https://api.github.com/users/${username}`
        );
        const json = await response.json();
        setGithubData(() => {
            return json;
        });
    }

    useEffect(() => {
        fetchGithubUser(username);
    }, [username]);

    return <div>{githubData && <h1>{githubData.name}</h1>}</div>;
}
