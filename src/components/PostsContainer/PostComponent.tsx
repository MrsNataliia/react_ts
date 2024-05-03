import React, {FC} from 'react';

import {PostModel} from "../../models/PostModel";

interface IProps{
    post: PostModel
}

const PostComponent:FC<IProps> = ({post}) => {
    return (
        <div>
            <h3>{post.title}</h3>
            <p>UserId: {post.userId} <br/>PostId: {post.id}</p>
            <p>{post.body}</p>


        </div>
    );
};

export {PostComponent};