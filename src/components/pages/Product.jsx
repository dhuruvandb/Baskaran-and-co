import React from "react";
import { useParams } from "react-router-dom";
import ProductList from "./ProductList";
import { useSelector } from "react-redux";

const Product = ({products}) => {
  let { Id } = useParams();
  const productDetails = useSelector(
    (state) => state.productDetailsInfo.productDetails
  );

  return (
    <div>
      <ProductList
        product={productDetails.filter((data) => data.id === Number(Id))}
      />
    </div>
  );
};

export default Product;
