import { FaShoppingCart } from "react-icons/fa";
import React from "react";
import { Link, useOutletContext } from "react-router-dom";

export default function CartIcon(props) {
  const { cartProducts } = props;
  return (
    <div className="cart-product">
      <Link to="/cart" className="cart-icon-link" state={cartProducts}>
        <FaShoppingCart className="cart-icon" />
        <span className="cart-count">{cartProducts.length}</span>
      </Link>
    </div>
  );
}
