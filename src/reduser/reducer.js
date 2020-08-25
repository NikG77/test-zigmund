// import {adaptFilms} from "../../adapters/adapters";
import {errorPopup, extend} from "../utils/utils";

import {AuthorizationStatus} from "../const";


const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isReposLoading: false,
  nameOrganization: ``,
  listRepos: [],

};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  LOAD_REPOS:  `LOAD_REPOS`,
  SET_NAME: `SET_NAME`,
  SET_REPOS_LOADING: `SET_REPOS_LOADING`,
};

const ActionCreator = {
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),

  loadRepos: (repos) => ({
    type: ActionType.LOAD_REPOS,
    payload: repos,
  }),

  setName: (name) => ({
    type: ActionType.SET_NAME,
    payload: name,
  }),

  setReposLoading: (isReposLoading) => ({
    type: ActionType.SET_REPOS_LOADING,
    payload: isReposLoading,
  }),

};


const Operation = {
  getRepos: (name) => (dispatch, getState, api) => {
    dispatch(ActionCreator.setReposLoading(true));
    return api.get(`/${name}/repos`)
      .then(({data}) => {
        console.log(`Получили ${data}`);
        // const repos = adaptFilms(data);
        const repos = data;
        dispatch(ActionCreator.loadRepos(repos));
        dispatch(ActionCreator.setReposLoading(false));
      })
      .catch((err) => {
        dispatch(ActionCreator.setReposLoading(false));
        return errorPopup(err);
      });
  },

};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_REPOS:
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

    case ActionType.SET_REPOS_LOADING:
      return extend(state, {
        isReposLoading: action.payload,
      });
  }

  return state;
};


export {reducer, Operation, ActionType, ActionCreator};
