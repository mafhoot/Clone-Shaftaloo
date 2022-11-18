import { url } from "./consts";
import axios from "axios";

export function postUser(data) {
    return axios.post(url+"api/User/postUser",data)
}

export function getbearer (data){
    return axios.post(url+"api/User/BearerToken",data)
}

<<<<<<< Updated upstream
export function getRestaurantCards (){
    return axios.get(url+"api/Restaurant?tag=all&size=10&number=0")
=======
export function getRestaurantCards (tag="all"){
    return axios.get(url+`api/Restaurant?tag=${tag}`)
>>>>>>> Stashed changes
}
