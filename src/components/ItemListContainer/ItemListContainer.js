import { CircularProgress, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../service/Firebase/firebaseConfig";


const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showNavigate, setShowNavigate] = useState(false)
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const collectionRef = categoryId
      ? query(collection(db, "productos"), where("category", "==", categoryId))
      : collection(db, "productos");
    getDocs(collectionRef)
      .then((response) => {
        console.log(response.docs);
        const productAdapted = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProducts(productAdapted);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);


  if (loading) {
    return (
      <Container sx={{ display: "grid", justifyContent: "center", mt: "20px" }}>
        <CircularProgress color="inherit" />
      </Container>
    );
  }

  return (
    <Container sx={{ display: "grid", justifyContent: "center", mt: "20px" }}>
      <h1>Listado de productos</h1>
      <ItemList products={products} />
    </Container>
  );
};

export default ItemListContainer;
