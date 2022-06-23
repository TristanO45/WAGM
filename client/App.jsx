import React from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { Feed } from "./components/Feed.jsx";
import { Login } from "./components/Login.jsx"; // What someone sees to login
//import Navbar from "./components/Nav";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route exact path="/feed" element={<Feed />}></Route>
    </Routes>
  );
};

export default App;
