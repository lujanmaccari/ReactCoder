import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ product }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <img src={product.img} alt={product.name} />
      <p>Categoria: {product.category}</p>
      <p>{product.description}</p>
      <h3>${product.price}</h3>
      {product.stock != 0 ? <ItemCount stock={product.stock} product = {product}/> : "No hay mas stock!"}
    </div>
  );
};

export default ItemDetail;
