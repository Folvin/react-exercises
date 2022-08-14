import {useState, useEffect} from "react";

export function useGithubUser(username) {
    const [githubData, setGithubData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    async function fetchGithubUser(username) {
        try {
            setLoading(true);
            const response = await fetch(
                `https://api.github.com/users/${username}`
            );
            if (!response.ok) {
                throw new Error("response is not ok");
            }
            const json = await response.json();

            setError(false);
            setGithubData(() => {
                return json;
            });
        } catch (e) {
            setError(true);
            console.log(e.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchGithubUser(username);
    }, [username]);

    return {
        githubData: githubData,
        loading: loading,
        error: error,
    };
}
