import ProductList from "./pages/ProductList";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";
import React from "react";
export default function Main() {
  const { pathname } = useLocation();
  const productDetail = useSelector(
    (state) => state.productDetailsInfo.productDetails
  );
  return (
    <>
      {pathname === "/" && (
        <>
          <ProductList product={productDetail} />
        </>
      )}
    </>
  );
}
