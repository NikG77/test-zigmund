import {Repository} from "../types";

export interface DataActionInterface {
  type?: string;
  payload?: boolean | string | Repository[] | number | any;
}

interface InitialStateInterface {
  isReposLoading?: boolean,
  nameOrganization?: string,
  listRepos?: Repository[] | [],
  pageCount?: number,
}

const initialState: InitialStateInterface = {
  isReposLoading: false,
  nameOrganization: ``,
  listRepos: [],
  pageCount: 0,
};

const ActionType = {
  LOAD_REPOSITORIES:  `LOAD_REPOSITORIES`,
  SET_NAME: `SET_NAME`,
  SET_REPOSITORIES_LOADING: `SET_REPOSITORIES_LOADING`,
  SET_PAGE_COUNT: `SET_PAGE_COUNT`,
};

const ActionCreator = {

  setName: (name: string, page: number = 1) => ({
    type: ActionType.SET_NAME,
    payload: {
      name,
      page,
    },
  }),

  setRepositoriesLoading: (isReposLoading: boolean) => ({
    type: ActionType.SET_REPOSITORIES_LOADING,
    payload: isReposLoading,
  }),

};

const reducer = (state: InitialStateInterface = initialState, action: DataActionInterface) => {
    switch (action.type) {
    case ActionType.LOAD_REPOSITORIES:
      return {
        ...state,
        listRepos: action.payload as Repository[],
      };

    case ActionType.SET_NAME:
      return {
        ...state,
        nameOrganization: action.payload.name as string,
      };

    case ActionType.SET_REPOSITORIES_LOADING:
      return {
        ...state,
        isReposLoading: action.payload as boolean,
      };

    case ActionType.SET_PAGE_COUNT:
      return {
        ...state,
        pageCount: action.payload as number || state.pageCount as number,
      };

    default:
      return state;
  }

};


export {reducer, ActionType, ActionCreator};
