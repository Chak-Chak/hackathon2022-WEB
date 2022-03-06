import {FETCH_GET_DOCUMENT_LIST} from "../../types/authModalTypes";
import {call, takeEvery} from "redux-saga/effects";

const request = () => {
    let raw = "";

    let requestOptions = {
        method: 'GET',
        body: raw,
        redirect: 'follow'
    };

    return fetch("https://localhost:5001/documents/all", requestOptions);
};

function* fetchGetList() {
    const data = yield call(request)
    const json = yield call(() => new Promise((res) => res(data.json())));
    console.log(json)
}

export function* fetchGetListWatcher() {
    yield takeEvery(FETCH_GET_DOCUMENT_LIST, fetchGetList);
}
