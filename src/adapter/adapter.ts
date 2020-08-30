import { Repository, RepositoryResponse } from "../types";

const adaptRepository = (repository: RepositoryResponse): Repository => {
  const {
    name,
    description,
    html_url: url,
    forks_count: fork,
    stargazers_count: star,
    watchers_count: watch,
  } = repository;

  return {
    name,
    url,
    description,
    statistics: {
      fork,
      watch,
      star,
    },
  };
};


export const adaptRepositories = (repositories: RepositoryResponse[]): Repository[] =>
  repositories.map((repository: RepositoryResponse) => adaptRepository(repository));
