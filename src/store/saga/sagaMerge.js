import { all } from "redux-saga/effects";
import { tokenCreateWatcher } from "./auth/createTokenSaga";
import {fetchGetListWatcher} from "./documents/getDocumentsSaga";
import {fetchGetDocumentWatcher} from "./documents/getDocumentById";
import {fetchCreateDocumentWatcher} from "./documents/createDocument";

export function* rootWatcher() {
    yield all([
        tokenCreateWatcher(),
        fetchGetListWatcher(),
        fetchGetDocumentWatcher(),
        fetchCreateDocumentWatcher()
        ]
    );
}
