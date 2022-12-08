import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../AsyncMock/AsyncMock";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    if (categoryId) {
      getProductsByCategory(categoryId)
        .then((res) => {
          setProducts(res);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => setLoading(false));
    } else {
      getProducts()
        .then((res) => {
          setProducts(res);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => setLoading(false));
    }
  }, [categoryId]);

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
