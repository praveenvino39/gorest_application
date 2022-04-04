import React, { useState } from 'react'
import logo from './logo.svg'
import AppStyle from './App.Module.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import Dashboard from "./component/pages/dashboard/Dashboard";
import Post from "./component/pages/post/Post";
import Todo from "./component/pages/todo/Todo";
import {ToastContainer} from "react-toastify";

function App() {

  return (
      <div className={AppStyle.App}>
          <ToastContainer />

          <BrowserRouter>
              <Navbar />
              <Switch>
                  <Route
                      exact path="/" component={Dashboard}/>
                  <Route exact  path="/post" component={Post}/>
                  <Route exact  path="/todo" component={Todo}/>
              </Switch>
          </BrowserRouter>
      </div>
  )
}

export default App
