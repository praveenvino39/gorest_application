import {COMMENT_ERROR, GET_COMMENT_SUCCESS} from "../action.constant";
import apiService from "../network/apiService";

export const getComments = () => {
    return async (dispatch) => {
        try {
            const response = await apiService.allComment()
            dispatch({type: GET_COMMENT_SUCCESS, payload: response.data})
        }catch (e) {
            dispatch({type: COMMENT_ERROR, payload: e.response})
        }
    }
}

