import React, { useState } from "react";
import "../styles/output.css";
import Header from "../components/Header"
import Profile from "../components/Profile";
import Project from "./project";

function profile() {
    return (
    <div>
        <Header />
        <div class="flex mt-10 ml-3">
            <div class="border border-black border-2 rounded-t-md">
                <button>My Projects</button>
            </div>
            <div class="border border-black border-2 rounded-t-md ml-1">
                <button>My Favorites</button>
            </div>
        </div>
        <div class="flex">
            <div class="w-3/4">
                <Project />
                <Project />
                <Project />
            </div>
            <Profile />
        </div>
        
        
    </div>





    )


}

export default profile;