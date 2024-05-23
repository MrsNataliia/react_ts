import React, {FC} from 'react';

import {IPost} from "../../models/IPost";
import {PostByUserID} from "./PostByUserID";

 interface IProps{
     posts: IPost[]
 }
const PostsByUserID: FC<IProps> = ({posts}) => {

    return (
        <div>
            {posts.map(post => <PostByUserID key={post.id} post={post}/>)}
        </div>
    );
};

export {PostsByUserID};