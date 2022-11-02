import React, { useState } from "react";
import { postUser } from "./services/axios";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [username, setUsername] = useState('');
    const [pass2, setPass2] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        postUser({
            "username":username,
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
            <label htmlFor="username">Username</label>
            <input value={username} onChange={(e) => setUsername(e.target.value)} username="name" id="name" placeholder="Choose a username" />
            <label htmlFor="email">E-Mail</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Example@gmail.com" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <label htmlFor="password2">Re-type password</label>
            <input value={pass2} onChange={(e) => setPass2(e.target.value)} type="password" placeholder="********" id="password2" name="password2" />
            <button type="submit">Log In</button>
        </form>
        <a className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</a>
    </div>
    )
}