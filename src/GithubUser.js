import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export function GithubUser() {
    const [githubData, setGithubData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const {username} = useParams();

    async function fetchGithubData(username) {
        try {
            setLoading(true);
            const response = await fetch(
                `https://api.github.com/users/${username}`
            );
            if (!response.ok) {
                throw new Error("response is not ok");
            }
            const json = await response.json();

            setGithubData(json);
        } catch (e) {
            setError(true);
            console.log(e.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        setGithubData(null)
        setError(false)
        fetchGithubData(username);
    }, [username]);

    return (
        <div>
            {githubData && <h2>{githubData.id}</h2>}
            {loading && <h2>loading...</h2>}
            {error && <h2>there was an error, try again</h2>}
        </div>
    );
}
