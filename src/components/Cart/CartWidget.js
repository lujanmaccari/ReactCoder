import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { cart, getQuantity } = useContext(CartContext);
  const totalQuantity = getQuantity();

  // intente implementar el totalQuantity pero me tiraba Nan y no pude descubrir por qué era 
  return (
    <Link to = '/cart' >
      <AddShoppingCartIcon />
      {/* {totalQuantity} */}
      {cart.length}
    </Link>
  );
};
export default CartWidget;
