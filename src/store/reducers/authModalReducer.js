import {
    SET_LOGIN_PASSWORD,
    SET_LOGIN_ROLE,
    UPDATE_IS_AUTH, UPDATE_IS_LOGIN_LOADING

} from "../types/authModalTypes";
const INITIAL_STATE = {
    isAuth: true,
    userRole: null,
    password: '',
    isLoginLoading: false,
};

export const authModalReducer = (state = INITIAL_STATE, action) =>
{
    switch (action.type) {
        case UPDATE_IS_AUTH:
            if (action.isAuth) {
                return {
                    ...state,
                    isAuth: action.isAuth,
                }
            }
            else {
                localStorage.clear();
                return {
                    ...state,
                    isAuth: action.isAuth,
                }
            }
        case SET_LOGIN_ROLE:
            return {
                ...state,
                userRole: action.value,
            }
        case SET_LOGIN_PASSWORD:
            return {
                ...state,
                password: action.value,
            }
        case UPDATE_IS_LOGIN_LOADING:
            return {
                ...state,
                isLoginLoading: action.value,
            }
        default:
            return state;
    }
};