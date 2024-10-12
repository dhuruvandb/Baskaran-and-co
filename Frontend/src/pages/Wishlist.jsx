// src/components/Wishlist.js
import React, { useEffect, useState } from "react";
import "../styles/Wishlist.css";
import { useDispatch, useSelector } from "react-redux";
import { wishListItems } from "../components/store/Selectors/wishlist-selectors";
import { getWishList } from "../components/store/Thunks/wishlist-thunk";
import ProductList from "../components/ProductList";
import { Link } from "react-router-dom";
import { cartItems } from "../components/store/Selectors/cart-selectors";
export default function Wishlist() {
  const cart = useSelector(cartItems);
  const items = useSelector(wishListItems);
  const productSet = new Set(items.map((_) => _.name));
  const cartSet = new Set(cart.map((_) => _.name));
  let mergedProducts = [
    ...cart.filter((data) => productSet.has(data.name)),
    ...items.filter((data) => !cartSet.has(data.name)),
  ];

  return (
    <div className="wishlist">
      <h2>Your Wishlist</h2>
      {items.length === 0 ? (
        <>
          <p>Your wishlist is empty.</p>
          <Link to="/">
            <button>Shop Now</button>
          </Link>
        </>
      ) : (
        <ProductList product={mergedProducts} />
      )}
    </div>
  );
}
