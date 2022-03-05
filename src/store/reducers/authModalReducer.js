import {

} from "../types/authModalTypes";
const INITIAL_STATE = {
    isAuth: true,
    userRole: null,
};

export const authModalReducer = (state = INITIAL_STATE, action) =>
{
    switch (action.type) {
        default:
            return state;
    }
};