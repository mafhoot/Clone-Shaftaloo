// import React from 'react'
import ProfileCard from "./ProfileCard";
// import React, { useState,useEffect,useRef } from "react";
// import {React, useState,useEffect,useRef } from "react";
import { Grid } from '@material-ui/core';
import { Outlet, Link } from "react-router-dom";

import avatar from "../images/download.jpg";

import "./formEdit.css";

import { HistoryOutlined } from "@material-ui/icons";

import { MoodOutlined } from "@material-ui/icons";

import {MdOutlineHttp , MdOutlineContentCopy} from "react-icons/md";

import {HiOutlineMail} from "react-icons/hi";

import {TiSocialFacebook , TiSocialTwitter , TiSocialInstagram} from "react-icons/ti"

import {React, useState,useEffect,useRef } from "react";

import { putUser } from "../services/axios";

import {
	RssFeed,
	Chat,
	PlayCircleFilledOutlined,
	Group,
	Bookmark,
	HelpOutline,
	WorkOutline,
	Event,
	School,
	Instagram,
	Twitter,
	Facebook
} from "@material-ui/icons";






export default function FormEdit(props) {
	const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
	const [name2, setName2] = useState('');
    const [pass2, setPass2] = useState('');
    const [emailcheck ,setEmailcheck] = useState("")
    const [passcheck,setPasscheck] = useState ("")
    const [pass2check,setPass2check] = useState ("")

	const [phoneNumber,setphoneNumber] = useState ("")
    var flag=0
    
    const adminuser = { 
        email : "admin@admin.com"
    }

    const resetpage = () =>{
        setEmailcheck("")
        setPasscheck("")
        setPass2check("")
        console.log(5)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        /*if (email==adminuser.email) {
            setEmailcheck ("This email is alredy exist")
            flag=1
        }*/
        if (pass!=pass2){
            setPass2check("Passwords don't match")
            flag=1
        }
        if (pass.length<6){
            setPasscheck("Password must be more than 6 letter")
            flag=1
        }

		  putUser({
            "phoneNumber": phoneNumber,
            "password": pass,
            "fullName": name,
            "email": email,
			"city":"Tehran",
			"age":12,
			"Gender":"male"
          } ).then(x=>{
            console.log(x);
            if (flag==0){
                alert ("Register completed")
            }
          })
          .catch(function (error) {
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log(error.response.data);
              console.log(100)
              console.log(error.response.status);
              if (error.response.status=="400"){
                setEmailcheck ("This email is alredy exist")
                console.log(emailcheck)
                console.log(200)
                flag=1

              }
              console.log(error.response.headers);
            } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
              // http.ClientRequest in node.js
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
            }
            console.log(error.config);
            
          })
        
        

    }

    useEffect (()=>{}, [passcheck,pass2check,emailcheck])











  return (






<div className="background">
    <div className="bg-pattern-top"></div>
     	<div className="card-container">
			<div>
			{/* <div className="auth-form-container"> */}
				<h3 className="as">Update Information</h3>
			{/* </div>		 */}
				<form className="register-form" onSubmit={handleSubmit}>
					<label htmlFor="name">Username</label>
					<input value={name} required onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="Your Username" />
					<label htmlFor="name">Phone</label>
					<input value={name2} required onChange={(e) => setName2(e.target.value)} name="name" id="name" placeholder="Your PhoneNumber" />
					<label htmlFor="email">E-Mail</label>
					<input value={email} required onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Example@gmail.com" id="email" name="email" />
					<span className="registerError">{emailcheck}</span>
					<label htmlFor="password">New Password</label>
					<input value={pass} required onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
					<span className="registerError">{passcheck}</span>
					<label htmlFor="password2">Re-type New Password</label>
					<input value={pass2} required onChange={(e) => setPass2(e.target.value)} type="password" placeholder="********" id="password2" name="password2" />
					<span className="registerError">{pass2check}</span>
					<button className='mmmm'>Update</button> 
					




					
				 </form>
				{/* <div className="pppp">  
							<Grid className="yyy">
								<Link href='/' to='/'>
									<button className='mmmm'>Update</button>  */} 
									{/* <formEdit /> */}
									{/* {/* ورود */}
								{/* </Link>   */}
								{/* </div>  */}
							{/* </Grid>   
					</div> */}
					
			</div>		
				



		    
		 
    
			
			

				

				{/* 
				<div className="social">

				</div> */}



				{/* <MDBCardBody className="p-4">
				<MDBTypography tag="h6"  className="abc">Information:</MDBTypography>
				<MDBRow className="pt-1">
					<MDBCol size="6" className="mb-3">
					<MDBTypography tag="h6">Email</MDBTypography>
					<MDBCardText className="text-muted">info@example.com</MDBCardText>
					</MDBCol>
					<MDBCol size="6" className="mb-3">
					<MDBTypography tag="h6">Phone</MDBTypography>
					<MDBCardText className="text-muted">123 456 789</MDBCardText>
					</MDBCol>
				</MDBRow> */}



				
					{/* 
					<div className="followers">
						<h1 className="bold-text3">{props.Username}</h1>
						<h2 className="smaller-text4">m_f</h2>
					</div>
					<div className="likes">
						<h1 className="bold-text3">{props.Password}</h1>
						<h2 className="smaller-text5">987654321</h2>
					</div> */}
				</div>

				{/* 
				<form className="login-form" >
					<button type="submit" >Log In</button>
				</form> */}


				{/* <h1>LOGIN</h1> */}

				{/* <label htmlFor="email">E-Mail</label>
							<input value={email} required onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Example@gmail.com" id="email" name="email" />
							<label htmlFor="password">Password</label>
							<input value={pass} required onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" /> */}

				{/* <p>Don't have an account? <a className="link-btn" onClick={() => props.onFormSwitch('register')}>Register Now</a></p>
						<span className="loginError">{loginFlag}</span> */}






{/* 				
				 <div className="aaaa">  
					 <Grid>
						<Link  to='/formEdit'>
							   <button>Edit Information</button> 
							{/* <formEdit /> */}
							{/* {/* ورود */}
						{/* </Link>  
					     {/* </div>  */}
					  {/* </Grid>    */}
					{/* </div>  */}


					{/* <div>
					    <p>Don't have an account? <a className="link-btn" onClick={() => props.onFormSwitch('register')}>Register Now</a></p>
					</div>
			  */}








					{/* <ul className="sidebarList"> */}
					{/* <img src="/assets/food.jpg"/> */}
					{/* <li className="sidebarListItem">
						<RssFeed className="sidebarIcon" />
						<span className="sidebarListItemText">Feed</span>
					</li> */}
					{/* <li className="sidebarListItem">
						<Instagram className="sidebarIcon" />
						<span className="sidebarListItemText"></span>
					</li> */}
					{/* <li className="sidebarListItem">
						<PlayCircleFilledOutlined className="sidebarIcon" />
						<span className="sidebarListItemText">Videos</span>
					</li> */}
					{/* <li className="sidebarListItem">
						<Group className="sidebarIcon" />
						<span className="sidebarListItemText">Groups</span>
					</li> */}
					{/* <div className="sidebarListItem">
						<Twitter className="sidebarIcon" />
						<span className="sidebarListItemText"></span>
					</div> */}



					{/* <div className="ab"> */}
					{/* <div className="searchbar"   style={{color: "white" , fontSize:15 , paddingRight:0 , float:"left"}}>
						<Instagram className="instagram" />
						
						</div>
						<div className="searchbar"   style={{color: "white" , fontSize:15 , paddingRight:0 , float:"right"}}>
						<Twitter className="twitter" />
						</div> */}

					{/* <div class="parent clearfix">
							<div class="child">فرزند اول</div>
							<div class="child">فرزند دوم</div>
							<div class="child">فرزند سوم</div> */}
					{/* </div> */}

					
						{/* <div class="child">	<Twitter className="sidebarIcon" /></div>
						<div class="child">	<Instagram className="sidebarIcon" /></div>
						<div class="child">	<Facebook className="sidebarIcon" /></div> */}
						{/* <div class="child">فرزند سوم</div> */}
			









					{/* <button className="btn btn-success"
                        onClick={FormEdit}>Edit-form
                    </button> */}



					{/* <Link to="/dashboard">
						<Button style={myStyle}>
							<p>Click Me!</p>
						</Button>
					</Link> */}

                    {/* <Router>
					    <LinkButton to='/formEdit'>Push My Buttons!</LinkButton>
					</Router> */}


					{/* <Router>
						<Routes>
							{/* <Route path='/' component={ App }/>
							<Route path='/about' component={ AboutPage }/> */}
							{/* <LinkButton to='/formEdit'>Push My Buttons!</LinkButton>
						</Routes>
					</Router> */}
                    {/* <Router>
				     	
					</Router> */}



					{/* <Router>
						<Switch>
							{/* <Route path='/' component={ App }/>
							<Route path='/about' component={ AboutPage }/> */}
							{/* <LinkButton to='./formEdit'>Push My Buttons!</LinkButton>
						</Switch>
					</Router> */} 
										



                   









					{/* <div>
					<div>
						<button onClick={navigateHome}>Home</button>
						<hr />
						<button onClick={navigateToContacts}>Contacts</button>

						<Routes>
						<Route path="/contacts" element={<Contacts />} />
						<Route path="/" element={<Home />} />
						</Routes>
					</div>
					</div>


 */}










					{/* <li className="sidebarListItem">
						<HelpOutline className="sidebarIcon" />
						<span className="sidebarListItemText">Questions</span>
					</li>
					<li className="sidebarListItem">
						<WorkOutline className="sidebarIcon" />
						<span className="sidebarListItemText">Jobs</span>
					</li>
					<li className="sidebarListItem">
						<Event className="sidebarIcon" />
						<span className="sidebarListItemText">Events</span>
					</li> */}
					{/* <li className="sidebarListItem">
						<School className="sidebarIcon" />
						<span className="sidebarListItemText">Courses</span>
					</li> */}
					{/* </ul> */}
					{/* <button className="sidebarButton">Show More</button>
					<hr className="sidebarHr" />
					<ul className="sidebarFriendList">
					{Users.map((u) => (
						<CloseFriend key={u.id} user={u} />
					))}
					</ul>  */}
			

				{/* <div className="d-flex justify-content-start">
					<a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
					<a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
					<a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
				</div> */}
				{/* </MDBCardBody>  */}

				{/* <div className="d-flex justify-content-start">
						<a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
						<a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
						<a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
				</div> */}
	
   </div> 
        
		
	  )
  }	





				{/* 
				<div className="social">

				</div> */}



				{/* <MDBCardBody className="p-4">
				<MDBTypography tag="h6"  className="abc">Information:</MDBTypography>
				<MDBRow className="pt-1">
					<MDBCol size="6" className="mb-3">
					<MDBTypography tag="h6">Email</MDBTypography>
					<MDBCardText className="text-muted">info@example.com</MDBCardText>
					</MDBCol>
					<MDBCol size="6" className="mb-3">
					<MDBTypography tag="h6">Phone</MDBTypography>
					<MDBCardText className="text-muted">123 456 789</MDBCardText>
					</MDBCol>
				</MDBRow> */}



			



					{/* 
					<div className="followers">
						<h1 className="bold-text3">{props.Username}</h1>
						<h2 className="smaller-text4">m_f</h2>
					</div>
					<div className="likes">
						<h1 className="bold-text3">{props.Password}</h1>
						<h2 className="smaller-text5">987654321</h2>
					</div> */}
		

				{/* 
				<form className="login-form" >
					<button type="submit" >Log In</button>
				</form> */}


				{/* <h1>LOGIN</h1> */}

				{/* <label htmlFor="email">E-Mail</label>
							<input value={email} required onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Example@gmail.com" id="email" name="email" />
							<label htmlFor="password">Password</label>
							<input value={pass} required onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" /> */}

				{/* <p>Don't have an account? <a className="link-btn" onClick={() => props.onFormSwitch('register')}>Register Now</a></p>
						<span className="loginError">{loginFlag}</span> */}






				
			


					{/* <div>
					    <p>Don't have an account? <a className="link-btn" onClick={() => props.onFormSwitch('register')}>Register Now</a></p>
					</div>
			  */}








					{/* <ul className="sidebarList"> */}
					{/* <img src="/assets/food.jpg"/> */}
					{/* <li className="sidebarListItem">
						<RssFeed className="sidebarIcon" />
						<span className="sidebarListItemText">Feed</span>
					</li> */}
					{/* <li className="sidebarListItem">
						<Instagram className="sidebarIcon" />
						<span className="sidebarListItemText"></span>
					</li> */}
					{/* <li className="sidebarListItem">
						<PlayCircleFilledOutlined className="sidebarIcon" />
						<span className="sidebarListItemText">Videos</span>
					</li> */}
					{/* <li className="sidebarListItem">
						<Group className="sidebarIcon" />
						<span className="sidebarListItemText">Groups</span>
					</li> */}
					{/* <div className="sidebarListItem">
						<Twitter className="sidebarIcon" />
						<span className="sidebarListItemText"></span>
					</div> */}



					{/* <div className="ab"> */}
					{/* <div className="searchbar"   style={{color: "white" , fontSize:15 , paddingRight:0 , float:"left"}}>
						<Instagram className="instagram" />
						
						</div>
						<div className="searchbar"   style={{color: "white" , fontSize:15 , paddingRight:0 , float:"right"}}>
						<Twitter className="twitter" />
						</div> */}

					{/* <div class="parent clearfix">
							<div class="child">فرزند اول</div>
							<div class="child">فرزند دوم</div>
							<div class="child">فرزند سوم</div> */}
					{/* </div> */}

				









					{/* <button className="btn btn-success"
                        onClick={FormEdit}>Edit-form
                    </button> */}



					{/* <Link to="/dashboard">
						<Button style={myStyle}>
							<p>Click Me!</p>
						</Button>
					</Link> */}

                    {/* <Router>
					    <LinkButton to='/formEdit'>Push My Buttons!</LinkButton>
					</Router> */}


					{/* <Router>
						<Routes>
							{/* <Route path='/' component={ App }/>
							<Route path='/about' component={ AboutPage }/> */}
							{/* <LinkButton to='/formEdit'>Push My Buttons!</LinkButton>
						</Routes>
					</Router> */}
                    {/* <Router>
				     	
					</Router> */}



					{/* <Router>
						<Switch>
							{/* <Route path='/' component={ App }/>
							<Route path='/about' component={ AboutPage }/> */}
							{/* <LinkButton to='./formEdit'>Push My Buttons!</LinkButton>
						</Switch>
					</Router> */} 
										



                   









					{/* <div>
					<div>
						<button onClick={navigateHome}>Home</button>
						<hr />
						<button onClick={navigateToContacts}>Contacts</button>

						<Routes>
						<Route path="/contacts" element={<Contacts />} />
						<Route path="/" element={<Home />} />
						</Routes>
					</div>
					</div>


 */}










					{/* <li className="sidebarListItem">
						<HelpOutline className="sidebarIcon" />
						<span className="sidebarListItemText">Questions</span>
					</li>
					<li className="sidebarListItem">
						<WorkOutline className="sidebarIcon" />
						<span className="sidebarListItemText">Jobs</span>
					</li>
					<li className="sidebarListItem">
						<Event className="sidebarIcon" />
						<span className="sidebarListItemText">Events</span>
					</li> */}
					{/* <li className="sidebarListItem">
						<School className="sidebarIcon" />
						<span className="sidebarListItemText">Courses</span>
					</li> */}
					{/* </ul> */}
					{/* <button className="sidebarButton">Show More</button>
					<hr className="sidebarHr" />
					<ul className="sidebarFriendList">
					{Users.map((u) => (
						<CloseFriend key={u.id} user={u} />
					))}
					</ul>  */}
				{/* </div> */}

				{/* <div className="d-flex justify-content-start">
					<a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
					<a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
					<a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
				</div> */}
				{/* </MDBCardBody>  */}

				{/* <div className="d-flex justify-content-start">
						<a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
						<a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
						<a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
				</div> */}
		// 	</div>
		// </div>




















      {/* /* <p>Already A Member? <a className="link-btn" onClick={() => props.onClick('ProfileCard')}>Log In</a> </p> */

      /* <div className="auth-form-container">
        <form className="register-form" >

            <label htmlFor="name">Username</label>
            <input value="text" type="text" placeholder="M_F" />


            <label htmlFor="email">EMail</label>
            <input value="text" type="text" placeholder="info@example.com"  />
           
            <label htmlFor="password">Password</label>
            <input value="password" type="password" placeholder="********"  />


            <label htmlFor="password">Phone</label>
            <input value="password" type="text" placeholder="123 456 789"  />
          
    
        </form>    
      </div>  */}


   







































