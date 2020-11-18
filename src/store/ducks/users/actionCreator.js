import { FETCH_USERS, SET_LOADING, SET_USERS } from "./type";

export const setLoadingUsers = (payload) => ({
    type: SET_LOADING,
    payload,
})
export const fetchUsers = ()=> ({
    type: FETCH_USERS,
})
export const setUsers = (payload) => ({
    type: SET_USERS,
    payload,
})
