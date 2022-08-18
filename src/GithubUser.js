import {useGithubUser} from "./useGithubUser";

export function GithubUser({username}) {
    const {data, refreshData} = useGithubUser(username);
    return (
        <div>
            {data && <h1>{data.id}</h1>}
            <button onClick={refreshData}>refresh</button>
        </div>
    );
}
