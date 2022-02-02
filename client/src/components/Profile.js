import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';



function Profile() {
  const { userId } = useParams();

  const { loading, data } = useQuery(
    userId ? QUERY_USER : QUERY_ME,
    {
      variables: { userId: userId },
    }
  );

  const profile = data?.me || data?.user || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return ( 
  <div>
      <div class="border-black rounded-md border-2 w-1/4 mx-2 mb-2 text-center">
        <h3 class="my-4">My Profile</h3>
        <h1 class="my-4">{user.username}</h1>
        <h1 class="mt-4">Description</h1>
        <p class="mb-4 mt-1">{user.description}</p>
        <h1 class="mt-4">Skills/Technologies</h1>
        <p class="mb-4 mt-1">{user.skills}</p>
        <h1 class="mt-4">Experience</h1>
        <p class="mb-4 mt-1">I have {user.experienceLevel}</p>
        <a href={`github.com/${user.github}`} class="my-4">GitHub</a>
        <button class="my-4 border border-black rounded-md border-2">Edit</button>
      </div>
  </div>
  );
}

export default Profile;
