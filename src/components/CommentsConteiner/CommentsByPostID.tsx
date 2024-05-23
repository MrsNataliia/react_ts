import React, {FC} from 'react';

import {IComment} from "../../models/IComment";
import {CommentByPostID} from "./CommentByPostID";

interface IProps{
    comments: IComment[]
}

const CommentsByPostID: FC <IProps> = ({comments}) => {
    return (
        <div>
            {comments.map(comment => <CommentByPostID key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {CommentsByPostID};