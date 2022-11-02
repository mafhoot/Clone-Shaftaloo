import { url } from "../consts";
import axios from "axios";

export function postUser(data) {
    return axios.post(url+"api/User",data)
}