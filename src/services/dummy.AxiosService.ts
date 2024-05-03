import axios, {AxiosResponse} from "axios";


import {UsersResponseModel} from "../models/UsersResponseModel";
import {PostsResponseModel} from "../models/PostsResponseModel";

const axiosService = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {}
});

const getAllUsers = (): Promise<AxiosResponse<UsersResponseModel>> =>{
    return axiosService.get('/users')
}

const getPostsByUserId = (userId: number): Promise<AxiosResponse<PostsResponseModel>> => {
    return axiosService.get('/posts/user/' +userId)
}

export {
    getAllUsers,
    getPostsByUserId
}

