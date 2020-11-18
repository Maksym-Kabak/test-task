import { LOADING } from "./types";

const selectNasaState = (state) => state.nasa

export const selectNasaItem = (state) =>
    selectNasaState(state).nasa

export const selectNasaLoadingState = (state) =>
    selectNasaState(state).loading

export const selectIsNasaPostsLoading = (state) =>
    selectNasaLoadingState(state) === LOADING
