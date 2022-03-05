import {
    IS_LOGIN_VALIDATION_ERROR,
    REMOVE_GLOBAL_ALERT,
    SET_LOGIN_ROLE,
    SET_REQUEST_LOGIN_ERROR,
    UPDATE_GLOBAL_ALERT_LIST,
    UPDATE_IS_AUTH,
    UPDATE_IS_LOGIN_LOADING,
} from "../types/authModalTypes";
const INITIAL_STATE = {
    isAuth: true,
    userRole: null,
    isLoginLoading: false,
    isLoginValidationError: false,
    globalAlertList: [],
    requestLoginError: false,
};

export const authModalReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
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
        default:
            return state;
    }
};
