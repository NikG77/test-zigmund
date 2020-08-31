import { Repository } from "../types";
import { getRepositoriesError} from "./selectors";
import { StatusLoading } from "../const";

export interface DataActionInterface {
  type?: string;
  payload?: boolean | string | Repository[] | number | any;
}

interface InitialStateInterface {
  statusLoading?: string,
  nameOrganization?: string,
  repositories?: Repository[] | [],
  pageCount?: number,
  currentPage?: number,
}

const initialState: InitialStateInterface = {
  statusLoading: ``,
  nameOrganization: ``,
  repositories: [],
  pageCount: 0,
  currentPage: 0,
};

const ActionType = {
  GET_REPOSITORIES: `GET_REPOSITORIES`,
  DOWNLOAD_REPOSITORIES_SUCCESS:  `DOWNLOAD_REPOSITORIES_SUCCESS`,
  DOWNLOAD_REPOSITORIES_ERROR:  `DOWNLOAD_REPOSITORIES_ERROR`,
  RESET_PAGE_COUNT: `RESET_PAGE_COUNT`,
};

const ActionCreator = {

  getRepositories: (name: string, page: number = 1) => {
    return {
      type: ActionType.GET_REPOSITORIES,
      payload: {
        name,
        page,
      },
    };
  },

  resetPageCount: () => {
    return {
      type: ActionType.RESET_PAGE_COUNT,
      payload: 0,
    };
  }
};

const reducer = (state: InitialStateInterface = initialState, action: DataActionInterface) => {
    switch (action.type) {

    case ActionType.GET_REPOSITORIES:
      return {
        ...state,
        nameOrganization: action.payload.name as string,
        statusLoading: StatusLoading.LOADING as string,
      };

    case ActionType.DOWNLOAD_REPOSITORIES_SUCCESS:
      return {
        ...state,
        repositories: action.payload.repositories as Repository[],
        pageCount: action.payload.pageCount as number || state.pageCount as number,
        statusLoading: StatusLoading.SUCCESS as string,
        currentPage:  action.payload.page as number,
      };

    case ActionType.DOWNLOAD_REPOSITORIES_ERROR:
      return {
        ...state,
        repositories: getRepositoriesError(state) as Repository[],
        statusLoading: StatusLoading.ERROR,
      };

    case ActionType.RESET_PAGE_COUNT:
      return {
        ...state,
        pageCount: 0,
      };

    default:
      return state;
  }
};


export {reducer, ActionType, ActionCreator};
