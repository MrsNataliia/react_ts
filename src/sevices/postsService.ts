import {AxiosResponse} from "axios";
import {axiosService} from "./axiosService";

import {IPost} from "../models/IPost";
import {urls} from "../constants/urls";

const postsService ={
    getAll: (): Promise<AxiosResponse<IPost[]>> => axiosService.get(urls.posts.base),
    getByUserId: (userId:string): Promise<AxiosResponse<IPost[]>> => axiosService.get(urls.posts.byUserId(userId))
}

export {
    postsService
}