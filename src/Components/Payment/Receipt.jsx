import React from 'react'
import "./Receipt.css"
import { getRestaurant } from '../../Services/axios'
import { useState,useEffect } from 'react'

export const Receipt = () =>{
  const [id,setId] = useState (1)
  const [rest,setRest] = useState({})
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;


  useEffect(() => {
    getRestaurant(id).then (e => {
      setRest({
        city: e.data.
        address,
        comments: "chetori",
        name: e.data.name,
        address: e.data.address,
        description: e.data.description,
        logoImg: e.data.logoImg,
        backgroundImg: e.data.backgroundImg,
        id: e.data.id,
        dateCreated: e.data.dateCreated,
        tags : e.data.tags,
        rate : e.data.avg,
        headImage : e.data.backgroundImg,
      })
    }).catch()
  },[]);

  return (
    <div className='ReceiptMain'>
      <div className='ReceiptContainer'>
        <img className="ReceiptRestLogo" src={rest.logoImg}></img>
        <div className='ReceiptCard'>
          <div className='ReceiptTop'>
          <p className='ReceiptResponse'>
            Your order has succesfully completed!
          </p>
          </div>

          <div className='ReceiptDetails'>
            <div className='ReceiptList'>
              <p>Restaurant name</p> 
              <p className='answer'>: {rest.name}</p>
            </div>
            <div className='ReceiptList'>
              <p>Order number</p> 
              <p className='answer'>:</p>
            </div>
            <div className='ReceiptList'>
              <p>Date</p> 
              <p className='answer'>: {date}</p>
            </div>
            <div className='ReceiptList'>
              <p>Final price</p> 
              <p className='answer'>:</p>
            </div>
          </div>

          <div className='ReceiptBottom'>
            <p>You can follow up your order from here:</p>
            <button className='ReceiptButton'>Order status</button>
          </div>
        </div> 
      </div>
    </div>
  )
}
