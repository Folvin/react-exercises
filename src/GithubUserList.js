import {useEffect, useState} from "react";

export function GithubUserList() {
    const [usernames, setUsernames] = useState([]);
    const [githubDataList, setGithubData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

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

    useEffect(() => {
        if (!usernames.length) {
            return;
        }
        fetchGithubData(usernames[usernames.length - 1]);
        /* all'inizio volevo eseguire la funzione per ogni valore dell'array ma non mi sembrava molto sano rieseguire
            fetch anche per i dati che gia avevo quindi ho fatto che la esegue solo dell'ultimo username aggiunto */
    }, [usernames]);

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

            setError(false);

            setGithubData((githubDataList) => {
                return [...githubDataList, json];
            });
        } catch (e) {
            setError(true);
            console.log(e.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            {!!usernames.length && (
                <div>
                    {githubDataList.map((githubData) => {
                        return <h2 key={githubData.login}>{githubData.id}</h2>;
                    })}
                    {loading && <h2>loading...</h2>}
                    {error && <h2>there was an error, try again</h2>}
                </div>
            )}
            <input type="text" />
            <button disabled={loading} onClick={addingUsername}>
                fetch user
            </button>
        </div>
    );
}
