import { useLocation } from "react-router";
import React from "react";
import { useSelector } from "react-redux";
import ProductCategoryPage from "../pages/ProductCategory";
import {
  selectProductCatergories,
  selectProductsStatus,
} from "./store/Selectors/product-selectors";
import Loader from "./Loader";
import RefreshButton from "./RefreshButton";
export default function Main() {
  const { pathname } = useLocation();
  const categories = useSelector(selectProductCatergories);
  const status = useSelector(selectProductsStatus);
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
