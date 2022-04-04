import {
    ADD_POST_COMMENTS,
    ADD_POSTS_SUCCESS, DELETE_POST_COMMENTS, DELETE_POSTS_SUCCESS, GET_POST_COMMENTS,
    GET_POSTS_SUCCESS, POST_ERROR,
    UPDATE_POSTS_SUCCESS
} from "../action.constant";
import apiService from "../network/apiService";

export const getPosts = () => {
    return async (dispatch) => {
        try {
            const response = await apiService.allPost()
            console.log(response)
            dispatch({type: GET_POSTS_SUCCESS, payload: response.data})
        } catch (e) {
            console.log(e)
            dispatch({type: POST_ERROR})
        }

    }
}

export const addPost = (data) => {
    return async (dispatch) => {
        try {
            const response = await apiService.addPost(data)
            console.log(response)
            dispatch({type: ADD_POSTS_SUCCESS, payload: response.data})
            dispatch(getPosts())
        } catch (e) {
            console.log(e)
            dispatch({type: POST_ERROR})
        }

    }
}

export const updatePost = (data) => {
    return async (dispatch) => {
        try {
            console.warn(data)
            const response = await apiService.updatePost(data)
            console.log(response)
            dispatch({type: UPDATE_POSTS_SUCCESS, payload: response.data})
            dispatch(getPosts())

        } catch (e) {
            console.log(e)
            dispatch({type: POST_ERROR})
        }

    }
}

export const getCommentsbyPostId = (id) => {
    return async (dispatch) => {
        try {
            const response = await apiService.getCommentByPost(id)
            dispatch({type: GET_POST_COMMENTS, payload: response.data})
        } catch (e) {
            console.log(e)
            dispatch({type: POST_ERROR})
        }

    }
}

export const addComentToPost = (data) => {
    return async (dispatch) => {
        try {
            const response = await apiService.addCommentToPost(data)
            dispatch({type: ADD_POST_COMMENTS, payload: response.data})
            dispatch(getCommentsbyPostId(data.id))
        } catch (e) {
            console.log(e)
            dispatch({type: POST_ERROR})
        }

    }
}

export const deleteCommentById = (id, postID) => {
    return async (dispatch) => {
        try {
            const response = await apiService.deleteCommentById(id)
            dispatch({type: DELETE_POST_COMMENTS})
            dispatch(getCommentsbyPostId(postID))
        } catch (e) {
            console.log(e)
            dispatch({type: POST_ERROR})
        }

    }
}




export const deletePost = (id) => {
    return async (dispatch) => {
        try {
            const response = await apiService.deletePost(id)
            dispatch({type: DELETE_POSTS_SUCCESS})
            dispatch(getPosts())
        } catch (e) {
            console.log(e)
            dispatch({type: POST_ERROR})
        }

    }
}