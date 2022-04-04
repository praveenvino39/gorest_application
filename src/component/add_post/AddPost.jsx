import React, {useEffect, useState} from 'react';
import {Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space} from "antd";
import TextArea from "antd/es/input/TextArea";
import {addPost, deletePost, updatePost} from "../../data/actions/postAction";
import {useDispatch, useSelector} from "react-redux";


const AddPost = (props) => {
    const dispatch = useDispatch()
    const handleSubmit = (value) => {
        props.setVisiblity(false)
        if (props.type === "create") {
            dispatch(addPost(value))
        } else {
            const newValue = {...value, id: props.id}
            console.log(newValue)
            dispatch(updatePost(newValue))
        }
    }
    const handleDelete = (id) => {
        props.setVisiblity(false)
        dispatch(deletePost(id))
    }
    return (
        <Drawer
            title={props.type === "create" ? "Add New Post" : "Edit Post"}
            onClose={() => props.setVisiblity(false)}
            visible={props.visibility}
            bodyStyle={{paddingBottom: 80}}
            extra={
                <Space>
                    <Button onClick={() => props.setVisiblity(false)}>Cancel</Button>
                    {props.type === "edit" && <Button type="primary" onClick={() => handleDelete(props.id)}>Delete</Button>}

                </Space>
            }
        >
            <Form onFinish={handleSubmit} layout="vertical" hideRequiredMark>
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item
                            name="title"
                            label="Title"
                            initialValue={props.type === "edit" ? props.title : ""}
                            rules={[{required: true, message: "Title shouldn't be empty"}]}
                        >
                            <Input placeholder="Enter post title"/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item
                            name="body"
                            label="Body"
                            initialValue={props.type === "edit" ? props.body : ""}
                            rules={[{required: true, message: "Body shouldn't be empty"}]}
                        >
                            <TextArea placeholder="Enter post body"/>
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
        </Drawer>
    );
};

export default AddPost;