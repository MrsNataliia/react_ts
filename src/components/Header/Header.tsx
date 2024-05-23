import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css'


const Header: FC = () => {
    return (
        <div className={css.Header}>
            <NavLink to={'/users'}>USERS</NavLink>
            <NavLink to={'/posts'}>POSTS</NavLink>
            <NavLink to={'/comments'}>COMMENTS</NavLink>
        </div>
    );
};

export {Header};