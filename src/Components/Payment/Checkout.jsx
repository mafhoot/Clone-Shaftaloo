import React from 'react'
import "./Checkout.css"
import IMG from "../../Images/food.jpg"
import { useState , useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { BrowserRouter , Routes , Route , Navigate , useNavigate} from "react-router-dom";

export const Checkout = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const [price,setPrice] = useState (searchParams.get("price"))
  const [id, setId] = useState(searchParams.get("id"))
  const [orderId , setOrderId] = useState(searchParams.get("OrderId"))

  useEffect(()=> {
    console.log("price :"+price);
    console.log("id :"+id)
    console.log("order id : "+ orderId)
  },[])

  function handleSubmit () {
    navigate('/receipt?price='+price+"&OrderId="+orderId+"&id="+id)
  }
  return (
    
    <div  className="mainscreen">
        {/* <img src="https://image.freepik.com/free-vector/purple-background-with-neon-frame_52683-34124.jpg"  className="bgimg " alt=""/>  */}
      <div  className="PaymentCard">
        <div  className="leftside">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"
            className="product"
            alt="Shoes"
          />
        </div>
        <div className="rightside">
          <form action="">
            <h1>CheckOut</h1>
            <h2>Payment Information</h2>
            <p>Payable price: {price}$</p>
            <p className="CheckoutLabel">Cardholder Name</p>
            <input type="text" className="inputbox" name="name" required />
            <p className="CheckoutLabel" >Card Number</p>
            <input type="number" className="inputbox" name="card_number" id="card_number" required />

            <p className="CheckoutLabel" >Card Type</p>
            <select className="SelectInputbox" name="card_type" id="card_type" required>
              <option value="">--Select a Card Type--</option>
              <option value="Visa">Visa</option>
              <option value="RuPay">RuPay</option>
              <option value="MasterCard">MasterCard</option>
            </select>
            <div  className="expcvv">

                <p className="expcvv_text">Expiry</p>
                <input type="date" className="inputbox" name="exp_date" id="exp_date" required />

                <p className="expcvv_text2">CVV</p>
                <input type="password" className="inputbox" name="cvv" id="cvv" required />
            </div>
            <p></p>
            <button type="submit" className="button" onClick={handleSubmit}>CheckOut</button>
          </form>
        </div>
      </div>
    </div>
  
    )
}

