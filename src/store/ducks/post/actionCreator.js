import {
    FETCH_COMMENTS,
    FETCH_POST,
    FETCH_UPDATE_POST,
    SET_COMMENTS,
    SET_LOADING,
    SET_POST,
    UPDATE_POST
} from "./types";

export const setLoadingPost = (payload) => ({
    type: SET_LOADING,
    payload
});
export const fetchPost = (postId) => ({
    type: FETCH_POST,
    payload: postId
});
export const setPost = (payload) => ({
    type: SET_POST,
    payload
});
export const fetchComments = (postId) => ({
    type: FETCH_COMMENTS,
    payload: postId
});
export const setComments = (payload) => ({
    type: SET_COMMENTS,
    payload
});
export const fetchUpdatePost = (payload) => ({
    type:FETCH_UPDATE_POST,
    payload
});
export const updatePost = (payload) => ({
    type: UPDATE_POST,
    payload
});
