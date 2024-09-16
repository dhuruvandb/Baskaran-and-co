import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Axios } from "../helper/fetchUrl";
import ProductList from "../components/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { selectAllProducts } from "../components/store/Selectors/product-selectors";
import {
  fetchAllProducts,
  fetchProductById,
} from "../components/store/Thunks/products-thunk";

export const Product = () => {
  const { categoryName, productId } = useParams();
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);

  useEffect(() => {
    if (productId) {
      console.log({ productId }, "called .............");
      dispatch(fetchProductById(productId));
    } else {
      console.log({ productId }, " notttttttttttttttt called .............");
      dispatch(fetchAllProducts(categoryName));
    }
  }, [categoryName, dispatch, productId]);
  console.log(products);

  return (
    <div>
      <ProductList product={products} />
    </div>
  );
};
