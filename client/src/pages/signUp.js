import React, { useState } from "react";
import "../styles/output.css";
import Header from "../components/Header";
import logo from "../styles/img/CodeComputer.png";

const inputStyle = "border border-1 border-black mx-1 px-1 rounded-lg";


function Signup() {

    const [formState, setFormState] = useState({ email: "", password: "" });

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
      <div className="flex justify-center border-black border-2 w-1/2 mx-auto mt-20">
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
            <button className="border rounded-lg bg-blue-200 m-2 p-2">
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
