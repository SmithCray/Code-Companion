import React, { useState } from "react";
import "../styles/output.css";

function project() {
  return (
    <div class="flex-col border-black border-2 mt-10 w-3/4 mx-auto">
      <div class="flex justify-between px-3 mb-3 mt-3">
        <h3>Project Post</h3>
        <h4>created by:</h4>
        <h4>created on:</h4>
        <div class="flex border-black border-1">
          <h4>Favorite?</h4>
          <input type="checkbox" class="mr-20 ml-1.5"></input>
        </div>
      </div>
      <div class="flex justify-between px-3 mb-3">
        <h3>
          Description: Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Architecto totam temporibus, itaque atque nemo excepturi earum
          veritatis alias, reiciendis harum culpa neque. Eum unde illo quia
          assumenda consequuntur, aut culpa sapiente quae, ad doloremque fuga
          neque quo corporis earum nobis? Quae fugit voluptatum optio tempora
          qui illo, exercitationem aut laudantium id quisquam impedit ipsa culpa
          repellendus pariatur corrupti voluptatem quo ratione laboriosam.
          Maxime dignissimos accusantium, recusandae at, deleniti iste iure,
          labore perferendis dolorem repellendus saepe dolore ipsam. Accusamus
          voluptate vero tempora perferendis quis possimus in id dolores tenetur
          exercitationem! Nulla dolorum distinctio reiciendis itaque pariatur
          veniam recusandae nam est porro?
        </h3>
      </div>
      <div class="flex justify-between px-3 mb-3">
        <h3>Searching For:</h3>
      </div>
    </div>
  );
}

export default Project;