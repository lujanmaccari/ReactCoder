import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  return (
    <Link to = '/cart' >
      <AddShoppingCartIcon />
      {cart.length}
    </Link>
  );
};
export default CartWidget;
