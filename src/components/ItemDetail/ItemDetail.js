import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  return (
    <div>
      <h3>{name}</h3>
      <img src={img} alt={name} />
      <p>Categoria: {category}</p>
      <p>{description}</p>
      <h3>${price}</h3>
      {stock != 0 ? <ItemCount stock={stock} /> : "No hay mas stock!"}
    </div>
  );
};

export default ItemDetail;
