import {
    ADD_POST_COMMENTS,
    ADD_POSTS_SUCCESS, DELETE_POST_COMMENTS,
    DELETE_POSTS_SUCCESS, GET_POST_COMMENTS,
    GET_POSTS_SUCCESS, POST_ERROR,
    UPDATE_POSTS_SUCCESS
} from "../action.constant";
import {toast} from "react-toastify";


const initialState = {
    posts: [],
    postComments: []
}
const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload
            }
        case ADD_POSTS_SUCCESS:
            toast("New post added successfully.", {type: "success"})
            return state
        case GET_POST_COMMENTS:
            return {...state, postComments: action.payload}
        case UPDATE_POSTS_SUCCESS:
            toast("Post updated successfully.", {type: "success"})
            return state
        case DELETE_POSTS_SUCCESS:
            toast("Post deleted successfully.", {type: "success"})
            return state
        case ADD_POST_COMMENTS:
            toast("Comment added successfully", {type: "success"})
            return state
        case DELETE_POST_COMMENTS:
            toast("Comment deleted successfully", {type: "success"})
            return state
        case POST_ERROR:
            toast("Error occured", {type: "error"})
            return state
        default:
            return state
    }
}

const postSelector = (state) => state.postReducer

export { postSelector }
export default postReducer