// import React, { Component } from 'react';


// class Experiences extends Component {
    
//     render() { 
//         return (
//             <div>
//                 <h1>hi</h1>
//             </div>
//         );
//     }
// }
 
// export default Experiences;
// import { Routes, Route, Router, Switch} from 'react-router-dom';
// import React from "react";
// // import aab from "./SignUp/Register"
// import "../components/sidebar.css";

// import { Outlet, Link } from "react-router-dom";

// import "./ProfileCard.css";
// import avatar from "../images/food.jpg";
// import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
// import {
// 	RssFeed,
// 	Chat,
// 	PlayCircleFilledOutlined,
// 	Group,
// 	Bookmark,
// 	HelpOutline,
// 	WorkOutline,
// 	Event,
// 	School,
// 	Instagram,
// 	Twitter,
// 	Facebook
// } from "@material-ui/icons";
// import { Grid } from '@material-ui/core';
// import FormEdit from './formEdit';
// // import InstagramIcon from '@mui/icons-material/Instagram';

// import LinkButton from './LinkButton';






// // function bb() {
// // 	return (
// // 	  <div className="background">
// // 			  <div className="bg-pattern-top"></div>
// // 			  {/* <div className="bg-pattern-bottom"></div> */
  
  
			  
  
  
// // 			  {/* <ul>
// // 				  <li> <a href="/formEdit">Form</a></li>
// // 				  <li> <a href="/ProfileCard">Profile</a></li>
// // 			  </ul> */}
// //   {/* 
// // 			  <ul>
// // 				  <li> <a href="/formEdit">Form</a></li>
// // 				  <li> <a href="/ProfileCard">Profile</a></li>
// // 			  </ul>
  
  
// // 			  <switch>
// // 				  <Route exact path="/formEdit">
// // 					  <FormEdit/>
// // 				  </Route>
  
