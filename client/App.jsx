import React from "react";
import { BrowserRouter, Switch, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login.jsx";
import { Feed } from "./components/Feed.jsx";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Login />}></Route>
      <Route path="/feed" element={<Feed />}></Route>
    </Routes>
    // <div>
    //   <h1>W.A.G.M.</h1>
    //   <h3>Established 2011</h3>
    // </div>
  );
};

export default App;
