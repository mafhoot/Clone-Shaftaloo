import React from "react";
import './order.css'
import { TableContext } from "./tableContext";
import { useContext , useState } from "react";
//import { Recepite } from "./recepite dialog";
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { ButtonGroup} from '@mui/material'; 
import { useEffect } from "react";
import { postTable } from "../../Services/axios";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { getTheme } from "../../Services/axios";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          {/*<CloseIcon />*/}
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};




export function TableOrder (props) {
  const x=props.x;
  const [restThemes, setRestThemes] = useState ([])
  const [theme,setTheme] = useState(0);

  const time=props.timeVal;
    const [cart,setCart] = useState (x);
    const [modal, setModal] = useState(false);
    const [prov,setProv] = useState();
    const from=new Date(time)
     const [tableFlag,setTableFlag] = useState(0);
    // var flag=0;

    var cartSum=0

    useEffect(()=> {
      getTheme(2).then (m => {
        setRestThemes(m.data)
        console.log(m.data);
      }).catch()
      
    })

    useEffect (()=> {

    },[cart])

    function onSubmit () {
      console.table(time);
      console.log ("ejra shodam")
      for (let i=0 ; i < cart.length ; i++) {
        postTable({
          "expireHours": 2,
          "theme" : theme,
          "tableId":cart[i].id ,
          "reserveTime": {
            "reserveTime": from.toJSON()
          },
          "paymentType" : "Online",
          "paymentState" : "Succeed"             
        }).then (() => {
          console.log("sucesssssssssssss")
        }).catch (()=> {
          setOpen(false);
          setCart(null)
          alert ("Reserve failed")
          return ;
        })    
      }
      alert ("Reserve completed")
      setOpen(false);
      setCart(null)
    }

    function sum (cart) {
        cartSum=0
        for (let i = 0 ; i < cart?.length ; i++){
          cartSum+=cart[i].order*cart[i].capacity
        }
    
        return (
          cartSum
          )
      }


      const [open, setOpen] = React.useState(false);

      const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };

      function themeSubmit (x) {
        setTheme(restThemes.indexOf(x))
      }

      // const [age, setAge] = React.useState('');

      const handleChange = (event) => {
        setTheme(event.target.value);
        console.log(event.target.value)
      };

      // const handleChange = (event) => {
      //   setAge(event.target.value);
      // };

 
    return (
      <>
        <div className="cart">
              <h2 className="orderHeader">Reserve table</h2>
              <div className="List">
                  {cart?.map (x => (
                    <p className="orderList">{x.order}x : {x.capacity}sit</p>
                ))}
              </div>
              <div className="totalPrice">
                <div className="totalPriceButton">Total sits : {sum(cart)}</div>
              </div>
              {cartSum > 0 ? <button className="pay" onClick={handleClickOpen} >Reserve</button> : null}
        </div>

        <div className="payDialog">
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
            className="payDialog"
          >
            <DialogContent dividers className="dialog">
            <div className="dialogList">
              <h2 className="orderHeader">Your order</h2>
              <div className="ListDialog">
                  {cart?.map (x => (
                    <p className="orderList">{x.order}x : {x.capacity}sit</p>
                ))}
              </div>  
              <div className="totalPrice">
                <div className="totalPriceButton">Total sits: {sum(cart)}</div>
              </div>
              <h3 className="methods">Select your theme:</h3>
              <Box className="themeSelect">
                <FormControl fullWidth className="themeSelect">
                  <InputLabel className="themeSelect" id="demo-simple-select-label">ُTheme</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={theme}
                    label="Theme"
                    onChange={handleChange} className="themeSelect">
                    {restThemes.map(t=> (
                    <MenuItem value={restThemes.indexOf(t)}>{t}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <h3 className="methods">Submit your reserve:</h3>
              <div className="tabG">
                <button className="buttG" onClick={() => onSubmit() } >Reserve</button>
                
              </div>
          
            </div>

            </DialogContent>
                

          </BootstrapDialog>
        </div>
        
        </>
    )
}