// // 				  <Route  path="/ProfileCard">
// // 					  <ProfileCard/>
// // 				  </Route>
// // 			  </switch>  */}
  
  
// // 			  <ProfileCard
// // 				  name="Mahdi Fathian"
// // 				  // age="20"
// // 				  city="Iran"
// // 				  followers="80K"
// // 				  likes="803K"
// // 				  photos="1.4K"
// // 				  abc="Email :"
// // 				  phonee="Phone :"
// // 				  username="Username :"
// // 				  password="Password :"
  
				  
// // 			  ></ProfileCard>
// // 			   {/* <button type="submit" >Log In</button> */}
// // 			  {/* <form className="login-form">
// //   //                 <button type="submit" >Log In</button>
// //   //             </form> */}
// // 	   </div>
// // 	)
// //   }
   
  
  
  
  
  
  
  
  
  
  
  
  














// function formEdit(props) {

     

// 	// const navigate = useNavigate();

// 	// const navigateToContacts = () => {
// 	// 	// 👇️ navigate to /contacts
// 	// 	navigate('/contacts');
// 	// };

// 	// const navigateHome = () => {
// 	// 	// 👇️ navigate to /
// 	// 	navigate('/');
// 	// };
// 	// const handleSubmit = (e) => {
// 	//     e.preventDefault();
// 	// console.log(email);
// 	// console.log(pass)

