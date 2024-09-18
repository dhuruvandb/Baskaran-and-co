import ProductList from "../components/ProductList";
import { useSelector } from "react-redux";
import {
  selectAllProducts,
  selectAllProductsStatus,
} from "../components/store/Selectors/product-selectors";
import Loader from "../components/Loader";
import RefreshButton from "../components/RefreshButton";

export default function Product() {
  const products = useSelector(selectAllProducts);
  const status = useSelector(selectAllProductsStatus);
  let element;
  if (status === "loading") {
    element = <Loader />;
  } else if (status === "failed") {
    element = <RefreshButton />;
  } else {
    element = <ProductList product={products} />;
  }
  return <>{element}</>;
}
