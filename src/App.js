import React, { useState } from "react";
import { Login } from "./Components/Auth/Login/Login";
import { Register } from "./Components/Auth/SignUp/Register";
import { BrowserRouter , Routes , Route} from "react-router-dom";
import {Restaurant_page} from './Components/restaurant/restaurant_page'
import { User_order } from "./Components/user-order/user-order";

import 'boxicons/css/boxicons.min.css';
import AppLayout from './Components/layout/AppLayout';
import Blank from './pages/Blank';
import { Card } from "./Components/HomePage-customer/card";
import { ListCardRes } from "./Components/HomePage-customer/ListCards"

function App() {
  return (
    <div className="AllAll">
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        {/* <Route path='/' element={<Login />}/> */}
        <Route path='/' element={<AppLayout />}>
          <Route path='/home' element={<ListCardRes/>} />
          <Route path='/user' element={<Blank/>} />
          <Route path='/order' element={<Blank />} />
          <Route path='/restaurant' element={<Restaurant_page />} />
          <Route path='/my-order' element={<User_order />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
    

    );
}

export default App;
