import React, { useState } from "react";
import "../styles/output.css";
import { Header } from "../Header"

function Landing () {
    let [hidden, setHidden] = useState("hidden");
  
    const mobileHidden = () => {
      if (hidden === "hidden") {
        setHidden("");
      } else {
        setHidden("hidden");
      }
    };

    return (
      { Header }
      
      
     
        
      );
    }
    
    export default Landing;