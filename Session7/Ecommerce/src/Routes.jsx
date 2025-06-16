import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Product from "./Product";
import Example from "./Home";
import Navbar from "./Navbar";
import AllComponets from "./AllComponets";

export default function WebRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/buyer" />} />
        <Route path="buyer" element={<AllComponets />}>
          <Route index element={<Example />} />
          <Route path="pro" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
