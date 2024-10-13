import { useLocation } from "react-router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCategoryPage from "../pages/ProductCategory";
import { selectProductCatergories } from "./store/Selectors/product-selectors";
import { fetchProductCategories } from "./store/Thunks/products-thunk";
export default function Main() {
  const { pathname } = useLocation();
  const categories = useSelector(selectProductCatergories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductCategories());
  }, [dispatch]);
  return (
    <>
      {pathname === "/" && (
        <ProductCategoryPage productCategories={categories} />
      )}
    </>
  );
}
