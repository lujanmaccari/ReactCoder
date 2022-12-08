import { CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductsById } from "../AsyncMock/AsyncMock";

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
      <div>
        <h3>{product.name}</h3>
        <img src={product.img} alt={product.name} />
        <p>Categoria: {product.category}</p>
        <p>{product.description}</p>
        <h3>${product.price}</h3>
      </div>
    </>
  );
};
export default ItemDetailContainer;
