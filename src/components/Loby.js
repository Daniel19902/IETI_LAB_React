import '../App.css'
import {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import React from "react";
import { useNavigate } from "react-router-dom";

const Loby = () =>{

    const [data, setData] = useState(null);
    const {token} = useParams();
    //console.log(token);

    useEffect(() => {

        fetch("http://localhost:8090/v1/task")
            .then(response => response.json())
            .then(data1 => {
                console.log(data1[0])
                setData((data1[0]))
            });



    });

    return(
        <div className= 'Container'>
            <h1> TAKS </h1>
            <p> {data} </p>
        </div>

    )



}

export default Loby