// 	// getbearer({

// 	//         "phoneNumber": "",
// 	//         "password": pass,
// 	//         "fullName": "",
// 	//         "email": email

// 	// })

// 	// .then((x)=>{
// 	//     console.log(x)
// 	//     console.log(10)
// 	//     setLogin("Logged in")
// 	//   })


// 	// .catch(function (error) {
// 	//     if (error.response) {
// 	//       // The request was made and the server responded with a status code
// 	//       // that falls out of the range of 2xx
// 	//       console.log(error.response.data);
// 	//       console.log(error.response.status);
// 	//       console.log(error.response.headers);
// 	//       setLogin("Account not found!")
// 	//     } else if (error.request) {
// 	//       // The request was made but no response was received
// 	//       // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
// 	//       // http.ClientRequest in node.js
// 	//       console.log(error.request);

// 	//     } else {
// 	//       // Something happened in setting up the request that triggered an Error
// 	//       console.log('Error', error.message);
// 	//     }
// 	//     console.log(error.config);
// 	//   })
// 	// }  

// 	// }













// 	return (
// 		<div className="card-container">
// 			<div className="ddd">
// 				<header>
// 					<img src={avatar} alt={props.name} />
// 				</header>
// 				<h1 className="bold-text">
// 					{props.name} <span className="normal-text">{props.age}</span>
// 				</h1>
// 				<h2 className="normal-text">{props.city}</h2>

// 				<div className="social-container">
// 					<div className="followers">
// 						<h1 className="bold-text">{props.followers}</h1>
// 						<h2 className="smaller-text">Followers</h2>
// 					</div>
// 					<div className="likes">
// 						<h1 className="bold-text">{props.likes}</h1>
// 						<h2 className="smaller-text">Likes</h2>
// 					</div>
// 					<div className="photos">
// 						<h1 className="bold-text">{props.photos}</h1>
// 						<h2 className="smaller-text">Photos</h2>
// 					</div>
// 				</div>

// 				{/* 
// 				<div className="social">

// 				</div> */}



// 				{/* <MDBCardBody className="p-4">
// 				<MDBTypography tag="h6"  className="abc">Information:</MDBTypography>
// 				<MDBRow className="pt-1">
// 					<MDBCol size="6" className="mb-3">
// 					<MDBTypography tag="h6">Email</MDBTypography>
// 					<MDBCardText className="text-muted">info@example.com</MDBCardText>
// 					</MDBCol>
// 					<MDBCol size="6" className="mb-3">
// 					<MDBTypography tag="h6">Phone</MDBTypography>
// 					<MDBCardText className="text-muted">123 456 789</MDBCardText>
// 					</MDBCol>
// 				</MDBRow> */}



// 				<div className="social-container">
// 					<div className="followers">
// 						<h1 className="bold-text2">{props.abc}</h1>
// 						<h2 className="smaller-text3">info@example.com</h2>
// 					</div>
// 					<div className="likes">
// 						<h1 className="bold-text2">{props.phonee}</h1>
// 						<h2 className="smaller-text2">123 456 789</h2>
// 					</div>
// 				</div>





// 				<div className="df">
// 					<div className="followers">
// 						<h1 className="bold-text3">{props.username}</h1>
// 						<h2 className="smaller-text5">M_F</h2>
// 					</div>
// 					<div className="likes">
// 						<h1 className="bold-text4">{props.password}</h1>
// 						<h2 className="smaller-text4">*********</h2>
// 					</div>
// 					{/* 
// 					<div className="followers">
// 						<h1 className="bold-text3">{props.Username}</h1>
// 						<h2 className="smaller-text4">m_f</h2>
// 					</div>
// 					<div className="likes">
// 						<h1 className="bold-text3">{props.Password}</h1>
// 						<h2 className="smaller-text5">987654321</h2>
// 					</div> */}
// 				</div>

// 				{/* 
// 				<form className="login-form" >
// 					<button type="submit" >Log In</button>
// 				</form> */}


// 				{/* <h1>LOGIN</h1> */}

// 				{/* <label htmlFor="email">E-Mail</label>
// 							<input value={email} required onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Example@gmail.com" id="email" name="email" />
// 							<label htmlFor="password">Password</label>
// 							<input value={pass} required onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" /> */}

// 				{/* <p>Don't have an account? <a className="link-btn" onClick={() => props.onFormSwitch('register')}>Register Now</a></p>
// 						<span className="loginError">{loginFlag}</span> */}






				
// 				 <div className="aaaa">  
// 					 <Grid>
// 						<Link href='/formEdit' to='/formEdit'>
// 							   <button>Edit Information</button> 
// 							{/* <formEdit /> */}
// 							{/* {/* ورود */}
// 						</Link>  
// 					     {/* </div>  */}
// 					  </Grid>   
// 					</div>
			 








