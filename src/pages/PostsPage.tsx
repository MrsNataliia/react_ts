import React, {FC} from 'react';
import {Outlet} from "react-router-dom";

import {Posts} from "../components/PostsConteiner/Posts";


const PostsPage: FC = () => {
    return (
        <div>
            <Outlet/>
            <hr/>
            <Posts/>
        </div>
    );
};

export {PostsPage};