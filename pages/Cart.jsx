import { useOutletContext } from "react-router-dom";
export default function Cart() {
  const { savedProducts, storeProducts } = useOutletContext();
  return (
    <section className="cart">
      <h1 className="cart-title">Your Cart</h1>
      {savedProducts.map((savedProduct) => {
        return (
          <div className="cart-product" key={savedProduct.id}>
            <div className="cart-product-img">
              <img src={savedProduct.image} alt={savedProduct.title} />
            </div>
            <div className="cart-product-info">
              <h2 className="cart-product-title">{savedProduct.title}</h2>
              <p className="cart-product-description">
                {savedProduct.description}
              </p>
              <p className="cart-product-price">{savedProduct.price}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
