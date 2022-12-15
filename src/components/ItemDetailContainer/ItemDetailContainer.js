import { CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
/* import { getProductsById } from "../AsyncMock/AsyncMock";
 */ import ItemDetail from "../ItemDetail/ItemDetail";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../service/Firebase/firebaseConfig";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const { productId } = useParams();

  useEffect(() => {
    setLoading(true);
    const docRef = doc(db, "productos", productId);
    getDoc(docRef)
      .then((doc) => {
        const data = doc.data();
        const noteAddapted = { id: doc.id, ...data };
        setProduct(noteAddapted);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
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
