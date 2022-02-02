import React, { useState } from "react";
import { useParams } from "react-router-dom"
import "../styles/output.css";
import { useQuery } from '@apollo/client';
import { QUERY_PROJECT } from '../utils/queries';

function Project() {
  const { projectId } = useParams();

  const { loading, data } = useQuery(QUERY_PROJECT, 
   { 
      variables: { projectId: projectId },
  }
  );

  const project = data?.project || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div class="flex-col border-black border-2 mt-10 w-3/4 mx-auto">
      <div class="flex justify-between px-3 mb-3 mt-3">
        <h3>{project.projectName}</h3>
        <h4>{project.creator}</h4>
        <h4>created on: {project.dateCreated}</h4>
        <div class="flex border-black border-1">
          <h4>Favorite?</h4>
          <input type="checkbox" class="mr-20 ml-1.5 mt-1.5"></input>
        </div>
      </div>
      <div class="flex justify-between px-3 mb-3">
        <h3>
          Description: {project.description}
        </h3>
      </div>
      <div class="flex justify-between px-3 mb-3">
        <h3>Searching For: {project.languages}</h3>
      </div>
    </div>
  );
}

export default Project;