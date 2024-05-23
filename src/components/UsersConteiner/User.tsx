import React, {FC} from 'react';
import {Link} from "react-router-dom";

import {IUser} from "../../models/IUser";


interface IProps {
    user: IUser
}

const User: FC <IProps> = ({user}) => {
    const {id, name}= user
    return (
        <div>
            <Link to={user.id.toString()}>id: {id} - {name}</Link>
        </div>
    );
};

export {User};