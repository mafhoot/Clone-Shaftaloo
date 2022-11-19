
import React from "react";

import "../components/sidebar.css";

import "./ProfileCard.css";
import avatar from "../images/download.jpg";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
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

// import InstagramIcon from '@mui/icons-material/Instagram';


function ProfileCard(props) {


	// const handleSubmit = (e) => {
    //     e.preventDefault();
        // console.log(email);
        // console.log(pass)

        // getbearer({
        
        //         "phoneNumber": "",
        //         "password": pass,
        //         "fullName": "",
        //         "email": email
            
        // })

        // .then((x)=>{
        //     console.log(x)
        //     console.log(10)
        //     setLogin("Logged in")
        //   })

          
        // .catch(function (error) {
        //     if (error.response) {
        //       // The request was made and the server responded with a status code
        //       // that falls out of the range of 2xx
        //       console.log(error.response.data);
        //       console.log(error.response.status);
        //       console.log(error.response.headers);
        //       setLogin("Account not found!")
        //     } else if (error.request) {
        //       // The request was made but no response was received
        //       // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        //       // http.ClientRequest in node.js
        //       console.log(error.request);
              
        //     } else {
        //       // Something happened in setting up the request that triggered an Error
        //       console.log('Error', error.message);
        //     }
        //     console.log(error.config);
        //   })
	    // }  

	// }













	return (
		<div className="card-container">
			<div className="ddd">
				<header>
					<img src={avatar} alt={props.name} />
				</header>
				<h1 className="bold-text">
					{props.name} <span className="normal-text">{props.age}</span>
				</h1>
				<h2 className="normal-text">{props.city}</h2>

				<div className="social-container">
					<div className="followers">
						<h1 className="bold-text">{props.followers}</h1>
						<h2 className="smaller-text">Followers</h2>
					</div>
					<div className="likes">
						<h1 className="bold-text">{props.likes}</h1>
						<h2 className="smaller-text">Likes</h2>
					</div>
					<div className="photos">
						<h1 className="bold-text">{props.photos}</h1>
						<h2 className="smaller-text">Photos</h2>
					</div>
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



				<div className="social-container">
					<div className="followers">
						<h1 className="bold-text2">{props.abc}</h1>
						<h2 className="smaller-text3">info@example.com</h2>
					</div>
					<div className="likes">
						<h1 className="bold-text2">{props.phonee}</h1>
						<h2 className="smaller-text2">123 456 789</h2>
					</div>
				</div>





				<div className="df">
					<div className="followers">
						<h1 className="bold-text3">{props.username}</h1>
						<h2 className="smaller-text5">M_F</h2>
					</div>
					<div className="likes">
						<h1 className="bold-text4">{props.password}</h1>
						<h2 className="smaller-text4">*********</h2>
					</div>
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
		




                {/* <div className="aaaa">
			  	    <button type="submit" className="acc" >Log In</button>
				</div> */}







				<div className="sidebarWrapper">
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

					<div class="parent_clearfix">
						<div class="child">	<Twitter className="sidebarIcon" /></div>
						<div class="child">	<Instagram className="sidebarIcon" /></div>
						<div class="child">	<Facebook className="sidebarIcon" /></div>
						{/* <div class="child">فرزند سوم</div> */}
					</div>





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
				</div>

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
		</div>
	);
}

export default ProfileCard;



