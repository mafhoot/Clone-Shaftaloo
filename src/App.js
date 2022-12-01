import React, { useState } from "react";
import { Login } from "./Components/Auth/Login/Login";
import { Register } from "./Components/Auth/SignUp/Register";
import { BrowserRouter , Routes , Route} from "react-router-dom";

import 'boxicons/css/boxicons.min.css';
import AppLayout from './Components/layout/AppLayout';
import Blank from './pages/Blank';

function App() {
  return (
    // <div className="App">
    //   {
    //     currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
    //   }
    // </div>

    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<Register />} />
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Blank />} />
        <Route path='/user' element={<Blank />} />
        <Route path='/order' element={<Blank />} />
      </Route>
    </Routes>
    </BrowserRouter>

    );
}

export default App;
