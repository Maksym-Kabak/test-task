import { LOADED, LOADING } from "./types";

const selectPostState = (state) => state.post;

export const selectPostItem = (state) => selectPostState(state).post;
export const selectCommentsItem = (state) => selectPostState(state).comments;

export const selectPostLoadingState = (state) => selectPostState(state).loading;

export const selectIsPostLoading = (state) =>  selectPostLoadingState(state) === LOADING;

export const selectIsPostLoaded = (state) =>  selectPostLoadingState(state) === LOADED;
