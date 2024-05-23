import {AxiosResponse} from "axios";
import {axiosService} from "./axiosService";

import {IComment} from "../models/IComment";
import {urls} from "../constants/urls";

const commentsService ={
    getAll: (): Promise<AxiosResponse<IComment[]>> => axiosService.get(urls.comments.base),
    getByPostId: (postId: string): Promise<AxiosResponse<IComment[]>> => axiosService.get(urls.comments.byPostId(postId))
}

export {commentsService}