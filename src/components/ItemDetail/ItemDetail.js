import { Container } from "@mui/material";
import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ product }) => {

  const handleOnAdd = (quantity) => {
    console.log("se agregaron" + quantity + "productos al carrito")
    console.log({...product})
  }
  return (
    <Container sx={{ display: "grid", justifyContent: "center"}}>
      <h3>{product.name}</h3>
      <img src={product.img} alt={product.name} />
      <p>Categoria: {product.category}</p>
      <p>{product.description}</p>
      <h3>${product.price}</h3>
      {product.stock != 0 ? <ItemCount stock={product.stock} product = {product} cantProductos={handleOnAdd}/> : "No hay mas stock!"}
    </Container>
  );
};

export default ItemDetail;
