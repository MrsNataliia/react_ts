import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {CommentsByPostID} from "../components/CommentsConteiner/CommentsByPostID";
import {IComment} from "../models/IComment";
import {commentsService} from "../sevices/commentsService";

const PostCommentsPage: FC = () => {

    const {id} = useParams()

    const [comments, setComments] = useState<IComment[]>([])

    useEffect(() => {
        if (id){
            commentsService.getByPostId(id).then(({data})=>setComments(data))
        }

    }, [id]);


    return (
        <div>
            <h2>Comments to the postID {id}:</h2>

            <CommentsByPostID comments={comments}/>
        </div>
    );
};

export {PostCommentsPage};