
import '../App.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, { Component, useState, useEffect } from "react";
import Connect from "./Connect";
import { useNavigate } from "react-router-dom";

function Longin () {

    const [ credenciales, setCredenciales] = useState({
        email : null,
        password : null
        }
    )
    const navigate = useNavigate();

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
            <Button variant="contained" onClick={() => navigate('/Conectar/'+ credenciales.email+'/'+credenciales.password ,{replace: true})}>Sing In</Button>
        </div>
    )
}
export default Longin