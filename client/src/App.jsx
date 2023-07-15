import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";

//components
import Login from "./pages/Login";
import Signup from "./pages/signup";
import Products from "./pages/products";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Login></Login>} path="/login"></Route>
        <Route element={<Signup />} path="/signup"></Route>
        <Route element={<Products />} path="/products"></Route>
      </Routes>
    </>
  );
}

export default App;
