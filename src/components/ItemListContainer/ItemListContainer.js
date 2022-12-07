import { CircularProgress } from "@mui/material";
import {  useState } from "react";
import "./ItemListContainer.css";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`)
      .then((res) => {
        return res.json();
      })
      .then((json) => setProducts(json.results))
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return <CircularProgress color="inherit" />;
  }
  return (
    <>
      <h1 className="greeting">{props.greeting} to Mac-Commerce</h1>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      <div>
        {products?.map((product) => {
          return (
            <div key={product.id}>
              <img src={product.thumbnail} />
              <h2>{product.title}</h2>
              <h3>${product.price}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ItemListContainer;
