import React, {useState} from 'react';
import AddPost from "../add_post/AddPost";
import {Card, Switch} from "antd";
import Styles from "../post_card/PostCard.module.css";
import {EditOutlined} from "@ant-design/icons";
import Todo from "../pages/todo/Todo";
import AddTodo from "../add_todo/AddTodo";
import {useDispatch} from "react-redux/lib/exports";
import {updateTodo} from "../../data/actions/todoAction";

const TodoCard = (props) => {
    const [visibility, setVisibility] = useState(false)
    return (
        <div>
            <AddTodo type="edit" status={props.status} title={props.title} id={props.id}
                     visibility={visibility} setVisiblity={setVisibility}/>
            <Card>
                <div className={Styles.titleContainer}>
                    <p className={Styles.title}>{props.title}</p>
                    <EditOutlined onClick={() => {
                        setVisibility(true)
                    }}/>
                </div>
                <p>Status: {props.status}</p>
            </Card>
        </div>
    );
};

export default TodoCard;