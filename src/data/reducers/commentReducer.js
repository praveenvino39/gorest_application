import {GET_COMMENT_SUCCESS} from "../action.constant";


const initialState = {
    comments: []
}
const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COMMENT_SUCCESS:
            return {
                ...state,
                comments: action.payload
            }
        default:
            return state
    }
}

const commentSelector = (state) => state.commentReducer

export {commentSelector}
export default commentReducer
