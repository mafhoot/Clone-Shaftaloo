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
  console.log(x)

  // const time=props.timeVal;
  const time=props.timeVal;
  console.log(props);
  // console.log(time);
  // console.table(x);
    //const {cart,setCart} = useContext (TableContext);
    const [cart,setCart] = useState (x);
    // console.log(cart)
    // console.log(time)
    const [modal, setModal] = useState(false);
    const [prov,setProv] = useState();
    const from=new Date(time)
    console.log(from)

    var cartSum=0

    useEffect (()=> {

    },[cart])

    function onSubmit () {
      console.table(time);
      console.log ("ejra shodam")
      for (let i=0 ; i < cart.length ; i++) {
          for (let j=0 ; j <cart[i].order ; j++) {
            postTable({
              "expireHours": 2,
              "tableId":cart[i].id ,
              "reserveTime": {
                "reserveTime": from.toJSON()
              }
            
            }).then (() => {
              console.log("sucesssssssssssss")
              
            })
            
          }
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