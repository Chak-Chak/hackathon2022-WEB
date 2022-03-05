import {
    FETCH_CREATE_TOKEN, IS_LOGIN_VALIDATION_ERROR,
    SET_LOGIN_ROLE,
    UPDATE_IS_AUTH,
    UPDATE_IS_LOGIN_LOADING
} from "../types/authModalTypes";

export const updateIsAuth = (isAuth) => ({
   type: UPDATE_IS_AUTH,
    isAuth
});

export const setLoginRole = (value) => ({
    type:SET_LOGIN_ROLE,
    value
});

export const updateIsLoginLoading = (value) => ({
    type: UPDATE_IS_LOGIN_LOADING,
    value
});

export const fetchCreateToken = (role, password) => ({
    type: FETCH_CREATE_TOKEN,
    role,
    password
});

export const isLoginValidationError = (value) => ({
   type: IS_LOGIN_VALIDATION_ERROR,
   value
});