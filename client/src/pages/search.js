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
                  <li key={project._id}>{project.projectName}</li>
                ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default Search;
