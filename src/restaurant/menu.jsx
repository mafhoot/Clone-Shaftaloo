import { useState ,useContext ,useEffect} from "react";
import { CartContext} from "./cart";
import { OrderPage } from "./order";
import { getMenu } from "../Services/axios";


export function  RstMenu  ({id}) {
  const {cart,setCart} = useContext (CartContext);
  const [foodTags,setFoodTags] = useState ();
  const [foods,setFoods] = useState();
  const [flag, setFlag] = useState(0);
  const [restMenu,setMenu] = useState()
  var forFlag = 0;

  console.log("khar")

  useEffect(() => {
    getMenu(id).then (m => {
      //console.log(m.data[0].categories[0])
      setMenu(m.data)
    }).catch()
  },[])

  function loadMenu (i) {
    setFoods(i.foods)
    foods.forEach (e =>{
      e["image"] = "https://realfood.tesco.com/media/images/Burger-31LGH-a296a356-020c-4969-86e8-d8c26139f83f-0-1400x919.jpg";
    })
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
                  <button onClick={() => loadMenu(tag)} className="catButton">{tag.categoryName}</button>
                ))}
              </div>

              <div className="foods">
                {foods?.map(x => (
                  <div className="newCard">
                    <img src={x.image} className="imageCard" />
                    <h2 className="cardTitle">{x.name}</h2>
                    <div className="foodDetails">
                      <p className="cardDetails">{/*x.details*/}{x.foodDescription}</p>
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