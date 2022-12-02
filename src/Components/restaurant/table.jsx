import React, { useState , useEffect , useContext} from "react";
import "./table.css"
import { OrderPage } from "./order";
import { CartContext} from "./cart";
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import Stack from '@mui/material/Stack';

export function Tables () {
    const [table, setTable] = useState([{"name" : "2 Sit table" , "count" : 0 , "price" : 20}, {"name" : "4 Sit table" , "count" : 0, "price" : 40 } , {"name" : "6 Sit table" , "count" : 0 , "price" : 60}])
    const [time, setTime] = React.useState('');
    const [date, setDate] = React.useState('');
    const [tbList,setTbList] = useState()
    const [value, setValue] = React.useState(dayjs(Date.now()));

    const handleDate = (event) => {
        setDate(event.target.value);    
    };
    const handleTime = (event) => {
        setTime(event.target.value);
    };
///////////////////////////////////////////////////////////////////

    // const {tbList,setTbList} = useContext (TableContext);
    const {cart,setCart} = useContext (CartContext);

    const [flag, setFlag] = useState(0);
    var forFlag = 0;

    console.log("khar")

    table.forEach (e =>{
        e["image"] = "https://static.rigg.uk/Files/casestudies/bistrotpierretables/sz/w960/bistrolargeroundrestauranttablewoodtopmetalbase.jpg";
        e["capacity"] = 10;
    })
    // function addHours(numOfHours, date = new Date()) {
    //     const dateCopy = new Date(date.getTime());
      
    //     dateCopy.setTime(dateCopy.getTime() + numOfHours * 60 * 60 * 1000);
      
    //     return dateCopy;
    //   }

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
    setFlag (() => !flag)
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
    setFlag (() => !flag)
    }

    function handleSubmit () {
        setTbList(table)
    }

    useEffect (() => {  
    },[flag,cart])
    
      return (
        <>
        <div className="menu">
            <div className="DateTime">
                {/* <div className="date">
                    <Box className="dateBox" color="black">
                    <FormControl fullWidth color="black">
                        <InputLabel id="demo-simple-select-label" color="black">Date</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={date}
                        label="Age"
                        onChange={handleDate}
                        >
                        <MenuItem value={"Saturday"}>Saturday</MenuItem>
                        <MenuItem value={"Sunday"}>Sunday</MenuItem>
                        <MenuItem value={"Monday"}>Monday</MenuItem>
                        <MenuItem value={"Teuseday"}>Teuseday</MenuItem>
                        <MenuItem value={"Wedensday"}>Wedensday</MenuItem>
                        <MenuItem value={"Thursday"}>Thursday</MenuItem>
                        <MenuItem value={"Friday"}>Friday</MenuItem>
                        </Select>
                    </FormControl>
                    </Box>
                </div>
                <div className="time">
                    <Box className="timeBox">
                    <FormControl fullWidth color="black">
                        <InputLabel id="demo-simple-select-label" color="black">Time</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={time}
                        label="Age"
                        onChange={handleTime}
                        color="black"
                        >
                        <MenuItem value={10} color="black">12</MenuItem>
                        <MenuItem value={20}>14</MenuItem>
                        <MenuItem value={30}>16</MenuItem>
                        <MenuItem value={30}>18</MenuItem>
                        <MenuItem value={30}>20</MenuItem>
                        <MenuItem value={30}>22</MenuItem>
                        </Select>
                    </FormControl>
                    </Box>
                </div> */}
                <div className="timePicker">
                    <div className="time">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                            label="Select time"
                            renderInput={(params) => <TextField {...params} />}
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            />
                        </LocalizationProvider>
                    </div>
                    
                    <div className="submit">
                        <button className="submitTime" onClick={handleSubmit} >SUBMIT</button>
                    </div>
                </div>
                 
                
            </div>

            <div className="foods">
                {tbList?.map(x => (
                  <div className="newCard">
                    <img src={x.image} className="imageCard" />
                    <h2 className="cardTitle">{x.name}</h2>
                    <div className="foodDetails">
                      <p className="cardDetails">Capacity: {x.capacity}</p>
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

        <div className="receipt">
            <OrderPage/>
        </div>
        
        </>
      )
}