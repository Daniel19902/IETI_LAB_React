import {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import React from "react";
import { useNavigate } from "react-router-dom";

const Connect = (props) => {
    const [token, setToken] = useState(null);
    const {email, password} = useParams();
    const navigate = useNavigate();
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email,
                                    password: password})
    };


    useEffect(()=>{
        if(!token) return;
        localStorage.setItem('token', JSON.stringify(token))
        navigate("/Loby")
    },[token])



    console.log(email)
    console.log(password)
    useEffect(() => {

        fetch("http://localhost:8080/v1/auth", requestOptions)
            .then(response => response.json())
            .then(data => {
                setToken(data.token)
            });



    },[]);

    return (
        <h1> </h1>

    )
}

export default Connect