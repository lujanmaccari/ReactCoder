import React from "react";
import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    if (!isInCart(product.id)) {
      setCart([...cart, product]);
    }
  };
console.log(cart)
  const isInCart = (id) => {
    return cart.some((cart) => cart.id === id);
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((cart) => cart.id !== id);
    setCart(updatedCart);
  };

  const getQuantity = () => {
    let totalQuantity = 0;

    cart.forEach(product => {
      totalQuantity += product.quantity;
    });
    console.log(cart)
    console.log(totalQuantity, "cantidad total ")
    return totalQuantity
  };

  const getTotal = () => {
    let totalQuantity = 0

    cart.forEach(product => {
      totalQuantity += product.quantity * product.price
    })

    return totalQuantity
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, isInCart, getQuantity, getTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
