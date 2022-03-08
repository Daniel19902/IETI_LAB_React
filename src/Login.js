
import logo from './logo.svg';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, { Component, useState, useEffect } from "react";
import { render } from 'react-dom';



function Longin () {

    
    const [ credenciales, setCredenciales] = useState({
        email : null,
        password : null
        }
    )
    let entre = false

    const setEntre = function(){
        alert("entre button")
        entre = true
    }

    const [ token, setToken ] = useState(null);
    useEffect(() =>{
        if (entre){
            alert("entre")
            
            fetch("http://localhost:8080/v1/users")
                .then((response) => {
                    // Just an example, it actually should set this token into a localStorage variable or some kind of global state.
                    setToken(response.token);
                    // Once the user have been authenticated the app will navigate to the landing page
                    //navigate("/test");
                })
        }
	}, [])
   

    return(
        <div className="container">
            <h1> Login </h1>
            <TextField id="outlined-basic" label="User Or Email" variant="outlined" onChange={event => setCredenciales({email: event.target.value,
            password: credenciales.password})}/>
            <br/>
            <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                onChange={event => setCredenciales({email: credenciales.email, password: event.target.value})}
            />
            <br/>
            <br/>
            <div>
                email : {credenciales.email}
                password : {credenciales.password}
            </div>
            <Button variant="contained" onClick={setEntre}>Sing In</Button>
        </div>
    )

    
}


export default Longin