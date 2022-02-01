import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "../styles/output.css";
import Header from "../components/Header";

function Landing() {
  return (
    <>
      <Header />
      <div className="bg-[url('../styles/img/landing.png')] pt-16">
        <div className="flex justify-center">
          <div className="relative text-center mx-2 my-2 h-96 w-1/4 border rounded-md border-black border-2">
            <h1 className="text-4xl mx-2 my-2">Ready To Get Started?</h1>
            <Link
              to="/Signup"
              className={buttonCSS}
              onClick={() =>
                loginWithRedirect({
                  screen_hint: "signup",
                })
              }
            >
              SignUp Here
            </Link>
          </div>
        </div>
        <div className="flex-col items-center">
          <div className="flex-col bg-white border-black border-2 rounded-md my-6 w-3/4 mx-auto">
            <div className="flex justify-between px-3 mb-3 mt-3">
              <h3>Project Post</h3>
              <h4>created by:</h4>
              <h4>created on:</h4>
              <div className="flex border-black border-1">
                <h4>Favorite?</h4>
                <input type="checkbox" className="mr-20 ml-2"></input>
              </div>
            </div>
            <div className="flex justify-between px-3 mb-3">
              <h3>
                Description: Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Architecto totam temporibus, itaque atque nemo excepturi
                earum veritatis alias, reiciendis harum culpa neque. Eum unde
                illo quia assumenda consequuntur, aut culpa sapiente quae, ad
                doloremque fuga neque quo corporis earum nobis? Quae fugit
                voluptatum optio tempora qui illo, exercitationem aut laudantium
                id quisquam impedit ipsa culpa repellendus pariatur corrupti
                voluptatem quo ratione laboriosam. Maxime dignissimos
                accusantium, recusandae at, deleniti iste iure, labore
                perferendis dolorem repellendus saepe dolore ipsam. Accusamus
                voluptate vero tempora perferendis quis possimus in id dolores
                tenetur exercitationem! Nulla dolorum distinctio reiciendis
                itaque pariatur veniam recusandae nam est porro?
              </h3>
            </div>
            <div className="flex justify-between px-3 mb-3">
              <h3>Searching For:</h3>
            </div>
          </div>
          <div className="flex-col bg-white border-black border-2 rounded-md my-6 w-3/4 mx-auto">
            <div className="flex justify-between px-3 mb-3 mt-3">
              <h3>Project Post</h3>
              <h4>created by:</h4>
              <h4>created on:</h4>
              <div className="flex border-black border-1">
                <h4>Favorite?</h4>
                <input type="checkbox" className="mr-20 ml-2"></input>
              </div>
            </div>
            <div className="flex justify-between px-3 mb-3">
              <h3>
                Description: Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Architecto totam temporibus, itaque atque nemo excepturi
                earum veritatis alias, reiciendis harum culpa neque. Eum unde
                illo quia assumenda consequuntur, aut culpa sapiente quae, ad
                doloremque fuga neque quo corporis earum nobis? Quae fugit
                voluptatum optio tempora qui illo, exercitationem aut laudantium
                id quisquam impedit ipsa culpa repellendus pariatur corrupti
                voluptatem quo ratione laboriosam. Maxime dignissimos
                accusantium, recusandae at, deleniti iste iure, labore
                perferendis dolorem repellendus saepe dolore ipsam. Accusamus
                voluptate vero tempora perferendis quis possimus in id dolores
                tenetur exercitationem! Nulla dolorum distinctio reiciendis
                itaque pariatur veniam recusandae nam est porro?
              </h3>
            </div>
            <div className="flex justify-between px-3 mb-3">
              <h3>Searching For:</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
