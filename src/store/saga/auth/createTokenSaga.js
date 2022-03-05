import { call, put, takeEvery } from "redux-saga/effects";
import {FETCH_CREATE_TOKEN} from "../../types/authModalTypes";
import {/*setRequestLoginError,*/ updateIsAuth, updateIsLoginLoading} from "../../actions/authModalActions";
import {updateGlobalAlertList} from "../../actions/activePageActions";

const fetchCreateToken = (role, password) => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
        "roleId": role,
        "password": password
    });

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch("https://localhost:5001/users/login", requestOptions).catch(() => {});
};

function* fetchTokenCreateWorker(info) {
    yield put(updateIsLoginLoading(true));
    const data = yield call(
        fetchCreateToken,
        info.userRole,
        info.password
    );
    if (data) {
        const json = yield call(() => new Promise((res) => res(data.json())));
        //console.log(json); //DEBUG
        if (json.isError) {
            //yield put(setRequestLoginError(true));
        } else {
            yield put(updateIsAuth(true));
            //yield put(setRequestLoginError(false));
            console.log(json);
            localStorage.setItem('accessToken', json.result);

        }
        //alert( document.cookie );
        yield put(updateIsLoginLoading(false));
    }
    else {
        yield put(updateIsLoginLoading(false));
        //yield put(updateIsLoginModalVisible(false));
        //yield put(updateGlobalAlertList({id:Math.random(), header: "Whoops", body: "Something went wrong :("}))
    }
}

export function* tokenCreateWatcher() {
    yield takeEvery(FETCH_CREATE_TOKEN, fetchTokenCreateWorker);
}