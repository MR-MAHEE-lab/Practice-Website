import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Logo from "../assets/logo.png";

export default function Navbar() {
  const { totalItems, totalPrice, cart } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-base-100 backdrop-blur-md shadow-md">
      <div className="navbar px-4 md:px-10">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold flex items-center gap-2">
          <img src={Logo} className="w-12" />
          ShopEase
        </Link>

        {/* Center Menu */}
        <ul className="menu menu-horizontal mx-auto hidden md:flex gap-2">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/product">Product</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>

        {/* Cart */}
        <div className="relative">
          <button
            className="btn btn-ghost btn-circle relative"
            onClick={() => setOpen(!open)}
          >
            🛒
            {totalItems > 0 && (
              <span className="badge badge-sm indicator-item absolute -top-1 -right-1">
                {totalItems}
              </span>
            )}
          </button>

          {/* Animated Dropdown */}
          <div
            className={`absolute right-0 mt-2 w-64 bg-base-100 shadow-lg rounded-lg border border-gray-200 overflow-hidden transition-all duration-300 ease-in-out transform origin-top ${
              open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            <div className="p-4 space-y-2">
              <h2 className="font-bold text-lg">{totalItems} Item{totalItems > 1 ? "s" : ""}</h2>
              <p className="text-gray-600">Subtotal: <span className="font-semibold">${totalPrice}</span></p>

              <div className="divide-y divide-gray-200 max-h-60 overflow-y-auto">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center py-2">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.qty} × ${item.price}</p>
                    </div>
                    <p className="font-semibold">${item.qty * item.price}</p>
                  </div>
                ))}
              </div>

              <Link
                to="/cart"
                className="btn btn-primary btn-block mt-2"
                onClick={() => setOpen(false)}
              >
                View Cart
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
