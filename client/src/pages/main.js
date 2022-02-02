import React, { useState } from "react";
import "../styles/output.css";
import Header from "../components/Header"
import Profile from "../components/Profile";
import Project from "../components/Project";

function Main() {
    return (
    <div>
        <Header />
        <div className="flex mt-10 ml-3">
            <div className="border border-black border-2 rounded-t-md">
                <button>My Projects</button>
            </div>
            <div className="border border-black border-2 rounded-t-md ml-1">
                <button>My Favorites</button>
            </div>
        </div>
        <div className="flex">
            <div className="w-3/4">
                <Project />
                <Project />
                <Project />
            </div>
            <Profile />
        </div>
        
        
    </div>





    )


}

export default Main;