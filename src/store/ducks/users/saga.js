import { takeEvery, call, put } from 'redux-saga/effects'
import { ERROR, FETCH_USERS } from "./type";
import { setLoadingUsers, setUsers } from "./actionCreator";
import { userAPI } from "../../../api";

function* fetchUsersSaga() {
    try {
        const users = yield call(userAPI.getAll)
        yield put(setUsers(users))
    } catch (e) {
        console.log(e)
        yield put(setLoadingUsers(ERROR))
    }
}

export function* sagaUserWatcher() {
    yield takeEvery(FETCH_USERS, fetchUsersSaga)
}
