import React, {FC} from 'react';

import {IUser} from "../../models/IUser";

interface IProps{
    user: IUser
}

const User: FC<IProps>= ({user}) => {
    const {id, name, email}= user
    return (
        <div>
            <p>id: {id} - {name} <br/>email: {email}</p>
        </div>
    );
};

export {User};