// 				<div className="sidebarWrapper">
// 					{/* <ul className="sidebarList"> */}
// 					{/* <img src="/assets/food.jpg"/> */}
// 					{/* <li className="sidebarListItem">
// 						<RssFeed className="sidebarIcon" />
// 						<span className="sidebarListItemText">Feed</span>
// 					</li> */}
// 					{/* <li className="sidebarListItem">
// 						<Instagram className="sidebarIcon" />
// 						<span className="sidebarListItemText"></span>
// 					</li> */}
// 					{/* <li className="sidebarListItem">
// 						<PlayCircleFilledOutlined className="sidebarIcon" />
// 						<span className="sidebarListItemText">Videos</span>
// 					</li> */}
// 					{/* <li className="sidebarListItem">
// 						<Group className="sidebarIcon" />
// 						<span className="sidebarListItemText">Groups</span>
// 					</li> */}
// 					{/* <div className="sidebarListItem">
// 						<Twitter className="sidebarIcon" />
// 						<span className="sidebarListItemText"></span>
// 					</div> */}



// 					{/* <div className="ab"> */}
// 					{/* <div className="searchbar"   style={{color: "white" , fontSize:15 , paddingRight:0 , float:"left"}}>
// 						<Instagram className="instagram" />
						
// 						</div>
// 						<div className="searchbar"   style={{color: "white" , fontSize:15 , paddingRight:0 , float:"right"}}>
// 						<Twitter className="twitter" />
// 						</div> */}

// 					{/* <div class="parent clearfix">
// 							<div class="child">فرزند اول</div>
// 							<div class="child">فرزند دوم</div>
// 							<div class="child">فرزند سوم</div> */}
// 					{/* </div> */}

// 					<div class="parent_clearfix">
// 						<div class="child">	<Twitter className="sidebarIcon" /></div>
// 						<div class="child">	<Instagram className="sidebarIcon" /></div>
// 						<div class="child">	<Facebook className="sidebarIcon" /></div>
// 						{/* <div class="child">فرزند سوم</div> */}
// 					</div>









// 					{/* <button className="btn btn-success"
//                         onClick={FormEdit}>Edit-form
//                     </button> */}



// 					{/* <Link to="/dashboard">
// 						<Button style={myStyle}>
// 							<p>Click Me!</p>
// 						</Button>
// 					</Link> */}

//                     {/* <Router>
// 					    <LinkButton to='/formEdit'>Push My Buttons!</LinkButton>
// 					</Router> */}


// 					{/* <Router>
// 						<Routes>
// 							{/* <Route path='/' component={ App }/>
// 							<Route path='/about' component={ AboutPage }/> */}
// 							{/* <LinkButton to='/formEdit'>Push My Buttons!</LinkButton>
// 						</Routes>
// 					</Router> */}
//                     {/* <Router>
				     	
// 					</Router> */}



// 					{/* <Router>
// 						<Switch>
// 							{/* <Route path='/' component={ App }/>
// 							<Route path='/about' component={ AboutPage }/> */}
// 							{/* <LinkButton to='./formEdit'>Push My Buttons!</LinkButton>
// 						</Switch>
// 					</Router> */} 
										



                   









// 					{/* <div>
// 					<div>
// 						<button onClick={navigateHome}>Home</button>
// 						<hr />
// 						<button onClick={navigateToContacts}>Contacts</button>

// 						<Routes>
// 						<Route path="/contacts" element={<Contacts />} />
// 						<Route path="/" element={<Home />} />
// 						</Routes>
// 					</div>
// 					</div>


//  */}










// 					{/* <li className="sidebarListItem">
// 						<HelpOutline className="sidebarIcon" />
// 						<span className="sidebarListItemText">Questions</span>
// 					</li>
// 					<li className="sidebarListItem">
// 						<WorkOutline className="sidebarIcon" />
// 						<span className="sidebarListItemText">Jobs</span>
// 					</li>
// 					<li className="sidebarListItem">
// 						<Event className="sidebarIcon" />
// 						<span className="sidebarListItemText">Events</span>
// 					</li> */}
// 					{/* <li className="sidebarListItem">
// 						<School className="sidebarIcon" />
// 						<span className="sidebarListItemText">Courses</span>
// 					</li> */}
// 					{/* </ul> */}
// 					{/* <button className="sidebarButton">Show More</button>
// 					<hr className="sidebarHr" />
// 					<ul className="sidebarFriendList">
// 					{Users.map((u) => (
// 						<CloseFriend key={u.id} user={u} />
// 					))}
// 					</ul>  */}
// 				</div>

// 				{/* <div className="d-flex justify-content-start">
// 					<a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
// 					<a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
// 					<a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
// 				</div> */}
// 				{/* </MDBCardBody>  */}

// 				{/* <div className="d-flex justify-content-start">
// 						<a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
// 						<a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
// 						<a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
// 				</div> */}
// 			</div>
// 		</div>











// 	);

// 	// function Home() {
// 	// 	return <aab/>
// 	// }
// 	//   function Contacts() {
// 	// 	return <aab/>;
// 	//   }
// }

// export default formEdit;












































// // import React from 'react'
// import ProfileCard from "./ProfileCard";
// // import React, { useState,useEffect,useRef } from "react";
// // import {React, useState,useEffect,useRef } from "react";
// import { Grid } from '@material-ui/core';
// import { Outlet, Link } from "react-router-dom";

// import avatar from "../images/download.jpg";

// import "./formEdit.css";

// import { HistoryOutlined } from "@material-ui/icons";

// import { MoodOutlined } from "@material-ui/icons";

// import {MdOutlineHttp , MdOutlineContentCopy} from "react-icons/md";

// import {HiOutlineMail} from "react-icons/hi";

// import {TiSocialFacebook , TiSocialTwitter , TiSocialInstagram} from "react-icons/ti"

// import {React, useState,useEffect,useRef } from "react";

// import { putUser } from "../services/axios";

// import {
// 	RssFeed,
// 	Chat,
// 	PlayCircleFilledOutlined,
// 	Group,
// 	Bookmark,
// 	HelpOutline,
// 	WorkOutline,
// 	Event,
// 	School,
// 	Instagram,
// 	Twitter,
// 	Facebook
// } from "@material-ui/icons";





// export default function FormEdit(props) {
	
// // class LoggingButton extends React.Component {
// // 	// This syntax ensures `this` is bound within handleClick.
// // 	handleClick = () => {
// // 	  console.log('this is:', this);
// // 	};



