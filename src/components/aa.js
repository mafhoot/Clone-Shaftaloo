
import React from 'react';
import ProfileCard from "./ProfileCard";
// import FormEdit from "./formEdit";
import {BrowserRouter  , Link, Route , Switch} from "react-router-dom";


export default function aa() {
  return (
    <div className="background">
			<div className="bg-pattern-top"></div>
		    {/* <div className="bg-pattern-bottom"></div> */}


            


			{/* <ul>
				<li> <a href="/formEdit">Form</a></li>
				<li> <a href="/ProfileCard">Profile</a></li>
			</ul> */}
{/* 
            <ul>
				<li> <a href="/formEdit">Form</a></li>
				<li> <a href="/ProfileCard">Profile</a></li>
			</ul>


			<switch>
				<Route exact path="/formEdit">
					<FormEdit/>
				</Route>

				<Route  path="/ProfileCard">
					<ProfileCard/>
				</Route>
			</switch>  */}


			<ProfileCard
				name="Mahdi Fathian"
				// age="20"
				city="Iran"
				followers="80K"
				likes="803K"
				photos="1.4K"
				abc="Email :"
				phonee="Phone :"
				username="Username :"
				password="Password :"

				
			></ProfileCard>
 			{/* <button type="submit" >Log In</button> */}
			{/* <form className="login-form">
//                 <button type="submit" >Log In</button>
//             </form> */}
 	</div>
  )
}
 























