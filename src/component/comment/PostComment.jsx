import React, {useEffect, useState} from 'react';
import {Button, Col, Drawer, Form, Input, Row, Space} from "antd";
import TextArea from "antd/es/input/TextArea";
import {useDispatch, useSelector} from "react-redux";
import {addComentToPost, deleteCommentById, getCommentsbyPostId} from "../../data/actions/postAction";
import {postSelector} from "../../data/reducers/postReducer";
import Styles from "./PostComment.module.css"
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";

const PostComment = (props) => {

    const dispatch = useDispatch()
    const comments = useSelector(postSelector).postComments

    useEffect(() => {
        dispatch(getCommentsbyPostId(props.id))
    }, [])

    const handleSubmit = (value) => {
        dispatch(addComentToPost({...value, id: props.id}))
    }
    const handleDelete = (id) => {
        dispatch(deleteCommentById(id, props.id))
    }

    const handleEdit = (comment) => {
        setIsEdit(true)

        console.warn(comment)
        setComment({...comment})
    }


    return (
        <Drawer
            placement={"left"}
            title={"Comments"}
            onClose={() => props.setVisiblity(false)}
            visible={props.visibility}
            bodyStyle={{paddingBottom: 80}}
            extra={
                <Space>
                    <Button onClick={() => props.setVisiblity(false)}>Cancel</Button>

                </Space>
            }
        >
            <Form onFinish={handleSubmit} layout="vertical" hideRequiredMark>
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item
                            name="name"
                            label="Name"
                            rules={[{required: true, message: "Username shouldn't be empty"}]}
                        >
                            <Input placeholder="Enter username"/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item
                            name="email"
                            label="Email"
                            rules={[{required: true, message: "Email shouldn't be empty", type: "email"}]}
                        >
                            <Input placeholder="Enter email id"/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item
                            name="body"
                            label="Comment"
                            rules={[{required: true, message: "Comment shouldn't be empty"}]}
                        >
                            <TextArea placeholder="Enter Comment here"/>
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={24}>
                        <Button htmlType="submit" onClick={() => {
                        }} type="primary">
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
            {comments.length > 0 && <div className={Styles.comment}>
                <h2>Comments</h2>
                {comments.map(element => <div key={element.id}>
                    <div className={Styles.commentContainer}>
                        <div className={Styles.commentHeader}>

                            <p className={Styles.commentName}>{element.name}</p>
                            <div className={Styles.commentActions}>
                                <DeleteOutlined className={Styles.commentIcon}
                                                onClick={() => handleDelete(element.id)}/>
                                <EditOutlined onClick={() => {
                                }} className={Styles.commentIcon}/>
                            </div>
                        </div>
                        <p className={Styles.commentBody}>{element.body}</p>
                    </div>
                </div>)}

            </div>}

        </Drawer>
    );
};


export default PostComment;