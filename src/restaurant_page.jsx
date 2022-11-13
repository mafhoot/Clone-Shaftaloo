import React,{useState , useEffect , useRef} from "react";
//import pic from "./Images/burger.jpg"
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

export const Restaurant_page = () => {
  const [value, setValue] = useState(3.5);
  const tags = ["fast food" , "fried" , "chicken" ]
  const [link,setLink] = useState("https://realfood.tesco.com/media/images/Burger-31LGH-a296a356-020c-4969-86e8-d8c26139f83f-0-1400x919.jpg")
  const [headImageLink ,setHeadImageLink] = useState ("https://foodexiran.com/wp-content/uploads/2022/08/store-banner.jpg")
  const [logoImage ,setLogoImage] = useState ("https://wpcdn.us-east-1.vip.tn-cloud.net/www.klkntv.com/content/uploads/2020/08/KFC-LOGO-1024x881.jpg")
  //var food = ["Burger" , "Chicken" , "Hot Dog" ,"Pasta", "Fried Potato", "pizza"]
  const [foods,setFoords] = useState( [{"name" : "Burger" , "order" : 0 , "price" : 183}, {"name" : "Chicken" , "order" : 0, "price" : 223 } , {"name" : "Hot Dog" , "order" : 0 , "price" : 375} , {"name" : "Pasta" , "order" : 0 , "price" : 343} , {"name" : "pizza" , "order" : 0, "price" : 432} , {"name" : "Fried Potato" , "order" : 0 , "price" : 99}])
  const foodTags = ["All", "Burger" ,"Fried", "Dessert" , "Pizza" , "Sandwitch"]
  const [count,setCount] = useState (0);
  const [cart,setCart] = useState([]);
  const [flag, setFlag] = useState(0);
  const [cartPrice,setCartPrice] = useState(0)
  var forFlag = 0;
  //const prevCount = useRef ()

  foods.forEach (e =>{
    e["details"] = "Meat, Bread, Pickle, Tomato";
  })
  
  function inc (t) {
    t.order+=1

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
    t.order-=1
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

  useEffect (() => {
  }, [flag] ) ;

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
          <label className="name">KFC</label>
          <p className="description" >The first and best brand of fried foods in the world</p>
          <p className="location">Location : North california</p>
          <p className="Tags">Tags : <ButtonGroup color="neutral" variant="text" aria-label="text button group">
            {tags.map(tags => (
              <Button>{tags}</Button>
            ))}
            </ButtonGroup>
          </p>
          <span className="Rate">Rating :</span> <Rating className="rating" name="half-rating-read" defaultValue={value} precision={0.5} readOnly  />
        </div>
      </div>
      <div className="main">
        <div className="menu">


          <div className="categories">
            {foodTags.map (tag => (
              <button className="catButton">{tag}</button>
            ))}
          </div>

          
          <div className="foods">
            {foods.map(x => (
              <div className="newCard">
                <img src={link} className="imageCard" />
                <h2 className="cardTitle">{x.name}</h2>
                <div className="foodDetails">
                  <p className="cardDetails">{x.details}</p>
                </div>
                <p className="price">{x.price}$</p>
                <div className="ButtonGroup">
                  <button className="cardButton" onClick={() => {if (x.order > 0 ) {dec(x)}}} >-</button>
                  <button className="cardButton">{x.order}</button>
                  <button className="cardButton" onClick={() => inc(x)}>+</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div class="cart">
        <div class="cartList">

          <h2 className="orderHeader">Order list</h2>

          <div className="List">
            {console.log("salam")}
              {cart.map (x => (
                <p className="orderList">{x.order}x : {x.name} : {x.order*x.price}$</p>
            ))}
          </div>

          <div className="totalPrice">
            <button className="totalPriceButton">Total price : {cartPrice}$</button>
          </div>

        </div>
        
        

      </div>
      
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