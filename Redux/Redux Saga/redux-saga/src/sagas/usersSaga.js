import { call, put, takeEvery } from "redux-saga/effects";
import { fetchUsersSuccess } from "../reducers/usersReducer";
function* fetchUsersSaga() {
  try {
    const response = yield call(
      fetch,
      "https://jsonplaceholder.typicode.com/users"
    );
    const data = yield response.json();
    yield put(fetchUsersSuccess(data)); // dispatch success
  } catch (error) {
    yield put(fetchUsersFailure(err.message)); // dispatch failure
  }
}

export function* watchFetchUsers() {
  yield takeEvery("FETCH_USERS_REQUEST", fetchUsersSaga);
}
