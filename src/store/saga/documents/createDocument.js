import {call, takeEvery} from "redux-saga/effects";
import {FETCH_CREATE_DOCUMENT} from "../../types/authModalTypes";

const request = (data) => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    data["1"] = "121241";
    let raw = JSON.stringify({
        data
    });
    console.log(raw);

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch("https://cb94-204-157-128-236.ngrok.io/documents/fill", requestOptions);
};

function* fetchCreateDocument(info) {
    const data = yield call(request, info.data);
    const json = yield call(() => new Promise((res) => res(data.json())));
}

export function* fetchCreateDocumentWatcher() {
    yield takeEvery(FETCH_CREATE_DOCUMENT, fetchCreateDocument);
}