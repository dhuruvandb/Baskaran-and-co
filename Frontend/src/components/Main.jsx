import { useLocation } from "react-router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCategoryPage from "../pages/ProductCategory";
import {
  selectProductCatergories,
  selectProductsStatus,
} from "./store/Selectors/product-selectors";
import { fetchProductCategories } from "./store/Thunks/products-thunk";
import Loader from "./Loader";
import RefreshButton from "./RefreshButton";
export default function Main() {
  const { pathname } = useLocation();
  const categories = useSelector(selectProductCatergories);
  const status = useSelector(selectProductsStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductCategories());
  }, [dispatch]);
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
