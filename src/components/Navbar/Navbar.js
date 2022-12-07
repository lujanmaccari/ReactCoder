import React, { useState } from "react";
import Buttons from "../Buttons/Buttons";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";

const Navbar = () => {
  const state = useState()
  console.log(state)
  const menu = ['Home', 'Products', 'Favourites']
  return (
    <div className="navbar">
      {menu.map((label, index) => <Buttons key={index}>{label}</Buttons>)}
      <CartWidget/>
    </div>
  );
};

export default Navbar;
