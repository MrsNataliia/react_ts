import React, {FC, useEffect, useState} from 'react';

import {UserModel} from "../../models/UserModel";
import {getAllUsers} from "../../services/dummy.AxiosService";
import {UserComponent} from "./UserComponent";

type IProps= {postsByUserId?:(userID:number)=>void}

const UsersComponent: FC <IProps>= ({ postsByUserId}) => {

    const [users, setUsers] = useState<UserModel[]>([]);


    useEffect(() => {
        getAllUsers().then(({data:{users}})=>setUsers(users))

    }, []);

    return (
        <div>

            {users.map(user => (
                <UserComponent
                    key={user.id}
                    user={user}
                    postsByUserId={postsByUserId}
                />))

            }

        </div>
    );
};

export {UsersComponent};