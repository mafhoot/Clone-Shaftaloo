import React, { useState ,useEffect} from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [loginFlag,setLogin] = useState ("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(pass)
        if (email===adminuser.email && pass==adminuser.password ){
            console.log ("Login Succesfull")
            console.log (loginFlag)
            setLogin("Logged in")
        }   else {
            console.log ("Login Failed")
            setLogin("ACCOUNT NOT FOUND!")
        }
    }
    const adminuser = { 
        email : "admin@admin.com",
        password : "admin1234"
    }

    useEffect (()=>{}, [loginFlag])

    return (

        <div className="auth-form-container">
            <h1>LOGIN</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">E-Mail</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Example@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit" >Log In</button>
            </form>
            <p>Don't have an account? <a className="link-btn" onClick={() => props.onFormSwitch('register')}>Register Now</a></p>
            <span>{loginFlag}</span>
        </div>
    )
}