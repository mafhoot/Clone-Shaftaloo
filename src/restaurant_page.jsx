import React,{useState , useEffect , useRef} from "react";
import Rating from '@mui/material/Rating';
import ButtonGroup from '@mui/material/ButtonGroup';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {getRestaurant , getMenu} from "./Services/axios"
import { Base64 } from 'js-base64';
import ReactDOM from 'react-dom/client';

export const Restaurant_page = () => {
  const [rest,setRest] = useState({id : null , name : null , date : null , address : "America"})
  const [value, setValue] = useState(3.5);
  const tags = ["fast food" , "fried" , "chicken"  ]
  const [headImageLink ,setHeadImageLink] = useState ("https://foodexiran.com/wp-content/uploads/2022/08/store-banner.jpg")
  const [logoImage ,setLogoImage] = useState ("https://wpcdn.us-east-1.vip.tn-cloud.net/www.klkntv.com/content/uploads/2020/08/KFC-LOGO-1024x881.jpg")
  //var food = ["Burger" , "Chicken" , "Hot Dog" ,"Pasta", "Fried Potato", "pizza"]
  const [foods,setFoods] = useState( [{"name" : "Burger" , "count" : 0 , "price" : 183}, {"name" : "Chicken" , "count" : 0, "price" : 223 } , {"name" : "Hot Dog" , "count" : 0 , "price" : 375} , {"name" : "Pasta" , "count" : 0 , "price" : 343} , {"name" : "pizza" , "count" : 0, "price" : 432} , {"name" : "Fried Potato" , "count" : 0 , "price" : 99}])
  const foodTags = ["All", "Burger" ,"Fried", "Dessert" , "Pizza" , "Sandwitch"] 
  const [cart,setCart] = useState([]);
  const [flag, setFlag] = useState(0);
  const [cartPrice,setCartPrice] = useState(0)
  var forFlag = 0;
  const [id,setId] = useState (1)
  const [restMenu,setMenu] = useState([[]])
  //const prevCount = useRef ()
  const tabs = ["Menu 1" ,"Menu 2","Table","Cart"]

  foods.forEach (e =>{
    e["details"] = "Meat, Bread, Pickle, Tomato";
    e["image"] = "https://realfood.tesco.com/media/images/Burger-31LGH-a296a356-020c-4969-86e8-d8c26139f83f-0-1400x919.jpg";
  })
  
  function loadMenu (i) {
    setFoods(i.foods)
    foods.forEach (e =>{
      e["image"] = "https://realfood.tesco.com/media/images/Burger-31LGH-a296a356-020c-4969-86e8-d8c26139f83f-0-1400x919.jpg";
    })
  }


  function inc (t) {
    t.count+=1

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

  useEffect (() => {

  }, [flag , foods] ) ;

  useEffect(() => {
    getRestaurant(id).then (e => {
      //console.log(e.data.address) 
      setRest({
        city: e.data.city,
        comments: "chetori",
        name: e.data.name,
        address: e.data.address,
        description: e.data.description,
        logoImg: e.data.logoImage,
        backgroundImg: e.data.backgroundImg,
        id: e.data.id,
        dateCreated: e.data.dateCreated,
        tags : e.data.tags,
        rate : e.data.avg,
      })
      setValue(e.data.avg)
    }).catch()

    getMenu(id).then (m => {
      console.log(m.data[0].categories[0])
      setMenu(m.data[0].categories)
    }).catch()
    console.log(restMenu)
  },[]);

  const theme = createTheme({
    palette: {
      neutral: {
        main: '#eeba2c',
      },
    },
  });

  return (
    <>
    <ThemeProvider theme={theme}>
    <div className="All">
        <img className="HeadImage" src={headImageLink}></img>
        <img className="logo" src={logoImage}></img>
        <div className="details">
          <div className="info" >
            <label className="name">{rest.name}</label>
            <p className="description" >{rest.description}</p>
            <p className="location">Location : {rest.address}</p>
            <p className="RestTags">Tags : 
              <ButtonGroup color="neutral" variant="text" aria-label="text button group">
                {rest.tags?.map(u => (
                  <Button>{u.value}</Button>
                  //console.log(u)
                ))}
              </ButtonGroup>
            </p>
            <span className="Rate">Rating :</span> <Rating className="rating" name="half-rating-read" defaultValue={value} precision={0.5} readOnly  />
          </div>
        </div>

        <div className="Tab">
          
        <button className="TabButton">MENU</button>
        <button className="TabButton">TABLE</button>
        <button className="TabButton">OEDER</button>
        <button className="TabButton">COMMENTS</button>
        <button className="TabButton">CONTACT US</button>
        
        </div>

        <div className="main">
          <div className="menu">
            <div> 
              <div className="categories">
                {foodTags?.map (tag => (
                  //JSON.stringify(tag.categories)
                  <button /*onClick={() => loadMenu(tag)}*/ className="catButton">{tag}</button>
                ))}
              </div>

              
              <div className="foods">
                {foods.map(x => (
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
                  {cart.map (x => (
                    <p className="orderList">{x.order}x : {x.name} : {x.order*x.price}$</p>
                ))}
              </div>

              <div className="totalPrice">
                <div className="totalPriceButton">Total price : {cartPrice}$</div>
              </div>
              
              {cartPrice > 0 ? <button className="pay">Pay</button> : null}
          
          </div>
          
        </div>
        
        <div className="distance"></div>
    </div>
    </ThemeProvider>
    </>
  )
}




/*
<div className="foods">
            {foods.map(x => (
              <Card className="MenuCard" sx={{ maxWidth: 230 , minHeight: 300 }}>
                <CardMedia component="img" height="140" image={link} alt="green iguana" />
                  <CardContent className="CardDetails">
                    <Typography gutterBottom variant="h5" component="div" className="typo">
                      {x}
                    </Typography>
                    <Typography variant="body2">
                      Meat, Bread, Pickle, Tomato
                      asdasdads
                    </Typography>
                  </CardContent>
                  <CardActions className="CardAction">
                    <Button color="neutral" size="small">-</Button>
                    <Button color="neutral" size="small">0</Button>
                    <Button color="neutral" size="small">+</Button>
                  </CardActions>
              </Card>
            ))}
          </div>
*/