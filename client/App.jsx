import React from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { HashRouter, Routes, Route, Router } from "react-router-dom";
import { Feed } from "./components/Feed.jsx";
import { Login } from "./components/Login.jsx"; // What someone sees to login
import { Signup } from "./components/Signup.jsx";
//import Navbar from "./components/Nav";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Signup />}></Route>
        <Route exact path="/feed" element={<Feed />}></Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
