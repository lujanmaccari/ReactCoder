import { CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductsById } from "../AsyncMock/AsyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const { productId } = useParams();

  useEffect(() => {
    setLoading(true);
    getProductsById(productId)
      .then((res) => {
        setProduct(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, [productId]);

  if (loading) {
    return <CircularProgress color="inherit" />;
  }

  return (
    <>
      <h1>Detalle del producto</h1>
      <ItemDetail product={product} />
    </>
  );
};
export default ItemDetailContainer;
