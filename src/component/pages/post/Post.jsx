import React, {useEffect, useMemo, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {postSelector} from "../../../data/reducers/postReducer";
import {getPosts} from "../../../data/actions/postAction";
import {Card, Collapse} from "antd";
import Styles from './Post.module.css'
import AddPost from "../../add_post/AddPost";
import {FileTextOutlined, EditOutlined, PlusCircleOutlined} from "@ant-design/icons";
import PostCard from "../../post_card/PostCard";
import Select from 'react-select'


const {Panel} = Collapse;


const Post = () => {
    const posts = useSelector(state => state.postReducer).posts
    const searchableposts = useMemo(() => {
        return posts.map((element) => {
            return {value: element.title, label: element.title}
        })
    }, [posts])
    const dispatch = useDispatch()
    const [visibility, setVisibility] = useState(false)
    useEffect(() => {
        dispatch(getPosts())
    }, [])

    return (
        <div className={Styles.postLayout}>
            <AddPost type="create" visibility={visibility} setVisiblity={setVisibility}/>
            <Select placeholder="Search Here" options={searchableposts}/>
            <div className={Styles.titleContainer}>
                <h1>POST</h1>
                <PlusCircleOutlined onClick={() => setVisibility(!visibility)}/>
            </div>
            {posts.map((element) => <div key={element.id}>
                <PostCard {...element} />
            </div>)}
        </div>);
};

export default Post;