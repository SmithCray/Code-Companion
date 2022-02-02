import React, { useState } from "react";
import "../styles/output.css";
import Header from "../components/Header";
import Project from "../components/Project";
import { useQuery } from "@apollo/client";
import { QUERY_PROJECT } from "../utils/queries";

function Search() {
  const { loading, data } = useQuery(QUERY_PROJECT);
  return (
    <>
      <Header />
      <div className="flex justify-center">
        <div className="mt-10 ml-10 border-black border-2 basis-1/4 flex justify-center">
          <button className="my-1 mx-1">Filter by Language/Technology</button>
        </div>
        <div className="flex-col ml-6 basis-3/4">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul>
              {data &&
                data?.projects?.map((project) => (
    <div key={project._id} className="flex-col border-black border-2 mt-10 w-3/4 mx-auto">
	<div className="flex justify-between px-3 mb-3 mt-3">
            <h3>{project.projectName}</h3>
            <h4>{project.creator}</h4>
            <h4>created on: {project.dateCreated}</h4>
            <div className="flex border-black border-1">
              <h4>Favorite?</h4>
              <input type="checkbox" className="mr-20 ml-1.5 mt-1.5"></input>
            </div>
          </div>
          <div className="flex justify-between px-3 mb-3">
            <h3>Description: {project.description}</h3>
          </div>
          <div className="flex justify-between px-3 mb-3">
            <h3>Searching For: {project.languages}</h3>
          </div>
          </div>
                ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default Search;
