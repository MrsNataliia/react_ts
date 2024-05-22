import {axiosService} from "./axiosService";
import {AxiosResponse} from "axios";

import {urls} from "../constants/urls";
import {IUser} from "../models/IUser";

const usersService ={
    getAll: (): Promise<AxiosResponse<IUser[]>> => axiosService.get(urls.users)
}

export {
    usersService
}