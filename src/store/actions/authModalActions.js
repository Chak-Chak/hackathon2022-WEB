import {
    FETCH_CREATE_TOKEN, FETCH_GET_DOCUMENT_LIST,
    IS_LOGIN_VALIDATION_ERROR,
    REMOVE_GLOBAL_ALERT, SET_DOCUMENT_LIST,
    SET_LOGIN_ROLE, SET_MODAL,
    SET_REQUEST_LOGIN_ERROR,
    UPDATE_GLOBAL_ALERT_LIST,
    UPDATE_IS_AUTH,
    UPDATE_IS_LOGIN_LOADING,
} from "../types/authModalTypes";

export const setDocumentList = (list) => ({
    type: SET_DOCUMENT_LIST,
    list
})

export const setModal = (value) => ({
    type: SET_MODAL, value
})

export const updateIsAuth = (isAuth) => ({
    type: UPDATE_IS_AUTH,
    isAuth,
});

export const setLoginRole = (value) => ({
    type: SET_LOGIN_ROLE,
    value,
});

export const updateIsLoginLoading = (value) => ({
    type: UPDATE_IS_LOGIN_LOADING,
    value,
});

export const fetchCreateToken = (userRole, password) => ({
    type: FETCH_CREATE_TOKEN,
    userRole,
    password,
});

export const isLoginValidationError = (value) => ({
    type: IS_LOGIN_VALIDATION_ERROR,
    value,
});

export const updateGlobalAlertList = (info) => ({
    type: UPDATE_GLOBAL_ALERT_LIST,
    info,
});

export const removeGlobalAlert = (id) => ({
    type: REMOVE_GLOBAL_ALERT,
    id,
});

export const setRequestLoginError = (value) => ({
    type: SET_REQUEST_LOGIN_ERROR,
    value,
});

export const fetchGetDocumentList = () => ({
    type: FETCH_GET_DOCUMENT_LIST,
});
