import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Axios } from "../helper/fetchUrl";
import ProductList from "../components/ProductList";

export const Product = () => {
  let { Id } = useParams();
  const [Product, setProduct] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const response = await Axios("get", `/product/${Id}`);
        setProduct([response.data.result]); // Assuming response.data.result is an array or an object
      } catch (error) {
        console.error("Error fetching product data", error);
      }
    })();
  }, [Id]); // Only run this effect when Id changes
  return (
    <div>
      <ProductList product={Product} />
    </div>
  );
};
