import React, { useContext , createContext } from "react";
import { useState , useEffect} from "react";
import {foodContext} from './restaurant_page'


export function  RstMenu  ({foodTags,foods }) {
  const [cart,setCart] = useState([]);
  const [cartPrice,setCartPrice] = useState(0)
  
  //const cartPrice = useContext (foodContext) ;

  const [flag, setFlag] = useState(0);
  var forFlag = 0;
  var temp=0

  console.log("khar")

  function onAdd (){
    
  }

  function inc (t) {
    t.count+=1
    console.log("ezafe")
    for (let i = 0 ; i < cart.length ; i++){
      if (t.name === cart[i].name) {
        forFlag=1;
        cart[i].order+=1
        break ;
      }
    }
    if (forFlag===0) {
      cart.push({
        name : t.name,
        price : t.price ,
        order : 1 ,
      });
    }
    console.log(t.price)
    setCartPrice(cartPrice+t.price)
    

    forFlag = 0
    if (flag ===1 ) setFlag(0)
    else setFlag(1)
  }

  function dec (t) {
    t.count-=1
    for (let i = 0 ; i < cart.length ; i++){
      if (t.name === cart[i].name) {
        cart[i].order-=1;
        setCartPrice(cartPrice-t.price)
        if (cart[i].order===0){
          setCart( cart.filter( a=>
            a.name !== t.name
          ))
          break;
        }
      }
    }
    if (flag ===1 ) setFlag(0)
    else setFlag(1)
  }
  

    return (
    
          <>
          <div className="menu">
            <div> 
              <div className="categories">
                {foodTags?.map (tag => (
                  //JSON.stringify(tag.categories)
                  <button /*onClick={() => loadMenu(tag)}*/ className="catButton">{tag}</button>
                ))}
              </div>

              
              <div className="foods">
                {foods?.map(x => (
                  <div className="newCard">
                    <img src={x.image} className="imageCard" />
                    <h2 className="cardTitle">{x.name}</h2>
                    <div className="foodDetails">
                      <p className="cardDetails">{x.details}</p>
                    </div>
                    <p className="price">{x.price}$</p>
                    <div className="ButtonGroup">
                    <button className="cardButton" onClick={() => {if (x.count > 0 ) {dec(x)}}} >-</button>
                      <span className="cardButton">{x.count}</span>
                      <button className="cardButton" onClick={() => inc(x)}>+</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>  
          </div>

          <div className="cart">
          

              <h2 className="orderHeader">Order list</h2>

              <div className="List">
                {console.log("salam")}
                  {cart?.map (x => (
                    <p className="orderList">{x.order}x : {x.name} : {x.order*x.price}$</p>
                ))}
              </div>

              <div className="totalPrice">
                <div className="totalPriceButton">Total price : {cartPrice}$</div>
              </div>
              
              {cartPrice > 0 ? <button className="pay">Pay</button> : null}
              {console.log(cartPrice)}
          
         </div>
       </>
          
        
    )
}