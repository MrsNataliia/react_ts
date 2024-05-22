import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "../layouts/MainLayout";
import {ErrorPage} from "../pages/ErrorPage";
import {PostsPage} from "../pages/PostsPage";
import {CommentsPage} from "../pages/CommentsPage";
import {UsersPage} from "../pages/UsersPage";

export const router = createBrowserRouter([
    {
        path:'', element:<MainLayout/>, errorElement:<ErrorPage/>, children:[

            {
                index: true, element:<Navigate to={'users'}/>},
            {
                path: 'users', element:<UsersPage/>
            },
            {
                path: 'posts', element:<PostsPage/>
            },
            {
                path: 'comments', element:<CommentsPage/>
            }
        ]
    }
])