import React from "react";
import './contact_us.css';
import Rating from '@mui/material/Rating';
import ButtonGroup from '@mui/material/ButtonGroup';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button} from '@mui/material';


export const  Contact_us = ({rest}) => {
    return (
        <div className="info" >
            <p className="description" >About : {rest.description}</p>
            <p className="restLocation">City : {rest.city}</p>
            <p className="restLocation">Address : {rest.address}</p>
            <p className="RestTags">Tags : 
              <ButtonGroup color="neutral" variant="text" aria-label="text button group">
                {rest.tags?.map(u => (
                  <Button>{u.value}</Button>
                  //console.log(u)
                ))}
              </ButtonGroup>
            </p>
            <span className="Rate">Rating :</span> <Rating className="rating" name="half-rating-read" defaultValue={rest.rate} precision={0.5} readOnly  />
          </div>

        
    )
}