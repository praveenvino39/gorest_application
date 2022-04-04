import React from 'react';
import {Menu} from "antd";
import {DashboardOutlined, FileTextOutlined, MessageOutlined, UnorderedListOutlined} from "@ant-design/icons";
import {useHistory, Link} from "react-router-dom";

const {SubMenu} = Menu

const Navigation = (props) => {
    const navigator = useHistory();
    const navigate = (route) => {
        props.setVisibility(false)
        navigator.push(route)
    }

    return (
        <Menu
            mode={props.type}>
            <Menu.Item key="1" onClick={() => navigate("/")} icon={<DashboardOutlined/>}>Dashboard</Menu.Item>
            <Menu.Item key="2" onClick={() => navigate("/post")} icon={<FileTextOutlined/>}>Post</Menu.Item>
            <Menu.Item key="4" onClick={() => navigate("/todo")} icon={<UnorderedListOutlined/>}>Todo</Menu.Item>
            {/*</SubMenu>*/}
        </Menu>
    );
};

export default Navigation;