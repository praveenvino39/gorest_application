import {AUTH_USER_ERROR, AUTH_USER_SUCCESS} from "../action.constant";
import {toast} from "react-toastify";
import {localService} from "../local/sessionManager";

const initialState = {
    token: "",
    isAuthenticated: localService.getUserId(),
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case  AUTH_USER_SUCCESS:
            localService.setUserId(action.payload)

            window.location.href = "/"
            return { isAuthenticated: true, token: action.payload}
        case  AUTH_USER_ERROR:
            toast(action.payload, {type: "error"})
            return {...state, isAuthenticated: false}
        default:
            return state
    }
}


export const authSelector = (state) => state.authReducer


export default authReducer