import {useGithubUser} from "./useGithubUser";

export function GithubUser({username}) {
    const {githubData, loading, error} = useGithubUser(username);
    return (
        <div>
            {githubData && <h1>{githubData.id}</h1>}
            {loading && <h1>loading...</h1>}
            {error && <h1>an error occured. try to reload the page</h1>}
        </div>
    );
}
