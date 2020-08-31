import { takeLatest, call, put } from "redux-saga/effects";
import { getRepositories } from "../api/repositories";
import { ActionType } from "../reduser/reducer";
import { adaptRepositories } from "../adapter/adapter";


function* _getRepositories(action) {
  try {
    const org = action.payload.name;
    const page = action.payload.page;
    const data = yield call(getRepositories, {org, page});
    const pageCount = +data.pageCount;
    const repositories = adaptRepositories(data.repositories);

    yield put({
      type: ActionType.DOWNLOAD_REPOSITORIES_SUCCESS,
      payload: {
        repositories,
        pageCount,
        page,
      },
    });
  }

  catch (error) {
    yield put({
      type: ActionType.DOWNLOAD_REPOSITORIES_ERROR,
    });
  }
}

export default function* mySaga() {
  yield takeLatest(ActionType.GET_REPOSITORIES, _getRepositories);
}
