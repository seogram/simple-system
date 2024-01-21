import { useQuery } from "react-query";
// ----------------------------------------------------------------------
const BASE_URL = "https://api.github.com";

const logSentry = () => {
  //Log in Sentry or other log systems
};
const request = async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      const errorCode = response.status;
      throw new Error(`An error occurred: ${errorCode}`);
    }
    return response.json();
  } catch (error) {
    logSentry();
    throw error;
  }
};
const getGithubUserData = async (query?: string) => {
  if (!query) return;

  const params = {
    q: query,
    per_page: "5",
  };
  const qs = "?" + new URLSearchParams(params).toString();
  const url = `${BASE_URL}/search/users${qs}`;
  const response = await request(url);
  return response?.items;
};

const getGithubUserRepos = async (username?: string) => {
  if (!username) return;
  const url = `${BASE_URL}/users/${username}/repos`;

  const response = await request(url);
  return response;
};

export function useUserData(username?: string) {
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

export function useUserRepo({
  username,
  enabled,
}: {
  username?: string;
  enabled: boolean;
}) {
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
