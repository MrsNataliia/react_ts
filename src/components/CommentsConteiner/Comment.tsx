import React, {FC} from 'react';

import {IComment} from "../../models/IComment";

interface IProps{
    comment: IComment
}

const Comment: FC <IProps> = ({comment}) => {
    const {id, name, body} = comment
    return (
        <div>
            <h3>id: {id} - {name}</h3>
            <p>{body}</p>

        </div>
    );
};

export {Comment};