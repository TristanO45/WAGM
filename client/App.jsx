import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Feed } from "./components/Feed.jsx";
import { Login } from "./components/Login.jsx"; // What someone sees to login
//import Navbar from "./components/Nav";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/feed" element={<Feed />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
