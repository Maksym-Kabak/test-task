import produce from 'immer';
import {
    FETCH_COMMENTS,
    FETCH_POST,
    FETCH_UPDATE_POST,
    LOADED,
    LOADING,
    SET_COMMENTS, SET_LOADING,
    SET_POST,
    UPDATE_POST
} from "./types";

const initialPostsState = {
    posts: undefined,
    fetchPosts: [],
    loading: LOADED
}

export const postReducer = produce((draft, action) => {
    switch (action.type) {
        case FETCH_POST:
            draft.post = undefined;
            draft.loaded = LOADING;
            break;
        case SET_POST:
            draft.post = action.payload;
            draft.loading = LOADED;
            break;
        case FETCH_COMMENTS:
            draft.comments = [];
            break;
        case SET_COMMENTS:
            draft.comments = action.payload;
            draft.loading = LOADED;
            break;
        case FETCH_UPDATE_POST:
            draft.loading = LOADING;
            break;
        case UPDATE_POST:
            draft.post = action.payload;
            draft.loading = LOADED;
            break;
        case SET_LOADING:
            draft.loading = action.payload;
            break;
        default:
            break;
    }

}, initialPostsState)
