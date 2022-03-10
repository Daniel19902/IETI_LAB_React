import '../App.css'
import {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import React from "react";
import { useNavigate } from "react-router-dom";

const Loby = () =>{

    const [data, setData] = useState( null);
    const {token} = useParams();
    console.log(token);
    const requestOptions = {
        method: 'GET',
        headers: {
            "Authorization": "Bearer "+token, //Agregado
        },
    };

    useEffect(() => {

        fetch("http://localhost:8080/v1/user", requestOptions)
            .then(response => response.json())
            .then(data1 => {

                setData(JSON.stringify(data1))
            });



    });

    return(
        <div className= 'Container'>
            <h1> Hola XD </h1>
            <p> {data} </p>
        </div>

    )



}

export default Loby