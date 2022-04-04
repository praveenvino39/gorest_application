import React, {useEffect} from 'react';
import DashboardCard from "../../card/DashboardCard";
import Styles from './Dashboard.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../../../data/actions/postAction";
import {getComments} from "../../../data/actions/commentAction";
import {getTodos} from "../../../data/actions/todoAction";
import {postSelector} from "../../../data/reducers/postReducer";
import {commentSelector} from "../../../data/reducers/commentReducer";
import {todoSelector} from "../../../data/reducers/todoReducer";

const Dashboard = () => {
    const dispatch = useDispatch()
    const postCount = useSelector(postSelector).posts.length
    const commentCount = useSelector(commentSelector).comments.length
    const todoCount = useSelector(todoSelector).todos.length
    useEffect(() => {
        dispatch(getPosts())
        dispatch(getComments())
        dispatch(getTodos())
    }, [])


    return (
        <div className={Styles.dasboardLayout}>
            <DashboardCard count={postCount} route="post" title="Post Count"/>
            <DashboardCard route="comment" count={commentCount} title="Comment Count"/>
            <DashboardCard route="todo" count={todoCount} title="Todo Count"/>
        </div>
    );

};

export default Dashboard;