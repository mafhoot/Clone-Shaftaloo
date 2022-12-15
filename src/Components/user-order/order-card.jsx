import React from "react";

import './user-order.css'

export const Order_card = (/*{restaurant_name, order_time, logo_res, order_cost, factor, status}*/) => {

    const logo_res = "https://wpcdn.us-east-1.vip.tn-cloud.net/www.klkntv.com/content/uploads/2020/08/KFC-LOGO-1024x881.jpg";

    return (
        <>
            <div className="order-card">
                <div className="order-card-left">
                    <div className="order-res-info">
                        <img className="order-res-logo" src={logo_res} alt="" />
                        <div className="order-res-name-and-time">
                            <h2 className="order">Restaurant name</h2>
                            <div className="order-time">
                                <h3 className="order">Order Time</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order-card-right">
                    <div className="order-cost">
                        <h2 className="order">Order cost : 2000 $</h2>
                    </div>
                    <div className="order-factor-and-status">
                        <button className="status-button">status</button>
                        <button className="factor-button">factor</button>
                    </div>
                </div>
            </div>
        </>
    )
}