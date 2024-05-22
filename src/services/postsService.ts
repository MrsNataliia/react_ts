import {axiosService} from "./axiosService";
import {AxiosResponse} from "axios";

import {urls} from "../constants/urls";
import {IPost} from "../models/IPost";

const postsService ={
    getAll: ():Promise<AxiosResponse<IPost[]>> => axiosService.get(urls.posts)
}

export {
    postsService
}