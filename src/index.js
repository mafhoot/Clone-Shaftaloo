// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";

// ReactDOM.render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>,
// 	document.getElementById("root")
// );





// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
  
// ReactDOM.render(
//     <App />, document.getElementById('root')
// );









import React from "react";
import ReactDOM from "react-dom";
import "./ind3.css";
import App from "./App";
import {BrowserRouter  , Route , Switch} from "react-router-dom";


ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById("root")
);









// import React, { Component } from "react";
// import { render } from "react-dom";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Redirect
// } from "react-router-dom";
// import ProfileCard from "./components/ProfileCard";
// import formEdit from "./components/formEdit";
// // import Test2 from "./Test2";
// // import Test3 from "./Test3";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "React",
//       isUserAuthenticated: true
//     };
//   }

//   render() {
//     return (
//       <div>
//         <Router>
//           <div>
//             <ul>
//               <li>
//                 <Link to="/home">Home</Link>
//               </li>
//               <li>
//                 <Link to="/test1">Test 1</Link>
//               </li>
//               <li>
//                 <Link to="/test2">Test 2</Link>
//               </li>
//               <li>
//                 <Link to="/test3">Test 3</Link>
//               </li>
//             </ul>
//             <hr />
//             <Switch>
//               <Route
//                 exact
//                 path="/"
//                 render={() => {
//                     return (
//                       this.state.isUserAuthenticated ?
//                       <Redirect to="/home" /> :
//                       <Redirect to="/test1" /> 
//                     )
//                 }}
//               />
//               <Route exact path="/ProfileCard" component={ProfileCard} />
//               <Route exact path="/formEdit" component={formEdit} />
//               {/* <Route exact path="/test2" component={Test2} />
//               <Route exact path="/test3" component={Test3} /> */}
//             </Switch>
//           </div>
//         </Router>
//       </div>
//     );
//   }
// }

// render(<App />, document.getElementById("root"));






