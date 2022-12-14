import React, { useContext } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <Container sx={{ display: "grid", justifyContent: "center", mt: "20px" }}>
      <h1>Productos agregados al carrito</h1>
      {cart.map((cart) => {
        return (
          <Container key={cart.id}>
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
                <Typography variant="h7" color="text.secondary">
                  Cantidad: {cart.quantity}
                </Typography>
                <Typography variant="h7" color="text.secondary">
                  Subtotal: {cart.quantity}
                </Typography>
              </CardContent>
              <button onClick={() => removeFromCart(cart.id)} className="btn2">
                Eliminar del carrito
              </button>
            </Card>
          </Container>
        );
      })}
      <Link to="/checkout" className="btn2">
        Confirmar orden
      </Link>
    </Container>
  );
};

export default Cart;
