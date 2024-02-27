import ProductList from "./Layouts/ProductList";
import productDetails from "./Data/productDetails.json";
import Header from "./Layouts/Header";
import { useLocation } from "react-router";
import Product from "./Layouts/Product";
import Cart from "./Layouts/Cart";
export default function Main() {
  const { pathname } = useLocation();

  // console.log(path);
  return (
    <>
      {pathname === "/" && (
        <>
          <Header />
          <ProductList product={productDetails} />
        </>
      )}
    </>
  );
}
