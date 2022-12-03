import React, { useState , useEffect , useContext} from "react";
import "./table.css"
import { TableOrder } from "./tableOrder";
import { CartContext, TableContext} from "./cart";
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { getTable } from "../../Services/axios";


export function Tables (id) {
    const [table, setTable] = useState([{"name" : "2 Sit table" , "count" : 0 , "price" : 20}, {"name" : "4 Sit table" , "count" : 0, "price" : 40 } , {"name" : "6 Sit table" , "count" : 0 , "price" : 60}])
    const [time, setTime] = React.useState('');
    const [date, setDate] = React.useState('');
    const [tbList,setTbList] = useState()
    const [timeValue, setTimeValue] = React.useState(dayjs(Date.now()));
    const endDate = new Date ;

    const handleDate = (event) => {
        setDate(event.target.value);    
    };
    const handleTime = (event) => {
        setTime(event.target.value);
    };
///////////////////////////////////////////////////////////////////

    // const {tbList,setTbList} = useContext (TableContext);
    const {cart,setCart} = useContext (TableContext);

    const [flag, setFlag] = useState(0);
    var forFlag = 0;

    table.forEach (e =>{
        e["image"] = "https://static.rigg.uk/Files/casestudies/bistrotpierretables/sz/w960/bistrolargeroundrestauranttablewoodtopmetalbase.jpg";
        e["capacity"] = 10;
    })

    const imgIMG = "https://static.rigg.uk/Files/casestudies/bistrotpierretables/sz/w960/bistrolargeroundrestauranttablewoodtopmetalbase.jpg"

    // function addHours(numOfHours, date = new Date()) {
    //     const dateCopy = new Date(date.getTime());
      
    //     dateCopy.setTime(dateCopy.getTime() + numOfHours * 60 * 60 * 1000);
      
    //     return dateCopy;
    //   }

    function inc (t) {
    t.count+=1
    console.log("ezafe")
    for (let i = 0 ; i < cart?.length ; i++){
        if (t.number === cart[i].name) {
        forFlag=1;
        cart[i].order+=1
        break ;
        }
    }
    if (forFlag===0) {
        // cart.push({
        // name : t.number,
        // price : t.price ,
        // order : 1 ,
        // });

        setCart(prev => [...prev, {
        name : t.number,
        price : t.price ,
        order : 1 ,
        }])
    }
    

    forFlag = 0
    setFlag (() => !flag)
    }

    function dec (t) {
    t.count-=1
    for (let i = 0 ; i < cart.length ; i++){
        if (t.number === cart[i].name) {
        cart[i].order-=1;
        if (cart[i].order===0){
            setCart( cart.filter( a=>
            a.name !== t.number
            ))
            break;
        }
        }
    }
    setFlag (() => !flag)
    }

    function handleSubmit (date) {
        const from=new Date(date)
        const to=new Date(date + 2 * 60 * 60 * 1000)
        // console.log("begin : " + from.toJSON())
        // console.log("end : " + to.toJSON())
        getTable (id['id'] , from.toJSON() , to.toJSON()).then (m => {
            console.log (tbList)
            m.data.forEach (e => {
                e ["count" ] = 0;
            })
            setTbList(m.data)
            console.log(m.data);
        })

    }

    useEffect (() => {  
    },[flag,cart])
    
      return (
        <>
        <div className="menu">
            <div className="DateTime">
            
                <div className="timePicker">
                    <div className="time">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                            label="Select time"
                            renderInput={(params) => <TextField {...params} />}
                            value={timeValue}
                            onChange={(newValue) => {
                                setTimeValue(newValue);
                            }}
                            />
                        </LocalizationProvider>
                    </div>
                    
                    <div className="submit">
                        <button className="submitTime" onClick={() => handleSubmit(timeValue)} >SUBMIT</button>
                    </div>
                </div>
                 
                
            </div>

            <div className="foods">
                {tbList?.map(x => (
                  <div className="newCard">
                    <img src={imgIMG} className="imageCard" />
                    <h2 className="cardTitle">{x.number}</h2>
                    <div className="foodDetails">
                      <p className="cardDetails">Capacity: {x.capacity}</p>
                    </div>
                    {/* <p className="price">{x.price}$</p> */}
                    <div className="ButtonGroup">
                    <button className="cardButton" onClick={() => {if (x.count > 0 ) {dec(x)}}} >-</button>
                      <span className="cardButton">{x.count}</span>
                      <button className="cardButton" onClick={() => { if (x.count < x.capacity) {inc(x)}}}>+</button>
                    </div>
                  </div>
                ))}
            </div>
            
        
        </div>

        <div className="receipt">
            <TableOrder/>
        </div>
        
        </>
      )
}