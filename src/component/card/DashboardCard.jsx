import React, {useEffect, useState} from 'react';
import Styles from './DashboardCard.module.css'
import {Avatar, Card, Skeleton} from "antd";
import {PlusCircleFilled, PlusCircleOutlined} from "@ant-design/icons";
import {useHistory} from "react-router-dom";
import Meta from "antd/es/card/Meta";
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../../data/actions/postAction";
import {getComments} from "../../data/actions/commentAction";
import {getTodos} from "../../data/actions/todoAction";

const DashboardCard = (props) => {
    const navigator = useHistory()


    return (
        <div className={Styles.cardContainer}>
            <Card title={props.title}  >
                    <p className={Styles.count}>{props.count}</p>

            </Card>
        </div>
    );
};

export default DashboardCard;