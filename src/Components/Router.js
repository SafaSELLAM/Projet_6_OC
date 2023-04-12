import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../Pages/About";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Logements from "../Pages/Logements";
const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logements/:id" element={<Logements />} />
        <Route path="/Error" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default Router;
