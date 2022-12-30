import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemCount = ({ product }) => {
  const [count, setCount] = useState(1);
  const [quantityToAdd, setQuantityToAdd] = useState(0);
  const { addToCart, isInCart, removeFromCart, getQuantity } = useContext(CartContext);

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
/* 
  const handleOnAdd = (count) => {
    setQuantityToAdd(count);
    addToCart(product);
  };
 */
  const handleRemove = (count) => {
    setQuantityToAdd(count);
    removeFromCart(product.id);
  };

  const handleOnAdd = (id) => {
    console.log("se agregaron " + count + " productos al carrito");
    console.log({ ...product });
    setQuantityToAdd(count);
    addToCart(product);
  };

  const isAdded = isInCart(product.id);
 console.log(quantityToAdd, "quantityToAdd")
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
     {/*  <button
        onClick={() => {
          cantidadProductos(count);
        }}
        className="btn2"
      >
        hola
      </button> */}
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
