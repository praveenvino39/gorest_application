import {
    ADD_TODO_SUCCESS,
    DELETE_POSTS_SUCCESS, DELETE_TODO_SUCCESS,
    GET_TODO_SUCCESS,
    TODO_ERROR,
    UPDATE_TODO_SUCCESS
} from "../action.constant";
import apiService from "../network/apiService";

export const getTodos = () => {
    return async (dispatch) => {
        try {
            const response = await apiService.allTodo()
            dispatch({type: GET_TODO_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({type: TODO_ERROR, payload: e.response})
        }
    }
}


export const addTodo = (data) => {
    return async (dispatch) => {
        try {
            const response = await apiService.addTodo(data)
            dispatch({type: ADD_TODO_SUCCESS, payload: response.data})
            dispatch(getTodos())
        } catch (e) {
            dispatch({type: TODO_ERROR, payload: e.response})
        }
    }
}

export const updateTodo = (data) => {
    return async (dispatch) => {
        try {
            const response = await apiService.updateTodo(data)
            dispatch({type: UPDATE_TODO_SUCCESS, payload: response.data})
            dispatch(getTodos())
        } catch (e) {
            dispatch({type: TODO_ERROR, payload: e.response})
        }
    }
}


export const deleteTodo = (id) => {
    return async (dispatch) => {
        try {
            const response = await apiService.deleteTodo(id)
            dispatch({type: DELETE_TODO_SUCCESS})
            dispatch(getTodos())

        } catch (e) {
            dispatch({type: TODO_ERROR, payload: e.response})
        }
    }
}

