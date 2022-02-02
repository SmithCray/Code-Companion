import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AuthProvider from "./components/AuthProvider";
import { BrowserRouter } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
