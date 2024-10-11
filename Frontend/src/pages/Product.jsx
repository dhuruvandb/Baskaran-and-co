import ProductList from "../components/ProductList";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllProducts,
  selectAllProductsStatus,
} from "../components/store/Selectors/product-selectors";
import Loader from "../components/Loader";
import RefreshButton from "../components/RefreshButton";
import { useEffect } from "react";
import { getCart } from "../components/store/Thunks/cart-thunk";

import { useLoaderData, useParams } from "react-router";
import { fetchAllProducts } from "../components/store/Thunks/products-thunk";
export default function Product() {
  const { categoryName } = useParams();
  const products = useSelector(selectAllProducts);
  console.log(products);

  const status = useSelector(selectAllProductsStatus);
  const dispatch = useDispatch();
  const getAllProducts = () =>
    dispatch(
      fetchAllProducts({ categoryName, userId: "66ae15a9ac912312f503f23599e" })
    );

  useEffect(() => {
    getAllProducts();
  }, []);
  let element;
  if (status === "loading") {
    element = <Loader />;
  } else if (status === "failed") {
    element = <RefreshButton />;
  } else {
    element = <ProductList product={products} callGetCart={getAllProducts} />;
  }
  return <>{element}</>;
}
