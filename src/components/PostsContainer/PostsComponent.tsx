import React, {FC} from 'react';

import {PostModel} from "../../models/PostModel";
import {PostComponent} from "./PostComponent";


interface IProps{
    posts: PostModel[]
}
const PostsComponent:FC<IProps> = ({posts}) => {
    console.log(posts)
    return (

        <div>
            {posts.map((post)=><PostComponent key={post.id} post={post}/>)}
        </div>
    );
};



export {PostsComponent};