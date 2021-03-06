import React, {useEffect} from 'react';
import {Button, Checkbox, Col, Form, Input, Modal, Row} from "antd";
import {Select} from 'antd';
import {useDispatch} from "react-redux";
import {createUser} from "../../data/actions/authAction";
import Styles from './CreateUser.module.css';
import {localService} from "../../data/local/sessionManager";
import {useHistory} from "react-router-dom";

const {Option} = Select

const CreateUser = () => {
    const dispatch = useDispatch()
    const navigator = useHistory()
    const handleCreateUser = (e) => {
        dispatch(createUser({...e, status: "active"}))
    }
    useEffect(() => {
        if (localService.getUserId()) {
            navigator.push("/")
        }
    }, [])
    return (
        <div>

            <Modal
                title="Create User"
                visible={true}
                onOk={(e) => handleCreateUser(e)}
                footer={[]}
                closable={false}
                okText={"Create User"}
            >
                <Form
                    style={{margin: "10px 10%"}}
                    onFinish={(e) => handleCreateUser(e)}
                    autoComplete="off"
                >


                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{required: true, message: 'Please input your email ID!', type: "email"}]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{required: true, message: 'Please input name!'}]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="Gender"
                        name="gender"
                        rules={[{required: true, message: 'Please select gender!.'}]}
                    >
                        <Select placeholder={"Gender"}>
                            <Option value="male">Male</Option>
                            <Option value="female">Female</Option>
                        </Select>
                    </Form.Item>
                    <div className={Styles.btnContainer}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </div>
                </Form>
            </Modal>
        </div>
    );
};

export default CreateUser;