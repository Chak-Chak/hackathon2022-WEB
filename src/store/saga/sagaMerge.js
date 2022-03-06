import { all } from "redux-saga/effects";
import { tokenCreateWatcher } from "./auth/createTokenSaga";
import {fetchGetDocumentListWatcher} from "./documents/getDocumentsSaga";

export function* rootWatcher() {
    yield all([tokenCreateWatcher(), fetchGetDocumentListWatcher()]);
}
