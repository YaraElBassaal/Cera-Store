import { useOutletContext } from "react-router-dom";
export default function Cart() {
  const { savedCartProducts } = useOutletContext();
  console.log(savedCartProducts);
  return (
    <section className="cart">
      <h1 className="cart-title">Your Cart</h1>
      {savedCartProducts.map((savedCartProduct) => {
        return (
          <div className="cart-product" key={savedCartProduct.id}>
            <div className="cart-product-img">
              <img src={savedCartProduct.image} alt={savedCartProduct.title} />
            </div>
            <div className="cart-product-info">
              <h2 className="cart-product-title">{savedCartProduct.title}</h2>
              <p className="cart-product-description">
                {savedCartProduct.description}
              </p>
              <div className="cart-product-detail">
                <p>Color: {savedCartProduct.color}</p>
                <p>Quantity: {savedCartProduct.quantity}</p>
                <p>Size: {savedCartProduct.size}</p>
              </div>
              <p className="cart-product-price">{savedCartProduct.price}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
