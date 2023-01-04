import React, { useState } from "react";
import { Modal } from 'antd';

import './user-order.css'
import { getRestaurant } from "../../Services/axios";
import { useEffect } from "react";



export const Order_card = ({order}) => {

    // const res_logo = "https://wpcdn.us-east-1.vip.tn-cloud.net/www.klkntv.com/content/uploads/2020/08/KFC-LOGO-1024x881.jpg";

    const [res_name, setResName] = useState()
    const [res_logo, setResLogo] = useState()
    const [order_day, setOrderDay] = useState()
    const [order_hour, setOrderHour] = useState()
    const [order_cost, setOrderCost] = useState()
    const [factor, setFactor] = useState(order.foods)
    const [status, setStatus] = useState(order.stat)
    const orderStatus = [{state : "Finished", colorrr : 'black'} , {state : "inProcess", colorrr : 'yellow'} , {state : "Accepted", colorrr: 'green'} , {state: "Paid", colorrr : 'green'}]

    getRestaurant(order.restaurantId)
    .then((res) => {
        setResLogo(res.data.logoImg)
        setResName(res.data.name)
    })
    .catch((e) => {
        console.log(e)
    })

    useEffect(() => {
        console.log('here')
        let t = order.dateCreated;
        let date = new Date(t).toJSON()
        let day = date.split('T')[0]
        let hour = date.split('T')[1].slice(0,5)
        setOrderDay(day)
        setOrderHour(hour)
    }, [])

    /*** factor modal ***
    const [visible, setVisible] = useState(false)

    const showModal = () => {
        console.log('dadfasdfasdfasdfasdfasdf')
      setVisible(true)
    };

    const handleOk = e => {
      console.log(e);
      setVisible(false)
    };

    const handleCancel = e => {
      console.log(e);
      setVisible(false)
    };*/

    return (
        <>
            <div className="order-card">
                <div className="logo-resss">
                    <img className="order-res-logo" src={res_logo} alt="" />
                </div>
                <div className="order-card-left">
                    <div className="order-res-info">
                        <div className="order-res-name-and-time">
                            <h2 className="order"><i class="bx bx-restaurant"></i> {res_name}</h2>
                            <div className="order-time">
                                <h4 className="order"><i class='bx bxs-calendar'></i> {order_day}</h4>
                                <h4 className="order"><i class='bx bxs-time'></i> {order_hour}</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order-card-right">
                    {/* <div className="order-cost">
                        <h2 className="order">Order cost : {order_cost}</h2>
                    </div> */}
                    <div className="order-factor-and-status">
                        <button style={{backgroundColor: orderStatus[status].colorrr}} className="status-button">{orderStatus[status].state}</button>
                        <button className="factor-button"  /*onClick={showModal}*/>Factor</button>
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
        </>
    )
}