import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import {
  addDoc,
  collection,
  getDocs,
  query,
  documentId,
  where,
  writeBatch,
} from "firebase/firestore";
import { db } from "../../service/Firebase/firebaseConfig";

const Checkout = () => {
  const { cart } = useContext(CartContext);

  const handleCreateOrder = async () => {
    const order = {
      buyer: {
        name: "Lujan Maccari",
        email: "contact@lujan.com",
        phone: "123456789",
      },
      items: cart,
      total: "", // getTotal() funcion del after
    };

    const batch = writeBatch(db);

    const orderRef = collection(db, "orders");

    addDoc(orderRef, order).then((res) => {
      console.log(res.id);
    });

    const ids = cart.map((product) => product.id);

    const productsRef = query(
      collection(db, "products"),
      where(documentId(), "in", ids)
    );

    const productsAddedToCartFromFirestore = await getDocs(productsRef);

    const { docs } = productsAddedToCartFromFirestore;

    const outOfStock = [];

    docs.forEach((doc) => {
      const dataDoc = doc.data();
      const stockDb = dataDoc.stockDb;

      const productAddedToCart = cart.find((product) => product.id === doc.id);
      const prodQuantity = productAddedToCart?.quantity;

      if (stockDb >= prodQuantity) {
        batch.update(doc.ref, { stock: stockDb - prodQuantity });
      } else {
        outOfStock.push({ id: doc.id, ...dataDoc });
      }
    });
    if (outOfStock.length === 0) {
      await batch.commit();
      const orderRef = collection(db, "orders");
      const orderAdded = await addDoc(orderRef, order);
    }
  };

  return (
    <div>
      Checkout
      <form></form>
      <button onClick={handleCreateOrder}>Comprar</button>
    </div>
  );
};

export default Checkout;
