import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ItemListContainer} />
          <Route path="/category/:categoryId" element={ItemListContainer} />
          <Route path="/detail/:productId" element={ItemDetailContainer} />
        </Routes>
      </BrowserRouter>
      <Navbar />
      <ItemListContainer greeting="Welcome" />
    </>
  );
}

export default App;
