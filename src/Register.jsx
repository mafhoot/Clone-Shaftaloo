import React, { useState } from "react";
import { postUser } from "./services/axios";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [pass2, setPass2] = useState('');
    const [emailcheck ,setEmailcheck] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        //if (pass==pass2){
            
        //}
        postUser({
            "username":name,
            "password": pass,
            "email": email
          } ).then(x=>{
            console.log(x);
          }) ;
        	


      }

    return (
        <div className="auth-form-container">
            <h1>REGISTER</h1>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="Your full name" />
            <label htmlFor="email">E-Mail</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Example@gmail.com" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <label htmlFor="password2">Re-type password</label>
            <input value={pass2} onChange={(e) => setPass2(e.target.value)} type="password" placeholder="********" id="password2" name="password2" />
            
            <button type="submit">Register</button>
        </form>
        <p>Already A Member? <a className="link-btn" onClick={() => props.onFormSwitch('login')}>Log In</a> </p>
    </div>
    )
}