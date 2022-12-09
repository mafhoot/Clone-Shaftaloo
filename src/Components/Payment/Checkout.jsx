import React from 'react'
import "./Checkout.css"
import IMG from "../../Images/food.jpg"

export const Checkout = () => {
  return (
    
    <div class="mainscreen">
        {/* <img src="https://image.freepik.com/free-vector/purple-background-with-neon-frame_52683-34124.jpg"  class="bgimg " alt=""/>  */}
      <div class="PaymentCard">
        <div class="leftside">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"
            class="product"
            alt="Shoes"
          />
        </div>
        <div class="rightside">
          <form action="">
            <h1>CheckOut</h1>
            <h2>Payment Information</h2>
            <p className="CheckoutLabel">Cardholder Name</p>
            <input type="text" class="inputbox" name="name" required />
            <p className="CheckoutLabel" >Card Number</p>
            <input type="number" class="inputbox" name="card_number" id="card_number" required />

            <p className="CheckoutLabel" >Card Type</p>
            <select class="SelectInputbox" name="card_type" id="card_type" required>
              <option value="">--Select a Card Type--</option>
              <option value="Visa">Visa</option>
              <option value="RuPay">RuPay</option>
              <option value="MasterCard">MasterCard</option>
            </select>
            <div class="expcvv">

                <p class="expcvv_text">Expiry</p>
                <input type="date" class="inputbox" name="exp_date" id="exp_date" required />

                <p class="expcvv_text2">CVV</p>
                <input type="password" class="inputbox" name="cvv" id="cvv" required />
            </div>
            <p></p>
            <button type="submit" class="button">CheckOut</button>
          </form>
        </div>
      </div>
    </div>
  
    )
}

