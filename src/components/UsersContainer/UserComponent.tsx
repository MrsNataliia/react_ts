import React, {FC} from 'react';

import {UserModel} from "../../models/UserModel";

type IProp = {user: UserModel} & {postsByUserId?:(userID:number)=>void}

const UserComponent: FC<IProp> = ({user,postsByUserId}) => {

    const onclickHandler = ()=>{
        if (postsByUserId){

            postsByUserId(user.id)
        }


    }

    return (
        <div>
            <h3>{user.firstName} {user.lastName}</h3>
            <p>id: {user.id} <br/>username: {user.username}</p>
            <button onClick={onclickHandler}>posts by user</button>

        </div>
    );
};

export {UserComponent};