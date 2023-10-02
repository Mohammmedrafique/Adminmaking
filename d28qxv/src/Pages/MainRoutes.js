import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Products from "./Products";
import Orders from "./Orders";
import Home from "./Home";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/product" element={<Products />} />
      <Route path="/order" element={<Orders />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default MainRoutes;
