import React from "react";
import { useParams } from "react-router-dom";
import productDetails from "../Data/productDetails.json";
import ProductList from "./ProductList";

const Product = () => {
  let { Id } = useParams();
  return (
    <div>
      <ProductList
        product={productDetails.filter((data) => data.id === Number(Id))}
      />
    </div>
  );
};

export default Product;
