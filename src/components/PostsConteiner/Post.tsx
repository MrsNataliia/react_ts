import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

import {IPost} from "../../models/IPost";


interface IProps{
    post: IPost
}

const Post: FC <IProps> = ({post}) => {
    const {id, title, userId, body} = post
    const navigate=useNavigate()
    return (
        <div>
            <h3>PostID: {id} - "{title}"</h3>
            <p>userID: {userId}</p>
            <p>{body}</p>
            <button onClick= {()=> navigate(post.id.toString())} >comments to the post</button>
        </div>
    );
};

export {Post};