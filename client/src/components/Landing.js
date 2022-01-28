import React, { useState } from "react";
import "../styles/output.css";

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
        
      );
    }
    
    export default Landing;