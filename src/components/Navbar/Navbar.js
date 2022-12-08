import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";

const Navbar = () => {
  /*   const menu = ['Home', 'Products', 'Favourites']
   */
  return (
    <div className="navbar">
      {/*       {menu.map((label, index) => <Buttons key={index}>{label}</Buttons>)}
       */}
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "activeBtn" : "btn")}
      >
        Home
      </NavLink>
      <NavLink
        to="/category"
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
