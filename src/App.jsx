import React, {useCallback, useEffect, useState} from 'react'
import logo from './logo.svg'
import AppStyle from './App.Module.css';
import {BrowserRouter, Route, Switch, useHistory} from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import Dashboard from "./component/pages/dashboard/Dashboard";
import Post from "./component/pages/post/Post";
import Todo from "./component/pages/todo/Todo";
import {ToastContainer} from "react-toastify";
import PrivateRoute from "./component/extension/private_route/PrivateRoute";
import CreateUser from "./component/create_user/CreateUser";
import {useDispatch, useSelector} from "react-redux";
import {authSelector} from "./data/reducers/authReducer";

function App() {
    const authState = useSelector(authSelector)
    return (
        <div className={AppStyle.App}>
            <ToastContainer/>
            <BrowserRouter>
                <Navbar/>
                <Switch>
                    <Route path="/create-user" component={CreateUser}/>
                    <PrivateRoute exact path="/" auth={authState.isAuthenticated} component={Dashboard}/>
                    <PrivateRoute exact path="/post" auth={authState.isAuthenticated} component={Post}/>
                    <PrivateRoute exact path="/todo" auth={authState.isAuthenticated} component={Todo}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App
