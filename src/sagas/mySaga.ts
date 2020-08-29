import { takeLatest, call, put } from "redux-saga/effects";
import { getRepositories } from "../api/repositories";
import { ActionType } from "../reduser/reducer";
import {adaptRepositories} from "../adapter/adapter";


function* _getRepositories(action) {
  try {
    yield put({
      type: ActionType.SET_REPOSITORIES_LOADING,
      payload: true,
    });

    const org = action.payload.name;
    const page = action.payload.page;
    const data = yield call(getRepositories, {org, page});
    const pageCount = +data.pageCount;
    const repositories = adaptRepositories(data.repositories);

    yield put({
      type: ActionType.LOAD_REPOSITORIES,
      payload: repositories,
    });

    yield put({
      type: ActionType.SET_PAGE_COUNT,
      payload: pageCount,
    });

    yield put({
      type: ActionType.SET_REPOSITORIES_LOADING,
      payload: false ,
    });
  }

  catch (error) {
    yield put({
      type: ActionType.SET_REPOSITORIES_LOADING,
      payload: false,
    });
    yield put({
      type: ActionType.LOAD_REPOSITORIES,
      payload: [],
    });
  }
}

export default function* mySaga() {
  yield takeLatest(ActionType.SET_NAME, _getRepositories);
}
