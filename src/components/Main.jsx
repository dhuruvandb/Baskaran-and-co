import ProductList from "./Layouts/ProductList";
import Header from "./Layouts/Header";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";
export default function Main() {
  const { pathname } = useLocation();
  const productDetail = useSelector(
    (state) => state.productDetailsInfo.productDetails
  );

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
