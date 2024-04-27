import { FaHeart } from "react-icons/fa";
import React from "react";
import { Link, useOutletContext } from "react-router-dom";

export default function FavouriteIcon(props) {
  const { storeProducts, savedProducts } = props;
  return (
    <div className="favourite">
      <FaHeart className="heart-icon" />
      <span className="favourtie-count">{savedProducts.length}</span>
    </div>
  );
}
