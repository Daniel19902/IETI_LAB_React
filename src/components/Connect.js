import {useEffect, useState} from "react";
import React from "react";

const Connect = () => {
    const [token, setToken] = useState(null);
    useEffect(() => {
        document.title = `You clicked ${token} times`;
        alert("entre")
        fetch("http://localhost:8080/v1/user")
            .then((response) => {
                // Just an example, it actually should set this token into a localStorage variable or some kind of global state.

                console.log(response.json())
                // Once the user have been authenticated the app will navigate to the landing page
                //navigate("/test");
            })

    });
}

export default Connect