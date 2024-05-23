import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "../layouts/MainLayout";
import {ErrorPage} from "../pages/ErrorPage";
import {UsersPage} from "../pages/UsersPage";
import {PostsPage} from "../pages/PostsPage";
import {CommentsPage} from "../pages/CommentsPage";
import {UserPostsPage} from "../pages/UserPostsPage";
import {PostCommentsPage} from "../pages/PostCommentsPage";

export const router = createBrowserRouter([
    {
        path:'', element:<MainLayout/>, errorElement:<ErrorPage/>, children:[

            {
                index: true, element:<Navigate to={'users'}/>},
            {
                path: 'users', element:<UsersPage/>
            },
            {
                path: 'posts', element:<PostsPage/>, children:[
                    {
                        path: ':id', element:<PostCommentsPage/>
                    }
                ]
            },
            {
                path: 'users/:id', element:<UserPostsPage/>
            },
            {
                path: 'comments', element:<CommentsPage/>,

            }
        ]
    }
])