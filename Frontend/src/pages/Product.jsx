import ProductList from "../components/ProductList";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../components/store/Selectors/product-selectors";

export default function Product() {
  const products = useSelector(selectAllProducts);

  return (
    <div>
      <ProductList product={products} />
    </div>
  );
}
