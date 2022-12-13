import React,{useState , useEffect , useRef } from "react";
import Rating from '@mui/material/Rating';
import ButtonGroup from '@mui/material/ButtonGroup';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button} from '@mui/material';
import {getRestaurant , getMenu} from "../../Services/axios"
import { RstMenu } from "./menu";
import { Contact_us } from "./contact_us";
import { OrderPage } from "./order"
import { TableOrder } from "./tableOrder";
import { CartContext } from "./cart";
import { TableContext } from "./tableContext";
import { Tables } from "./table";
import './restaurant_page.css'
import { useSearchParams } from 'react-router-dom'
import { BrowserRouter , Routes , Route , Navigate , useNavigate} from "react-router-dom";

export const Restaurant_page = () => {
  
  const [searchParams, setSearchParams] = useSearchParams()
  const [rest,setRest] = useState({id : null , name : null , date : null , address : "America" })
  const [value, setValue] = useState(3.5);
  const [headImageLink ,setHeadImageLink] = useState ("https://foodexiran.com/wp-content/uploads/2022/08/store-banner.jpg")
  const [logoImage ,setLogoImage] = useState ("https://wpcdn.us-east-1.vip.tn-cloud.net/www.klkntv.com/content/uploads/2020/08/KFC-LOGO-1024x881.jpg")
  const [foods,setFoods] = useState( [{"name" : "Burger" , "count" : 0 , "price" : 183}, {"name" : "Chicken" , "count" : 0, "price" : 223 } , {"name" : "Hot Dog" , "count" : 0 , "price" : 375} , {"name" : "Pasta" , "count" : 0 , "price" : 343} , {"name" : "pizza" , "count" : 0, "price" : 432} , {"name" : "Fried Potato" , "count" : 0 , "price" : 99}])
  const foodTags = ["All", "Burger" ,"Fried", "Dessert" , "Pizza" , "Sandwitch"] 
  const [cart,setCart] = useState([]);
  const [tableORD, setTableORD] = useState(null)
  const [nav,setNav] = useState()
  const [id,setId] = useState (searchParams.get("id"))
  const navigate = useNavigate()
  
  const tabs = ["Menu 1" ,"Menu 2","Table","Cart"]
  const [active, setActive] = useState(1);
  
  //const [tbList,setTbList] = useState( [{"name" : "2 Sit table" , "count" : 0 , "price" : 20}, {"name" : "4 Sit table" , "count" : 0, "price" : 40 } , {"name" : "6 Sit table" , "count" : 0 , "price" : 60}])

  foods.forEach (e =>{
    e["details"] = "Meat, Bread, Pickle, Tomato";
    // e["image"] = "https://realfood.tesco.com/media/images/Burger-31LGH-a296a356-020c-4969-86e8-d8c26139f83f-0-1400x919.jpg";
  })
  
  

  useEffect (() => {

  },[active])

  useEffect(() => {
    console.log(searchParams.get("id"));
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
      setValue(e.data.avg)
      console.log(e.data.avg)
    }).catch()
    setNav(<RstMenu id={id} />)
  },[]);

  const theme = createTheme({
    palette: {
      neutral: {
        main: '#eeba2c',
      },

      black: {
        main: '#161616',
      },

      white: {
        main : '#ffffff'
      }
    },
  });

  

  return (
    <>
    <ThemeProvider theme={theme}>
    <div className="All">
        <img className="HeadImage" src={rest.headImage}></img>
        <img className="restLogo" src={rest.logoImg}></img>
        <div className="details">
          <label className="name">{rest.name}</label>
        </div>


        <CartContext.Provider value={{cart,setCart}}>
          {/* <TableContext.Provider value={{tableORD,setTableORD}}> */}
          {/* {console.log(tableORD)} */}
          <div className="Tab">
            <button className={(active==1) ? "TabButton activeButton" : "TabButton"} onClick={() => {setNav(<RstMenu id={id} />); setActive(1); }} >MENU</button>
            <button className={(active==2) ? "TabButton activeButton" : "TabButton"} onClick={() => {setNav (<Tables id={id}/>); setActive(2)}} >TABLE</button>
            <button className={(active==3) ? "TabButton activeButton" : "TabButton"} onClick={()=>  {setActive(3)}}>COMMENTS</button>
            <button className={(active==4) ? "TabButton activeButton" : "TabButton"} onClick={()=>  {setNav (<Contact_us rest={rest}/>); setActive(4)}}>INFORMATION</button>
          </div>

          <div className="main">
            {nav}
          </div>
          {/* </TableContext.Provider> */}
        </CartContext.Provider>
        
        <div className="distance"></div>
    </div>
    </ThemeProvider>
    </>
  )
}
