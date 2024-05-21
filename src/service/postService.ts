import {axiosService} from "./axiosService";

import {urls} from "../constsnts/urls";
import {IPost} from "../models/postInterfacel";
import {IRes} from "../models/responseType";

const postService = {
    getAll: (): IRes<IPost[]> => axiosService.get(urls.posts),
    create: (data:IPost) => axiosService.post(urls.posts, data)
}

export {
    postService
}

