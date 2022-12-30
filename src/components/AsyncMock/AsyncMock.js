 const products = [
  {
    id: "1",
    name: "Teclado",
    category: "gamer",
    price: "15.000",
    img: "https://http2.mlstatic.com/D_NQ_NP_944449-MLA50305077491_062022-O.webp",
    stock: "10",
    description:
      "Teclado gamer HyperX Alloy Origins 60 QWERTY HyperX Lineal Red inglés US color negro con luz RGB",
  },
  {
    id: "2",
    name: "Mouse",
    category: "gamer",
    price: "4.000",
    img: "https://http2.mlstatic.com/D_NQ_NP_988246-MLA50752734024_072022-O.webp",
    stock: "10",
    description: "Mouse Juego Gamer Inalambrico Recargable 6 Botones Suave Rgb",
  },
  {
    id: "3",
    name: "Monitor",
    category: "gamer",
    price: "154.999",
    img: "https://http2.mlstatic.com/D_NQ_NP_621039-MLA51230752770_082022-O.webp",
    stock: "10",
    description:
      "Monitor gamer curvo Gigabyte G32QC A LCD 31.5 negro 100V/240V",
  },
];

export const getProducts = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(products);
    }, 400);
  });
};

export const getProductsById = (id) => {
  return new Promise((res) => {
    setTimeout(() => {
      res(products.find((product) => product.id === id));
    }, 400);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((res) => {
    setTimeout(() => {
      res(products.filter((product) => product.category === categoryId));
    });
  });
};