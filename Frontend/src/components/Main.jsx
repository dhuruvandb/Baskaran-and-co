import { useLocation } from "react-router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCategoryPage from "../pages/ProductCategory";
import {
  selectProductCatergories,
  selectProductsStatus,
} from "./store/Selectors/product-selectors";
import { fetchProductCategories } from "./store/Thunks/products-thunk";
import checkStatus from "../helper/checkLoadingStatus";
export default function Main() {
  const { pathname } = useLocation();
  const categories = useSelector(selectProductCatergories);
  const productStatus = useSelector(selectProductsStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductCategories());
  }, [dispatch]);
  return (
    pathname === "/" &&
    checkStatus(
      <ProductCategoryPage productCategories={categories} />,
      productStatus
    )
  );
}
