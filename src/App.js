
import React , {useState} from "react";
import ProfileCard from "./components/ProfileCard";
import "./Appabc.css";
import Aa from "./components/aa";
import { Link } from "react-router-dom";
import Routes from './Routes';

import {BrowserRouter  , Route , Switch} from "react-router-dom";


import FormEdit from "./components/formEdit";
// import { useState } from "react";






// // import { Switch,Route, BrowserRouter } from 'react-router-dom';
// // import { ToastContainer } from "react-toastify";

// // import * as React from "react";



// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";


// import Homepage from "./components/formEdit";










// function UsersIndexPage({ users }) {
// 	return (
// 	  <div>
// 		<h1>Users</h1>
// 		<ul>
// 		  {users.map((user) => (
// 			<li key={user.id}>
// 			  <Link to={user.id}>{user.name}</Link>
// 			</li>
// 		  ))}
// 		</ul>
// 	  </div>
// 	);
//   }




// const cacheRtl = createCache({
//   key: "muirtl",
//   stylisPlugins: [prefixer, rtlPlugin],
// });

// const App = () => {
//   // making the page rtl
//   // inject rtl direction to index.html
//   React.useLayoutEffect(() => {
//     document.body.setAttribute("dir", "rtl");
//   }, []);

//   return (
//     <CacheProvider value={cacheRtl}>
//       <ThemeProvider theme={theme}>
//         <ToastContainer />
//         <BrowserRouter>
//           <Switch>
//             {routes.map((route, index) => (
//               <Route key={index} {...route} />
//             ))}
//           </Switch>
//         </BrowserRouter>
//       </ThemeProvider>
//     </CacheProvider>
//   );
// };

// export default App;










































// function App() {
// 	// const cacheRtl = createCache({
// 	// key: "muirtl",
// 	// stylisPlugins: [prefixer, rtlPlugin],
// 	// });


// 	return (
// 		<>
// 		<Aa/>
// 		<Router>
// 			<Switch>
// 				<Route exact path="/" 
// 					component={Homepage} />

// 				{/* <Route exact path="/courses" 
// 					component={Courses} /> */}
// 			</Switch>
// 		</Router>

//         </>

// 	);
// }




// export default App;





















































// import Aa from "./aa";
// import "./App.css";
// import React from "react";
// import routes from "./routes";
// import { Switch, Route, BrowserRouter } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import rtlPlugin from "stylis-plugin-rtl";
// import { CacheProvider } from "@emotion/react";
// import createCache from "@emotion/cache";
// import { prefixer } from "stylis";
// import theme from "./assets/theme/defaultTheme";
// import { ThemeProvider } from "@mui/material/styles";


// const cacheRtl = createCache({
//   key: "muirtl",
//   stylisPlugins: [prefixer, rtlPlugin],
// });

// const App = () => {
//   // making the page rtl
//   // inject rtl direction to index.html
//   React.useLayoutEffect(() => {
//     document.body.setAttribute("dir", "rtl");
//   }, []);

//   return (
//     <CacheProvider value={cacheRtl}>
//       {/* <ThemeProvider theme={theme}> */}
//         <ToastContainer />
//         <BrowserRouter>
//           <Switch>
//             {routes.map((route, index) => (
//               <Route key={index} {...route} />
//             ))}
//           </Switch>
//         </BrowserRouter>
//       {/* </ThemeProvider> */}
//     </CacheProvider>
//   );
// };

// export default App;







// import Aa from "./aa"

// import React from 'react';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";
// import Homepage from "./components/Homepage"
// import Courses from "./components/Courses"
  
// import './App.css';
// import Navbar from './components/Navbar';
  
// function App() {
//     return (
	
//         <>
// 			{/* <Aa/> */}
//             <Navbar />
//             <Router>
//                 <Switch>
//                     <Route exact path="/" 
//                         component={Homepage} />
  
//                     <Route exact path="/courses" 
//                         component={Courses} />
//                 </Switch>
//             </Router>
//         </>
//     );
// }
  
// export default App;













































// import "./App.css";
// import React from "react";
// import routes from "./routes";
// import { Switch, Route, BrowserRouter } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import rtlPlugin from "stylis-plugin-rtl";
// import { CacheProvider } from "@emotion/react";
// import createCache from "@emotion/cache";
// import { prefixer } from "stylis";
// import theme from "./assets/theme/defaultTheme";
// import { ThemeProvider } from "@mui/material/styles";

