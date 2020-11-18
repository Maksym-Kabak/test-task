import produce from 'immer';
import {
    ADD_POST,
    DELETE_POST,
    FETCH_ADD_POST,
    FETCH_DELETE_POST,
    FETCH_POSTS,
    LOADED,
    LOADING, SET_LOADING,
    SET_POSTS
} from "./types";


const initialPostsState = {
    posts: [],
    loading: LOADED
}

export const postsReducer = produce((draft, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            draft.posts = [];
            draft.loading = LOADING;
            break;
        case SET_POSTS:
            draft.posts = action.payload;
            draft.loading = LOADED;
            break;
        case FETCH_ADD_POST:
            draft.loading = LOADING;
            break;
        case ADD_POST:
            draft.posts.push(action.payload);
            draft.loading = LOADED;
            break;
        case FETCH_DELETE_POST:
            draft.loading = LOADING;
            break;
        case DELETE_POST:
            const index = draft.posts.findIndex((post) => post.id === action.payload);
            if (index !== -1) draft.posts.splice(index, 1);
            draft.loading = LOADED;
            break;
        case SET_LOADING:
            draft.loading = action.payload;
            break;

        default:
            break;
    }
}, initialPostsState);
