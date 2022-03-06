import { all } from "redux-saga/effects";
import { tokenCreateWatcher } from "./auth/createTokenSaga";
import {fetchGetListWatcher} from "./documents/getDocumentsSaga";

export function* rootWatcher() {
    yield all([
        tokenCreateWatcher(),
        fetchGetListWatcher()
        ]
    );
}
