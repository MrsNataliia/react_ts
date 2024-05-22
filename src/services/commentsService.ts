import {AxiosResponse} from "axios";
import {axiosService} from "./axiosService";

import {urls} from "../constants/urls";
import {IComment} from "../models/IComment";

const commentsService={
    getAll:(): Promise<AxiosResponse<IComment[]>> => axiosService.get(urls.comments)
}

export {
    commentsService
}