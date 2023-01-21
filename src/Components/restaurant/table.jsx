import React, { useState , useEffect , useContext} from "react";
import "./table.css"
import { TableOrder } from "./tableOrder";
import { TableContext } from "./tableContext";
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { getTable } from "../../Services/axios";


export function Tables (id) {
    const [table, setTable] = useState([]);
    const [time, setTime] = React.useState('');
    const [date, setDate] = React.useState('');
    const [tbList,setTbList] = useState()
    const [timeValue, setTimeValue] = React.useState(dayjs(Date.now()));
    const endDate = new Date ;
    const [timeState, setTimeState] = useState();

    const handleDate = (event) => {
        setDate(event.target.value);    
    };
    const handleTime = (event) => {
        setTime(event.target.value);
    };

    const [tableORD,setTableORD] = useState ([]);

    const [flag, setFlag] = useState(0);
    var forFlag = 0;

    table.forEach (e =>{
        e["image"] = "https://static.rigg.uk/Files/casestudies/bistrotpierretables/sz/w960/bistrolargeroundrestauranttablewoodtopmetalbase.jpg";
        //e["capacity"] = 10;
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
    for (let i = 0 ; i < tableORD?.length ; i++){
        if (t.number === tableORD[i].name) {
        forFlag=1;
        tableORD[i].order+=1
        break ;
        }
    }

    console.log (tableORD);
    if (forFlag===0) {
        tableORD?.push({
        name : t.number,
        order : 1 ,
        id : t.id,
        capacity : t.capacity,
        image : t.img
        });

        // settableORD(prev => [...prev, {
        // name : t.number,
        // order : 1 ,
        // }])
    }
    

    forFlag = 0
    setFlag (() => !flag)
    }

    function dec (t) {
    t.count-=1
    for (let i = 0 ; i < tableORD.length ; i++){
        if (t.number === tableORD[i].name) {
        tableORD[i].order-=1;
        if (tableORD[i].order===0){
            setTableORD( tableORD.filter( a=>
            a.name !== t.number
            ).map(x=>x.time=timeState))
            break;
        }
        }
    }
    setFlag ( !flag)
    }

    function handleSubmit (date) {
        const from=new Date(date)
        const to=new Date(date + 2 * 60 * 60 * 1000)
        // console.log("begin : " + from.toJSON())
        // console.log("end : " + to.toJSON())
        getTable (id['id'] , from.toJSON() , to.toJSON()).then (m => {
            setTimeState(from)
            m.data.forEach (e => {
                e ["count" ] = 0;
            })
            setTbList(m.data)
        })

    }

    useEffect (() => {  
    },[flag,tableORD])
    
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
                    <h2 className="cardTitle">NO.{x.number}</h2>
                    <div className="foodDetails">
                      <p className="cardDetails">Capacity: {x.capacity}</p>
                    </div>
                    {/* <p className="price">{x.price}$</p> */}
                    <div className="ButtonGroup">
                    <button className="cardButton" onClick={() => {if (x.count > 0 ) {dec(x)}}} >-</button>
                      <span className="cardButton">{x.count}</span>
                      <button className="cardButton" onClick={() => { if (x.count < 1) {inc(x)}}}>+</button>
                    </div>
                  </div>
                ))}
            </div>
            
        
        </div>
        {/* <TableContext.Provider value={{tableORD, setTableORD}}> */}
        <div className="receipt">
            
            <TableOrder x={tableORD} timeVal={timeState}/>
        </div>
        {/* </TableContext.Provider> */}
        </>
      )
}