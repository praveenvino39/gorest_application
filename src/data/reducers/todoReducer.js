import {
    ADD_TODO_SUCCESS,
    DELETE_TODO_SUCCESS,
    GET_TODO_SUCCESS,
    TODO_ERROR,
    UPDATE_TODO_SUCCESS
} from "../action.constant";
import {toast} from "react-toastify";


const initialState = {
    todos: []
}
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODO_SUCCESS:
            console.warn(action.payload)
            return {
                ...state,
                todos: action.payload
            }
        case ADD_TODO_SUCCESS:
            toast("New todo added successfully", {type: 'success'})
            return {
                ...state,
            }
        case UPDATE_TODO_SUCCESS:
            toast("Todo update successfully", {type: 'success'})
            return {
                ...state,
            }
        case DELETE_TODO_SUCCESS:
            toast("Todo deleted successfully", {type: 'success'})
            return {
                ...state,
            }
        case TODO_ERROR:
            toast("Error occurred", {type: 'error'})
            return {
                ...state,
            }
        default:
            return state
    }
}
const todoSelector = (state) => state.todoReducer

export {todoSelector}
export default todoReducer