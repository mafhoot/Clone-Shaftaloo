import { url } from "./consts";
import axios from "axios";

export function getRestaurant (data){
    return axios.get(url+"api/Restaurant/"+data)
}