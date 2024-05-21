import React, {FC} from 'react';

import {IPost} from "../models/postInterfacel";

interface IProps{
    post: IPost
}

const Post:FC<IProps> = ({post}) => {

    const {id, userId, title, body} = post

    return (
        <div>
            <h3>{title}</h3>
            <p>
                id: {id}
                <br/>
                userId: {userId}
                <br/>
                {body}
            </p>

        </div>
    );
};

export {Post};