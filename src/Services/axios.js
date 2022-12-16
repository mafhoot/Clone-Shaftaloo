import { url , deployURL } from "./consts";
import axios from "axios";

export function postUser(data) {
    return axios.post(url+"api/User/postUser",data)
}

export function getbearer (data){
    return axios.post(url+"api/User/BearerToken",data)
}

export function getUser (){
    const config = {
        headers: { Authorization: `Bearer ${G("token")}` }
    };
    return axios.get(url+"api/User/GetUserData",config)
}

export function G(key){
    return localStorage.getItem(key);
}
export function S(key,value){
    localStorage.setItem(key,value);
}

export function getBearerToken(email="w@w.w",password="1234567"){
    return axios.post(url+"api/User/BearerToken",{email:email,password:password})
}
export function getRestaurant (data){
    return axios.get(url+"api/Restaurant/"+data)
}

export function getMenu (data){
    return axios.get(url+"api/Restaurant/GetRestaurantMenu/"+data)
}

export function getTable (restID , start , end) {
    return axios.get(url+ "api/ReserveTable/GetActiveReserveTablesByRestaurant?restauranId="+restID+"&from="+start+"&to="+end)
}
export function getRestaurantCards (tag, number, id){
    return axios.get(url+"api/Restaurant?tag="+tag+"&size=10&number="+number+"&cityid="+id)
}


export function postTable (data) {
    const config = {
        headers: { Authorization: `Bearer ${G("token")}` }
    };
    return axios.post(url+"api/ReserveTable",data,config)
    
}


export function postOrder (data) {
    const config = {
        headers: { Authorization: `Bearer ${G("token")}` }
    };
    return axios.post (url+"api/Order",data,config)
}

export function postPayment (data) {
    return axios.post (url+"api/Payment",data)
}