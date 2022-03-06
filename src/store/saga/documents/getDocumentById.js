import {call, put, takeEvery} from "redux-saga/effects";
import {setSelectedDocumentId, updateGlobalAlertList} from "../../actions/authModalActions";
import {FETCH_GET_DOCUMENT_BY_ID} from "../../types/authModalTypes";

const request = (selectedDocumentId) => {
    let formdata = new FormData();

    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    return fetch(`http://cb94-204-157-128-236.ngrok.io/documents/${selectedDocumentId}`, requestOptions);
};

function* fetchGetDocument(info) {
    const data = yield call(request, info.selectedDocumentId);
    const json = yield call(() => new Promise((res) => res(data.json())));
    console.log(json)
    yield put(setSelectedDocumentId(json));
}

export function* fetchGetDocumentWatcher() {
    yield takeEvery(FETCH_GET_DOCUMENT_BY_ID, fetchGetDocument);
}