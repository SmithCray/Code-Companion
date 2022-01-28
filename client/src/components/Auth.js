// https://auth0.com/docs/libraries/auth0-react

import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
ReactDOM.render(
  <Auth0Provider
    domain="YOUR_DOMAIN"
    clientId="YOUR_CLIENT_ID"
    redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>,
  document.getElementById("app")
);
