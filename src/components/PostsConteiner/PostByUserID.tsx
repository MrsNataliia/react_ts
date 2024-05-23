import React, {FC} from 'react';

import {IPost} from "../../models/IPost";

interface IProps{
    post: IPost
}

const PostByUserID: FC<IProps> = ({post}) => {
    const {title, body} = post
    return (
        <div>
            <h3>"{title}"</h3>
            <p>{body}</p>
        </div>
    );
};

export {PostByUserID};