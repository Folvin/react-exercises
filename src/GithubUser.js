export function GithubUser({data, loading, error}) {
    return (
        <div>
            <h2>{data.id}</h2>
            {loading && <h2>loading...</h2>}
            {error && <h2>there was an error, try again</h2>}
        </div>
    );
}
