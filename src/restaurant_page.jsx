import React,{useState} from "react";
//import pic from "./Images/burger.jpg"
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export const Restaurant_page = () => {
  const [value, setValue] = React.useState(3.5);
  const tags = ["fast food" , "fried" , "chicken" ]

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
      <div className="HeadImage"></div>
      <div className="logo"></div>
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

        <div className="menu">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" height="140" image="burger.jpg" alt="green iguana"/>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Burger
              </Typography>
              <Typography variant="body2" color="text.secondary">
                100gr 80% meat, bread, pickle, tomato
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Place Order</Button>
            </CardActions>
          </Card>
        </div>


      </div>
    </div>
    </ThemeProvider>
    </>
  )
}