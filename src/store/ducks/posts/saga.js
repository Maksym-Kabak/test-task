import { takeEvery, call, put } from 'redux-saga/effects'
import { postsAPI } from '../../../api'
import { addPost, deletePost, setLoadingPost, setPosts } from './actionCreator'
import { ERROR, FETCH_ADD_POST, FETCH_DELETE_POST, FETCH_POSTS } from "./type";


function* fetchPostsSaga({ payload }) {
    try {
        const posts = yield call(postsAPI.getByUserId, payload)
        yield put(setPosts(posts))
    } catch (e) {
        console.log(e)
        yield put(setLoadingPost(ERROR))
    }
}
function* addPostSaga({ payload }) {
    try {
        const post = yield call(postsAPI.create, payload)

        yield put(addPost(post))
    } catch (e) {
        console.log(e)
        yield put(setLoadingPost(ERROR))
    }
}
function* deletePostSaga({ payload }) {
    try {
        const status = yield call(postsAPI.delete, payload)

        if (status === 200) {
            yield put(deletePost(payload))
        }
    } catch (e) {
        console.log(e)
        yield put(setLoadingPost(ERROR))
    }
}

export function* sagaPostsWatcher() {
    yield takeEvery(FETCH_POSTS, fetchPostsSaga)
    yield takeEvery(FETCH_ADD_POST, addPostSaga)
    yield takeEvery(FETCH_DELETE_POST, deletePostSaga)
}
