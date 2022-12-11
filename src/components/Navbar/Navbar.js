import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "../Cart/CartWidget";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "activeBtn" : "btn")}
      >
        Products
      </NavLink>
      <NavLink
        to="/category/gamer"
        className={({ isActive }) => (isActive ? "activeBtn" : "btn")}
      >
        Categories
      </NavLink>
      <NavLink
        to="/detail"
        className={({ isActive }) => (isActive ? "activeBtn" : "btn")}
      >
        Product Detail
      </NavLink>

      <CartWidget />
    </div>
  );
};

export default Navbar;
