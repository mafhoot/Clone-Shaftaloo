import React, { useState } from "react";
import { Login } from "./Components/Auth/Login/Login";
import { Register } from "./Components/Auth/SignUp/Register";
import { BrowserRouter , Routes , Route} from "react-router-dom";
import {Restaurant_page} from './Components/restaurant/restaurant_page.jsx'
import {Checkout} from "./Components/Payment/Checkout"
import { Receipt } from "./Components/Payment/Receipt";
import { User_order } from "./Components/user-order/user-order";
import { Landing } from "./pages/Landing";
import 'boxicons/css/boxicons.min.css';
import AppLayout from './Components/layout/AppLayout';
import Blank from './pages/Blank';
import { Card } from "./Components/HomePage-customer/card";
import { ListCardRes } from "./Components/HomePage-customer/ListCards"
import { User_profile } from "./Components/user-profile/User-profile";

function App() {
  return (
    <div className="AllAll">
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/payment" element={<Checkout />} />
        <Route path="/receipt" element={<Receipt />} />
        <Route path="/" element={<Landing />} />
        {/* <Route path='/' element={<Login />}/> */}
        <Route path='/user' element={<AppLayout />}>
          <Route path='/user/home' element={<ListCardRes/>} />
          <Route path='/user/user-profile' element={<User_profile/>} />
          <Route path='/user/order' element={<Blank />} />
          <Route path='/user/example' element={<Blank />} />
          <Route path='/user/restaurant' element={<Restaurant_page />} />
          <Route path='/user/orders' element={<User_order />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
    

    );
}

export default App;
