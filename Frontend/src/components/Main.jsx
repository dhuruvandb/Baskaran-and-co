import { useLocation } from "react-router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductCategories } from "../components/store/Thunks/products-thunk";
import ProductCategoryPage from "../pages/ProductCategory";
import { selectAllProductCatergories } from "./store/Selectors/product-selectors";
export default function Main() {
  const { pathname } = useLocation();
  const categories = useSelector(selectAllProductCatergories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductCategories());
  }, [dispatch]);
  return (
    <>
      {pathname === "/" && (
        <>
          <ProductCategoryPage productCategories={categories} />
        </>
      )}
    </>
  );
}
