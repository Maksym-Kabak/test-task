import { FETCH_NASA, SET_LOADING, SET_NASA, } from "./types";


export const setLoadingNasa = (payload) => ({
    type: SET_LOADING,
    payload,
})

export const setNasa = (payload) => ({
    type: SET_NASA,
    payload,
})

export const fetchNasaPosts = () => ({
    type: FETCH_NASA,
});
