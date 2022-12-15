import React, { useState } from "react";
import { Order_card } from "./order-card";

import './user-order.css'

export const User_order = () => {

    const [orders, setOrders] = useState()

    const orders_gen = () => {

    }

    return(
        <>
        
            <div className="user-order">
                <div className="order-container">
                    <div className="">
                        <Order_card/>
                    </div>
                </div>
            </div>

        </>
    )
}