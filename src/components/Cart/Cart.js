import React, { useContext } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h1>Productos agregados al carrito</h1>
      {cart.map((cart) => {
        return (
          <div key={cart.id}>
            <Card
              sx={{
                display: "grid",
                justifyContent: "center",
                m: 5,
                maxWidth: 500,
              }}
            >
              <CardMedia
                component="img"
                width="10"
                image={cart.img}
                alt="img"
                sx={{ maxWidth: 300 }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {cart.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Categoría: {cart.category}
                </Typography>
                <Typography variant="h7" color="text.secondary">
                  ${cart.price}
                </Typography>
              </CardContent>
              <button onClick={() => removeFromCart(cart.id)} className="btn2">
                Eliminar del carrito
              </button>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
