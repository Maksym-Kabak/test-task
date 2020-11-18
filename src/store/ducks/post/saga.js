import { takeEvery, call, put } from 'redux-saga/effects';
import { postsAPI } from "../../../api";
import { setComments, setLoadingPost, setPost, updatePost } from "./actionCreator";
import { ERROR, FETCH_COMMENTS, FETCH_POST, FETCH_UPDATE_POST } from "./types";

function* workerFetchPostSaga({ payload }) {
    try {
        const post = yield call(postsAPI.getByPostId, payload);
        yield put(setPost(post))
    } catch (e) {
        console.log(e);
        yield put(setLoadingPost(ERROR));
    }
};

function* workerFetchCommentsSaga({ payload }) {
    try {
        const comments = yield call(postsAPI.getComments, payload);
        yield put(setComments(comments));
    } catch (e) {
        console.log(e);
        yield put(setLoadingPost(ERROR));
    }
};

function* workerUpdatePostSaga({ payload }) {
    try {
        const post = yield call(postsAPI.update, payload, payload.id)
        yield put(updatePost(post))
    } catch (e) {
        console.log(e);
        yield put(setLoadingPost(ERROR));
    }
};

export function* sagaPostWatcher() {
    yield takeEvery(FETCH_POST, workerFetchPostSaga);
    yield takeEvery(FETCH_UPDATE_POST, workerUpdatePostSaga);
    yield takeEvery(FETCH_COMMENTS, workerFetchCommentsSaga);
};
