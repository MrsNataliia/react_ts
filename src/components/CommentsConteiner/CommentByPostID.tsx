import React, {FC} from 'react';

import {IComment} from "../../models/IComment";

interface IProps{
    comment: IComment
}

const CommentByPostID: FC <IProps> = ({comment}) => {
    const { name, body} = comment
    return (
        <div>
            <h4>{name}</h4>
            <p>{body}</p>
        </div>
    );
};

export {CommentByPostID};