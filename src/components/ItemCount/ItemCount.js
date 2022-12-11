import React, { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(0);
  const [quantityToAdd, setQuantityToAdd] = useState(0);

  const addProduct = () => {
    if (count < stock) {
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
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={deleteProduct}>-</button>
      <button onClick={addProduct}>+</button>
      {quantityToAdd === 0 ? (
        <button onClick={() => handleOnAdd(count)} disabled={count == 0}>
          Agregar al carrito
        </button>
      ) : (
        <Link to="/cart">Finalizar compra</Link>
      )}
    </div>
  );
};
export default ItemCount;
