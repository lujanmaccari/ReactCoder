import React from "react";
import Buttons from "../Buttons/Buttons";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";

const Navbar = () => {
  const menu = ['Home', 'Products', 'Favourites']
  return (
    <div className="navbar">
      {menu.map(label => <Buttons>{label}</Buttons>)}
      <CartWidget/>
    </div>
  );
};

export default Navbar;
