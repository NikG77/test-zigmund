import { createSelector } from "reselect";

const getRepositories  = (state) => state.repositories;
const getPageCount  = (state) => state.pageCount;
const getStatusLoading = (state) => state.statusLoading;

export const getRepositoriesError = createSelector(
  [ getRepositories, getPageCount ],
  (repositories, pageCount) => {
    return pageCount > 0 ? repositories : [];
  }
);