// // Create rtl cache
// const cacheRtl = createCache({
//   key: "muirtl",
//   stylisPlugins: [prefixer, rtlPlugin],
// });

// const App = () => {
//   // making the page rtl
//   // inject rtl direction to index.html
//   React.useLayoutEffect(() => {
//     document.body.setAttribute("dir", "rtl");
//   }, []);

//   return (
//     <CacheProvider value={cacheRtl}>
//       <ThemeProvider theme={theme}>
//         <ToastContainer />
//         <BrowserRouter>
//           <Switch>
//             {routes.map((route, index) => (
//               <Route key={index} {...route} />
//             ))}
//           </Switch>
//         </BrowserRouter>
//       </ThemeProvider>
//     </CacheProvider>
//   );
// };

// export default App;















// function formEdit() {
// 	return (
// 	  <div><h1>formEdit</h1></div>
// 	)
//   }












function App() {

	// const [currentForm, setCurrentForm] = useState('login');

	// const toggleForm = (formName) => {
	//   setCurrentForm(formName);
	// }


	return (
		    
			<>
			
			{/* <div>

				
				<ul>
					<li> <a href="/formEdit">Form</a></li>
					<li> <a href="/ProfileCard">Profile</a></li>
				</ul>
			</div>	 */}
			{/* <FormEdit/> */}
		
{/* 			
			<div>   
				<switch>
					<Route exact path="/formEdit">
						<FormEdit/>
					</Route>

					<Route  path="/ProfileCard">
						<ProfileCard/>
					</Route>
				</switch>
			</div>	  */}

			<Switch>
			
			{/* This route is for home component 
			with exact path "/", in component props 
			we passes the imported component*/}

            <Route exact  path="/ProfileCard" component={ProfileCard} />
			
			<Route path="/formEdit" component={FormEdit} />
		
			{/* This route is for about component 
			with exact path "/about", in component 
			props we passes the imported component*/}
		
			<Aa/>
				
			{/* This route is for contactus component
			with exact path "/contactus", in 
			component props we passes the imported component*/}
			{/* <Route path="/contactus" component={ContactUs} /> */}
				
			{/* If any route mismatches the upper 
			route endpoints then, redirect triggers 
			and redirects app to home component with to="/" */}
			{/* <Redirect to="/" /> */}
			</Switch>
		














		    </>
        	
	    )	
           {/* 
			<div className="App">
			{
			currentForm === "ProfileCard" ? <ProfileCard onFormSwitch={toggleForm} /> : <FormEdit onFormSwitch={toggleForm} />
			}
			</div> */}


		
	
		
		
		// <BrowserRouter>
		// <div style={{ */}
		// 	display: "flex",
		// 	background: 'black',
		// 	padding: '5px 0 5px 5px',
		// 	fontSize: '20px'
		// }}>
		// 	<div style={{ margin: '10px' }}>
		// 		<NavLink to="/" style={({ isActive }) => ({ 
		// 			color: isActive ? 'greenyellow' : 'white' })}>
		// 			Home
		// 		</NavLink>
		// 	</div>
		// 	<div style={{ margin: '10px' }}>
		// 		<NavLink to="/about" style={({ isActive }) => ({ 
		// 			color: isActive ? 'greenyellow' : 'white' })}>
		// 			About
		// 		</NavLink>
		// 	</div>
		// 	<div style={{ margin: '10px' }}>
		// 		<NavLink to="/contact" style={({ isActive }) => ({ 
		// 			color: isActive ? 'greenyellow' : 'white' })}>
		// 			Contact
		// 		</NavLink>
		// 	</div>
		// </div>
		// <Routes>
		// 	<Route exact path="/" element={<Home />} />
		// 	<Route exact path="/about" element={<About />} />
		// 	<Route exact path="/contact" element={<Contact />} />
		// </Routes>
	// </BrowserRouter>



















		// <div className="background">
		// 	<div className="bg-pattern-top"></div>
		// 	{/* <div className="bg-pattern-bottom"></div> */}

		// 	<ProfileCard
		// 		name="Mahdi Fathian"
		// 		// age="20"
		// 		city="Iran"
		// 		followers="80K"
		// 		likes="803K"
		// 		photos="1.4K"
		// 		abc="Email :"
		// 		phonee="Phone :"
		// 		username="Username :"
		// 		password="Password :"
				
		// 	></ProfileCard>
		// 	{/* <button type="submit" >Log In</button> */}
		// 	{/* <form className="login-form">
    //             <button type="submit" >Log In</button>
    //         </form> */}
		// </div>
	
}



export default App;





