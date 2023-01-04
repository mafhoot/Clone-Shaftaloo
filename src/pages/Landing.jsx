import * as React from 'react';
import "./landing.css"
import { BrowserRouter , Routes , Route , Navigate , useNavigate} from "react-router-dom";
import { getLanding } from '../Services/axios';
import { useEffect } from 'react';
import { useState } from 'react';

export const Landing = () => {
    const navigate = useNavigate()
    const [landingState , setLandingState] = useState("")


    useEffect(() => {
        getLanding(1).then (m => {
          setLandingState(m.data)
          console.log(m.data);
        }).catch()
        console.log (landingState)
      },[])

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
            <div className='landingFooter'>
                <div className='landingPhoneNumber'>
                    <p className='landingPhoneTitle'>Phone number</p>
                    <p className='landingPhoneDetail'>{landingState.phonenumber}</p>
                </div>
                <div className='landingAddress'>
                    <p className='landingPhoneTitle'>Company address</p>
                    <p className='landingPhoneDetail'>{landingState.address}</p>
                </div>
            </div>
        </div>
    )
}

