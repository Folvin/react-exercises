import {useGithubUser} from "./useGithubUser";

export function GithubUser({username}) {
    const {githubData} = useGithubUser(username);
    return (
        <div>
            {githubData && <h1>{githubData.id}</h1>}
        </div>
    );
}
