import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { getProducts } from "../AsyncMock/AsyncMock";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((res) => {
        setProducts(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <CircularProgress color="inherit" />;
  }

  return (
    <>
      <h1>Listado de productos</h1>
      <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;
