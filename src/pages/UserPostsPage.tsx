import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {PostsByUserID} from "../components/PostsConteiner/PostsByUserID";
import {IPost} from "../models/IPost";
import {postsService} from "../sevices/postsService";

const UserPostsPage: FC = () => {
    const {id} = useParams()
    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        if(id){
            postsService.getByUserId(id).then(({data})=>setPosts(data))
        }

    }, [id]);


    return (
        <div>
            <h2>Posts by userID {id}:</h2>
            <hr/>
            <PostsByUserID posts={posts}/>

        </div>
    );
};

export {UserPostsPage};