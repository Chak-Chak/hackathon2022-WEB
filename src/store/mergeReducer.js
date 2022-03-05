import {applyMiddleware, combineReducers, createStore} from "redux";
import {authModalReducer} from "./reducers/authModalReducer";
import {rootWatcher} from "./saga/sagaMerge";
import createSagaMiddleware from "redux-saga";

const rootReducer = combineReducers({
    authModalReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);