import * as React from 'react';
import "./landing.css"
import { BrowserRouter , Routes , Route , Navigate , useNavigate} from "react-router-dom";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { styled } from '@mui/material/styles';
 import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';



export const Landing = () => {
    const navigate = useNavigate()

    const Accordion = styled((props) => (
        <MuiAccordion disableGutters elevation={0} square {...props} />
      ))(({ theme }) => ({
        border: `1px solid ${theme.palette.divider}`,
        '&:not(:last-child)': {
          borderBottom: 0,
        },
        '&:before': {
          display: 'none',
        },
      }));

      const AccordionSummary = styled((props) => (
        <MuiAccordionSummary
          expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
          {...props}
        />
      ))(({ theme }) => ({
        backgroundColor:
          theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
        flexDirection: 'row-reverse',
        '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
          transform: 'rotate(90deg)',
        },
        '& .MuiAccordionSummary-content': {
          marginLeft: theme.spacing(1),
        },
      }));
      
      const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
        padding: theme.spacing(2),
        borderTop: '1px solid rgba(0, 0, 0, .125)',
      }));
    
    return (
        <div className='landingAll'>
             <div className='landingNav'>
                <button className='nameButton' onClick={()=> navigate('/landing')} >SHAFTALOO</button>
                <button className='navButtons' onClick={()=> navigate('/home')}>Restaurants</button>
                <button className='navLogin' onClick={()=> navigate('/login')}>Login/Register</button>
             </div>

             <div>
             
             </div>
        </div>
    )
}

