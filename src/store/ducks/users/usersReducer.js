import produce from 'immer'
import { FETCH_USERS, LOADED, LOADING, SET_LOADING, SET_USERS } from "./types";

const initialUsersState = {
    users: [],
    loading: LOADED,
}

export const usersReducer = produce((draft, action) => {
    switch (action.type) {
        case FETCH_USERS:
            draft.users = [];
            draft.loading = LOADING;
            break;
        case SET_USERS:
            draft.users = action.payload;
            draft.loading = LOADED;
            break;
        case SET_LOADING:
            draft.loading = action.payload;
            break;

        default:
            break;
    }
}, initialUsersState);
