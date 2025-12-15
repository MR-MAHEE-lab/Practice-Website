import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import About from "./Pages/About";
import Cart from "./Pages/Cart";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/about" element={<About />} />

      {/* Cart Page */}
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}
