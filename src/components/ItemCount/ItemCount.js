import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemCount = ({ product }) => {
  const [count, setCount] = useState(1);
  const [quantityToAdd, setQuantityToAdd] = useState(0);
  const { addToCart, isInCart, removeFromCart } = useContext(CartContext);

  const addProduct = () => {
    if (count < product.stock) {
      setCount((prev) => prev + 1);
    }
  };

  const deleteProduct = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  const handleOnAdd = (count) => {
    console.log(count);
    console.log(`se agregaron ${count} productos al carrito`);
    setQuantityToAdd(count);
    addToCart(product);
  };

  const handleRemove = (count) => {
    console.log(count);
    console.log(`se quitaron ${count} productos al carrito`);
    setQuantityToAdd(count);
    removeFromCart(product.id);
  };

  const isAdded = isInCart(product.id);
  console.log(product.id);
  console.log(isInCart(product.id));
  return (
    <div>
      <p>{count}</p>
      <div>
        <button className="btnAddRemove" onClick={deleteProduct}>
          -
        </button>
        <button className="btnAddRemove" onClick={addProduct}>
          +
        </button>
      </div>
      {quantityToAdd === 0 ? (
        <button
          onClick={() => {
            isAdded ? handleRemove(product.id) : handleOnAdd(product.id);
          }}
          className="btn2"
        >
          {isAdded ? "Quitar del carrito" : "Agregar al carrito"}
        </button>
      ) : (
        <>
          <button
            onClick={() => {
              isAdded ? handleRemove(product.id) : handleOnAdd(product.id);
            }}
            className="btn2"
          >
            {isAdded ? "Quitar del carrito" : "Agregar al carrito"}
          </button>
          {isAdded ? (
            <Link to="/cart" className="btn2">
              Finalizar compra
            </Link>
          ) : null}
        </>
      )}
    </div>
  );
};
export default ItemCount;
