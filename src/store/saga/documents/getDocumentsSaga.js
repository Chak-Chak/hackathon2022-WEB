import {call, put, takeEvery} from "redux-saga/effects";
import {FETCH_GET_DOCUMENT_LIST} from "../../types/authModalTypes";
import {updateGlobalAlertList} from "../../actions/authModalActions";


const fetchGetDocumentList = () => {
    let raw = "";

    let requestOptions = {
        method: 'GET',
        body: raw,
        redirect: 'follow'
    };

    return fetch("https://localhost:5001/documents/all", requestOptions).catch(() => {});
}

function* fetchGetDocumentListWorker() {
    console.log("--->");
    const data = yield call(fetchGetDocumentList);
    console.log(data);
    if (data) {
        const json = yield call(() => new Promise((res) => res(data.json())));
        console.log("--->", json);
    } else {
        yield put(
            updateGlobalAlertList({
                id: Math.random(),
                header: "Пусто",
                body: "Ничего не нашлось :(",
            })
        );
    }
}

export function* fetchGetDocumentListWatcher() {
    yield takeEvery(FETCH_GET_DOCUMENT_LIST, fetchGetDocumentListWorker);
}