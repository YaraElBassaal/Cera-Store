import { FaShoppingCart } from "react-icons/fa";
import React from "react";
export default function CartIcon() {
  // const [cartCount, setCartCount] = React.useState(Object.keys(JSON.parse(localStorage.getItem("savedProducts")).length);
  function displayCartCount() {
    const Count = JSON.parse(localStorage.getItem("savedProducts"));
    console.log(Object.keys(Count).length);
    setCartCount(Object.keys(Count).length);
  }
  return (
    <div className="cart-icon">
      <FaShoppingCart className="cart-icon" onMouseOver={displayCartCount} />
      {/* <span className="cart-count">{cartCount}</span> */}
    </div>
  );
}
