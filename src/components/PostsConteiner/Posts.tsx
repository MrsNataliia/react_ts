import React, {FC, useEffect, useState} from 'react';

import {IPost} from "../../models/IPost";
import {postsService} from "../../sevices/postsService";
import {Post} from "./Post";

const Posts: FC = () => {
    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
       postsService.getAll().then(({data})=> setPosts(data))
    }, []);

    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};