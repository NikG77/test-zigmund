import { errorPopup, extend } from "../utils/utils";
import { AuthorizationStatus } from "../const";
import { adaptRepositories } from "../adapter/adapter";


const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isReposLoading: false,
  nameOrganization: ``,
  listRepos: [],

};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  LOAD_REPOSITORIES:  `LOAD_REPOSITORIES`,
  SET_NAME: `SET_NAME`,
  SET_REPOSITORIES_LOADING: `SET_REPOSITORIES_LOADING`,
};

const ActionCreator = {
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),

  loadRepositories: (repos) => ({
    type: ActionType.LOAD_REPOSITORIES,
    payload: repos,
  }),

  setName: (name) => ({
    type: ActionType.SET_NAME,
    payload: name,
  }),

  setRepositoriesLoading: (isReposLoading) => ({
    type: ActionType.SET_REPOSITORIES_LOADING,
    payload: isReposLoading,
  }),

};


const Operation = {
  getRepositories: (name) => (dispatch, getState, api) => {
    dispatch(ActionCreator.setRepositoriesLoading(true));
    return api.get(`/${name}/repos`)
      .then(({data}) => {
        const repositories = adaptRepositories(data);
        console.log(repositories);
        dispatch(ActionCreator.loadRepositories(repositories));
        dispatch(ActionCreator.setRepositoriesLoading(false));
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      })
      .catch((err) => {
        dispatch(ActionCreator.setRepositoriesLoading(false));
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
        dispatch(ActionCreator.loadRepositories([]));
        return errorPopup(err);
      });
  },

};


const reducer = (state = initialState, action) => {
    switch (action.type) {
    case ActionType.LOAD_REPOSITORIES:
      return extend(state, {
        listRepos: action.payload,
      });
    case ActionType.SET_NAME:
      return extend(state, {
        nameOrganization: action.payload,
      });
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });

    case ActionType.SET_REPOSITORIES_LOADING:
      return extend(state, {
        isReposLoading: action.payload,
      });

    default:
      return state;
  }

};


export {reducer, Operation, ActionType, ActionCreator};
