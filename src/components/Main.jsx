import ProductList from "./Layouts/ProductList";
import productDetails from "./Data/productDetails.json";
import Header from "./Layouts/Header";
import { useLocation } from "react-router";
import { useEffect, useRef } from "react";
import { productDetailsAction } from "./store";
import { useDispatch, useSelector } from "react-redux";
export default function Main() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const productDetail = useSelector(
    (state) => state.productDetailsInfo.productDetails
  );
  const initialLoad = useRef(true);
  useEffect(() => {
    if (initialLoad.current) {
      initialLoad.current = false;
      return;
    }
    fetch("https://baskaran-and-co-default-rtdb.firebaseio.com/items.json")
      .then((res) => res.json())
      .then((data) => {
        data.forEach((element) => {
          dispatch(productDetailsAction.updateProductDetails(element));
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, [dispatch]);

  return (
    <>
      {pathname === "/" && (
        <>
          <Header />
          <ProductList product={productDetail} />
        </>
      )}
    </>
  );
}
