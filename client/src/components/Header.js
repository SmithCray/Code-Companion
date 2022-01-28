import React, { useState } from "react";
import "../styles/output.css";

function Header() {
  let [hidden, setHidden] = useState("hidden");

  const mobileHidden = () => {
    if (hidden === "hidden") {
      setHidden("");
    } else {
      setHidden("hidden");
    }
  };

  return (
    <div className="bg-gradient-to-r from-sky-400 via-blue-900 to-sky-400 shadow">
      <div className=" flex justify-between">
        <img
          src="../styles/img/CodeCompanion.png"
          className="h-16 w-30 md:h-24 md:w-46 p-2 m-1"
        ></img>
        <nav className="flex items-center">
          <button
            type="button"
            onClick={mobileHidden}
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
          <link
            to=""
            className="hidden md:flex text-xl font-bold px-3 mx-2 py-2 hover:shadow hover:text-slate-800"
          >
            Search Projects
          </link>
          <link
            to=""
            className="hidden md:flex text-xl font-bold px-3 mx-2 py-2 hover:shadow hover:text-slate-800"
          >
            Create a Project
          </link>
          <link
            to=""
            className="hidden md:flex text-xl font-bold px-3 mx-2 py-2 hover:shadow hover:text-slate-800"
          >
            My Profile
          </link>
          <link
            to=""
            className="hidden md:flex text-xl font-bold px-3 mx-2 py-2 hover:shadow hover:text-slate-800"
          >
            Login
          </link>
          <link
            to=""
            className="hidden md:flex text-xl font-bold px-3 mx-2 py-2 hover:shadow hover:text-slate-800"
          >
            Logout
          </link>
        </nav>
      </div>
      <nav className={`${hidden}`}>
        <link
          to=""
          className="block bg-gradient-to-r from-sky-400 via-blue-900 to-sky-400 border-t border-black text-sm px-3 py-2 hover:text-slate-800 hover:bg-gradient-to-r hover:from-sky-500 hover:via-blue-800 hover:to-sky-500"
        >
          Search Projects
        </link>
        <link
          to=""
          className="block bg-gradient-to-r from-sky-400 via-blue-900 to-sky-400 border-t border-black text-sm px-3 py-2 hover:text-slate-800 hover:bg-gradient-to-r hover:from-sky-500 hover:via-blue-800 hover:to-sky-500"
        >
          Create a Project
        </link>
        <link
          to=""
          className="block bg-gradient-to-r from-sky-400 via-blue-900 to-sky-400 border-t border-black text-sm px-3 py-2 hover:text-slate-800 hover:bg-gradient-to-r hover:from-sky-500 hover:via-blue-800 hover:to-sky-500"
        >
          My Profile
        </link>
        <link
          to=""
          className="block bg-gradient-to-r from-sky-400 via-blue-900 to-sky-400 border-b border-t border-black text-sm px-3 py-2 hover:text-slate-800 hover:bg-gradient-to-r hover:from-sky-500 hover:via-blue-800 hover:to-sky-500"
        >
          Login
        </link>
        <link
          to=""
          className="block bg-gradient-to-r from-sky-400 via-blue-900 to-sky-400 border- border-t border-black text-sm px-3 py-2 hover:text-slate-800 hover:bg-gradient-to-r hover:from-sky-500 hover:via-blue-800 hover:to-sky-500"
        >
          Logout
        </link>
      </nav>
    </div>
  );
}

export default Header;
