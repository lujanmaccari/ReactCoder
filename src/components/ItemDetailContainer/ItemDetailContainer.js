import { CircularProgress, Container } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
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
    return (
      <Container sx={{ display: "grid", justifyContent: "center", mt: "20px" }}>
        <CircularProgress color="inherit" />
      </Container>
    );
  }

  return (
    <Container sx={{ display: "grid", justifyContent: "center", mt: "20px" }}>
      <h1>Detalle del producto</h1>
      <ItemDetail product={product} />
    </Container>
  );
};
export default ItemDetailContainer;
