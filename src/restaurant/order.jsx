import React from "react";
import './order.css'
import { CartContext } from "./cart";
import { useContext , useState } from "react";


export function OrderPage () {
    const {cart,setCart} = useContext (CartContext);
    const [modal, setModal] = useState(false);

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

      const toggleModal = () => {
        setModal(!modal);
      };
    
      if(modal) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
      }
 
    return (
      <>
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
              
              {cartSum > 0 ? <button className="pay" onClick={toggleModal} >Pay</button> : null}
          
        

        
        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
              <h2>Hello Modal</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
                perferendis suscipit officia recusandae, eveniet quaerat assumenda
                id fugit, dignissimos maxime non natus placeat illo iusto!
                Sapiente dolorum id maiores dolores? Illum pariatur possimus
                quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
                placeat tempora vitae enim incidunt porro fuga ea.
              </p>
              <button className="close-modal" onClick={toggleModal}>
                CLOSE
              </button>
            </div>
          </div>
        )}
        </div>
        
        </>
    )
}