import { useState ,useContext} from "react";
import { CartContext } from "./cart";
import { OrderPage } from "./order";


export function  RstMenu  ({foodTags,foods }) {
  const {cart,setCart} = useContext (CartContext);

  const [flag, setFlag] = useState(0);
  var forFlag = 0;

  console.log("khar")


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
    

    forFlag = 0
    if (flag ===1 ) setFlag(0)
    else setFlag(1)
  }

  function dec (t) {
    t.count-=1
    for (let i = 0 ; i < cart.length ; i++){
      if (t.name === cart[i].name) {
        cart[i].order-=1;
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
          
          <div className="receipt">
            <OrderPage />
          </div>


          
        </>
    )
}