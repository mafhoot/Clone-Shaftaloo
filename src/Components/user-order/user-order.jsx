import React, { useEffect, useState } from "react";
import { Order_card } from "./order-card";
import { get_user_orders } from "../../Services/axios";

import './user-order.css'

export const User_order = () => {

    const [orders, setOrders] = useState([])

    useEffect(() => {

        get_user_orders()
        .then((responsse) => {
            console.log("orders : ", responsse.data)
            setOrders(responsse.data)
        })
        .catch((error) => {
            console.log(error.responsse.data)
        })
        
    }, [])

    const handlClick = () => {
        console.log("go to restaurant page!")
    }

    const orders_gen = () => {
        const tmp=[]
        orders.forEach(o => {
            console.log(o);
            
            tmp.push(
                <div className="">
                    <Order_card order={o}/>
                </div>
            )
      })
      if (tmp.length == 0) {
        return (
            <div className="nothing">
                <label className="label-btnnn">You have not registered an order yet, Go order :</label>
                <button 
                    className="btn-go-to-res-page"
                    onClick={() => handlClick()}
                    >
                        restaurants
                </button>
            </div>
        )
      }
                
      return tmp;
    }


    const res_logo = "https://wpcdn.us-east-1.vip.tn-cloud.net/www.klkntv.com/content/uploads/2020/08/KFC-LOGO-1024x881.jpg"
    return(
        <>
        
            <div className="user-order">
                <div className="order-container">
                    <div className="title-orders">
                        <h1 className="title-orders-h1">My orders</h1>
                    </div>
                    <div className="">
                        {orders_gen()}
                    </div>
                </div>
            </div>

        </>
    )
}