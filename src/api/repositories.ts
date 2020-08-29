import { createAPI } from "./api";
import { RepositoryResponse } from "../types";
import { COUNT_REPOSITORIES_SHOW } from "../const";
import parse from "parse-link-header";


const api = createAPI();

export const getRepositories = ({
    org,
    perPage = COUNT_REPOSITORIES_SHOW,
    page = 1}: {
    org: string,
    perPage?: Number,
    page?: number
  }) =>
  api.get<RepositoryResponse[]>(`/${org}/repos`, {
    params: {
      per_page: perPage,
      page: page,
    },
  })
    .then((response) => {
      const link = response.headers.link;
      const pageCount = parse(link)?.last?.page;
      const repositories = response.data;
      return { repositories, pageCount };
    });
