import { Repository, RepositoryResponse } from "../types";

const adaptRepository = (repository: RepositoryResponse): Repository => {
  const {
    name,
    html_url: url,
    forks_count: forks,
    stargazers_count: stargazers,
    watchers_count: watchers,
  } = repository;

  return {
    name,
    url,
    statistics: {
      forks,
      stargazers,
      watchers,
    },
  };
};


export const adaptRepositories = (repositories: RepositoryResponse[]): Repository[] =>
  repositories.map((repository: RepositoryResponse) => adaptRepository(repository));
