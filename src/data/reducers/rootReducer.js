import {combineReducers} from "@reduxjs/toolkit";
import postReducer from "./postReducer";
import commentReducer from "./commentReducer";
import todoReducer from "./todoReducer";
import authReducer from "./authReducer";

export const rootReducer = combineReducers({postReducer, commentReducer, todoReducer, authReducer})