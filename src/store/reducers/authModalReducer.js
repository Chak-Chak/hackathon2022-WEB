import {
    FETCH_GET_DOCUMENT_LIST,
    IS_LOGIN_VALIDATION_ERROR,
    REMOVE_GLOBAL_ALERT, SET_DOCUMENT_LIST,
    SET_LOGIN_ROLE, SET_MODAL,
    SET_REQUEST_LOGIN_ERROR,
    UPDATE_GLOBAL_ALERT_LIST,
    UPDATE_IS_AUTH,
    UPDATE_IS_LOGIN_LOADING, UPDATE_SELECTED_DOCUMENT_ID,
} from "../types/authModalTypes";
import {updateSelectedDocumentId} from "../actions/authModalActions";
const INITIAL_STATE = {
    isAuth: true,
    userRole: null,
    isLoginLoading: false,
    isLoginValidationError: false,
    globalAlertList: [],
    requestLoginError: false,
    modalVisible: false,
    documentList: [],
    selectedDocumentId: null,
};

export const authModalReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_DOCUMENT_LIST:
            return {
                ...state,
                documentList: action.list
            }
        case SET_MODAL:
            return {
                ...state,
                modalVisible: action.value
            }
        case UPDATE_IS_AUTH:
            if (action.isAuth) {
                return {
                    ...state,
                    isAuth: action.isAuth,
                };
            } else {
                localStorage.clear();
                return {
                    ...state,
                    isAuth: action.isAuth,
                };
            }
        case SET_LOGIN_ROLE:
            return {
                ...state,
                userRole: action.value,
            };
        case UPDATE_IS_LOGIN_LOADING:
            return {
                ...state,
                isLoginLoading: action.value,
            };
        case IS_LOGIN_VALIDATION_ERROR:
            return {
                ...state,
                isLoginValidationError: action.value,
            };
        case UPDATE_GLOBAL_ALERT_LIST:
            return {
                ...state,
                globalAlertList: state.globalAlertList.concat(action.info),
            };
        case REMOVE_GLOBAL_ALERT:
            return {
                ...state,
                globalAlertList: state.globalAlertList.filter(
                    (alert) => alert.id !== action.id
                ),
            };
        case SET_REQUEST_LOGIN_ERROR:
            return {
                ...state,
                requestLoginError: action.value,
            };
        case UPDATE_SELECTED_DOCUMENT_ID:
            return {
                ...state,
                selectedDocumentId: action.value,
            };
        default:
            return state;
    }
};
