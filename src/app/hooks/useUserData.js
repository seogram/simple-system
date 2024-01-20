import { useQuery } from "react-query";
// ----------------------------------------------------------------------
const baseUrl = "https://api.github.com";

const request = async (url) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const res = await response.json();
    return res;
  } catch (error) {
    console.log("error for", error);
    return {
      res: [],
    };
  }
};
const getGithubUserData = async (query) => {
  if (!query) return;

  const params = {
    q: query,
    per_page: 5,
  };
  const qs = "?" + new URLSearchParams(params).toString();
  const url = `${baseUrl}/search/users${qs}`;
  const response = await request(url);
  return response?.items;
};

const getGithubUserRepos = async (username) => {
  if (!username) return;
  const url = `${baseUrl}/users/${username}/repos`;

  const response = await request(url);
  return response;
};

export function useUserData(username) {
  const { isFetching, isError, data, error } = useQuery(
    `githubuser-${username}`,
    () => getGithubUserData(username),
    {
      enabled: Boolean(username),
      refetchOnWindowFocus: false,
    }
  );
  return {
    isFetching,
    isError,
    data,
    error,
  };
}

export function useUserRepo({username,enabled}) {
  const { isFetching, isError, data, error } = useQuery(
    `githubRepo-${username}`,
    () => getGithubUserRepos(username),
    {
      enabled: Boolean(username && enabled),
      refetchOnWindowFocus: false,
    }
  );
  return {
    isFetching,
    isError,
    data,
    error,
  };
}
