export interface GithubUser {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
}

export const fetchUserList = (since?: number) => {
  let url = 'https://api.github.com/users';

  if (since) {
    url += `?since=${since}`;
  }

  return fetch(url).then(response => response.json<GithubUser[]>());
};

export const fetchUser = (login: string) => {
  const url = `https://api.github.com/users/${login}`;

  return fetch(url).then(response => {
    if (response.status === 404) {
      throw response;
    } else {
      return response.json<GithubUser>();
    }
  });
};
