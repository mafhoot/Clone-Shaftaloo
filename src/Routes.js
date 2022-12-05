// import Login from "./components/Login/Login";
// import SignUpPage from "./components/Sign Up/SignUp";

// import DoctorPanel from "./components/Doctor/DoctorPanel/DoctorPanel";
// import ListOfDoctors from "./components/Doctor/ListOfDoctors/ListOfDoctors";

// import HotelPanel from "./components/Hotel/Panel/HotelPanel";
// import Hotels from "./components/Hotel/HotelList/Hotels";

// import NotFound from "./pages/NotFoundPage";



import formEdit from "./components/formEdit";
import ProfileCard from "./components/ProfileCard"




const Routes = [
  { path: "/formEdit", component: formEdit },

  { path: "/profile", component: ProfileCard }
//   { path: "/list-of-doctors", component: ListOfDoctors },

//   { path: "/hotel-panel", component: HotelPanel },
//   { path: "/hotels", component: Hotels },

//   { path: "/", component: Login, exact: true },
//   { component: NotFound },
];

export default Routes;




















