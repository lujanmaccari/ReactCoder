import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Favourites from "./components/Favourites/Favourites";
import CartProvider from "./context/CartContext";
import Checkout from "./components/Checkout/Checkout";
import Category from "./components/Category/Category";


function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryId"
              element={<Category />}
            />
            <Route
              path="/detail/:productId"
              element={<ItemDetailContainer />}
            />
{/*             <Route path="/favourites" element={<Favourites />} />
 */}            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
