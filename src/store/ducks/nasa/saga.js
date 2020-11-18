import { takeEvery, call, put } from 'redux-saga/effects'
import { setLoadingNasa, setNasa } from "./actionCreator";
import { ERROR , FETCH_NASA} from "./types";


let Parser = require('rss-parser');
let parser = new Parser();
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";


 const nasaAPI = {
    async getAll() {
        const response = await parser.parseURL(CORS_PROXY + 'https://www.nasa.gov/rss/dyn/breaking_news.rss');
        return response.items;
    }
};


function* fetchNasaSaga() {
    try {
        const nasa = yield call(nasaAPI.getAll)
        yield put(setNasa(nasa))
        console.log(nasa)
    } catch (e) {
        console.log(e)
        yield put(setLoadingNasa(ERROR))
    }
}

export function* sagaNasaWatcher() {
    yield takeEvery(FETCH_NASA, fetchNasaSaga)
}

