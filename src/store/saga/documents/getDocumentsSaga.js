import {FETCH_GET_DOCUMENT_LIST} from "../../types/authModalTypes";
import {call, put, takeEvery} from "redux-saga/effects";
import {setDocumentList, updateGlobalAlertList} from "../../actions/authModalActions";

const request = () => {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    return fetch("https://cb94-204-157-128-236.ngrok.io/documents/all", requestOptions);
};

function* fetchGetList() {
    const data = yield call(request);
    if (data) {
        const json = yield call(() => new Promise((res) => res(data.json())));
        yield put(setDocumentList(json));
    } else {
        yield put(
            updateGlobalAlertList({
                id: Math.random(),
                header: "Пусто",
                body: "Ничего не найдено",
            })
        );
    }

}

export function* fetchGetListWatcher() {
    yield takeEvery(FETCH_GET_DOCUMENT_LIST, fetchGetList);
}