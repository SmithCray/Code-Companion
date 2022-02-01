import React, { useState } from "react";
import "../styles/output.css";
import Header from "../components/Header"

function Login (){
    const [formState, setFormState] = useState({ email: '', password: '' });

    const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
      };

    return ( <> 
    <Header />
     </>





    )


}

export default Login;