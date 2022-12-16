import React, { useState,useEffect,useRef } from "react";
import { postUser, S } from "../../../Services/axios";
import "../Login_SignUp.css"

export const Register = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [pass2, setPass2] = useState('');
    const [emailcheck ,setEmailcheck] = useState("")
    const [passcheck,setPasscheck] = useState ("")
    const [pass2check,setPass2check] = useState ("")
    const [city,setCity] = useState ("")
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

          postUser({
            "phoneNumber": "",
            "password": pass,
            "fullName": name,
            "email": email,
            "gender" : "male",
            "city" : city,
            "picture" : ""
          } ).then(x=>{
            console.log(x);
            S('token',x.data.token);
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
      <div className="App">
        <div className="auth-form-container">
            <h1 className="AuthTitle">REGISTER</h1>
        <form className="register-form" onSubmit={handleSubmit}>
            <label className="AuthLabel" htmlFor="name">Full name</label>
            <input className="AuthInput" value={name} required onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="Your full name" />
            <label className="AuthLabel" htmlFor="email">E-Mail</label>
            <input className="AuthInput" value={email} required onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Example@gmail.com" id="email" name="email" />
            <span className="registerError">{emailcheck}</span>
            <label className="AuthLabel" htmlFor="password">Password</label>
            <input className="AuthInput" value={pass} required onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <span className="registerError">{passcheck}</span>
            <label className="AuthLabel" htmlFor="password2">Re-type password</label>
            <input className="AuthInput" value={pass2} required onChange={(e) => setPass2(e.target.value)} type="password" placeholder="********" id="password2" name="password2" />
            <span className="registerError">{pass2check}</span>
            <label className="AuthLabel" htmlFor="city">City</label>
            <input className="AuthInput" value={city} required onChange={(e) => setCity(e.target.value)}type="city" placeholder="Tehran" id="city" name="city" />
            
            <button className="logButton" type="submit">Register</button>
        </form>
        <p className="login-regiser-p">Already A Member? <a className="link-btn" href="/login">Log In</a> </p>
    </div>
    </div>
    )
}