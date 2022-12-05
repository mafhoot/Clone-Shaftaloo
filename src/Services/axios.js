import { url } from "./consts";
import axios from "axios";

export function putUser(data) {
    const config = {
        headers: { Authorization: `Bearer ${G("token")}` }
    };
    return axios.put(url+"api/User",data,config)
}


export function getUser(data) {
    return axios.get(url+"api/User/GetUserData",data)
}

// export function getbearer (data){
//     return axios.post(url+"api/User/BearerToken",data)
// }


export function G(key){
    return localStorage.getItem(key);
}
export function S(key,value){
    localStorage.setItem(key,value);
}


