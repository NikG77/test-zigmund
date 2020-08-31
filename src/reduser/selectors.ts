import { createSelector } from "reselect";

const getRepositories  = (state) => state.repositories;
const getPageCount  = (state) => state.pageCount;

export const getRepositoriesError = createSelector(
  [ getRepositories, getPageCount ],
  (repositories, pageCount) => {
    return pageCount > 0 ? repositories : [];
  }
);

