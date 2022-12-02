import React, { useState } from "react";
import { Login } from "./Components/Auth/Login/Login";
import { Register } from "./Components/Auth/SignUp/Register";
import { BrowserRouter , Routes , Route} from "react-router-dom";
import {Restaurant_page} from './Components/restaurant/restaurant_page'

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
        <Route path='/' element={<AppLayout />}>
          {/* <Route path="/Home" element={<ListCardRes/>} /> */}
          <Route path='/user' element={<ListCardRes/>} />
          <Route path='/order' element={<Restaurant_page />} />
          <Route path='/restaurant' element={<Restaurant_page />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
    

    );
}

export default App;
