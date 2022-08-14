import {useState, useEffect} from "react";

export function useGithubUser(username) {
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

    return {
        githubData: githubData,
    };
}
