import React from "react";
import { Order_card } from "./order-card";

import './user-order.css'

export const User_order = () => {


    return(
        <>
        
            <div className="user-order">
                <div className="order-container">
                    <Order_card/>
                    <Order_card/>
                    <Order_card/>
                </div>
            </div>

        </>
    )
}