//     const [phoneNumber, setphoneNumber] = useState('');
// 	const [email, setEmail] = useState('');
//     const [pass, setPass] = useState('');
//     const [name, setName] = useState('');
// 	const [name2, setName2] = useState('');
//     const [pass2, setPass2] = useState('');
//     const [emailcheck ,setEmailcheck] = useState("")
//     const [passcheck,setPasscheck] = useState ("")
//     const [pass2check,setPass2check] = useState ("")
//     var flag=0
    
//     const adminuser = { 
//         email : "admin@admin.com"
//     }

//     const resetpage = () =>{
//         setEmailcheck("")
//         setPasscheck("")
//         setPass2check("")
//         console.log(5)
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
        
//         /*if (email==adminuser.email) {
//             setEmailcheck ("This email is alredy exist")
//             flag=1
//         }*/
//         if (pass!=pass2){
//             setPass2check("Passwords don't match")
//             flag=1
//         }
//         if (pass.length<6){
//             setPasscheck("Password must be more than 6 letter")
//             flag=1
//         }


//           putUser({
//             "phoneNumber":phoneNumber,
// 			"password":pass,
//             "fullName": name,
//             "email": email ,
// 			"Picture":"" ,
// 			"city":"Tehran",
// 			"age":12,
// 			"Gender":"male",

//           } ).then(x=>{
//             console.log(x);
//             if (flag==0){
//                 alert ("Register completed")
//             }
//           })
//           .catch(function (error) {
//             if (error.response) {
//               // The request was made and the server responded with a status code
//               // that falls out of the range of 2xx
//               console.log(error.response.data);
//               console.log(100)
//               console.log(error.response.status);
//               if (error.response.status=="400"){
//                 setEmailcheck ("This email is alredy exist")
//                 console.log(emailcheck)
//                 console.log(200)
//                 flag=1

//               }
//               console.log(error.response.headers);
//             } else if (error.request) {
//               // The request was made but no response was received
//               // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//               // http.ClientRequest in node.js
//               console.log(error.request);
//             } else {
//               // Something happened in setting up the request that triggered an Error
//               console.log('Error', error.message);
//             }
//             console.log(error.config);
            
//           })
        
        

//     }

//     useEffect (()=>{}, [passcheck,pass2check,emailcheck])




//     // handleClick = () => {
// 	// 	console.log('this is:', this);
// 	//   };

	
// 	// function handleSubmit(e) {
// 	// 	e.preventDefault();
// 	// 	console.log('You clicked submit.');
// 	//   }
	



//   return (






// <div className="background">
//     <div className="bg-pattern-top"></div>
//      	<div className="card-container">
// 			<div>
// 			{/* <div className="auth-form-container"> */}
// 				<h3 className="as">Update Information</h3>
// 			{/* </div>		 */}
// 				<form className="register-form" onSubmit={handleSubmit}>
// 					<label htmlFor="name">Username</label>
// 					<input value={name} required onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="Your Username" />
// 					<label htmlFor="name">Phone</label>
// 					<input value={name2} required onChange={(e) => setName2(e.target.value)} name="name" id="name" placeholder="Your PhoneNumber" />
// 					<label htmlFor="email">E-Mail</label>
// 					<input value={email} required onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Example@gmail.com" id="email" name="email" />
// 					<span className="registerError">{emailcheck}</span>
// 					<label htmlFor="password">New Password</label>
// 					<input value={pass} required onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
// 					<span className="registerError">{passcheck}</span>
// 					<label htmlFor="password2">Re-type New Password</label>
// 					<input value={pass2} required onChange={(e) => setPass2(e.target.value)} type="password" placeholder="********" id="password2" name="password2" />
// 					<span className="registerError">{pass2check}</span>
// 					{/* <button className='mmmm'  type="submit">Update</button> */}
// 					<button className='mmmm'  type="submit">Update</button>

// {/* 
// 					<div className="pppp">  
// 							<Grid className="yyy">
// 								<Link href='/' to='/'>
									
// 									{/* onSubmit={handleSubmit} */}
//                                     {/* <button onClick={handleSubmit}></button> */}
// 									{/* <formEdit /> */}
// 									{/* {/* ورود */}
// 								{/* </Link>  
// 								{/* </div>  */}
// 							{/* </Grid>   
// 				</div> */} 


					



					
// 				</form>
// {/* 
// 				/////بیاد داخل فرم یا نه ؟ */}
			
					
// 			</div>		
				



		    
		 
    
			
			

				

// 				{/* 
// 				<div className="social">

// 				</div> */}



// 				{/* <MDBCardBody className="p-4">
// 				<MDBTypography tag="h6"  className="abc">Information:</MDBTypography>
// 				<MDBRow className="pt-1">
// 					<MDBCol size="6" className="mb-3">
// 					<MDBTypography tag="h6">Email</MDBTypography>
// 					<MDBCardText className="text-muted">info@example.com</MDBCardText>
// 					</MDBCol>
// 					<MDBCol size="6" className="mb-3">
// 					<MDBTypography tag="h6">Phone</MDBTypography>
// 					<MDBCardText className="text-muted">123 456 789</MDBCardText>
// 					</MDBCol>
// 				</MDBRow> */}



				
// 					{/* 
// 					<div className="followers">
// 						<h1 className="bold-text3">{props.Username}</h1>
// 						<h2 className="smaller-text4">m_f</h2>
// 					</div>
// 					<div className="likes">
// 						<h1 className="bold-text3">{props.Password}</h1>
// 						<h2 className="smaller-text5">987654321</h2>
// 					</div> */}
// 				</div>

// 				{/* 
// 				<form className="login-form" >
// 					<button type="submit" >Log In</button>
// 				</form> */}


// 				{/* <h1>LOGIN</h1> */}

// 				{/* <label htmlFor="email">E-Mail</label>
// 							<input value={email} required onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Example@gmail.com" id="email" name="email" />
// 							<label htmlFor="password">Password</label>
// 							<input value={pass} required onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" /> */}

// 				{/* <p>Don't have an account? <a className="link-btn" onClick={() => props.onFormSwitch('register')}>Register Now</a></p>
// 						<span className="loginError">{loginFlag}</span> */}






