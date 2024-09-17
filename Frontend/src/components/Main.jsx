import { useLocation } from "react-router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductCategories } from "../components/store/Thunks/products-thunk";
import ProductCategoryPage from "../pages/ProductCategory";
import {
  selectAllProductCatergories,
  selectAllProductsStatus,
} from "./store/Selectors/product-selectors";
import Loader from "./Loader";
import RefreshButton from "./RefreshButton";
export default function Main() {
  const { pathname } = useLocation();
  const categories = useSelector(selectAllProductCatergories);
  const status = useSelector(selectAllProductsStatus);
  let element;
  if (status === "loading") {
    element = <Loader />;
  } else if (status === "failed") {
    element = <RefreshButton />;
  } else {
    element = <ProductCategoryPage productCategories={categories} />;
  }
  return <>{pathname === "/" && <>{element}</>}</>;
}
