import React, { useState } from "react";
import "../styles/output.css";
import Header from "../components/Header";
import logo from "../styles/img/CodeComputer.png";

const inputStyle = "border border-1 border-black mx-1 px-1 rounded-lg";
const buttonCSS =
  "text-2xl px-3 mx-2 my-2 py-2 bg-gradient-to-r from-sky-400 to-blue-700 rounded-lg hover:shadow hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-800";

function Signup() {
  const [formState, setFormState] = useState({
    name: "",
    github: "",
    tech: "",
    about: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
  //   console.log(formState);
  //   try {
  //     const { data } = await login({
  //       variables: { ...formState },
  //     });

  //     Auth.login(data.login.token);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  return (
    <>
      <Header />
      <div className="bg-[url('../styles/img/landing.png')] pt-16">
        <div className="flex justify-center bg-white border-black border-2 rounded-md w-1/2 mx-auto mt-20">
          <div>
            <form className="flex-col">
              <img className="h-32 w-60" src={logo} alt="" />
              <div className="flex m-2 p-2">
                <h3>Name:</h3>
                <input
                  className={inputStyle}
                  type="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                />
              </div>
              <div className="flex m-2 p-2">
                <h3>GitHub Username:</h3>
                <input
                  className={inputStyle}
                  type="github"
                  name="github"
                  value={formState.github}
                  onChange={handleChange}
                />
              </div>
              <div className="flex m-2 p-2">
                <h3>Technologies:</h3>
                <input
                  className={inputStyle}
                  type="tech"
                  name="tech"
                  value={formState.tech}
                  onChange={handleChange}
                />
              </div>
              <div className="flex m-2 p-2">
                <h3>About Me:</h3>
                <input
                  className={inputStyle}
                  type="about"
                  name="about"
                  value={formState.about}
                  onChange={handleChange}
                />
              </div>
              <button className={buttonCSS}>Save</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
