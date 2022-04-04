import React, {useEffect, useState} from 'react';
import Styles from "../post/Post.module.css";
import AddPost from "../../add_post/AddPost";
import {FileTextOutlined, PlusCircleOutlined} from "@ant-design/icons";
import PostCard from "../../post_card/PostCard";
import {useDispatch, useSelector} from "react-redux";
import {postSelector} from "../../../data/reducers/postReducer";
import {getPosts} from "../../../data/actions/postAction";
import {todoSelector} from "../../../data/reducers/todoReducer";
import {getTodos} from "../../../data/actions/todoAction";
import AddTodo from "../../add_todo/AddTodo";
import TodoCard from "../../todo_card/TodoCard";

const Todo = () => {
    const todos = useSelector(todoSelector).todos
    const dispatch = useDispatch()
    const [visibility, setVisibility] = useState(false)
    useEffect(() => {
        dispatch(getTodos())
    }, [])
    return (<div className={Styles.postLayout}>
        <AddTodo type="create" visibility={visibility} setVisiblity={setVisibility}/>
        <div className={Styles.titleContainer}>
            <h1>Todo</h1>
            <PlusCircleOutlined onClick={() => setVisibility(!visibility)}/>
        </div>
        {todos.map((element) => <div key={element.id}>
            <TodoCard key={element.id} {...element} />
        </div>)}
    </div>);
};

export default Todo;