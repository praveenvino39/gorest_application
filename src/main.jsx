import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'antd/dist/antd.css'
import 'react-toastify/dist/ReactToastify.css';

import App from './App'
import {applyMiddleware, createStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {rootReducer} from "./data/reducers/rootReducer";
import {Provider} from "react-redux";



const store = createStore(rootReducer, applyMiddleware(thunk))
ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
    document.getElementById('root')
)
