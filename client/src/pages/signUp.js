import React, { useState } from "react";
import "../styles/output.css";
import Header from "../components/Header";
import logo from "../styles/img/CodeComputer.png";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../utils/mutations";

const inputStyle = "border border-1 border-black mx-1 px-1 rounded-lg";
const buttonCSS =
  "text-2xl px-3 mx-2 my-2 py-2 text-white bg-gradient-to-r from-sky-400 to-blue-700 rounded-lg hover:shadow hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-800";
const dropdownCSS =
  "dropdown-toggle mx-2 px-6 py-1.5 bg-gradient-to-r from-sky-400 to-blue-700 text-white text-xs leading-tight uppercase rounded shadow-md hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-800 hover:shadow-lg focus:bg-gradient-to-r focus:from-sky-500 focus:to-blue-800 focus:shadow-lg focus:outoptionne-none focus:ring-0 active:bg-gradient-to-r active:from-sky-600 active:to-blue-900 active:shadow-lg active:text-white transition duration-150 ease-in-out flex items-centerb whitespace-nowrap";
const liCSS =
  "dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100";

function Signup() {
  const [addProfile, { error, data }] = useMutation(CREATE_USER);

  const [formState, setFormState] = useState({
    username: "",
    github: "",
    languages: "",
    skills: "",
    experienceLevel: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const { username, github, languages, experienceLevel, skills } = formState;

    addProfile({
      variables: {
        username,
        github,
        languages,
        experienceLevel: Number(experienceLevel),
        skills,
      },
    });
    setFormState({
      username: "",
      github: "",
      languages: "",
      skills: "",
      experienceLevel: "",
    });
  };

  return (
    <>
      <Header />
      <div className="bg-[url('../styles/img/landing.png')] pt-16">
        <div className="flex justify-center bg-white border-black border-2 rounded-md w-1/2 mx-auto mt-20">
          <div>
            <form className="flex-col" onSubmit={handleFormSubmit}>
              <img className="h-32 w-60" src={logo} alt="" />
              <div className="flex m-2 p-2">
                <h3>Username:</h3>
                <input
                  className={inputStyle}
                  type="username"
                  name="username"
                  value={formState.username}
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
              <div className="m-2 p-2">
                <h3>Languages:</h3>
                <input
                  className={inputStyle}
                  type="languages"
                  name="languages"
                  value={formState.languages}
                  onChange={handleChange}
                />
              </div>
              <div className="flex m-2 p-2">
                <h3>Years of Experience:</h3>
                <input
                  className={inputStyle}
                  type="experienceLevel"
                  name="experienceLevel"
                  value={formState.experienceLevel}
                  onChange={handleChange}
                />
                {/* <select
                  className={dropdownCSS}
                  name="experienceLevel"
                  input="experienceLevel"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Choose One
                  <option className={liCSS} href="#">
                    -1
                  </option>
                  <option className={liCSS} href="#">
                    1
                  </option>
                  <option className={liCSS} href="#">
                    2
                  </option>
                  <option className={liCSS} href="#">
                    3
                  </option>
                  <option className={liCSS} href="#">
                    4
                  </option>
                  <option className={liCSS} href="#">
                    5
                  </option>
                  <option className={liCSS} href="#">
                    5+
                  </option>
                </select> */}
              </div>
              <div className="flex m-2 p-2">
                <h3>Technologies:</h3>
                <input
                  className={inputStyle}
                  type="skills"
                  name="skills"
                  value={formState.skills}
                  onChange={handleChange}
                />
              </div>
              <button className={buttonCSS} type="submit">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
