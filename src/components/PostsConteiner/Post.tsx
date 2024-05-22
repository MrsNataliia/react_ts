import React, {FC} from 'react';

import {IPost} from "../../models/IPost";

interface IProps {
    post: IPost
}

const Post: FC<IProps> = ({post}) => {
    const {id, userId, title, body} = post
    return (
        <div>
            <h3>PostID: {id} -  "{title}"</h3>
            <p>userID: {userId}</p>
            <p>{body}</p>

        </div>
    );
};

export {Post};