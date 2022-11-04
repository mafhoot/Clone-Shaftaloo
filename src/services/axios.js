import { url } from "./consts";
import axios from "axios";

export function postUser(data) {
    return axios.post(url+"api/User/postUser",data)
}

export function getbearer (data){
    return axios.post(url+"api/User/BearerToken",data)
}

export function getEmail(data){
    return axios.get(url+"api/User/"+data)
}