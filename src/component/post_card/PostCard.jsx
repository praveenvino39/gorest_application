import React, {useState} from 'react';
import Styles from "./PostCard.module.css";
import {EditOutlined, DeleteOutlined} from "@ant-design/icons";
import {Button, Card, Col, Form, Input, Row} from "antd";
import AddPost from "../add_post/AddPost";
import {deletePost} from "../../data/actions/postAction";
import {useDispatch} from "react-redux/lib/exports";
import {useHistory} from "react-router-dom";
import TextArea from "antd/es/input/TextArea";
import PostComment from "../comment/PostComment";

const PostCard = (props) => {
    const [visibility, setVisibility] = useState(false)
    const [commentVisibility, setCommentVisibility] = useState(false)

    return (
        <div key={props.id}>
            {commentVisibility &&
                <PostComment id={props.id} visibility={commentVisibility} setVisiblity={setCommentVisibility}/>
            }
            <AddPost type="edit" id={props.id} title={props.title} body={props.body}
                     visibility={visibility} setVisiblity={setVisibility}/>
            <Card>
                <div className={Styles.titleContainer}>
                    <p className={Styles.title}>{props.title}</p>
                    <EditOutlined onClick={() => {
                        setVisibility(true)
                    }}/>
                </div>
                <p>{props.body}</p>
                <Button type={"dashed"} onClick={() => setCommentVisibility(true)}>View Comments</Button>
            </Card>
        </div>
    );
};

export default PostCard;