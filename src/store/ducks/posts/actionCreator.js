import { ADD_POST, DELETE_POST, FETCH_ADD_POST, FETCH_DELETE_POST, FETCH_POSTS, SET_LOADING, SET_POSTS } from "./type";

export const fetchPosts = (userId) => ({
    type: FETCH_POSTS,
    payload: userId,
})
export const setLoadingPost = (payload) => ({
    type: SET_LOADING,
    payload,
})
export const setPosts = (payload) => ({
    type: SET_POSTS,
    payload,
})
export const fetchAddPost = (payload) => ({
    type: FETCH_ADD_POST,
    payload,
})
export const addPost = (payload) => ({
    type: ADD_POST,
    payload,
})

export const fetchDeletePost = (payload) => ({
    type: FETCH_DELETE_POST,
    payload,
})
export const deletePost = (payload) => ({
    type: DELETE_POST,
    payload,
})
