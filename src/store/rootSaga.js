import { all } from 'redux-saga/effects';
import { sagaPostWatcher } from "./ducks/post/saga";
import { sagaPostsWatcher } from "./ducks/posts/saga";
import { sagaUserWatcher } from "./ducks/users/saga";
import { sagaNasaWatcher } from "./ducks/nasa/saga";

export function* rootSaga() {
    yield all([sagaPostWatcher(),sagaPostsWatcher(),sagaUserWatcher(), sagaNasaWatcher()])
};
