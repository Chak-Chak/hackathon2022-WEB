import {applyMiddleware, combineReducers, createStore} from "redux";
import {authModalReducer} from "./reducers/authModalReducer";

const rootReducer = combineReducers({
    authModalReducer,
});

//const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer);
//export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

//sagaMiddleware.run(rootWatcher);