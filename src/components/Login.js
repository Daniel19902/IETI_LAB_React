
import '../App.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, {  useState } from "react";
import '../index.css'

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
function Longin () {
    const { state  } = useContext(ThemeContext);
    const [ credenciales, setCredenciales] = useState({
        email : null,
        password : null
        }
    )
    const navigate = useNavigate();

    return(
        <div className="container ">
            <div className={`button-${state.isDarkMode ? "dark" : "light"}`}>
            <h1> Login </h1>
            <TextField
            className={`button-${state.isDarkMode ? "light" : "light"}`} 
            id="outlined-basic" label="User Or Email" variant="outlined" onChange={event => setCredenciales({email: event.target.value,
            password: credenciales.password}) } />
            <br/>
            <TextField
                className={`button-${state.isDarkMode ? "light" : "light"}`}
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                onChange={event => setCredenciales({email: credenciales.email, password: event.target.value})}
            />
            <br/>

            <br/>
            
            <Button variant="contained" onClick={() => navigate('/Conectar/'+ credenciales.email+'/'+credenciales.password ,{replace: true})}>Sing In</Button>
            </div>
        </div>
    )
}
export default Longin