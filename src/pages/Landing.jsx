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

    // const Accordion = styled((props) => (
    //     <MuiAccordion disableGutters elevation={0} square {...props} />
    //   ))(({ theme }) => ({
    //     border: `0px solid rgba(0, , 0)`,
    //     '&:not(:last-child)': {
    //       borderBottom: 0,
    //     },
    //     '&:before': {
    //       display: 'none',
    //     },
    //   }));

    //   const AccordionSummary = styled((props) => (
    //     <MuiAccordionSummary
    //       expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    //       {...props}
    //     />
    //   ))(({ theme }) => ({
    //     backgroundColor:
    //       theme.palette.mode === 'dark'
    //         ? 'rgba(255, 255, 255, .05)'
    //         : 'rgba(0, 0, 0, .03)',
    //     flexDirection: 'row-reverse',
    //     '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    //       transform: 'rotate(90deg)',
    //     },
    //     '& .MuiAccordionSummary-content': {
    //       marginLeft: theme.spacing(1),
    //     },
    //   }));
      
    //   const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    //     padding: theme.spacing(2),
    //     borderTop: 'px solid rgba(0, 0, 0, .125)',
    //   }));
    

    // const [expanded, setExpanded] = React.useState('panel1');

    // const handleChange = (panel) => (event, newExpanded) => {
    //     setExpanded(newExpanded ? panel : false);
    // };
    return (
        <div className='landingAll'>
             <div className='landingNav'>
                <button className='nameButton' onClick={()=> navigate('/landing')} >SHAFTALOO</button>
                <button className='navButtons' onClick={()=> navigate('/home')}>Restaurants</button>
                <button className='navLogin' onClick={()=> navigate('/login')}>Login/Register</button>
             </div>
            <div className='landingTitleHolder'>
                <p className='landingSubTitle'>ORDER - EAT - ENJOY</p> 
                <p className='landingTitle'>Want an easy meal? Leave this to us!</p>
                <p className='landingDetails'>Nowdays, ordering a food have plenty of ways, but in shaftaloo with over 100000 active restaurant
                , we do our best to make a happy and easy
                experience for you </p>
                <button className='landingButton'>LOGIN NOW !</button>
            </div>
             {/* <div className='landingAcc'>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>Convenience</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" >
                    <Typography className="accHead">Comprehensiveness</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>Speed</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
             </div> */}
        </div>
    )
}

