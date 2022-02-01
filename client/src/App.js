import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import "./styles/output.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import Project from "./pages/Project";
import Search from "./pages/Search";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Create from "./pages/Create";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    fetch("/user")
      .then((res) => res.json())
      .then(setUser);
  }, [setUser]);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/Profile" component={Profile} />
        <Route path="/Project" component={Project} />
        <Route path="/Create" component={Create} />
        <Route path="/Search" component={Search} />
        <Route path="/Login" component={Login} />
        <Route path="/Signup" component={Signup} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

// EXAMPLE CODE FOR APP.JS

// https://github.com/auth0-samples/auth0-react-samples/tree/master/Sample-01

// import { Container } from "reactstrap";

// import Loading from "./components/Loading";
// import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";
// import Home from "./views/Home";
// import Profile from "./views/Profile";
// import ExternalApi from "./views/ExternalApi";
// import { useAuth0 } from "@auth0/auth0-react";
// import history from "./utils/history";

// // styles
// import "./App.css";

// // fontawesome
// import initFontAwesome from "./utils/initFontAwesome";
// initFontAwesome();

// const App = () => {
//   const { isLoading, error } = useAuth0();

//   if (error) {
//     return <div>Oops... {error.message}</div>;
//   }

//   if (isLoading) {
//     return <Loading />;
//   }

//   return (
//     <BrowserRouter>
//       <div id="app" className="d-flex flex-column h-100">
//         <NavBar />
//         <Container className="flex-grow-1 mt-5">
//           <Switch>
//             <Route path="/" exact component={Home} />
//             <Route path="/profile" component={Profile} />
//             <Route path="/external-api" component={ExternalApi} />
//           </Switch>
//         </Container>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;
