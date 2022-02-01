import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/output.css";
import Header from "../components/Header";
import logo from "../styles/img/CodeCompanion.png";

const inputStyle = "border border-1 border-black mx-1 px-1 rounded-lg";
const buttonCSS =
  "text-2xl px-3 mx-2 my-2 py-2 bg-gradient-to-r from-sky-400 to-blue-700 rounded-lg hover:shadow hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-800";

function Login() {
  const [formState, setFormState] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <Header />
      <div className="bg-[url('../styles/img/landing.png')] pt-16">
        
      </div>
    </>
  );
}

export default Login;
