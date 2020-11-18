import { LOADED, LOADING } from "./types";

const selectUsersState = (state) => state.users

export const selectUsersItems = (state) =>
    selectUsersState(state).users

export const selectUserLoadingState = (state) =>
    selectUsersState(state).loading

export const selectIsUsersLoading = (state) =>
    selectUserLoadingState(state) === LOADING

export const selectIsUsersLoaded = (state) =>
    selectUserLoadingState(state) === LOADED
