import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login.js";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
    // <div>
    //   <h1>W.A.G.M.</h1>
    //   <h3>Established 2011</h3>
    // </div>
  );
};

export default App;
