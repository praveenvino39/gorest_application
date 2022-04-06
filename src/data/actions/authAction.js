import apiService from "../network/apiService";
import {AUTH_USER_ERROR, AUTH_USER_SUCCESS} from "../action.constant";
import {localService} from "../local/sessionManager";

export const createUser = (data) => {
    return async (dispatch) => {
        try {
            const response = await apiService.createUser(data)
            dispatch({type: AUTH_USER_SUCCESS, payload: response.data.id})
        } catch (e) {
            console.warn(e.response)
            dispatch({type: AUTH_USER_ERROR, payload: `${e.response.data[0].field} ${e.response.data[0].message}`})
        }
    }
}