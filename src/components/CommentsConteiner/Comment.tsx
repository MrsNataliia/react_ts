import React, {FC} from 'react';

import {IComment} from "../../models/IComment";

interface IProps{
    comment: IComment
}

const Comment: FC <IProps> = ({comment}) => {
    const {id, name, postId, email, body}=comment

    return (
        <div>
            <h3>{name}</h3>
            <p>ID: {id} <br/>postID: {postId} <br/>email: {email}</p>
            <p>{body}</p>
        </div>
    );
};

export {Comment};