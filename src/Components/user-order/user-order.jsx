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
      return tmp;
    }


    const res_logo = "https://wpcdn.us-east-1.vip.tn-cloud.net/www.klkntv.com/content/uploads/2020/08/KFC-LOGO-1024x881.jpg"
    return(
        <>
        
            <div className="user-order">
                <div className="order-container">
                    <div>
                        <h1 className="title-order-container">My orders</h1>
                    </div>
                    <div className="">
                        {/*orders_gen()*/}
                        <div className="order-card">
                <div className="order-card-left">
                    <div className="order-res-info">
                        <img className="order-res-logo" src={res_logo} alt="" />
                        <div className="order-res-name-and-time">
                            <h2 className="order">restaurant</h2>
                            <div className="order-time">
                                <h3 className="order">22:15:00</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order-card-right">
                    <div className="order-cost">
                        <h2 className="order">Order cost : 23$</h2>
                    </div>
                    <div className="order-factor-and-status">
                        <button className="status-button">Finished</button>
                        <button className="factor-button"  /*onClick={showModal}*/>factor</button>
                        {/** factor modal
                        <Modal
                          title="Basic Modal"
                          open={visible}
                          onOk={handleOk}
                          onCancel={handleCancel}
                        >
                          <p>Some contents...</p>
                          <p>Some contents...</p>
                          <p>Some contents...</p>
                        </Modal>*/}
                    </div>
                </div>
            </div>
                    </div>
                </div>
            </div>

        </>
    )
}