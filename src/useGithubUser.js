import useSWR from "swr";

export function useGithubUser(username) {
    const fetcher = (url) => fetch(url).then((response) => response.json());

    const {data} = useSWR(`https://api.github.com/users/${username}`, fetcher);
    return {
        data: data,
    };
}
