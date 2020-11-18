import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {rootReducer} from "./rootReducer";
import {rootSaga} from './rootSaga';

const saga = createSagaMiddleware();


export const store = createStore(rootReducer, compose(applyMiddleware(
    saga
    )
    ));

saga.run(rootSaga);
