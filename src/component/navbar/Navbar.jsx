import React, {useState} from 'react';
import Styles from './Navbar.module.css'
import {Drawer, Menu} from "antd";
import {
    AppstoreOutlined,
    MailOutlined,

    MenuUnfoldOutlined, SettingOutlined,
} from '@ant-design/icons';
import Navigation from "../navigation/Navigation";

const {SubMenu} = Menu;


const Navbar = () => {
    const [visible, setVisibility] = useState(false)
    return (
        <div>
            <div className={Styles.appNameContainer}>
                <MenuUnfoldOutlined onClick={() =>{
                    console.log("Clicked")
                    setVisibility(true)}
                }  className={Styles.btnMenu}/>
                <h2 className={Styles.appName}>Go Rest Application</h2>
            </div>

            <div className={Styles.desktopNavContainer}>
                <Navigation type="horizontal" setVisibility={setVisibility} />
            </div>
            <Drawer
                bodyStyle={bodyStyle}
                title="Go Rest Application"
                placement="left"
                closable={true}
                onClose={() => setVisibility(false)}
                visible={visible}>
                <Navigation setVisibility={setVisibility} type={"inline"}/>
            </Drawer>

        </div>
    );
};


export default Navbar;


const bodyStyle ={
    padding: "0px",
    marginRight: "10px"
}