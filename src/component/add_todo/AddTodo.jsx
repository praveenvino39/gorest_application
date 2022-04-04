import React, {useEffect, useState} from 'react';
import {Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space} from "antd";
import TextArea from "antd/es/input/TextArea";
import {addPost, deletePost, updatePost} from "../../data/actions/postAction";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, deleteTodo, updateTodo} from "../../data/actions/todoAction";


const AddTodo = (props) => {
    const dispatch = useDispatch()
    const handleSubmit = (value) => {
        props.setVisiblity(false)
        if (props.type === "create") {
            dispatch(addTodo({...value, status: "pending"}))
        } else {
            dispatch(updateTodo({...value, id: props.id}))
        }
    }
    const handleDelete = (id) => {
        props.setVisiblity(false)
        console.warn(id)
        dispatch(deleteTodo(id))
    }
    return (
        <Drawer
            title={props.type === "create" ? "Add New Todo" : "Edit Todo"}
            onClose={() => props.setVisiblity(false)}
            visible={props.visibility}
            bodyStyle={{paddingBottom: 80}}
            extra={
                <Space>
                    <Button onClick={() => props.setVisiblity(false)}>Cancel</Button>
                    {props.type === "edit" &&
                        <Button type="primary" onClick={() => handleDelete(props.id)}>Delete</Button>}

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
                {props.type === "edit" && <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item
                            name="status"
                            label="Status"
                            initialValue={props.status}
                            rules={[{required: false, message: "status"}]}
                        >
                            <Select placeholder="Status">
                                <Option value="pending">Pending</Option>
                                <Option value="completed">Completed</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>}


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

export default AddTodo;