// {/* 				
// 				 <div className="aaaa">  
// 					 <Grid>
// 						<Link  to='/formEdit'>
// 							   <button>Edit Information</button> 
// 							{/* <formEdit /> */}
// 							{/* {/* ورود */}
// 						{/* </Link>  
// 					     {/* </div>  */}
// 					  {/* </Grid>    */}
// 					{/* </div>  */}


// 					{/* <div>
// 					    <p>Don't have an account? <a className="link-btn" onClick={() => props.onFormSwitch('register')}>Register Now</a></p>
// 					</div>
// 			  */}








// 					{/* <ul className="sidebarList"> */}
// 					{/* <img src="/assets/food.jpg"/> */}
// 					{/* <li className="sidebarListItem">
// 						<RssFeed className="sidebarIcon" />
// 						<span className="sidebarListItemText">Feed</span>
// 					</li> */}
// 					{/* <li className="sidebarListItem">
// 						<Instagram className="sidebarIcon" />
// 						<span className="sidebarListItemText"></span>
// 					</li> */}
// 					{/* <li className="sidebarListItem">
// 						<PlayCircleFilledOutlined className="sidebarIcon" />
// 						<span className="sidebarListItemText">Videos</span>
// 					</li> */}
// 					{/* <li className="sidebarListItem">
// 						<Group className="sidebarIcon" />
// 						<span className="sidebarListItemText">Groups</span>
// 					</li> */}
// 					{/* <div className="sidebarListItem">
// 						<Twitter className="sidebarIcon" />
// 						<span className="sidebarListItemText"></span>
// 					</div> */}



// 					{/* <div className="ab"> */}
// 					{/* <div className="searchbar"   style={{color: "white" , fontSize:15 , paddingRight:0 , float:"left"}}>
// 						<Instagram className="instagram" />
						
// 						</div>
// 						<div className="searchbar"   style={{color: "white" , fontSize:15 , paddingRight:0 , float:"right"}}>
// 						<Twitter className="twitter" />
// 						</div> */}

// 					{/* <div class="parent clearfix">
// 							<div class="child">فرزند اول</div>
// 							<div class="child">فرزند دوم</div>
// 							<div class="child">فرزند سوم</div> */}
// 					{/* </div> */}

					
// 						{/* <div class="child">	<Twitter className="sidebarIcon" /></div>
// 						<div class="child">	<Instagram className="sidebarIcon" /></div>
// 						<div class="child">	<Facebook className="sidebarIcon" /></div> */}
// 						{/* <div class="child">فرزند سوم</div> */}
			









// 					{/* <button className="btn btn-success"
//                         onClick={FormEdit}>Edit-form
//                     </button> */}



// 					{/* <Link to="/dashboard">
// 						<Button style={myStyle}>
// 							<p>Click Me!</p>
// 						</Button>
// 					</Link> */}

//                     {/* <Router>
// 					    <LinkButton to='/formEdit'>Push My Buttons!</LinkButton>
// 					</Router> */}


// 					{/* <Router>
// 						<Routes>
// 							{/* <Route path='/' component={ App }/>
// 							<Route path='/about' component={ AboutPage }/> */}
// 							{/* <LinkButton to='/formEdit'>Push My Buttons!</LinkButton>
// 						</Routes>
// 					</Router> */}
//                     {/* <Router>
				     	
// 					</Router> */}



// 					{/* <Router>
// 						<Switch>
// 							{/* <Route path='/' component={ App }/>
// 							<Route path='/about' component={ AboutPage }/> */}
// 							{/* <LinkButton to='./formEdit'>Push My Buttons!</LinkButton>
// 						</Switch>
// 					</Router> */} 
										



                   









// 					{/* <div>
// 					<div>
// 						<button onClick={navigateHome}>Home</button>
// 						<hr />
// 						<button onClick={navigateToContacts}>Contacts</button>

// 						<Routes>
// 						<Route path="/contacts" element={<Contacts />} />
// 						<Route path="/" element={<Home />} />
// 						</Routes>
// 					</div>
// 					</div>


//  */}










// 					{/* <li className="sidebarListItem">
// 						<HelpOutline className="sidebarIcon" />
// 						<span className="sidebarListItemText">Questions</span>
// 					</li>
// 					<li className="sidebarListItem">
// 						<WorkOutline className="sidebarIcon" />
// 						<span className="sidebarListItemText">Jobs</span>
// 					</li>
// 					<li className="sidebarListItem">
// 						<Event className="sidebarIcon" />
// 						<span className="sidebarListItemText">Events</span>
// 					</li> */}
// 					{/* <li className="sidebarListItem">
// 						<School className="sidebarIcon" />
// 						<span className="sidebarListItemText">Courses</span>
// 					</li> */}
// 					{/* </ul> */}
// 					{/* <button className="sidebarButton">Show More</button>
// 					<hr className="sidebarHr" />
// 					<ul className="sidebarFriendList">
// 					{Users.map((u) => (
// 						<CloseFriend key={u.id} user={u} />
// 					))}
// 					</ul>  */}
			

// 				{/* <div className="d-flex justify-content-start">
// 					<a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
// 					<a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
// 					<a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
// 				</div> */}
// 				{/* </MDBCardBody>  */}

// 				{/* <div className="d-flex justify-content-start">
// 						<a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
// 						<a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
// 						<a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
// 				</div> */}
	
//    </div> 
        
		
// 	  )
//   }	





// 				{/* 
// 				<div className="social">

// 				</div> */}



// 				{/* <MDBCardBody className="p-4">
// 				<MDBTypography tag="h6"  className="abc">Information:</MDBTypography>
// 				<MDBRow className="pt-1">
// 					<MDBCol size="6" className="mb-3">
// 					<MDBTypography tag="h6">Email</MDBTypography>
// 					<MDBCardText className="text-muted">info@example.com</MDBCardText>
// 					</MDBCol>
// 					<MDBCol size="6" className="mb-3">
// 					<MDBTypography tag="h6">Phone</MDBTypography>
// 					<MDBCardText className="text-muted">123 456 789</MDBCardText>
// 					</MDBCol>
// 				</MDBRow> */}



			



