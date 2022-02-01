import React, { useState } from "react";
import "../styles/output.css";
import Header from "../components/Header"
import Project from "../components/Project";

function Search (){
    return ( <> 
    <Header />
    <div className="flex justify-center">  
    <div className="mt-10 ml-10 border-black border-2 basis-1/4 flex justify-center">
            <h2 className="my-1 mx-1">Filter by Language/Technology</h2>
        </div>
    <div className="flex-col ml-6 basis-3/4">
    <Project />
    <Project />
    <Project />
    <Project />
    <Project />
    </div>
    </div>
    </>
    )
};

export default Search;