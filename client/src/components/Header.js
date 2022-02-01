// ** Change all isAuthenticated references (see below)
// Commented-out code isn't necessary as we're not using auth0-react library (provides front-end to front-end auth only)

import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "../styles/output.css";
import Logo from "../styles/img/CodeCompanion.png";

const desktopButton =
  "hidden md:flex text-xl font-bold px-3 mx-4 py-2 hover:shadow hover:text-slate-800";
const mobileButton =
  "block bg-gradient-to-r from-sky-400 via-blue-900 to-sky-400 border-t border-black text-sm px-3 py-2 hover:text-slate-800 hover:bg-gradient-to-r hover:from-sky-500 hover:via-blue-800 hover:to-sky-500";

function Header() {
  let [hidden, setHidden] = useState("hidden");
  // ** To do: Call to /User with a resolver (via App.js) to authenticate
  const location = useLocation();

  const MobileHidden = () => {
    if (hidden === "hidden") {
      setHidden("");
    } else {
      setHidden("hidden");
    }
  };

  // const { loginWithRedirect } = useAuth0();

  return (
    <div className="bg-gradient-to-r from-sky-400 via-blue-900 to-sky-400 shadow">
      <div className=" flex justify-between">
        <img src={Logo} className="h-16 w-30 md:h-24 md:w-46 p-2 m-1"></img>
        <nav className="flex items-center">
          <button
            type="button"
            onClick={MobileHidden}
            className="md:hidden px-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {location.pathname !== "/Search" &&
          location.pathname !== "/" &&
          location.pathname !== "/Signup" ? (
            <Link to="/Search" className={desktopButton}>
              Search Projects
            </Link>
          ) : (
            <div></div>
          )}
          {location.pathname !== "/Create" &&
          location.pathname !== "/" &&
          location.pathname !== "/Signup" ? (
            <Link to="/Create" className={desktopButton}>
              Create a Project
            </Link>
          ) : (
            <div></div>
          )}
          {location.pathname !== "/Profile" &&
          location.pathname !== "/" &&
          location.pathname !== "/Signup" ? (
            <Link to="/Profile" className={desktopButton}>
              My Profile
            </Link>
          ) : (
            <div></div>
          )}
            <a
              href="/login"
              className={desktopButton}
            >
              Login
            </a>
            <a
              href="/logout"
              className={desktopButton}
            >
              Logout
            </a>
        </nav>
      </div>
      <nav className={hidden}>
        {location.pathname !== "/Search" &&
        location.pathname !== "/" &&
        location.pathname !== "/Signup" ? (
          <Link to="/Search" className={mobileButton}>
            Search Projects
          </Link>
        ) : (
          <div></div>
        )}
        {location.pathname !== "/Create" &&
        location.pathname !== "/" &&
        location.pathname !== "/Signup" ? (
          <Link to="/Create" className={mobileButton}>
            Create a Project
          </Link>
        ) : (
          <div></div>
        )}
        {location.pathname !== "/Profile" &&
        location.pathname !== "/" &&
        location.pathname !== "/Signup" ? (
          <Link to="/Profile" className={mobileButton}>
            My Profile
          </Link>
        ) : (
          <div></div>
        )}
          <a
            href="/login"
            className={`${mobileButton} border-b`}
          >
            Login
          </a>
          <a
            href="/"
            className={`${mobileButton} border-b`}
          >
            Logout
          </a>
      </nav>
    </div>
  );
}

export default Header;
