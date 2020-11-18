import produce from 'immer';

import { FETCH_NASA, LOADED, LOADING, SET_NASA, SET_LOADING } from "./types";

const initialPostsNasaState = {
    nasa: [],
    loading: LOADED
};

export const nasaReducer = produce((draft, action) => {
    switch (action.type) {
        case FETCH_NASA:
            draft.nasa = [];
            draft.loading = LOADING;
            break;
        case SET_NASA:
            draft.nasa = action.payload;
            draft.loading = LOADED;
        case SET_LOADING:
            draft.loading = action.payload;
            break;

        default:
            break;
    }
}, initialPostsNasaState);