// 					{/* 
// 					<div className="followers">
// 						<h1 className="bold-text3">{props.Username}</h1>
// 						<h2 className="smaller-text4">m_f</h2>
// 					</div>
// 					<div className="likes">
// 						<h1 className="bold-text3">{props.Password}</h1>
// 						<h2 className="smaller-text5">987654321</h2>
// 					</div> */}
		

// 				{/* 
// 				<form className="login-form" >
// 					<button type="submit" >Log In</button>
// 				</form> */}


// 				{/* <h1>LOGIN</h1> */}

// 				{/* <label htmlFor="email">E-Mail</label>
// 							<input value={email} required onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Example@gmail.com" id="email" name="email" />
// 							<label htmlFor="password">Password</label>
// 							<input value={pass} required onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" /> */}

// 				{/* <p>Don't have an account? <a className="link-btn" onClick={() => props.onFormSwitch('register')}>Register Now</a></p>
// 						<span className="loginError">{loginFlag}</span> */}






				
			


// 					{/* <div>
// 					    <p>Don't have an account? <a className="link-btn" onClick={() => props.onFormSwitch('register')}>Register Now</a></p>
// 					</div>
// 			  */}








// 					{/* <ul className="sidebarList"> */}
// 					{/* <img src="/assets/food.jpg"/> */}
// 					{/* <li className="sidebarListItem">
// 						<RssFeed className="sidebarIcon" />
// 						<span className="sidebarListItemText">Feed</span>
// 					</li> */}
// 					{/* <li className="sidebarListItem">
// 						<Instagram className="sidebarIcon" />
// 						<span className="sidebarListItemText"></span>
// 					</li> */}
// 					{/* <li className="sidebarListItem">
// 						<PlayCircleFilledOutlined className="sidebarIcon" />
// 						<span className="sidebarListItemText">Videos</span>
// 					</li> */}
// 					{/* <li className="sidebarListItem">
// 						<Group className="sidebarIcon" />
// 						<span className="sidebarListItemText">Groups</span>
// 					</li> */}
// 					{/* <div className="sidebarListItem">
// 						<Twitter className="sidebarIcon" />
// 						<span className="sidebarListItemText"></span>
// 					</div> */}



// 					{/* <div className="ab"> */}
// 					{/* <div className="searchbar"   style={{color: "white" , fontSize:15 , paddingRight:0 , float:"left"}}>
// 						<Instagram className="instagram" />
						
// 						</div>
// 						<div className="searchbar"   style={{color: "white" , fontSize:15 , paddingRight:0 , float:"right"}}>
// 						<Twitter className="twitter" />
// 						</div> */}

// 					{/* <div class="parent clearfix">
// 							<div class="child">فرزند اول</div>
// 							<div class="child">فرزند دوم</div>
// 							<div class="child">فرزند سوم</div> */}
// 					{/* </div> */}

				









// 					{/* <button className="btn btn-success"
//                         onClick={FormEdit}>Edit-form
//                     </button> */}



// 					{/* <Link to="/dashboard">
// 						<Button style={myStyle}>
// 							<p>Click Me!</p>
// 						</Button>
// 					</Link> */}

//                     {/* <Router>
// 					    <LinkButton to='/formEdit'>Push My Buttons!</LinkButton>
// 					</Router> */}


// 					{/* <Router>
// 						<Routes>
// 							{/* <Route path='/' component={ App }/>
// 							<Route path='/about' component={ AboutPage }/> */}
// 							{/* <LinkButton to='/formEdit'>Push My Buttons!</LinkButton>
// 						</Routes>
// 					</Router> */}
//                     {/* <Router>
				     	
// 					</Router> */}



// 					{/* <Router>
// 						<Switch>
// 							{/* <Route path='/' component={ App }/>
// 							<Route path='/about' component={ AboutPage }/> */}
// 							{/* <LinkButton to='./formEdit'>Push My Buttons!</LinkButton>
// 						</Switch>
// 					</Router> */} 
										



                   









// 					{/* <div>
// 					<div>
// 						<button onClick={navigateHome}>Home</button>
// 						<hr />
// 						<button onClick={navigateToContacts}>Contacts</button>

// 						<Routes>
// 						<Route path="/contacts" element={<Contacts />} />
// 						<Route path="/" element={<Home />} />
// 						</Routes>
// 					</div>
// 					</div>


//  */}










// 					{/* <li className="sidebarListItem">
// 						<HelpOutline className="sidebarIcon" />
// 						<span className="sidebarListItemText">Questions</span>
// 					</li>
// 					<li className="sidebarListItem">
// 						<WorkOutline className="sidebarIcon" />
// 						<span className="sidebarListItemText">Jobs</span>
// 					</li>
// 					<li className="sidebarListItem">
// 						<Event className="sidebarIcon" />
// 						<span className="sidebarListItemText">Events</span>
// 					</li> */}
// 					{/* <li className="sidebarListItem">
// 						<School className="sidebarIcon" />
// 						<span className="sidebarListItemText">Courses</span>
// 					</li> */}
// 					{/* </ul> */}
// 					{/* <button className="sidebarButton">Show More</button>
// 					<hr className="sidebarHr" />
// 					<ul className="sidebarFriendList">
// 					{Users.map((u) => (
// 						<CloseFriend key={u.id} user={u} />
// 					))}
// 					</ul>  */}
// 				{/* </div> */}

// 				{/* <div className="d-flex justify-content-start">
// 					<a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
// 					<a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
// 					<a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
// 				</div> */}
// 				{/* </MDBCardBody>  */}

// 				{/* <div className="d-flex justify-content-start">
// 						<a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
// 						<a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
// 						<a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
// 				</div> */}
// 		// 	</div>
// 		// </div>




















//       {/* /* <p>Already A Member? <a className="link-btn" onClick={() => props.onClick('ProfileCard')}>Log In</a> </p> */

//       /* <div className="auth-form-container">
//         <form className="register-form" >

//             <label htmlFor="name">Username</label>
//             <input value="text" type="text" placeholder="M_F" />


//             <label htmlFor="email">EMail</label>
//             <input value="text" type="text" placeholder="info@example.com"  />
           
//             <label htmlFor="password">Password</label>
//             <input value="password" type="password" placeholder="********"  />


//             <label htmlFor="password">Phone</label>
//             <input value="password" type="text" placeholder="123 456 789"  />
          
    
//         </form>    
//       </div>  */}


   








