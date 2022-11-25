import React from "react";
import './order.css'
import { CartContext } from "./cart";
import { useContext } from "react";


export function OrderPage () {
    //const [cart,setCart] = useContext(CartContext);
    const {cart,setCart} = useContext (CartContext);
    var cartSum=0

    
    

    function sum (cart) {
        cartSum=0
        for (let i = 0 ; i < cart.length ; i++){
          cartSum+=cart[i].order*cart[i].price
        }
    
        return (
          cartSum
          )
      }
 
    return (
        <div className="cart">
          

              <h2 className="orderHeader">Order list</h2>

              <div className="List">
                {console.log("salam")}
                  {cart?.map (x => (
                    <p className="orderList">{x.order}x : {x.name} : {x.order*x.price}$</p>
                ))}
              </div>

              <div className="totalPrice">
                <div className="totalPriceButton">Total price : {sum(cart)}$</div>
              </div>
              
              {cartSum > 0 ? <button className="pay">Pay</button> : null}
          
         </div>
    )
}