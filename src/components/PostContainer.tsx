import React, {useEffect, useState} from 'react';
import {PostForm} from "./PostForm";

import {Posts} from "./Posts";
import {IPost} from "../models/postInterfacel";
import {postService} from "../service/postService";


const PostContainer = () => {

    const [posts, setPosts] = useState<IPost[]>([])
    const [trigger, setTrigger] = useState<boolean>(null)

    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data))

    }, [trigger]);

    const changeTrigger = ()=>{
        setTrigger(prevState => !prevState)
    }


    return (
        <div>
            <PostForm changeTrigger={changeTrigger}/>
            <hr/>
            <Posts posts={posts}/>
        </div>
    );
};

export {PostContainer};