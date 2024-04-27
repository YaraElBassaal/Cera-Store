import { Outlet } from "react-router-dom";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
export default function RootLayout() {
  const [savedProducts, setSavedProducts] = React.useState([]);
  const [cartProducts, setCartProducts] = React.useState([]);
  function storeProducts(product) {
    const foundElement = savedProducts.find(
      (savedProduct) => savedProduct.id === product.id,
    );
    console.log(foundElement);
    if (!foundElement) {
      const newSavedProducts = [...savedProducts, product];
      localStorage.setItem("savedProducts", JSON.stringify(newSavedProducts));

      setSavedProducts((prevSavedProducts) => [...prevSavedProducts, product]);
    }
  }

  function storeCartProducts(product) {
    const foundElement = savedProducts.find(
      (savedProduct) => savedProduct.id === product.id,
    );
    console.log(foundElement);
    if (!foundElement) {
      const newSavedProducts = [...savedProducts, product];
      localStorage.setItem("savedProducts", JSON.stringify(newSavedProducts));

      setSavedProducts((prevSavedProducts) => [...prevSavedProducts, product]);
    }
  }

  React.useEffect(() => {
    const storedProducts = localStorage.getItem("savedProducts");
    if (storedProducts) {
      setSavedProducts(JSON.parse(storedProducts));
    }
  }, []);

  return (
    <>
      <Header savedProducts={savedProducts} storeProducts={storeProducts} />
      <main>
        <Outlet context={{ storeProducts, savedProducts }} />
      </main>

      <Footer />
    </>
  );
}
