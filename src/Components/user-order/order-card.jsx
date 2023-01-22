import React, { useState } from "react";
import { Modal } from 'antd';

import './user-order.css'
import { getRestaurant } from "../../Services/axios";
import { BrowserRouter , Routes , Route , Navigate , useNavigate} from "react-router-dom";





export const Order_card = ({order}) => {

    // const res_logo = "https://wpcdn.us-east-1.vip.tn-cloud.net/www.klkntv.com/content/uploads/2020/08/KFC-LOGO-1024x881.jpg";

    const [res_name, setResName] = useState()
    const [res_logo, setResLogo] = useState()
    const [order_time, setOrderTime] = useState(order.dateCreated)
    const [order_cost, setOrderCost] = useState()
    const [factor, setFactor] = useState(order.foods)
    const [status, setStatus] = useState(order.stat)
    const orderStatus = ["Finished" , "inProcess" , "Accepted" , "Paid"]
    const navigate = useNavigate()
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;


    console.log(order.dateCreated)
    
    getRestaurant(order.restaurantId)
    .then((res) => {
        setResLogo(res.data.logoImg)
        setResName(res.data.name)
        
    })
    .catch((e) => {
        console.log(e)
    })


    function handleSubmit () {
        if (order.stat == 0) {
            navigate('/receipt?price='+(order.foods[0].price)*3+"&OrderId="+order.id+"&id="+order.restaurantId)
        }
          
    }

    return (
        <>
            <div className="order-card">
                <div className="order-card-left">
                    <div className="order-res-info">
                        <img className="order-res-logo" src={res_logo} alt="" />
                        <div className="order-res-name-and-time">
                            <h2 className="order">{res_name}</h2>
                            <div className="order-time">
                                <h3 className="order">Date: { date }</h3>
                            </div>
                            <p>Order ID :{order.id }</p>
                        </div>
                    </div>
                </div>
                <div className="order-card-right">
                    <div className="order-factor-and-status">
                        <button className="status-button">{orderStatus[status]}</button>
                        <button className="factor-button"  onClick={()=>handleSubmit()}>Receipt</button>
                    </div>
                </div>
            </div>
        </>
    )
}