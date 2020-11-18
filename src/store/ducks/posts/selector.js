import { LOADED, LOADING } from "./types";

const selectPostsState = (state) => state.posts

export const selectPostsItems = (state) =>
    selectPostsState(state).posts

export const selectPostsLoadingState = (state) =>
    selectPostsState(state).loading

export const selectIsPostsLoading = (state)=>
    selectPostsLoadingState(state) === LOADING

export const selectIsPostsLoaded = (state) =>
    selectPostsLoadingState(state) === LOADED
